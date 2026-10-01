import React, { useState } from 'react';
import { 
  ShieldAlert, 
  Phone, 
  MapPin, 
  Bot, 
  Volume2, 
  VolumeX, 
  X, 
  ExternalLink,
  Sparkles,
  AlertTriangle,
  Scale,
  Zap,
  CheckCircle2,
  ChevronDown
} from 'lucide-react';
import { sounds } from '../utils/soundEffects';

export const CitizenLegalHUD = ({ onOpenAi, onOpenMaps, onOpenDemo }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(sounds.enabled);

  const toggleSound = () => {
    const nextState = sounds.toggleSound();
    setSoundEnabled(nextState);
  };

  const EMERGENCY_CONTACTS = [
    { number: '1930', label: 'Cyber Crime (Golden Hour)', desc: 'Freeze fraudulent UPI & bank transfers within 2h', color: '#3b82f6' },
    { number: '112', label: 'National Emergency ERSS', desc: 'Single unified police, medical & fire dispatch', color: '#f43f5e' },
    { number: '15100', label: 'NALSA Free Legal Aid', desc: 'Free lawyer appointment & legal representation', color: '#8b5cf6' },
    { number: '1091', label: 'Women Emergency Helpline', desc: '24x7 safety assistance & Zero FIR support', color: '#ec4899' },
    { number: '1915', label: 'National Consumer Helpline', desc: 'Defective goods, e-commerce dispute & fraud', color: '#f59e0b' }
  ];

  return (
    <>
      {/* Floating Trigger Button */}
      <div 
        className="citizen-hud-dock"
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          zIndex: 500,
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}
      >
        <button
          onClick={toggleSound}
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            background: 'rgba(15, 23, 42, 0.85)',
            backdropFilter: 'blur(8px)',
            border: '1px solid var(--border-medium)',
            color: soundEnabled ? 'var(--primary-light)' : 'var(--text-muted)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: 'var(--shadow-md)',
            transition: 'all var(--transition-fast)'
          }}
          title={soundEnabled ? 'Mute sound effects' : 'Enable sound effects'}
          aria-label="Toggle Sound"
        >
          {soundEnabled ? <Volume2 size={18} /> : <VolumeX size={18} />}
        </button>

        <button
          onClick={() => {
            sounds.playClick();
            setIsOpen(!isOpen);
          }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.65rem 1.15rem',
            background: 'linear-gradient(135deg, #f43f5e 0%, #e11d48 100%)',
            color: '#ffffff',
            borderRadius: 'var(--radius-full)',
            fontWeight: 800,
            fontSize: '0.85rem',
            boxShadow: '0 4px 20px rgba(244, 63, 94, 0.45)',
            border: '1px solid rgba(255, 255, 255, 0.25)',
            transition: 'all var(--transition-fast)'
          }}
          className="hud-trigger-btn"
          aria-label="Open Citizen Legal Rights HUD"
        >
          <ShieldAlert size={18} />
          <span>Legal SOS HUD</span>
          <span style={{
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            background: '#ffffff',
            animation: 'pulse-glow 1.5s infinite'
          }} />
        </button>
      </div>

      {/* Expanded Modal / Drawer */}
      {isOpen && (
        <div 
          className="modal-backdrop" 
          onClick={() => setIsOpen(false)}
          style={{ zIndex: 1000 }}
        >
          <div 
            className="modal-content"
            onClick={e => e.stopPropagation()}
            style={{
              maxWidth: '560px',
              padding: '1.75rem',
              position: 'relative',
              background: '#090d16',
              border: '1px solid var(--border-medium)',
              boxShadow: '0 25px 50px rgba(0,0,0,0.8), 0 0 35px rgba(244, 63, 94, 0.25)'
            }}
          >
            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '12px',
                  background: 'rgba(244, 63, 94, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#f43f5e'
                }}>
                  <ShieldAlert size={22} />
                </div>
                <div>
                  <h2 style={{ fontSize: '1.25rem', lineHeight: 1.2 }}>
                    Citizen Legal SOS & Rights HUD
                  </h2>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                    Immediate Statutory Redressal & Emergency Helplines
                  </span>
                </div>
              </div>

              <button 
                onClick={() => setIsOpen(false)}
                style={{ color: 'var(--text-muted)', padding: '0.25rem' }}
              >
                <X size={20} />
              </button>
            </div>

            {/* Quick Action Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div
                onClick={() => {
                  setIsOpen(false);
                  onOpenAi();
                }}
                className="glass-panel glass-panel-interactive"
                style={{
                  padding: '1rem',
                  background: 'rgba(6, 182, 212, 0.1)',
                  border: '1px solid rgba(6, 182, 212, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem'
                }}
              >
                <Bot size={22} color="#38bdf8" />
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.85rem', color: '#ffffff' }}>
                    Triage with AI
                  </div>
                  <div style={{ fontSize: '0.7rem', color: '#38bdf8' }}>
                    Explain situation in plain words
                  </div>
                </div>
              </div>

              <div
                onClick={() => {
                  setIsOpen(false);
                  onOpenMaps();
                }}
                className="glass-panel glass-panel-interactive"
                style={{
                  padding: '1rem',
                  background: 'rgba(16, 185, 129, 0.1)',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem'
                }}
              >
                <MapPin size={22} color="#34d399" />
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.85rem', color: '#ffffff' }}>
                    Find Legal Aid
                  </div>
                  <div style={{ fontSize: '0.7rem', color: '#34d399' }}>
                    Nearby police & legal clinics
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Speed-Dial Helplines */}
            <div style={{ marginBottom: '1.25rem' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700, marginBottom: '0.6rem' }}>
                Verified Emergency Speed-Dial (Toll-Free)
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {EMERGENCY_CONTACTS.map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: '0.65rem 0.85rem',
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: 'var(--radius-md)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '0.75rem'
                    }}
                  >
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                        <span style={{ fontWeight: 700, fontSize: '0.9rem', color: item.color }}>
                          {item.number}
                        </span>
                        <span style={{ fontSize: '0.825rem', color: 'var(--text-main)', fontWeight: 600 }}>
                          • {item.label}
                        </span>
                      </div>
                      <div style={{ fontSize: '0.725rem', color: 'var(--text-muted)' }}>
                        {item.desc}
                      </div>
                    </div>

                    <a
                      href={`tel:${item.number}`}
                      className="btn-primary"
                      style={{
                        padding: '0.35rem 0.75rem',
                        fontSize: '0.75rem',
                        background: item.color,
                        boxShadow: `0 2px 10px ${item.color}40`
                      }}
                    >
                      <Phone size={12} />
                      <span>Call Now</span>
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Essential Rights Cheat-Sheet */}
            <div style={{
              padding: '0.85rem',
              background: 'rgba(99, 102, 241, 0.08)',
              border: '1px solid rgba(99, 102, 241, 0.25)',
              borderRadius: 'var(--radius-md)',
              fontSize: '0.785rem',
              color: 'var(--text-secondary)'
            }}>
              <strong style={{ color: 'var(--primary-light)' }}>Quick Citizen Knowledge:</strong>
              <ul style={{ paddingLeft: '1.2rem', marginTop: '0.3rem', lineHeight: 1.5 }}>
                <li><strong>Zero FIR:</strong> Any police station must register cognizable complaints.</li>
                <li><strong>Sec 134A MVA:</strong> Good Samaritans helping accident victims have total civil/criminal immunity.</li>
                <li><strong>Rule 139 CMVR:</strong> DigiLocker driving licence is at par with physical cards.</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
