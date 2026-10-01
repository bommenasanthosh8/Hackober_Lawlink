import React, { useState } from 'react';
import { 
  PhoneCall, 
  Search, 
  ShieldCheck, 
  ExternalLink, 
  Phone, 
  Globe, 
  CheckCircle2,
  Clock,
  Filter
} from 'lucide-react';
import { RESOURCES } from '../data/seedData';

export const TrustedHelpDirectory = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    'All',
    'Emergency',
    'Cybercrime',
    'Consumer Support',
    'Women\'s Safety',
    'Legal Aid',
    'Government Resources',
    'Digital Safety'
  ];

  const filtered = RESOURCES.filter(res => {
    const matchCat = selectedCategory === 'All' || res.category === selectedCategory;
    const matchSearch = searchQuery.trim() === '' || 
      res.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      res.purpose.toLowerCase().includes(searchQuery.toLowerCase()) ||
      res.tollFree.includes(searchQuery);
    return matchCat && matchSearch;
  });

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
          background: 'linear-gradient(90deg, #ec4899 0%, #6366f1 100%)'
        }} />

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap', marginBottom: '0.5rem' }}>
          <div>
            <span className="badge-tag badge-verified" style={{ marginBottom: '0.35rem' }}>
              Statutory Directory of India
            </span>
            <h1 style={{ fontSize: '1.75rem' }}>
              Trusted Help & Official Helplines
            </h1>
          </div>
          <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            All Contacts Verified by Legal Practitioners
          </span>
        </div>

        <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', maxWidth: '750px' }}>
          Direct access to official national helplines, dispute resolution portals, free legal aid committees (NALSA), and emergency crisis cells across India.
        </p>
      </div>

      {/* Search & Category Filter */}
      <div className="glass-panel" style={{ padding: '1.25rem', marginBottom: '1.5rem' }}>
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
          <div style={{ flex: 1, minWidth: '260px', position: 'relative' }}>
            <Search size={18} color="var(--text-muted)" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search helplines by name, purpose, or number (e.g. 1930, 1915, NALSA)..."
              style={{
                width: '100%',
                padding: '0.65rem 1rem 0.65rem 2.4rem',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md)',
                color: 'var(--text-main)',
                fontSize: '0.9rem',
                outline: 'none'
              }}
            />
          </div>
        </div>

        {/* Categories */}
        <div style={{ display: 'flex', gap: '0.4rem', overflowX: 'auto', paddingBottom: '0.3rem' }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              style={{
                padding: '0.4rem 0.85rem',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.785rem',
                fontWeight: 600,
                whiteSpace: 'nowrap',
                background: selectedCategory === cat ? 'linear-gradient(135deg, #4f46e5 0%, #6366f1 100%)' : 'rgba(255, 255, 255, 0.04)',
                color: selectedCategory === cat ? '#ffffff' : 'var(--text-secondary)',
                border: selectedCategory === cat ? 'none' : '1px solid var(--border-subtle)'
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Directory Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '1.25rem' }}>
        {filtered.map(res => (
          <div
            key={res.id}
            className="glass-panel"
            style={{
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              border: '1px solid var(--border-subtle)'
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem', marginBottom: '0.6rem' }}>
                <span className="badge-tag badge-primary" style={{ fontSize: '0.65rem' }}>
                  {res.category}
                </span>
                <span className="badge-tag badge-verified" style={{ fontSize: '0.65rem' }}>
                  {res.verificationStatus}
                </span>
              </div>

              <h3 style={{ fontSize: '1.15rem', color: 'var(--text-main)', marginBottom: '0.5rem', lineHeight: 1.3 }}>
                {res.name}
              </h3>

              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.55, marginBottom: '1rem' }}>
                {res.purpose}
              </p>
            </div>

            <div>
              <div style={{
                padding: '0.75rem',
                background: 'rgba(255, 255, 255, 0.03)',
                borderRadius: 'var(--radius-md)',
                marginBottom: '1rem',
                fontSize: '0.8rem'
              }}>
                <div style={{ color: 'var(--text-muted)' }}>Location / Scope:</div>
                <div style={{ fontWeight: 600, color: 'var(--text-main)', marginTop: '0.15rem' }}>
                  {res.location || 'National Jurisdiction (India)'}
                </div>
                <div style={{ fontSize: '0.725rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                  Reviewed by {res.reviewedBy} on {res.lastVerifiedAt}
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
                {res.tollFree && (
                  <a
                    href={`tel:${res.tollFree}`}
                    className="btn-primary"
                    style={{ fontSize: '0.825rem', padding: '0.45rem 0.95rem' }}
                  >
                    <Phone size={14} />
                    <span>Dial {res.tollFree}</span>
                  </a>
                )}

                <a
                  href={res.officialUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary"
                  style={{ fontSize: '0.825rem', padding: '0.45rem 0.95rem' }}
                >
                  <Globe size={14} />
                  <span>Official Portal</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
