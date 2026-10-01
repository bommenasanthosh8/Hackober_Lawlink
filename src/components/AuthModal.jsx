import React, { useState } from 'react';
import { 
  X, 
  Mail, 
  Lock, 
  User, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles,
  AlertCircle,
  Copy,
  Check,
  Eye,
  EyeOff,
  Key,
  LogIn,
  CheckCircle2,
  ShieldAlert
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { sounds } from '../utils/soundEffects';

export const AuthModal = ({ isOpen, onClose, initialTab = 'credentials' }) => {
  const { loginWithEmail, signupWithEmail, loginWithGoogle, switchDemoAccount, demoProfiles, authError } = useAuth();
  const [activeTab, setActiveTab] = useState(initialTab); // 'credentials', 'login', 'signup'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [localErr, setLocalErr] = useState('');
  const [copiedKey, setCopiedKey] = useState(null);

  if (!isOpen) return null;

  const copyToClipboard = (text, key) => {
    sounds.playClick();
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 2000);
    }
  };

  const handleFillDemo = (demo) => {
    sounds.playClick();
    setEmail(demo.email);
    setPassword(demo.password || 'Demo@1234');
    setActiveTab('login');
  };

  const handleQuickLogin = async (uid) => {
    sounds.playSuccess();
    setLoading(true);
    try {
      await switchDemoAccount(uid);
      onClose();
    } catch (err) {
      setLocalErr(err.message || 'Login failed.');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLocalErr('');
    if (!email || !password) {
      setLocalErr('Please enter both email and password.');
      return;
    }

    sounds.playClick();
    setLoading(true);
    try {
      if (activeTab === 'signup') {
        await signupWithEmail(email, password, name);
      } else {
        await loginWithEmail(email, password);
      }
      sounds.playSuccess();
      onClose();
    } catch (err) {
      sounds.playError();
      setLocalErr(err.message || 'Authentication error. Please check credentials.');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogle = async () => {
    sounds.playClick();
    setLoading(true);
    try {
      await loginWithGoogle();
      sounds.playSuccess();
      onClose();
    } catch (err) {
      sounds.playError();
      setLocalErr(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-backdrop" onClick={onClose} style={{ zIndex: 1000 }}>
      <div 
        className="modal-content" 
        onClick={e => e.stopPropagation()} 
        style={{ 
          maxWidth: '560px', 
          padding: '2rem', 
          position: 'relative',
          background: '#090d16',
          border: '1px solid var(--border-medium)',
          boxShadow: '0 25px 60px rgba(0,0,0,0.85), 0 0 35px rgba(99, 102, 241, 0.2)'
        }}
      >
        <button 
          onClick={() => {
            sounds.playClick();
            onClose();
          }} 
          style={{ position: 'absolute', top: '1.25rem', right: '1.25rem', color: 'var(--text-muted)' }}
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div style={{ textAlign: 'center', marginBottom: '1.25rem' }}>
          <div style={{
            width: '50px',
            height: '50px',
            borderRadius: '16px',
            background: 'linear-gradient(135deg, #4f46e5 0%, #06b6d4 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 0.75rem',
            boxShadow: '0 4px 20px var(--primary-glow)',
            color: '#ffffff'
          }}>
            <ShieldCheck size={28} />
          </div>
          <h2 style={{ fontSize: '1.55rem', marginBottom: '0.25rem', fontWeight: 800 }}>
            {activeTab === 'signup' ? 'Create Civic Learner Account' : 'LawLink Account Authentication'}
          </h2>
          <p style={{ fontSize: '0.825rem', color: 'var(--text-secondary)' }}>
            Strict UID isolation, role-based access & multi-device synchronization
          </p>
        </div>

        {/* Tab Switcher */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: '0.35rem',
          background: 'rgba(255, 255, 255, 0.04)',
          padding: '0.25rem',
          borderRadius: 'var(--radius-md)',
          marginBottom: '1.5rem',
          border: '1px solid var(--border-subtle)'
        }}>
          <button
            type="button"
            onClick={() => {
              sounds.playClick();
              setActiveTab('credentials');
            }}
            style={{
              padding: '0.45rem 0.5rem',
              borderRadius: 'var(--radius-sm)',
              fontSize: '0.785rem',
              fontWeight: 700,
              background: activeTab === 'credentials' ? 'var(--primary)' : 'transparent',
              color: activeTab === 'credentials' ? '#ffffff' : 'var(--text-secondary)',
              transition: 'all 0.2s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.3rem'
            }}
          >
            <Key size={13} />
            <span>Credentials</span>
          </button>

          <button
            type="button"
            onClick={() => {
              sounds.playClick();
              setActiveTab('login');
            }}
            style={{
              padding: '0.45rem 0.5rem',
              borderRadius: 'var(--radius-sm)',
              fontSize: '0.785rem',
              fontWeight: 700,
              background: activeTab === 'login' ? 'var(--primary)' : 'transparent',
              color: activeTab === 'login' ? '#ffffff' : 'var(--text-secondary)',
              transition: 'all 0.2s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.3rem'
            }}
          >
            <LogIn size={13} />
            <span>Sign In</span>
          </button>

          <button
            type="button"
            onClick={() => {
              sounds.playClick();
              setActiveTab('signup');
            }}
            style={{
              padding: '0.45rem 0.5rem',
              borderRadius: 'var(--radius-sm)',
              fontSize: '0.785rem',
              fontWeight: 700,
              background: activeTab === 'signup' ? 'var(--primary)' : 'transparent',
              color: activeTab === 'signup' ? '#ffffff' : 'var(--text-secondary)',
              transition: 'all 0.2s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.3rem'
            }}
          >
            <User size={13} />
            <span>New Sign Up</span>
          </button>
        </div>

        {/* Error Notification */}
        {(localErr || authError) && (
          <div style={{
            padding: '0.65rem 0.85rem',
            background: 'rgba(244, 63, 94, 0.12)',
            border: '1px solid rgba(244, 63, 94, 0.3)',
            borderRadius: 'var(--radius-sm)',
            color: '#fb7185',
            fontSize: '0.8rem',
            marginBottom: '1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem'
          }}>
            <AlertCircle size={15} flexShrink={0} />
            <span>{localErr || authError}</span>
          </div>
        )}

        {/* TAB 1: OFFICIAL DEMO CREDENTIALS & 1-CLICK FAST LOGIN */}
        {activeTab === 'credentials' && (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--accent-amber)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.04em', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                <Sparkles size={14} />
                <span>Verified Account Credentials for Evaluation</span>
              </span>
              <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                1-Click or Manual Login
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', maxHeight: '380px', overflowY: 'auto', paddingRight: '4px' }}>
              {demoProfiles.map((dp) => (
                <div
                  key={dp.uid}
                  style={{
                    padding: '0.85rem',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid var(--border-medium)',
                    borderRadius: 'var(--radius-md)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.6rem'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                      <img 
                        src={dp.photoURL} 
                        alt={dp.displayName} 
                        style={{ width: '36px', height: '36px', borderRadius: '50%', objectFit: 'cover', border: '1px solid var(--border-highlight)' }} 
                      />
                      <div>
                        <div style={{ fontWeight: 800, fontSize: '0.9rem', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                          <span>{dp.displayName}</span>
                          <span className={`badge-tag ${dp.role === 'admin' ? 'badge-urgent' : 'badge-primary'}`} style={{ fontSize: '0.65rem', padding: '0.1rem 0.45rem' }}>
                            {dp.roleTitle || dp.role}
                          </span>
                        </div>
                        <div style={{ fontSize: '0.725rem', color: 'var(--text-muted)' }}>
                          {dp.description}
                        </div>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleQuickLogin(dp.uid)}
                      disabled={loading}
                      className="btn-primary"
                      style={{
                        padding: '0.4rem 0.85rem',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        flexShrink: 0
                      }}
                    >
                      <LogIn size={13} />
                      <span>1-Click Sign In</span>
                    </button>
                  </div>

                  {/* Credentials Box */}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '0.5rem',
                    background: 'rgba(0, 0, 0, 0.25)',
                    padding: '0.5rem 0.75rem',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '0.75rem'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.3rem' }}>
                      <span style={{ color: 'var(--text-muted)' }}>Email:</span>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                        <code style={{ color: 'var(--primary-light)', fontWeight: 600 }}>{dp.email}</code>
                        <button
                          type="button"
                          onClick={() => copyToClipboard(dp.email, `${dp.uid}_email`)}
                          title="Copy Email"
                          style={{ color: 'var(--text-muted)' }}
                        >
                          {copiedKey === `${dp.uid}_email` ? <Check size={12} color="#10b981" /> : <Copy size={12} />}
                        </button>
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.3rem' }}>
                      <span style={{ color: 'var(--text-muted)' }}>Password:</span>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                        <code style={{ color: '#fbbf24', fontWeight: 600 }}>{dp.password || 'Citizen@123'}</code>
                        <button
                          type="button"
                          onClick={() => copyToClipboard(dp.password || 'Citizen@123', `${dp.uid}_pwd`)}
                          title="Copy Password"
                          style={{ color: 'var(--text-muted)' }}
                        >
                          {copiedKey === `${dp.uid}_pwd` ? <Check size={12} color="#10b981" /> : <Copy size={12} />}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '1.25rem', textAlign: 'center' }}>
              <button
                type="button"
                onClick={() => setActiveTab('login')}
                style={{ fontSize: '0.8rem', color: 'var(--primary-light)', fontWeight: 600, textDecoration: 'underline' }}
              >
                Or enter credentials manually on the Sign In form →
              </button>
            </div>
          </div>
        )}

        {/* TAB 2: MANUAL EMAIL & PASSWORD LOGIN */}
        {activeTab === 'login' && (
          <div>
            {/* Quick Auto-Fill Chips */}
            <div style={{ marginBottom: '1rem' }}>
              <div style={{ fontSize: '0.725rem', color: 'var(--text-muted)', marginBottom: '0.35rem', fontWeight: 700, textTransform: 'uppercase' }}>
                Auto-fill credentials:
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {demoProfiles.map((dp) => (
                  <button
                    key={dp.uid}
                    type="button"
                    onClick={() => handleFillDemo(dp)}
                    style={{
                      padding: '0.25rem 0.6rem',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: 'var(--radius-full)',
                      fontSize: '0.725rem',
                      color: 'var(--text-secondary)'
                    }}
                  >
                    {dp.displayName.split(' ')[0]} ({dp.role === 'admin' ? 'Admin' : 'Learner'})
                  </button>
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <div style={{ position: 'relative' }}>
                <Mail size={16} color="var(--text-muted)" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Email Address (e.g. priya.sharma@lawlink.org)"
                  required
                  style={{
                    width: '100%',
                    padding: '0.7rem 1rem 0.7rem 2.4rem',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid var(--border-medium)',
                    borderRadius: 'var(--radius-md)',
                    color: 'var(--text-main)',
                    fontSize: '0.9rem',
                    outline: 'none'
                  }}
                />
              </div>

              <div style={{ position: 'relative' }}>
                <Lock size={16} color="var(--text-muted)" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="Password"
                  required
                  style={{
                    width: '100%',
                    padding: '0.7rem 2.8rem 0.7rem 2.4rem',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid var(--border-medium)',
                    borderRadius: 'var(--radius-md)',
                    color: 'var(--text-main)',
                    fontSize: '0.9rem',
                    outline: 'none'
                  }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }}
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn-primary"
                style={{ width: '100%', marginTop: '0.4rem', padding: '0.75rem' }}
              >
                <span>{loading ? 'Verifying Account...' : 'Sign In'}</span>
                <ArrowRight size={16} />
              </button>
            </form>

            <div style={{ marginTop: '0.75rem' }}>
              <button
                type="button"
                onClick={handleGoogle}
                disabled={loading}
                className="btn-secondary"
                style={{ width: '100%', fontSize: '0.85rem', padding: '0.65rem' }}
              >
                <span>Continue with Google</span>
              </button>
            </div>

            <div style={{ textAlign: 'center', marginTop: '1rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              Don't have an account?{' '}
              <button
                type="button"
                onClick={() => setActiveTab('signup')}
                style={{ color: 'var(--primary-light)', fontWeight: 700 }}
              >
                Register New User
              </button>
            </div>
          </div>
        )}

        {/* TAB 3: SIGN UP NEW USER */}
        {activeTab === 'signup' && (
          <div>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <div style={{ position: 'relative' }}>
                <User size={16} color="var(--text-muted)" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
                <input
                  type="text"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder="Your Full Name (e.g. Rahul Varma)"
                  required
                  style={{
                    width: '100%',
                    padding: '0.7rem 1rem 0.7rem 2.4rem',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid var(--border-medium)',
                    borderRadius: 'var(--radius-md)',
                    color: 'var(--text-main)',
                    fontSize: '0.9rem',
                    outline: 'none'
                  }}
                />
              </div>

              <div style={{ position: 'relative' }}>
                <Mail size={16} color="var(--text-muted)" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Email Address"
                  required
                  style={{
                    width: '100%',
                    padding: '0.7rem 1rem 0.7rem 2.4rem',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid var(--border-medium)',
                    borderRadius: 'var(--radius-md)',
                    color: 'var(--text-main)',
                    fontSize: '0.9rem',
                    outline: 'none'
                  }}
                />
              </div>

              <div style={{ position: 'relative' }}>
                <Lock size={16} color="var(--text-muted)" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="Password (min 6 characters)"
                  required
                  style={{
                    width: '100%',
                    padding: '0.7rem 2.8rem 0.7rem 2.4rem',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid var(--border-medium)',
                    borderRadius: 'var(--radius-md)',
                    color: 'var(--text-main)',
                    fontSize: '0.9rem',
                    outline: 'none'
                  }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }}
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn-primary"
                style={{ width: '100%', marginTop: '0.4rem', padding: '0.75rem' }}
              >
                <span>{loading ? 'Creating Isolated Account...' : 'Register Account'}</span>
                <ArrowRight size={16} />
              </button>
            </form>

            <div style={{ textAlign: 'center', marginTop: '1rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              Already registered?{' '}
              <button
                type="button"
                onClick={() => setActiveTab('login')}
                style={{ color: 'var(--primary-light)', fontWeight: 700 }}
              >
                Sign In to Existing Account
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
