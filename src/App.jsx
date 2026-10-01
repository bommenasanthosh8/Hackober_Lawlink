import React, { useState } from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { AuthProvider, useAuth } from './context/AuthContext';
import { GamificationProvider, useGamification } from './context/GamificationContext';

import { Navbar } from './components/Navbar';
import { Dashboard } from './components/Dashboard';
import { TopicsView } from './components/TopicsView';
import { TopicDetailView } from './components/TopicDetailView';
import { ScenarioPlayer } from './components/ScenarioPlayer';
import { QuizPlayer } from './components/QuizPlayer';
import { FindHelpNearMe } from './components/FindHelpNearMe';
import { LawLinkGuideAI } from './components/LawLinkGuideAI';
import { TrustedHelpDirectory } from './components/TrustedHelpDirectory';
import { Leaderboard } from './components/Leaderboard';
import { ProfileView } from './components/ProfileView';
import { AdminDashboard } from './components/AdminDashboard';
import { GlobalSearchView } from './components/GlobalSearchView';
import { JudgeDemoModal } from './components/JudgeDemoModal';
import { AuthModal } from './components/AuthModal';
import { CitizenLegalHUD } from './components/CitizenLegalHUD';
import { LoginPage } from './components/LoginPage';
import { FloatingChatBot } from './components/FloatingChatBot';
import { LiveCaseSelectView, LiveCasePlayer } from './components/LiveCaseMode';

import { TOPICS, SCENARIOS, QUIZ_QUESTIONS } from './data/seedData';
import { LIVE_CASES } from './data/liveCasesData';
import { 
  Compass, 
  BookOpen, 
  MapPin, 
  Bot, 
  User, 
  Award, 
  X, 
  Sparkles,
  Scale,
  PhoneCall
} from 'lucide-react';

function MainApp() {
  const { t } = useLanguage();
  const { user, profile, loading } = useAuth();
  const { newBadgeUnlocked, clearNewBadgeNotice, levelUpNotice, clearLevelUpNotice } = useGamification();

  // Navigation View State
  const [currentView, setView] = useState('dashboard');
  const [selectedTopicId, setSelectedTopicId] = useState('cybercrime');
  const [activeScenario, setActiveScenario] = useState(SCENARIOS[0]);
  const [activeQuizData, setActiveQuizData] = useState({
    topicId: 'cybercrime',
    topicTitle: 'Cybercrime & Financial Fraud',
    questions: QUIZ_QUESTIONS.filter(q => q.topicId === 'cybercrime')
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [activeLiveCase, setActiveLiveCase] = useState(LIVE_CASES[0] || null);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authModalTab, setAuthModalTab] = useState('credentials');
  const [aiInitialPrompt, setAiInitialPrompt] = useState('');

  // ─── Auth Gate ──────────────────────────────────────────────────
  // Show animated loading splash while auth state resolves
  if (loading) {
    return (
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #f0f4ff 0%, #faf5ff 50%, #eff6ff 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1.5rem',
        fontFamily: "'Inter', sans-serif",
      }}>
        <style>{`
          @keyframes spin { to { transform: rotate(360deg); } }
          @keyframes fadeInUp { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
        `}</style>
        <div style={{
          width: 64, height: 64, borderRadius: 18,
          background: 'linear-gradient(135deg, #4f46e5, #06b6d4)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 8px 32px rgba(99,102,241,0.3)',
          animation: 'fadeInUp 0.5s ease',
        }}>
          <Scale size={36} color="white" />
        </div>
        <div style={{ textAlign: 'center', animation: 'fadeInUp 0.5s ease 0.1s both' }}>
          <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 900, fontSize: '1.8rem', color: '#0f172a', letterSpacing: '-0.03em' }}>
            LAW<span style={{ color: '#4f46e5' }}>LINK</span>
          </div>
          <div style={{ fontSize: '0.8rem', color: '#94a3b8', marginTop: '0.25rem' }}>Gamified Legal Literacy Platform</div>
        </div>
        <div style={{
          width: 36, height: 36,
          border: '3px solid #e2e8f0',
          borderTop: '3px solid #4f46e5',
          borderRadius: '50%',
          animation: 'spin 0.8s linear infinite',
        }} />
      </div>
    );
  }

  // Show login page if not authenticated
  if (!user) {
    return <LoginPage onLoginSuccess={() => {}} />;
  }

  const handleOpenAuthModal = (tab = 'credentials') => {
    setAuthModalTab(tab);
    setIsAuthModalOpen(true);
  };

  // Topic Navigation Handler
  const handleSelectTopic = (topicId) => {
    setSelectedTopicId(topicId);
    setView('topic_detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Scenario Navigation Handler
  const handleSelectScenario = (scenario) => {
    setActiveScenario(scenario);
    setView('scenario');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Quiz Navigation Handler
  const handleStartQuiz = (topicId, topicTitle, questions) => {
    setActiveQuizData({ topicId, topicTitle, questions });
    setView('quiz');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // AI Prompt launcher from other views
  const handleAskAiWithPrompt = (prompt) => {
    setAiInitialPrompt(prompt);
    setView('ai');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Live Case Selection Handler
  const handleSelectLiveCase = (caseFile) => {
    setActiveLiveCase(caseFile);
    setView('live_case_player');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Global Search Handler
  const handleGlobalSearch = (query) => {
    setSearchQuery(query);
    setView('search');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app-container">
      {/* Top Sticky Navigation */}
      <Navbar
        currentView={currentView}
        setView={setView}
        onOpenDemoModal={() => setIsDemoModalOpen(true)}
        onOpenAuthModal={handleOpenAuthModal}
        onGlobalSearch={handleGlobalSearch}
      />

      {/* Main Content Router */}
      <main className="main-content">
        {currentView === 'dashboard' && (
          <Dashboard
            onSelectTopic={handleSelectTopic}
            onSelectScenario={handleSelectScenario}
            onNavigate={(view) => {
              setView(view);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {currentView === 'topics' && (
          <TopicsView onSelectTopic={handleSelectTopic} />
        )}

        {currentView === 'topic_detail' && (
          <TopicDetailView
            topicId={selectedTopicId}
            onBack={() => setView('topics')}
            onStartScenario={handleSelectScenario}
            onStartQuiz={handleStartQuiz}
            onAskAi={handleAskAiWithPrompt}
          />
        )}

        {currentView === 'scenario' && (
          <ScenarioPlayer
            scenario={activeScenario}
            onComplete={(id, status) => {}}
            onNextScenario={() => {
              const currentIdx = SCENARIOS.findIndex(s => s.id === activeScenario.id);
              const nextSc = SCENARIOS[(currentIdx + 1) % SCENARIOS.length];
              setActiveScenario(nextSc);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onAskAi={handleAskAiWithPrompt}
            onOpenQuiz={() => {
              const questions = QUIZ_QUESTIONS.filter(q => q.topicId === activeScenario.topicId);
              handleStartQuiz(activeScenario.topicId, activeScenario.title, questions);
            }}
          />
        )}

        {currentView === 'quiz' && (
          <QuizPlayer
            topicId={activeQuizData.topicId}
            topicTitle={activeQuizData.topicTitle}
            questions={activeQuizData.questions}
            onBackToTopic={() => setView('topic_detail')}
          />
        )}

        {currentView === 'live_cases' && (
          <LiveCaseSelectView
            onSelectCase={handleSelectLiveCase}
            onOpenGuide={() => {
              setView('ai');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {currentView === 'live_case_player' && (
          <LiveCasePlayer
            caseFile={activeLiveCase || LIVE_CASES[0]}
            onBack={() => {
              setView('live_cases');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenMapWithCategory={(category) => {
              setView('maps');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {currentView === 'maps' && <FindHelpNearMe />}

        {currentView === 'ai' && <LawLinkGuideAI initialPrompt={aiInitialPrompt} />}

        {currentView === 'directory' && <TrustedHelpDirectory />}

        {currentView === 'leaderboard' && <Leaderboard />}

        {currentView === 'profile' && <ProfileView onSelectTopic={handleSelectTopic} />}

        {currentView === 'admin' && <AdminDashboard />}

        {currentView === 'search' && (
          <GlobalSearchView
            query={searchQuery}
            onSelectTopic={handleSelectTopic}
            onSelectScenario={handleSelectScenario}
          />
        )}
      </main>

      {/* Floating Citizen Legal Rights SOS HUD */}
      <CitizenLegalHUD
        onOpenAi={() => { setView('ai'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
        onOpenMaps={() => { setView('maps'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
        onOpenDemo={() => setIsDemoModalOpen(true)}
      />

      {/* Floating LawBot AI Chatbot — accessible from every page */}
      <FloatingChatBot />

      {/* Floating Badge Unlock Celebration Notification */}
      {newBadgeUnlocked && (
        <div style={{
          position: 'fixed',
          bottom: '80px',
          right: '24px',
          zIndex: 900,
          background: '#ffffff',
          border: '2px solid #f59e0b',
          borderRadius: 'var(--radius-lg)',
          boxShadow: '0 12px 30px rgba(0,0,0,0.12), 0 0 20px rgba(245, 158, 11, 0.2)',
          padding: '1rem 1.25rem',
          maxWidth: '340px',
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          animation: 'modal-slide-in 0.35s ease'
        }}>
          <div style={{
            width: '44px',
            height: '44px',
            borderRadius: '12px',
            background: newBadgeUnlocked.color || '#f59e0b',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#ffffff',
            flexShrink: 0
          }}>
            <Award size={24} />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: '0.75rem', color: '#d97706', fontWeight: 800, textTransform: 'uppercase' }}>
              Badge Unlocked!
            </div>
            <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0f172a' }}>
              {newBadgeUnlocked.badgeName}
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              {newBadgeUnlocked.description}
            </div>
          </div>
          <button onClick={clearNewBadgeNotice} style={{ color: 'var(--text-muted)' }}>
            <X size={16} />
          </button>
        </div>
      )}

      {/* Level Up Celebration Banner */}
      {levelUpNotice && (
        <div style={{
          position: 'fixed',
          top: '80px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 950,
          background: 'linear-gradient(135deg, #4f46e5 0%, #06b6d4 100%)',
          borderRadius: 'var(--radius-full)',
          boxShadow: '0 12px 35px rgba(79, 70, 229, 0.35)',
          padding: '0.75rem 1.5rem',
          color: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          animation: 'modal-slide-in 0.3s ease',
          whiteSpace: 'nowrap',
        }}>
          <Sparkles size={20} />
          <span style={{ fontWeight: 800, fontSize: '0.95rem' }}>
            Level Up! You achieved {levelUpNotice.title}!
          </span>
          <button onClick={clearLevelUpNotice} style={{ color: '#ffffff', marginLeft: '0.5rem' }}>
            <X size={16} />
          </button>
        </div>
      )}

      {/* Mobile Bottom Navigation Bar */}
      <nav style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        height: '64px',
        background: 'rgba(255, 255, 255, 0.96)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderTop: '1px solid var(--border-subtle)',
        boxShadow: '0 -4px 20px rgba(0,0,0,0.06)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        zIndex: 80
      }} className="mobile-bottom-nav">
        <button
          onClick={() => { setView('dashboard'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3px', color: currentView === 'dashboard' ? 'var(--primary-light)' : 'var(--text-muted)', fontSize: '0.7rem' }}
        >
          <Compass size={20} />
          <span>Home</span>
        </button>

        <button
          onClick={() => { setView('topics'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3px', color: currentView === 'topics' ? 'var(--primary-light)' : 'var(--text-muted)', fontSize: '0.7rem' }}
        >
          <BookOpen size={20} />
          <span>Topics</span>
        </button>

        <button
          onClick={() => { setView('live_cases'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3px', color: currentView === 'live_cases' || currentView === 'live_case_player' ? '#e11d48' : 'var(--text-muted)', fontSize: '0.7rem', position: 'relative' }}
        >
          <PhoneCall size={20} />
          <span>Live Cases</span>
        </button>

        <button
          onClick={() => { setView('maps'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3px', color: currentView === 'maps' ? 'var(--primary-light)' : 'var(--text-muted)', fontSize: '0.7rem' }}
        >
          <MapPin size={20} />
          <span>Help Map</span>
        </button>

        <button
          onClick={() => { setView('ai'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3px', color: currentView === 'ai' ? '#38bdf8' : 'var(--text-muted)', fontSize: '0.7rem' }}
        >
          <Bot size={20} />
          <span>Guide AI</span>
        </button>

        <button
          onClick={() => { setView('profile'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3px', color: currentView === 'profile' ? 'var(--primary-light)' : 'var(--text-muted)', fontSize: '0.7rem' }}
        >
          <User size={20} />
          <span>Profile</span>
        </button>
      </nav>

      {/* Modals */}
      <JudgeDemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
        onLaunchStepView={(viewType) => {
          if (viewType === 'scenario') setView('scenario');
          if (viewType === 'ai') setView('ai');
          if (viewType === 'maps') setView('maps');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        initialTab={authModalTab}
      />

      {/* Footer */}
      <footer style={{
        marginTop: 'auto',
        borderTop: '1px solid var(--border-subtle)',
        background: 'rgba(248, 250, 252, 0.98)',
        padding: '2rem 1.5rem',
        fontSize: '0.8rem',
        color: 'var(--text-muted)'
      }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Scale size={18} color="var(--primary-light)" />
            <span style={{ fontWeight: 700, color: 'var(--text-main)' }}>LAWLINK</span>
            <span>— Gamified Legal Literacy Platform for GDG on Campus</span>
          </div>

          <div>
            Built with Firebase Auth & Cloud Firestore • Google Maps Platform • Google Gemini AI
          </div>
        </div>

        <div style={{ maxWidth: '1240px', margin: '0.75rem auto 0', textAlign: 'center', fontSize: '0.725rem', color: 'var(--text-muted)' }}>
          {t('educationalDisclaimer')}
        </div>
      </footer>

      <style>{`
        @media (min-width: 900px) {
          .mobile-bottom-nav { display: none !important; }
        }
      `}</style>
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AuthProvider>
        <GamificationProvider>
          <MainApp />
        </GamificationProvider>
      </AuthProvider>
    </LanguageProvider>
  );
}
