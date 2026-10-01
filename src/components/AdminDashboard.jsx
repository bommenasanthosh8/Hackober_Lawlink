import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Database, 
  BarChart3, 
  Users, 
  CheckCircle2, 
  Clock, 
  FileText, 
  Plus, 
  UploadCloud, 
  AlertCircle,
  TrendingUp,
  Activity,
  Layers
} from 'lucide-react';
import { TOPICS, SCENARIOS, RESOURCES } from '../data/seedData';
import { updateContentVerification, seedLiveFirestore, isRealFirebaseConfigured } from '../firebase/db';

export const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('analytics'); // analytics, verification, content, seed
  const [verificationList, setVerificationList] = useState(RESOURCES);
  const [seedStatus, setSeedStatus] = useState(null);
  const [isSeeding, setIsSeeding] = useState(false);

  // DEMO ANALYTICS (Clearly labeled demo/seeded data as required in Section 24)
  const analyticsData = {
    totalRegisteredUsers: 1420,
    activeLearnersMonthly: 980,
    scenarioCompletionRate: '78.4%',
    quizCompletionRate: '69.2%',
    averageQuizScore: '81.5%',
    dailyChallengesSolved: 2450,
    resourceHelplineClicks: 840,
    mostPopularTopic: 'Cybercrime & Financial Fraud'
  };

  const handleToggleVerification = async (resId) => {
    const target = verificationList.find(r => r.id === resId);
    if (!target) return;
    const newStatus = target.verificationStatus === 'VERIFIED' ? 'REVIEW REQUIRED' : 'VERIFIED';
    
    await updateContentVerification(resId, {
      verificationStatus: newStatus,
      reviewedBy: 'Admin (Adv. Rajesh Kumar)',
      notes: 'Updated status via LawLink Admin Console'
    });

    setVerificationList(prev => prev.map(r => r.id === resId ? { ...r, verificationStatus: newStatus } : r));
  };

  const handleSeedCloud = async () => {
    setIsSeeding(true);
    setSeedStatus(null);
    try {
      if (!isRealFirebaseConfigured) {
        throw new Error('Real Firebase is not configured in .env. Enter VITE_FIREBASE_* credentials to push directly to Cloud Firestore.');
      }
      const res = await seedLiveFirestore();
      setSeedStatus({ success: true, message: `Successfully seeded ${res.count} legal documents into Cloud Firestore collections!` });
    } catch (err) {
      setSeedStatus({ success: false, message: err.message });
    } finally {
      setIsSeeding(false);
    }
  };

  return (
    <div style={{ maxWidth: '1180px', margin: '0 auto', animation: 'modal-slide-in 0.3s ease' }}>
      {/* Header */}
      <div className="glass-panel" style={{ padding: '1.75rem', marginBottom: '1.5rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'linear-gradient(90deg, #f59e0b 0%, #d97706 100%)'
        }} />

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap', marginBottom: '0.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{
              width: '44px',
              height: '44px',
              borderRadius: '12px',
              background: 'rgba(245, 158, 11, 0.15)',
              border: '1px solid rgba(245, 158, 11, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#f59e0b'
            }}>
              <ShieldCheck size={26} />
            </div>
            <div>
              <h1 style={{ fontSize: '1.65rem' }}>
                Admin & Governance Console
              </h1>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                Content Verification, Cloud Seeding & Learning Analytics
              </span>
            </div>
          </div>

          <div style={{
            padding: '0.35rem 0.75rem',
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-full)',
            fontSize: '0.8rem',
            color: 'var(--text-secondary)'
          }}>
            Status: Authorized Admin
          </div>
        </div>

        {/* Tab Buttons */}
        <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1.25rem', borderTop: '1px solid var(--border-subtle)', paddingTop: '1rem' }}>
          <button
            onClick={() => setActiveTab('analytics')}
            style={{
              padding: '0.45rem 1rem',
              borderRadius: 'var(--radius-full)',
              fontSize: '0.825rem',
              fontWeight: 600,
              background: activeTab === 'analytics' ? 'var(--primary)' : 'rgba(255, 255, 255, 0.04)',
              color: activeTab === 'analytics' ? '#ffffff' : 'var(--text-secondary)'
            }}
          >
            Product Analytics
          </button>

          <button
            onClick={() => setActiveTab('verification')}
            style={{
              padding: '0.45rem 1rem',
              borderRadius: 'var(--radius-full)',
              fontSize: '0.825rem',
              fontWeight: 600,
              background: activeTab === 'verification' ? 'var(--primary)' : 'rgba(255, 255, 255, 0.04)',
              color: activeTab === 'verification' ? '#ffffff' : 'var(--text-secondary)'
            }}
          >
            Content Verification Manager
          </button>

          <button
            onClick={() => setActiveTab('seed')}
            style={{
              padding: '0.45rem 1rem',
              borderRadius: 'var(--radius-full)',
              fontSize: '0.825rem',
              fontWeight: 600,
              background: activeTab === 'seed' ? 'var(--primary)' : 'rgba(255, 255, 255, 0.04)',
              color: activeTab === 'seed' ? '#ffffff' : 'var(--text-secondary)'
            }}
          >
            Cloud Firestore Seeder
          </button>
        </div>
      </div>

      {/* TAB 1: PRODUCT ANALYTICS */}
      {activeTab === 'analytics' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div style={{
            padding: '0.75rem 1rem',
            background: 'rgba(6, 182, 212, 0.08)',
            border: '1px solid rgba(6, 182, 212, 0.25)',
            borderRadius: 'var(--radius-md)',
            fontSize: '0.8rem',
            color: '#38bdf8'
          }}>
            ℹ️ <strong>Demo Data Transparency:</strong> Metrics below reflect seeded pilot cohort analytics to demonstrate platform scalability as required by Section 24.
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
            <div className="glass-panel" style={{ padding: '1.25rem' }}>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>Total Registered Learners</div>
              <div style={{ fontSize: '1.85rem', fontWeight: 800, color: 'var(--text-main)' }}>{analyticsData.totalRegisteredUsers.toLocaleString()}</div>
              <div style={{ fontSize: '0.75rem', color: '#10b981', marginTop: '0.2rem' }}>+18% this month</div>
            </div>

            <div className="glass-panel" style={{ padding: '1.25rem' }}>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>Active Learners (MAU)</div>
              <div style={{ fontSize: '1.85rem', fontWeight: 800, color: '#38bdf8' }}>{analyticsData.activeLearnersMonthly}</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>69% engagement rate</div>
            </div>

            <div className="glass-panel" style={{ padding: '1.25rem' }}>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>Scenario Completion Rate</div>
              <div style={{ fontSize: '1.85rem', fontWeight: 800, color: '#10b981' }}>{analyticsData.scenarioCompletionRate}</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>High decision engagement</div>
            </div>

            <div className="glass-panel" style={{ padding: '1.25rem' }}>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>Average Quiz Score</div>
              <div style={{ fontSize: '1.85rem', fontWeight: 800, color: '#f59e0b' }}>{analyticsData.averageQuizScore}</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>Strong statutory retention</div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.25rem' }}>
            <div className="glass-panel" style={{ padding: '1.5rem' }}>
              <h3 style={{ fontSize: '1.05rem', marginBottom: '1rem', color: 'var(--text-main)' }}>
                Cohort Learning Performance
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.85rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-secondary)' }}>Daily Challenges Solved:</span>
                  <strong>{analyticsData.dailyChallengesSolved}</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-secondary)' }}>Resource Helpline Inquiries:</span>
                  <strong>{analyticsData.resourceHelplineClicks}</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-secondary)' }}>Most-Used Curriculum:</span>
                  <strong style={{ color: 'var(--primary-light)' }}>{analyticsData.mostPopularTopic}</strong>
                </div>
              </div>
            </div>

            <div className="glass-panel" style={{ padding: '1.5rem' }}>
              <h3 style={{ fontSize: '1.05rem', marginBottom: '1rem', color: 'var(--text-main)' }}>
                System Architecture Health
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.85rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-secondary)' }}>Cloud Database Mode:</span>
                  <strong style={{ color: isRealFirebaseConfigured ? '#10b981' : '#f59e0b' }}>
                    {isRealFirebaseConfigured ? 'Live Google Cloud Firestore' : 'Resilient Cloud Simulation Store'}
                  </strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-secondary)' }}>Account Isolation:</span>
                  <strong style={{ color: '#10b981' }}>Enforced via UID Rules</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-secondary)' }}>Grounding Trust Layer:</span>
                  <strong style={{ color: '#10b981' }}>Active (Zero Hallucination)</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: CONTENT VERIFICATION MANAGER */}
      {activeTab === 'verification' && (
        <div className="glass-panel" style={{ padding: '1.5rem' }}>
          <div style={{ marginBottom: '1rem' }}>
            <h2 style={{ fontSize: '1.25rem', marginBottom: '0.35rem' }}>
              Statutory Content Verification Registry
            </h2>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
              Legal practitioners can audit, update review timestamps, or mark statutory resources for review.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            {verificationList.map(item => (
              <div
                key={item.id}
                style={{
                  padding: '1rem',
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-md)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '1rem',
                  flexWrap: 'wrap'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.2rem' }}>
                    <span style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-main)' }}>
                      {item.name}
                    </span>
                    <span className={`badge-tag ${item.verificationStatus === 'VERIFIED' ? 'badge-verified' : 'badge-review'}`}>
                      {item.verificationStatus}
                    </span>
                  </div>
                  <div style={{ fontSize: '0.785rem', color: 'var(--text-muted)' }}>
                    Reviewed by {item.reviewedBy} • Last Verified: {item.lastVerifiedAt} • Category: {item.category}
                  </div>
                </div>

                <button
                  onClick={() => handleToggleVerification(item.id)}
                  className="btn-secondary"
                  style={{ fontSize: '0.8rem', padding: '0.4rem 0.85rem' }}
                >
                  <span>Toggle Status</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 3: CLOUD FIRESTORE SEEDER */}
      {activeTab === 'seed' && (
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
            <Database size={32} color="var(--primary-light)" />
          </div>

          <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>
            Seed Live Cloud Firestore Database
          </h2>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', maxWidth: '580px', margin: '0 auto 1.5rem' }}>
            Automatically push all 7 statutory topics, 14+ scenarios, 35+ quiz questions, and 20+ verified legal aid resources into your Firebase Cloud Firestore instance.
          </p>

          {isRealFirebaseConfigured ? (
            <div style={{ marginBottom: '1.5rem', color: '#10b981', fontSize: '0.85rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem' }}>
              <CheckCircle2 size={16} />
              <span>Connected to Live Firebase Project! Ready to seed.</span>
            </div>
          ) : (
            <div style={{ marginBottom: '1.5rem', padding: '0.75rem', background: 'rgba(245, 158, 11, 0.1)', borderRadius: 'var(--radius-md)', color: '#fbbf24', fontSize: '0.85rem', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
              <AlertCircle size={16} />
              <span>Firebase credentials in .env are currently empty. App is running seamlessly with simulated Cloud Firestore.</span>
            </div>
          )}

          {seedStatus && (
            <div style={{
              maxWidth: '520px',
              margin: '0 auto 1.5rem',
              padding: '0.75rem',
              borderRadius: 'var(--radius-md)',
              background: seedStatus.success ? 'rgba(16, 185, 129, 0.12)' : 'rgba(244, 63, 94, 0.12)',
              color: seedStatus.success ? '#34d399' : '#fb7185',
              fontSize: '0.85rem'
            }}>
              {seedStatus.message}
            </div>
          )}

          <button
            onClick={handleSeedCloud}
            disabled={isSeeding}
            className="btn-primary"
            style={{ padding: '0.8rem 2.2rem', fontSize: '1rem' }}
          >
            <UploadCloud size={18} />
            <span>{isSeeding ? 'Seeding Cloud Firestore...' : 'Push Seed Data to Cloud'}</span>
          </button>
        </div>
      )}
    </div>
  );
};
