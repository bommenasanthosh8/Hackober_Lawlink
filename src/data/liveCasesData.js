// LAWLINK — Data-Driven Case Files for Live Case Mode
// Powered by Gemini Live API (Real-Time Voice NPC Engine)
// Grounded against verified statutory Indian law:
// - Bharatiya Nyaya Sanhita (BNS, 2024) / Information Technology Act 2000 / RBI Zero Liability
// - Consumer Protection Act (CPA, 2019) & E-Commerce Rules 2020
// - Motor Vehicles (Amendment) Act 2019 & Rule 139 CMVR (DigiLocker Parity)
// - Protection of Women from Sexual Harassment (POSH Act, 2013)
// - Digital Personal Data Protection Act (DPDPA, 2023)

export const LIVE_CASE_BADGES = [
  {
    id: 'scam_slayer',
    name: 'Scam Slayer',
    nameHi: 'स्कैम संहारक',
    nameTe: 'స్కామ్ స్లేయర్',
    icon: 'ShieldCheck',
    color: '#ef4444',
    description: 'Thwarted an aggressive voice phishing scammer in real time without leaking credentials.',
    liveCaseRequirement: 'case_fake_bank_call'
  },
  {
    id: 'cool_under_pressure',
    name: 'Cool Under Pressure',
    nameHi: 'दबाव में शांत',
    nameTe: 'ఒత్తిడిలో ప్రశాంతత',
    icon: 'Scale',
    color: '#06b6d4',
    description: 'Stood firm against intimidating checkpost pressure and asserted DigiLocker rights.',
    liveCaseRequirement: 'case_checkpost_pressure'
  },
  {
    id: 'consumer_champion',
    name: 'Consumer Champion',
    nameHi: 'उपभोक्ता विजेता',
    nameTe: 'వినియోగదారుల విజేత',
    icon: 'Award',
    color: '#f59e0b',
    description: 'Enforced statutory refund rights against deceptive seller tactics using CPA 2019.',
    liveCaseRequirement: 'case_consumer_refund'
  },
  {
    id: 'rights_ranger',
    name: 'Rights Ranger',
    nameHi: 'अधिकार रेंजर',
    nameTe: 'హక్కుల రేంజర్',
    icon: 'Flame',
    color: '#8b5cf6',
    description: 'Mastered 3+ Live Voice Cases with 3-star composure and accurate statutory counters.',
    liveCaseCountRequirement: 3
  }
];

export const LIVE_CASES = [
  {
    id: 'case_fake_bank_call',
    isDemoFlagship: true,
    title: 'The Fake Bank Call',
    titleHi: 'फ़र्ज़ी बैंक कॉल — लाइव एनपीसी मुकाबला',
    titleTe: 'నకిలీ బ్యాంక్ కాల్ — లైవ్ వాయిస్ కేసు',
    tagline: 'Defend your bank account against an aggressive UPI verification scammer.',
    topic: 'Cybercrime & Financial Fraud',
    topicId: 'cybercrime',
    category: 'Digital Security',
    icon: 'PhoneCall',
    difficulty: 'Flagship Demo',
    difficultyLevel: 1, // Accessible to beginners
    estimatedMinutes: 3,
    minLevelRequired: 1,
    voice: 'Kore', // Deep, firm official voice
    callerDisplay: {
      name: 'SBI Card Security Team',
      number: '+91 98210-XXXXX (Spoofed)',
      location: 'Mumbai Central Operations',
      verifiedLabel: 'Suspicious Caller'
    },
    npcPersona: {
      name: 'Rajesh Kumar',
      role: 'Senior Fraud Prevention Officer (Impersonator)',
      tone: 'Urgent, stern, authoritative, pushy, speaking Hinglish/English with bureaucratic jargon.',
      dialogueStyle: 'Rapid-fire, cites fake transaction IDs like TXN98042, warns account is being suspended in 120 seconds.',
      openingLine: 'Hello? Am I speaking to the account holder? This is Rajesh Kumar from SBI Card Fraud Cell. An unauthorized transaction of ₹48,990 was just initiated on Flipkart from your card! Did you authorize this transaction?!'
    },
    phases: [
      {
        id: 'phase_pressure',
        number: 1,
        title: 'The Urgent Panic Setup',
        description: 'The scammer creates intense urgency and demands immediate confirmation to cancel the debit.'
      },
      {
        id: 'phase_trap',
        number: 2,
        title: 'The OTP Trap',
        description: 'The scammer sends a prompt and insists reading the 6-digit SMS OTP is mandatory for security reversal.'
      },
      {
        id: 'phase_counter',
        number: 3,
        title: 'The Legal Counter',
        description: 'The player refuses the OTP, demands verification, and mentions the Golden Hour / National Cyber Helpline 1930.'
      },
      {
        id: 'phase_resolution',
        number: 4,
        title: 'Case Resolution',
        description: 'The player asserts RBI Zero Liability and official reporting on cybercrime.gov.in. Scammer hangs up in defeat.'
      }
    ],
    evidenceItems: [
      {
        id: 'ev_refuse_otp',
        label: 'Refused to Share OTP / PIN / CVV',
        labelHi: 'ओटीपी / पिन साझा करने से मना किया',
        labelTe: 'ఓటీపీ / పిన్ ఇవ్వడానికి నిరాకరించారు',
        points: 40,
        acceptedConcepts: [
          'no otp', 'not sharing otp', 'wont give otp', 'never share password', 'never share otp',
          'otp nahi dunga', 'otp share nahi karunga', 'pin nahi bataunga', 'bank never asks otp',
          'why do you need otp', 'i will not tell code', 'rbi says no otp', 'otp enduku cheppali'
        ],
        hint: 'Clearly state: "I will not share any OTP, PIN, or password with anyone."'
      },
      {
        id: 'ev_mention_1930',
        label: 'Cited Cyber Helpline 1930 / I4C',
        labelHi: 'साइबर हेल्पलाइन 1930 का उल्लेख किया',
        labelTe: 'సైబర్ హెల్ప్‌లైన్ 1930 ప్రస్తావించారు',
        points: 30,
        acceptedConcepts: [
          '1930', 'nineteen thirty', 'cyber helpline', 'cyber crime helpline', 'i4c',
          'call 1930', 'report 1930', '1930 pe call karunga', '1930 ki call chesta'
        ],
        hint: 'Mention calling India\'s National Cyber Crime Helpline number 1930.'
      },
      {
        id: 'ev_cite_portal',
        label: 'Mentioned cybercrime.gov.in / Official Desk',
        labelHi: 'cybercrime.gov.in पर रिपोर्ट करने की बात कही',
        labelTe: 'cybercrime.gov.in పోర్టల్ గురించి చెప్పారు',
        points: 30,
        acceptedConcepts: [
          'cybercrime.gov.in', 'cyber crime portal', 'national portal', 'official bank branch',
          'i will visit my bank', 'customer care official', 'branch jaa raha hoon', 'official number'
        ],
        hint: 'State that you will report this on cybercrime.gov.in or visit your official branch.'
      },
      {
        id: 'ev_cite_golden_hour',
        label: 'Invoked RBI Zero Liability / Golden Hour',
        labelHi: 'आरबीआई जीरो लायबिलिटी / गोल्डन ऑवर का हवाला दिया',
        labelTe: 'ఆర్‌బీఐ జీరో లయబిలిటీ / గోల్డెన్ అవర్ చట్టం చెప్పారు',
        points: 30,
        acceptedConcepts: [
          'rbi rule', 'zero liability', 'golden hour', 'freeze account', 'lien on account',
          'section 66d', 'it act', 'three days reporting', 'bank responsibility', 'bns 318'
        ],
        hint: 'Mention RBI Zero Liability rules or putting a lien/freeze on the transaction.'
      }
    ],
    traps: [
      {
        id: 'trap_share_otp',
        name: 'Shared Verification Code',
        triggerPhrases: ['my otp is', 'otp is 4', 'otp is 5', 'otp is 8', 'code is', 'number is 84', 'it says 5', 'here is the otp'],
        penalty: { composure: -35, legalStrength: -30 },
        npcResponse: 'Aha! Thank you, system is processing... Wait! Scammer successfully cashed out ₹48,990!'
      },
      {
        id: 'trap_trust_caller_id',
        name: 'Fell for Caller ID / Truecaller spoof',
        triggerPhrases: ['truecaller says sbi', 'you are really bank', 'okay please cancel it for me', 'do whatever you need to cancel'],
        penalty: { composure: -15, legalStrength: -10 },
        npcResponse: 'Yes exactly, we are verified! Now stay on the line and read out the SMS you just received immediately!'
      }
    ],
    knowledgePack: {
      acts: [
        { section: 'Section 66D', act: 'Information Technology Act, 2000', note: 'Cheating by personation using computer resource — up to 3 years imprisonment.' },
        { section: 'Section 318', act: 'Bharatiya Nyaya Sanhita (BNS), 2024', note: 'Replaced IPC 420 for cheating and dishonestly inducing delivery of property.' },
        { section: 'DBR.No.Leg.BC.78/2017', act: 'RBI Customer Protection Circular', note: 'Zero liability for unauthorized electronic transactions reported within 3 working days.' }
      ],
      rights: [
        'No bank official, police officer, or RBI agent is ever permitted to ask for OTP, UPI PIN, or CVV.',
        'Immediate reporting within the 1-2 hour "Golden Hour" allows I4C to freeze beneficiary wallets.',
        'Users can freeze their account instantly by sending SMS "BLOCK" or calling their bank\'s dedicated fraud desk.'
      ],
      steps: [
        'Disconnect any call requesting OTP or remote screen-sharing apps (AnyDesk, TeamViewer).',
        'Call National Cyber Crime Helpline 1930 immediately.',
        'Log onto cybercrime.gov.in and register an incident report with transaction UTR.',
        'Notify your home bank to place an immediate debit lien on the account.'
      ],
      helplines: [
        { name: 'National Cyber Crime Helpline', number: '1930', tollFree: true },
        { name: 'National Cybercrime Reporting Portal', url: 'https://cybercrime.gov.in' },
        { name: 'RBI Sachet Fraud Portal', url: 'https://sachet.rbi.org.in' }
      ],
      verifiedOn: '2026-09-20',
      verifiedBy: 'Adv. S. Sharma (Cyber Law Practitioner)'
    },
    rewards: {
      baseXp: 350,
      badgeId: 'scam_slayer',
      starsThresholds: { threeStars: 85, twoStars: 65, oneStar: 45 }
    }
  },
  {
    id: 'case_consumer_refund',
    isDemoFlagship: false,
    title: 'No Refund, No Problem?',
    titleHi: 'रिफंड नहीं? कोई बात नहीं — उपभोक्ता अदालत',
    titleTe: 'రీఫండ్ లేదా? పర్లేదు — వినియోగదారుల రక్షణ',
    tagline: 'Hold an evasive e-commerce store manager accountable under Consumer Protection Act 2019.',
    topic: 'Consumer Rights & E-Commerce',
    topicId: 'consumer_rights',
    category: 'Civil & Commerce',
    icon: 'ShoppingBag',
    difficulty: 'Intermediate',
    difficultyLevel: 2,
    estimatedMinutes: 3,
    minLevelRequired: 1,
    voice: 'Puck', // Fast-talking, dismissive merchant voice
    callerDisplay: {
      name: 'SuperKart Customer Escalations',
      number: '1800-SUP-KART',
      location: 'Bengaluru Logistics Desk',
      verifiedLabel: 'Merchant Dispute'
    },
    npcPersona: {
      name: 'Sunil Mehra',
      role: 'Customer Support Escalations Manager',
      tone: 'Dismissive, polite but firm, citing fake "Store Policy" to avoid paying cash refund.',
      dialogueStyle: 'Insists on store credits valid for only 30 days, claims electronics have "no return once box opened".',
      openingLine: 'Sir, I am calling regarding your laptop return request. Our store policy clearly states: unboxed electronics can only receive a 10% store coupon, no refunds. We cannot accept the return!'
    },
    phases: [
      {
        id: 'phase_denial',
        number: 1,
        title: 'The Store Policy Wall',
        description: 'Manager denies refund citing internal company terms.'
      },
      {
        id: 'phase_trap',
        number: 2,
        title: 'The Voucher Compromise Trap',
        description: 'Manager offers a meager shopping credit coupon to make you waive your rights.'
      },
      {
        id: 'phase_counter',
        number: 3,
        title: 'The Statutory Counter',
        description: 'Player asserts Consumer Protection Act 2019, tax invoice, and unboxing proof.'
      },
      {
        id: 'phase_resolution',
        number: 4,
        title: 'Statutory Redressal',
        description: 'Player cites NCH 1915 and e-Daakhil filing. Manager backs down and issues full refund.'
      }
    ],
    evidenceItems: [
      {
        id: 'ev_cite_cpa',
        label: 'Invoked Consumer Protection Act 2019',
        labelHi: 'उपभोक्ता संरक्षण अधिनियम 2019 का हवाला दिया',
        labelTe: 'వినియోగదారుల రక్షణ చట్టం 2019 చెప్పారు',
        points: 40,
        acceptedConcepts: [
          'consumer protection act', 'cpa 2019', 'unfair trade practice', 'defective product',
          'consumer rights', 'section 2 47', 'ccpa rules', 'consumer commission'
        ],
        hint: 'Cite your statutory rights under the Consumer Protection Act, 2019.'
      },
      {
        id: 'ev_retain_invoice',
        label: 'Mentioned Tax Invoice & Video Proof',
        labelHi: 'टैक्स इनवॉइस और अनबॉक्सिंग वीडियो का सबूत दिया',
        labelTe: 'టాక్స్ ఇన్వాయిస్ మరియు వీడియో సాక్ష్యం చూపించారు',
        points: 30,
        acceptedConcepts: [
          'tax invoice', 'bill', 'receipt', 'unboxing video', 'proof of purchase',
          'order id', 'photos of defect', 'video recording'
        ],
        hint: 'Mention that you have the tax invoice and timestamped unboxing video proof.'
      },
      {
        id: 'ev_mention_1915',
        label: 'Cited National Consumer Helpline 1915',
        labelHi: 'राष्ट्रीय उपभोक्ता हेल्पलाइन 1915 का उल्लेख किया',
        labelTe: 'జాతీయ వినియోగదారుల హెల్ప్‌లైన్ 1915 ప్రస్తావించారు',
        points: 30,
        acceptedConcepts: [
          '1915', 'national consumer helpline', 'nch portal', 'consumerhelpline.gov.in',
          'consumer forum', 'file complaint on 1915'
        ],
        hint: 'Mention filing an official complaint on National Consumer Helpline 1915.'
      },
      {
        id: 'ev_cite_edaakhil',
        label: 'Mentioned e-Daakhil District Commission',
        labelHi: 'ई-दाखिल पोर्टल पर याचिका दायर करने की चेतावनी दी',
        labelTe: 'ఇ-దాఖిల్ పోర్టల్ ద్వారా కేసు వేస్తామని చెప్పారు',
        points: 30,
        acceptedConcepts: [
          'e-daakhil', 'edaakhil', 'district commission', 'consumer court', 'legal notice',
          'grievance officer', 'compensation for harassment'
        ],
        hint: 'State that you will file an e-Daakhil petition before the District Consumer Commission.'
      }
    ],
    traps: [
      {
        id: 'trap_accept_voucher',
        name: 'Surrendered to Store Voucher',
        triggerPhrases: ['okay give me voucher', 'i will take coupon', 'fine coupon is okay', 'just send store credit'],
        penalty: { composure: -25, legalStrength: -30 },
        npcResponse: 'Great! Voucher credited with 15-day expiry and 50% max redemption limit! Ticket closed!'
      },
      {
        id: 'trap_abusive_language',
        name: 'Lost Composure with Abusive Language',
        triggerPhrases: ['you idiot', 'scoundrel', 'bloody thief', 'i will beat you'],
        penalty: { composure: -30, legalStrength: -20 },
        npcResponse: 'Sir, I am terminating this call due to abusive language under telecom conduct rules!'
      }
    ],
    knowledgePack: {
      acts: [
        { section: 'Section 2(47)', act: 'Consumer Protection Act, 2019', note: 'Defines Unfair Trade Practice including refusal to refund defective items.' },
        { section: 'Section 35', act: 'Consumer Protection Act, 2019', note: 'Procedure for filing complaint before District Consumer Redressal Commission.' },
        { section: 'E-Commerce Rules 2020', act: 'Consumer Protection (E-Commerce) Rules', note: 'Mandatory grievance redressal within 48 hours and resolution within 1 month.' }
      ],
      rights: [
        'Private company policy CANNOT override statutory Indian consumer law.',
        'Claims up to ₹5 Lakhs require zero court fee in consumer commissions.',
        'Sellers are legally liable for replacement, repair, or full monetary refund for defective products.'
      ],
      steps: [
        'Send formal written notice to company\'s Grievance Officer.',
        'Dial National Consumer Helpline on 1915 or WhatsApp 8800001915.',
        'If unresolved in 30 days, register online petition at edaakhil.nic.in.'
      ],
      helplines: [
        { name: 'National Consumer Helpline', number: '1915', tollFree: true },
        { name: 'NCH WhatsApp Grievance', number: '8800001915' },
        { name: 'e-Daakhil Online Filing', url: 'https://edaakhil.nic.in' }
      ],
      verifiedOn: '2026-09-18',
      verifiedBy: 'Adv. R. Venkatraman (Consumer Forum Advocate)'
    },
    rewards: {
      baseXp: 300,
      badgeId: 'consumer_champion',
      starsThresholds: { threeStars: 85, twoStars: 65, oneStar: 45 }
    }
  },
  {
    id: 'case_checkpost_pressure',
    isDemoFlagship: false,
    title: 'Checkpost Pressure',
    titleHi: 'चेकपोस्ट चेकिंग — मोटर वाहन कानून',
    titleTe: 'ట్రాఫిక్ చెక్‌పోస్ట్ — మోటారు వాహన చట్టం',
    tagline: 'Navigate an aggressive traffic checkpost stop, insist on DigiLocker parity, and prevent bribery.',
    topic: 'Road Laws & Motor Vehicles Act',
    topicId: 'road_laws',
    category: 'Public Safety',
    icon: 'Car',
    difficulty: 'Intermediate',
    difficultyLevel: 2,
    estimatedMinutes: 3,
    minLevelRequired: 1,
    voice: 'Fenrir', // Deep, commanding, stern police voice
    callerDisplay: {
      name: 'Highway Police Patrol Unit 4',
      number: 'Traffic Stop — Sector 18',
      location: 'National Highway Checkpoint',
      verifiedLabel: 'Traffic Inspection'
    },
    npcPersona: {
      name: 'Sub-Inspector Vikram Rathore',
      role: 'Traffic Sub-Inspector on Duty',
      tone: 'Stern, impatient, demanding physical RC/DL papers, threatening to impound vehicle.',
      dialogueStyle: 'Commands the driver to step out, refuses phone screen, demands cash fine on spot.',
      openingLine: 'Stop the engine! License and Registration Certificate out immediately! Why is your tail light dim? Hand over original plastic cards right now or vehicle goes to the police station!'
    },
    phases: [
      {
        id: 'phase_stop',
        number: 1,
        title: 'The Aggressive Stop',
        description: 'Officer demands original physical documents and threatens immediate seizure.'
      },
      {
        id: 'phase_trap',
        number: 2,
        title: 'The Cash Settlement Trap',
        description: 'Officer hints at a ₹1,000 "spot cash adjustment" without a printed e-challan receipt.'
      },
      {
        id: 'phase_counter',
        number: 3,
        title: 'The Statutory DigiLocker Defense',
        description: 'Player stays calm, shows mParivahan/DigiLocker, and asks for officer badge & e-POS challan.'
      },
      {
        id: 'phase_resolution',
        number: 4,
        title: 'Lawful E-Challan Procedure',
        description: 'Officer recognizes legal literacy, inspects digital records properly, and proceeds lawfully.'
      }
    ],
    evidenceItems: [
      {
        id: 'ev_cite_digilocker',
        label: 'Invoked Rule 139 CMVR / DigiLocker Parity',
        labelHi: 'डिजीलॉकर / mParivahan की कानूनी मान्यता बताई',
        labelTe: 'డిజిలాకర్ / mParivahan చట్టబద్ధత చూపించారు',
        points: 40,
        acceptedConcepts: [
          'digilocker', 'mparivahan', 'rule 139', 'morth circular', 'digital documents valid',
          'legal parity', 'central motor vehicles rules', 'phone documents legal'
        ],
        hint: 'State that under Rule 139 of CMVR, DigiLocker documents are legally equivalent to originals.'
      },
      {
        id: 'ev_demand_echallan',
        label: 'Demanded Official E-Challan / E-POS Receipt',
        labelHi: 'आधिकारिक ई-चालान और रसीद की मांग की',
        labelTe: 'అధికారిక ఈ-చలాన్ రసీదు కోరారు',
        points: 30,
        acceptedConcepts: [
          'e-challan', 'echallan', 'official receipt', 'epos machine', 'generate challan',
          'i will pay online', 'vcourts.gov.in', 'printed slip'
        ],
        hint: 'Ask for a printed or SMS e-challan and state you will pay through official virtual courts.'
      },
      {
        id: 'ev_refuse_cash_bribe',
        label: 'Refused Unofficial Cash "Spot Adjustment"',
        labelHi: 'अनौपचारिक नकद रिश्वत देने से इनकार किया',
        labelTe: 'అనధికారిక నగదు ఇవ్వడానికి నిరాకరించారు',
        points: 30,
        acceptedConcepts: [
          'no cash', 'will not pay cash', 'no bribe', 'give me challan', 'official fine only',
          'rashid do', 'kachha fine nahi', 'challan kat do'
        ],
        hint: 'Politely refuse any cash payment without a government printed e-challan.'
      },
      {
        id: 'ev_ask_officer_id',
        label: 'Politely Inquired Officer Name & Rank Badge',
        labelHi: 'अधिकारी का नाम और पद बैज विनम्रता से पूछा',
        labelTe: 'పోలీస్ అధికారి పేరు మరియు హోదా అడిగారు',
        points: 30,
        acceptedConcepts: [
          'your name sir', 'badge number', 'sub inspector', 'which police station',
          'name tag', 'police commissionerate'
        ],
        hint: 'Ask respectfully: "Officer, may I note your name and police station for the record?"'
      }
    ],
    traps: [
      {
        id: 'trap_pay_bribe',
        name: 'Offered Cash to "Settle It Fast"',
        triggerPhrases: ['take 500 and let me go', 'take 1000 cash', 'sir adjustment kar lo', 'take money and leave me'],
        penalty: { composure: -35, legalStrength: -35 },
        npcResponse: 'Bribery under Prevention of Corruption Act Section 7! Now you face non-bailable arrest!'
      },
      {
        id: 'trap_shout_politician',
        name: 'Unfounded Namedropping / Aggression',
        triggerPhrases: ['do you know who my father is', 'i will get you suspended', 'tu jaanta nahi mera baap kaun hai'],
        penalty: { composure: -25, legalStrength: -20 },
        npcResponse: 'Threatening a public servant on duty under Section 221 BNS! Step out of the vehicle right now!'
      }
    ],
    knowledgePack: {
      acts: [
        { section: 'Rule 139', act: 'Central Motor Vehicles Rules, 1989', note: 'Production of digital license and RC on DigiLocker/mParivahan deemed valid compliance.' },
        { section: 'Section 134A', act: 'Motor Vehicles (Amendment) Act, 2019', note: 'Statutory immunity for Good Samaritans assisting road accident victims.' },
        { section: 'Section 206(4)', act: 'Motor Vehicles Act, 1988', note: 'Only officers of Sub-Inspector rank and above can impound documents for specific major offenses.' }
      ],
      rights: [
        'Police officers below Sub-Inspector rank cannot levy spot fines above minimal thresholds.',
        'You have the right to record audio/video of public interactions as long as you do not obstruct duty.',
        'Traffic police cannot snatch vehicle keys from the ignition without legal justification.'
      ],
      steps: [
        'Turn on cabin light, keep hands visible on steering wheel, speak politely.',
        'Open DigiLocker or mParivahan app and present digital DL and RC.',
        'Request an e-challan if an offense is cited; pay online at echallan.parivahan.gov.in.'
      ],
      helplines: [
        { name: 'National Emergency Helpline', number: '112', tollFree: true },
        { name: 'MoRTH mParivahan Support', url: 'https://parivahan.gov.in' },
        { name: 'Virtual Traffic Courts', url: 'https://vcourts.gov.in' }
      ],
      verifiedOn: '2026-09-15',
      verifiedBy: 'Adv. Anjali Mehta (High Court of Delhi)'
    },
    rewards: {
      baseXp: 300,
      badgeId: 'cool_under_pressure',
      starsThresholds: { threeStars: 85, twoStars: 65, oneStar: 45 }
    }
  },
  {
    id: 'case_toxic_boss',
    isDemoFlagship: false,
    title: 'The Toxic Boss',
    titleHi: 'कार्यस्थल उत्पीड़न — पॉश कानून',
    titleTe: 'కార్యాలయ వేధింపులు — పోష్ చట్టం',
    tagline: 'Defend professional boundaries against inappropriate conduct and intimidation under POSH 2013.',
    topic: 'Student Rights & Workplace Protections',
    topicId: 'student_workplace',
    category: 'Education & Employment',
    icon: 'Briefcase',
    difficulty: 'Advanced',
    difficultyLevel: 3,
    estimatedMinutes: 4,
    minLevelRequired: 2,
    voice: 'Aoede', // Subtle, authoritative, manipulative corporate voice
    callerDisplay: {
      name: 'Rohan Malhotra',
      number: 'Internal Executive Call',
      location: 'Corporate HQ — 14th Floor',
      verifiedLabel: 'Workplace Incident'
    },
    npcPersona: {
      name: 'Rohan Malhotra',
      role: 'Senior Vice President',
      tone: 'Manipulative, gaslighting, implying promotion requires private dinners, threatening appraisal.',
      dialogueStyle: 'Subtle boundary crossing, says "be a team player", warns that refusing will ruin career prospects.',
      openingLine: 'Hey, I saw your appraisal draft. You know, hard work is only half the battle here. Join me for private drinks tonight at my farm house, and I will make sure you get the Director promotion. What do you say?'
    },
    phases: [
      {
        id: 'phase_boundary',
        number: 1,
        title: 'The Inappropriate Proposition',
        description: 'Superior uses appraisal leverage to demand private personal meetings.'
      },
      {
        id: 'phase_trap',
        number: 2,
        title: 'The Career Ruin Threat',
        description: 'Superior warns that formal complaints will blacklist you across the industry.'
      },
      {
        id: 'phase_counter',
        number: 3,
        title: 'The POSH Statutory Shield',
        description: 'Player firmly sets professional boundary and cites the Internal Complaints Committee (ICC).'
      },
      {
        id: 'phase_resolution',
        number: 4,
        title: 'Formal Documentation',
        description: 'Player asserts written trail, She-Box reporting, and legal anti-retaliation protections.'
      }
    ],
    evidenceItems: [
      {
        id: 'ev_firm_refusal',
        label: 'Set Unambiguous Professional Boundary',
        labelHi: 'स्पष्ट पेशेवर सीमा तय की',
        labelTe: 'స్పష్టమైన వృత్తిపరమైన హద్దులు విధించారు',
        points: 40,
        acceptedConcepts: [
          'strictly professional', 'uncomfortable', 'unacceptable', 'no thank you',
          'keep this professional', 'not appropriate', 'boundary', 'refuse'
        ],
        hint: 'State clearly: "I maintain strictly professional relationships at work. This is unacceptable."'
      },
      {
        id: 'ev_cite_posh_icc',
        label: 'Invoked POSH Act 2013 & Internal Committee',
        labelHi: 'पॉश अधिनियम 2013 और आंतरिक समिति (ICC) का हवाला दिया',
        labelTe: 'పోష్ చట్టం 2013 మరియు అంతర్గత కమిటీ (ICC) చెప్పారు',
        points: 40,
        acceptedConcepts: [
          'posh act', 'icc', 'internal complaints committee', 'sexual harassment act',
          'prevention of sexual harassment', 'workplace harassment law'
        ],
        hint: 'Cite the POSH Act 2013 and your right to approach the Internal Complaints Committee.'
      },
      {
        id: 'ev_maintain_record',
        label: 'Demanded Written Communication / Record',
        labelHi: 'लिखित ईमेल और रिकॉर्ड बनाए रखने की बात कही',
        labelTe: 'రాతపూర్వక ఈమెయిల్ మరియు రికార్డు ఉంచుతామని చెప్పారు',
        points: 30,
        acceptedConcepts: [
          'put this on email', 'send this in writing', 'i am recording', 'documenting this',
          'written trail', 'preserving chats', 'hr escalation'
        ],
        hint: 'State that all performance communications must strictly be documented via official email.'
      },
      {
        id: 'ev_cite_shebox',
        label: 'Mentioned Ministry SHe-Box / Anti-Retaliation',
        labelHi: 'महिला व बाल विकास मंत्रालय SHe-Box का उल्लेख किया',
        labelTe: 'మహిళా అభివృద్ధి మంత్రిత్వ శాఖ SHe-Box ప్రస్తావించారు',
        points: 30,
        acceptedConcepts: [
          'she box', 'she-box', 'anti retaliation', 'ministry of women', 'legal protection',
          'cannot retaliate', 'victimization'
        ],
        hint: 'Mention statutory anti-retaliation safeguards and the Central SHe-Box portal.'
      }
    ],
    traps: [
      {
        id: 'trap_silent_acceptance',
        name: 'Yielded to Emotional Coercion',
        triggerPhrases: ['okay sir whatever you say', 'please don\'t ruin my appraisal', 'i will come'],
        penalty: { composure: -35, legalStrength: -30 },
        npcResponse: 'Good decision. Don\'t mention this to anyone or I will pull your appraisal.'
      }
    ],
    knowledgePack: {
      acts: [
        { section: 'Section 4', act: 'Sexual Harassment of Women at Workplace (POSH) Act, 2013', note: 'Mandates Internal Complaints Committee (ICC) in every entity with 10+ employees.' },
        { section: 'Section 74', act: 'Bharatiya Nyaya Sanhita (BNS), 2024', note: 'Assault or criminal force to woman with intent to outrage modesty (formerly IPC 354).' },
        { section: 'Section 16', act: 'POSH Act, 2013', note: 'Strict confidentiality of identity and inquiry proceedings.' }
      ],
      rights: [
        'Quid pro quo sexual harassment (linking promotion to sexual favors) is explicitly illegal.',
        'Employers are legally prohibited from retaliating or victimizing the complainant during inquiry.',
        'Employees can file complaints directly on the Central Government SHe-Box portal.'
      ],
      steps: [
        'Immediately document date, time, words, and preserve messages/voicemails.',
        'Submit formal written complaint to the Presiding Officer of the ICC within 3 months.',
        'Request interim relief: transfer of supervisor or paid leave during inquiry.'
      ],
      helplines: [
        { name: 'National Commission for Women Helpline', number: '7827170170', tollFree: true },
        { name: 'Central SHe-Box Portal', url: 'https://shebox.wcd.gov.in' },
        { name: 'Women Helpline', number: '1091' }
      ],
      verifiedOn: '2026-09-10',
      verifiedBy: 'Adv. S. K. Roy (Labor & Constitutional Law)'
    },
    rewards: {
      baseXp: 350,
      badgeId: 'rights_ranger',
      starsThresholds: { threeStars: 85, twoStars: 65, oneStar: 45 }
    }
  }
];
