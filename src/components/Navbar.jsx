import React, { useState } from 'react';
import { 
  Scale, 
  Flame, 
  Award, 
  MapPin, 
  Bot, 
  Compass, 
  Trophy, 
  ShieldCheck, 
  User, 
  LogOut, 
  Globe, 
  Sparkles, 
  Menu, 
  X,
  BookOpen,
  PhoneCall,
  Search,
  Key,
  LogIn
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useGamification } from '../context/GamificationContext';
import { useLanguage } from '../context/LanguageContext';
import { sounds } from '../utils/soundEffects';

export const Navbar = ({ currentView, setView, onOpenDemoModal, onOpenAuthModal, onGlobalSearch }) => {
  const { user, profile, logout, switchDemoAccount, demoProfiles, isAdmin } = useAuth();
  const { progress, levelInfo } = useGamification();
  const { language, changeLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleNavClick = (viewName) => {
    sounds.playClick();
    setView(viewName);
    setMobileMenuOpen(false);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      sounds.playClick();
      onGlobalSearch(searchQuery.trim());
      setView('search');
      setSearchQuery('');
    }
  };

  return (
    <header className="navbar-header" style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: 'rgba(255, 255, 255, 0.92)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      borderBottom: '1px solid var(--border-subtle)',
      boxShadow: '0 1px 8px rgba(0,0,0,0.06)'
    }}>
      <div style={{
        maxWidth: '1360px',
        margin: '0 auto',
        padding: '0.75rem 1.25rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '1rem'
      }}>
        {/* Brand Logo & Tagline */}
        <div 
          onClick={() => handleNavClick('dashboard')} 
          style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer', flexShrink: 0 }}
        >
          <div style={{
            width: '42px',
            height: '42px',
            borderRadius: '12px',
            background: 'linear-gradient(135deg, #4f46e5 0%, #06b6d4 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 14px var(--primary-glow)'
          }}>
            <Scale size={24} color="#ffffff" />
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <span style={{ 
                fontFamily: 'var(--font-heading)', 
                fontWeight: 900, 
                fontSize: '1.35rem', 
                letterSpacing: '-0.02em',
                background: 'linear-gradient(135deg, #4f46e5 30%, #06b6d4 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                LAWLINK
              </span>
              <span style={{
                fontSize: '0.65rem',
                fontWeight: 700,
                background: 'rgba(99, 102, 241, 0.2)',
                color: '#818cf8',
                padding: '0.1rem 0.4rem',
                borderRadius: '4px',
                border: '1px solid rgba(99, 102, 241, 0.4)'
              }}>
                GDG
              </span>
            </div>
            <div style={{ 
              fontSize: '0.7rem', 
              color: 'var(--text-muted)', 
              fontWeight: 500,
              display: 'none',
              letterSpacing: '0.01em'
            }} className="brand-subtext">
              {t('tagline')}
            </div>
          </div>
        </div>

        {/* Search Bar (Desktop) */}
        <form 
          onSubmit={handleSearchSubmit}
          style={{ 
            flex: '1', 
            maxWidth: '320px', 
            position: 'relative',
            display: 'none' 
          }}
          className="search-form-desktop"
        >
          <Search size={16} color="var(--text-muted)" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t('searchPlaceholder')}
            style={{
              width: '100%',
              padding: '0.45rem 0.8rem 0.45rem 2.2rem',
              fontSize: '0.825rem',
              background: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid var(--border-medium)',
              borderRadius: 'var(--radius-full)',
              color: 'var(--text-main)',
              outline: 'none',
              transition: 'all var(--transition-fast)'
            }}
          />
        </form>

        {/* Primary Desktop Nav Links */}
        <nav style={{ display: 'none', alignItems: 'center', gap: '0.35rem' }} className="desktop-nav">
          <button 
            onClick={() => handleNavClick('dashboard')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              padding: '0.45rem 0.85rem',
              borderRadius: 'var(--radius-md)',
              fontSize: '0.875rem',
              fontWeight: 600,
              color: currentView === 'dashboard' ? '#4f46e5' : '#475569',
              background: currentView === 'dashboard' ? 'rgba(99, 102, 241, 0.1)' : 'transparent',
              border: currentView === 'dashboard' ? '1px solid rgba(99,102,241,0.3)' : '1px solid transparent',
              transition: 'all var(--transition-fast)'
            }}
          >
            <Compass size={17} />
            {t('navDashboard')}
          </button>

          <button 
            onClick={() => handleNavClick('topics')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              padding: '0.45rem 0.85rem',
              borderRadius: 'var(--radius-md)',
              fontSize: '0.875rem',
              fontWeight: 600,
              color: currentView === 'topics' || currentView === 'topic_detail' ? '#4f46e5' : '#475569',
              background: currentView === 'topics' || currentView === 'topic_detail' ? 'rgba(99, 102, 241, 0.1)' : 'transparent',
              border: currentView === 'topics' || currentView === 'topic_detail' ? '1px solid rgba(99,102,241,0.3)' : '1px solid transparent',
              transition: 'all var(--transition-fast)'
            }}
          >
            <BookOpen size={17} />
            {t('navTopics')}
          </button>

          <button 
            onClick={() => handleNavClick('live_cases')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.45rem',
              padding: '0.45rem 0.85rem',
              borderRadius: 'var(--radius-md)',
              fontSize: '0.875rem',
              fontWeight: 700,
              color: currentView === 'live_cases' || currentView === 'live_case_player' ? '#e11d48' : '#475569',
              background: currentView === 'live_cases' || currentView === 'live_case_player' ? 'rgba(244, 63, 94, 0.12)' : 'transparent',
              border: currentView === 'live_cases' || currentView === 'live_case_player' ? '1px solid rgba(244, 63, 94, 0.35)' : '1px solid transparent',
              transition: 'all var(--transition-fast)'
            }}
          >
            <PhoneCall size={17} color={currentView === 'live_cases' || currentView === 'live_case_player' ? '#e11d48' : '#64748b'} />
            <span>{t('navLiveCases')}</span>
            <span style={{
              fontSize: '0.6rem',
              fontWeight: 900,
              background: 'linear-gradient(135deg, #ef4444, #f43f5e)',
              color: '#ffffff',
              padding: '0.1rem 0.4rem',
              borderRadius: '999px',
              letterSpacing: '0.05em',
              boxShadow: '0 0 10px rgba(244, 63, 94, 0.4)'
            }}>
              LIVE
            </span>
          </button>

          <button 
            onClick={() => handleNavClick('maps')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              padding: '0.45rem 0.85rem',
              borderRadius: 'var(--radius-md)',
              fontSize: '0.875rem',
              fontWeight: 600,
              color: currentView === 'maps' ? '#4f46e5' : '#475569',
              background: currentView === 'maps' ? 'rgba(99, 102, 241, 0.1)' : 'transparent',
              border: currentView === 'maps' ? '1px solid rgba(99,102,241,0.3)' : '1px solid transparent'
            }}
          >
            <MapPin size={17} />
            {t('navFindHelp')}
          </button>

          <button 
            onClick={() => handleNavClick('ai')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              padding: '0.45rem 0.85rem',
              borderRadius: 'var(--radius-md)',
              fontSize: '0.875rem',
              fontWeight: 600,
              color: currentView === 'ai' ? '#0891b2' : '#475569',
              background: currentView === 'ai' ? 'rgba(6, 182, 212, 0.1)' : 'transparent',
              border: currentView === 'ai' ? '1px solid rgba(6, 182, 212, 0.35)' : '1px solid transparent'
            }}
          >
            <Bot size={17} />
            {t('navAskAI')}
          </button>

          <button 
            onClick={() => handleNavClick('leaderboard')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              padding: '0.45rem 0.85rem',
              borderRadius: 'var(--radius-md)',
              fontSize: '0.875rem',
              fontWeight: 600,
              color: currentView === 'leaderboard' ? '#4f46e5' : '#475569',
              background: currentView === 'leaderboard' ? 'rgba(99, 102, 241, 0.1)' : 'transparent',
              border: currentView === 'leaderboard' ? '1px solid rgba(99,102,241,0.3)' : '1px solid transparent'
            }}
          >
            <Trophy size={17} />
            {t('navLeaderboard')}
          </button>

          {isAdmin && (
            <button 
              onClick={() => handleNavClick('admin')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.45rem 0.85rem',
                borderRadius: 'var(--radius-md)',
                fontSize: '0.875rem',
                fontWeight: 600,
                color: '#f59e0b',
                background: currentView === 'admin' ? 'rgba(245, 158, 11, 0.16)' : 'transparent',
                border: currentView === 'admin' ? '1px solid rgba(245, 158, 11, 0.4)' : '1px solid transparent'
              }}
            >
              <ShieldCheck size={17} />
              {t('navAdmin')}
            </button>
          )}
        </nav>

        {/* Right Action Stack: Demo Mode, Language, Credentials, Login / Logout */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
          {/* 3-Minute Judge Demo Tour Button */}
          <button 
            onClick={() => {
              sounds.playClick();
              onOpenDemoModal();
            }}
            className="btn-demo-tour"
            title="Launch 3-Minute Guided Hackathon Evaluation Tour"
          >
            <Sparkles size={16} />
            <span>{t('btnDemoTour')}</span>
          </button>

          {/* Language Selector */}
          <div style={{ position: 'relative' }}>
            <select
              value={language}
              onChange={(e) => changeLanguage(e.target.value)}
              aria-label="Select Language"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid var(--border-subtle)',
                color: 'var(--text-main)',
                fontSize: '0.785rem',
                fontWeight: 600,
                padding: '0.4rem 0.6rem',
                borderRadius: 'var(--radius-md)',
                cursor: 'pointer',
                outline: 'none'
              }}
            >
              <option value="en" style={{ background: '#0f172a' }}>EN (English)</option>
              <option value="hi" style={{ background: '#0f172a' }}>HI (हिंदी)</option>
              <option value="te" style={{ background: '#0f172a' }}>TE (తెలుగు)</option>
            </select>
          </div>

          {/* IF LOGGED OUT: DEMO CREDENTIALS & SIGN IN BUTTONS */}
          {!user ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <button
                type="button"
                onClick={() => {
                  sounds.playClick();
                  onOpenAuthModal('credentials');
                }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  padding: '0.45rem 0.75rem',
                  borderRadius: 'var(--radius-full)',
                  background: 'rgba(245, 158, 11, 0.12)',
                  border: '1px solid rgba(245, 158, 11, 0.35)',
                  color: '#fbbf24',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  cursor: 'pointer'
                }}
                title="View official test credentials for all roles"
              >
                <Key size={14} />
                <span>Credentials</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  sounds.playClick();
                  onOpenAuthModal('login');
                }}
                className="btn-primary"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.45rem 1rem',
                  fontSize: '0.825rem',
                  fontWeight: 700
                }}
              >
                <LogIn size={15} />
                <span>Sign In</span>
              </button>
            </div>
          ) : (
            /* IF LOGGED IN: XP PILL, USER AVATAR & EXPLICIT LOGOUT BUTTON */
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              {/* User XP & Streak Pill */}
              <div 
                onClick={() => handleNavClick('profile')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  background: 'rgba(99, 102, 241, 0.12)',
                  border: '1px solid var(--border-highlight)',
                  borderRadius: 'var(--radius-full)',
                  padding: '0.3rem 0.75rem',
                  cursor: 'pointer'
                }}
                title="Click to view profile & learning stats"
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.2rem', color: '#f59e0b', fontWeight: 700, fontSize: '0.8rem' }}>
                  <Flame size={15} />
                  <span>{progress?.streak || 1}d</span>
                </div>
                <div style={{ height: '12px', width: '1px', background: 'var(--border-subtle)' }} />
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: '#a5b4fc', fontWeight: 700, fontSize: '0.8rem' }}>
                  <Award size={15} />
                  <span>{progress?.xp || 0} XP</span>
                </div>
              </div>

              {/* Profile Menu Dropdown */}
              <div style={{ position: 'relative' }}>
                <button
                  onClick={() => {
                    sounds.playClick();
                    setProfileDropdownOpen(!profileDropdownOpen);
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    padding: '0.3rem',
                    borderRadius: 'var(--radius-full)',
                    border: '1px solid var(--border-subtle)',
                    background: 'rgba(255, 255, 255, 0.05)',
                    cursor: 'pointer'
                  }}
                  aria-label="User Account Options"
                >
                  {profile?.photoURL ? (
                    <img 
                      src={profile.photoURL} 
                      alt={profile.displayName} 
                      style={{ width: '32px', height: '32px', borderRadius: '50%', objectFit: 'cover' }} 
                    />
                  ) : (
                    <div style={{ 
                      width: '32px', 
                      height: '32px', 
                      borderRadius: '50%', 
                      background: 'linear-gradient(135deg, #4f46e5 0%, #6366f1 100%)', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      color: '#ffffff',
                      fontWeight: 700,
                      fontSize: '0.85rem'
                    }}>
                      {profile?.displayName ? profile.displayName.charAt(0).toUpperCase() : 'U'}
                    </div>
                  )}
                </button>

                {profileDropdownOpen && (
                  <div 
                    style={{
                      position: 'absolute',
                      right: 0,
                      top: '115%',
                      width: '280px',
                      background: '#ffffff',
                      border: '1px solid var(--border-medium)',
                      borderRadius: 'var(--radius-lg)',
                      boxShadow: 'var(--shadow-lg)',
                      padding: '0.75rem',
                      zIndex: 200,
                      animation: 'modal-slide-in 0.2s ease'
                    }}
                  >
                    <div style={{ padding: '0.4rem 0.6rem 0.75rem', borderBottom: '1px solid var(--border-subtle)' }}>
                      <div style={{ fontWeight: 800, fontSize: '0.95rem', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                        <span>{profile?.displayName || 'Learner'}</span>
                        <span className={`badge-tag ${profile?.role === 'admin' ? 'badge-urgent' : 'badge-primary'}`} style={{ fontSize: '0.65rem', padding: '0.1rem 0.4rem' }}>
                          {profile?.role === 'admin' ? 'Admin' : 'Learner'}
                        </span>
                      </div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                        {profile?.email || 'learner@lawlink.org'}
                      </div>
                      <div style={{ marginTop: '0.35rem', display: 'inline-block' }}>
                        <span className="badge-tag badge-primary" style={{ fontSize: '0.65rem' }}>
                          {levelInfo?.levelTitle}
                        </span>
                      </div>
                    </div>

                    {/* View All Credentials */}
                    <div style={{ padding: '0.5rem 0.2rem', borderBottom: '1px solid var(--border-subtle)' }}>
                      <button
                        onClick={() => {
                          sounds.playClick();
                          setProfileDropdownOpen(false);
                          onOpenAuthModal('credentials');
                        }}
                        style={{
                          width: '100%',
                          textAlign: 'left',
                          padding: '0.45rem 0.6rem',
                          borderRadius: 'var(--radius-sm)',
                          fontSize: '0.775rem',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.4rem',
                          color: '#fbbf24',
                          background: 'rgba(245, 158, 11, 0.1)',
                          fontWeight: 700
                        }}
                      >
                        <Key size={14} />
                        <span>View All Account Credentials</span>
                      </button>
                    </div>

                    {/* Judge Account Switcher (For Account Isolation Testing) */}
                    <div style={{ padding: '0.6rem 0.2rem', borderBottom: '1px solid var(--border-subtle)' }}>
                      <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 800, marginBottom: '0.4rem', paddingLeft: '0.4rem' }}>
                        Test Profiles (Account Isolation)
                      </div>
                      {demoProfiles.map((dp) => (
                        <button
                          key={dp.uid}
                          onClick={() => {
                            sounds.playSuccess();
                            switchDemoAccount(dp.uid);
                            setProfileDropdownOpen(false);
                          }}
                          style={{
                            width: '100%',
                            textAlign: 'left',
                            padding: '0.4rem 0.5rem',
                            borderRadius: 'var(--radius-sm)',
                            fontSize: '0.775rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            color: user?.uid === dp.uid ? 'var(--primary-light)' : 'var(--text-secondary)',
                            background: user?.uid === dp.uid ? 'rgba(99, 102, 241, 0.12)' : 'transparent',
                            marginBottom: '0.2rem'
                          }}
                        >
                          <div>
                            <span style={{ fontWeight: 600 }}>{dp.displayName}</span>
                            <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginLeft: '0.35rem' }}>({dp.role})</span>
                          </div>
                          {user?.uid === dp.uid && <span style={{ fontSize: '0.7rem', color: '#10b981', fontWeight: 800 }}>✓ Active</span>}
                        </button>
                      ))}
                    </div>

                    <div style={{ paddingTop: '0.5rem' }}>
                      <button
                        onClick={() => {
                          handleNavClick('profile');
                          setProfileDropdownOpen(false);
                        }}
                        style={{
                          width: '100%',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          padding: '0.5rem',
                          color: 'var(--text-secondary)',
                          fontSize: '0.825rem',
                          borderRadius: 'var(--radius-sm)',
                          textAlign: 'left'
                        }}
                      >
                        <User size={15} />
                        {t('navProfile')}
                      </button>

                      <button
                        onClick={() => {
                          sounds.playClick();
                          logout();
                          setProfileDropdownOpen(false);
                        }}
                        style={{
                          width: '100%',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          padding: '0.5rem',
                          color: 'var(--accent-rose)',
                          fontSize: '0.825rem',
                          borderRadius: 'var(--radius-sm)',
                          textAlign: 'left',
                          fontWeight: 700
                        }}
                      >
                        <LogOut size={15} />
                        <span>Log Out</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Direct Desktop Log Out Button */}
              <button
                type="button"
                onClick={() => {
                  sounds.playClick();
                  logout();
                }}
                className="desktop-logout-btn"
                style={{
                  display: 'none',
                  alignItems: 'center',
                  gap: '0.35rem',
                  padding: '0.4rem 0.8rem',
                  borderRadius: 'var(--radius-md)',
                  background: 'rgba(244, 63, 94, 0.12)',
                  border: '1px solid rgba(244, 63, 94, 0.35)',
                  color: '#fb7185',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                title="Log out of LawLink"
              >
                <LogOut size={14} />
                <span>Log Out</span>
              </button>
            </div>
          )}

          {/* Mobile Menu Hamburger */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ display: 'flex', padding: '0.35rem', color: 'var(--text-main)' }}
            className="mobile-menu-btn"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div style={{
          background: '#ffffff',
          borderTop: '1px solid var(--border-subtle)',
          padding: '1rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem'
        }}>
          {user ? (
            <div style={{
              padding: '0.75rem',
              background: 'rgba(255, 255, 255, 0.03)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-subtle)',
              marginBottom: '0.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <div>
                <div style={{ fontWeight: 700, fontSize: '0.9rem', color: '#0f172a' }}>{profile?.displayName}</div>
                <div style={{ fontSize: '0.75rem', color: '#64748b' }}>{profile?.email}</div>
              </div>
              <button
                onClick={() => {
                  sounds.playClick();
                  logout();
                  setMobileMenuOpen(false);
                }}
                style={{
                  padding: '0.35rem 0.75rem',
                  background: 'rgba(244, 63, 94, 0.15)',
                  border: '1px solid rgba(244, 63, 94, 0.4)',
                  color: '#fb7185',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.3rem'
                }}
              >
                <LogOut size={13} />
                <span>Log Out</span>
              </button>
            </div>
          ) : (
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <button
                onClick={() => {
                  sounds.playClick();
                  setMobileMenuOpen(false);
                  onOpenAuthModal('credentials');
                }}
                style={{
                  flex: 1,
                  padding: '0.55rem',
                  background: 'rgba(245, 158, 11, 0.12)',
                  border: '1px solid rgba(245, 158, 11, 0.35)',
                  color: '#fbbf24',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.3rem'
                }}
              >
                <Key size={14} />
                <span>Credentials</span>
              </button>
              <button
                onClick={() => {
                  sounds.playClick();
                  setMobileMenuOpen(false);
                  onOpenAuthModal('login');
                }}
                className="btn-primary"
                style={{ flex: 1, padding: '0.55rem', fontSize: '0.8rem', justifyContent: 'center' }}
              >
                <LogIn size={14} />
                <span>Sign In</span>
              </button>
            </div>
          )}

          <button 
            onClick={() => handleNavClick('dashboard')}
            style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', padding: '0.6rem', color: '#1e293b', fontSize: '0.95rem', fontWeight: 600 }}
          >
            <Compass size={18} color="#4f46e5" />
            {t('navDashboard')}
          </button>
          <button 
            onClick={() => handleNavClick('topics')}
            style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', padding: '0.6rem', color: '#1e293b', fontSize: '0.95rem', fontWeight: 600 }}
          >
            <BookOpen size={18} color="#4f46e5" />
            {t('navTopics')}
          </button>
          <button 
            onClick={() => handleNavClick('live_cases')}
            style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', padding: '0.6rem', color: '#e11d48', fontSize: '0.95rem', fontWeight: 700 }}
          >
            <PhoneCall size={18} color="#e11d48" />
            <span>{t('navLiveCases')}</span>
            <span style={{
              fontSize: '0.6rem',
              fontWeight: 900,
              background: '#ef4444',
              color: '#ffffff',
              padding: '0.1rem 0.35rem',
              borderRadius: '999px'
            }}>
              VOICE
            </span>
          </button>
          <button 
            onClick={() => handleNavClick('maps')}
            style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', padding: '0.6rem', color: '#1e293b', fontSize: '0.95rem', fontWeight: 600 }}
          >
            <MapPin size={18} color="#4f46e5" />
            {t('navFindHelp')}
          </button>
          <button 
            onClick={() => handleNavClick('ai')}
            style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', padding: '0.6rem', color: '#0891b2', fontSize: '0.95rem', fontWeight: 600 }}
          >
            <Bot size={18} />
            {t('navAskAI')}
          </button>
          <button 
            onClick={() => handleNavClick('leaderboard')}
            style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', padding: '0.6rem', color: '#1e293b', fontSize: '0.95rem', fontWeight: 600 }}
          >
            <Trophy size={18} color="#4f46e5" />
            {t('navLeaderboard')}
          </button>
          {isAdmin && (
            <button 
              onClick={() => handleNavClick('admin')}
              style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', padding: '0.6rem', color: '#f59e0b', fontSize: '0.95rem' }}
            >
              <ShieldCheck size={18} />
              {t('navAdmin')}
            </button>
          )}
        </div>
      )}

      {/* Style for Responsive Breakpoints */}
      <style>{`
        @media (min-width: 900px) {
          .desktop-nav { display: flex !important; }
          .desktop-logout-btn { display: inline-flex !important; }
          .search-form-desktop { display: block !important; }
          .brand-subtext { display: block !important; }
          .mobile-menu-btn { display: none !important; }
        }
      `}</style>
    </header>
  );
};
