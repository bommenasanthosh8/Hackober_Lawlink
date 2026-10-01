import React, { useState, useEffect } from 'react';
import { 
  Trophy, 
  Award, 
  Flame, 
  Medal, 
  ShieldCheck, 
  Filter,
  User,
  Sparkles,
  Crown,
  ChevronUp
} from 'lucide-react';
import { getLeaderboard } from '../firebase/db';
import { useAuth } from '../context/AuthContext';
import { sounds } from '../utils/soundEffects';

export const Leaderboard = () => {
  const { user } = useAuth();
  const [filter, setFilter] = useState('all'); // all, weekly, monthly
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadLeaderboard();
  }, [filter]);

  const loadLeaderboard = async () => {
    setLoading(true);
    const data = await getLeaderboard(filter);
    setLeaderboardData(data);
    setLoading(false);
  };

  const handleFilterChange = (t) => {
    sounds.playClick();
    setFilter(t);
  };

  const getRankBadge = (rank) => {
    if (rank === 1) return { color: '#f59e0b', label: '🥇 1st' };
    if (rank === 2) return { color: '#94a3b8', label: '🥈 2nd' };
    if (rank === 3) return { color: '#b45309', label: '🥉 3rd' };
    return { color: 'var(--text-muted)', label: `#${rank}` };
  };

  // Top 3 Podium Candidates
  const top1 = leaderboardData[0];
  const top2 = leaderboardData[1];
  const top3 = leaderboardData[2];

  return (
    <div style={{ maxWidth: '960px', margin: '0 auto', animation: 'modal-slide-in 0.3s ease' }}>
      {/* Header */}
      <div className="glass-panel" style={{ padding: '2rem', marginBottom: '1.5rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'linear-gradient(90deg, #f59e0b 0%, #ec4899 50%, #6366f1 100%)'
        }} />

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap', marginBottom: '0.75rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <div style={{
              width: '50px',
              height: '50px',
              borderRadius: '16px',
              background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 20px rgba(245, 158, 11, 0.4)',
              color: '#0f172a'
            }}>
              <Trophy size={28} />
            </div>
            <div>
              <h1 style={{ fontSize: '1.75rem', lineHeight: 1.2, margin: 0, letterSpacing: '-0.02em' }}>
                Civic Literacy Leaderboard
              </h1>
              <span style={{ fontSize: '0.825rem', color: 'var(--text-secondary)' }}>
                Real-Time Cloud Firestore Rankings • Verified Civic Contributors
              </span>
            </div>
          </div>

          {/* Time Filter Toggle */}
          <div style={{
            display: 'flex',
            background: 'rgba(255, 255, 255, 0.05)',
            padding: '0.25rem',
            borderRadius: 'var(--radius-full)',
            border: '1px solid var(--border-subtle)'
          }}>
            {['weekly', 'monthly', 'all'].map(t => (
              <button
                key={t}
                onClick={() => handleFilterChange(t)}
                style={{
                  padding: '0.4rem 1rem',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  textTransform: 'capitalize',
                  background: filter === t ? 'var(--primary)' : 'transparent',
                  color: filter === t ? '#ffffff' : 'var(--text-secondary)',
                  transition: 'all 0.2s ease'
                }}
              >
                {t === 'all' ? 'All Time' : t}
              </button>
            ))}
          </div>
        </div>

        <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', maxWidth: '720px', margin: 0, lineHeight: 1.6 }}>
          Celebrate citizens who lead in statutory understanding, civic responsibility, and daily scenario completion.
        </p>
      </div>

      {/* TOP 3 PODIUM SHOWCASE (CREATIVE GAMIFIED UPGRADE) */}
      {!loading && leaderboardData.length >= 3 && (
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.15fr 1fr',
          gap: '1rem',
          alignItems: 'flex-end',
          marginBottom: '2rem'
        }}>
          {/* #2 Rank (Silver - Left) */}
          {top2 && (
            <div className="glass-panel" style={{
              padding: '1.25rem',
              textAlign: 'center',
              border: '1px solid rgba(148, 163, 184, 0.4)',
              background: 'linear-gradient(180deg, rgba(148, 163, 184, 0.12) 0%, rgba(15, 23, 42, 0.6) 100%)',
              position: 'relative'
            }}>
              <div style={{
                position: 'absolute',
                top: '-14px',
                left: '50%',
                transform: 'translateX(-50%)',
                background: '#64748b',
                color: '#ffffff',
                fontSize: '0.75rem',
                fontWeight: 800,
                padding: '0.2rem 0.65rem',
                borderRadius: 'var(--radius-full)'
              }}>
                🥈 RANK 2
              </div>
              <div style={{
                width: '52px',
                height: '52px',
                borderRadius: '50%',
                margin: '0.75rem auto 0.5rem',
                background: 'linear-gradient(135deg, #94a3b8 0%, #475569 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                fontWeight: 800,
                fontSize: '1.2rem',
                boxShadow: '0 0 16px rgba(148, 163, 184, 0.3)'
              }}>
                {top2.displayName ? top2.displayName.charAt(0).toUpperCase() : '2'}
              </div>
              <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-main)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {top2.displayName || 'Civic Learner'}
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--primary-light)', marginTop: '0.2rem' }}>
                {top2.level || 'Level 2'}
              </div>
              <div style={{ fontSize: '1.15rem', fontWeight: 800, color: '#e2e8f0', marginTop: '0.5rem' }}>
                {top2.xp || 0} <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>XP</span>
              </div>
            </div>
          )}

          {/* #1 Rank (Gold - Center, Elevated) */}
          {top1 && (
            <div className="glass-panel" style={{
              padding: '1.75rem 1.25rem 1.5rem',
              textAlign: 'center',
              border: '2px solid rgba(245, 158, 11, 0.6)',
              background: 'linear-gradient(180deg, rgba(245, 158, 11, 0.18) 0%, rgba(15, 23, 42, 0.8) 100%)',
              boxShadow: '0 8px 30px rgba(245, 158, 11, 0.25)',
              position: 'relative'
            }}>
              <div style={{
                position: 'absolute',
                top: '-16px',
                left: '50%',
                transform: 'translateX(-50%)',
                background: 'linear-gradient(90deg, #f59e0b 0%, #d97706 100%)',
                color: '#0f172a',
                fontSize: '0.8rem',
                fontWeight: 900,
                padding: '0.25rem 0.85rem',
                borderRadius: 'var(--radius-full)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.3rem',
                boxShadow: '0 4px 12px rgba(245, 158, 11, 0.4)'
              }}>
                <Crown size={14} />
                <span>CHAMPION</span>
              </div>
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                margin: '0.75rem auto 0.5rem',
                background: 'linear-gradient(135deg, #f59e0b 0%, #b45309 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                fontWeight: 900,
                fontSize: '1.4rem',
                boxShadow: '0 0 24px rgba(245, 158, 11, 0.45)',
                border: '2px solid #fef3c7'
              }}>
                {top1.displayName ? top1.displayName.charAt(0).toUpperCase() : '1'}
              </div>
              <div style={{ fontWeight: 800, fontSize: '1.05rem', color: '#ffffff', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {top1.displayName || 'Lead Citizen'}
              </div>
              <div style={{ fontSize: '0.8rem', color: '#f59e0b', fontWeight: 700, marginTop: '0.2rem' }}>
                {top1.level || 'Mastery Level 3'}
              </div>
              <div style={{ fontSize: '1.35rem', fontWeight: 900, color: '#fef08a', marginTop: '0.5rem' }}>
                {top1.xp || 0} <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>XP</span>
              </div>
            </div>
          )}

          {/* #3 Rank (Bronze - Right) */}
          {top3 && (
            <div className="glass-panel" style={{
              padding: '1.25rem',
              textAlign: 'center',
              border: '1px solid rgba(180, 83, 9, 0.4)',
              background: 'linear-gradient(180deg, rgba(180, 83, 9, 0.12) 0%, rgba(15, 23, 42, 0.6) 100%)',
              position: 'relative'
            }}>
              <div style={{
                position: 'absolute',
                top: '-14px',
                left: '50%',
                transform: 'translateX(-50%)',
                background: '#92400e',
                color: '#ffffff',
                fontSize: '0.75rem',
                fontWeight: 800,
                padding: '0.2rem 0.65rem',
                borderRadius: 'var(--radius-full)'
              }}>
                🥉 RANK 3
              </div>
              <div style={{
                width: '52px',
                height: '52px',
                borderRadius: '50%',
                margin: '0.75rem auto 0.5rem',
                background: 'linear-gradient(135deg, #b45309 0%, #78350f 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                fontWeight: 800,
                fontSize: '1.2rem',
                boxShadow: '0 0 16px rgba(180, 83, 9, 0.3)'
              }}>
                {top3.displayName ? top3.displayName.charAt(0).toUpperCase() : '3'}
              </div>
              <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-main)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {top3.displayName || 'Civic Learner'}
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--primary-light)', marginTop: '0.2rem' }}>
                {top3.level || 'Level 1'}
              </div>
              <div style={{ fontSize: '1.15rem', fontWeight: 800, color: '#fdba74', marginTop: '0.5rem' }}>
                {top3.xp || 0} <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>XP</span>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Leaderboard Table / Cards */}
      <div className="glass-panel" style={{ padding: '0.5rem', overflow: 'hidden' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '80px 1.5fr 1fr 100px 100px',
          padding: '0.85rem 1rem',
          fontSize: '0.75rem',
          color: 'var(--text-muted)',
          textTransform: 'uppercase',
          fontWeight: 800,
          letterSpacing: '0.05em',
          borderBottom: '1px solid var(--border-subtle)'
        }}>
          <div>Rank</div>
          <div>Learner</div>
          <div>Mastery Level</div>
          <div>Streak</div>
          <div style={{ textAlign: 'right' }}>Total XP</div>
        </div>

        {loading ? (
          <div style={{ padding: '3.5rem', textAlign: 'center', color: 'var(--text-muted)' }}>
            Loading live leaderboard...
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {leaderboardData.map((row, idx) => {
              const isCurrentUser = user?.uid === row.uid;
              const rankInfo = getRankBadge(row.rank || idx + 1);

              return (
                <div
                  key={row.uid}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '80px 1.5fr 1fr 100px 100px',
                    alignItems: 'center',
                    padding: '1rem',
                    borderBottom: '1px solid var(--border-subtle)',
                    background: isCurrentUser ? 'rgba(99, 102, 241, 0.14)' : 'transparent',
                    borderLeft: isCurrentUser ? '3px solid var(--primary-light)' : '3px solid transparent',
                    transition: 'background var(--transition-fast)'
                  }}
                >
                  <div style={{ fontWeight: 800, fontSize: '0.95rem', color: rankInfo.color }}>
                    {rankInfo.label}
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #4f46e5 0%, #06b6d4 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#ffffff',
                      fontWeight: 800,
                      fontSize: '0.85rem'
                    }}>
                      {row.displayName ? row.displayName.charAt(0).toUpperCase() : 'U'}
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '0.925rem', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                        <span>{row.displayName || 'Anonymous Learner'}</span>
                        {isCurrentUser && (
                          <span className="badge-tag badge-primary" style={{ fontSize: '0.65rem', padding: '0.1rem 0.4rem' }}>You</span>
                        )}
                      </div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                        {row.badgesCount || 1} Badges Earned
                      </div>
                    </div>
                  </div>

                  <div style={{ fontSize: '0.85rem', color: 'var(--primary-light)', fontWeight: 600 }}>
                    {row.level || 'Level 1 — Aware'}
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#f59e0b', fontSize: '0.875rem', fontWeight: 700 }}>
                    <Flame size={16} />
                    <span>{row.streak || 1}d</span>
                  </div>

                  <div style={{ textAlign: 'right', fontWeight: 900, fontSize: '1.05rem', color: '#a5b4fc' }}>
                    {row.xp || 0} <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>XP</span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
