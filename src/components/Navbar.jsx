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
  LogIn,
  ChevronRight,
  ChevronDown,
  Layers,
  ArrowRight
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
      setMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'dashboard', label: t('navDashboard'), icon: Compass, color: '#4f46e5' },
    { id: 'topics', label: t('navTopics'), icon: BookOpen, color: '#4f46e5', match: ['topics', 'topic_detail', 'scenario', 'quiz'] },
    { 
      id: 'live_cases', 
      label: t('navLiveCases'), 
      icon: PhoneCall, 
      color: '#e11d48', 
      badge: 'LIVE', 
      match: ['live_cases', 'live_case_player'] 
    },
    { id: 'maps', label: t('navFindHelp'), icon: MapPin, color: '#4f46e5' },
    { id: 'ai', label: t('navAskAI'), icon: Bot, color: '#0891b2' },
    { id: 'leaderboard', label: t('navLeaderboard'), icon: Trophy, color: '#4f46e5' },
    ...(isAdmin ? [{ id: 'admin', label: t('navAdmin'), icon: ShieldCheck, color: '#f59e0b' }] : [])
  ];

  const isItemActive = (item) => {
    if (item.match) return item.match.includes(currentView);
    return currentView === item.id;
  };

  return (
    <>
      {/* ──────────────────────────────────────────────────────────── */}
      {/* 1. DESKTOP VERTICAL SIDEBAR NAVIGATION (>= 900px) */}
      {/* ──────────────────────────────────────────────────────────── */}
      <aside className="app-vertical-sidebar" style={{
        width: '275px',
        minWidth: '275px',
        maxWidth: '275px',
        height: '100vh',
        position: 'sticky',
        top: 0,
        background: '#ffffff',
        borderRight: '1px solid var(--border-subtle)',
        boxShadow: '1px 0 10px rgba(0, 0, 0, 0.03)',
        display: 'none',
        flexDirection: 'column',
        zIndex: 90,
        overflowY: 'auto',
        overflowX: 'hidden'
      }}>
        {/* Brand Header */}
        <div style={{
          padding: '1.25rem 1.25rem 1rem 1.25rem',
          borderBottom: '1px solid var(--border-subtle)'
        }}>
          <div 
            onClick={() => handleNavClick('dashboard')} 
            style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer' }}
          >
            <div style={{
              width: '42px',
              height: '42px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #4f46e5 0%, #06b6d4 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 14px var(--primary-glow)',
              flexShrink: 0
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
                  fontWeight: 800,
                  background: 'rgba(99, 102, 241, 0.15)',
                  color: '#4f46e5',
                  padding: '0.1rem 0.4rem',
                  borderRadius: '4px',
                  border: '1px solid rgba(99, 102, 241, 0.3)'
                }}>
                  GDG
                </span>
              </div>
              <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                Gamified Legal Platform
              </div>
            </div>
          </div>

          {/* Quick Search in Sidebar */}
          <form 
            onSubmit={handleSearchSubmit}
            style={{ 
              marginTop: '1rem',
              position: 'relative'
            }}
          >
            <Search size={15} color="var(--text-muted)" style={{ position: 'absolute', left: '11px', top: '50%', transform: 'translateY(-50%)' }} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t('searchPlaceholder')}
              style={{
                width: '100%',
                padding: '0.5rem 0.75rem 0.5rem 2.1rem',
                fontSize: '0.8rem',
                background: '#f8fafc',
                border: '1px solid var(--border-medium)',
                borderRadius: 'var(--radius-md)',
                color: 'var(--text-main)',
                outline: 'none',
                transition: 'all var(--transition-fast)'
              }}
            />
          </form>
        </div>

        {/* Vertical Navigation Links */}
        <nav style={{
          padding: '0.85rem 0.75rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.35rem',
          flex: 1
        }}>
          <div style={{
            fontSize: '0.68rem',
            fontWeight: 800,
            textTransform: 'uppercase',
            color: 'var(--text-muted)',
            letterSpacing: '0.06em',
            padding: '0.25rem 0.6rem 0.4rem'
          }}>
            Navigation
          </div>

          {navItems.map((item) => {
            const Icon = item.icon;
            const active = isItemActive(item);

            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '0.75rem',
                  padding: '0.6rem 0.75rem',
                  borderRadius: '10px',
                  fontSize: '0.875rem',
                  fontWeight: active ? 700 : 600,
                  color: active ? (item.color || '#4f46e5') : '#475569',
                  background: active 
                    ? (item.id === 'live_cases' ? 'rgba(225, 29, 72, 0.1)' : 'rgba(99, 102, 241, 0.1)') 
                    : 'transparent',
                  border: active
                    ? `1px solid ${item.id === 'live_cases' ? 'rgba(225, 29, 72, 0.3)' : 'rgba(99, 102, 241, 0.3)'}`
                    : '1px solid transparent',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'all 0.15s ease'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <Icon size={18} color={active ? item.color : '#64748b'} style={{ flexShrink: 0 }} />
                  <span>{item.label}</span>
                </div>

                {item.badge && (
                  <span style={{
                    fontSize: '0.62rem',
                    fontWeight: 900,
                    background: 'linear-gradient(135deg, #ef4444, #f43f5e)',
                    color: '#ffffff',
                    padding: '0.12rem 0.45rem',
                    borderRadius: '999px',
                    letterSpacing: '0.04em',
                    boxShadow: '0 0 10px rgba(239, 68, 68, 0.4)'
                  }}>
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}

          {/* Special Evaluation Section */}
          <div style={{
            fontSize: '0.68rem',
            fontWeight: 800,
            textTransform: 'uppercase',
            color: 'var(--text-muted)',
            letterSpacing: '0.06em',
            padding: '1rem 0.6rem 0.4rem'
          }}>
            Evaluator Tools
          </div>

          {/* 3-Minute Judge Demo Tour Button */}
          <button 
            onClick={() => {
              sounds.playClick();
              onOpenDemoModal();
            }}
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              padding: '0.65rem 0.85rem',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.15) 0%, rgba(217, 119, 6, 0.12) 100%)',
              border: '1.5px solid rgba(245, 158, 11, 0.4)',
              color: '#b45309',
              fontSize: '0.825rem',
              fontWeight: 800,
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(245, 158, 11, 0.15)'
            }}
            title="Launch 3-Minute Guided Hackathon Evaluation Tour"
          >
            <Sparkles size={16} color="#d97706" style={{ flexShrink: 0 }} />
            <span>{t('btnDemoTour')}</span>
          </button>

          {/* Language Selector */}
          <div style={{
            marginTop: '0.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0.5rem 0.75rem',
            background: '#f8fafc',
            border: '1px solid var(--border-subtle)',
            borderRadius: '10px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.785rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
              <Globe size={15} color="var(--primary-light)" style={{ flexShrink: 0 }} />
              <span>Language:</span>
            </div>
            <select
              value={language}
              onChange={(e) => changeLanguage(e.target.value)}
              aria-label="Select Language"
              style={{
                background: 'transparent',
                border: 'none',
                color: 'var(--text-main)',
                fontSize: '0.785rem',
                fontWeight: 700,
                cursor: 'pointer',
                outline: 'none'
              }}
            >
              <option value="en">English</option>
              <option value="hi">हिंदी (Hindi)</option>
              <option value="te">తెలుగు (Telugu)</option>
            </select>
          </div>
        </nav>

        {/* Bottom Profile & Gamification Dock */}
        <div style={{
          padding: '0.85rem',
          borderTop: '1px solid var(--border-subtle)',
          background: '#f8fafc'
        }}>
          {user ? (
            <div>
              {/* Gamification Stats Ribbon */}
              <div 
                onClick={() => handleNavClick('profile')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.45rem 0.65rem',
                  background: '#ffffff',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '8px',
                  marginBottom: '0.65rem',
                  cursor: 'pointer'
                }}
                title="View Gamification Profile"
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#f59e0b', fontWeight: 800, fontSize: '0.8rem' }}>
                  <Flame size={15} />
                  <span>{progress?.streak || 1}d Streak</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#4f46e5', fontWeight: 800, fontSize: '0.8rem' }}>
                  <Award size={15} />
                  <span>{progress?.xp || 0} XP</span>
                </div>
              </div>

              {/* Profile Card & Account Switcher */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0.5rem',
                background: '#ffffff',
                border: '1px solid var(--border-subtle)',
                borderRadius: '10px'
              }}>
                <div 
                  onClick={() => handleNavClick('profile')}
                  style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', cursor: 'pointer', minWidth: 0, flex: 1 }}
                >
                  <div style={{ 
                    width: '34px', 
                    height: '34px', 
                    borderRadius: '50%', 
                    background: 'linear-gradient(135deg, #4f46e5 0%, #06b6d4 100%)', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    color: '#ffffff',
                    fontWeight: 800,
                    fontSize: '0.85rem',
                    flexShrink: 0
                  }}>
                    {profile?.displayName ? profile.displayName.charAt(0).toUpperCase() : 'U'}
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <div style={{ fontWeight: 700, fontSize: '0.825rem', color: '#0f172a', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {profile?.displayName || 'Learner'}
                    </div>
                    <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>
                      {levelInfo?.levelTitle}
                    </div>
                  </div>
                </div>

                <div style={{ position: 'relative' }}>
                  <button
                    onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                    style={{
                      padding: '0.35rem',
                      background: 'transparent',
                      border: 'none',
                      color: 'var(--text-muted)',
                      cursor: 'pointer',
                      borderRadius: '6px'
                    }}
                    title="Switch Test Account"
                  >
                    <ChevronDown size={16} />
                  </button>

                  {/* Profile & Test Accounts Dropdown */}
                  {profileDropdownOpen && (
                    <div style={{
                      position: 'absolute',
                      bottom: '105%',
                      left: '-140px',
                      width: '240px',
                      background: '#ffffff',
                      border: '1px solid var(--border-medium)',
                      borderRadius: '12px',
                      boxShadow: 'var(--shadow-lg)',
                      padding: '0.6rem',
                      zIndex: 300,
                      animation: 'modal-slide-in 0.2s ease'
                    }}>
                      <div style={{ padding: '0.3rem 0.5rem 0.5rem', borderBottom: '1px solid var(--border-subtle)' }}>
                        <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 800 }}>
                          Test Accounts (Isolation)
                        </div>
                      </div>

                      <div style={{ padding: '0.4rem 0', borderBottom: '1px solid var(--border-subtle)' }}>
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
                              borderRadius: '6px',
                              fontSize: '0.75rem',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              color: user?.uid === dp.uid ? 'var(--primary-light)' : 'var(--text-secondary)',
                              background: user?.uid === dp.uid ? 'rgba(99, 102, 241, 0.1)' : 'transparent',
                              border: 'none',
                              cursor: 'pointer',
                              marginBottom: '0.15rem'
                            }}
                          >
                            <span style={{ fontWeight: 600 }}>{dp.displayName}</span>
                            {user?.uid === dp.uid && <span style={{ fontSize: '0.68rem', color: '#10b981', fontWeight: 800 }}>✓</span>}
                          </button>
                        ))}
                      </div>

                      <div style={{ paddingTop: '0.4rem' }}>
                        <button
                          onClick={() => {
                            sounds.playClick();
                            setProfileDropdownOpen(false);
                            onOpenAuthModal('credentials');
                          }}
                          style={{
                            width: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.4rem',
                            padding: '0.4rem 0.5rem',
                            fontSize: '0.75rem',
                            color: '#b45309',
                            background: 'rgba(245, 158, 11, 0.12)',
                            borderRadius: '6px',
                            border: 'none',
                            fontWeight: 700,
                            cursor: 'pointer',
                            marginBottom: '0.35rem'
                          }}
                        >
                          <Key size={13} /> View Credentials
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
                            gap: '0.4rem',
                            padding: '0.4rem 0.5rem',
                            fontSize: '0.75rem',
                            color: '#e11d48',
                            background: 'transparent',
                            borderRadius: '6px',
                            border: 'none',
                            fontWeight: 700,
                            cursor: 'pointer'
                          }}
                        >
                          <LogOut size={13} /> Log Out
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
              <button
                type="button"
                onClick={() => {
                  sounds.playClick();
                  onOpenAuthModal('credentials');
                }}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.35rem',
                  padding: '0.5rem',
                  borderRadius: '8px',
                  background: 'rgba(245, 158, 11, 0.12)',
                  border: '1px solid rgba(245, 158, 11, 0.35)',
                  color: '#b45309',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  cursor: 'pointer'
                }}
              >
                <Key size={14} />
                <span>Test Credentials</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  sounds.playClick();
                  onOpenAuthModal('login');
                }}
                className="btn-primary"
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.4rem',
                  padding: '0.5rem',
                  fontSize: '0.825rem',
                  fontWeight: 700
                }}
              >
                <LogIn size={15} />
                <span>Sign In</span>
              </button>
            </div>
          )}
        </div>
      </aside>

      {/* ──────────────────────────────────────────────────────────── */}
      {/* 2. MOBILE TOP HEADER (< 900px) */}
      {/* ──────────────────────────────────────────────────────────── */}
      <header className="app-mobile-header" style={{
        position: 'sticky',
        top: 0,
        zIndex: 95,
        height: '60px',
        background: '#ffffff',
        borderBottom: '1px solid var(--border-subtle)',
        padding: '0 1rem',
        display: 'none',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        {/* Mobile Brand */}
        <div 
          onClick={() => handleNavClick('dashboard')} 
          style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', cursor: 'pointer' }}
        >
          <div style={{
            width: '34px',
            height: '34px',
            borderRadius: '10px',
            background: 'linear-gradient(135deg, #4f46e5 0%, #06b6d4 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Scale size={20} color="#ffffff" />
          </div>
          <span style={{ 
            fontFamily: 'var(--font-heading)', 
            fontWeight: 900, 
            fontSize: '1.2rem',
            background: 'linear-gradient(135deg, #4f46e5 30%, #06b6d4 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            LAWLINK
          </span>
        </div>

        {/* Mobile Header Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <button 
            onClick={() => {
              sounds.playClick();
              onOpenDemoModal();
            }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.25rem',
              padding: '0.35rem 0.65rem',
              background: 'rgba(245, 158, 11, 0.15)',
              border: '1px solid rgba(245, 158, 11, 0.4)',
              borderRadius: '8px',
              color: '#b45309',
              fontSize: '0.75rem',
              fontWeight: 800
            }}
          >
            <Sparkles size={14} />
            <span>Demo</span>
          </button>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              padding: '0.4rem',
              background: '#f8fafc',
              border: '1px solid var(--border-subtle)',
              borderRadius: '8px',
              color: 'var(--text-main)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* ──────────────────────────────────────────────────────────── */}
      {/* 3. MOBILE SLIDE-OUT DRAWER OVERLAY */}
      {/* ──────────────────────────────────────────────────────────── */}
      {mobileMenuOpen && (
        <div style={{
          position: 'fixed',
          top: '60px',
          left: 0,
          right: 0,
          bottom: 0,
          background: '#ffffff',
          zIndex: 100,
          display: 'flex',
          flexDirection: 'column',
          padding: '1rem',
          overflowY: 'auto',
          animation: 'modal-slide-in 0.2s ease'
        }}>
          {/* Quick Search in Mobile Drawer */}
          <form 
            onSubmit={handleSearchSubmit}
            style={{ marginBottom: '1rem', position: 'relative' }}
          >
            <Search size={16} color="var(--text-muted)" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t('searchPlaceholder')}
              style={{
                width: '100%',
                padding: '0.6rem 0.8rem 0.6rem 2.2rem',
                fontSize: '0.85rem',
                background: '#f8fafc',
                border: '1px solid var(--border-medium)',
                borderRadius: 'var(--radius-md)',
                color: 'var(--text-main)',
                outline: 'none'
              }}
            />
          </form>

          {/* Vertical Navigation Links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', flex: 1 }}>
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = isItemActive(item);

              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.75rem 1rem',
                    borderRadius: '10px',
                    fontSize: '0.95rem',
                    fontWeight: active ? 700 : 600,
                    color: active ? (item.color || '#4f46e5') : '#1e293b',
                    background: active ? 'rgba(99, 102, 241, 0.1)' : '#f8fafc',
                    border: active ? '1px solid rgba(99, 102, 241, 0.3)' : '1px solid transparent',
                    textAlign: 'left'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <Icon size={19} color={active ? item.color : '#64748b'} />
                    <span>{item.label}</span>
                  </div>

                  {item.badge && (
                    <span style={{
                      fontSize: '0.65rem',
                      fontWeight: 900,
                      background: '#ef4444',
                      color: '#ffffff',
                      padding: '0.1rem 0.45rem',
                      borderRadius: '999px'
                    }}>
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Mobile Bottom Settings */}
          <div style={{
            paddingTop: '1rem',
            borderTop: '1px solid var(--border-subtle)',
            marginTop: '1rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem'
          }}>
            {/* Language Selector */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.5rem 0.75rem', background: '#f8fafc', borderRadius: '8px' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>Language:</span>
              <select
                value={language}
                onChange={(e) => changeLanguage(e.target.value)}
                style={{ background: 'transparent', border: 'none', fontWeight: 700, fontSize: '0.85rem', outline: 'none' }}
              >
                <option value="en">English</option>
                <option value="hi">हिंदी (Hindi)</option>
                <option value="te">తెలుగు (Telugu)</option>
              </select>
            </div>

            {user ? (
              <button
                onClick={() => {
                  sounds.playClick();
                  logout();
                  setMobileMenuOpen(false);
                }}
                style={{
                  width: '100%',
                  padding: '0.7rem',
                  background: 'rgba(244, 63, 94, 0.12)',
                  border: '1px solid rgba(244, 63, 94, 0.35)',
                  color: '#e11d48',
                  borderRadius: '8px',
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.4rem'
                }}
              >
                <LogOut size={16} /> Log Out ({profile?.displayName || 'User'})
              </button>
            ) : (
              <button
                onClick={() => {
                  sounds.playClick();
                  setMobileMenuOpen(false);
                  onOpenAuthModal('login');
                }}
                className="btn-primary"
                style={{ width: '100%', justifyContent: 'center', padding: '0.7rem' }}
              >
                <LogIn size={16} /> Sign In
              </button>
            )}
          </div>
        </div>
      )}

      {/* Responsive Styles */}
      <style>{`
        @media (min-width: 900px) {
          .app-vertical-sidebar {
            display: flex !important;
          }
          .app-mobile-header {
            display: none !important;
          }
        }
        @media (max-width: 899px) {
          .app-vertical-sidebar {
            display: none !important;
          }
          .app-mobile-header {
            display: flex !important;
          }
        }
      `}</style>
    </>
  );
};
