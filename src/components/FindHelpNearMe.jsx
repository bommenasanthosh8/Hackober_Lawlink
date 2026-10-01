import React, { useState, useEffect } from 'react';
import { 
  MapPin, 
  Search, 
  Navigation, 
  Phone, 
  ExternalLink, 
  ShieldCheck, 
  AlertCircle, 
  Clock, 
  Filter,
  Crosshair,
  Building,
  Check
} from 'lucide-react';
import { 
  VERIFIED_LEGAL_LOCATIONS, 
  METRO_HUBS, 
  computeDistanceKm, 
  searchPlaces, 
  getDirectionsUrl,
  getDirectionsUrlByCoords,
  hasMapsKey 
} from '../services/mapsService';

export const FindHelpNearMe = () => {
  // Default user location is GRIET Hyderabad (Bachupally)
  const defaultHub = METRO_HUBS[0];
  const [userLocation, setUserLocation] = useState({
    name: defaultHub.name,
    formattedAddress: defaultHub.formattedAddress,
    lat: defaultHub.lat,
    lng: defaultHub.lng,
    placeId: 'pl_griet_01'
  });

  const [searchQuery, setSearchQuery] = useState('');
  const [predictions, setPredictions] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeMarkerId, setActiveMarkerId] = useState(null);
  const [locationDenied, setLocationDenied] = useState(false);
  const [locatingUser, setLocatingUser] = useState(false);

  // Autocomplete debounced search
  useEffect(() => {
    if (!searchQuery.trim() || searchQuery.trim().length < 2) {
      setPredictions([]);
      return;
    }

    const timer = setTimeout(async () => {
      setIsSearching(true);
      const results = await searchPlaces(searchQuery);
      setPredictions(results);
      setIsSearching(false);
    }, 250);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Request browser GPS location
  const handleRequestLocation = () => {
    if (!navigator.geolocation) {
      alert('Geolocation is not supported by your browser.');
      return;
    }

    setLocatingUser(true);
    setLocationDenied(false);

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        setUserLocation({
          name: 'Your Current GPS Location',
          formattedAddress: `Lat: ${latitude.toFixed(4)}, Lng: ${longitude.toFixed(4)}`,
          lat: latitude,
          lng: longitude,
          placeId: `gps_${Date.now()}`
        });
        setLocatingUser(false);
      },
      (err) => {
        console.warn('Geolocation permission denied or timed out:', err);
        setLocationDenied(true);
        setLocatingUser(false);
      },
      { timeout: 8000, enableHighAccuracy: true }
    );
  };

  const handleSelectPrediction = (p) => {
    setUserLocation({
      name: p.mainText,
      formattedAddress: p.description,
      lat: p.lat || defaultHub.lat,
      lng: p.lng || defaultHub.lng,
      placeId: p.placeId
    });
    setSearchQuery('');
    setPredictions([]);
  };

  // Compute distances from active location
  const nearbyResources = VERIFIED_LEGAL_LOCATIONS.map(loc => {
    const distanceKm = computeDistanceKm(userLocation.lat, userLocation.lng, loc.lat, loc.lng);
    return { ...loc, distanceKm };
  }).sort((a, b) => a.distanceKm - b.distanceKm);

  const filteredResources = selectedCategory === 'All' 
    ? nearbyResources 
    : nearbyResources.filter(r => r.category === selectedCategory);

  const categories = ['All', 'Cybercrime Police', 'Free Legal Aid', 'Consumer Forum', 'Women Safety', 'Local Police Station'];

  return (
    <div style={{ maxWidth: '1240px', margin: '0 auto', animation: 'modal-slide-in 0.3s ease' }}>
      {/* Top Banner */}
      <div className="glass-panel" style={{ padding: '1.75rem', marginBottom: '1.5rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'linear-gradient(90deg, #10b981 0%, #06b6d4 100%)'
        }} />

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap', marginBottom: '0.5rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
              <span className="badge-tag badge-verified">
                Google Maps Platform & Places API
              </span>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                National Statutory Registry
              </span>
            </div>
            <h1 style={{ fontSize: '1.65rem' }}>
              Find Legal Help Near Me
            </h1>
          </div>

          <button
            onClick={handleRequestLocation}
            disabled={locatingUser}
            className="btn-secondary"
            style={{ fontSize: '0.85rem' }}
          >
            <Crosshair size={16} color="var(--primary-light)" />
            <span>{locatingUser ? 'Acquiring GPS...' : 'Use My GPS Location'}</span>
          </button>
        </div>

        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', maxWidth: '750px' }}>
          Locate verified District Legal Services Authorities (DLSA), Cyber Police Stations, Consumer Dispute Commissions, and Sakhi One Stop Crisis Centres with live navigation.
        </p>

        {/* Location Permission Denied Notification */}
        {locationDenied && (
          <div style={{
            marginTop: '1rem',
            padding: '0.65rem 1rem',
            background: 'rgba(245, 158, 11, 0.1)',
            border: '1px solid rgba(245, 158, 11, 0.3)',
            borderRadius: 'var(--radius-md)',
            fontSize: '0.825rem',
            color: '#fbbf24',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <AlertCircle size={16} flexShrink={0} />
            <span>Location access was denied. Currently showing resources relative to: <strong>GRIET Hyderabad (Bachupally)</strong>. You can search any locality below.</span>
          </div>
        )}
      </div>

      {/* Address Search & Places Autocomplete Bar */}
      <div className="glass-panel" style={{ padding: '1.25rem', marginBottom: '1.5rem', position: 'relative', zIndex: 30 }}>
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          <div style={{ flex: '1', minWidth: '280px', position: 'relative' }}>
            <div style={{ position: 'relative' }}>
              <Search size={18} color="var(--text-muted)" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search any place or address (e.g. 'GRIET Hyderabad', 'Nizampet', 'Koti', 'Connaught Place')..."
                style={{
                  width: '100%',
                  padding: '0.65rem 1rem 0.65rem 2.4rem',
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid var(--border-medium)',
                  borderRadius: 'var(--radius-md)',
                  color: 'var(--text-main)',
                  fontSize: '0.9rem',
                  outline: 'none'
                }}
              />
            </div>

            {/* Autocomplete Predictions Dropdown */}
            {predictions.length > 0 && (
              <div style={{
                position: 'absolute',
                top: '105%',
                left: 0,
                right: 0,
                background: '#0f172a',
                border: '1px solid var(--border-highlight)',
                borderRadius: 'var(--radius-md)',
                boxShadow: 'var(--shadow-lg)',
                zIndex: 100,
                overflow: 'hidden'
              }}>
                <div style={{ padding: '0.4rem 0.75rem', fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700, borderBottom: '1px solid var(--border-subtle)' }}>
                  Google Places Matches
                </div>
                {predictions.map(p => (
                  <div
                    key={p.placeId}
                    onClick={() => handleSelectPrediction(p)}
                    style={{
                      padding: '0.65rem 0.85rem',
                      borderBottom: '1px solid var(--border-subtle)',
                      cursor: 'pointer',
                      fontSize: '0.85rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      transition: 'background var(--transition-fast)'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(99, 102, 241, 0.12)'}
                    onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                  >
                    <MapPin size={16} color="var(--primary-light)" flexShrink={0} />
                    <div>
                      <div style={{ fontWeight: 600, color: 'var(--text-main)' }}>{p.mainText}</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{p.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Quick Metro Hub Selector */}
          <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <span style={{ fontSize: '0.775rem', color: 'var(--text-muted)', marginRight: '0.2rem' }}>Preset Hubs:</span>
            {METRO_HUBS.map(hub => (
              <button
                key={hub.name}
                onClick={() => setUserLocation({
                  name: hub.name,
                  formattedAddress: hub.formattedAddress,
                  lat: hub.lat,
                  lng: hub.lng,
                  placeId: `hub_${hub.name}`
                })}
                style={{
                  fontSize: '0.75rem',
                  padding: '0.35rem 0.65rem',
                  borderRadius: 'var(--radius-full)',
                  background: userLocation.name === hub.name ? 'rgba(99, 102, 241, 0.25)' : 'rgba(255, 255, 255, 0.04)',
                  color: userLocation.name === hub.name ? 'var(--primary-light)' : 'var(--text-secondary)',
                  border: userLocation.name === hub.name ? '1px solid var(--border-highlight)' : '1px solid var(--border-subtle)'
                }}
              >
                {hub.name.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Current Active Location Display */}
        <div style={{ marginTop: '0.75rem', fontSize: '0.825rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <MapPin size={15} color="#10b981" />
          <span>Active Location: <strong style={{ color: 'var(--text-main)' }}>{userLocation.name}</strong> — {userLocation.formattedAddress}</span>
        </div>
      </div>

      {/* Category Filter Pills */}
      <div style={{ display: 'flex', gap: '0.5rem', overflowX: 'auto', paddingBottom: '0.5rem', marginBottom: '1.25rem' }}>
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
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

      {/* 2-Column Layout: Interactive Visual Map & Nearby Resource Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(320px, 1fr) minmax(340px, 1.2fr)', gap: '1.5rem', alignItems: 'start' }} className="maps-grid-container">
        
        {/* Visual Map Canvas / Interactive Map Container */}
        <div className="glass-panel" style={{ padding: '1.25rem', overflow: 'hidden' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
            <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Navigation size={16} color="var(--primary-light)" />
              <span>Interactive Map View</span>
            </div>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              Center: {userLocation.lat.toFixed(3)}, {userLocation.lng.toFixed(3)}
            </span>
          </div>

          {/* Map Simulation Surface with dynamic markers */}
          <div style={{
            height: '420px',
            borderRadius: 'var(--radius-md)',
            background: '#0a0f1d',
            border: '1px solid var(--border-subtle)',
            position: 'relative',
            overflow: 'hidden',
            backgroundImage: `
              radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.08) 0%, transparent 60%),
              linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
            `,
            backgroundSize: '100% 100%, 30px 30px, 30px 30px'
          }}>
            {/* Center User Location Radar */}
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              zIndex: 20
            }}>
              <div style={{
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                background: '#10b981',
                border: '3px solid #ffffff',
                boxShadow: '0 0 20px #10b981',
                animation: 'pulse-glow 2s infinite'
              }} />
              <div style={{
                marginTop: '4px',
                padding: '2px 8px',
                background: 'rgba(0,0,0,0.8)',
                borderRadius: '4px',
                fontSize: '0.7rem',
                fontWeight: 700,
                color: '#34d399',
                whiteSpace: 'nowrap'
              }}>
                You Are Here ({userLocation.name.split(' ')[0]})
              </div>
            </div>

            {/* Simulated Geographic Location Markers positioned relative to center */}
            {filteredResources.slice(0, 6).map((res, index) => {
              // Calculate relative offset based on coordinate differences
              const dLat = (res.lat - userLocation.lat) * 1200;
              const dLng = (res.lng - userLocation.lng) * 1200;
              const topPos = Math.max(15, Math.min(85, 50 - dLat));
              const leftPos = Math.max(15, Math.min(85, 50 + dLng));
              const isActive = activeMarkerId === res.id;

              return (
                <div
                  key={res.id}
                  onClick={() => setActiveMarkerId(res.id)}
                  style={{
                    position: 'absolute',
                    top: `${topPos}%`,
                    left: `${leftPos}%`,
                    transform: 'translate(-50%, -50%)',
                    zIndex: isActive ? 25 : 15,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                  title={res.name}
                >
                  <div style={{
                    width: isActive ? '36px' : '28px',
                    height: isActive ? '36px' : '28px',
                    borderRadius: '50%',
                    background: res.category.includes('Cyber') ? '#3b82f6' : res.category.includes('Legal') ? '#8b5cf6' : '#ec4899',
                    border: '2px solid #ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    boxShadow: isActive ? '0 0 18px var(--primary)' : '0 2px 8px rgba(0,0,0,0.5)',
                    transform: isActive ? 'scale(1.15)' : 'scale(1)'
                  }}>
                    {index + 1}
                  </div>
                </div>
              );
            })}

            {/* Map Legend Overlay */}
            <div style={{
              position: 'absolute',
              bottom: '10px',
              left: '10px',
              background: 'rgba(15, 23, 42, 0.85)',
              backdropFilter: 'blur(8px)',
              padding: '6px 10px',
              borderRadius: '6px',
              fontSize: '0.675rem',
              color: 'var(--text-secondary)',
              border: '1px solid var(--border-subtle)',
              display: 'flex',
              gap: '8px'
            }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#3b82f6' }} /> Cyber Police
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#8b5cf6' }} /> Legal Aid
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ec4899' }} /> Women Support
              </span>
            </div>

            {/* Attribution requirement */}
            <div style={{
              position: 'absolute',
              bottom: '10px',
              right: '10px',
              fontSize: '0.65rem',
              color: 'rgba(255, 255, 255, 0.4)'
            }}>
              Google Maps Platform Compatible Layer
            </div>
          </div>
        </div>

        {/* Nearby Resource Cards List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxHeight: '520px', overflowY: 'auto', paddingRight: '0.3rem' }}>
          {filteredResources.map((res, idx) => {
            const isSelected = activeMarkerId === res.id;

            return (
              <div
                key={res.id}
                onClick={() => setActiveMarkerId(res.id)}
                className="glass-panel"
                style={{
                  padding: '1.25rem',
                  border: isSelected ? '2px solid var(--border-highlight)' : '1px solid var(--border-subtle)',
                  background: isSelected ? 'rgba(99, 102, 241, 0.12)' : 'var(--bg-card)',
                  transition: 'all var(--transition-fast)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '0.75rem', marginBottom: '0.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <div style={{
                      width: '26px',
                      height: '26px',
                      borderRadius: '50%',
                      background: 'rgba(255, 255, 255, 0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 700,
                      fontSize: '0.8rem',
                      color: 'var(--text-main)'
                    }}>
                      {idx + 1}
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1rem', color: 'var(--text-main)', lineHeight: 1.3 }}>
                        {res.name}
                      </h3>
                      <span style={{ fontSize: '0.75rem', color: 'var(--primary-light)', fontWeight: 600 }}>
                        {res.category}
                      </span>
                    </div>
                  </div>

                  <div style={{ textAlign: 'right', flexShrink: 0 }}>
                    <span style={{
                      fontSize: '0.8rem',
                      fontWeight: 800,
                      color: '#34d399',
                      background: 'rgba(16, 185, 129, 0.12)',
                      padding: '0.2rem 0.5rem',
                      borderRadius: 'var(--radius-full)'
                    }}>
                      {res.distanceKm} km away
                    </span>
                  </div>
                </div>

                <p style={{ fontSize: '0.825rem', color: 'var(--text-secondary)', marginBottom: '0.75rem', lineHeight: 1.5 }}>
                  {res.address}
                </p>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap', fontSize: '0.785rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                    <Clock size={13} />
                    <span>{res.timings}</span>
                  </div>
                  {res.phone && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: 'var(--text-main)' }}>
                      <Phone size={13} />
                      <span>{res.phone}</span>
                    </div>
                  )}
                </div>

                {/* Card Actions: View on Google Maps & Get Directions */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
                  {/* "View on Map" — opens the exact named location via search */}
                  <a
                    href={getDirectionsUrl(res.name, res.address, res.lat, res.lng)}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary"
                    style={{ fontSize: '0.8rem', padding: '0.45rem 0.9rem' }}
                    onClick={(e) => e.stopPropagation()}
                    title={`Open "${res.name}" in Google Maps`}
                  >
                    <MapPin size={13} />
                    <span>View on Maps</span>
                    <ExternalLink size={12} />
                  </a>

                  {/* "Get Directions" — navigates to exact lat/lng coordinates */}
                  <a
                    href={getDirectionsUrlByCoords(res.name, res.address, res.lat, res.lng)}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-secondary"
                    style={{ fontSize: '0.8rem', padding: '0.45rem 0.85rem' }}
                    onClick={(e) => e.stopPropagation()}
                    title={`Get driving directions to ${res.name}`}
                  >
                    <Navigation size={13} />
                    <span>Get Directions</span>
                  </a>

                  {res.phone && (
                    <a
                      href={`tel:${res.phone}`}
                      className="btn-secondary"
                      style={{ fontSize: '0.8rem', padding: '0.45rem 0.85rem' }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Phone size={13} />
                      <span>Call</span>
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .maps-grid-container {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};
