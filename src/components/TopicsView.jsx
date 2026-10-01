import React, { useState } from 'react';
import { 
  ShieldAlert, 
  ShoppingBag, 
  Car, 
  Lock, 
  Scale, 
  Briefcase, 
  HeartHandshake, 
  Clock, 
  Award, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  BookOpen,
  Home,
  FileSearch,
  Leaf,
  Users,
  Heart
} from 'lucide-react';
import { TOPICS } from '../data/seedData';
import { useGamification } from '../context/GamificationContext';
import { useLanguage } from '../context/LanguageContext';
import { sounds } from '../utils/soundEffects';

const ICON_MAP = {
  ShieldAlert: ShieldAlert,
  ShoppingBag: ShoppingBag,
  Car: Car,
  Lock: Lock,
  Scale: Scale,
  Briefcase: Briefcase,
  HeartHandshake: HeartHandshake,
  Home: Home,
  FileSearch: FileSearch,
  Leaf: Leaf,
  Users: Users,
  Heart: Heart
};

export const TopicsView = ({ onSelectTopic }) => {
  const { progress } = useGamification();
  const { t, language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All',
    'Digital Security',
    'Civil & Commerce',
    'Public Safety',
    'Constitutional Law',
    'Education & Employment',
    'Safety & Human Rights',
    'Civil & Property',
    'Governance & Transparency',
    'Public Health & Environment',
    'Social Welfare',
    'Family & Personal Law'
  ];

  const filteredTopics = selectedCategory === 'All' 
    ? TOPICS 
    : TOPICS.filter(t => t.category === selectedCategory);

  const completedTopics = progress?.completedTopics || [];

  return (
    <div style={{ maxWidth: '1240px', margin: '0 auto', animation: 'modal-slide-in 0.3s ease' }}>
      {/* Header */}
      <div className="glass-panel" style={{ padding: '1.75rem', marginBottom: '1.5rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'linear-gradient(90deg, #4f46e5 0%, #06b6d4 100%)'
        }} />

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap', marginBottom: '0.5rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.25rem' }}>
              <span className="badge-tag badge-primary">
                7 Core Statutory Curricula
              </span>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                {completedTopics.length} of 7 Completed
              </span>
            </div>
            <h1 style={{ fontSize: '1.75rem' }}>
              {t('navTopics')}
            </h1>
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.4rem 0.8rem',
            background: 'rgba(255, 255, 255, 0.04)',
            borderRadius: 'var(--radius-full)',
            border: '1px solid var(--border-subtle)',
            fontSize: '0.85rem'
          }}>
            <Award size={16} color="#f59e0b" />
            <span style={{ color: 'var(--text-main)', fontWeight: 600 }}>Earn up to 1,700 XP</span>
          </div>
        </div>

        <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', maxWidth: '720px' }}>
          Each curriculum includes an overview of landmark acts, interactive concept cards, real-life branching scenarios, practical action checklists, and knowledge quizzes.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div style={{ display: 'flex', gap: '0.5rem', overflowX: 'auto', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => {
              sounds.playClick();
              setSelectedCategory(cat);
            }}
            style={{
              padding: '0.45rem 0.9rem',
              borderRadius: 'var(--radius-full)',
              fontSize: '0.8rem',
              fontWeight: 600,
              whiteSpace: 'nowrap',
              background: selectedCategory === cat ? 'linear-gradient(135deg, #4f46e5 0%, #6366f1 100%)' : 'rgba(255, 255, 255, 0.04)',
              color: selectedCategory === cat ? '#ffffff' : 'var(--text-secondary)',
              border: selectedCategory === cat ? 'none' : '1px solid var(--border-subtle)',
              boxShadow: selectedCategory === cat ? '0 2px 10px var(--primary-glow)' : 'none',
              transition: 'all var(--transition-fast)'
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Topics Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '1.5rem' }}>
        {filteredTopics.map((topic) => {
          const IconComp = ICON_MAP[topic.icon] || BookOpen;
          const isCompleted = completedTopics.includes(topic.id);

          const title = language === 'hi' ? topic.titleHi : language === 'te' ? topic.titleTe : topic.title;
          const description = language === 'hi' ? topic.descriptionHi : language === 'te' ? topic.descriptionTe : topic.description;

          return (
            <div
              key={topic.id}
              onClick={() => {
                sounds.playClick();
                onSelectTopic(topic.id);
              }}
              className="glass-panel glass-panel-interactive"
              style={{
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                border: isCompleted ? '1px solid rgba(16, 185, 129, 0.4)' : '1px solid var(--border-subtle)',
                position: 'relative'
              }}
            >
              {isCompleted && (
                <div style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  color: '#34d399',
                  background: 'rgba(16, 185, 129, 0.15)',
                  padding: '0.2rem 0.6rem',
                  borderRadius: 'var(--radius-full)'
                }}>
                  <CheckCircle2 size={13} />
                  <span>Completed</span>
                </div>
              )}

              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    background: 'rgba(99, 102, 241, 0.15)',
                    border: '1px solid rgba(99, 102, 241, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--primary-light)'
                  }}>
                    <IconComp size={24} />
                  </div>
                  <div>
                    <span className="badge-tag badge-primary" style={{ fontSize: '0.65rem' }}>
                      {topic.category}
                    </span>
                    <h3 style={{ fontSize: '1.15rem', color: 'var(--text-main)', marginTop: '0.2rem', lineHeight: 1.3 }}>
                      {title}
                    </h3>
                  </div>
                </div>

                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '1.25rem' }}>
                  {description}
                </p>
              </div>

              <div>
                <div style={{
                  padding: '0.75rem',
                  background: 'rgba(255, 255, 255, 0.02)',
                  borderRadius: 'var(--radius-md)',
                  marginBottom: '1rem',
                  fontSize: '0.785rem',
                  color: 'var(--text-muted)'
                }}>
                  <strong style={{ color: 'var(--text-secondary)' }}>Statutory Key Laws:</strong>
                  <div style={{ marginTop: '0.25rem', color: 'var(--text-main)' }}>
                    {topic.keyLaws.slice(0, 2).map(l => l.section).join(', ')}...
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.8rem', paddingTop: '0.5rem', borderTop: '1px solid var(--border-subtle)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'var(--text-muted)' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                      <Clock size={13} /> {topic.estimatedMinutes}m
                    </span>
                    <span style={{ color: '#f59e0b', fontWeight: 700 }}>
                      +{topic.xpReward} XP
                    </span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: 'var(--primary-light)', fontWeight: 600 }}>
                    <span>Launch</span>
                    <ArrowRight size={14} />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
