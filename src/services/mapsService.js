// Google Maps Platform & Places API Service for LAWLINK
// Powers "Find Legal Help Near Me" with address autocomplete, nearby legal aid centers,
// cyber crime police stations, consumer commissions, and distance calculation.

const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || '';
export const hasMapsKey = Boolean(
  GOOGLE_MAPS_API_KEY && 
  GOOGLE_MAPS_API_KEY.length > 10 && 
  !GOOGLE_MAPS_API_KEY.includes('YOUR_')
);

// Verified Official Legal Support Locations across major Indian Metros
export const VERIFIED_LEGAL_LOCATIONS = [
  // Hyderabad & Telangana
  {
    id: 'loc_hyd_cyber',
    name: 'Cyber Crime Police Station, Cyberabad',
    category: 'Cybercrime Police',
    address: 'Cyberabad Police Commissionerate, Gachibowli, Hyderabad, Telangana 500032',
    lat: 17.4435,
    lng: 78.3687,
    phone: '040-27853412',
    tollFree: '1930',
    type: 'Police Cyber Cell',
    isOfficial: true,
    verificationStatus: 'VERIFIED',
    timings: '24x7 Emergency Services'
  },
  {
    id: 'loc_hyd_dlsa',
    name: 'District Legal Services Authority (DLSA), Hyderabad',
    category: 'Free Legal Aid',
    address: 'City Civil Court Complex, Purani Haveli, Hyderabad, Telangana 500002',
    lat: 17.3688,
    lng: 78.4836,
    phone: '040-24522442',
    tollFree: '15100',
    type: 'District Court Legal Aid',
    isOfficial: true,
    verificationStatus: 'VERIFIED',
    timings: '10:00 AM – 5:00 PM (Mon-Sat)'
  },
  {
    id: 'loc_hyd_consumer',
    name: 'District Consumer Disputes Redressal Commission-I, Hyderabad',
    category: 'Consumer Forum',
    address: 'Chandra Vihar, 5th Floor, MJ Road, Nampally, Hyderabad, Telangana 500001',
    lat: 17.3912,
    lng: 78.4725,
    phone: '040-24602213',
    tollFree: '1915',
    type: 'Consumer Court',
    isOfficial: true,
    verificationStatus: 'VERIFIED',
    timings: '10:30 AM – 5:00 PM (Working Days)'
  },
  {
    id: 'loc_hyd_sakhi',
    name: 'Sakhi One Stop Centre (OSC) & Women Helpline, Hyderabad',
    category: 'Women Safety',
    address: 'Near Old Maternity Hospital, Sultan Bazar, Koti, Hyderabad, Telangana 500095',
    lat: 17.3850,
    lng: 78.4867,
    phone: '040-24651111',
    tollFree: '181',
    type: 'Integrated Women Crisis Center',
    isOfficial: true,
    verificationStatus: 'VERIFIED',
    timings: '24x7 Dedicated Assistance'
  },
  {
    id: 'loc_hyd_griet',
    name: 'Miyapur Police Station (Near GRIET / Nizampet)',
    category: 'Local Police Station',
    address: 'Miyapur Main Road, Near Metro Station, Miyapur, Hyderabad, Telangana 500049',
    lat: 17.4969,
    lng: 78.3547,
    phone: '040-27853580',
    tollFree: '112',
    type: 'Jurisdictional Police Station',
    isOfficial: true,
    verificationStatus: 'VERIFIED',
    timings: '24x7 Emergency Services'
  },

  // Bengaluru & Karnataka
  {
    id: 'loc_blr_cyber',
    name: 'Cyber Crime Police Station (CID), Bengaluru',
    category: 'Cybercrime Police',
    address: 'Carlton House, Palace Road, Ambedkar Veedhi, Sampangi Rama Nagar, Bengaluru, Karnataka 560001',
    lat: 12.9818,
    lng: 77.5873,
    phone: '080-22094498',
    tollFree: '1930',
    type: 'State Cyber Command',
    isOfficial: true,
    verificationStatus: 'VERIFIED',
    timings: '24x7 Services'
  },
  {
    id: 'loc_blr_slsa',
    name: 'Karnataka State Legal Services Authority (Nyaya Degula)',
    category: 'Free Legal Aid',
    address: '1st Floor, Nyaya Degula, H. Siddaiah Road, Bengaluru, Karnataka 560027',
    lat: 12.9562,
    lng: 77.5910,
    phone: '080-22111725',
    tollFree: '15100',
    type: 'State Legal Aid Headquarters',
    isOfficial: true,
    verificationStatus: 'VERIFIED',
    timings: '10:00 AM – 5:00 PM'
  },

  // Delhi NCR
  {
    id: 'loc_del_dlsa',
    name: 'Delhi State Legal Services Authority (Central DLSA)',
    category: 'Free Legal Aid',
    address: 'Patiala House Courts Complex, India Gate, New Delhi 110001',
    lat: 28.6186,
    lng: 77.2343,
    phone: '011-23071623',
    tollFree: '15100',
    type: 'Legal Services Authority',
    isOfficial: true,
    verificationStatus: 'VERIFIED',
    timings: '10:00 AM – 5:00 PM'
  },
  {
    id: 'loc_del_cyber',
    name: 'Delhi Police IFSO (Special Cell Cyber Unit)',
    category: 'Cybercrime Police',
    address: 'Sector 16C, Dwarka, New Delhi 110078',
    lat: 28.5982,
    lng: 77.0287,
    phone: '011-20892633',
    tollFree: '1930',
    type: 'Special Cyber Crime Cell',
    isOfficial: true,
    verificationStatus: 'VERIFIED',
    timings: '24x7'
  },

  // Mumbai & Maharashtra
  {
    id: 'loc_mum_cyber',
    name: 'Cyber Police Station, Mumbai (BKC)',
    category: 'Cybercrime Police',
    address: 'Bandra Kurla Complex, Bandra East, Mumbai, Maharashtra 400051',
    lat: 19.0657,
    lng: 72.8687,
    phone: '022-26504008',
    tollFree: '1930',
    type: 'Mumbai Cyber Cell HQ',
    isOfficial: true,
    verificationStatus: 'VERIFIED',
    timings: '24x7'
  },
  {
    id: 'loc_mum_dlsa',
    name: 'Maharashtra State Legal Services Authority',
    category: 'Free Legal Aid',
    address: 'High Court PWD Building, Fort, Mumbai, Maharashtra 400032',
    lat: 18.9304,
    lng: 72.8306,
    phone: '022-22673962',
    tollFree: '15100',
    type: 'High Court Legal Services',
    isOfficial: true,
    verificationStatus: 'VERIFIED',
    timings: '10:00 AM – 5:00 PM'
  }
];

// Pre-set hub cities for instant selection
export const METRO_HUBS = [
  { name: 'Hyderabad (GRIET / Cyberabad)', lat: 17.5204, lng: 78.3676, formattedAddress: 'Gokaraju Rangaraju Institute of Engineering and Technology (GRIET), Bachupally, Hyderabad, Telangana' },
  { name: 'Bengaluru (MG Road / Central)', lat: 12.9716, lng: 77.5946, formattedAddress: 'Bengaluru Central, Karnataka' },
  { name: 'New Delhi (Connaught Place)', lat: 28.6304, lng: 77.2177, formattedAddress: 'Connaught Place, New Delhi, Delhi' },
  { name: 'Mumbai (BKC / Bandra)', lat: 19.0600, lng: 72.8600, formattedAddress: 'Bandra Kurla Complex, Mumbai, Maharashtra' }
];

// Haversine formula to compute great-circle distance in kilometers
export const computeDistanceKm = (lat1, lon1, lat2, lon2) => {
  const R = 6371; // Earth radius in km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = 
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return Math.round(R * c * 10) / 10;
};

// Autocomplete suggestions search
export const searchPlaces = async (input) => {
  if (!input || input.trim().length === 0) return [];
  const query = input.trim().toLowerCase();

  // If live Google Maps script is loaded, use Google Places AutocompleteService
  if (typeof window !== 'undefined' && window.google?.maps?.places?.AutocompleteService) {
    try {
      const service = new window.google.maps.places.AutocompleteService();
      const predictions = await new Promise((resolve) => {
        service.getPlacePredictions({ input, componentRestrictions: { country: 'in' } }, (res, status) => {
          if (status === window.google.maps.places.PlacesServiceStatus.OK && res) {
            resolve(res);
          } else {
            resolve([]);
          }
        });
      });

      if (predictions.length > 0) {
        return predictions.map(p => ({
          placeId: p.place_id,
          description: p.description,
          mainText: p.structured_formatting?.main_text || p.description,
          secondaryText: p.structured_formatting?.secondary_text || '',
          isGoogleResult: true
        }));
      }
    } catch (e) {
      console.warn('Google Places API autocomplete error:', e);
    }
  }

  // Built-in intelligent match for popular Indian educational & legal landmark searches
  const mockLandmarks = [
    {
      placeId: 'pl_griet_01',
      description: 'GRIET, Bachupally, Nizampet, Hyderabad, Telangana',
      mainText: 'GRIET Hyderabad',
      secondaryText: 'Gokaraju Rangaraju Institute, Bachupally, Telangana',
      lat: 17.5204,
      lng: 78.3676
    },
    {
      placeId: 'pl_hcu_02',
      description: 'University of Hyderabad (HCU), Gachibowli, Hyderabad, Telangana',
      mainText: 'University of Hyderabad',
      secondaryText: 'Prof. C.R. Rao Road, Gachibowli, Hyderabad',
      lat: 17.4600,
      lng: 78.3300
    },
    {
      placeId: 'pl_iith_03',
      description: 'IIT Hyderabad, Kandi, Sangareddy, Telangana',
      mainText: 'IIT Hyderabad',
      secondaryText: 'Near NH-65, Sangareddy, Telangana',
      lat: 17.5950,
      lng: 78.1250
    },
    {
      placeId: 'pl_delhi_hc',
      description: 'Delhi High Court, Shershah Road, New Delhi',
      mainText: 'Delhi High Court',
      secondaryText: 'New Delhi, Delhi 110503',
      lat: 28.6080,
      lng: 77.2410
    },
    {
      placeId: 'pl_iisc_blr',
      description: 'IISc Bangalore, CV Raman Road, Bengaluru, Karnataka',
      mainText: 'Indian Institute of Science (IISc)',
      secondaryText: 'Bengaluru, Karnataka 560012',
      lat: 13.0219,
      lng: 77.5671
    },
    {
      placeId: 'pl_bkc_mum',
      description: 'Bandra Kurla Complex (BKC), Mumbai, Maharashtra',
      mainText: 'Bandra Kurla Complex',
      secondaryText: 'Mumbai, Maharashtra',
      lat: 19.0674,
      lng: 72.8689
    }
  ];

  return mockLandmarks.filter(m => 
    m.description.toLowerCase().includes(query) || 
    m.mainText.toLowerCase().includes(query)
  );
};

// Open location in official Google Maps — using the correct URL format
// Uses /maps/search/ with exact name + address for precise targeting
export const getDirectionsUrl = (name, address, lat, lng) => {
  // The most reliable way to open a SPECIFIC named place in Google Maps:
  // Use the search?api=1&query= approach with the exact name + coordinates
  // This prevents Google from matching unrelated nearby businesses
  const query = `${name}, ${address}`;
  if (lat && lng) {
    // Use coordinates as anchor + name as query for pinpoint accuracy
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}&query_place_id=${lat},${lng}`;
  }
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
};

// Open Google Maps directions to exact coordinates
export const getDirectionsUrlByCoords = (name, address, lat, lng) => {
  if (lat && lng) {
    // Destination set to exact lat,lng — completely unambiguous
    return `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}&travelmode=driving`;
  }
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(name + ' ' + address)}`;
};
