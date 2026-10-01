import React, { useState } from 'react';
import { 
  User, 
  Flame, 
  Award, 
  ShieldCheck, 
  Clock, 
  Calendar, 
  BookOpen, 
  Activity,
  CheckCircle2,
  ExternalLink,
  RotateCcw,
  LogOut,
  Key,
  Copy,
  Check,
  Sparkles,
  ShieldAlert
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useGamification } from '../context/GamificationContext';
import { BADGES, TOPICS } from '../data/seedData';
import { sounds } from '../utils/soundEffects';

export const ProfileView = ({ onSelectTopic }) => {
  const { profile, user, logout, demoProfiles, switchDemoAccount } = useAuth();
  const { progress, levelInfo, achievements, history } = useGamification();
  const [copiedKey, setCopiedKey] = useState(null);

  const completedTopics = progress?.completedTopics || [];

  const copyToClipboard = (text, key) => {
    sounds.playClick();
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 2000);
    }
  };

  return (
    <div style={{ maxWidth: '1060px', margin: '0 auto', animation: 'modal-slide-in 0.3s ease' }}>
      {/* Profile Header Card */}
      <div className="glass-panel" style={{ padding: '2rem', marginBottom: '1.5rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'linear-gradient(90deg, #4f46e5 0%, #ec4899 50%, #06b6d4 100%)'
        }} />

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            {profile?.photoURL ? (
              <img
                src={profile.photoURL}
                alt={profile.displayName}
                style={{ width: '76px', height: '76px', borderRadius: '50%', objectFit: 'cover', border: '3px solid var(--primary)', boxShadow: '0 0 16px var(--primary-glow)' }}
              />
            ) : (
              <div style={{
                width: '76px',
                height: '76px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #4f46e5 0%, #06b6d4 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                fontSize: '1.85rem',
                fontWeight: 800,
                boxShadow: '0 4px 20px var(--primary-glow)'
              }}>
                {profile?.displayName ? profile.displayName.charAt(0).toUpperCase() : 'U'}
              </div>
            )}

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.35rem', flexWrap: 'wrap' }}>
                <h1 style={{ fontSize: '1.75rem', margin: 0, letterSpacing: '-0.02em' }}>
                  {profile?.displayName || 'Learner'}
                </h1>
                <span className={`badge-tag ${profile?.role === 'admin' ? 'badge-urgent' : 'badge-primary'}`} style={{ fontSize: '0.75rem' }}>
                  {profile?.role === 'admin' ? 'Statutory Admin' : 'Civic Learner'}
                </span>
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0 }}>
                {profile?.email || 'learner@lawlink.org'} • UID: <code style={{ color: 'var(--primary-light)' }}>{user?.uid?.slice(0, 16)}...</code>
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.5rem' }}>
                <span className="badge-tag badge-verified" style={{ fontSize: '0.7rem' }}>
                  <ShieldCheck size={12} />
                  Verified Identity
                </span>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  Member since {profile?.createdAt ? new Date(profile.createdAt).toLocaleDateString() : 'Today'}
                </span>
              </div>
            </div>
          </div>

          {/* Key Stats Counter & Logout Button */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', gap: '1.25rem', background: 'rgba(255, 255, 255, 0.03)', padding: '0.85rem 1.25rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-subtle)' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#a5b4fc' }}>
                  {progress?.xp || 0}
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>XP Earned</div>
              </div>
              <div style={{ width: '1px', background: 'var(--border-subtle)' }} />
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#f59e0b' }}>
                  {progress?.streak || 1}d
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Streak</div>
              </div>
              <div style={{ width: '1px', background: 'var(--border-subtle)' }} />
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#10b981' }}>
                  {achievements.length}
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Badges</div>
              </div>
            </div>

            {/* Explicit Sign Out Button */}
            <button
              onClick={() => {
                sounds.playClick();
                logout();
              }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                padding: '0.7rem 1.15rem',
                background: 'rgba(244, 63, 94, 0.12)',
                border: '1px solid rgba(244, 63, 94, 0.35)',
                color: '#fb7185',
                borderRadius: 'var(--radius-md)',
                fontSize: '0.85rem',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              title="Sign Out of LawLink"
            >
              <LogOut size={16} />
              <span>Sign Out</span>
            </button>
          </div>
        </div>

        {/* Level Progression Bar */}
        <div style={{ marginTop: '1.75rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '0.4rem' }}>
            <span style={{ fontWeight: 700, color: 'var(--primary-light)' }}>{levelInfo.levelTitle}</span>
            <span style={{ color: 'var(--text-muted)' }}>{levelInfo.xp} / {levelInfo.nextLevelXp} XP ({levelInfo.progressPercent}%)</span>
          </div>
          <div className="progress-bar-track">
            <div className="progress-bar-fill" style={{ width: `${levelInfo.progressPercent}%` }} />
          </div>
        </div>
      </div>

      {/* Account Credentials & Role Switcher (For Evaluation & Multi-Account Testing) */}
      <div className="glass-panel" style={{ padding: '1.5rem', marginBottom: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
          <div>
            <h2 style={{ fontSize: '1.15rem', margin: 0, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Key size={18} color="#fbbf24" />
              <span>Official Account Credentials & Role Switcher</span>
            </h2>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', margin: '0.2rem 0 0' }}>
              Test multi-device UID isolation across different roles with pre-configured accounts
            </p>
          </div>
          <span className="badge-tag badge-primary" style={{ fontSize: '0.7rem' }}>
            Live Firestore Auth & DB
          </span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '0.85rem' }}>
          {demoProfiles.map((dp) => {
            const isActive = user?.uid === dp.uid;
            return (
              <div
                key={dp.uid}
                style={{
                  padding: '1rem',
                  borderRadius: 'var(--radius-md)',
                  background: isActive ? 'rgba(99, 102, 241, 0.12)' : 'rgba(255, 255, 255, 0.02)',
                  border: isActive ? '1.5px solid var(--primary-light)' : '1px solid var(--border-subtle)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: '0.75rem',
                  position: 'relative'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                    <span style={{ fontWeight: 800, fontSize: '0.9rem', color: 'var(--text-main)' }}>
                      {dp.displayName}
                    </span>
                    {isActive ? (
                      <span style={{ fontSize: '0.7rem', color: '#10b981', fontWeight: 800 }}>✓ Active</span>
                    ) : (
                      <span className={`badge-tag ${dp.role === 'admin' ? 'badge-urgent' : 'badge-primary'}`} style={{ fontSize: '0.65rem', padding: '0.1rem 0.4rem' }}>
                        {dp.role}
                      </span>
                    )}
                  </div>
                  <div style={{ fontSize: '0.725rem', color: 'var(--text-muted)', marginBottom: '0.6rem' }}>
                    {dp.description}
                  </div>

                  <div style={{ background: 'rgba(0,0,0,0.3)', padding: '0.5rem', borderRadius: '4px', fontSize: '0.75rem', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ color: 'var(--text-muted)' }}>Email:</span>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                        <code style={{ color: 'var(--primary-light)', fontSize: '0.725rem' }}>{dp.email}</code>
                        <button onClick={() => copyToClipboard(dp.email, `${dp.uid}_em`)} style={{ color: 'var(--text-muted)' }}>
                          {copiedKey === `${dp.uid}_em` ? <Check size={12} color="#10b981" /> : <Copy size={12} />}
                        </button>
                      </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ color: 'var(--text-muted)' }}>Password:</span>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                        <code style={{ color: '#fbbf24', fontSize: '0.725rem' }}>{dp.password || 'Citizen@123'}</code>
                        <button onClick={() => copyToClipboard(dp.password || 'Citizen@123', `${dp.uid}_pw`)} style={{ color: 'var(--text-muted)' }}>
                          {copiedKey === `${dp.uid}_pw` ? <Check size={12} color="#10b981" /> : <Copy size={12} />}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {!isActive && (
                  <button
                    onClick={() => {
                      sounds.playSuccess();
                      switchDemoAccount(dp.uid);
                    }}
                    className="btn-secondary"
                    style={{ width: '100%', fontSize: '0.75rem', padding: '0.4rem', justifyContent: 'center' }}
                  >
                    <span>Switch to {dp.displayName.split(' ')[0]}</span>
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Badges & Civic Credentials Showcase */}
      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Award size={20} color="var(--accent-amber)" />
          <span>Earned Civic Credentials & Badges ({achievements.length} / {BADGES.length})</span>
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
          {BADGES.map(badge => {
            const isUnlocked = achievements.some(a => a.badgeId === badge.id);

            return (
              <div
                key={badge.id}
                className="glass-panel"
                style={{
                  padding: '1.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  opacity: isUnlocked ? 1 : 0.45,
                  border: isUnlocked ? `1px solid ${badge.color || 'var(--primary)'}` : '1px solid var(--border-subtle)',
                  background: isUnlocked ? 'rgba(255, 255, 255, 0.04)' : 'transparent',
                  position: 'relative'
                }}
              >
                <div style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  background: badge.color || 'var(--primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  fontWeight: 800,
                  fontSize: '1.2rem',
                  flexShrink: 0,
                  boxShadow: isUnlocked ? `0 4px 15px ${badge.color}40` : 'none'
                }}>
                  <Award size={24} />
                </div>

                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.95rem', color: isUnlocked ? 'var(--text-main)' : 'var(--text-muted)' }}>
                    {badge.name}
                  </div>
                  <div style={{ fontSize: '0.775rem', color: 'var(--text-secondary)' }}>
                    {badge.description}
                  </div>
                  {isUnlocked && (
                    <div style={{ fontSize: '0.7rem', color: '#10b981', fontWeight: 700, marginTop: '0.2rem' }}>
                      ✓ Verified Achievement
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Curriculum Mastery Progress & History */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
        {/* Topic Modules Progress */}
        <div className="glass-panel" style={{ padding: '1.5rem' }}>
          <h2 style={{ fontSize: '1.15rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <BookOpen size={18} color="var(--primary-light)" />
            <span>Curriculum Topic Mastery ({completedTopics.length} / {TOPICS.length})</span>
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
            {TOPICS.map(t => {
              const isDone = completedTopics.includes(t.id);

              return (
                <div
                  key={t.id}
                  onClick={() => onSelectTopic(t.id)}
                  style={{
                    padding: '0.75rem',
                    borderRadius: 'var(--radius-md)',
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid var(--border-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer'
                  }}
                >
                  <div>
                    <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-main)' }}>
                      {t.title}
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                      {t.category}
                    </div>
                  </div>

                  <div>
                    {isDone ? (
                      <span className="badge-tag badge-verified" style={{ fontSize: '0.7rem' }}>
                        Completed
                      </span>
                    ) : (
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                        In Progress
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Learning History Timeline */}
        <div className="glass-panel" style={{ padding: '1.5rem' }}>
          <h2 style={{ fontSize: '1.15rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Activity size={18} color="var(--accent-emerald)" />
            <span>My Legal Literacy Journey</span>
          </h2>

          {history && history.length > 0 ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxHeight: '400px', overflowY: 'auto', paddingRight: '0.5rem' }}>
              {history.map(item => (
                <div key={item.id} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <div style={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    background: 'var(--primary)',
                    marginTop: '5px',
                    boxShadow: '0 0 8px var(--primary)'
                  }} />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-main)' }}>
                      {item.title}
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                      {new Date(item.timestamp).toLocaleDateString()} at {new Date(item.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} • <strong style={{ color: '#a5b4fc' }}>+{item.xpEarned} XP</strong>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              No activities recorded yet. Complete a quiz or scenario to see your timeline.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
