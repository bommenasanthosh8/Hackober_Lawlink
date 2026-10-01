import React, { useState } from 'react';
import { 
  Flame, 
  Award, 
  CheckCircle2, 
  ArrowRight, 
  BookOpen, 
  Bot, 
  MapPin, 
  Sparkles, 
  Target, 
  Trophy, 
  ShieldCheck, 
  Clock, 
  AlertTriangle,
  Zap,
  HelpCircle,
  PhoneCall,
  Activity,
  Layers,
  ChevronRight,
  TrendingUp,
  ShieldAlert,
  Compass
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useGamification } from '../context/GamificationContext';
import { useLanguage } from '../context/LanguageContext';
import { TOPICS, SCENARIOS } from '../data/seedData';
import { sounds } from '../utils/soundEffects';

export const Dashboard = ({ onSelectTopic, onSelectScenario, onNavigate }) => {
  const { profile } = useAuth();
  const { 
    progress, 
    levelInfo, 
    achievements, 
    history, 
    activeDailyChallenge, 
    isDailyCompletedToday, 
    completeDailyChallenge 
  } = useGamification();
  const { t } = useLanguage();

  const [selectedDailyOption, setSelectedDailyOption] = useState(null);
  const [dailyFeedback, setDailyFeedback] = useState(null);

  const handleDailySubmit = async () => {
    if (selectedDailyOption === null || isDailyCompletedToday) return;
    sounds.playClick();
    const res = await completeDailyChallenge(selectedDailyOption);
    setDailyFeedback(res);
    if (res.success) {
      sounds.playSuccess();
    } else {
      sounds.playError();
    }
  };

  // SMART RECOMMENDATION ENGINE (Section 15)
  const getSmartRecommendations = () => {
    const completedTopics = progress?.completedTopics || [];
    const completedScenarios = progress?.completedScenarios || [];

    const recs = [];

    // Rule 1: Cybercrime priority
    if (!completedTopics.includes('cybercrime')) {
      const sc = SCENARIOS.find(s => s.topicId === 'cybercrime');
      recs.push({
        id: 'rec_cyber',
        type: 'SCENARIO',
        title: 'UPI Phishing & Account Freeze Protection',
        reason: 'Most common financial threat in India. Master the Golden Hour 1930 protocol.',
        topicId: 'cybercrime',
        scenario: sc,
        badge: 'High Priority',
        color: '#3b82f6'
      });
    }

    // Rule 2: Digital Privacy
    if (completedTopics.includes('cybercrime') && !completedTopics.includes('digital_privacy')) {
      recs.push({
        id: 'rec_priv',
        type: 'TOPIC',
        title: 'Digital Privacy & Aadhaar Biometric Lock',
        reason: 'You mastered Cybercrime. Next, protect your biometric data and prevent AePS fraud.',
        topicId: 'digital_privacy',
        badge: 'Natural Progression',
        color: '#8b5cf6'
      });
    }

    // Rule 3: Consumer Rights
    if (!completedScenarios.includes('sc_consumer_01')) {
      const sc = SCENARIOS.find(s => s.id === 'sc_consumer_01');
      recs.push({
        id: 'rec_con',
        type: 'SCENARIO',
        title: 'Contesting Damaged E-Commerce Goods',
        reason: 'Learn how Consumer Protection Rules 2020 override private seller "No Return" policies.',
        topicId: 'consumer_rights',
        scenario: sc,
        badge: 'Practical Skill',
        color: '#f59e0b'
      });
    }

    // Rule 4: Fundamental Rights
    if (!completedTopics.includes('fundamental_rights')) {
      recs.push({
        id: 'rec_fr',
        type: 'TOPIC',
        title: 'Fundamental Rights & Police Interactions',
        reason: 'Essential constitutional literacy for every citizen: Article 21 and lawful arrest procedures.',
        topicId: 'fundamental_rights',
        badge: 'Civic Essential',
        color: '#ec4899'
      });
    }

    return recs.slice(0, 3);
  };

  const recommendations = getSmartRecommendations();

  // Active "Continue Learning" topic
  const activeTopic = TOPICS.find(t => !progress?.completedTopics?.includes(t.id)) || TOPICS[0];

  // 7-day flame calendar calculation
  const daysOfWeek = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  const currentStreak = progress?.streak || 1;

  // SVG Circular Gauge parameters
  const gaugeRadius = 36;
  const gaugeCircumference = 2 * Math.PI * gaugeRadius;
  const strokeOffset = gaugeCircumference - (levelInfo.progressPercent / 100) * gaugeCircumference;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem', animation: 'modal-slide-in 0.3s ease' }}>
      
      {/* Live Civic Awareness Pulse Ticker */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0.65rem 1.25rem',
        background: 'rgba(99, 102, 241, 0.08)',
        border: '1px solid rgba(99, 102, 241, 0.25)',
        borderRadius: 'var(--radius-full)',
        fontSize: '0.8rem',
        color: 'var(--text-secondary)',
        flexWrap: 'wrap',
        gap: '0.75rem'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            background: '#10b981',
            boxShadow: '0 0 10px #10b981',
            animation: 'pulse-glow 2s infinite'
          }} />
          <strong style={{ color: '#38bdf8' }}>Live Civic Impact Network:</strong>
          <span>Real-time statutory literacy active across college campuses</span>
        </div>
        <div style={{ display: 'flex', gap: '1rem', fontWeight: 600 }}>
          <span>🛡️ 1930 Golden Hour Ready</span>
          <span style={{ color: 'var(--border-medium)' }}>•</span>
          <span>⚖️ NALSA 15100 Integrated</span>
          <span style={{ color: 'var(--border-medium)' }}>•</span>
          <span style={{ color: '#34d399' }}>✓ Zero Hallucination Active</span>
        </div>
      </div>

      {/* Hero Welcome Card with Futuristic Circular Gauge */}
      <div className="glass-panel" style={{
        padding: '2.25rem',
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, rgba(13, 19, 34, 0.9) 0%, rgba(22, 32, 54, 0.75) 100%)',
        border: '1px solid var(--border-medium)',
        boxShadow: 'var(--shadow-lg)'
      }}>
        <div style={{
          position: 'absolute',
          top: '-25%',
          right: '-10%',
          width: '380px',
          height: '380px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.22) 0%, transparent 65%)',
          pointerEvents: 'none'
        }} />

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem', position: 'relative', zIndex: 2 }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', marginBottom: '0.6rem' }}>
              <span className="badge-tag badge-primary">
                GDG on Campus Hackathon Showcase
              </span>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                Cloud Firestore Realtime Sync Active
              </span>
            </div>

            <h1 style={{ fontSize: '2.15rem', marginBottom: '0.5rem', lineHeight: 1.2 }}>
              {t('welcomeBack')}{' '}
              <span style={{
                background: 'linear-gradient(135deg, #ffffff 40%, #a5b4fc 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                {profile?.displayName || 'Learner'}
              </span>!
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.975rem', maxWidth: '640px', lineHeight: 1.6 }}>
              Recognize real-world legal situations, understand your constitutional and statutory protections, and take immediate decisive action.
            </p>
          </div>

          {/* Interactive Circular Progress Gauge */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.25rem',
            background: 'rgba(255, 255, 255, 0.03)',
            padding: '1rem 1.5rem',
            borderRadius: 'var(--radius-xl)',
            border: '1px solid var(--border-medium)',
            boxShadow: 'var(--shadow-md)'
          }}>
            <div style={{ position: 'relative', width: '84px', height: '84px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="84" height="84" viewBox="0 0 84 84" style={{ transform: 'rotate(-90deg)' }}>
                <circle
                  cx="42"
                  cy="42"
                  r={gaugeRadius}
                  stroke="rgba(255, 255, 255, 0.08)"
                  strokeWidth="7"
                  fill="transparent"
                />
                <circle
                  cx="42"
                  cy="42"
                  r={gaugeRadius}
                  stroke="url(#levelGradient)"
                  strokeWidth="7"
                  strokeDasharray={gaugeCircumference}
                  strokeDashoffset={strokeOffset}
                  strokeLinecap="round"
                  fill="transparent"
                  style={{ transition: 'stroke-dashoffset 0.8s cubic-bezier(0.16, 1, 0.3, 1)' }}
                />
                <defs>
                  <linearGradient id="levelGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#4f46e5" />
                    <stop offset="100%" stopColor="#06b6d4" />
                  </linearGradient>
                </defs>
              </svg>
              <div style={{ position: 'absolute', textAlign: 'center' }}>
                <span style={{ fontSize: '1.4rem', fontWeight: 900, color: '#ffffff' }}>
                  {levelInfo.levelNumber}
                </span>
                <span style={{ fontSize: '0.6rem', color: 'var(--text-muted)', display: 'block', textTransform: 'uppercase', marginTop: '-3px' }}>
                  Lvl
                </span>
              </div>
            </div>

            <div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700 }}>
                {t('levelLabel')}
              </div>
              <div style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-main)', marginTop: '0.1rem' }}>
                {levelInfo.levelTitle}
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--primary-light)', fontWeight: 600, marginTop: '0.2rem' }}>
                {levelInfo.xp} / {levelInfo.nextLevelXp} XP ({levelInfo.progressPercent}%)
              </div>
            </div>
          </div>
        </div>

        {/* Level XP Progress Bar */}
        <div style={{ marginTop: '1.75rem' }}>
          <div className="progress-bar-track" style={{ height: '9px' }}>
            <div className="progress-bar-fill" style={{ width: `${levelInfo.progressPercent}%` }} />
          </div>
        </div>
      </div>

      {/* COMPETITION DIFFERENTIATOR: THE LAWLINK PHILOSOPHY BANNER (Section 33) */}
      <div className="glass-panel" style={{
        padding: '1.35rem 1.75rem',
        background: 'linear-gradient(90deg, rgba(99, 102, 241, 0.14) 0%, rgba(6, 182, 212, 0.12) 100%)',
        border: '1px solid var(--border-highlight)',
        boxShadow: 'var(--shadow-glow)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <div style={{ fontSize: '0.75rem', color: 'var(--accent-amber)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.25rem' }}>
              ✦ The LawLink Philosophy
            </div>
            <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              <span style={{ textDecoration: 'line-through', opacity: 0.65 }}>Most Legal Sites: READ → SEARCH → EXIT</span>
            </div>
            <div style={{ fontSize: '1.15rem', fontWeight: 800, color: '#ffffff', marginTop: '0.2rem', letterSpacing: '-0.01em' }}>
              LAWLINK: <span style={{ color: '#38bdf8' }}>EXPERIENCE</span> → <span style={{ color: '#818cf8' }}>UNDERSTAND</span> → <span style={{ color: '#34d399' }}>PRACTICE</span> → <span style={{ color: '#fbbf24' }}>ACT</span> → <span style={{ color: '#ec4899' }}>GET HELP</span>
            </div>
          </div>

          <button
            onClick={() => {
              sounds.playClick();
              onNavigate('topics');
            }}
            className="btn-primary"
            style={{ fontSize: '0.875rem', padding: '0.6rem 1.25rem' }}
          >
            <span>Explore 7 Curricula</span>
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* FLAGSHIP JUDGE SPOTLIGHT: LIVE CASE MODE (Voice Simulation) */}
      <div className="glass-panel" style={{
        padding: '1.75rem',
        background: 'linear-gradient(135deg, rgba(225, 29, 72, 0.08) 0%, rgba(99, 102, 241, 0.08) 50%, rgba(6, 182, 212, 0.08) 100%)',
        border: '1.5px solid rgba(225, 29, 72, 0.35)',
        boxShadow: '0 8px 30px rgba(225, 29, 72, 0.15)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: '-30px',
          right: '-30px',
          width: '180px',
          height: '180px',
          background: 'radial-gradient(circle, rgba(244, 63, 94, 0.25) 0%, transparent 70%)',
          pointerEvents: 'none'
        }} />

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem', position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '680px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.6rem', flexWrap: 'wrap' }}>
              <span style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                fontSize: '0.7rem',
                fontWeight: 900,
                color: '#ffffff',
                background: 'linear-gradient(135deg, #ef4444, #f43f5e)',
                padding: '0.2rem 0.6rem',
                borderRadius: '999px',
                letterSpacing: '0.05em',
                boxShadow: '0 0 12px rgba(239, 68, 68, 0.5)'
              }}>
                <PhoneCall size={12} />
                FLAGSHIP DEMO
              </span>
              <span style={{
                fontSize: '0.72rem',
                color: '#f43f5e',
                fontWeight: 700,
                background: 'rgba(244, 63, 94, 0.12)',
                border: '1px solid rgba(244, 63, 94, 0.3)',
                padding: '0.15rem 0.5rem',
                borderRadius: '6px'
              }}>
                Powered by Gemini Live API (16kHz PCM duplex)
              </span>
              <span style={{
                fontSize: '0.72rem',
                color: '#10b981',
                fontWeight: 700,
                background: 'rgba(16, 185, 129, 0.12)',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                padding: '0.15rem 0.5rem',
                borderRadius: '6px'
              }}>
                BNS 2024 Grounded
              </span>
            </div>

            <h2 style={{ fontSize: '1.55rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.4rem', letterSpacing: '-0.02em' }}>
              Live Case Mode: High-Stakes Voice Legal Simulation
            </h2>
            <p style={{ color: '#475569', fontSize: '0.9rem', lineHeight: 1.55, margin: 0 }}>
              Face aggressive scam callers, deceptive customer support agents, and intimidating officials in real-time spoken audio. 
              Hold your composure, cite statutory protections (BNS Sec 318, RBI Circulars, CPA 2019), and earn the exclusive <strong>Scam Slayer</strong> badge.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', minWidth: '220px' }}>
            <button
              onClick={() => {
                sounds.playClick();
                onNavigate('live_cases');
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                padding: '0.85rem 1.4rem',
                background: 'linear-gradient(135deg, #e11d48 0%, #be123c 100%)',
                color: '#ffffff',
                border: 'none',
                borderRadius: 'var(--radius-md)',
                fontSize: '0.95rem',
                fontWeight: 800,
                cursor: 'pointer',
                boxShadow: '0 4px 18px rgba(225, 29, 72, 0.4)',
                transition: 'all 0.2s ease'
              }}
            >
              <PhoneCall size={18} />
              <span>Launch Voice Demo</span>
              <ChevronRight size={18} />
            </button>
            <div style={{ textAlign: 'center', fontSize: '0.72rem', color: '#64748b' }}>
              Zero-dead-screen fallback guaranteed
            </div>
          </div>
        </div>
      </div>

      {/* Gamification Stats Row with 7-Day Flame Streak Calendar */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
        
        {/* Streak with Calendar Dots */}
        <div className="glass-panel" style={{ padding: '1.35rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>{t('streakLabel')}</span>
            <Flame size={22} color="#f59e0b" style={{ filter: 'drop-shadow(0 0 8px rgba(245, 158, 11, 0.6))' }} />
          </div>
          <div style={{ fontSize: '1.85rem', fontWeight: 800, color: 'var(--text-main)' }}>
            {currentStreak} <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>days active</span>
          </div>
          {/* 7-Day Streak Dots */}
          <div style={{ display: 'flex', gap: '0.35rem', marginTop: '0.6rem' }}>
            {daysOfWeek.map((day, idx) => {
              const isFilled = idx < Math.min(7, currentStreak);
              return (
                <div
                  key={idx}
                  style={{
                    flex: 1,
                    textAlign: 'center',
                    padding: '0.3rem 0',
                    borderRadius: '4px',
                    background: isFilled ? 'rgba(245, 158, 11, 0.22)' : 'rgba(255, 255, 255, 0.04)',
                    border: isFilled ? '1px solid rgba(245, 158, 11, 0.5)' : '1px solid var(--border-subtle)',
                    fontSize: '0.675rem',
                    fontWeight: 700,
                    color: isFilled ? '#fbbf24' : 'var(--text-muted)'
                  }}
                >
                  {day}
                </div>
              );
            })}
          </div>
        </div>

        <div className="glass-panel" style={{ padding: '1.35rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>Real-Life Scenarios</span>
            <Target size={22} color="#06b6d4" style={{ filter: 'drop-shadow(0 0 8px rgba(6, 182, 212, 0.5))' }} />
          </div>
          <div style={{ fontSize: '1.85rem', fontWeight: 800, color: 'var(--text-main)' }}>
            {progress?.completedScenarios?.length || 0}
          </div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '0.35rem' }}>
            Branching cases solved
          </div>
        </div>

        <div className="glass-panel badge-hologram" style={{ padding: '1.35rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>Civic Credentials</span>
            <Award size={22} color="#ec4899" style={{ filter: 'drop-shadow(0 0 8px rgba(236, 72, 153, 0.5))' }} />
          </div>
          <div style={{ fontSize: '1.85rem', fontWeight: 800, color: 'var(--text-main)' }}>
            {achievements.length} <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>of 9</span>
          </div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '0.35rem' }}>
            Badges unlocked
          </div>
        </div>

        <div className="glass-panel" style={{ padding: '1.35rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>Topic Mastery</span>
            <ShieldCheck size={22} color="#10b981" style={{ filter: 'drop-shadow(0 0 8px rgba(16, 185, 129, 0.5))' }} />
          </div>
          <div style={{ fontSize: '1.85rem', fontWeight: 800, color: 'var(--text-main)' }}>
            {progress?.completedTopics?.length || 0} <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>of 7</span>
          </div>
          <div style={{ fontSize: '0.75rem', color: '#34d399', marginTop: '0.35rem' }}>
            Statutory domains
          </div>
        </div>
      </div>

      {/* Main 2-Column Split: Learning Path & Daily Challenge */}
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(320px, 1.4fr) minmax(300px, 1fr)', gap: '1.5rem', alignItems: 'start' }} className="dash-split-container">
        
        {/* Left Column: Continue Learning & Smart Recommendations */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          {/* Continue Learning Active Card */}
          <div>
            <div style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <BookOpen size={19} color="var(--primary-light)" />
              <span>{t('continueLearning')}</span>
            </div>

            <div 
              onClick={() => {
                sounds.playClick();
                onSelectTopic(activeTopic.id);
              }}
              className="glass-panel glass-panel-interactive"
              style={{
                padding: '1.75rem',
                position: 'relative',
                borderLeft: '4px solid var(--primary-light)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem', marginBottom: '0.5rem' }}>
                <span className="badge-tag badge-primary">
                  {activeTopic.category}
                </span>
                <span style={{ fontSize: '0.85rem', color: '#f59e0b', fontWeight: 800 }}>
                  +{activeTopic.xpReward} XP
                </span>
              </div>

              <h3 style={{ fontSize: '1.35rem', marginBottom: '0.5rem', color: 'var(--text-main)' }}>
                {activeTopic.title}
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.25rem', lineHeight: 1.55 }}>
                {activeTopic.description}
              </p>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.825rem', color: 'var(--text-muted)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Clock size={15} />
                  <span>{activeTopic.estimatedMinutes} mins • {activeTopic.keyLaws.length} Key Laws</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'var(--primary-light)', fontWeight: 700 }}>
                  <span>Launch Curriculum</span>
                  <ArrowRight size={16} />
                </div>
              </div>
            </div>
          </div>

          {/* SMART RECOMMENDATION ENGINE (Section 15) */}
          <div>
            <div style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Sparkles size={19} color="var(--accent-amber)" />
              <span>{t('recommendedForYou')}</span>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 500 }}>(Activity & Score Grounded)</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {recommendations.map(rec => (
                <div
                  key={rec.id}
                  onClick={() => {
                    sounds.playClick();
                    if (rec.type === 'SCENARIO' && rec.scenario) {
                      onSelectScenario(rec.scenario);
                    } else {
                      onSelectTopic(rec.topicId);
                    }
                  }}
                  className="glass-panel glass-panel-interactive"
                  style={{
                    padding: '1.25rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1rem',
                    borderLeft: `3px solid ${rec.color || 'var(--primary)'}`
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', marginBottom: '0.25rem' }}>
                      <span className="badge-tag" style={{ background: `${rec.color}20`, color: rec.color, border: `1px solid ${rec.color}40`, fontSize: '0.675rem' }}>
                        {rec.badge}
                      </span>
                      <span style={{ fontSize: '0.725rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                        {rec.type}
                      </span>
                    </div>
                    <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.25rem' }}>
                      {rec.title}
                    </div>
                    <div style={{ fontSize: '0.825rem', color: 'var(--text-secondary)' }}>
                      💡 {rec.reason}
                    </div>
                  </div>

                  <ArrowRight size={18} color="var(--primary-light)" flexShrink={0} />
                </div>
              ))}
            </div>
          </div>

          {/* Legal Literacy Journey Timeline (Section 21) */}
          <div>
            <div style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Activity size={19} color="var(--accent-emerald)" />
              <span>{t('journeyTimeline')}</span>
            </div>

            <div className="glass-panel" style={{ padding: '1.35rem' }}>
              {history && history.length > 0 ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
                  {history.slice(0, 4).map(item => (
                    <div key={item.id} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                      <div style={{
                        width: '9px',
                        height: '9px',
                        borderRadius: '50%',
                        background: 'var(--primary)',
                        marginTop: '6px',
                        boxShadow: '0 0 10px var(--primary)'
                      }} />
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-main)' }}>
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
                  Start your journey by completing a case scenario or quiz!
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Right Column: Daily Challenge & Quick CTA Tiles */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          {/* DAILY LEGAL CHALLENGE (Section 13) */}
          <div className="glass-panel" style={{
            padding: '1.65rem',
            border: isDailyCompletedToday ? '1px solid #10b981' : '1px solid var(--border-medium)',
            background: isDailyCompletedToday ? 'rgba(16, 185, 129, 0.08)' : 'var(--bg-card)',
            boxShadow: 'var(--shadow-md)',
            position: 'relative'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.85rem' }}>
              <span className="badge-tag badge-review" style={{ background: 'rgba(245, 158, 11, 0.16)', color: '#f59e0b' }}>
                <Zap size={14} />
                Daily Legal Challenge
              </span>
              <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#f59e0b' }}>
                +50 XP
              </span>
            </div>

            <h3 style={{ fontSize: '1.15rem', marginBottom: '0.65rem', color: 'var(--text-main)' }}>
              {activeDailyChallenge.title}
            </h3>

            <p style={{ fontSize: '0.885rem', color: 'var(--text-secondary)', lineHeight: 1.55, marginBottom: '1.15rem' }}>
              {activeDailyChallenge.scenario}
            </p>

            {isDailyCompletedToday ? (
              <div style={{
                padding: '0.85rem 1rem',
                background: 'rgba(16, 185, 129, 0.15)',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                borderRadius: 'var(--radius-md)',
                color: '#34d399',
                fontSize: '0.875rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <CheckCircle2 size={20} />
                <span>Daily Challenge completed! Streak increased! (+50 XP)</span>
              </div>
            ) : (
              <div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem', marginBottom: '1.15rem' }}>
                  {activeDailyChallenge.options.map((opt, optIdx) => (
                    <div
                      key={optIdx}
                      onClick={() => {
                        sounds.playClick();
                        setSelectedDailyOption(optIdx);
                      }}
                      style={{
                        padding: '0.85rem',
                        borderRadius: 'var(--radius-md)',
                        background: selectedDailyOption === optIdx ? 'rgba(99, 102, 241, 0.2)' : 'rgba(255, 255, 255, 0.03)',
                        border: selectedDailyOption === optIdx ? '1px solid var(--primary-light)' : '1px solid var(--border-subtle)',
                        fontSize: '0.85rem',
                        cursor: 'pointer',
                        color: 'var(--text-main)',
                        transition: 'all var(--transition-fast)'
                      }}
                    >
                      {opt.text}
                    </div>
                  ))}
                </div>

                <button
                  onClick={handleDailySubmit}
                  disabled={selectedDailyOption === null}
                  className="btn-primary"
                  style={{ width: '100%', fontSize: '0.9rem', opacity: selectedDailyOption !== null ? 1 : 0.5 }}
                >
                  <span>Submit Answer</span>
                  <Zap size={16} />
                </button>
              </div>
            )}
          </div>

          {/* Quick CTA: Ask LawLink Guide AI */}
          <div 
            onClick={() => {
              sounds.playClick();
              onNavigate('ai');
            }}
            className="glass-panel glass-panel-interactive"
            style={{
              padding: '1.65rem',
              background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.14) 0%, rgba(59, 130, 246, 0.12) 100%)',
              border: '1px solid rgba(6, 182, 212, 0.35)',
              boxShadow: 'var(--shadow-cyan-glow)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '0.65rem' }}>
              <div style={{
                width: '42px',
                height: '42px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 14px rgba(6, 182, 212, 0.4)'
              }}>
                <Bot size={22} color="#ffffff" />
              </div>
              <div>
                <h3 style={{ fontSize: '1.1rem', color: '#ffffff' }}>
                  Ask LawLink Guide AI
                </h3>
                <span style={{ fontSize: '0.75rem', color: '#38bdf8' }}>
                  Zero-Hallucination Legal Assistant
                </span>
              </div>
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.55, marginBottom: '0.85rem' }}>
              Facing an urgent dilemma? Ask about UPI fraud, landlord disputes, or traffic stops with verified statutory grounding.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.825rem', color: '#38bdf8', fontWeight: 700 }}>
              <span>Start Voice or Text Conversation</span>
              <ArrowRight size={15} />
            </div>
          </div>

          {/* Quick CTA: Find Help Near Me */}
          <div 
            onClick={() => {
              sounds.playClick();
              onNavigate('maps');
            }}
            className="glass-panel glass-panel-interactive"
            style={{
              padding: '1.65rem',
              background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.12) 0%, rgba(6, 182, 212, 0.1) 100%)',
              border: '1px solid rgba(16, 185, 129, 0.35)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '0.65rem' }}>
              <div style={{
                width: '42px',
                height: '42px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #10b981 0%, #06b6d4 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 14px rgba(16, 185, 129, 0.4)'
              }}>
                <MapPin size={22} color="#ffffff" />
              </div>
              <div>
                <h3 style={{ fontSize: '1.1rem', color: '#ffffff' }}>
                  Find Legal Help Near Me
                </h3>
                <span style={{ fontSize: '0.75rem', color: '#34d399' }}>
                  Google Maps Platform Integration
                </span>
              </div>
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.55, marginBottom: '0.85rem' }}>
              Locate nearby Cybercrime Police, Free Legal Aid (DLSA), Consumer Forums, and Sakhi crisis centres.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.825rem', color: '#34d399', fontWeight: 700 }}>
              <span>View Map & Turn-by-Turn Directions</span>
              <ArrowRight size={15} />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .dash-split-container {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};
