import React, { useState, useEffect, useRef } from 'react';
import { 
  Bot, 
  Send, 
  Mic, 
  MicOff, 
  Sparkles, 
  ShieldCheck, 
  AlertCircle, 
  HelpCircle, 
  ExternalLink,
  RotateCcw,
  CheckCircle2,
  FileText,
  Copy,
  Check,
  Zap,
  Volume2
} from 'lucide-react';
import { askLawLinkGuide } from '../services/geminiService';
import { useLanguage } from '../context/LanguageContext';
import { sounds } from '../utils/soundEffects';

export const LawLinkGuideAI = ({ initialPrompt = '' }) => {
  const { t } = useLanguage();
  const [query, setQuery] = useState(initialPrompt);
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [isListening, setIsListening] = useState(false);
  const [speechSupported, setSpeechSupported] = useState(true);
  const [copiedGuidance, setCopiedGuidance] = useState(false);

  const recognitionRef = useRef(null);

  // Initialize Speech Recognition
  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = 'en-IN';

      recognition.onstart = () => setIsListening(true);
      recognition.onend = () => setIsListening(false);
      recognition.onerror = (e) => {
        console.warn('Speech recognition error:', e.error);
        setIsListening(false);
      };
      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        if (transcript) {
          setQuery(prev => prev ? `${prev} ${transcript}` : transcript);
        }
      };

      recognitionRef.current = recognition;
    } else {
      setSpeechSupported(false);
    }
  }, []);

  const toggleListening = () => {
    if (!speechSupported) {
      alert('Speech recognition is not supported in this browser. Please use Chrome or Edge, or type your query.');
      return;
    }

    sounds.playClick();
    if (isListening) {
      recognitionRef.current?.stop();
    } else {
      recognitionRef.current?.start();
    }
  };

  const handleAsk = async (textToAsk = null) => {
    const promptToSend = textToAsk || query;
    if (!promptToSend.trim() || isLoading) return;

    sounds.playClick();
    setIsLoading(true);
    setErrorMsg(null);

    try {
      const result = await askLawLinkGuide(promptToSend);
      setResponse(result);
      sounds.playSuccess();
    } catch (err) {
      sounds.playError();
      setErrorMsg(err.message || 'Unable to connect to LawLink Guide. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopyGuidance = () => {
    if (!response) return;
    sounds.playClick();
    const text = `LAWLINK STATUTORY AI GUIDANCE
Query: "${query}"

SITUATION:
${response.situation}

IMMEDIATE ACTION PROTOCOL:
${response.immediateAction}

LEGAL AWARENESS & RELEVANT CONCEPT:
${response.legalAwareness}

EVIDENCE TO PRESERVE:
${response.evidence}

WHERE TO SEEK OFFICIAL HELP:
${response.whereToSeekHelp}

SAFETY NOTE:
${response.safetyNote}

Verified Statutory Knowledge Source: ${response.groundedSource}
Generated via LAWLINK — Gamified Legal Literacy Platform`;

    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedGuidance(true);
      setTimeout(() => setCopiedGuidance(false), 2500);
    }
  };

  const QUICK_PROMPTS = [
    'I got an SMS asking for OTP to stop my bank account from being suspended.',
    'A buyer on OLX asked me to scan a QR code and enter my UPI PIN to receive money.',
    'A restaurant added a 10% compulsory service charge to my bill and refuses to remove it.',
    'Traffic police stopped me and said DigiLocker driving licence is not valid.',
    'A digital loan app has accessed my contacts and is threatening to send morphed photos.',
    'My company is withholding my original degree certificate and demanding a 2-year bond payout.'
  ];

  return (
    <div style={{ maxWidth: '960px', margin: '0 auto', animation: 'modal-slide-in 0.3s ease' }}>
      {/* Header Banner */}
      <div className="glass-panel" style={{ padding: '1.75rem', marginBottom: '1.5rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'linear-gradient(90deg, #06b6d4 0%, #6366f1 100%)'
        }} />

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap', marginBottom: '0.75rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{
              width: '46px',
              height: '46px',
              borderRadius: '14px',
              background: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 16px rgba(6, 182, 212, 0.3)'
            }}>
              <Bot size={26} color="#ffffff" />
            </div>
            <div>
              <h1 style={{ fontSize: '1.5rem', lineHeight: 1.2 }}>
                LawLink Guide AI
              </h1>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                Powered by Google Gemini & Curated Statutory Knowledge Base
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span className="badge-tag badge-verified">
              <ShieldCheck size={14} />
              Zero-Hallucination Grounding
            </span>
          </div>
        </div>

        {/* Safety Disclaimer Banner (Mandatory Requirement) */}
        <div style={{
          padding: '0.75rem 1rem',
          background: 'rgba(245, 158, 11, 0.08)',
          border: '1px solid rgba(245, 158, 11, 0.25)',
          borderRadius: 'var(--radius-md)',
          fontSize: '0.825rem',
          color: '#fbbf24',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}>
          <AlertCircle size={16} flexShrink={0} />
          <span>
            <strong>Legal Safety Notice:</strong> {t('educationalDisclaimer')}
          </span>
        </div>
      </div>

      {/* Query Input Card */}
      <div className="glass-panel" style={{ padding: '1.5rem', marginBottom: '1.5rem' }}>
        <div style={{ position: 'relative', marginBottom: '1rem' }}>
          <textarea
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Describe your situation in simple words (e.g. 'I received a message asking for OTP for a courier delivery' or 'Can police seize my phone at a checkpoint?')..."
            rows={3}
            style={{
              width: '100%',
              padding: '1rem 4rem 1rem 1rem',
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid var(--border-medium)',
              borderRadius: 'var(--radius-lg)',
              color: 'var(--text-main)',
              fontSize: '0.95rem',
              lineHeight: 1.5,
              resize: 'vertical',
              outline: 'none',
              transition: 'border-color var(--transition-fast)'
            }}
          />

          {/* Voice Input Button */}
          <button
            type="button"
            onClick={toggleListening}
            style={{
              position: 'absolute',
              right: '12px',
              bottom: '16px',
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              background: isListening ? '#f43f5e' : 'rgba(255, 255, 255, 0.08)',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: isListening ? '0 0 14px rgba(244, 63, 94, 0.6)' : 'none',
              transition: 'all var(--transition-fast)'
            }}
            title={isListening ? 'Listening... click to stop' : 'Click to speak via voice input'}
            aria-label="Microphone for speech input"
          >
            {isListening ? <MicOff size={18} /> : <Mic size={18} />}
          </button>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem' }}>
          <div style={{ fontSize: '0.775rem', color: isListening ? '#f43f5e' : 'var(--text-muted)' }}>
            {isListening ? '🎙️ Listening to your voice... Speak clearly' : 'Type or use microphone for speech recognition'}
          </div>

          <button
            onClick={() => handleAsk()}
            disabled={isLoading || !query.trim()}
            className="btn-primary"
            style={{
              padding: '0.65rem 1.6rem',
              opacity: isLoading || !query.trim() ? 0.6 : 1,
              cursor: isLoading || !query.trim() ? 'not-allowed' : 'pointer'
            }}
          >
            {isLoading ? (
              <>
                <Sparkles size={16} className="animate-spin" />
                <span>Consulting Knowledge Base...</span>
              </>
            ) : (
              <>
                <span>Get Guidance</span>
                <Send size={16} />
              </>
            )}
          </button>
        </div>

        {/* Quick Situation Chips */}
        <div style={{ marginTop: '1.25rem', paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)' }}>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700, marginBottom: '0.6rem' }}>
            Or try common situations:
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {QUICK_PROMPTS.map((p, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setQuery(p);
                  handleAsk(p);
                }}
                style={{
                  padding: '0.4rem 0.75rem',
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-full)',
                  color: 'var(--text-secondary)',
                  fontSize: '0.775rem',
                  textAlign: 'left',
                  transition: 'all var(--transition-fast)'
                }}
                className="glass-panel"
              >
                {p}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Error Notice */}
      {errorMsg && (
        <div className="glass-panel" style={{ padding: '1rem', border: '1px solid #f43f5e', background: 'rgba(244, 63, 94, 0.1)', marginBottom: '1.5rem', color: '#fb7185' }}>
          {errorMsg}
        </div>
      )}

      {/* STRUCTURED RESPONSE (THE 6 MANDATORY SECTIONS FROM SECTION 7) */}
      {response && (
        <div style={{ animation: 'modal-slide-in 0.35s ease', display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '3rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 0.5rem', flexWrap: 'wrap', gap: '0.5rem' }}>
            <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
              Grounded Legal Literacy Synthesis:
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
              <button
                onClick={handleCopyGuidance}
                className="btn-secondary"
                style={{ padding: '0.35rem 0.75rem', fontSize: '0.785rem' }}
                title="Copy entire AI statutory breakdown to clipboard"
              >
                {copiedGuidance ? <Check size={14} color="#10b981" /> : <Copy size={14} />}
                <span>{copiedGuidance ? 'Guidance Copied!' : 'Copy Guidance'}</span>
              </button>
              <span className="badge-tag badge-verified">
                Verified Source: {response.groundedSource}
              </span>
            </div>
          </div>

          {/* 1. SITUATION */}
          <div className="glass-panel" style={{ padding: '1.25rem', borderLeft: '4px solid #f59e0b' }}>
            <h3 style={{ fontSize: '0.925rem', color: '#f59e0b', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.4rem' }}>
              SITUATION (What this may indicate)
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', lineHeight: 1.6 }}>
              {response.situation}
            </p>
          </div>

          {/* 2. IMMEDIATE ACTION */}
          <div className="glass-panel" style={{ padding: '1.25rem', borderLeft: '4px solid #f43f5e' }}>
            <h3 style={{ fontSize: '0.925rem', color: '#fb7185', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.4rem' }}>
              IMMEDIATE ACTION (What you should consider doing now)
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', lineHeight: 1.6 }}>
              {response.immediateAction}
            </p>
          </div>

          {/* 3. LEGAL AWARENESS */}
          <div className="glass-panel" style={{ padding: '1.25rem', borderLeft: '4px solid #6366f1' }}>
            <h3 style={{ fontSize: '0.925rem', color: '#818cf8', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.4rem' }}>
              LEGAL AWARENESS (Relevant general legal concept)
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', lineHeight: 1.6 }}>
              {response.legalAwareness}
            </p>
          </div>

          {/* 4. EVIDENCE TO RETAIN */}
          <div className="glass-panel" style={{ padding: '1.25rem', borderLeft: '4px solid #10b981' }}>
            <h3 style={{ fontSize: '0.925rem', color: '#34d399', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.4rem' }}>
              EVIDENCE (What information is useful to retain)
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', lineHeight: 1.6 }}>
              {response.evidence}
            </p>
          </div>

          {/* 5. WHERE TO SEEK HELP */}
          <div className="glass-panel" style={{ padding: '1.25rem', borderLeft: '4px solid #06b6d4', background: 'rgba(6, 182, 212, 0.06)' }}>
            <h3 style={{ fontSize: '0.925rem', color: '#38bdf8', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.4rem' }}>
              WHERE TO SEEK HELP (Relevant verified resource)
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', fontWeight: 600, lineHeight: 1.6 }}>
              {response.whereToSeekHelp}
            </p>
          </div>

          {/* 6. SAFETY NOTE */}
          <div style={{
            padding: '0.85rem 1rem',
            background: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-md)',
            fontSize: '0.825rem',
            color: 'var(--text-muted)'
          }}>
            <strong>SAFETY NOTE:</strong> {response.safetyNote}
          </div>
        </div>
      )}
    </div>
  );
};
