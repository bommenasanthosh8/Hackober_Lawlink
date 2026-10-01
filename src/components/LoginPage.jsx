import React, { useState, useEffect, useRef } from 'react';
import { Scale, Shield, BookOpen, Users, Star, ChevronRight, Eye, EyeOff, Mail, Lock, User, Gavel, FileText, Award, Globe, ArrowRight, Sparkles } from 'lucide-react';
import { useAuth, DEMO_PROFILES } from '../context/AuthContext';

// Animated floating law icons background
const FloatingLawIcon = ({ icon: Icon, style, delay = 0, size = 24, color = '#6366f1' }) => (
  <div style={{
    position: 'absolute',
    animation: `floatLaw ${6 + delay * 0.5}s ease-in-out infinite`,
    animationDelay: `${delay}s`,
    opacity: 0.12,
    color,
    ...style
  }}>
    <Icon size={size} />
  </div>
);

// Animated Legal Stats Ticker
const StatBadge = ({ icon: Icon, value, label, color, delay }) => (
  <div style={{
    display: 'flex', alignItems: 'center', gap: '0.6rem',
    background: 'white',
    borderRadius: '999px',
    padding: '0.5rem 1.1rem',
    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
    animation: `slideInStat 0.6s ease forwards`,
    animationDelay: `${delay}s`,
    opacity: 0,
    border: `1.5px solid ${color}22`,
  }}>
    <div style={{
      width: 32, height: 32, borderRadius: '50%',
      background: `${color}15`,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      color,
    }}>
      <Icon size={16} />
    </div>
    <div>
      <div style={{ fontWeight: 800, fontSize: '0.95rem', color: '#1e293b', lineHeight: 1 }}>{value}</div>
      <div style={{ fontSize: '0.7rem', color: '#64748b', lineHeight: 1.2 }}>{label}</div>
    </div>
  </div>
);

// Typing animation for hero text
const useTypingEffect = (words, speed = 80) => {
  const [displayed, setDisplayed] = useState('');
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    const timer = setTimeout(() => {
      if (!deleting) {
        setDisplayed(current.slice(0, charIdx + 1));
        if (charIdx + 1 === current.length) {
          setTimeout(() => setDeleting(true), 1800);
        } else {
          setCharIdx(c => c + 1);
        }
      } else {
        setDisplayed(current.slice(0, charIdx - 1));
        if (charIdx - 1 === 0) {
          setDeleting(false);
          setWordIdx(w => (w + 1) % words.length);
          setCharIdx(0);
        } else {
          setCharIdx(c => c - 1);
        }
      }
    }, deleting ? speed / 2 : speed);
    return () => clearTimeout(timer);
  }, [charIdx, deleting, wordIdx, words, speed]);

  return displayed;
};

export function LoginPage({ onLoginSuccess }) {
  const { loginWithEmail, signupWithEmail, loginWithGoogle, switchDemoAccount, loading } = useAuth();
  const [tab, setTab] = useState('login'); // login | signup | demo
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const typedWord = useTypingEffect([
    'your rights.',
    'the Constitution.',
    'cybercrime laws.',
    'consumer rights.',
    'labor protections.',
    'women\'s safety laws.',
  ], 70);

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) { setError('Please enter email and password.'); return; }
    setIsLoading(true); setError('');
    try {
      await loginWithEmail(email, password);
      setSuccess('Welcome back!');
      setTimeout(onLoginSuccess, 600);
    } catch (err) {
      setError(err.message || 'Login failed. Check credentials.');
    } finally { setIsLoading(false); }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    if (!email || !password || !name) { setError('All fields required.'); return; }
    if (password.length < 6) { setError('Password must be at least 6 characters.'); return; }
    setIsLoading(true); setError('');
    try {
      await signupWithEmail(email, password, name);
      setSuccess('Account created! Welcome to LawLink!');
      setTimeout(onLoginSuccess, 700);
    } catch (err) {
      setError(err.message || 'Signup failed. Try again.');
    } finally { setIsLoading(false); }
  };

  const handleGoogle = async () => {
    setIsLoading(true); setError('');
    try {
      await loginWithGoogle();
      setSuccess('Signed in with Google!');
      setTimeout(onLoginSuccess, 600);
    } catch (err) {
      setError(err.message || 'Google sign-in failed.');
    } finally { setIsLoading(false); }
  };

  const handleDemoLogin = async (uid) => {
    setIsLoading(true); setError('');
    try {
      await switchDemoAccount(uid);
      setSuccess('Demo account loaded!');
      setTimeout(onLoginSuccess, 600);
    } catch (err) {
      setError('Failed to load demo account.');
    } finally { setIsLoading(false); }
  };

  const floatingIcons = [
    { icon: Scale, style: { top: '8%', left: '5%' }, delay: 0, size: 48, color: '#6366f1' },
    { icon: Shield, style: { top: '15%', right: '8%' }, delay: 1.2, size: 36, color: '#06b6d4' },
    { icon: Gavel, style: { top: '35%', left: '3%' }, delay: 0.8, size: 40, color: '#f59e0b' },
    { icon: BookOpen, style: { top: '55%', right: '5%' }, delay: 2, size: 44, color: '#10b981' },
    { icon: FileText, style: { top: '72%', left: '7%' }, delay: 1.5, size: 32, color: '#f43f5e' },
    { icon: Award, style: { bottom: '15%', right: '10%' }, delay: 0.4, size: 38, color: '#a855f7' },
    { icon: Globe, style: { top: '45%', right: '2%' }, delay: 2.5, size: 28, color: '#6366f1' },
    { icon: Users, style: { bottom: '25%', left: '4%' }, delay: 1.8, size: 30, color: '#06b6d4' },
  ];

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f0f4ff 0%, #faf5ff 40%, #eff6ff 70%, #f0fdf4 100%)',
      display: 'flex',
      alignItems: 'stretch',
      position: 'relative',
      overflow: 'hidden',
      fontFamily: "'Inter', -apple-system, sans-serif",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700;800;900&family=Inter:wght@400;500;600;700&display=swap');
        
        @keyframes floatLaw {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-18px) rotate(5deg); }
          66% { transform: translateY(8px) rotate(-3deg); }
        }
        @keyframes slideInStat {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes heroSlideIn {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes formSlideIn {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes pulse-ring {
          0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(99,102,241,0.4); }
          70% { transform: scale(1); box-shadow: 0 0 0 12px rgba(99,102,241,0); }
          100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(99,102,241,0); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.92); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes orbFloat {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(20px, -25px) scale(1.05); }
        }
        @keyframes tickerSlide {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes cursorBlink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .login-input {
          width: 100%;
          padding: 0.85rem 1rem 0.85rem 2.8rem;
          border: 1.5px solid #e2e8f0;
          border-radius: 12px;
          font-size: 0.95rem;
          font-family: inherit;
          color: #1e293b;
          background: #ffffff;
          transition: all 0.2s ease;
          outline: none;
        }
        .login-input:focus {
          border-color: #6366f1;
          box-shadow: 0 0 0 3px rgba(99,102,241,0.12);
        }
        .login-input::placeholder { color: #94a3b8; }
        .tab-btn {
          flex: 1;
          padding: 0.6rem 0.5rem;
          border-radius: 10px;
          font-weight: 600;
          font-size: 0.85rem;
          transition: all 0.2s ease;
          cursor: pointer;
          border: none;
          background: transparent;
          color: #64748b;
        }
        .tab-btn.active {
          background: #ffffff;
          color: #4f46e5;
          box-shadow: 0 2px 8px rgba(0,0,0,0.08);
        }
        .tab-btn:hover:not(.active) { color: #4f46e5; }
        .demo-card {
          display: flex; align-items: center; gap: 0.75rem;
          padding: 0.85rem 1rem;
          background: #ffffff;
          border: 1.5px solid #e2e8f0;
          border-radius: 14px;
          cursor: pointer;
          transition: all 0.22s ease;
          text-align: left;
        }
        .demo-card:hover {
          border-color: #6366f1;
          box-shadow: 0 4px 16px rgba(99,102,241,0.12);
          transform: translateY(-2px);
        }
        .login-btn-primary {
          width: 100%;
          padding: 0.9rem;
          background: linear-gradient(135deg, #4f46e5 0%, #6366f1 100%);
          color: white;
          border: none;
          border-radius: 12px;
          font-size: 1rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s ease;
          display: flex; align-items: center; justify-content: center; gap: 0.5rem;
          font-family: inherit;
        }
        .login-btn-primary:hover:not(:disabled) {
          background: linear-gradient(135deg, #4338ca 0%, #4f46e5 100%);
          box-shadow: 0 8px 24px rgba(99,102,241,0.35);
          transform: translateY(-1px);
        }
        .login-btn-primary:disabled { opacity: 0.7; cursor: not-allowed; }
        .google-btn {
          width: 100%;
          padding: 0.8rem;
          background: white;
          color: #374151;
          border: 1.5px solid #e2e8f0;
          border-radius: 12px;
          font-size: 0.9rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
          display: flex; align-items: center; justify-content: center; gap: 0.65rem;
          font-family: inherit;
        }
        .google-btn:hover { border-color: #6366f1; box-shadow: 0 4px 12px rgba(0,0,0,0.08); transform: translateY(-1px); }
        .ticker-wrap {
          overflow: hidden;
          white-space: nowrap;
        }
        .ticker-inner {
          display: inline-flex;
          gap: 2.5rem;
          animation: tickerSlide 22s linear infinite;
        }
      `}</style>

      {/* Animated background orbs */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        <div style={{ position: 'absolute', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 70%)', top: '-100px', left: '-100px', animation: 'orbFloat 8s ease-in-out infinite' }} />
        <div style={{ position: 'absolute', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 70%)', bottom: '-80px', right: '-80px', animation: 'orbFloat 10s ease-in-out infinite reverse' }} />
        <div style={{ position: 'absolute', width: 300, height: 300, borderRadius: '50%', background: 'radial-gradient(circle, rgba(168,85,247,0.07) 0%, transparent 70%)', top: '40%', right: '30%', animation: 'orbFloat 12s ease-in-out infinite' }} />
      </div>

      {/* Floating law icons */}
      {floatingIcons.map((ic, i) => <FloatingLawIcon key={i} {...ic} />)}

      {/* LEFT SIDE — Hero Panel */}
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '3rem 4rem',
        animation: 'heroSlideIn 0.7s ease',
        position: 'relative',
        minWidth: 0,
      }} className="login-hero-panel">
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '3rem' }}>
          <div style={{
            width: 52, height: 52, borderRadius: 14,
            background: 'linear-gradient(135deg, #4f46e5, #06b6d4)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 8px 24px rgba(99,102,241,0.35)',
            animation: 'pulse-ring 2.5s infinite',
          }}>
            <Scale size={28} color="white" />
          </div>
          <div>
            <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 900, fontSize: '1.6rem', color: '#1e293b', letterSpacing: '-0.03em', lineHeight: 1 }}>
              LAW<span style={{ color: '#4f46e5' }}>LINK</span>
            </div>
            <div style={{ fontSize: '0.7rem', color: '#64748b', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Gamified Legal Literacy
            </div>
          </div>
        </div>

        {/* Hero Headline */}
        <div style={{ maxWidth: '520px', marginBottom: '2rem' }}>
          <h1 style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: 'clamp(2rem, 4vw, 3.2rem)',
            fontWeight: 900,
            color: '#0f172a',
            lineHeight: 1.15,
            letterSpacing: '-0.03em',
            marginBottom: '1.25rem',
          }}>
            Know <span style={{
              background: 'linear-gradient(90deg, #4f46e5, #06b6d4)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>{typedWord}</span>
            <span style={{ animation: 'cursorBlink 1s infinite', color: '#4f46e5', WebkitTextFillColor: '#4f46e5' }}>|</span>
          </h1>
          <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.7, fontWeight: 400 }}>
            India's first gamified legal literacy platform. Learn your rights, practice real scenarios, and become legally empowered — one badge at a time.
          </p>
        </div>

        {/* Stats Row */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.65rem', marginBottom: '2.5rem' }}>
          <StatBadge icon={Users} value="50K+" label="Learners" color="#6366f1" delay={0.3} />
          <StatBadge icon={BookOpen} value="25+" label="Legal Topics" color="#06b6d4" delay={0.5} />
          <StatBadge icon={Award} value="100+" label="Badges" color="#f59e0b" delay={0.7} />
          <StatBadge icon={Shield} value="100%" label="Free Access" color="#10b981" delay={0.9} />
        </div>

        {/* Legal Facts Ticker */}
        <div style={{ marginBottom: '1.5rem' }}>
          <div style={{ fontSize: '0.7rem', color: '#94a3b8', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
            📜 Did You Know?
          </div>
          <div className="ticker-wrap" style={{ borderRadius: 10, background: 'rgba(99,102,241,0.06)', border: '1px solid rgba(99,102,241,0.15)', padding: '0.6rem 0' }}>
            <div className="ticker-inner" style={{ paddingLeft: '2rem' }}>
              {[
                '⚖️ Article 21 guarantees Right to Life & Personal Liberty',
                '🛡️ Zero FIR can be filed at any police station in India',
                '📱 Cybercrime complaints: report at cybercrime.gov.in',
                '👩‍⚖️ NALSA provides free legal aid to eligible citizens',
                '🚗 Motor Vehicles Act 2019 mandates digital RC & DL',
                '🏠 Rent Control Act protects tenants from illegal eviction',
                '⚖️ Article 21 guarantees Right to Life & Personal Liberty',
                '🛡️ Zero FIR can be filed at any police station in India',
                '📱 Cybercrime complaints: report at cybercrime.gov.in',
                '👩‍⚖️ NALSA provides free legal aid to eligible citizens',
              ].map((fact, i) => (
                <span key={i} style={{ fontSize: '0.8rem', color: '#4f46e5', fontWeight: 500, whiteSpace: 'nowrap' }}>
                  {fact} &nbsp;&nbsp;•&nbsp;&nbsp;
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Feature Pills */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
          {['🎯 Scenario Simulations', '🤖 AI Legal Guide', '🗺️ Find Help Near You', '🏆 Leaderboard', '📚 25+ Legal Topics', '🔒 Verified Content'].map((f, i) => (
            <span key={i} style={{
              padding: '0.35rem 0.9rem',
              background: 'white',
              border: '1px solid #e2e8f0',
              borderRadius: '999px',
              fontSize: '0.78rem',
              color: '#475569',
              fontWeight: 500,
              boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
            }}>{f}</span>
          ))}
        </div>
      </div>

      {/* RIGHT SIDE — Auth Panel */}
      <div style={{
        width: '100%',
        maxWidth: '460px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem 2.5rem',
        animation: 'formSlideIn 0.7s ease',
      }}>
        <div style={{
          width: '100%',
          background: 'rgba(255,255,255,0.92)',
          backdropFilter: 'blur(24px)',
          borderRadius: '24px',
          padding: '2.25rem',
          boxShadow: '0 20px 60px rgba(0,0,0,0.1), 0 8px 24px rgba(99,102,241,0.08)',
          border: '1.5px solid rgba(255,255,255,0.8)',
          animation: 'scaleIn 0.5s ease',
        }}>
          {/* Auth Tab Switcher */}
          <div style={{
            display: 'flex',
            background: '#f1f5f9',
            borderRadius: '12px',
            padding: '4px',
            marginBottom: '1.75rem',
            gap: '2px',
          }}>
            {[
              { id: 'login', label: '🔑 Sign In' },
              { id: 'signup', label: '✨ Sign Up' },
              { id: 'demo', label: '🎭 Try Demo' },
            ].map(t => (
              <button key={t.id} className={`tab-btn ${tab === t.id ? 'active' : ''}`} onClick={() => { setTab(t.id); setError(''); setSuccess(''); }}>
                {t.label}
              </button>
            ))}
          </div>

          {/* Success/Error messages */}
          {error && (
            <div style={{ background: '#fff1f2', border: '1px solid #fecdd3', borderRadius: 10, padding: '0.65rem 1rem', color: '#e11d48', fontSize: '0.85rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              ⚠️ {error}
            </div>
          )}
          {success && (
            <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 10, padding: '0.65rem 1rem', color: '#15803d', fontSize: '0.85rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              ✅ {success}
            </div>
          )}

          {/* LOGIN FORM */}
          {tab === 'login' && (
            <form onSubmit={handleEmailLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#374151', marginBottom: '0.4rem' }}>Email Address</label>
                <div style={{ position: 'relative' }}>
                  <Mail size={15} style={{ position: 'absolute', left: '0.9rem', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
                  <input className="login-input" type="email" placeholder="you@example.com" value={email} onChange={e => setEmail(e.target.value)} />
                </div>
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#374151', marginBottom: '0.4rem' }}>Password</label>
                <div style={{ position: 'relative' }}>
                  <Lock size={15} style={{ position: 'absolute', left: '0.9rem', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
                  <input className="login-input" type={showPass ? 'text' : 'password'} placeholder="Your password" value={password} onChange={e => setPassword(e.target.value)} />
                  <button type="button" onClick={() => setShowPass(s => !s)} style={{ position: 'absolute', right: '0.9rem', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8', background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'flex' }}>
                    {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>
              <button type="submit" className="login-btn-primary" disabled={isLoading}>
                {isLoading ? <><span style={{ width: 18, height: 18, border: '2.5px solid white', borderTop: '2.5px solid transparent', borderRadius: '50%', animation: 'spin 0.8s linear infinite', display: 'inline-block' }} /> Signing In...</> : <><ArrowRight size={18} /> Sign In to LawLink</>}
              </button>
              <div style={{ textAlign: 'center', fontSize: '0.8rem', color: '#94a3b8' }}>or</div>
              <button type="button" className="google-btn" onClick={handleGoogle} disabled={isLoading}>
                <svg width="18" height="18" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
                Continue with Google
              </button>
              <p style={{ textAlign: 'center', fontSize: '0.8rem', color: '#94a3b8', marginTop: '0.25rem' }}>
                No account?{' '}
                <button type="button" onClick={() => setTab('signup')} style={{ color: '#4f46e5', fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer', padding: 0, fontSize: 'inherit' }}>
                  Create one →
                </button>
              </p>
            </form>
          )}

          {/* SIGNUP FORM */}
          {tab === 'signup' && (
            <form onSubmit={handleSignup} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#374151', marginBottom: '0.4rem' }}>Full Name</label>
                <div style={{ position: 'relative' }}>
                  <User size={15} style={{ position: 'absolute', left: '0.9rem', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
                  <input className="login-input" type="text" placeholder="Your full name" value={name} onChange={e => setName(e.target.value)} />
                </div>
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#374151', marginBottom: '0.4rem' }}>Email Address</label>
                <div style={{ position: 'relative' }}>
                  <Mail size={15} style={{ position: 'absolute', left: '0.9rem', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
                  <input className="login-input" type="email" placeholder="you@example.com" value={email} onChange={e => setEmail(e.target.value)} />
                </div>
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#374151', marginBottom: '0.4rem' }}>Password</label>
                <div style={{ position: 'relative' }}>
                  <Lock size={15} style={{ position: 'absolute', left: '0.9rem', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
                  <input className="login-input" type={showPass ? 'text' : 'password'} placeholder="Min. 6 characters" value={password} onChange={e => setPassword(e.target.value)} />
                  <button type="button" onClick={() => setShowPass(s => !s)} style={{ position: 'absolute', right: '0.9rem', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8', background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'flex' }}>
                    {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>
              <button type="submit" className="login-btn-primary" disabled={isLoading}>
                {isLoading ? <><span style={{ width: 18, height: 18, border: '2.5px solid white', borderTop: '2.5px solid transparent', borderRadius: '50%', animation: 'spin 0.8s linear infinite', display: 'inline-block' }} /> Creating...</> : <><Sparkles size={18} /> Create Account</>}
              </button>
              <button type="button" className="google-btn" onClick={handleGoogle} disabled={isLoading}>
                <svg width="18" height="18" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
                Sign up with Google
              </button>
              <p style={{ textAlign: 'center', fontSize: '0.8rem', color: '#94a3b8' }}>
                Already have an account?{' '}
                <button type="button" onClick={() => setTab('login')} style={{ color: '#4f46e5', fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer', padding: 0, fontSize: 'inherit' }}>
                  Sign in →
                </button>
              </p>
            </form>
          )}

          {/* DEMO ACCOUNTS */}
          {tab === 'demo' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <p style={{ fontSize: '0.82rem', color: '#64748b', textAlign: 'center', marginBottom: '0.25rem', lineHeight: 1.5 }}>
                Try LawLink instantly with pre-loaded demo accounts — no signup needed!
              </p>
              {DEMO_PROFILES.map(profile => (
                <button key={profile.uid} className="demo-card" onClick={() => handleDemoLogin(profile.uid)} disabled={isLoading}>
                  <img src={profile.photoURL} alt={profile.displayName} style={{ width: 42, height: 42, borderRadius: '50%', objectFit: 'cover', border: '2px solid #e2e8f0' }} onError={e => e.target.style.display='none'} />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontWeight: 700, fontSize: '0.9rem', color: '#1e293b', marginBottom: '0.1rem' }}>{profile.displayName}</div>
                    <div style={{ fontSize: '0.72rem', color: '#64748b', marginBottom: '0.2rem' }}>{profile.roleTitle}</div>
                    <div style={{ fontSize: '0.68rem', color: '#94a3b8', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{profile.description}</div>
                  </div>
                  <ChevronRight size={16} color="#94a3b8" style={{ flexShrink: 0 }} />
                </button>
              ))}
              <div style={{ marginTop: '0.5rem', background: '#f8fafc', borderRadius: 10, padding: '0.75rem', border: '1px solid #e2e8f0' }}>
                <p style={{ fontSize: '0.72rem', color: '#64748b', textAlign: 'center', marginBottom: '0.4rem', fontWeight: 600 }}>Official Test Credentials</p>
                <div style={{ display: 'grid', gap: '0.25rem' }}>
                  {DEMO_PROFILES.map(p => (
                    <div key={p.uid} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', color: '#475569' }}>
                      <span style={{ fontWeight: 600 }}>{p.email}</span>
                      <span style={{ color: '#94a3b8', fontFamily: 'monospace' }}>{p.password}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Footer hint */}
          <p style={{ textAlign: 'center', fontSize: '0.72rem', color: '#94a3b8', marginTop: '1.5rem', lineHeight: 1.5 }}>
            🔒 Your data is secured with Firebase Auth & end-to-end encryption.<br />
            LawLink is free to use for all citizens.
          </p>
        </div>
      </div>

      {/* Mobile responsive */}
      <style>{`
        @media (max-width: 768px) {
          .login-hero-panel { display: none !important; }
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
