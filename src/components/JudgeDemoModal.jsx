import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  ShieldAlert, 
  Bot, 
  Award, 
  MapPin, 
  Scale, 
  X,
  Play,
  RotateCcw,
  Zap,
  Key
} from 'lucide-react';
import { useGamification } from '../context/GamificationContext';
import { useAuth, DEMO_PROFILES } from '../context/AuthContext';
import { sounds } from '../utils/soundEffects';

export const JudgeDemoModal = ({ isOpen, onClose, onLaunchStepView }) => {
  const { addXp, triggerCelebration } = useGamification();
  const { user, switchDemoAccount } = useAuth();
  const [currentStep, setCurrentStep] = useState(1);
  const [simulatedChoice, setSimulatedChoice] = useState(null);

  if (!isOpen) return null;

  const totalSteps = 10;

  const STEPS = [
    {
      step: 1,
      title: 'Problem Statement & Platform Philosophy',
      tagline: 'EXPERIENCE → UNDERSTAND → PRACTICE → ACT → GET HELP',
      description: 'Traditional legal websites simply present dense, intimidating text that users immediately abandon. LawLink gamifies real-world situations, provides instant grounding, and equips citizens with concrete evidence-gathering and reporting actions.',
      highlight: 'Social Impact: Solving the digital financial fraud epidemic and legal illiteracy through interactive decision simulations.'
    },
    {
      step: 2,
      title: 'Real-Life Scenario: Urgent Bank KYC Phishing Alert',
      tagline: 'Hero Feature: What Would You Do?',
      description: 'Learner Rohan receives an SMS claiming his SBI NetBanking will be suspended in 2 hours unless he clicks a short link. After clicking, an OTP for ₹48,000 arrives. What is the correct legal choice?',
      interactiveType: 'CHOICE_SIMULATION'
    },
    {
      step: 3,
      title: 'Immediate Feedback & Statutory Rationale',
      tagline: 'The 6-Part Structured Legal Breakdown',
      description: 'Notice that LawLink immediately displays: YOUR CHOICE (Safe/Risky), WHY IT MATTERS (detailed rationale), LEGAL AWARENESS (citing IT Act Sec 66D & RBI Circular 2017), WHAT TO DO NEXT, WHAT EVIDENCE TO KEEP, and WHERE TO GET HELP.',
      highlight: 'Key Statutory Rule: RBI Zero Liability applies when reported within 3 days without voluntary credential sharing.'
    },
    {
      step: 4,
      title: 'AI Consultation with LawLink Guide',
      tagline: 'Powered by Google Gemini 2.5 Flash',
      description: 'The user asks: "I got a suspicious UPI message asking me to share an OTP." LawLink Guide activates zero-hallucination grounding against curated Indian statutory acts and provides structured educational advice with mandatory safety notes.',
      highlight: 'Guaranteed Grounding: AI is strictly prohibited from inventing sections, case laws, or phone numbers.'
    },
    {
      step: 5,
      title: 'Source Verification & Trust Layer',
      tagline: 'Making LawLink Visibly Different from Generic AI Chatbots',
      description: 'Every single scenario, law, and resource is backed by a verifiable sourceName, official URL, lastVerifiedAt date, and legal practitioner review stamp (Adv. S. Sharma, Cyber Law Specialist).',
      highlight: 'Audit-ready transparency ensures citizen trust.'
    },
    {
      step: 6,
      title: 'Interactive Knowledge Check Quiz',
      tagline: 'Reinforcing Statutory Understanding',
      description: 'Quick check: What is the official National Cyber Crime Helpline number in India for Golden Hour reporting? Option: 1930. Immediate explanation with I4C framework citation.',
      interactiveType: 'QUIZ_SIMULATION'
    },
    {
      step: 7,
      title: 'Gamification Engine & Badge Unlock',
      tagline: 'Real XP & Multi-Device Cloud Sync',
      description: 'Completing the scenario and quiz awards +150 XP directly to the user\'s Firestore document `progress/{uid}`. This unlocks the "Cyber Guardian" badge and advances the user towards Level 2 — Informed.',
      interactiveType: 'CELEBRATION_TRIGGER'
    },
    {
      step: 8,
      title: 'Find Help Near Me: Google Maps Platform',
      tagline: 'Places API (New) & Geolocation Navigation',
      description: 'The user searches "GRIET Hyderabad" via Google Places autocomplete. LawLink displays nearby Cyber Crime Police Stations, District Legal Services Authorities (DLSA), and Sakhi One Stop Centres with live distances and "Open in Google Maps" turn-by-turn navigation.',
      highlight: 'Seamless transition from learning to taking real-world civic action.'
    },
    {
      step: 9,
      title: 'Account Isolation & Real-Time Sync Proof',
      tagline: 'Multi-Device Cross-Tab Synchronization',
      description: 'Any action completed on Device A immediately reflects on Device B via Firestore real-time listeners (`onSnapshot`). When User B logs in, their profile is completely isolated with 0 XP, guaranteeing zero data leakage.',
      highlight: 'Protected by production-ready Firestore Security Rules.'
    },
    {
      step: 10,
      title: 'Judge Evaluation Summary',
      tagline: 'Full-Stack Google Technologies in Harmony',
      description: 'Firebase Auth (Persistent Sessions & UID Isolation) + Cloud Firestore (Primary Database) + Google Maps Platform (Places Autocomplete & Nearby Legal Aid) + Google Gemini AI (Grounded LawLink Guide). Built for maximum social impact and competition readiness!',
      highlight: 'Thank you for evaluating LawLink at GDG on Campus!'
    }
  ];

  const currentStepData = STEPS[currentStep - 1];

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      onClose();
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="modal-backdrop" onClick={onClose} style={{ zIndex: 1000 }}>
      <div 
        className="modal-content" 
        onClick={e => e.stopPropagation()} 
        style={{ maxWidth: '780px', padding: '2rem', position: 'relative' }}
      >
        {/* Top Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span className="btn-demo-tour" style={{ padding: '0.25rem 0.75rem', fontSize: '0.75rem' }}>
              ⚡ 3-Minute Judge Demo
            </span>
            <span style={{ fontSize: '0.825rem', color: 'var(--text-muted)' }}>
              Step {currentStep} of {totalSteps}
            </span>
          </div>

          <button onClick={onClose} style={{ color: 'var(--text-muted)', padding: '0.25rem' }}>
            <X size={20} />
          </button>
        </div>

        {/* Step Progress Bar */}
        <div className="progress-bar-track" style={{ marginBottom: '1.5rem', height: '6px' }}>
          <div 
            className="progress-bar-fill" 
            style={{ width: `${(currentStep / totalSteps) * 100}%`, background: 'linear-gradient(90deg, #f59e0b 0%, #06b6d4 100%)' }} 
          />
        </div>

        {/* Step Content */}
        <div style={{ minHeight: '280px', marginBottom: '1.5rem' }}>
          <div style={{ fontSize: '0.8rem', color: 'var(--accent-amber)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.35rem' }}>
            {currentStepData.tagline}
          </div>

          <h2 style={{ fontSize: '1.45rem', marginBottom: '0.75rem', color: 'var(--text-main)' }}>
            {currentStepData.title}
          </h2>

          <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
            {currentStepData.description}
          </p>

          {/* Interactive Simulation for Step 2 */}
          {currentStepData.interactiveType === 'CHOICE_SIMULATION' && (
            <div style={{ padding: '1rem', background: 'rgba(255, 255, 255, 0.03)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
              <div style={{ fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.6rem', color: '#f59e0b' }}>
                Simulate Judge Decision:
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <button
                  onClick={() => setSimulatedChoice('correct')}
                  style={{
                    padding: '0.65rem 0.85rem',
                    textAlign: 'left',
                    borderRadius: 'var(--radius-sm)',
                    background: simulatedChoice === 'correct' ? 'rgba(16, 185, 129, 0.2)' : 'rgba(255, 255, 255, 0.04)',
                    border: simulatedChoice === 'correct' ? '1px solid #10b981' : '1px solid var(--border-subtle)',
                    color: 'var(--text-main)',
                    fontSize: '0.85rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <span>Option B: Do NOT enter OTP. Call official bank helpline & report phishing.</span>
                  {simulatedChoice === 'correct' && <CheckCircle2 size={16} color="#10b981" />}
                </button>
                <button
                  onClick={() => setSimulatedChoice('wrong')}
                  style={{
                    padding: '0.65rem 0.85rem',
                    textAlign: 'left',
                    borderRadius: 'var(--radius-sm)',
                    background: simulatedChoice === 'wrong' ? 'rgba(244, 63, 94, 0.2)' : 'rgba(255, 255, 255, 0.04)',
                    border: simulatedChoice === 'wrong' ? '1px solid #f43f5e' : '1px solid var(--border-subtle)',
                    color: 'var(--text-main)',
                    fontSize: '0.85rem'
                  }}
                >
                  <span>Option A: Enter OTP quickly because bank stated 2-hour deadline.</span>
                </button>
              </div>

              {simulatedChoice && (
                <div style={{ marginTop: '0.75rem', fontSize: '0.8rem', color: simulatedChoice === 'correct' ? '#34d399' : '#fb7185' }}>
                  {simulatedChoice === 'correct' 
                    ? '✓ Correct choice! Cites IT Act Section 66D and triggers Golden Hour protection.' 
                    : '✗ Critical risk: OTP sharing authorizes fraudulent withdrawal of ₹48,000.'}
                </div>
              )}
            </div>
          )}

          {/* Interactive Celebration for Step 7 */}
          {currentStepData.interactiveType === 'CELEBRATION_TRIGGER' && (
            <div style={{ padding: '1.25rem', background: 'rgba(99, 102, 241, 0.1)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-highlight)', textAlign: 'center' }}>
              <button
                onClick={() => {
                  triggerCelebration();
                  addXp(150, 'Judge Demo: Unlocked Cyber Guardian Badge');
                }}
                className="btn-primary"
                style={{ fontSize: '0.9rem' }}
              >
                <Sparkles size={16} />
                <span>Trigger Live Confetti & Award +150 XP</span>
              </button>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
                XP updates immediately in Firestore and syncs across all open tabs!
              </div>
            </div>
          )}

          {/* Interactive Account Isolation & Credentials for Step 9 */}
          {currentStepData.step === 9 && (
            <div style={{
              padding: '1rem',
              background: 'rgba(255, 255, 255, 0.03)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-medium)',
              marginBottom: '1rem'
            }}>
              <div style={{ fontSize: '0.75rem', color: '#fbbf24', fontWeight: 800, textTransform: 'uppercase', marginBottom: '0.6rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                <Key size={14} />
                <span>Verified Test Credentials (Click to Switch):</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                {DEMO_PROFILES.map((dp) => {
                  const isActive = user?.uid === dp.uid;
                  return (
                    <div
                      key={dp.uid}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '0.55rem 0.75rem',
                        background: isActive ? 'rgba(99, 102, 241, 0.14)' : 'rgba(255, 255, 255, 0.02)',
                        borderRadius: 'var(--radius-sm)',
                        border: isActive ? '1px solid var(--primary-light)' : '1px solid var(--border-subtle)',
                        fontSize: '0.775rem'
                      }}
                    >
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                          <span style={{ fontWeight: 700, color: 'var(--text-main)' }}>{dp.displayName}</span>
                          <span className={`badge-tag ${dp.role === 'admin' ? 'badge-urgent' : 'badge-primary'}`} style={{ fontSize: '0.6rem', padding: '0.05rem 0.35rem' }}>
                            {dp.roleTitle || dp.role}
                          </span>
                        </div>
                        <div style={{ color: 'var(--primary-light)', fontSize: '0.725rem', marginTop: '0.15rem' }}>
                          {dp.email} • Password: <strong style={{ color: '#fbbf24' }}>{dp.password || 'Citizen@123'}</strong>
                        </div>
                      </div>
                      <button
                        onClick={() => {
                          sounds.playSuccess();
                          switchDemoAccount(dp.uid);
                        }}
                        style={{
                          padding: '0.25rem 0.65rem',
                          fontSize: '0.725rem',
                          background: isActive ? '#10b981' : 'var(--primary)',
                          color: '#ffffff',
                          borderRadius: '4px',
                          fontWeight: 700,
                          cursor: 'pointer'
                        }}
                      >
                        {isActive ? '✓ Active' : 'Switch'}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {currentStepData.highlight && (
            <div style={{
              padding: '0.85rem 1rem',
              background: 'rgba(255, 255, 255, 0.03)',
              borderLeft: '3px solid var(--primary-light)',
              borderRadius: '0 var(--radius-md) var(--radius-md) 0',
              fontSize: '0.85rem',
              color: 'var(--text-main)'
            }}>
              <strong>Architecture Insight:</strong> {currentStepData.highlight}
            </div>
          )}
        </div>

        {/* Footer Navigation */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--border-subtle)', paddingTop: '1.25rem' }}>
          <button
            onClick={handleBack}
            disabled={currentStep === 1}
            className="btn-secondary"
            style={{ opacity: currentStep === 1 ? 0.4 : 1 }}
          >
            <ArrowLeft size={16} />
            <span>Previous</span>
          </button>

          <div style={{ display: 'flex', gap: '0.5rem' }}>
            {currentStep === 2 && (
              <button 
                onClick={() => {
                  onClose();
                  onLaunchStepView('scenario');
                }} 
                className="btn-secondary" 
                style={{ fontSize: '0.8rem' }}
              >
                Launch Live Scenario
              </button>
            )}
            {currentStep === 4 && (
              <button 
                onClick={() => {
                  onClose();
                  onLaunchStepView('ai');
                }} 
                className="btn-secondary" 
                style={{ fontSize: '0.8rem' }}
              >
                Open LawLink Guide AI
              </button>
            )}
            {currentStep === 8 && (
              <button 
                onClick={() => {
                  onClose();
                  onLaunchStepView('maps');
                }} 
                className="btn-secondary" 
                style={{ fontSize: '0.8rem' }}
              >
                Open Google Maps
              </button>
            )}

            <button onClick={handleNext} className="btn-primary">
              <span>{currentStep === totalSteps ? 'Finish Demo Tour' : 'Next Step'}</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
