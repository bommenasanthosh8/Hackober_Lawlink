import React from 'react';
import { 
  Search, 
  BookOpen, 
  Target, 
  PhoneCall, 
  ArrowRight, 
  ShieldCheck,
  ExternalLink 
} from 'lucide-react';
import { TOPICS, SCENARIOS, RESOURCES } from '../data/seedData';

export const GlobalSearchView = ({ query, onSelectTopic, onSelectScenario }) => {
  if (!query) {
    return (
      <div className="glass-panel" style={{ padding: '3rem', textAlign: 'center', maxWidth: '720px', margin: '0 auto' }}>
        <Search size={36} color="var(--text-muted)" style={{ margin: '0 auto 1rem' }} />
        <h2 style={{ fontSize: '1.35rem', marginBottom: '0.5rem' }}>Global Statutory Search</h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
          Search for legal concepts, UPI fraud, police procedures, consumer rights, or emergency helplines.
        </p>
      </div>
    );
  }

  const qLower = query.toLowerCase();

  // Search across topics
  const matchingTopics = TOPICS.filter(t => 
    t.title.toLowerCase().includes(qLower) ||
    t.description.toLowerCase().includes(qLower) ||
    t.category.toLowerCase().includes(qLower) ||
    t.keyLaws.some(l => l.section.toLowerCase().includes(qLower) || l.act.toLowerCase().includes(qLower))
  );

  // Search across scenarios
  const matchingScenarios = SCENARIOS.filter(s =>
    s.title.toLowerCase().includes(qLower) ||
    s.context.toLowerCase().includes(qLower) ||
    s.question.toLowerCase().includes(qLower)
  );

  // Search across resources
  const matchingResources = RESOURCES.filter(r =>
    r.name.toLowerCase().includes(qLower) ||
    r.purpose.toLowerCase().includes(qLower) ||
    r.category.toLowerCase().includes(qLower) ||
    r.tollFree.includes(qLower)
  );

  const totalResults = matchingTopics.length + matchingScenarios.length + matchingResources.length;

  return (
    <div style={{ maxWidth: '1040px', margin: '0 auto', animation: 'modal-slide-in 0.3s ease' }}>
      <div style={{ marginBottom: '1.5rem' }}>
        <h1 style={{ fontSize: '1.75rem', marginBottom: '0.25rem' }}>
          Search Results for "<span style={{ color: 'var(--primary-light)' }}>{query}</span>"
        </h1>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
          Found {totalResults} matching statutory items across modules, case studies, and helplines
        </p>
      </div>

      {totalResults === 0 ? (
        <div className="glass-panel" style={{ padding: '3rem', textAlign: 'center' }}>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', marginBottom: '1rem' }}>
            No direct statutory matches found for "{query}".
          </p>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            Try searching for terms like "UPI", "refund", "arrest", "traffic", "Aadhaar", or "ragging".
          </p>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {/* Matching Topics */}
          {matchingTopics.length > 0 && (
            <div>
              <h2 style={{ fontSize: '1.15rem', color: 'var(--primary-light)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <BookOpen size={18} />
                <span>Statutory Modules ({matchingTopics.length})</span>
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
                {matchingTopics.map(t => (
                  <div
                    key={t.id}
                    onClick={() => onSelectTopic(t.id)}
                    className="glass-panel glass-panel-interactive"
                    style={{ padding: '1.25rem' }}
                  >
                    <span className="badge-tag badge-primary" style={{ fontSize: '0.65rem', marginBottom: '0.5rem' }}>
                      {t.category}
                    </span>
                    <h3 style={{ fontSize: '1.1rem', marginBottom: '0.4rem', color: 'var(--text-main)' }}>
                      {t.title}
                    </h3>
                    <p style={{ fontSize: '0.825rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '0.75rem' }}>
                      {t.description.slice(0, 120)}...
                    </p>
                    <div style={{ fontSize: '0.75rem', color: 'var(--primary-light)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                      <span>Open Module</span>
                      <ArrowRight size={13} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Matching Scenarios */}
          {matchingScenarios.length > 0 && (
            <div>
              <h2 style={{ fontSize: '1.15rem', color: 'var(--accent-amber)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Target size={18} />
                <span>Case Scenarios: "What Would You Do?" ({matchingScenarios.length})</span>
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {matchingScenarios.map(sc => (
                  <div
                    key={sc.id}
                    onClick={() => onSelectScenario(sc)}
                    className="glass-panel glass-panel-interactive"
                    style={{ padding: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}
                  >
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.25rem' }}>
                        <span className={`badge-tag ${sc.urgency === 'Critical' ? 'badge-urgent' : 'badge-primary'}`} style={{ fontSize: '0.65rem' }}>
                          {sc.urgency} Urgency
                        </span>
                        <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Role: {sc.role}</span>
                      </div>
                      <h3 style={{ fontSize: '1rem', color: 'var(--text-main)', marginBottom: '0.25rem' }}>
                        {sc.title}
                      </h3>
                      <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                        {sc.context.slice(0, 140)}...
                      </p>
                    </div>

                    <ArrowRight size={16} color="var(--primary-light)" style={{ flexShrink: 0 }} />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Matching Verified Resources */}
          {matchingResources.length > 0 && (
            <div>
              <h2 style={{ fontSize: '1.15rem', color: 'var(--accent-emerald)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <PhoneCall size={18} />
                <span>Verified Official Helplines ({matchingResources.length})</span>
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
                {matchingResources.map(res => (
                  <div key={res.id} className="glass-panel" style={{ padding: '1.25rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                      <span className="badge-tag badge-primary" style={{ fontSize: '0.65rem' }}>{res.category}</span>
                      <span className="badge-tag badge-verified" style={{ fontSize: '0.65rem' }}>{res.verificationStatus}</span>
                    </div>
                    <h3 style={{ fontSize: '1rem', color: 'var(--text-main)', marginBottom: '0.35rem' }}>{res.name}</h3>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '0.75rem' }}>{res.purpose}</p>
                    {res.tollFree && (
                      <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#34d399' }}>
                        📞 Dial {res.tollFree}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
