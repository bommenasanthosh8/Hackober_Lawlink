import React, { useState } from 'react';
import { 
  ArrowLeft, 
  BookOpen, 
  HelpCircle, 
  CheckSquare, 
  Square, 
  ShieldAlert, 
  ExternalLink, 
  Sparkles, 
  ArrowRight,
  Clock,
  Award,
  CheckCircle2,
  PhoneCall,
  Bot
} from 'lucide-react';
import { TOPICS, SCENARIOS, QUIZ_QUESTIONS, RESOURCES } from '../data/seedData';
import { useGamification } from '../context/GamificationContext';

export const TopicDetailView = ({ topicId, onBack, onStartScenario, onStartQuiz, onAskAi }) => {
  const { progress } = useGamification();
  const topic = TOPICS.find(t => t.id === topicId) || TOPICS[0];
  const topicScenarios = SCENARIOS.filter(s => s.topicId === topic.id);
  const topicQuizzes = QUIZ_QUESTIONS.filter(q => q.topicId === topic.id);
  const topicResources = RESOURCES.filter(r => r.category.toLowerCase().includes(topic.id.split('_')[0]) || r.category === 'Emergency');

  const [activeTab, setActiveTab] = useState('overview'); // overview, scenarios, quiz, checklist
  const [checkedActions, setCheckedActions] = useState({});
  const [showSourceAudit, setShowSourceAudit] = useState(false);

  const toggleCheck = (idx) => {
    setCheckedActions(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  const isCompleted = progress?.completedTopics?.includes(topic.id);

  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto', animation: 'modal-slide-in 0.3s ease' }}>
      {/* Top Navigation */}
      <button 
        onClick={onBack}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.4rem',
          color: 'var(--text-secondary)',
          fontSize: '0.85rem',
          marginBottom: '1rem',
          fontWeight: 600
        }}
      >
        <ArrowLeft size={16} />
        <span>Back to All Topics</span>
      </button>

      {/* Header Banner */}
      <div className="glass-panel" style={{ padding: '2rem', marginBottom: '1.5rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'linear-gradient(90deg, #4f46e5 0%, #06b6d4 100%)'
        }} />

        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap', marginBottom: '0.75rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
              <span className="badge-tag badge-primary">{topic.category}</span>
              {isCompleted && (
                <span className="badge-tag badge-verified">
                  <CheckCircle2 size={12} />
                  Mastered
                </span>
              )}
            </div>
            <h1 style={{ fontSize: '1.85rem', color: 'var(--text-main)', lineHeight: 1.25 }}>
              {topic.title}
            </h1>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <span style={{ fontSize: '0.85rem', color: '#f59e0b', fontWeight: 700 }}>
              +{topic.xpReward} Total XP
            </span>
            <button
              onClick={() => setShowSourceAudit(true)}
              className="badge-tag badge-verified"
              style={{ cursor: 'pointer' }}
            >
              <ShieldAlert size={13} />
              {topic.sourceInfo?.verificationStatus}
            </button>
          </div>
        </div>

        <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6, maxWidth: '850px', marginBottom: '1.25rem' }}>
          {topic.description}
        </p>

        {/* Tab Navigation */}
        <div style={{ display: 'flex', gap: '0.5rem', overflowX: 'auto', borderTop: '1px solid var(--border-subtle)', paddingTop: '1rem' }}>
          <button
            onClick={() => setActiveTab('overview')}
            style={{
              padding: '0.45rem 1rem',
              borderRadius: 'var(--radius-full)',
              fontSize: '0.85rem',
              fontWeight: 600,
              background: activeTab === 'overview' ? 'var(--primary)' : 'rgba(255, 255, 255, 0.05)',
              color: activeTab === 'overview' ? '#ffffff' : 'var(--text-secondary)',
              transition: 'all var(--transition-fast)'
            }}
          >
            Overview & Key Laws
          </button>

          <button
            onClick={() => setActiveTab('scenarios')}
            style={{
              padding: '0.45rem 1rem',
              borderRadius: 'var(--radius-full)',
              fontSize: '0.85rem',
              fontWeight: 600,
              background: activeTab === 'scenarios' ? 'var(--primary)' : 'rgba(255, 255, 255, 0.05)',
              color: activeTab === 'scenarios' ? '#ffffff' : 'var(--text-secondary)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem'
            }}
          >
            <span>Real-Life Scenarios</span>
            <span style={{ fontSize: '0.7rem', padding: '0.1rem 0.4rem', borderRadius: 'var(--radius-full)', background: 'rgba(255,255,255,0.2)' }}>
              {topicScenarios.length}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('quiz')}
            style={{
              padding: '0.45rem 1rem',
              borderRadius: 'var(--radius-full)',
              fontSize: '0.85rem',
              fontWeight: 600,
              background: activeTab === 'quiz' ? 'var(--primary)' : 'rgba(255, 255, 255, 0.05)',
              color: activeTab === 'quiz' ? '#ffffff' : 'var(--text-secondary)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem'
            }}
          >
            <span>Knowledge Quiz</span>
            <span style={{ fontSize: '0.7rem', padding: '0.1rem 0.4rem', borderRadius: 'var(--radius-full)', background: 'rgba(255,255,255,0.2)' }}>
              {topicQuizzes.length} Qs
            </span>
          </button>

          <button
            onClick={() => setActiveTab('checklist')}
            style={{
              padding: '0.45rem 1rem',
              borderRadius: 'var(--radius-full)',
              fontSize: '0.85rem',
              fontWeight: 600,
              background: activeTab === 'checklist' ? 'var(--primary)' : 'rgba(255, 255, 255, 0.05)',
              color: activeTab === 'checklist' ? '#ffffff' : 'var(--text-secondary)'
            }}
          >
            Action Checklist
          </button>
        </div>
      </div>

      {/* TAB 1: OVERVIEW & KEY LAWS */}
      {activeTab === 'overview' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {/* Key Laws Grid */}
          <div>
            <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <BookOpen size={20} color="var(--primary-light)" />
              <span>Key Statutory Framework & Sections</span>
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
              {topic.keyLaws.map((law, idx) => (
                <div key={idx} className="glass-panel" style={{ padding: '1.25rem' }}>
                  <div style={{ fontSize: '0.8rem', color: 'var(--primary-light)', fontWeight: 700, textTransform: 'uppercase' }}>
                    {law.act}
                  </div>
                  <h3 style={{ fontSize: '1.1rem', color: 'var(--text-main)', margin: '0.25rem 0 0.5rem' }}>
                    {law.section}
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                    {law.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Concept Cards */}
          <div>
            <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Sparkles size={20} color="var(--accent-amber)" />
              <span>Core Practical Concepts</span>
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1rem' }}>
              {topic.conceptCards.map(c => (
                <div key={c.id} className="glass-panel" style={{ padding: '1.35rem' }}>
                  <h3 style={{ fontSize: '1.1rem', color: '#f59e0b', marginBottom: '0.5rem' }}>
                    {c.title}
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-main)', lineHeight: 1.55, marginBottom: '0.75rem' }}>
                    {c.explanation}
                  </p>
                  <div style={{ padding: '0.65rem 0.85rem', background: 'rgba(255, 255, 255, 0.03)', borderRadius: 'var(--radius-sm)', borderLeft: '3px solid var(--accent-cyan)', marginBottom: '0.5rem' }}>
                    <strong style={{ fontSize: '0.785rem', color: 'var(--accent-cyan)' }}>Practical Tip: </strong>
                    <span style={{ fontSize: '0.825rem', color: 'var(--text-secondary)' }}>{c.practicalTip}</span>
                  </div>
                  {c.keyStat && (
                    <div style={{ fontSize: '0.785rem', color: '#34d399', fontWeight: 600 }}>
                      📊 {c.keyStat}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Quick CTA to Scenarios */}
          <div className="glass-panel" style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', background: 'rgba(99, 102, 241, 0.08)' }}>
            <div>
              <div style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--text-main)' }}>
                Ready to experience real-world situations?
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>
                Test your judgment in interactive case studies with instant feedback and XP.
              </p>
            </div>
            <button onClick={() => setActiveTab('scenarios')} className="btn-primary">
              <span>Start Real-Life Scenarios</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      )}

      {/* TAB 2: REAL-LIFE SCENARIOS */}
      {activeTab === 'scenarios' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div>
            <h2 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>
              Interactive Case Studies: "What Would You Do?"
            </h2>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
              Choose a scenario to enter the case simulation. Each decision provides a statutory breakdown, immediate actions, and evidence requirements.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {topicScenarios.map(sc => {
              const isCompleted = progress?.completedScenarios?.includes(sc.id);

              return (
                <div
                  key={sc.id}
                  onClick={() => onStartScenario(sc)}
                  className="glass-panel glass-panel-interactive"
                  style={{
                    padding: '1.5rem',
                    border: isCompleted ? '1px solid rgba(16, 185, 129, 0.4)' : '1px solid var(--border-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1rem'
                  }}
                >
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
                      <span className={`badge-tag ${sc.urgency === 'Critical' ? 'badge-urgent' : 'badge-primary'}`}>
                        {sc.urgency} Urgency
                      </span>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                        Role: {sc.role}
                      </span>
                      {isCompleted && (
                        <span style={{ fontSize: '0.75rem', color: '#34d399', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                          <CheckCircle2 size={13} /> Completed
                        </span>
                      )}
                    </div>

                    <h3 style={{ fontSize: '1.15rem', color: 'var(--text-main)', marginBottom: '0.4rem' }}>
                      {sc.title}
                    </h3>

                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                      {sc.context.slice(0, 160)}...
                    </p>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexShrink: 0 }}>
                    <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#f59e0b' }}>
                      +100 XP
                    </span>
                    <button className="btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}>
                      <span>Solve Case</span>
                      <ArrowRight size={15} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* TAB 3: KNOWLEDGE QUIZ */}
      {activeTab === 'quiz' && (
        <div className="glass-panel" style={{ padding: '2rem', textAlign: 'center' }}>
          <div style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            background: 'rgba(99, 102, 241, 0.15)',
            border: '2px solid var(--primary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1.25rem'
          }}>
            <HelpCircle size={32} color="var(--primary-light)" />
          </div>

          <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>
            {topic.title} Knowledge Quiz
          </h2>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', maxWidth: '520px', margin: '0 auto 1.5rem' }}>
            Test your statutory literacy with {topicQuizzes.length} practical questions based on real judicial precedents and consumer guidelines.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '1.75rem' }}>
            <div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Questions</div>
              <div style={{ fontSize: '1.25rem', fontWeight: 800 }}>{topicQuizzes.length} Qs</div>
            </div>
            <div style={{ width: '1px', background: 'var(--border-subtle)' }} />
            <div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Reward</div>
              <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#f59e0b' }}>+200 XP</div>
            </div>
            <div style={{ width: '1px', background: 'var(--border-subtle)' }} />
            <div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Passing Score</div>
              <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#10b981' }}>60%</div>
            </div>
          </div>

          <button onClick={() => onStartQuiz(topic.id, topic.title, topicQuizzes)} className="btn-primary" style={{ padding: '0.8rem 2.2rem', fontSize: '1rem' }}>
            <span>Start Module Quiz</span>
            <ArrowRight size={18} />
          </button>
        </div>
      )}

      {/* TAB 4: ACTION CHECKLIST */}
      {activeTab === 'checklist' && (
        <div className="glass-panel" style={{ padding: '1.75rem' }}>
          <h2 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>
            Practical Action Checklist: What To Do in Real Life
          </h2>
          <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
            Step-by-step statutory protocols to follow when faced with an incident in this domain.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {topic.practicalActions.map((action, idx) => {
              const isChecked = checkedActions[idx];

              return (
                <div
                  key={idx}
                  onClick={() => toggleCheck(idx)}
                  style={{
                    padding: '1rem',
                    background: isChecked ? 'rgba(16, 185, 129, 0.1)' : 'rgba(255, 255, 255, 0.03)',
                    border: isChecked ? '1px solid #10b981' : '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-md)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    transition: 'all var(--transition-fast)'
                  }}
                >
                  <div style={{ color: isChecked ? '#10b981' : 'var(--text-muted)', flexShrink: 0 }}>
                    {isChecked ? <CheckSquare size={20} /> : <Square size={20} />}
                  </div>
                  <div style={{
                    fontSize: '0.9rem',
                    color: isChecked ? '#34d399' : 'var(--text-main)',
                    textDecoration: isChecked ? 'line-through' : 'none',
                    lineHeight: 1.5
                  }}>
                    {action}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Source Audit Drawer Modal */}
      {showSourceAudit && (
        <div className="modal-backdrop" onClick={() => setShowSourceAudit(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()} style={{ padding: '1.75rem' }}>
            <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <ShieldAlert size={22} color="#10b981" />
              Source & Legal Verification Details
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.875rem' }}>
              <div>
                <strong>Official Source:</strong> {topic.sourceInfo?.sourceName}
              </div>
              <div>
                <strong>Official Authority Portal:</strong>{' '}
                <a href={topic.sourceInfo?.sourceUrl} target="_blank" rel="noreferrer">
                  {topic.sourceInfo?.sourceUrl}
                </a>
              </div>
              <div>
                <strong>Verification Status:</strong>{' '}
                <span className="badge-tag badge-verified">{topic.sourceInfo?.verificationStatus}</span>
              </div>
              <div>
                <strong>Legal Reviewer:</strong> {topic.sourceInfo?.reviewedBy}
              </div>
              <div>
                <strong>Last Verified At:</strong> {topic.sourceInfo?.lastVerifiedAt}
              </div>
              <div>
                <strong>Version:</strong> {topic.sourceInfo?.contentVersion}
              </div>
            </div>

            <div style={{ marginTop: '1.5rem', textAlign: 'right' }}>
              <button onClick={() => setShowSourceAudit(false)} className="btn-secondary">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
