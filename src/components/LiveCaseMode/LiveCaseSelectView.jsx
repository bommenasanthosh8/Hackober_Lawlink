// LAWLINK — Live Case Mode Selection View
// Catalog of real-time voice-driven legal confrontation missions

import React, { useState } from 'react';
import { 
  PhoneCall, 
  Sparkles, 
  Zap, 
  ShieldCheck, 
  Award, 
  Clock, 
  ChevronRight, 
  Lock, 
  Globe, 
  Play, 
  CheckCircle2,
  Volume2,
  AlertTriangle
} from 'lucide-react';
import { LIVE_CASES } from '../../data/liveCasesData';
import { DemoCheckModal } from './DemoCheckModal';
import { useGamification } from '../../context/GamificationContext';
import { useLanguage } from '../../context/LanguageContext';
import { sounds } from '../../utils/soundEffects';

export const LiveCaseSelectView = ({ onSelectCase }) => {
  const { progress } = useGamification();
  const { language, changeLanguage, t } = useLanguage();
  const [isDemoCheckOpen, setIsDemoCheckOpen] = useState(false);
  const [filterDifficulty, setFilterDifficulty] = useState('All');

  const userLevel = progress?.level || 1;
  const completedLiveCases = progress?.completedLiveCases || [];

  const filteredCases = filterDifficulty === 'All'
    ? LIVE_CASES
    : LIVE_CASES.filter(c => c.difficulty.toLowerCase().includes(filterDifficulty.toLowerCase()));

  return (
    <div style={{ maxWidth: '1240px', margin: '0 auto', paddingBottom: '3rem', animation: 'modal-slide-in 0.3s ease' }}>
      {/* Hero Banner */}
      <div style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #312e81 100%)',
        borderRadius: '24px',
        padding: '2.5rem 2rem',
        color: '#ffffff',
        marginBottom: '2rem',
        boxShadow: '0 20px 40px -15px rgba(15, 23, 42, 0.4)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Glow decoration */}
        <div style={{
          position: 'absolute',
          top: '-40px',
          right: '-40px',
          width: '240px',
          height: '240px',
          borderRadius: '50%',
          background: 'rgba(6, 182, 212, 0.25)',
          filter: 'blur(50px)'
        }} />

        <div style={{ maxWidth: '780px', position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              background: 'rgba(245, 158, 11, 0.2)',
              border: '1px solid rgba(245, 158, 11, 0.4)',
              color: '#fcd34d',
              padding: '0.2rem 0.65rem',
              borderRadius: '999px',
              fontSize: '0.75rem',
              fontWeight: 800,
              textTransform: 'uppercase'
            }}>
              <Zap size={14} /> Flagship Feature • Powered by Gemini Live API
            </span>
          </div>

          <h1 style={{
            fontSize: '2.2rem',
            fontWeight: 900,
            margin: '0 0 0.75rem 0',
            fontFamily: 'var(--font-heading)',
            letterSpacing: '-0.02em',
            lineHeight: 1.2
          }}>
            Live Case Mode: AI Voice Confrontations
          </h1>

          <p style={{
            fontSize: '1rem',
            color: '#cbd5e1',
            lineHeight: 1.6,
            margin: '0 0 1.5rem 0'
          }}>
            Don't just read legal scenarios — <strong>live them out loud</strong>. Converse in real time with AI scammers, dismissive store managers, and traffic cops. Assert your statutory rights, avoid deceptive traps, and experience realistic legal problem-solving.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
            <button
              onClick={() => {
                sounds.playClick();
                setIsDemoCheckOpen(true);
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'rgba(255, 255, 255, 0.12)',
                border: '1px solid rgba(255, 255, 255, 0.25)',
                color: '#ffffff',
                padding: '0.65rem 1.25rem',
                borderRadius: '12px',
                fontWeight: 700,
                fontSize: '0.875rem',
                cursor: 'pointer',
                backdropFilter: 'blur(8px)'
              }}
            >
              <Zap size={16} color="#38bdf8" /> Pre-Flight Demo Check
            </button>

            {/* Language Selector */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              background: 'rgba(255, 255, 255, 0.08)',
              padding: '0.4rem 0.85rem',
              borderRadius: '12px',
              border: '1px solid rgba(255, 255, 255, 0.15)'
            }}>
              <Globe size={16} color="#94a3b8" />
              <span style={{ fontSize: '0.8rem', color: '#cbd5e1', fontWeight: 600 }}>Language:</span>
              <select
                value={language}
                onChange={(e) => {
                  changeLanguage(e.target.value);
                  sounds.playOptionSelect();
                }}
                style={{
                  background: 'transparent',
                  color: '#ffffff',
                  border: 'none',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  outline: 'none'
                }}
              >
                <option value="en" style={{ color: '#0f172a' }}>English (Hinglish)</option>
                <option value="hi" style={{ color: '#0f172a' }}>हिंदी (Hindi)</option>
                <option value="te" style={{ color: '#0f172a' }}>తెలుగు (Telugu)</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Case Catalog Filters */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '1rem',
        marginBottom: '1.5rem'
      }}>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          {['All', 'Flagship Demo', 'Intermediate', 'Advanced'].map(diff => (
            <button
              key={diff}
              onClick={() => {
                setFilterDifficulty(diff);
                sounds.playClick();
              }}
              style={{
                padding: '0.4rem 0.85rem',
                borderRadius: '8px',
                fontSize: '0.8rem',
                fontWeight: 700,
                border: 'none',
                cursor: 'pointer',
                background: filterDifficulty === diff ? '#4f46e5' : '#f1f5f9',
                color: filterDifficulty === diff ? '#ffffff' : '#475569',
                transition: 'all 0.2s ease'
              }}
            >
              {diff}
            </button>
          ))}
        </div>

        <div style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 600 }}>
          {completedLiveCases.length} of {LIVE_CASES.length} Cases Completed
        </div>
      </div>

      {/* Case Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
        gap: '1.5rem'
      }}>
        {filteredCases.map(c => {
          const isLocked = userLevel < c.minLevelRequired;
          const isCompleted = completedLiveCases.includes(c.id);

          return (
            <div
              key={c.id}
              style={{
                background: '#ffffff',
                borderRadius: '20px',
                border: c.isDemoFlagship ? '2px solid #f59e0b' : '1px solid #e2e8f0',
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: c.isDemoFlagship 
                  ? '0 12px 30px rgba(245, 158, 11, 0.15)' 
                  : '0 4px 14px rgba(0,0,0,0.04)',
                position: 'relative',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease'
              }}
            >
              {/* Flagship Ribbon */}
              {c.isDemoFlagship && (
                <div style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  background: 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)',
                  color: '#ffffff',
                  fontSize: '0.7rem',
                  fontWeight: 800,
                  padding: '0.2rem 0.6rem',
                  borderRadius: '999px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.25rem'
                }}>
                  <Sparkles size={12} /> RECOMMENDED DEMO
                </div>
              )}

              <div>
                {/* Domain & Topic Tag */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                  <span style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: '#4f46e5',
                    background: 'rgba(99, 102, 241, 0.1)',
                    padding: '0.2rem 0.6rem',
                    borderRadius: '6px'
                  }}>
                    {c.topic}
                  </span>
                  <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>
                    • {c.estimatedMinutes} mins
                  </span>
                </div>

                {/* Case Title */}
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: 800,
                  color: '#0f172a',
                  margin: '0 0 0.4rem 0',
                  lineHeight: 1.3
                }}>
                  {language === 'hi' && c.titleHi ? c.titleHi : language === 'te' && c.titleTe ? c.titleTe : c.title}
                </h3>

                <p style={{
                  fontSize: '0.85rem',
                  color: '#64748b',
                  margin: '0 0 1.25rem 0',
                  lineHeight: 1.5
                }}>
                  {c.tagline}
                </p>

                {/* NPC Character Badge */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  background: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: '12px',
                  padding: '0.75rem',
                  marginBottom: '1.25rem'
                }}>
                  <div style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    background: c.isDemoFlagship ? '#ef4444' : '#0ea5e9',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff',
                    flexShrink: 0
                  }}>
                    <PhoneCall size={18} />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#0f172a', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {c.npcPersona.name}
                    </div>
                    <div style={{ fontSize: '0.725rem', color: '#64748b', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {c.npcPersona.role} • Voice: {c.voice}
                    </div>
                  </div>
                </div>

                {/* Evidence Checklist Preview */}
                <div style={{ marginBottom: '1.25rem' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#475569', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                    Key Legal Rights to Defend:
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                    {c.evidenceItems.slice(0, 3).map(item => (
                      <div key={item.id} style={{ fontSize: '0.775rem', color: '#64748b', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                        <span style={{ color: '#4f46e5', fontWeight: 800 }}>•</span> {item.label}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer: Reward & Start Button */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingTop: '1rem',
                borderTop: '1px solid #e2e8f0'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Award size={18} color="#f59e0b" />
                  <span style={{ fontWeight: 800, fontSize: '0.9rem', color: '#0f172a' }}>
                    +{c.rewards.baseXp} XP
                  </span>
                </div>

                {isLocked ? (
                  <button
                    disabled
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      background: '#f1f5f9',
                      color: '#94a3b8',
                      border: '1px solid #e2e8f0',
                      borderRadius: '10px',
                      padding: '0.55rem 1rem',
                      fontSize: '0.85rem',
                      fontWeight: 700,
                      cursor: 'not-allowed'
                    }}
                  >
                    <Lock size={14} /> Unlocks at Lvl {c.minLevelRequired}
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      sounds.playClick();
                      onSelectCase(c);
                    }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      background: c.isDemoFlagship 
                        ? 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)' 
                        : 'linear-gradient(135deg, #4f46e5 0%, #06b6d4 100%)',
                      color: '#ffffff',
                      border: 'none',
                      borderRadius: '10px',
                      padding: '0.55rem 1.25rem',
                      fontSize: '0.85rem',
                      fontWeight: 800,
                      cursor: 'pointer',
                      boxShadow: '0 4px 12px rgba(79, 70, 229, 0.25)'
                    }}
                  >
                    <Play size={15} /> Start Case <ChevronRight size={16} />
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Pre-Flight Demo Modal */}
      <DemoCheckModal
        isOpen={isDemoCheckOpen}
        onClose={() => setIsDemoCheckOpen(false)}
      />
    </div>
  );
};
