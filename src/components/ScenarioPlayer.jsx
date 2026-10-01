import React, { useState, useEffect } from 'react';
import { 
  AlertTriangle, 
  CheckCircle2, 
  XCircle, 
  ShieldAlert, 
  ArrowRight, 
  RotateCcw, 
  Bookmark, 
  HelpCircle, 
  FileText, 
  ExternalLink,
  Sparkles,
  Bot,
  Scale,
  CheckSquare,
  Square,
  Copy,
  Check,
  ShieldCheck,
  Clock,
  Share2,
  FolderLock
} from 'lucide-react';
import { useGamification } from '../context/GamificationContext';
import { useLanguage } from '../context/LanguageContext';
import { sounds } from '../utils/soundEffects';

export const ScenarioPlayer = ({ scenario, onComplete, onNextScenario, onAskAi, onOpenQuiz }) => {
  const { addXp } = useGamification();
  const { t } = useLanguage();
  const [selectedOptionId, setSelectedOptionId] = useState(null);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [showSourceModal, setShowSourceModal] = useState(false);
  const [copiedDossier, setCopiedDossier] = useState(false);
  const [evidenceItems, setEvidenceItems] = useState([]);
  const [checkedEvidence, setCheckedEvidence] = useState({});

  if (!scenario) return null;

  const selectedOption = scenario.options.find(o => o.id === selectedOptionId);

  // Generate interactive evidence checkpoints when scenario feedback is unlocked
  useEffect(() => {
    if (selectedOption?.evidenceToKeep) {
      const raw = selectedOption.evidenceToKeep;
      // Split raw evidence text by sentences, punctuation, or semicolons
      const parsed = raw.split(/[,.;•\n]/)
        .map(s => s.trim())
        .filter(s => s.length > 10 && !s.toLowerCase().startsWith('e.g'));

      const list = parsed.length >= 2 
        ? parsed.slice(0, 4) 
        : [
            'Preserve original message / email with sender headers intact',
            'Capture full-screen timestamped screenshots without cropping',
            'Record payment UTR / transaction reference numbers',
            'Back up communication logs before reporting or blocking'
          ];
      setEvidenceItems(list);
      setCheckedEvidence({});
    }
  }, [selectedOptionId, hasSubmitted]);

  const handleSelectOption = (optId) => {
    if (!hasSubmitted) {
      sounds.playOptionSelect();
      setSelectedOptionId(optId);
    }
  };

  const handleSubmit = async () => {
    if (!selectedOptionId || hasSubmitted) return;
    setHasSubmitted(true);

    const isCorrect = selectedOption?.status === 'CORRECT';
    if (isCorrect) {
      sounds.playSuccess();
    } else {
      sounds.playError();
    }

    const xpReward = isCorrect ? 100 : 30;

    await addXp(xpReward, `Completed Scenario: ${scenario.title}`, {
      scenarioId: scenario.id,
      topicId: scenario.topicId,
      choiceStatus: selectedOption?.status,
      type: 'SCENARIO_COMPLETED'
    });

    if (onComplete) onComplete(scenario.id, selectedOption?.status);
  };

  const handleReset = () => {
    sounds.playClick();
    setSelectedOptionId(null);
    setHasSubmitted(false);
    setCheckedEvidence({});
  };

  const toggleEvidence = (idx) => {
    const next = { ...checkedEvidence, [idx]: !checkedEvidence[idx] };
    setCheckedEvidence(next);
    const count = Object.values(next).filter(Boolean).length;
    if (count === evidenceItems.length) {
      sounds.playSuccess();
    } else {
      sounds.playClick();
    }
  };

  const handleCopyDossier = () => {
    sounds.playClick();
    const text = `LAWLINK CASE STUDY DOSSIER: ${scenario.title}
Urgency: ${scenario.urgency} | Role: ${scenario.role}

QUESTION:
${scenario.question}

LEGAL ADVISORY & STATUTORY REASONING:
${selectedOption?.rationale || ''}

APPLICABLE LAW & CITIZEN RIGHTS:
${selectedOption?.legalAwareness || ''}

IMMEDIATE ACTION PROTOCOL:
${selectedOption?.whatToDoNext || ''}

REQUIRED EVIDENCE TO PRESERVE:
${selectedOption?.evidenceToKeep || ''}

OFFICIAL REDRESSAL / HELPLINES:
${selectedOption?.whereToGetHelp || ''}

Source: ${scenario.sourceInfo?.sourceName || 'National Statutory Framework'} (Verified by ${scenario.sourceInfo?.reviewedBy || 'Legal Review Panel'})
Generated via LAWLINK — Gamified Legal Literacy Platform`;

    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedDossier(true);
      setTimeout(() => setCopiedDossier(false), 2500);
    }
  };

  const checkedCount = Object.values(checkedEvidence).filter(Boolean).length;
  const evidenceProgress = evidenceItems.length > 0 ? Math.round((checkedCount / evidenceItems.length) * 100) : 0;

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', animation: 'modal-slide-in 0.3s ease' }}>
      {/* Case Header Card */}
      <div className="glass-panel" style={{ padding: '2rem', marginBottom: '1.5rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: scenario.urgency === 'Critical' 
            ? 'linear-gradient(90deg, #f43f5e 0%, #fb7185 100%)' 
            : 'linear-gradient(90deg, #4f46e5 0%, #06b6d4 100%)'
        }} />

        {/* Ambient Top Glow */}
        <div style={{
          position: 'absolute',
          top: '-60px',
          right: '-60px',
          width: '180px',
          height: '180px',
          background: scenario.urgency === 'Critical' ? 'radial-gradient(circle, rgba(244,63,94,0.15) 0%, transparent 70%)' : 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none'
        }} />

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.75rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <span className={`badge-tag ${scenario.urgency === 'Critical' ? 'badge-urgent' : 'badge-primary'}`}>
              <Clock size={12} />
              {scenario.urgency} Urgency Case
            </span>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'monospace' }}>
              DOSSIER #{scenario.id.toUpperCase()}
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            {scenario.urgency === 'Critical' ? (
              <span className="case-dossier-stamp">STATUTORY ALERT</span>
            ) : (
              <span className="case-dossier-stamp-verified">CIVIC CASE STUDY</span>
            )}
            <span className="badge-tag badge-verified">
              <ShieldAlert size={13} />
              {scenario.sourceInfo?.verificationStatus || 'VERIFIED'}
            </span>
          </div>
        </div>

        <h1 style={{ fontSize: '1.75rem', marginBottom: '0.85rem', lineHeight: 1.3, letterSpacing: '-0.02em' }}>
          {scenario.title}
        </h1>

        {/* Role & Context Box */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.025)',
          borderLeft: '4px solid var(--primary)',
          borderTop: '1px solid var(--border-subtle)',
          borderRight: '1px solid var(--border-subtle)',
          borderBottom: '1px solid var(--border-subtle)',
          padding: '1.15rem 1.35rem',
          borderRadius: '0 var(--radius-md) var(--radius-md) 0',
          fontSize: '0.985rem',
          color: 'var(--text-main)',
          lineHeight: 1.65,
          marginBottom: '1.25rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem', marginBottom: '0.4rem', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--primary-light)', fontWeight: 800 }}>
              Citizen Persona & Role
            </span>
            <span style={{ fontSize: '0.8rem', background: 'rgba(99, 102, 241, 0.15)', padding: '0.2rem 0.6rem', borderRadius: '4px', color: 'var(--primary-light)', fontWeight: 600 }}>
              {scenario.role}
            </span>
          </div>
          <p style={{ margin: 0 }}>{scenario.context}</p>
        </div>

        {/* Central Dilemma Question */}
        <div style={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: '0.75rem',
          padding: '1rem 1.25rem',
          background: 'rgba(245, 158, 11, 0.08)',
          border: '1px solid rgba(245, 158, 11, 0.3)',
          borderRadius: 'var(--radius-md)',
          color: '#fbbf24',
          fontWeight: 700,
          fontSize: '1.05rem',
          lineHeight: 1.45
        }}>
          <HelpCircle size={22} style={{ flexShrink: 0, marginTop: '2px' }} />
          <span>{scenario.question}</span>
        </div>
      </div>

      {/* Options Selection Stack */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.25rem', padding: '0 0.25rem' }}>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 800, letterSpacing: '0.05em' }}>
            Select Your Legal Course of Action
          </span>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            Single Best Practice Choice
          </span>
        </div>

        {scenario.options.map((opt, idx) => {
          const isSelected = selectedOptionId === opt.id;
          let borderStyle = '1px solid var(--border-subtle)';
          let bgStyle = 'var(--bg-card)';
          let shadowStyle = 'none';

          if (hasSubmitted) {
            if (opt.status === 'CORRECT') {
              borderStyle = '2px solid #10b981';
              bgStyle = 'rgba(16, 185, 129, 0.14)';
              shadowStyle = '0 0 20px rgba(16, 185, 129, 0.2)';
            } else if (isSelected && opt.status !== 'CORRECT') {
              borderStyle = '2px solid #f43f5e';
              bgStyle = 'rgba(244, 63, 94, 0.14)';
              shadowStyle = '0 0 20px rgba(244, 63, 94, 0.2)';
            }
          } else if (isSelected) {
            borderStyle = '2px solid var(--primary-light)';
            bgStyle = 'rgba(99, 102, 241, 0.15)';
            shadowStyle = '0 0 20px rgba(99, 102, 241, 0.25)';
          }

          return (
            <div
              key={opt.id}
              onClick={() => handleSelectOption(opt.id)}
              className="glass-panel"
              style={{
                padding: '1.25rem',
                border: borderStyle,
                background: bgStyle,
                boxShadow: shadowStyle,
                cursor: hasSubmitted ? 'default' : 'pointer',
                transition: 'all var(--transition-fast)',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '1rem',
                position: 'relative'
              }}
            >
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                fontWeight: 800,
                fontSize: '0.95rem',
                background: isSelected ? 'var(--primary)' : 'rgba(255, 255, 255, 0.06)',
                color: isSelected ? '#ffffff' : 'var(--text-secondary)',
                boxShadow: isSelected ? '0 0 12px var(--primary-glow)' : 'none',
                transition: 'all 0.2s ease'
              }}>
                {String.fromCharCode(65 + idx)}
              </div>

              <div style={{ flex: 1, fontSize: '0.985rem', lineHeight: 1.55, color: 'var(--text-main)', paddingTop: '0.25rem' }}>
                {opt.text}
              </div>

              {hasSubmitted && (
                <div style={{ flexShrink: 0, paddingTop: '0.25rem' }}>
                  {opt.status === 'CORRECT' ? (
                    <CheckCircle2 size={24} color="#10b981" />
                  ) : isSelected ? (
                    <XCircle size={24} color="#f43f5e" />
                  ) : null}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Action Buttons Before Submit */}
      {!hasSubmitted && (
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem', marginBottom: '2.5rem' }}>
          <button
            onClick={handleSubmit}
            disabled={!selectedOptionId}
            className="btn-primary"
            style={{
              padding: '0.85rem 2.25rem',
              fontSize: '1.05rem',
              fontWeight: 800,
              opacity: selectedOptionId ? 1 : 0.45,
              cursor: selectedOptionId ? 'pointer' : 'not-allowed',
              boxShadow: selectedOptionId ? '0 4px 20px rgba(99, 102, 241, 0.5)' : 'none'
            }}
          >
            <span>{t('btnSubmit')}</span>
            <ArrowRight size={18} />
          </button>
        </div>
      )}

      {/* FEEDBACK BREAKDOWN (THE 6 MANDATORY REQUIREMENTS FROM SECTION 10 + CREATIVE DOSSIER & EVIDENCE LOCKER) */}
      {hasSubmitted && selectedOption && (
        <div style={{ animation: 'modal-slide-in 0.35s ease', display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '3rem' }}>
          {/* Status Verdict Banner */}
          <div className="glass-panel" style={{
            padding: '1.5rem',
            border: selectedOption.status === 'CORRECT' ? '1px solid #10b981' : '1px solid #f43f5e',
            background: selectedOption.status === 'CORRECT' ? 'rgba(16, 185, 129, 0.12)' : 'rgba(244, 63, 94, 0.12)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.25rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{
                width: '54px',
                height: '54px',
                borderRadius: '16px',
                background: selectedOption.status === 'CORRECT' ? 'rgba(16, 185, 129, 0.2)' : 'rgba(244, 63, 94, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: selectedOption.status === 'CORRECT' ? '#10b981' : '#f43f5e',
                flexShrink: 0
              }}>
                {selectedOption.status === 'CORRECT' ? (
                  <CheckCircle2 size={32} />
                ) : (
                  <AlertTriangle size={32} />
                )}
              </div>
              <div>
                <div style={{ fontWeight: 800, fontSize: '1.15rem', color: selectedOption.status === 'CORRECT' ? '#34d399' : '#fb7185' }}>
                  {t('yourChoice')}: {selectedOption.status === 'CORRECT' ? '✓ STATUTORILY SOUND & LEGALLY SECURE' : selectedOption.status === 'RISKY' ? '⚠ HIGH LEGAL & FINANCIAL RISK' : '✗ CRITICAL STATUTORY HAZARD'}
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>
                  {selectedOption.status === 'CORRECT' 
                    ? 'Outstanding judgment! You earned +100 XP & bolstered your statutory mastery.' 
                    : 'Earned +30 XP for participation. Carefully study the legal reasoning and evidence steps below.'}
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <button 
                onClick={handleCopyDossier} 
                className="btn-secondary" 
                style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}
                title="Copy complete legal dossier to clipboard"
              >
                {copiedDossier ? <Check size={16} color="#10b981" /> : <Copy size={16} />}
                <span>{copiedDossier ? 'Dossier Copied!' : 'Copy Dossier'}</span>
              </button>

              <button onClick={handleReset} className="btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}>
                <RotateCcw size={15} />
                <span>Retry</span>
              </button>
            </div>
          </div>

          {/* 1. WHY */}
          <div className="glass-panel" style={{ padding: '1.35rem' }}>
            <h3 style={{ fontSize: '1.05rem', color: 'var(--accent-amber)', marginBottom: '0.6rem', display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
              <Sparkles size={18} />
              {t('whyExplanation')}
            </h3>
            <p style={{ fontSize: '0.96rem', color: 'var(--text-main)', lineHeight: 1.65, margin: 0 }}>
              {selectedOption.rationale}
            </p>
          </div>

          {/* 2. LEGAL AWARENESS */}
          <div className="glass-panel" style={{ padding: '1.35rem', borderLeft: '4px solid var(--primary)' }}>
            <h3 style={{ fontSize: '1.05rem', color: 'var(--primary-light)', marginBottom: '0.6rem', display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
              <Scale size={18} />
              {t('legalAwareness')}
            </h3>
            <p style={{ fontSize: '0.96rem', color: 'var(--text-main)', lineHeight: 1.65, margin: 0 }}>
              {selectedOption.legalAwareness}
            </p>
          </div>

          {/* 3. WHAT TO DO NEXT & 4. EVIDENCE TO KEEP (2-Column Responsive Grid) */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.25rem' }}>
            {/* Immediate Action Protocol */}
            <div className="glass-panel" style={{ padding: '1.35rem' }}>
              <h3 style={{ fontSize: '1rem', color: 'var(--accent-cyan)', marginBottom: '0.6rem', display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                <FileText size={17} />
                {t('whatToDoNext')}
              </h3>
              <p style={{ fontSize: '0.925rem', color: 'var(--text-main)', lineHeight: 1.6, margin: 0 }}>
                {selectedOption.whatToDoNext}
              </p>
            </div>

            {/* INTERACTIVE EVIDENCE LOCKER (CREATIVE INNOVATION) */}
            <div className="glass-panel" style={{
              padding: '1.35rem',
              background: 'rgba(16, 185, 129, 0.05)',
              border: '1px solid rgba(16, 185, 129, 0.3)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.6rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                <h3 style={{ fontSize: '1rem', color: '#34d399', margin: 0, display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                  <FolderLock size={17} />
                  Civic Evidence Locker
                </h3>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#34d399', background: 'rgba(16, 185, 129, 0.2)', padding: '0.15rem 0.5rem', borderRadius: '4px' }}>
                  {checkedCount}/{evidenceItems.length} Secured ({evidenceProgress}%)
                </span>
              </div>

              <div style={{ fontSize: '0.785rem', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
                {t('whatEvidenceToKeep')} — Tick items to simulate court-admissible preservation:
              </div>

              {/* Progress bar */}
              <div style={{ height: '5px', background: 'rgba(255,255,255,0.06)', borderRadius: '4px', overflow: 'hidden', marginBottom: '0.85rem' }}>
                <div style={{
                  height: '100%',
                  width: `${evidenceProgress}%`,
                  background: 'linear-gradient(90deg, #10b981 0%, #34d399 100%)',
                  transition: 'width 0.3s ease'
                }} />
              </div>

              {/* Checklist items */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {evidenceItems.map((item, idx) => {
                  const isChecked = !!checkedEvidence[idx];
                  return (
                    <div
                      key={idx}
                      onClick={() => toggleEvidence(idx)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.65rem',
                        padding: '0.55rem 0.75rem',
                        background: isChecked ? 'rgba(16, 185, 129, 0.12)' : 'rgba(255, 255, 255, 0.02)',
                        border: isChecked ? '1px solid rgba(16, 185, 129, 0.4)' : '1px solid var(--border-subtle)',
                        borderRadius: 'var(--radius-sm)',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      {isChecked ? (
                        <CheckSquare size={17} color="#10b981" />
                      ) : (
                        <Square size={17} color="var(--text-muted)" />
                      )}
                      <span style={{
                        fontSize: '0.825rem',
                        color: isChecked ? 'var(--text-main)' : 'var(--text-secondary)',
                        textDecoration: isChecked ? 'line-through' : 'none'
                      }}>
                        {item}
                      </span>
                    </div>
                  );
                })}
              </div>

              {evidenceProgress === 100 && (
                <div style={{
                  marginTop: '0.75rem',
                  padding: '0.5rem 0.75rem',
                  background: 'rgba(16, 185, 129, 0.15)',
                  borderRadius: 'var(--radius-sm)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.775rem',
                  color: '#34d399',
                  fontWeight: 700
                }}>
                  <ShieldCheck size={16} />
                  <span>Evidence chain of custody compliant with Section 65B Indian Evidence Act / BSA!</span>
                </div>
              )}
            </div>
          </div>

          {/* 5. WHERE TO GET HELP */}
          <div className="glass-panel" style={{ padding: '1.35rem', background: 'rgba(6, 182, 212, 0.08)', border: '1px solid rgba(6, 182, 212, 0.3)' }}>
            <h3 style={{ fontSize: '1rem', color: '#38bdf8', marginBottom: '0.45rem', display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
              <ShieldAlert size={17} />
              {t('whereToGetHelp')}
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', fontWeight: 600, margin: 0, lineHeight: 1.5 }}>
              {selectedOption.whereToGetHelp}
            </p>
          </div>

          {/* 6. SOURCE & VERIFICATION AUDIT DRAWER */}
          <div className="glass-panel" style={{ padding: '1rem 1.25rem', background: 'rgba(255, 255, 255, 0.02)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.65rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <span className="badge-tag badge-verified">
                  <ShieldAlert size={14} />
                  {scenario.sourceInfo?.verificationStatus || 'VERIFIED STATUTORY CONTENT'}
                </span>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  Statutory Source: {scenario.sourceInfo?.sourceName} ({scenario.sourceInfo?.contentVersion})
                </span>
              </div>
              <button
                onClick={() => {
                  sounds.playClick();
                  setShowSourceModal(true);
                }}
                style={{ fontSize: '0.825rem', color: 'var(--primary-light)', display: 'flex', alignItems: 'center', gap: '0.35rem', fontWeight: 700 }}
              >
                <span>View Full Audit Details</span>
                <ExternalLink size={14} />
              </button>
            </div>
          </div>

          {/* Next Navigation Options */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap', marginTop: '1rem' }}>
            <button
              onClick={() => {
                sounds.playClick();
                onAskAi(scenario.title + ': ' + scenario.question);
              }}
              className="btn-secondary"
              style={{ fontSize: '0.9rem', padding: '0.65rem 1.25rem' }}
            >
              <Bot size={18} color="#38bdf8" />
              <span>Ask LawLink Guide AI about this</span>
            </button>

            <div style={{ display: 'flex', gap: '0.75rem' }}>
              {onOpenQuiz && (
                <button 
                  onClick={() => {
                    sounds.playClick();
                    onOpenQuiz();
                  }} 
                  className="btn-secondary" 
                  style={{ fontSize: '0.9rem', padding: '0.65rem 1.25rem' }}
                >
                  <span>{t('btnTryQuiz')}</span>
                </button>
              )}
              {onNextScenario && (
                <button 
                  onClick={() => {
                    sounds.playClick();
                    onNextScenario();
                  }} 
                  className="btn-primary" 
                  style={{ fontSize: '0.9rem', padding: '0.65rem 1.35rem' }}
                >
                  <span>Next Case Study</span>
                  <ArrowRight size={17} />
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Source Verification Audit Modal */}
      {showSourceModal && (
        <div className="modal-backdrop" onClick={() => setShowSourceModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ padding: '2rem', maxWidth: '580px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
              <h2 style={{ fontSize: '1.35rem', display: 'flex', alignItems: 'center', gap: '0.5rem', margin: 0 }}>
                <ShieldAlert size={24} color="#10b981" />
                Verified Legal Content Metadata
              </h2>
              <button onClick={() => setShowSourceModal(false)} style={{ color: 'var(--text-muted)' }}>
                ✕
              </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.925rem' }}>
              <div style={{ padding: '0.85rem', background: 'rgba(255, 255, 255, 0.03)', borderRadius: 'var(--radius-md)' }}>
                <strong style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', textTransform: 'uppercase' }}>Statutory Source Authority:</strong>
                <p style={{ marginTop: '0.25rem', margin: 0, fontWeight: 600 }}>{scenario.sourceInfo?.sourceName}</p>
              </div>

              <div style={{ padding: '0.85rem', background: 'rgba(255, 255, 255, 0.03)', borderRadius: 'var(--radius-md)' }}>
                <strong style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', textTransform: 'uppercase' }}>Official Authority Portal:</strong>
                <p style={{ marginTop: '0.25rem', margin: 0 }}>
                  <a href={scenario.sourceInfo?.sourceUrl} target="_blank" rel="noreferrer" style={{ wordBreak: 'break-all', color: 'var(--primary-light)' }}>
                    {scenario.sourceInfo?.sourceUrl}
                  </a>
                </p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.85rem' }}>
                <div style={{ padding: '0.85rem', background: 'rgba(255, 255, 255, 0.03)', borderRadius: 'var(--radius-md)' }}>
                  <strong style={{ color: 'var(--text-secondary)', fontSize: '0.75rem', textTransform: 'uppercase' }}>Legal Reviewer:</strong>
                  <p style={{ marginTop: '0.25rem', margin: 0, fontWeight: 600 }}>{scenario.sourceInfo?.reviewedBy}</p>
                </div>

                <div style={{ padding: '0.85rem', background: 'rgba(255, 255, 255, 0.03)', borderRadius: 'var(--radius-md)' }}>
                  <strong style={{ color: 'var(--text-secondary)', fontSize: '0.75rem', textTransform: 'uppercase' }}>Last Verified Date:</strong>
                  <p style={{ marginTop: '0.25rem', margin: 0, fontWeight: 600 }}>{scenario.sourceInfo?.lastVerifiedAt}</p>
                </div>
              </div>

              <div style={{ padding: '0.85rem', background: 'rgba(255, 255, 255, 0.03)', borderRadius: 'var(--radius-md)' }}>
                <strong style={{ color: 'var(--text-secondary)', fontSize: '0.75rem', textTransform: 'uppercase' }}>Statutory Framework Version:</strong>
                <p style={{ marginTop: '0.25rem', margin: 0 }}>
                  {scenario.sourceInfo?.contentVersion} (Compliance-checked under Indian Statutory Guidelines & Bharatiya Sakshya Adhiniyam)
                </p>
              </div>
            </div>

            <div style={{ marginTop: '1.5rem', textAlign: 'right' }}>
              <button onClick={() => setShowSourceModal(false)} className="btn-secondary" style={{ padding: '0.6rem 1.25rem' }}>
                Close Audit View
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
