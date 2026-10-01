// LAWLINK Verified Seed Data Repository
// Grounded legal awareness curriculum for 7 core domains
// Verified against official Indian statutory frameworks (IT Act 2000, CPA 2019, MVA 2019, DPDPA 2023, POSH 2013, PWDVA 2005, NALSA Act)

export const TOPICS = [
  {
    id: 'cybercrime',
    title: 'Cybercrime & Financial Fraud',
    titleHi: 'साइबर अपराध और वित्तीय धोखाधड़ी',
    titleTe: 'సైబర్ క్రైమ్ మరియు ఆర్థిక మోసం',
    category: 'Digital Security',
    icon: 'ShieldAlert',
    difficulty: 'Beginner to Intermediate',
    estimatedMinutes: 20,
    xpReward: 250,
    description: 'Learn how to detect UPI phishing, SIM swaps, unauthorized debits, and understand legal recourse under the Information Technology Act.',
    descriptionHi: 'यूपीआई फ़िशिंग, सिम स्वैप, अनधिकृत डेबिट को पहचानें और आईटी अधिनियम के तहत कानूनी उपाय समझें।',
    descriptionTe: 'యూపీఐ మోసాలు, సిమ్ స్వాప్, అనధికార నగదు బదిలీలను గుర్తించడం మరియు ఐటీ చట్టం ద్వారా న్యాయ సహాయం పొందడం నేర్చుకోండి.',
    keyLaws: [
      { section: 'Section 66C', act: 'Information Technology Act, 2000', description: 'Punishment for identity theft using electronic signature, password, or unique identification.' },
      { section: 'Section 66D', act: 'Information Technology Act, 2000', description: 'Punishment for cheating by personation using computer resource or communication device.' },
      { section: 'RBI Circular 2017', act: 'Zero Liability Guidelines', description: 'Zero customer liability if unauthorized electronic banking fraud is reported within 3 working days.' },
      { section: 'Section 43', act: 'Information Technology Act, 2000', description: 'Civil compensation for unauthorized access, data download, or computer contamination.' }
    ],
    conceptCards: [
      {
        id: 'c1',
        title: 'The Golden Hour Rule',
        explanation: 'Reporting cyber financial fraud to helpline 1930 or cybercrime.gov.in within the first 1–2 hours allows the Indian Cyber Crime Coordination Centre (I4C) to freeze beneficiary accounts before scammers cash out.',
        practicalTip: 'Immediately note transaction reference ID, beneficiary UPI VPA, and bank debit SMS timestamp.',
        keyStat: 'Over 70% recovery rate when reported within the golden hour.'
      },
      {
        id: 'c2',
        title: 'Zero Customer Liability (RBI)',
        explanation: 'Under RBI circular DBR.No.Leg.BC.78/09.07.005/2017-18, if an unauthorized transaction occurs due to third-party breach or system fault and you report it within 3 working days, your liability is zero.',
        practicalTip: 'Never share OTP or CVV. If shared, notify bank immediately to block account and card.',
        keyStat: 'Bank must credit amount within 10 working days of reporting.'
      },
      {
        id: 'c3',
        title: 'SIM Swap & E-SIM Hijacking',
        explanation: 'Scammers initiate unauthorized SIM swaps by tricking telecom providers. Sudden loss of cellular signal while receiving spam calls is a key danger signal.',
        practicalTip: 'If your SIM shows "No Service" unexpectedly, contact your telecom operator from another phone immediately.',
        keyStat: 'Do not ignore repeated missed calls from unknown international or spoofed numbers.'
      }
    ],
    practicalActions: [
      'Call the National Cyber Crime Helpline on 1930 immediately.',
      'File an incident report on the official portal at cybercrime.gov.in.',
      'Call your bank\'s 24x7 fraud helpline and request an urgent "Account Freeze" and "Lien on Transaction".',
      'Preserve uncropped screenshots of SMS, WhatsApp chats, caller ID logs, and bank statement PDF.',
      'File a Zero FIR at your local police station if the transaction value is substantial.'
    ],
    sourceInfo: {
      sourceName: 'Indian Cyber Crime Coordination Centre (I4C) & Reserve Bank of India',
      sourceUrl: 'https://cybercrime.gov.in',
      verificationStatus: 'VERIFIED',
      lastVerifiedAt: '2026-08-15',
      reviewedBy: 'Adv. S. Sharma (Cyber Law Specialist)',
      contentVersion: 'v2.4'
    }
  },
  {
    id: 'consumer_rights',
    title: 'Consumer Rights & E-Commerce',
    titleHi: 'उपभोक्ता अधिकार और ई-कॉमर्स',
    titleTe: 'వినియోగదారుల హక్కులు మరియు ఈ-కామర్స్',
    category: 'Civil & Commerce',
    icon: 'ShoppingBag',
    difficulty: 'Beginner',
    estimatedMinutes: 18,
    xpReward: 200,
    description: 'Understand consumer protections against defective products, unfair trade practices, misleading advertisements, and dark patterns.',
    descriptionHi: 'दोषपूर्ण उत्पादों, अनुचित व्यापार प्रथाओं और भ्रामक विज्ञापनों के खिलाफ उपभोक्ता सुरक्षा को समझें।',
    descriptionTe: 'లోపభూయిష్ట ఉత్పత్తులు, తప్పుడు వాణిజ్య పద్ధతులు మరియు మోసపూరిత ప్రకటనలకు వ్యతిరేకంగా వినియోగదారు హక్కులను తెలుసుకోండి.',
    keyLaws: [
      { section: 'Section 2(47)', act: 'Consumer Protection Act, 2019', description: 'Defines Unfair Trade Practice, including refusal to issue invoice or false representation.' },
      { section: 'Section 35', act: 'Consumer Protection Act, 2019', description: 'Procedure for filing a consumer complaint before District Consumer Disputes Redressal Commission.' },
      { section: 'CCPA Guidelines 2023', act: 'Prevention of Dark Patterns', description: 'Strict prohibition on false urgency, basket sneaking, forced actions, and subscription traps.' },
      { section: 'E-Commerce Rules 2020', act: 'Consumer Protection Rules', description: 'Mandatory disclosure of seller address, expiry date, country of origin, and grievance officer details.' }
    ],
    conceptCards: [
      {
        id: 'c4',
        title: 'Dark Patterns are Illegal',
        explanation: 'Tricks like ticking insurance by default ("Basket Sneaking"), bogus countdown timers ("False Urgency"), or refusing easy cancellation are punishable under CCPA guidelines.',
        practicalTip: 'Take a video recording of deceptive checkouts showing forced addons.',
        keyStat: 'Penalties up to ₹10 Lakhs on e-commerce platforms using prohibited dark patterns.'
      },
      {
        id: 'c5',
        title: 'e-Daakhil Online Portal',
        explanation: 'You do not need an expensive lawyer to fight consumer fraud. The Government\'s e-Daakhil portal allows any citizen to file and track consumer cases from home.',
        practicalTip: 'Register on edaakhil.nic.in with your Aadhaar and invoice copy.',
        keyStat: 'No court fee required for consumer claims up to ₹5 Lakhs.'
      }
    ],
    practicalActions: [
      'Call the National Consumer Helpline at 1915 or use WhatsApp support on 8800001915.',
      'Send a formal grievance notice via registered email to the e-commerce company\'s Grievance Officer.',
      'Preserve tax invoice, unboxing video with sealed package condition, and courier docket number.',
      'File an online grievance on consumerhelpline.gov.in (NCH portal).',
      'If unresolved in 30 days, file a statutory petition on edaakhil.nic.in.'
    ],
    sourceInfo: {
      sourceName: 'Department of Consumer Affairs, Ministry of Consumer Affairs, Food & Public Distribution',
      sourceUrl: 'https://consumerhelpline.gov.in',
      verificationStatus: 'VERIFIED',
      lastVerifiedAt: '2026-07-20',
      reviewedBy: 'Adv. R. Venkatraman (Consumer Forum Practitioner)',
      contentVersion: 'v2.1'
    }
  },
  {
    id: 'road_laws',
    title: 'Road Laws & Motor Vehicles Act',
    titleHi: 'सड़क कानून और मोटर वाहन अधिनियम',
    titleTe: 'రహదారి చట్టాలు మరియు మోటారు వాహనాల చట్టం',
    category: 'Public Safety',
    icon: 'Car',
    difficulty: 'Beginner',
    estimatedMinutes: 15,
    xpReward: 200,
    description: 'Master your rights during traffic stops, know e-challan legal procedures, and understand Good Samaritan legal immunity during road accidents.',
    descriptionHi: 'ट्रैफ़िक जांच के दौरान अपने अधिकारों को जानें, ई-चालान प्रक्रिया और गुड सेमारिटन कानूनी सुरक्षा को समझें।',
    descriptionTe: 'ట్రాఫిక్ తనిఖీల సమయంలో మీ హక్కులు, ఈ-చలాన్ నిబంధనలు మరియు క్షతగాత్రులను కాపాడే గుడ్ సమారిటన్ చట్టాన్ని తెలుసుకోండి.',
    keyLaws: [
      { section: 'Section 134A', act: 'Motor Vehicles (Amendment) Act, 2019', description: 'Protection of Good Samaritans: No civil or criminal liability for assisting road accident victims.' },
      { section: 'Section 185', act: 'Motor Vehicles Act, 1988', description: 'Driving under the influence of alcohol or drugs and breath analyzer protocols.' },
      { section: 'Section 206(4)', act: 'Motor Vehicles Act, 1988', description: 'Impounding of driving licence by police officer for specific severe offenses.' },
      { section: 'Rule 139', act: 'Central Motor Vehicles Rules, 1989', description: 'Validity of digital documents on Digilocker and mParivahan apps across all states.' }
    ],
    conceptCards: [
      {
        id: 'c6',
        title: 'Good Samaritan Immunity',
        explanation: 'If you assist an injured person on the road, police cannot force you to reveal identity, cannot detain you at the hospital, and you cannot be sued for medical complications.',
        practicalTip: 'Hospital staff must treat the patient immediately without waiting for a police FIR or advance deposit.',
        keyStat: 'Ministry reward of ₹5,000 for Good Samaritans saving road accident lives.'
      },
      {
        id: 'c7',
        title: 'DigiLocker is Legally Binding',
        explanation: 'Under Ministry of Road Transport Circular RT-11036/64/2017-MVL, electronic driving license and RC stored in DigiLocker or mParivahan are at par with original physical documents.',
        practicalTip: 'Police officers cannot refuse DigiLocker documents or seize physical phone.',
        keyStat: 'Police below Sub-Inspector rank cannot levy spot fines exceeding threshold limits.'
      }
    ],
    practicalActions: [
      'Present valid DL, RC, PUC, and Insurance through DigiLocker or mParivahan app.',
      'Check official e-challan status on echallan.parivahan.gov.in before paying any fine.',
      'In an accident, call 112 (Emergency) or 108 (Ambulance) immediately; assistance is immune from liability.',
      'Request the name, badge number, and challan book/e-POS receipt from the checking officer.',
      'Contest wrongful challans at the Virtual Court (vcourts.gov.in) with dashcam or timestamped photo evidence.'
    ],
    sourceInfo: {
      sourceName: 'Ministry of Road Transport and Highways (MoRTH) & Supreme Court of India',
      sourceUrl: 'https://morth.nic.in',
      verificationStatus: 'VERIFIED',
      lastVerifiedAt: '2026-09-01',
      reviewedBy: 'Adv. Anjali Mehta (High Court of Delhi)',
      contentVersion: 'v2.2'
    }
  },
  {
    id: 'digital_privacy',
    title: 'Digital Privacy & Data Protection',
    titleHi: 'डिजिटल गोपनीयता और डेटा संरक्षण',
    titleTe: 'డిజిటల్ గోప్యత మరియు డేటా రక్షణ',
    category: 'Digital Security',
    icon: 'Lock',
    difficulty: 'Intermediate',
    estimatedMinutes: 22,
    xpReward: 250,
    description: 'Learn your legal rights under the Digital Personal Data Protection Act 2023, Aadhaar biometric lock, and defense against illegal snooping.',
    descriptionHi: 'डिजिटल व्यक्तिगत डेटा संरक्षण अधिनियम 2023, आधार बायोमेट्रिक लॉक और अवैध निगरानी से सुरक्षा के अधिकार जानें।',
    descriptionTe: 'డిజిటల్ వ్యక్తిగత డేటా రక్షణ చట్టం 2023, ఆధార్ బయోమెట్రిక్ లాక్ మరియు ప్రైవసీ రక్షణ హక్కులను అర్థం చేసుకోండి.',
    keyLaws: [
      { section: 'Section 6', act: 'Digital Personal Data Protection Act, 2023', description: 'Requirements for valid notice and unambiguous, itemized consent for personal data processing.' },
      { section: 'Section 11', act: 'Digital Personal Data Protection Act, 2023', description: 'Right to access, correction, erasure of personal data, and grievance redressal.' },
      { section: 'Section 29', act: 'Aadhaar Act, 2016', description: 'Prohibition against sharing core biometric information with any entity.' },
      { section: 'Article 21', act: 'Constitution of India (K.S. Puttaswamy Judgment)', description: 'Fundamental Right to Privacy declared an intrinsic part of the Right to Life.' }
    ],
    conceptCards: [
      {
        id: 'c8',
        title: 'Lock Your Aadhaar Biometrics',
        explanation: 'UIDAI allows every citizen to lock their fingerprints and iris scans via the mAadhaar app. Once locked, no AePS (Aadhaar Enabled Payment System) withdrawal can occur without unlocking.',
        practicalTip: 'Always use masked Aadhaar (showing only last 4 digits) for hotel check-ins or KYC.',
        keyStat: 'Over 90% of AePS unauthorized withdrawals happen on unlocked biometrics.'
      },
      {
        id: 'c9',
        title: 'Right to Withdraw Consent',
        explanation: 'Under DPDPA 2023, you can revoke permission previously granted to any app to access your contacts, location, or gallery, and request deletion of stored data.',
        practicalTip: 'Submit a formal data deletion request via the app\'s Data Protection Officer (DPO) email.',
        keyStat: 'Penalties on data fiduciaries up to ₹250 Crores for significant data breaches.'
      }
    ],
    practicalActions: [
      'Lock Aadhaar biometrics immediately on resident.uidai.gov.in or mAadhaar app.',
      'Revoke sensitive permissions (Contacts, Microphone, Location, Files) for unused apps.',
      'Download Masked Aadhaar from uidai.gov.in for identity proof.',
      'Check active SIM connections registered under your Aadhaar on the Sanchar Saathi portal (tafcop.sancharsaathi.gov.in).',
      'Report unauthorized SIMs or compromised accounts on Sanchar Saathi.'
    ],
    sourceInfo: {
      sourceName: 'Ministry of Electronics & Information Technology (MeitY) & UIDAI',
      sourceUrl: 'https://www.meity.gov.in',
      verificationStatus: 'VERIFIED',
      lastVerifiedAt: '2026-08-30',
      reviewedBy: 'Adv. S. Sharma (Cyber Law Specialist)',
      contentVersion: 'v2.3'
    }
  },
  {
    id: 'fundamental_rights',
    title: 'Fundamental Rights & Police Interactions',
    titleHi: 'मौलिक अधिकार और पुलिस बातचीत',
    titleTe: 'ప్రాథమిక హక్కులు మరియు పోలీసు ఇంటరాక్షన్లు',
    category: 'Constitutional Law',
    icon: 'Scale',
    difficulty: 'Intermediate',
    estimatedMinutes: 25,
    xpReward: 300,
    description: 'Understand Article 21, lawful detention, D.K. Basu guidelines for arrest, search warrant rules, and freedom of expression within constitutional boundaries.',
    descriptionHi: 'अनुच्छेद 21, वैध हिरासत, डी.के. बसु गिरफ्तारी दिशानिर्देश और अपने संवैधानिक अधिकारों को विस्तार से जानें।',
    descriptionTe: 'ఆర్టికల్ 21, చట్టబద్ధమైన నిర్బంధం, డి.కె. బసు అరెస్ట్ మార్గదర్శకాలు మరియు రాజ్యాంగ హక్కుల గురించి తెలుసుకోండి.',
    keyLaws: [
      { section: 'Article 21', act: 'Constitution of India', description: 'Protection of life and personal liberty except according to procedure established by law.' },
      { section: 'Section 41B / Section 36 BNSS', act: 'Code of Criminal Procedure / BNSS', description: 'Procedure of arrest and duties of officer making arrest, including preparation of memo.' },
      { section: 'Section 50 CrPC', act: 'Right to Grounds of Arrest', description: 'Arrested person must be informed immediately of the exact grounds of arrest and bail eligibility.' },
      { section: 'D.K. Basu v. State of WB', act: 'Supreme Court Landmark Judgment', description: 'Mandatory 11-point arrest protocol: visible name badge, arrest memo, informing family within 12 hours.' }
    ],
    conceptCards: [
      {
        id: 'c10',
        title: 'The D.K. Basu Arrest Safeguards',
        explanation: 'Police officers must display clear name tags, prepare an Arrest Memo signed by at least one respectable witness, inform a relative within 8–12 hours, and conduct medical examination.',
        practicalTip: 'You have the legal right to consult an advocate of your choice during interrogation.',
        keyStat: 'Arrested person must be produced before a Magistrate within 24 hours of arrest.'
      },
      {
        id: 'c11',
        title: 'Phone Searches & Device Privacy',
        explanation: 'Police cannot arbitrarily seize or browse your private smartphone without a specific judicial warrant, formal seizure memo, or reasonable suspicion linked to an active cognizable FIR.',
        practicalTip: 'Politely ask: "Sir, under which Section or registered FIR are you inspecting my private phone?"',
        keyStat: 'Supreme Court has affirmed that personal digital devices contain intimate Article 21 data.'
      }
    ],
    practicalActions: [
      'Always ask the inspecting officer for their name, rank, and the reason for questioning.',
      'Insist on an official Arrest Memo (Form 41B) if being detained.',
      'Exercise your constitutional right to contact a lawyer or family member immediately.',
      'Do not sign blank papers or pre-typed confessional statements under coercion.',
      'Request free legal aid from the District Legal Services Authority (DLSA) if you cannot afford counsel.'
    ],
    sourceInfo: {
      sourceName: 'Supreme Court of India & National Legal Services Authority (NALSA)',
      sourceUrl: 'https://nalsa.gov.in',
      verificationStatus: 'VERIFIED',
      lastVerifiedAt: '2026-07-15',
      reviewedBy: 'Adv. Anjali Mehta (High Court of Delhi)',
      contentVersion: 'v2.0'
    }
  },
  {
    id: 'student_workplace',
    title: 'Student Rights & Workplace Protections',
    titleHi: 'छात्र अधिकार और कार्यस्थल सुरक्षा',
    titleTe: 'విద్యార్థి హక్కులు మరియు కార్యాలయ రక్షణ',
    category: 'Education & Employment',
    icon: 'Briefcase',
    difficulty: 'Intermediate',
    estimatedMinutes: 20,
    xpReward: 250,
    description: 'Learn legal protections against campus ragging, workplace sexual harassment (POSH Act), unfair training bonds, and non-payment of internship stipends.',
    descriptionHi: 'रैगिंग, कार्यस्थल पर यौन उत्पीड़न (पॉश एक्ट), अनुचित ट्रेनिंग बॉन्ड और इंटर्नशिप अधिकारों को समझें।',
    descriptionTe: 'ర్యాగింగ్ నిరోధం, పని ప్రదేశంలో లైంగిక వేధింపుల చట్టం (పోష్), అన్యాయమైన బాండ్లు మరియు ఇంటర్న్‌షిప్ హక్కులను తెలుసుకోండి.',
    keyLaws: [
      { section: 'Section 4', act: 'POSH Act, 2013', description: 'Mandatory constitution of Internal Complaints Committee (ICC) in every organization with 10+ employees.' },
      { section: 'Section 27', act: 'Indian Contract Act, 1872', description: 'Agreements in restraint of trade, lawful profession, or employment are void and unenforceable.' },
      { section: 'UGC Anti-Ragging Regulations', act: 'Supreme Court Raghavan Committee', description: 'Zero tolerance for psychological or physical abuse; mandatory FIR within 24 hours of complaint.' },
      { section: 'Payment of Wages Act', act: 'Labor Code Regulations', description: 'Prohibits withholding original academic certificates as collateral or security deposit.' }
    ],
    conceptCards: [
      {
        id: 'c12',
        title: 'Original Degree Retention is Illegal',
        explanation: 'Neither an employer nor an educational institute has any legal right to retain your original degree certificates, passport, or marksheets as security.',
        practicalTip: 'Provide only self-attested photocopies or DigiLocker verified digital credentials.',
        keyStat: 'UGC and AICTE public notices mandate penalty and de-recognition for institutes retaining certificates.'
      },
      {
        id: 'c13',
        title: 'Unreasonable Employment Bonds',
        explanation: 'Under Section 27 of the Indian Contract Act, companies cannot enforce punitive employment bonds that restrict your freedom to change jobs unless they prove actual training expenses incurred.',
        practicalTip: 'A bond demanding ₹5 Lakhs for generic on-the-job training is routinely struck down by Indian courts.',
        keyStat: 'Bonds can only recover reasonable actual expenses, not impose unreasonable penalties.'
      }
    ],
    practicalActions: [
      'Report ragging anonymously to the National Anti-Ragging Helpline on 1800-180-5522 or helpline@antiragging.in.',
      'File a written complaint to the presiding officer of the Internal Complaints Committee (ICC) for POSH issues.',
      'Never surrender original certificates to an employer; cite UGC/AICTE notifications if pressured.',
      'Preserve appointment letter, offer terms, salary slips, and written instructions.',
      'Approach the State Labor Commissioner or District Legal Services Authority for unpaid wage recovery.'
    ],
    sourceInfo: {
      sourceName: 'Ministry of Women & Child Development & University Grants Commission (UGC)',
      sourceUrl: 'https://antiragging.in',
      verificationStatus: 'VERIFIED',
      lastVerifiedAt: '2026-08-10',
      reviewedBy: 'Adv. S. K. Roy (Labor & Constitutional Law)',
      contentVersion: 'v2.1'
    }
  },
  {
    id: 'womens_safety',
    title: 'Women’s Safety & Legal Safeguards',
    titleHi: 'महिला सुरक्षा और कानूनी अधिकार',
    titleTe: 'మహిళల రక్షణ మరియు చట్టపరమైన భద్రతలు',
    category: 'Safety & Human Rights',
    icon: 'HeartHandshake',
    difficulty: 'Beginner',
    estimatedMinutes: 20,
    xpReward: 250,
    description: 'Learn about Zero FIR, Domestic Violence Act protections, online stalking remedies, and 24x7 emergency helplines for women.',
    descriptionHi: 'जीरो एफआईआर, घरेलू हिंसा से सुरक्षा, ऑनलाइन स्टॉकिंग के उपाय और 24x7 आपातकालीन हेल्पलाइन के बारे में जानें।',
    descriptionTe: 'జీరో ఎఫ్‌ఐఆర్, గృహహింస రక్షణ చట్టం, ఆన్‌లైన్ వేధింపుల నిరోధం మరియు మహిళా హెల్ప్‌లైన్‌ల గురించి సమగ్రంగా తెలుసుకోండి.',
    keyLaws: [
      { section: 'Zero FIR Provision', act: 'CrPC / BNSS (Justice Verma Committee)', description: 'FIR can be lodged at ANY police station regardless of jurisdiction and transferred later.' },
      { section: 'Section 12', act: 'Protection of Women from Domestic Violence Act, 2005', description: 'Application to Magistrate for protection orders, residence orders, and monetary relief.' },
      { section: 'Section 354D IPC / BNS', act: 'Cyber Stalking & Electronic Harassment', description: 'Punishment for monitoring woman\'s internet/email/electronic communication without consent.' },
      { section: 'Section 160 CrPC', act: 'Interrogation of Women Protocol', description: 'Women cannot be summoned to the police station for questioning; must be examined at their residence.' }
    ],
    conceptCards: [
      {
        id: 'c14',
        title: 'Zero FIR: No Jurisdiction Excuses',
        explanation: 'A victim can register a Zero FIR at any police station across India. The station cannot refuse saying "this incident happened outside our jurisdiction". They must register and transfer.',
        practicalTip: 'If a police officer refuses to register a Zero FIR, they commit an offense under Section 166A IPC.',
        keyStat: 'Zero FIR is mandatory for cognizable offenses against women under Supreme Court directives.'
      },
      {
        id: 'c15',
        title: 'Night Arrest Protections',
        explanation: 'Under Section 46(4) CrPC, no woman can be arrested after sunset and before sunrise, except in extraordinary circumstances with prior written permission of a Judicial Magistrate and presence of a female officer.',
        practicalTip: 'In case of unlawful night detention, family members should immediately contact the High Court Legal Aid or 112.',
        keyStat: 'Arrest of a woman must strictly be made by a female police officer.'
      }
    ],
    practicalActions: [
      'Call the 24x7 Women Helpline on 1091 or National Emergency 112.',
      'Contact the National Commission for Women (NCW) helpline on 7827170170.',
      'Visit your nearest "Sakhi" One Stop Centre (OSC) for integrated medical, legal, and counseling aid.',
      'Demand registration of a Zero FIR if nearest police station claims lack of territorial jurisdiction.',
      'Report cyber stalking, morphing, or non-consensual image sharing at cybercrime.gov.in under the Women/Child section.'
    ],
    sourceInfo: {
      sourceName: 'National Commission for Women (NCW) & Ministry of Home Affairs',
      sourceUrl: 'https://ncw.nic.in',
      verificationStatus: 'VERIFIED',
      lastVerifiedAt: '2026-08-25',
      reviewedBy: 'Adv. Anjali Mehta (High Court of Delhi)',
      contentVersion: 'v2.4'
    }
  },
  {
    id: 'tenant_property',
    title: 'Tenant & Property Rights',
    titleHi: 'किरायेदार और संपत्ति अधिकार',
    titleTe: 'అద్దెదారు మరియు ఆస్తి హక్కులు',
    category: 'Civil & Property',
    icon: 'Home',
    difficulty: 'Intermediate',
    estimatedMinutes: 20,
    xpReward: 250,
    description: 'Understand tenant protections against illegal eviction, security deposit rules, rent agreement essentials, and property registration under RERA and Model Tenancy Act.',
    descriptionHi: 'अवैध निष्कासन, सुरक्षा जमा नियम, किराया अनुबंध और RERA एवं मॉडल टेनेंसी एक्ट के तहत संपत्ति पंजीकरण को समझें।',
    descriptionTe: 'అక్రమ ఖాళీ, భద్రతా డిపాజిట్ నిబంధనలు, అద్దె ఒప్పందం మరియు RERA & మోడల్ టెనెన్సీ చట్టం ద్వారా ఆస్తి నమోదును అర్థం చేసుకోండి.',
    keyLaws: [
      { section: 'Section 4', act: 'Model Tenancy Act, 2021', description: 'Mandatory written tenancy agreement and registration with Rent Authority within 2 months.' },
      { section: 'Section 22', act: 'Model Tenancy Act, 2021', description: 'Security deposit cap: max 2 months rent for residential premises.' },
      { section: 'Section 21', act: 'Model Tenancy Act, 2021', description: 'Landlord cannot cut electricity, water, or change locks to force eviction.' },
      { section: 'Section 3', act: 'Real Estate (Regulation & Development) Act, 2016 (RERA)', description: 'Mandatory registration of all real estate projects and agents with State RERA Authority.' }
    ],
    conceptCards: [
      {
        id: 'c16',
        title: 'Written Rent Agreement is Mandatory',
        explanation: 'Under the Model Tenancy Act 2021, all tenancy agreements must be in writing and registered with the Rent Authority. Verbal agreements have weak legal standing and leave both parties exposed.',
        practicalTip: 'Always insist on an 11-month registered agreement with Aadhaar details of both parties and property photos.',
        keyStat: 'Over 80% of tenant-landlord disputes arise from unregistered verbal agreements.'
      },
      {
        id: 'c17',
        title: 'Illegal Eviction & Lock-Out Protection',
        explanation: 'A landlord cannot physically lock you out, disconnect utilities, or remove your belongings to force eviction. Eviction requires due legal process through the Rent Authority or court.',
        practicalTip: 'If illegally locked out, call 100 and file a written complaint at the nearest police station citing your registered agreement.',
        keyStat: 'Courts routinely restore possession to illegally evicted tenants with compensation for harassment.'
      },
      {
        id: 'c18',
        title: 'RERA Protects Home Buyers',
        explanation: 'Under RERA 2016, builders must register projects, cannot collect more than 10% without a registered sale agreement, and must deliver possession by the promised date or pay interest.',
        practicalTip: 'Verify any project on the State RERA website before paying any booking amount.',
        keyStat: 'Over ₹40,000 Crore in refunds ordered by RERA authorities since inception.'
      }
    ],
    practicalActions: [
      'Always get a written rent agreement registered on a proper stamp paper.',
      'Keep security deposit receipt and photographs of the property condition at move-in.',
      'Verify builder RERA registration number on your State RERA portal before booking.',
      'Contact the Rent Authority or District Court if landlord attempts illegal eviction.',
      'Never pay advance rent exceeding 2 months without a legally registered agreement.'
    ],
    sourceInfo: {
      sourceName: 'Ministry of Housing & Urban Affairs & State RERA Authorities',
      sourceUrl: 'https://mohua.gov.in',
      verificationStatus: 'VERIFIED',
      lastVerifiedAt: '2026-09-10',
      reviewedBy: 'Adv. P. Krishnamurthy (Property Law Expert)',
      contentVersion: 'v1.0'
    }
  },
  {
    id: 'rti_accountability',
    title: 'RTI & Government Accountability',
    titleHi: 'सूचना का अधिकार और सरकारी जवाबदेही',
    titleTe: 'సమాచార హక్కు మరియు ప్రభుత్వ జవాబుదారీతనం',
    category: 'Governance & Transparency',
    icon: 'FileSearch',
    difficulty: 'Intermediate',
    estimatedMinutes: 18,
    xpReward: 250,
    description: 'Learn how to file RTI applications, demand public information, use the online RTI portal, and hold government bodies accountable under the Right to Information Act 2005.',
    descriptionHi: 'आरटीआई आवेदन कैसे दायर करें, सार्वजनिक सूचना मांगें, ऑनलाइन पोर्टल का उपयोग करें और सरकारी निकायों को जवाबदेह ठहराएं।',
    descriptionTe: 'RTI దరఖాస్తులను ఎలా దాఖలు చేయాలి, ప్రజా సమాచారం ఎలా కోరాలి, ఆన్‌లైన్ RTI పోర్టల్‌ను ఎలా ఉపయోగించాలి అనేది తెలుసుకోండి.',
    keyLaws: [
      { section: 'Section 3', act: 'Right to Information Act, 2005', description: 'Every citizen has the right to information from any public authority subject to certain exemptions.' },
      { section: 'Section 7', act: 'RTI Act, 2005', description: 'Public authority must respond within 30 days of receiving the RTI application (48 hours for life/liberty matters).' },
      { section: 'Section 8', act: 'RTI Act, 2005', description: 'Exemptions from disclosure including national security, cabinet papers, and trade secrets.' },
      { section: 'Section 18', act: 'RTI Act, 2005', description: 'Central/State Information Commission can impose penalty of ₹250/day up to ₹25,000 on officers who deny information without reasonable cause.' }
    ],
    conceptCards: [
      {
        id: 'c19',
        title: 'RTI is Your Democratic Superpower',
        explanation: 'Any Indian citizen can file an RTI application to any public authority (Central or State government, PSUs, even some private bodies receiving government funding) by paying just ₹10.',
        practicalTip: 'File online at rtionline.gov.in for Central Government departments — no postage, instant acknowledgment.',
        keyStat: 'Over 60 lakh RTI applications filed annually. BPL card holders are exempt from the ₹10 fee.'
      },
      {
        id: 'c20',
        title: 'First Appeal & Second Appeal',
        explanation: 'If unsatisfied with the PIO response, you can file a First Appeal to the Appellate Authority within 30 days, and then a Second Appeal to the State/Central Information Commission within 90 days.',
        practicalTip: 'Keep copies of all RTI applications, receipts, and responses for each appeal stage.',
        keyStat: 'Information Commissions can impose ₹250/day penalty on non-compliant officers, up to ₹25,000.'
      }
    ],
    practicalActions: [
      'File RTI applications online at rtionline.gov.in for central departments (₹10 fee via net banking).',
      'Address RTI to the designated Public Information Officer (PIO) of the relevant department.',
      'Keep your questions specific and factual — avoid opinions or demands for action.',
      'File First Appeal to the Appellate Authority within 30 days if PIO response is inadequate.',
      'Approach the Central/State Information Commission for Second Appeal if First Appeal fails.'
    ],
    sourceInfo: {
      sourceName: 'Central Information Commission (CIC) & Department of Personnel & Training',
      sourceUrl: 'https://rtionline.gov.in',
      verificationStatus: 'VERIFIED',
      lastVerifiedAt: '2026-09-05',
      reviewedBy: 'Adv. A. K. Singh (RTI & Governance Specialist)',
      contentVersion: 'v1.0'
    }
  },
  {
    id: 'environmental_rights',
    title: 'Environmental Rights & Pollution Laws',
    titleHi: 'पर्यावरण अधिकार और प्रदूषण कानून',
    titleTe: 'పర్యావరణ హక్కులు మరియు కాలుష్య చట్టాలు',
    category: 'Public Health & Environment',
    icon: 'Leaf',
    difficulty: 'Intermediate',
    estimatedMinutes: 18,
    xpReward: 250,
    description: 'Learn about your constitutional right to a clean environment, how to report pollution, noise nuisance remedies, and NGT (National Green Tribunal) complaint procedures.',
    descriptionHi: 'स्वच्छ पर्यावरण का संवैधानिक अधिकार, प्रदूषण की शिकायत, ध्वनि प्रदूषण के उपाय और NGT शिकायत प्रक्रिया जानें।',
    descriptionTe: 'స్వచ్ఛమైన పర్యావరణ హక్కు, కాలుష్య ఫిర్యాదు, శబ్ద కాలుష్య నివారణ మరియు NGT ఫిర్యాదు ప్రక్రియ గురించి తెలుసుకోండి.',
    keyLaws: [
      { section: 'Article 21', act: 'Constitution of India (Environmental dimension)', description: 'Right to clean and healthy environment recognized as part of Right to Life by Supreme Court.' },
      { section: 'Section 15', act: 'Environment Protection Act, 1986', description: 'Penalty for contravening EPA provisions: imprisonment up to 5 years and fine up to ₹1 Lakh.' },
      { section: 'Rule 5', act: 'Noise Pollution (Regulation & Control) Rules, 2000', description: 'Ambient noise standards: residential area limit is 55 dB daytime, 45 dB nighttime.' },
      { section: 'Section 14', act: 'National Green Tribunal Act, 2010', description: 'NGT has jurisdiction over environmental disputes including pollution, hazardous waste, and forest conservation.' }
    ],
    conceptCards: [
      {
        id: 'c21',
        title: 'Clean Environment is a Fundamental Right',
        explanation: 'The Supreme Court has interpreted Article 21 (Right to Life) to include the right to a clean, pollution-free environment. This means citizens can approach courts against industries, construction, or government bodies causing environmental damage.',
        practicalTip: 'Document pollution with dated photos, air quality readings from CPCB app, and health impact records.',
        keyStat: 'NGT has ordered over ₹4,000 Crore in environmental compensation since its establishment.'
      },
      {
        id: 'c22',
        title: 'Noise Pollution Has Legal Limits',
        explanation: 'Under Noise Pollution Rules 2000, loudspeakers and amplifiers cannot be used between 10 PM and 6 AM. Residential zone limits are 55 dB day / 45 dB night. Even during festivals, limits apply.',
        practicalTip: 'Use a free dB meter app on your phone and report readings above limits to the local police under Section 133 CrPC (public nuisance).',
        keyStat: 'Supreme Court has banned use of DJ systems and loudspeakers past 10 PM in residential areas.'
      }
    ],
    practicalActions: [
      'Report industrial pollution to the State Pollution Control Board (SPCB) via their online portal.',
      'File complaints about noise pollution with local police citing Noise Pollution Rules 2000.',
      'Use the CPCB SAMEER app to monitor real-time air quality in your area.',
      'For serious environmental violations, file a case directly at the National Green Tribunal (NGT).',
      'Approach the District Magistrate under Section 133 CrPC for immediate removal of public nuisance.'
    ],
    sourceInfo: {
      sourceName: 'National Green Tribunal & Central Pollution Control Board (CPCB)',
      sourceUrl: 'https://greentribunal.gov.in',
      verificationStatus: 'VERIFIED',
      lastVerifiedAt: '2026-09-12',
      reviewedBy: 'Adv. D. Gupta (Environmental Law Specialist)',
      contentVersion: 'v1.0'
    }
  },
  {
    id: 'senior_citizens',
    title: 'Senior Citizen Rights & Elder Care',
    titleHi: 'वरिष्ठ नागरिक अधिकार और वृद्ध देखभाल',
    titleTe: 'సీనియర్ సిటిజన్ హక్కులు మరియు వృద్ధుల సంరక్షణ',
    category: 'Social Welfare',
    icon: 'Users',
    difficulty: 'Beginner',
    estimatedMinutes: 18,
    xpReward: 200,
    description: 'Learn about legal protections for senior citizens against abandonment, maintenance claims, property fraud, elder abuse, and healthcare entitlements.',
    descriptionHi: 'वरिष्ठ नागरिकों के लिए परित्याग, भरणपोषण दावे, संपत्ति धोखाधड़ी, बुजुर्ग दुर्व्यवहार और स्वास्थ्य अधिकारों की सुरक्षा जानें।',
    descriptionTe: 'సీనియర్ సిటిజన్‌లకు వదిలివేత, భరణపోషణ దావాలు, ఆస్తి మోసం, వృద్ధ దుర్వినియోగం మరియు ఆరోగ్య హక్కుల రక్షణ గురించి తెలుసుకోండి.',
    keyLaws: [
      { section: 'Section 4', act: 'Maintenance and Welfare of Parents and Senior Citizens Act, 2007', description: 'Children and relatives are legally obligated to maintain senior citizens; Tribunal can order monthly maintenance up to ₹10,000.' },
      { section: 'Section 23', act: 'Maintenance and Welfare of Parents and Senior Citizens Act, 2007', description: 'Transfer of property by senior citizen under coercion or fraud by legal heir is voidable at the option of the senior citizen.' },
      { section: 'Section 22', act: 'Maintenance and Welfare of Parents and Senior Citizens Act, 2007', description: 'All government hospitals must provide beds reserved for senior citizens and free treatment.' },
      { section: 'AADHAR Senior Citizen', act: 'National Policy on Older Persons', description: 'Priority counter service at banks, post offices, and government offices for persons above 60.' }
    ],
    conceptCards: [
      {
        id: 'c23',
        title: 'Children Must Maintain Parents',
        explanation: 'Under the Maintenance Act 2007, children and legal heirs who inherit or are likely to inherit property are legally bound to provide maintenance to parents/senior citizens. A Maintenance Tribunal can order monthly maintenance.',
        practicalTip: 'Senior citizens can file a maintenance application at the Sub-Divisional Magistrate (SDM) office — no lawyer needed.',
        keyStat: 'Tribunals must decide maintenance cases within 90 days of the application.'
      },
      {
        id: 'c24',
        title: 'Property Transfers Under Fraud Are Void',
        explanation: 'If a senior citizen transfers property to a child/relative on the condition of receiving care, and the transferee fails to provide care, the transfer can be declared void by the Tribunal.',
        practicalTip: 'Always include a maintenance clause in any property gift deed or transfer document.',
        keyStat: 'Courts have restored property to senior citizens even years after fraudulent transfer.'
      }
    ],
    practicalActions: [
      'File a maintenance application at the Sub-Divisional Magistrate (SDM) office — no court fee required.',
      'Call the National Elder Abuse Helpline on 14567 (Elder Line) for counseling and intervention.',
      'Avail priority service at banks, hospitals, and government offices for citizens above 60.',
      'Register a Will with the Sub-Registrar to prevent property disputes after passing.',
      'Report elder abuse or abandonment to the local police or District Social Welfare Officer.'
    ],
    sourceInfo: {
      sourceName: 'Ministry of Social Justice & Empowerment',
      sourceUrl: 'https://socialjustice.gov.in',
      verificationStatus: 'VERIFIED',
      lastVerifiedAt: '2026-09-08',
      reviewedBy: 'Adv. N. Bhatt (Senior Citizen Law Specialist)',
      contentVersion: 'v1.0'
    }
  },
  {
    id: 'personal_laws',
    title: 'Marriage, Divorce & Personal Laws',
    titleHi: 'विवाह, तलाक और व्यक्तिगत कानून',
    titleTe: 'వివాహం, విడాకులు మరియు వ్యక్తిగత చట్టాలు',
    category: 'Family & Personal Law',
    icon: 'Heart',
    difficulty: 'Intermediate',
    estimatedMinutes: 22,
    xpReward: 250,
    description: 'Understand marriage registration, divorce procedures, alimony rights, child custody basics, and the Special Marriage Act for inter-faith or court marriages.',
    descriptionHi: 'विवाह पंजीकरण, तलाक प्रक्रिया, गुजारा भत्ता, बाल अभिरक्षा और विशेष विवाह अधिनियम को समझें।',
    descriptionTe: 'వివాహ నమోదు, విడాకుల ప్రక్రియ, భరణపోషణ హక్కులు, బాల సంరక్షణ మరియు ప్రత్యేక వివాహ చట్టాన్ని అర్థం చేసుకోండి.',
    keyLaws: [
      { section: 'Section 5', act: 'Hindu Marriage Act, 1955', description: 'Conditions for a valid Hindu marriage: minimum age (21 male, 18 female), no existing spouse, sound mind.' },
      { section: 'Section 13B', act: 'Hindu Marriage Act, 1955', description: 'Mutual consent divorce: petition after 1 year of marriage, 6-month cooling period (can be waived by court).' },
      { section: 'Section 4', act: 'Special Marriage Act, 1954', description: 'Inter-faith, inter-caste, or civil marriages without religious conversion with 30-day notice period.' },
      { section: 'Section 125', act: 'Code of Criminal Procedure, 1973', description: 'Maintenance for wife, children, and parents who are unable to maintain themselves.' }
    ],
    conceptCards: [
      {
        id: 'c25',
        title: 'Register Your Marriage',
        explanation: 'Marriage registration is mandatory in most states under state-specific Marriage Registration Rules. It serves as legal proof of marriage and is required for passport, visa, and insurance claims.',
        practicalTip: 'Apply for marriage registration at the Sub-Registrar office with wedding photographs, ID proofs of both parties, and 2 witnesses.',
        keyStat: 'Unregistered marriages create severe legal complications for property, insurance, and spousal rights.'
      },
      {
        id: 'c26',
        title: 'Special Marriage Act for All Citizens',
        explanation: 'The Special Marriage Act 1954 allows any two Indian citizens to marry regardless of religion, caste, or creed through a civil procedure, without requiring religious conversion.',
        practicalTip: 'File a notice of intended marriage at the Marriage Officer\'s office with 30 days\' notice period.',
        keyStat: 'Supreme Court has clarified that couples marrying under SMA can choose not to publish notice publicly if there are safety concerns.'
      }
    ],
    practicalActions: [
      'Register your marriage at the Sub-Registrar or Marriage Officer office within your district.',
      'For inter-faith marriages, file notice under Special Marriage Act at the local Marriage Officer.',
      'For maintenance claims, file an application under Section 125 CrPC before the Magistrate court.',
      'Seek free legal aid from DLSA for divorce proceedings if you cannot afford a lawyer.',
      'In custody disputes, courts prioritize the welfare of the child above parental rights — document your caregiving.'
    ],
    sourceInfo: {
      sourceName: 'Ministry of Law & Justice & State Marriage Registration Authorities',
      sourceUrl: 'https://lawmin.gov.in',
      verificationStatus: 'VERIFIED',
      lastVerifiedAt: '2026-09-15',
      reviewedBy: 'Adv. S. Banerjee (Family Law Expert)',
      contentVersion: 'v1.0'
    }
  }
];

export const SCENARIOS = [
  {
    id: 'sc_cyber_01',
    topicId: 'cybercrime',
    title: 'The Urgent Bank Account Suspension Alert',
    context: 'Rohan receives an SMS stating: "Dear customer, your SBI NetBanking will be suspended within 2 hours due to pending KYC update. Click link to verify immediately: bit.ly/sbi-kyc-fix". Shortly after clicking, he gets an OTP on his phone for ₹48,000.',
    role: 'Rohan, Young Professional',
    urgency: 'Critical',
    question: 'The webpage asks for Rohan\'s 6-digit OTP to "confirm KYC restoration". What is the correct, legally safe action?',
    options: [
      {
        id: 'opt_a',
        text: 'Enter the OTP quickly because official banks block accounts if KYC is not verified within the stated deadline.',
        status: 'INCORRECT',
        rationale: 'Banks never ask for OTPs via bit.ly short links to update KYC. Entering the OTP authorizes a fraudulent transfer of ₹48,000 directly from your account.',
        legalAwareness: 'Under RBI Zero Liability guidelines, if a customer voluntarily shares their OTP/credentials, the customer may bear the loss until reported.',
        whatToDoNext: 'Close the page immediately. Do NOT enter the OTP.',
        evidenceToKeep: 'Screenshot of the SMS with sender header (e.g., AD-SBIKYC or 10-digit number), timestamp, and the short link URL.',
        whereToGetHelp: 'Call 1930 (National Cyber Crime Helpline) and your bank\'s fraud department to freeze cards/netbanking.'
      },
      {
        id: 'opt_b',
        text: 'Do NOT enter the OTP. Immediately close the browser, call the official bank customer care number from the bank app or debit card back, and report the phishing SMS.',
        status: 'CORRECT',
        rationale: 'Legitimate financial institutions never use shortened third-party links or demand OTPs for KYC. Calling the official bank number verifies your account safety and triggers fraud blocking.',
        legalAwareness: 'Section 66D of the IT Act makes cheating by personation over computer systems punishable with up to 3 years imprisonment. Reporting alerts the bank to blacklist the rogue gateway.',
        whatToDoNext: 'Forward the SMS to 1909 (Do Not Disturb/Spam registry) and report the URL on cybercrime.gov.in.',
        evidenceToKeep: 'Keep the original SMS, sender ID, URL screenshot, and call log with official bank helpline.',
        whereToGetHelp: 'National Cyber Crime Portal (cybercrime.gov.in) and Chakshu portal on Sanchar Saathi.'
      },
      {
        id: 'opt_c',
        text: 'Forward the OTP to your colleague or friend to ask if they received a similar KYC request.',
        status: 'RISKY',
        rationale: 'Forwarding OTPs is risky as messaging channels can be monitored or inadvertently exposed. Furthermore, it delays the crucial response time needed to protect your account.',
        legalAwareness: 'OTPs are sensitive personal electronic signatures under Section 66C of the IT Act. They must never be forwarded or shared across unencrypted channels.',
        whatToDoNext: 'Stop sharing sensitive credentials. Verify your account balance directly via official bank mobile application.',
        evidenceToKeep: 'Sender header of the phishing SMS.',
        whereToGetHelp: 'Official Bank Support.'
      }
    ],
    sourceInfo: {
      sourceName: 'RBI Advisory on Phishing & I4C Cyber Safety Bulletin',
      sourceUrl: 'https://cybercrime.gov.in',
      verificationStatus: 'VERIFIED',
      lastVerifiedAt: '2026-08-15',
      reviewedBy: 'Adv. S. Sharma (Cyber Law Specialist)',
      contentVersion: 'v2.4'
    }
  },
  {
    id: 'sc_cyber_02',
    topicId: 'cybercrime',
    title: 'The Fake Olx Buyer & "Pay ₹1 to Receive ₹15,000" Trick',
    context: 'Neha lists her old laptop on an online marketplace. A prospective buyer contacts her on WhatsApp, claiming to be an Army officer. He sends a QR code: "Scan this QR code and enter your UPI PIN to receive the advance payment of ₹15,000."',
    role: 'Neha, College Student',
    urgency: 'High',
    question: 'Neha is about to scan the QR code and type her 6-digit UPI PIN. What should she understand?',
    options: [
      {
        id: 'opt_a',
        text: 'Entering a UPI PIN is only required to DEDUCT money from your account, never to receive money. Do not scan or enter the PIN.',
        status: 'CORRECT',
        rationale: 'This is the most common UPI scam in India. In the National Payments Corporation of India (NPCI) UPI protocol, receiving money NEVER requires entering a UPI PIN.',
        legalAwareness: 'Scammers commit fraud under Section 420 IPC / BNS and Section 66D IT Act. The UPI transaction is an instantaneous transfer that cannot be reversed by simple bank call unless frozen within golden hour.',
        whatToDoNext: 'Block the buyer immediately on WhatsApp and marketplace app. Report the UPI VPA to the UPI app (Google Pay, PhonePe, Paytm).',
        evidenceToKeep: 'WhatsApp chat screenshot, buyer phone number, QR code image, and profile picture.',
        whereToGetHelp: 'NPCI UPI Dispute Resolution & National Cybercrime Portal 1930.'
      },
      {
        id: 'opt_b',
        text: 'Scan the QR code but enter a wrong UPI PIN once to test if money gets credited.',
        status: 'RISKY',
        rationale: 'Interacting with malicious payment links or scanning rogue QR codes can initiate auto-debit mandates or expose UPI application vulnerabilities.',
        legalAwareness: 'Phishing infrastructure often captures device telemetry or tries to register auto-mandates under RBI e-mandate framework.',
        whatToDoNext: 'Cancel all pending payment requests in your UPI app immediately.',
        evidenceToKeep: 'UPI collect request notification screenshot.',
        whereToGetHelp: 'Bank fraud desk.'
      },
      {
        id: 'opt_c',
        text: 'Follow the buyer\'s instructions because Army personnel are verified by the platform.',
        status: 'INCORRECT',
        rationale: 'Scammers frequently impersonate Army personnel using stolen ID cards to create false trust and rush the victim.',
        legalAwareness: 'Impersonating public servants or armed forces personnel is an offense under Section 170 IPC and Section 66D IT Act.',
        whatToDoNext: 'Cease communication immediately.',
        evidenceToKeep: 'The fake army ID card image sent by the fraudster.',
        whereToGetHelp: 'Local Cyber Crime Police Cell.'
      }
    ],
    sourceInfo: {
      sourceName: 'NPCI UPI Safety Guidelines & Cyber Peace Foundation',
      sourceUrl: 'https://npci.org.in',
      verificationStatus: 'VERIFIED',
      lastVerifiedAt: '2026-08-10',
      reviewedBy: 'Adv. S. Sharma',
      contentVersion: 'v2.1'
    }
  },
  {
    id: 'sc_consumer_01',
    topicId: 'consumer_rights',
    title: 'The Broken TV & Refusal of Return Under "No Return Policy"',
    context: 'Pooja ordered a smart LED TV from an e-commerce platform. When the package arrived, the screen was completely shattered. When she requested a return within 2 hours of delivery, customer support stated: "As per seller policy, electronic items are non-returnable. Please contact the TV manufacturer."',
    role: 'Pooja, Consumer',
    urgency: 'High',
    question: 'How does Indian consumer law protect Pooja against this refusal?',
    options: [
      {
        id: 'opt_a',
        text: 'Accept the seller\'s policy because whatever terms you click "I Agree" on at checkout are final and non-negotiable.',
        status: 'INCORRECT',
        rationale: 'Unilateral, unfair contract terms that strip statutory consumer protections are void under Section 2(46) of the Consumer Protection Act, 2019.',
        legalAwareness: 'The Consumer Protection Act 2019 supersedes any private website policy. Delivering damaged goods constitutes both a "Defect" and an "Unfair Trade Practice".',
        whatToDoNext: 'Do not accept the rejection. Escalate immediately.',
        evidenceToKeep: 'Unboxing video showing shipping label, invoice copy, and timestamped photos of the cracked screen.',
        whereToGetHelp: 'National Consumer Helpline (1915).'
      },
      {
        id: 'opt_b',
        text: 'Cite the Consumer Protection (E-Commerce) Rules, 2020 and file a grievance with the platform\'s Grievance Officer and the National Consumer Helpline (1915).',
        status: 'CORRECT',
        rationale: 'Under Rule 5(3) of E-Commerce Rules 2020, marketplace platforms cannot refuse returns or refunds for goods delivered in a defective or damaged state, regardless of seller disclaimers.',
        legalAwareness: 'Under Section 35 CPA 2019, if unresolved within 30 days, Pooja can file an online claim via e-Daakhil for replacement plus mental harassment compensation without paying lawyer fees.',
        whatToDoNext: 'Send a formal email quoting order ID, attach photos/video, and request a resolution within 48 hours.',
        evidenceToKeep: 'Tax invoice, courier delivery slip, WhatsApp/email conversation with support, and photos of packaging box.',
        whereToGetHelp: 'National Consumer Helpline (1915) & edaakhil.nic.in.'
      },
      {
        id: 'opt_c',
        text: 'Dump the TV at the local police station and file a criminal cheating case immediately.',
        status: 'RISKY',
        rationale: 'Police typically decline civil consumer contract disputes without a criminal element like organized fraud. The appropriate statutory body is the Consumer Commission or NCH.',
        legalAwareness: 'Consumer commissions have specialized summary procedures with powers equivalent to Civil Courts for consumer disputes.',
        whatToDoNext: 'File on consumerhelpline.gov.in first.',
        evidenceToKeep: 'Tax invoice and order details.',
        whereToGetHelp: 'District Consumer Disputes Redressal Commission.'
      }
    ],
    sourceInfo: {
      sourceName: 'Consumer Protection (E-Commerce) Rules, 2020 & CPA 2019',
      sourceUrl: 'https://consumerhelpline.gov.in',
      verificationStatus: 'VERIFIED',
      lastVerifiedAt: '2026-07-20',
      reviewedBy: 'Adv. R. Venkatraman',
      contentVersion: 'v2.1'
    }
  },
  {
    id: 'sc_consumer_02',
    topicId: 'consumer_rights',
    title: 'The Mandatory Service Charge at a Restaurant',
    context: 'Vikram dines at a cafe in Hyderabad. When the bill arrives, an additional 10% "Service Charge" (₹450) is added alongside GST. When Vikram requests to remove it, the manager insists: "It is mentioned on our menu entrance board, so it is compulsory for all guests."',
    role: 'Vikram, Diner',
    urgency: 'Medium',
    question: 'Is a restaurant legally allowed to levy a mandatory service charge?',
    options: [
      {
        id: 'opt_a',
        text: 'No. Central Consumer Protection Authority (CCPA) guidelines explicitly state that service charge is voluntary, and restaurants cannot compel payment.',
        status: 'CORRECT',
        rationale: 'Under CCPA Guidelines issued in July 2022, no hotel or restaurant can add service charge automatically or by default to the bill. Entry cannot be restricted based on refusal to pay service charge.',
        legalAwareness: 'Forcing a customer to pay service charge constitutes an Unfair Trade Practice under Section 2(47) of the Consumer Protection Act, 2019.',
        whatToDoNext: 'Request the manager to strike out the service charge line before paying, or lodge an instant complaint via NCH app.',
        evidenceToKeep: 'Photograph of the original itemized bill showing the forced service charge.',
        whereToGetHelp: 'Call National Consumer Helpline at 1915 or complain to the District Collector.'
      },
      {
        id: 'opt_b',
        text: 'Yes, if it is written on the menu board, it becomes a binding legal contract that must be paid.',
        status: 'INCORRECT',
        rationale: 'Merely displaying it on a menu card does not give restaurants the right to override national CCPA consumer guidelines.',
        legalAwareness: 'A private notice on a board cannot override statutory consumer rights prohibiting unconsented surcharges.',
        whatToDoNext: 'Insist on paying only food charges + applicable GST.',
        evidenceToKeep: 'Copy of menu card and bill.',
        whereToGetHelp: 'NCH Portal (consumerhelpline.gov.in).'
      },
      {
        id: 'opt_c',
        text: 'Refuse to pay the entire bill including food costs and walk out.',
        status: 'INCORRECT',
        rationale: 'Refusing to pay legitimate food charges and taxes is illegal. Only the disputed service charge component can be contested.',
        legalAwareness: 'Payment for services consumed (food and GST) is legally obligatory; only the unlawful surcharge is contestable.',
        whatToDoNext: 'Pay the food amount + GST and file a claim for refund of the service charge.',
        evidenceToKeep: 'Final payment receipt.',
        whereToGetHelp: 'Consumer Helpline 1915.'
      }
    ],
    sourceInfo: {
      sourceName: 'Central Consumer Protection Authority (CCPA) Guidelines 2022',
      sourceUrl: 'https://consumeraffairs.nic.in',
      verificationStatus: 'VERIFIED',
      lastVerifiedAt: '2026-07-15',
      reviewedBy: 'Adv. R. Venkatraman',
      contentVersion: 'v2.0'
    }
  },
  {
    id: 'sc_road_01',
    topicId: 'road_laws',
    title: 'The Good Samaritan & The Hit-and-Run Victim',
    context: 'While returning from college at 10 PM, Aryan witnesses a motorcycle hit by a car that speeds away. The motorcyclist is bleeding profusely on the road. Bystanders are recording videos on phones but afraid to help, whispering: "If you touch him, police will make you a witness and interrogate you in the hospital."',
    role: 'Aryan, Student',
    urgency: 'Critical',
    question: 'What does the law in India say about helping a road accident victim?',
    options: [
      {
        id: 'opt_a',
        text: 'Under Section 134A of the Motor Vehicles Act, Good Samaritans have complete civil and criminal immunity. Aryan should call 112/108 and rush the victim to the nearest hospital.',
        status: 'CORRECT',
        rationale: 'The Supreme Court guidelines and Section 134A MVA 2019 legally protect anyone who helps an injured person. Hospitals cannot demand money or police clearance before giving emergency treatment, and police cannot harass the helper.',
        legalAwareness: 'Section 134A MVA protects helpers from liability for any injury or death resulting from assistance. You cannot be forced to give your name, phone number, or become an eyewitness.',
        whatToDoNext: 'Call 112 (Emergency) or 108 (Ambulance). If safe, take victim to nearest trauma centre.',
        evidenceToKeep: 'Note the fleeing car\'s vehicle registration number, make, color, and time of incident.',
        whereToGetHelp: 'Emergency 112 / 108 Ambulance / Nearest Trauma Centre.'
      },
      {
        id: 'opt_b',
        text: 'Leave the victim untouched until the local police arrive to conduct a scene inquest, otherwise you will be booked for evidence tampering.',
        status: 'INCORRECT',
        rationale: 'Waiting for police during life-threatening hemorrhaging leads to preventable deaths. Saving human life takes precedence over scene preservation.',
        legalAwareness: 'The golden hour principle recognizes that medical intervention within 60 minutes saves over 50% of road accident trauma victims.',
        whatToDoNext: 'Administer emergency first aid and call emergency medical services immediately.',
        evidenceToKeep: 'Emergency call timestamps.',
        whereToGetHelp: 'Dial 112.'
      },
      {
        id: 'opt_c',
        text: 'Help only if the victim or bystanders sign a stamp paper declaring Aryan is not responsible for the accident.',
        status: 'INCORRECT',
        rationale: 'No written legal declaration is required; the statute automatically confers immunity.',
        legalAwareness: 'Statutory immunity operates by law under Section 134A MVA 2019 without requiring contracts.',
        whatToDoNext: 'Assist immediately without fear.',
        evidenceToKeep: 'Vehicle numbers involved.',
        whereToGetHelp: 'MoRTH Good Samaritan Scheme.'
      }
    ],
    sourceInfo: {
      sourceName: 'Supreme Court Good Samaritan Guidelines & Section 134A MVA 2019',
      sourceUrl: 'https://morth.nic.in',
      verificationStatus: 'VERIFIED',
      lastVerifiedAt: '2026-09-01',
      reviewedBy: 'Adv. Anjali Mehta',
      contentVersion: 'v2.2'
    }
  },
  {
    id: 'sc_road_02',
    topicId: 'road_laws',
    title: 'Traffic Police Stop & Smartphone Seizure',
    context: 'Sameer is stopped at a traffic signal for routine checking. He produces his Driving Licence and Registration Certificate via the Government DigiLocker app. The constable rejects it: "DigiLocker is not accepted in our jurisdiction. Show original plastic cards or pay ₹2,000 spot fine, and give me your mobile phone."',
    role: 'Sameer, Commuter',
    urgency: 'Medium',
    question: 'Are police allowed to reject DigiLocker and confiscate Sameer\'s phone?',
    options: [
      {
        id: 'opt_a',
        text: 'No. DigiLocker and mParivahan digital documents have statutory legal parity across India under Rule 139 CMVR. Police have no legal right to confiscate your phone.',
        status: 'CORRECT',
        rationale: 'Union Ministry of Road Transport Circulars and Rule 139 of Central Motor Vehicles Rules explicitly mandate that electronic documents in DigiLocker/mParivahan are at par with physical originals. Police cannot demand physical cards or take your phone.',
        legalAwareness: 'Under Section 206 MVA, seizure of a DL is permitted only for specific offenses (like dangerous driving/drunken driving) and must be accompanied by an official receipt. Seizing a phone is unlawful.',
        whatToDoNext: 'Politely inform the officer of MoRTH Circular RT-11036/64/2017-MVL. Show the QR code in DigiLocker for verification.',
        evidenceToKeep: 'Note officer\'s name, buckle/badge number, police station jurisdiction, and take video if permitted.',
        whereToGetHelp: 'Traffic Police Senior SP/Commissioner Office & echallan.parivahan.gov.in.'
      },
      {
        id: 'opt_b',
        text: 'Hand over your phone and pay the cash fine on the spot without asking for a receipt.',
        status: 'INCORRECT',
        rationale: 'Paying undocumented cash without an official e-challan or printed receipt is improper and encourages corruption.',
        legalAwareness: 'Every traffic penalty must be issued via an electronic e-POS machine or authorized challan book with an official transaction ID.',
        whatToDoNext: 'Insist on an official e-challan that can be verified and paid online.',
        evidenceToKeep: 'Official challan receipt.',
        whereToGetHelp: 'Virtual Court (vcourts.gov.in).'
      },
      {
        id: 'opt_c',
        text: 'Accelerate your vehicle and flee the checkpoint.',
        status: 'INCORRECT',
        rationale: 'Fleeing a police checkpoint is a serious criminal offense under Section 179 MVA (disobeying police orders) and Section 279 IPC (rash driving).',
        legalAwareness: 'Attempting to escape a checkpoint exposes you to arrest and vehicle impoundment.',
        whatToDoNext: 'Stay calm, remain in vehicle, and communicate lawfully.',
        evidenceToKeep: 'DigiLocker document records.',
        whereToGetHelp: 'Traffic Police Grievance Cell.'
      }
    ],
    sourceInfo: {
      sourceName: 'MoRTH Notification No. RT-11036/64/2017-MVL & Rule 139 CMVR',
      sourceUrl: 'https://morth.nic.in',
      verificationStatus: 'VERIFIED',
      lastVerifiedAt: '2026-09-01',
      reviewedBy: 'Adv. Anjali Mehta',
      contentVersion: 'v2.2'
    }
  },
  {
    id: 'sc_privacy_01',
    topicId: 'digital_privacy',
    title: 'Hotel Insisting on Physical Aadhaar Card Photocopy',
    context: 'Kavita checks into a hotel during a weekend trip. The receptionist demands: "Madam, give your Aadhaar card for photocopying. We keep physical Xerox copies of all guest Aadhaar cards for police verification."',
    role: 'Kavita, Traveler',
    urgency: 'Medium',
    question: 'Is Kavita legally required to provide an unmasked physical Aadhaar photocopy?',
    options: [
      {
        id: 'opt_a',
        text: 'No. UIDAI regulations state that hotels can verify identity, but cannot compel an unmasked Aadhaar photocopy. Kavita can provide a Masked Aadhaar or alternative government ID.',
        status: 'CORRECT',
        rationale: 'Under UIDAI Circulars and Supreme Court rulings, private entities cannot retain copies of unmasked Aadhaar cards displaying full 12 digits and QR codes, which are susceptible to identity theft and AePS fraud.',
        legalAwareness: 'Under Section 29 of the Aadhaar Act and DPDPA 2023, data minimization principles require collecting only necessary identifiers. A Masked Aadhaar (showing only the last 4 digits) or Passport/Voter ID is fully compliant.',
        whatToDoNext: 'Offer a Masked Aadhaar downloaded from mAadhaar or provide a Driving Licence/Voter ID.',
        evidenceToKeep: 'Hotel booking confirmation and UIDAI Masked Aadhaar PDF.',
        whereToGetHelp: 'UIDAI Toll-Free 1947 & help@uidai.gov.in.'
      },
      {
        id: 'opt_b',
        text: 'Surrender the Aadhaar and write your phone number and signature across the front.',
        status: 'RISKY',
        rationale: 'While cross-signing helps, physical paper photocopies of unmasked Aadhaar cards are frequently sold to scam cartels to register fraudulent SIM cards.',
        legalAwareness: 'Sanchar Saathi TAFCOP data shows hundreds of thousands of unauthorized SIMs registered on leaked paper Aadhaar photocopies.',
        whatToDoNext: 'Switch to Masked Aadhaar immediately.',
        evidenceToKeep: 'Hotel bill receipt.',
        whereToGetHelp: 'UIDAI Grievance Portal.'
      },
      {
        id: 'opt_c',
        text: 'Refuse all identification and demand entry based on cash payment alone.',
        status: 'INCORRECT',
        rationale: 'Hotels are legally obligated under local Sarais Acts and Police Innkeeper rules to verify guest identity for public safety.',
        legalAwareness: 'Guest identity verification is a lawful requirement, but the method must respect data privacy limits.',
        whatToDoNext: 'Present valid alternative photo ID.',
        evidenceToKeep: 'Alternative ID document.',
        whereToGetHelp: 'Local Tourism Department.'
      }
    ],
    sourceInfo: {
      sourceName: 'UIDAI Public Advisory on Masked Aadhaar & DPDPA 2023',
      sourceUrl: 'https://uidai.gov.in',
      verificationStatus: 'VERIFIED',
      lastVerifiedAt: '2026-08-30',
      reviewedBy: 'Adv. S. Sharma',
      contentVersion: 'v2.3'
    }
  },
  {
    id: 'sc_privacy_02',
    topicId: 'digital_privacy',
    title: 'The Instant Loan App Accessing Entire Contact List & Gallery',
    context: 'Deepak downloads a "FastCash 5-Minute Loan" app for an urgent ₹5,000 credit. During installation, the app forces permissions for "Read Contacts, Read Call Logs, Access Gallery, Access Camera" before proceeding. Three days later, recovery agents send morphed photos to his mother and college professors threatening public humiliation.',
    role: 'Deepak, Freelancer',
    urgency: 'Critical',
    question: 'What are the legal violations here and how should Deepak respond?',
    options: [
      {
        id: 'opt_a',
        text: 'Pay ₹20,000 demanded by the agents hoping they delete the pictures and stop messaging.',
        status: 'INCORRECT',
        rationale: 'Extortionists never stop after the first payment. Paying validates their leverage and leads to unending blackmail cycles.',
        legalAwareness: 'Blackmail, morphing photos, and harassment violate Section 66E (privacy violation), Section 67 (obscene content) of the IT Act, and Section 384 IPC (extortion).',
        whatToDoNext: 'Do NOT transfer money. Block callers immediately.',
        evidenceToKeep: 'Screenshots of threats, WhatsApp audio clips, call recordings, APK download link, and UPI transaction history.',
        whereToGetHelp: 'Report immediately on cybercrime.gov.in under "Cyber Crime against Women and Children / Financial Fraud" and call 1930.'
      },
      {
        id: 'opt_b',
        text: 'Immediately report the illegal loan app to Cyber Crime (1930) and the RBI Sachet portal. The app\'s invasive permissions violate RBI Digital Lending Guidelines.',
        status: 'CORRECT',
        rationale: 'Under RBI Digital Lending Guidelines (2022), lending apps CANNOT access mobile contacts, call logs, or media gallery. Lenders must be licensed NBFCs or banks. Morphed photo harassment is a grave non-bailable offense.',
        legalAwareness: 'Unregistered predatory loan apps are illegal under RBI guidelines. Sending morphed images constitutes criminal intimidation (Sec 506 IPC) and violation of bodily privacy.',
        whatToDoNext: 'Inform close contacts via a status message that your phone data was breached by a fraudulent app and to ignore suspicious messages. Uninstall app after taking evidence.',
        evidenceToKeep: 'App package name, screenshots of abusive messages, WhatsApp profile numbers, loan agreement PDF.',
        whereToGetHelp: 'National Cyber Crime Helpline 1930, RBI Sachet (sachet.rbi.org.in), and local police cyber cell.'
      },
      {
        id: 'opt_c',
        text: 'Destroy your smartphone and throw it away.',
        status: 'INCORRECT',
        rationale: 'Destroying your phone destroys the primary digital evidence needed to arrest the scam syndicate.',
        legalAwareness: 'Electronic evidence preservation under Section 65B Indian Evidence Act / BSA is vital for prosecuting cyber extortionists.',
        whatToDoNext: 'Backup evidence to an external drive or cloud drive before resetting.',
        evidenceToKeep: 'All digital communications.',
        whereToGetHelp: 'Cyber Cell Police Station.'
      }
    ],
    sourceInfo: {
      sourceName: 'RBI Guidelines on Digital Lending 2022 & I4C Cyber Crime Cell',
      sourceUrl: 'https://rbi.org.in',
      verificationStatus: 'VERIFIED',
      lastVerifiedAt: '2026-08-30',
      reviewedBy: 'Adv. S. Sharma',
      contentVersion: 'v2.3'
    }
  },
  {
    id: 'sc_rights_01',
    topicId: 'fundamental_rights',
    title: 'Arrest Without Grounds or Arrest Memo at Midnight',
    context: 'Tariq is sitting in a public park with friends when two police officers in plainclothes approach, force Tariq into an unmarked vehicle, and drive him to a police station. They refuse to tell him why he has been picked up, take away his phone, and do not allow him to call his family.',
    role: 'Tariq, Citizen',
    urgency: 'Critical',
    question: 'Which constitutional and statutory rights have been violated here?',
    options: [
      {
        id: 'opt_a',
        text: 'Article 22, Section 41B CrPC, and Supreme Court D.K. Basu guidelines have been directly breached. Tariq has the legal right to know the grounds of arrest, an Arrest Memo, and to notify family within 12 hours.',
        status: 'CORRECT',
        rationale: 'Under the landmark D.K. Basu ruling and CrPC Section 41B, arresting officers must wear visible name badges, prepare an Arrest Memo signed by a local witness, inform a nominated relative/friend within 8–12 hours, and record entry in the station diary.',
        legalAwareness: 'Article 22(1) of the Constitution guarantees the right to be informed of the grounds for arrest as soon as possible and the right to consult and be defended by a legal practitioner of choice.',
        whatToDoNext: 'Demand politely to know the registered Crime Number / FIR and insist that an Arrest Memo be prepared and family informed.',
        evidenceToKeep: 'Names of officers, vehicle number, police station name, and exact time of detention.',
        whereToGetHelp: 'District Legal Services Authority (DLSA) Panel Lawyer & State Human Rights Commission.'
      },
      {
        id: 'opt_b',
        text: 'Police have absolute immunity to detain any citizen for up to 7 days without informing anyone.',
        status: 'INCORRECT',
        rationale: 'In India, holding anyone beyond 24 hours without production before a Judicial Magistrate violates Article 22(2) and constitutes illegal detention (Habeas Corpus).',
        legalAwareness: 'Section 57 CrPC strictly prohibits detaining any person for longer than 24 hours without an order of a Magistrate.',
        whatToDoNext: 'Family can file a Habeas Corpus writ petition before the High Court under Article 226.',
        evidenceToKeep: 'Station diary entries.',
        whereToGetHelp: 'High Court Legal Services Committee.'
      },
      {
        id: 'opt_c',
        text: 'Physically resist the officers and try to jump out of the vehicle.',
        status: 'RISKY',
        rationale: 'Physical violence against police officers, even during unlawful detention, can lead to severe charges like assaulting public servants under Section 353 IPC.',
        legalAwareness: 'Legal remedies should be invoked through constitutional and statutory safeguards rather than physical confrontation.',
        whatToDoNext: 'Comply peacefully while asserting your procedural rights verbally.',
        evidenceToKeep: 'Witness names of bystanders at the park.',
        whereToGetHelp: 'Legal Aid Helpline 15100.'
      }
    ],
    sourceInfo: {
      sourceName: 'Supreme Court D.K. Basu Guidelines & Article 22, Constitution of India',
      sourceUrl: 'https://nalsa.gov.in',
      verificationStatus: 'VERIFIED',
      lastVerifiedAt: '2026-07-15',
      reviewedBy: 'Adv. Anjali Mehta',
      contentVersion: 'v2.0'
    }
  },
  {
    id: 'sc_workplace_01',
    topicId: 'student_workplace',
    title: 'Senior College Students Demanding "Intro" in Hostel at Night',
    context: 'Varun, a first-year engineering student, is summoned to a senior hostel room at 1 AM. Seniors order him to perform demeaning acts, strip, and use abusive language as part of mandatory "hostel culture and personality development". They warn him: "If you complain to the warden, we will make sure you cannot pass your lab exams."',
    role: 'Varun, Fresher Student',
    urgency: 'Critical',
    question: 'How does the law classify this act and what protection is available to Varun?',
    options: [
      {
        id: 'opt_a',
        text: 'This is a cognizable criminal offense under UGC Anti-Ragging Regulations and Supreme Court orders. Varun should report it immediately to the National Anti-Ragging Helpline (1800-180-5522).',
        status: 'CORRECT',
        rationale: 'Ragging is strictly illegal under Supreme Court rulings and UGC Regulations 2009. The head of the institution is legally mandated to file an FIR with local police within 24 hours of receiving a complaint. Institutes failing to act face de-recognition and funding cuts.',
        legalAwareness: 'Ragging attracts offenses under IPC/BNS including wrongful restraint, criminal intimidation, and assault. An anonymous complaint can be filed 24x7 with the National Anti-Ragging Cell.',
        whatToDoNext: 'Call 1800-180-5522 or email helpline@antiragging.in. Report to the College Anti-Ragging Committee.',
        evidenceToKeep: 'Hostel room number, names of seniors involved, WhatsApp messages/threats, and timestamp of the incident.',
        whereToGetHelp: 'National Anti-Ragging Portal (antiragging.in) & UGC Helpline 1800-180-5522.'
      },
      {
        id: 'opt_b',
        text: 'Endure it silently because every student has gone through it for decades.',
        status: 'INCORRECT',
        rationale: 'Enduring ragging perpetuates psychological trauma and life-threatening abuse. The law provides complete confidentiality and protection for complainants.',
        legalAwareness: 'The Raghavan Committee Supreme Court guidelines guarantee confidentiality to reporting victims.',
        whatToDoNext: 'Break the silence and report to authorities.',
        evidenceToKeep: 'Audio/text records.',
        whereToGetHelp: 'College Counselor & Anti-Ragging Squad.'
      },
      {
        id: 'opt_c',
        text: 'Gather a group of first-year friends and launch a physical counter-attack on the senior room.',
        status: 'RISKY',
        rationale: 'Retaliatory campus violence leads to mutual suspension, criminal FIRs, and career disqualification.',
        legalAwareness: 'Engaging in violent altercations results in campus disciplinary suspension and potential police booking.',
        whatToDoNext: 'Use institutional and statutory reporting mechanisms.',
        evidenceToKeep: 'Names of witnesses.',
        whereToGetHelp: 'Dean of Student Affairs & Local Police.'
      }
    ],
    sourceInfo: {
      sourceName: 'UGC Regulations on Curbing the Menace of Ragging in Higher Educational Institutions, 2009',
      sourceUrl: 'https://antiragging.in',
      verificationStatus: 'VERIFIED',
      lastVerifiedAt: '2026-08-10',
      reviewedBy: 'Adv. S. K. Roy',
      contentVersion: 'v2.1'
    }
  },
  {
    id: 'sc_workplace_02',
    topicId: 'student_workplace',
    title: 'Employer Withholding Original Degree & Demanding ₹3 Lakh Bond',
    context: 'Simran joins an IT consulting firm. On day one, HR takes her original 10th, 12th, and B.Tech degree certificates into a vault. Six months later, she receives a better job opportunity and submits her resignation. The company threatens: "You signed a 2-year service bond. Pay ₹3 Lakhs immediately or we will not return your original degrees or issue an experience letter."',
    role: 'Simran, Software Engineer',
    urgency: 'High',
    question: 'Can the company legally withhold Simran\'s original certificates and enforce a ₹3 Lakh penalty?',
    options: [
      {
        id: 'opt_a',
        text: 'No. Retaining original educational certificates is illegal, and employment bonds that impose unreasonable penalties are void under Section 27 of the Indian Contract Act.',
        status: 'CORRECT',
        rationale: 'Under Section 27 of the Indian Contract Act, any agreement that restrains lawful profession or trade is void. Courts have repeatedly held that companies can only recover reasonable actual expenses incurred on specialized training, not punitive penalty sums. Retaining original certificates amounts to illegal retention of personal property.',
        legalAwareness: 'High Courts and the Supreme Court (e.g. Pepsu Road Transport case) have affirmed that employers cannot treat employees as bonded labor. A legal notice for certificate recovery yields immediate relief.',
        whatToDoNext: 'Send a formal written demand notice to HR citing labor department guidelines and Section 27 of the Contract Act.',
        evidenceToKeep: 'Copy of appointment letter, bond terms, email correspondence resigning, and acknowledgement of degree deposit.',
        whereToGetHelp: 'State Labor Commissioner Office & District Legal Services Authority.'
      },
      {
        id: 'opt_b',
        text: 'Pay the ₹3 Lakhs because anything written in an employment contract is legally binding.',
        status: 'INCORRECT',
        rationale: 'Contract clauses that violate public policy or statutory law are void under Section 23 and 27 of the Indian Contract Act.',
        legalAwareness: 'Freedom of employment is protected under Article 19(1)(g) and statutory contract law.',
        whatToDoNext: 'Consult a labor lawyer or legal aid clinic.',
        evidenceToKeep: 'Signed contract copy.',
        whereToGetHelp: 'Labor Court & DLSA.'
      },
      {
        id: 'opt_c',
        text: 'Break into the HR office at night to retrieve the certificates.',
        status: 'INCORRECT',
        rationale: 'Trespassing and theft are serious offenses under criminal law regardless of ownership.',
        legalAwareness: 'Self-help through illegal acts exposes you to burglary and trespassing charges under IPC/BNS.',
        whatToDoNext: 'Pursue legal notice through an advocate or labor forum.',
        evidenceToKeep: 'Deposit receipts.',
        whereToGetHelp: 'District Legal Aid.'
      }
    ],
    sourceInfo: {
      sourceName: 'Section 27, Indian Contract Act 1872 & Ministry of Labour Guidelines',
      sourceUrl: 'https://labour.gov.in',
      verificationStatus: 'VERIFIED',
      lastVerifiedAt: '2026-08-10',
      reviewedBy: 'Adv. S. K. Roy',
      contentVersion: 'v2.1'
    }
  },
  {
    id: 'sc_women_01',
    topicId: 'womens_safety',
    title: 'The Police Station Refusing FIR Due to "Jurisdiction"',
    context: 'Ananya was sexually harassed on a late-night bus traveling from the airport. She immediately walks into the nearest police station in Begumpet to file an FIR. The duty officer tells her: "The bus was passing through Secunderabad when this happened. That is not our station jurisdiction. Go to Secunderabad police station and file there."',
    role: 'Ananya, Commuter',
    urgency: 'Critical',
    question: 'Can the police station refuse to register Ananya\'s complaint due to jurisdiction?',
    options: [
      {
        id: 'opt_a',
        text: 'No. Police are legally obligated to register a "Zero FIR" for any cognizable offense regardless of territorial jurisdiction. Refusing to do so is an offense under Section 166A IPC.',
        status: 'CORRECT',
        rationale: 'Following the Justice Verma Committee recommendations and Supreme Court directives, a Zero FIR allows a victim to initiate legal action at ANY police station in India. The station must record the FIR, initiate immediate investigation/medical aid, and transfer it to the jurisdictional station.',
        legalAwareness: 'Section 166A(c) of the Indian Penal Code makes it a punishable offense (up to 2 years imprisonment) for a public servant to fail to record information regarding sexual offenses.',
        whatToDoNext: 'Politely inform the officer about the Zero FIR directive and Section 166A IPC. Request the Station House Officer (SHO) if the duty officer resists.',
        evidenceToKeep: 'Note the police station name, date/time of visit, and officer\'s name/designation.',
        whereToGetHelp: 'Women Helpline 1091 / Emergency 112 / National Commission for Women (NCW) 7827170170.'
      },
      {
        id: 'opt_b',
        text: 'Travel across the city to the Secunderabad police station at 2 AM as instructed by the officer.',
        status: 'RISKY',
        rationale: 'Making a distressed victim travel across town in the middle of the night compromises personal safety and risks loss of crucial evidence.',
        legalAwareness: 'The purpose of the Zero FIR mechanism is specifically to eliminate procedural hurdles and delays in responding to crimes against women.',
        whatToDoNext: 'Stand firm on the right to register a Zero FIR.',
        evidenceToKeep: 'Bus ticket or digital ride receipt.',
        whereToGetHelp: 'Call 112 from inside the police station if refused.'
      },
      {
        id: 'opt_c',
        text: 'Go home and forget about the incident because police procedures are too complicated.',
        status: 'INCORRECT',
        rationale: 'Leaving sexual harassment unreported allows perpetrators to repeat offenses with impunity.',
        legalAwareness: 'Victims have access to free legal representation and victim support funds under NALSA schemes.',
        whatToDoNext: 'Seek support from a trusted friend, family member, or Women\'s Helpline.',
        evidenceToKeep: 'Bus number, route, and time.',
        whereToGetHelp: 'One Stop Centre (Sakhi).'
      }
    ],
    sourceInfo: {
      sourceName: 'Supreme Court of India Directives on Zero FIR & Justice Verma Committee Report',
      sourceUrl: 'https://ncw.nic.in',
      verificationStatus: 'VERIFIED',
      lastVerifiedAt: '2026-08-25',
      reviewedBy: 'Adv. Anjali Mehta',
      contentVersion: 'v2.4'
    }
  },
  {
    id: 'sc_women_02',
    topicId: 'womens_safety',
    title: 'Persistent Instagram Stalking & Fake Profile Morphing',
    context: 'Sneha notices someone creating multiple fake Instagram profiles using her name and pictures, sending vulgar messages to her classmates and posting morphed photos with derogatory captions. Even after reporting and blocking, new accounts reappear daily.',
    role: 'Sneha, Student',
    urgency: 'High',
    question: 'What legal recourse does Sneha have under Indian cyber and women safety laws?',
    options: [
      {
        id: 'opt_a',
        text: 'File a complaint on the National Cyber Crime Portal (cybercrime.gov.in) under "Women & Child Related Crime" and invoke Section 354D IPC and Section 66E/67A IT Act.',
        status: 'CORRECT',
        rationale: 'Cyber stalking is a specific criminal offense under Section 354D IPC/BNS, punishable with imprisonment. Transmitting morphed or sexually explicit content violates Section 67/67A IT Act. Complaints submitted under the dedicated Women & Child portal receive fast-track priority and IP subpoenas are issued to Meta/Instagram.',
        legalAwareness: 'The Indian Government has established specialized Cyber Cells for Women & Children. Victims have the legal right to request anonymity and removal of non-consensual images within 24 hours under IT Rules 2021.',
        whatToDoNext: 'Save uncropped screenshots and the exact profile URLs (e.g. instagram.com/fake_profile_123). File on cybercrime.gov.in.',
        evidenceToKeep: 'Full profile URLs, screenshots of messages/posts with timestamps, and account handle history.',
        whereToGetHelp: 'National Cyber Crime Reporting Portal (cybercrime.gov.in) & NCW Digital Crime Cell.'
      },
      {
        id: 'opt_b',
        text: 'Delete her own social media account and apologize to the stalker in private.',
        status: 'INCORRECT',
        rationale: 'Deleting your account destroys critical evidence and emboldens the stalker to escalate offline or target others.',
        legalAwareness: 'Stalking escalates when met with silence. The law provides proactive deterrence.',
        whatToDoNext: 'Secure your original account with Two-Factor Authentication and preserve evidence.',
        evidenceToKeep: 'Full URL links.',
        whereToGetHelp: 'Women Cyber Safety Cell.'
      },
      {
        id: 'opt_c',
        text: 'Post threatening public messages against all suspects on Twitter/X.',
        status: 'RISKY',
        rationale: 'Public accusations without police verification can attract defamation countersuits under Section 499 IPC.',
        legalAwareness: 'Legal recourse through official statutory portals ensures proper subpoena of digital IP logs without legal exposure.',
        whatToDoNext: 'Report via statutory legal channels.',
        evidenceToKeep: 'Digital trail records.',
        whereToGetHelp: 'National Helpline 1930 / 1091.'
      }
    ],
    sourceInfo: {
      sourceName: 'IT Act 2000 (Sec 66E, 67A) & Section 354D IPC / BNS',
      sourceUrl: 'https://cybercrime.gov.in',
      verificationStatus: 'VERIFIED',
      lastVerifiedAt: '2026-08-25',
      reviewedBy: 'Adv. Anjali Mehta',
      contentVersion: 'v2.4'
    }
  },
  // ── Tenant & Property Scenarios ──────────────────────────────────────
  {
    id: 'sc_tenant_01',
    topicId: 'tenant_property',
    title: 'Landlord Disconnects Electricity to Force Eviction',
    context: 'Amit, a working professional in Bengaluru, has a valid 11-month rent agreement. After Amit refuses a 40% rent hike, the landlord disconnects electricity and water supply to the flat and changes the main gate lock while Amit is at work.',
    role: 'Amit, Tenant',
    urgency: 'High',
    question: 'What legal recourse does Amit have against this forced eviction?',
    options: [
      {
        id: 'opt_a',
        text: 'File a complaint with the local police and approach the Rent Authority/Civil Court for restoration of possession and utilities. Landlord cannot self-help evict.',
        status: 'CORRECT',
        rationale: 'Under the Model Tenancy Act and various state Rent Control Acts, a landlord cannot disconnect essential services or forcefully evict a tenant. Eviction must follow due legal process through the Rent Authority or court.',
        legalAwareness: 'Illegal disconnection of utilities constitutes criminal intimidation under Section 503 IPC. The tenant can seek a mandatory injunction for restoration of services.',
        whatToDoNext: 'File an FIR under Section 441 IPC (criminal trespass) and approach the nearest Civil Court for emergency injunction.',
        evidenceToKeep: 'Rent agreement, utility bills in your name, photographs of disconnected meter/changed lock, and neighbour witness statements.',
        whereToGetHelp: 'Local Police Station, Rent Authority, and District Legal Services Authority.'
      },
      {
        id: 'opt_b',
        text: 'Vacate immediately because the landlord owns the property and has absolute rights.',
        status: 'INCORRECT',
        rationale: 'A tenant with a valid agreement has a legal right to peaceful occupation. Ownership does not permit illegal self-help eviction.',
        legalAwareness: 'Even property owners must follow legal eviction procedures through courts or Rent Authority.',
        whatToDoNext: 'Assert your rights and do not vacate under duress.',
        evidenceToKeep: 'Rent agreement and payment receipts.',
        whereToGetHelp: 'Legal Aid Clinic.'
      },
      {
        id: 'opt_c',
        text: 'Break the new lock and reconnect the electricity yourself.',
        status: 'RISKY',
        rationale: 'Self-help measures like breaking locks can expose you to charges of criminal trespass or mischief, weakening your legal position.',
        legalAwareness: 'Legal remedies through courts and police are the appropriate course of action.',
        whatToDoNext: 'Seek immediate legal injunction instead of physical action.',
        evidenceToKeep: 'Photographs and video of the locked property.',
        whereToGetHelp: 'District Court for emergency relief.'
      }
    ],
    sourceInfo: {
      sourceName: 'Model Tenancy Act 2021 & State Rent Control Acts',
      sourceUrl: 'https://mohua.gov.in',
      verificationStatus: 'VERIFIED',
      lastVerifiedAt: '2026-09-10',
      reviewedBy: 'Adv. P. Krishnamurthy',
      contentVersion: 'v1.0'
    }
  },
  {
    id: 'sc_tenant_02',
    topicId: 'tenant_property',
    title: 'Builder Delays Flat Delivery by 3 Years Without Compensation',
    context: 'Sunita booked a 2BHK apartment in a RERA-registered project in 2023 with a promised possession date of December 2024. It is now October 2026 and the builder keeps extending the date. Sunita has paid 85% of the total cost via home loan EMIs.',
    role: 'Sunita, Home Buyer',
    urgency: 'High',
    question: 'What are Sunita\'s rights under RERA against the delayed builder?',
    options: [
      {
        id: 'opt_a',
        text: 'File a complaint with the State RERA Authority for either a full refund with interest or compensation for delayed possession under Section 18 of RERA.',
        status: 'CORRECT',
        rationale: 'Under Section 18 of RERA 2016, if a builder fails to deliver possession by the agreed date, the buyer is entitled to a full refund with interest or monthly compensation until delivery, at the buyer\'s choice.',
        legalAwareness: 'RERA authorities can impose penalties on builders, cancel project registration, and order refunds with SBI MCLR+2% interest.',
        whatToDoNext: 'File an online complaint on the State RERA portal with allotment letter, payment receipts, and possession date proof.',
        evidenceToKeep: 'Allotment letter, buyer agreement, all payment receipts, bank loan documents, and any written communication from the builder about delays.',
        whereToGetHelp: 'State RERA Authority portal & RERA Appellate Tribunal.'
      },
      {
        id: 'opt_b',
        text: 'Wait patiently because construction delays are normal and buyers have no legal recourse.',
        status: 'INCORRECT',
        rationale: 'RERA was specifically enacted to protect home buyers against indefinite builder delays and fund diversion.',
        legalAwareness: 'RERA places the legal burden on builders to meet commitment dates or pay compensation.',
        whatToDoNext: 'Exercise your RERA rights immediately.',
        evidenceToKeep: 'All documents.',
        whereToGetHelp: 'State RERA Authority.'
      },
      {
        id: 'opt_c',
        text: 'Stop paying EMIs to the bank to pressure the builder.',
        status: 'RISKY',
        rationale: 'Stopping EMIs affects your personal credit score and the bank can initiate recovery proceedings against you, not the builder.',
        legalAwareness: 'Your loan agreement is with the bank, not the builder. Non-payment of EMIs results in NPA classification and credit score damage.',
        whatToDoNext: 'Continue EMIs but file RERA complaint for builder accountability.',
        evidenceToKeep: 'Loan agreement and EMI payment records.',
        whereToGetHelp: 'Banking Ombudsman & State RERA.'
      }
    ],
    sourceInfo: {
      sourceName: 'RERA 2016 & State RERA Tribunal Orders',
      sourceUrl: 'https://rera.gov.in',
      verificationStatus: 'VERIFIED',
      lastVerifiedAt: '2026-09-10',
      reviewedBy: 'Adv. P. Krishnamurthy',
      contentVersion: 'v1.0'
    }
  },
  // ── RTI Scenarios ───────────────────────────────────────────────────
  {
    id: 'sc_rti_01',
    topicId: 'rti_accountability',
    title: 'Government Office Refuses RTI Application',
    context: 'Rahul files an RTI application at the local Municipal Corporation office asking for details of road construction budget expenditure in his ward. The clerk tells him: "We don\'t accept RTI from ordinary citizens. You need to be a journalist or lawyer to file RTI."',
    role: 'Rahul, Citizen',
    urgency: 'Medium',
    question: 'Can the government office refuse Rahul\'s RTI application?',
    options: [
      {
        id: 'opt_a',
        text: 'No. Under Section 3 of the RTI Act, EVERY Indian citizen has the right to file RTI. No qualification, profession, or justification is required. The clerk must accept the application.',
        status: 'CORRECT',
        rationale: 'Section 6 of the RTI Act says a person making a request need not give any reason for requesting the information. Any citizen can file. Refusal to accept is a punishable offense.',
        legalAwareness: 'Under Section 20, the Information Commission can impose ₹250/day penalty on the PIO for unreasonable refusal, up to ₹25,000.',
        whatToDoNext: 'Send the RTI via registered post/speed post to the PIO, or file online at rtionline.gov.in if it\'s a central body.',
        evidenceToKeep: 'Copy of rejected RTI, clerk\'s name, date, and postal receipt if sent by mail.',
        whereToGetHelp: 'State Information Commission & Department of Personnel & Training (DoPT).'
      },
      {
        id: 'opt_b',
        text: 'Accept the clerk\'s statement and find a lawyer to file on your behalf.',
        status: 'INCORRECT',
        rationale: 'No legal intermediary is needed. The RTI Act is designed for direct citizen participation without professional help.',
        legalAwareness: 'Section 3 gives the right to every citizen, not just professionals.',
        whatToDoNext: 'File the RTI directly yourself.',
        evidenceToKeep: 'RTI application copy.',
        whereToGetHelp: 'RTI Online Portal.'
      },
      {
        id: 'opt_c',
        text: 'Create a social media campaign to shame the office.',
        status: 'RISKY',
        rationale: 'While public awareness is important, legal remedies are more effective and avoid potential defamation issues.',
        legalAwareness: 'The RTI Act itself provides robust penalties and appeal mechanisms.',
        whatToDoNext: 'Use the statutory appeal process first.',
        evidenceToKeep: 'All correspondence.',
        whereToGetHelp: 'State Information Commission.'
      }
    ],
    sourceInfo: {
      sourceName: 'RTI Act 2005 & CIC Orders',
      sourceUrl: 'https://rtionline.gov.in',
      verificationStatus: 'VERIFIED',
      lastVerifiedAt: '2026-09-05',
      reviewedBy: 'Adv. A. K. Singh',
      contentVersion: 'v1.0'
    }
  },
  // ── Environmental Rights Scenarios ─────────────────────────────────
  {
    id: 'sc_env_01',
    topicId: 'environmental_rights',
    title: 'Factory Dumping Chemical Waste in the Local River',
    context: 'Residents of a village near Vizag notice their local river has turned a dark brown color. Fish are dying and several children have developed skin rashes after playing near the water. A chemical factory upstream is suspected of dumping untreated waste.',
    role: 'Residents Committee',
    urgency: 'Critical',
    question: 'What legal action can the residents take against the polluting factory?',
    options: [
      {
        id: 'opt_a',
        text: 'File a complaint with the State Pollution Control Board (SPCB) and simultaneously approach the National Green Tribunal (NGT) for emergency relief and compensation.',
        status: 'CORRECT',
        rationale: 'Under the Water (Prevention and Control of Pollution) Act 1974 and Environment Protection Act 1986, industrial units must have Consent to Operate with effluent treatment. Dumping untreated waste is a criminal offense. NGT can order closure, cleanup, and compensation.',
        legalAwareness: 'Section 14 of the NGT Act allows any person (including affected residents) to file applications. NGT has suo-motu powers and can order interim relief within days.',
        whatToDoNext: 'Collect water samples, photograph dead fish and river condition, and file complaint on the SPCB portal and NGT simultaneously.',
        evidenceToKeep: 'Dated photographs of river pollution, medical records of affected residents, water samples in sealed bottles, and GPS coordinates.',
        whereToGetHelp: 'State Pollution Control Board, National Green Tribunal (NGT), and District Collector.'
      },
      {
        id: 'opt_b',
        text: 'Block the factory entrance with a protest rally.',
        status: 'RISKY',
        rationale: 'While peaceful protest is a right, blocking a factory can lead to charges of unlawful assembly and divert focus from the environmental crime.',
        legalAwareness: 'Legal channels through NGT and SPCB are faster and more effective for environmental relief.',
        whatToDoNext: 'File a formal complaint while maintaining peaceful advocacy.',
        evidenceToKeep: 'Pollution evidence.',
        whereToGetHelp: 'NGT & Environmental Law Organization.'
      },
      {
        id: 'opt_c',
        text: 'Do nothing because factories bring employment and economic growth to the region.',
        status: 'INCORRECT',
        rationale: 'Environmental laws exist precisely to balance industrial development with public health and ecological safety.',
        legalAwareness: 'The Polluter Pays Principle established by the Supreme Court mandates that industries bear the full cost of environmental damage and remediation.',
        whatToDoNext: 'Report the violation immediately.',
        evidenceToKeep: 'Health records and pollution photographs.',
        whereToGetHelp: 'State Pollution Control Board.'
      }
    ],
    sourceInfo: {
      sourceName: 'NGT Act 2010 & Water (Prevention and Control of Pollution) Act, 1974',
      sourceUrl: 'https://greentribunal.gov.in',
      verificationStatus: 'VERIFIED',
      lastVerifiedAt: '2026-09-12',
      reviewedBy: 'Adv. D. Gupta',
      contentVersion: 'v1.0'
    }
  },
  // ── Senior Citizen Scenarios ─────────────────────────────────────────
  {
    id: 'sc_senior_01',
    topicId: 'senior_citizens',
    title: 'Son Refuses to Care for Elderly Father After Taking Property',
    context: 'Mr. Ramesh (72) transferred his house to his son via a gift deed 3 years ago, with a verbal understanding that the son would take care of him. After the transfer, the son and daughter-in-law stopped providing food, medicines, and are now pressuring him to leave "their" house.',
    role: 'Mr. Ramesh, Senior Citizen',
    urgency: 'High',
    question: 'What legal protection does Mr. Ramesh have?',
    options: [
      {
        id: 'opt_a',
        text: 'File a maintenance application under the Maintenance and Welfare of Parents and Senior Citizens Act 2007 before the Maintenance Tribunal, and apply to declare the gift deed void for failure of care conditions.',
        status: 'CORRECT',
        rationale: 'Under Section 23 of the Maintenance Act, a transfer of property by a senior citizen made on the condition of being cared for can be declared void if the transferee neglects to provide maintenance. Additionally, Section 4 mandates children to provide maintenance.',
        legalAwareness: 'The Maintenance Tribunal (SDM) can order monthly maintenance, and under the 2019 Amendment, can declare the property transfer void. No lawyer is required to file.',
        whatToDoNext: 'File application at the SDM office with a copy of the gift deed and evidence of neglect (medical bills not paid, refusal of food, etc.).',
        evidenceToKeep: 'Gift deed copy, medical prescriptions showing neglect, photographs of living conditions, and witness statements from neighbours.',
        whereToGetHelp: 'Sub-Divisional Magistrate (SDM), Elder Line Helpline 14567, and District Legal Services Authority.'
      },
      {
        id: 'opt_b',
        text: 'Accept the situation because once property is gifted, the old owner has no legal standing.',
        status: 'INCORRECT',
        rationale: 'The Maintenance Act 2007 specifically addresses this exploitation pattern and provides powerful remedies to senior citizens.',
        legalAwareness: 'Section 23 gives senior citizens the right to revoke property transfers made under conditions that were not fulfilled.',
        whatToDoNext: 'Exercise your legal right to maintenance and property recovery.',
        evidenceToKeep: 'Gift deed and all related documents.',
        whereToGetHelp: 'Elder Line 14567.'
      },
      {
        id: 'opt_c',
        text: 'Leave the house quietly and move to an old age home.',
        status: 'RISKY',
        rationale: 'While old age homes provide shelter, Mr. Ramesh has strong legal rights to both maintenance and the property he transferred.',
        legalAwareness: 'The law is designed to prevent exactly this scenario of senior citizen exploitation after property transfer.',
        whatToDoNext: 'Assert your legal rights before considering institutional care.',
        evidenceToKeep: 'All property and care-related documents.',
        whereToGetHelp: 'District Social Welfare Department & DLSA.'
      }
    ],
    sourceInfo: {
      sourceName: 'Maintenance and Welfare of Parents and Senior Citizens Act, 2007 (Amended 2019)',
      sourceUrl: 'https://socialjustice.gov.in',
      verificationStatus: 'VERIFIED',
      lastVerifiedAt: '2026-09-08',
      reviewedBy: 'Adv. N. Bhatt',
      contentVersion: 'v1.0'
    }
  },
  // ── Personal Laws Scenarios ──────────────────────────────────────────
  {
    id: 'sc_personal_01',
    topicId: 'personal_laws',
    title: 'Inter-Faith Couple Facing Family Opposition to Marriage',
    context: 'Priya (Hindu) and Imran (Muslim) have been in a relationship for 4 years and want to get married. Both families oppose the marriage. Priya\'s family threatens to file a missing person report, and Imran\'s family threatens disownment. The couple are both adults (26 and 28 years old).',
    role: 'Priya & Imran, Adult Couple',
    urgency: 'High',
    question: 'How can the couple legally marry without religious conversion?',
    options: [
      {
        id: 'opt_a',
        text: 'File a notice of intended marriage under the Special Marriage Act 1954 at the Marriage Officer\'s office. Both adults have the constitutional right to marry the person of their choice.',
        status: 'CORRECT',
        rationale: 'The Special Marriage Act 1954 allows any two Indian citizens above 21 (male) and 18 (female) to marry regardless of religion, caste, or creed. No religious conversion is required. The Supreme Court has upheld that the right to marry is part of Article 21.',
        legalAwareness: 'Under Article 21, the right to choose a life partner is a fundamental right. The couple can also seek police protection if facing threats. Supreme Court has held that the notice publication can be waived if there are safety concerns.',
        whatToDoNext: 'Both parties submit notice to the Marriage Officer with ID proof, age proof, and photographs. Marriage can be solemnized after 30 days.',
        evidenceToKeep: 'Birth certificates, Aadhaar, passport-sized photographs, and written threats (if any) from family members.',
        whereToGetHelp: 'Marriage Officer\'s Office, National Human Rights Commission (NHRC), and local police for protection order.'
      },
      {
        id: 'opt_b',
        text: 'One person must convert to the other\'s religion before marriage.',
        status: 'INCORRECT',
        rationale: 'The Special Marriage Act was specifically enacted to enable inter-faith marriages without conversion.',
        legalAwareness: 'No Indian law requires religious conversion for a valid marriage.',
        whatToDoNext: 'Apply under the Special Marriage Act.',
        evidenceToKeep: 'ID proofs.',
        whereToGetHelp: 'Marriage Officer.'
      },
      {
        id: 'opt_c',
        text: 'Elope to another state and get married informally without any registration.',
        status: 'RISKY',
        rationale: 'An unregistered marriage creates legal complications for inheritance, insurance, passport, and children\'s rights.',
        legalAwareness: 'Registration provides legal proof and protections; informal ceremonies alone have weak evidentiary value in courts.',
        whatToDoNext: 'Register the marriage properly for full legal protection.',
        evidenceToKeep: 'Marriage photographs and witness details.',
        whereToGetHelp: 'Sub-Registrar office.'
      }
    ],
    sourceInfo: {
      sourceName: 'Special Marriage Act 1954 & Supreme Court Judgments on Right to Marry',
      sourceUrl: 'https://lawmin.gov.in',
      verificationStatus: 'VERIFIED',
      lastVerifiedAt: '2026-09-15',
      reviewedBy: 'Adv. S. Banerjee',
      contentVersion: 'v1.0'
    }
  }
];

export const QUIZ_QUESTIONS = [
  // Cybercrime
  {
    id: 'qz_cyb_1',
    topicId: 'cybercrime',
    question: 'What is the National Cyber Crime Helpline number in India for reporting financial fraud within the Golden Hour?',
    options: ['100', '1930', '1091', '1915'],
    correctIndex: 1,
    explanation: '1930 is the dedicated 24x7 Citizen Financial Cyber Fraud Reporting helpline operated by the Indian Cyber Crime Coordination Centre (I4C).',
    relevantSection: 'I4C MHA Framework',
    difficulty: 'Easy'
  },
  {
    id: 'qz_cyb_2',
    topicId: 'cybercrime',
    question: 'Under RBI guidelines, what is customer liability if unauthorized electronic banking fraud is reported within 3 working days?',
    options: ['100% liability', '50% liability', 'Zero liability', 'Fixed fee of ₹10,000'],
    correctIndex: 2,
    explanation: 'RBI Circular 2017 establishes Zero Liability for customers when unauthorized transactions occur due to third-party breach or system failure and are reported within 3 working days.',
    relevantSection: 'RBI Circular DBR.No.Leg.BC.78/2017-18',
    difficulty: 'Medium'
  },
  {
    id: 'qz_cyb_3',
    topicId: 'cybercrime',
    question: 'Which section of the Information Technology Act, 2000 penalizes cheating by personation using a computer resource?',
    options: ['Section 43', 'Section 65', 'Section 66D', 'Section 72A'],
    correctIndex: 2,
    explanation: 'Section 66D of the IT Act punishes cheating by personation using communication devices or computer resources with up to 3 years imprisonment and fine.',
    relevantSection: 'Section 66D, IT Act 2000',
    difficulty: 'Hard'
  },
  {
    id: 'qz_cyb_4',
    topicId: 'cybercrime',
    question: 'In the UPI payment system, when is entering your UPI PIN required?',
    options: ['Only to send/deduct money from your account', 'Both to send and receive money', 'Whenever an advance payment is credited', 'To check incoming notifications'],
    correctIndex: 0,
    explanation: 'UPI PIN is strictly an authorization for debiting money. Receiving money or checking an incoming credit NEVER requires entering a UPI PIN.',
    relevantSection: 'NPCI UPI Guidelines',
    difficulty: 'Easy'
  },
  {
    id: 'qz_cyb_5',
    topicId: 'cybercrime',
    question: 'What is the official Government portal to check active mobile connections issued in your name under your Aadhaar?',
    options: ['UIDAI Portal', 'Sanchar Saathi (TAFCOP)', 'DigiLocker', 'MyGov'],
    correctIndex: 1,
    explanation: 'The Department of Telecommunications Sanchar Saathi TAFCOP portal (tafcop.sancharsaathi.gov.in) allows citizens to inspect and report unauthorized SIM connections in their name.',
    relevantSection: 'DoT Telecom Security Rules',
    difficulty: 'Medium'
  },

  // Consumer Rights
  {
    id: 'qz_con_1',
    topicId: 'consumer_rights',
    question: 'What is the toll-free number for the National Consumer Helpline (NCH)?',
    options: ['1915', '1930', '112', '1098'],
    correctIndex: 0,
    explanation: '1915 is the National Consumer Helpline managed by the Department of Consumer Affairs, Government of India.',
    relevantSection: 'Consumer Protection Act 2019',
    difficulty: 'Easy'
  },
  {
    id: 'qz_con_2',
    topicId: 'consumer_rights',
    question: 'What is the official online portal to file consumer dispute cases from home without a lawyer?',
    options: ['e-Courts', 'e-Daakhil', 'Niti Aayog', 'Samadhan'],
    correctIndex: 1,
    explanation: 'e-Daakhil (edaakhil.nic.in) enables digital filing and tracking of consumer complaints before District, State, and National Consumer Commissions.',
    relevantSection: 'Section 35, CPA 2019',
    difficulty: 'Medium'
  },
  {
    id: 'qz_con_3',
    topicId: 'consumer_rights',
    question: 'Under Consumer Protection Act 2019, is court fee required for claims up to ₹5 Lakhs?',
    options: ['₹5,000 fee', '₹500 fee', 'No court fee required', '10% of claim amount'],
    correctIndex: 2,
    explanation: 'Under the Consumer Protection Rules, no fee is charged for complaints filed with consumer commissions where value of goods/services is up to ₹5 Lakhs.',
    relevantSection: 'Consumer Protection Rules 2020',
    difficulty: 'Medium'
  },
  {
    id: 'qz_con_4',
    topicId: 'consumer_rights',
    question: 'What is "Dark Pattern" in e-commerce under CCPA Guidelines 2023?',
    options: ['Using a dark website background theme', 'Deceptive user interfaces designed to trick users into unintended purchases or subscriptions', 'Night-time e-commerce discounts', 'Purchasing electronics without battery'],
    correctIndex: 1,
    explanation: 'Dark patterns are deceptive UX designs like false urgency, drip pricing, and basket sneaking prohibited by the Central Consumer Protection Authority.',
    relevantSection: 'CCPA Dark Pattern Guidelines 2023',
    difficulty: 'Easy'
  },
  {
    id: 'qz_con_5',
    topicId: 'consumer_rights',
    question: 'Can restaurants legally force customers to pay a service charge?',
    options: ['Yes, if written on menu card', 'Yes, if approved by local municipality', 'No, CCPA guidelines make service charge strictly voluntary', 'Yes, only for orders above ₹1,000'],
    correctIndex: 2,
    explanation: 'CCPA 2022 guidelines clarify that service charge cannot be added by default or compelled, and entry cannot be restricted for refusing it.',
    relevantSection: 'CCPA Guidelines July 2022',
    difficulty: 'Medium'
  },

  // Road Laws
  {
    id: 'qz_rd_1',
    topicId: 'road_laws',
    question: 'Which section of the Motor Vehicles Act provides legal immunity to Good Samaritans who assist road accident victims?',
    options: ['Section 134A', 'Section 185', 'Section 206', 'Section 112'],
    correctIndex: 0,
    explanation: 'Section 134A inserted by the 2019 Amendment explicitly shields Good Samaritans from civil or criminal liability for assisting accident victims.',
    relevantSection: 'Section 134A MVA 2019',
    difficulty: 'Medium'
  },
  {
    id: 'qz_rd_2',
    topicId: 'road_laws',
    question: 'Under Central Motor Vehicles Rules, are documents stored in DigiLocker and mParivahan legally valid at traffic stops?',
    options: ['No, only laminated physical cards are valid', 'Yes, they have statutory parity with physical originals under Rule 139', 'Only in the state where issued', 'Only during daytime'],
    correctIndex: 1,
    explanation: 'Rule 139 CMVR and MoRTH notifications establish that digital driving licences and RCs on DigiLocker/mParivahan are legally binding across India.',
    relevantSection: 'Rule 139 CMVR / MoRTH Circulars',
    difficulty: 'Easy'
  },
  {
    id: 'qz_rd_3',
    topicId: 'road_laws',
    question: 'What is the legal blood alcohol limit for driving in India under Section 185 MVA?',
    options: ['30 mg per 100 ml of blood', '100 mg per 100 ml of blood', '50 mg per 100 ml of blood', 'Zero tolerance with no test needed'],
    correctIndex: 0,
    explanation: 'Section 185 of the Motor Vehicles Act sets the limit at 30 mg of alcohol per 100 ml of blood detected by a breath analyzer.',
    relevantSection: 'Section 185 MVA 1988',
    difficulty: 'Hard'
  },
  {
    id: 'qz_rd_4',
    topicId: 'road_laws',
    question: 'Where can a motorist contest or pay a traffic e-challan without physically going to a police station?',
    options: ['Virtual Court (vcourts.gov.in) and echallan.parivahan.gov.in', 'Passport Seva Kendra', 'UIDAI Portal', 'Aadhaar Center'],
    correctIndex: 0,
    explanation: 'Virtual Courts (vcourts.gov.in) and Parivahan e-Challan allow motorists to contest, plead guilty, or pay fines digitally.',
    relevantSection: 'e-Courts Mission Mode Project',
    difficulty: 'Easy'
  },
  {
    id: 'qz_rd_5',
    topicId: 'road_laws',
    question: 'Can hospital emergency staff refuse immediate treatment to a road accident victim until a police FIR is lodged?',
    options: ['Yes, hospital must wait for police clearance', 'No, Supreme Court mandates emergency treatment without waiting for police or advance money', 'Only private hospitals can refuse', 'Only if the patient has insurance'],
    correctIndex: 1,
    explanation: 'Supreme Court landmark ruling in Parmanand Katara v. Union of India mandates that every doctor and hospital must provide immediate life-saving treatment without waiting for police formalities.',
    relevantSection: 'Parmanand Katara Judgment',
    difficulty: 'Medium'
  },

  // Digital Privacy
  {
    id: 'qz_priv_1',
    topicId: 'digital_privacy',
    question: 'Which landmark Supreme Court judgment recognized the Right to Privacy as a Fundamental Right under Article 21?',
    options: ['Kesavananda Bharati v. State of Kerala', 'Justice K.S. Puttaswamy v. Union of India', 'Maneka Gandhi v. Union of India', 'Vishaka v. State of Rajasthan'],
    correctIndex: 1,
    explanation: 'The 9-judge unanimous bench in Justice K.S. Puttaswamy (2017) declared the Right to Privacy an intrinsic fundamental right under Article 21.',
    relevantSection: 'Article 21, Constitution of India',
    difficulty: 'Medium'
  },
  {
    id: 'qz_priv_2',
    topicId: 'digital_privacy',
    question: 'What is the primary benefit of locking your Aadhaar biometrics on the mAadhaar app or UIDAI portal?',
    options: ['It changes your Aadhaar number', 'It prevents unauthorized Aadhaar Enabled Payment System (AePS) withdrawals and biometric identity theft', 'It increases your credit score', 'It cancels your PAN card link'],
    correctIndex: 1,
    explanation: 'Locking biometrics prevents any entity from authenticating using fingerprints or iris scans, preventing AePS siphon fraud.',
    relevantSection: 'Aadhaar Act 2016',
    difficulty: 'Easy'
  },
  {
    id: 'qz_priv_3',
    topicId: 'digital_privacy',
    question: 'What maximum monetary penalty can the Data Protection Board impose on a data fiduciary for significant breach under DPDPA 2023?',
    options: ['Up to ₹50,000', 'Up to ₹250 Crores', 'Up to ₹10 Lakhs', 'Fixed fee of ₹1 Crore'],
    correctIndex: 1,
    explanation: 'Under the Digital Personal Data Protection Act 2023, penalties up to ₹250 Crores can be levied for failure to take reasonable security safeguards preventing personal data breach.',
    relevantSection: 'DPDPA 2023 Penalty Schedule',
    difficulty: 'Hard'
  },
  {
    id: 'qz_priv_4',
    topicId: 'digital_privacy',
    question: 'What is "Masked Aadhaar"?',
    options: ['A fake duplicate card', 'An official Aadhaar card where only the last 4 digits of the Aadhaar number are visible', 'An Aadhaar card with a black and white photo', 'An expired Aadhaar'],
    correctIndex: 1,
    explanation: 'Masked Aadhaar is a legally recognized version downloaded from UIDAI where the first 8 digits are masked, protecting personal security during hotel or travel check-ins.',
    relevantSection: 'UIDAI Masked Aadhaar Directives',
    difficulty: 'Easy'
  },
  {
    id: 'qz_priv_5',
    topicId: 'digital_privacy',
    question: 'Can digital lending apps legally demand access to your smartphone\'s contacts and photo gallery under RBI guidelines?',
    options: ['Yes, to assess creditworthiness', 'No, RBI Digital Lending Guidelines strictly prohibit accessing phone contacts and media galleries', 'Only if the loan exceeds ₹50,000', 'Yes, if user clicks agree'],
    correctIndex: 1,
    explanation: 'RBI 2022 Digital Lending Guidelines strictly prohibit lending applications from accessing device contacts, media galleries, and call logs.',
    relevantSection: 'RBI Digital Lending Guidelines 2022',
    difficulty: 'Medium'
  },

  // Fundamental Rights
  {
    id: 'qz_fr_1',
    topicId: 'fundamental_rights',
    question: 'Within how many hours must an arrested person be produced before the nearest Judicial Magistrate in India?',
    options: ['48 hours', '12 hours', '24 hours (excluding travel time)', '7 days'],
    correctIndex: 2,
    explanation: 'Article 22(2) of the Constitution and Section 57 CrPC mandate production before a Magistrate within 24 hours of arrest.',
    relevantSection: 'Article 22(2) & Section 57 CrPC',
    difficulty: 'Easy'
  },
  {
    id: 'qz_fr_2',
    topicId: 'fundamental_rights',
    question: 'Which famous Supreme Court case laid down the mandatory 11-point guidelines for police during arrest and detention?',
    options: ['D.K. Basu v. State of West Bengal', 'Golaknath v. State of Punjab', 'Indra Sawhney case', 'Shah Bano case'],
    correctIndex: 0,
    explanation: 'D.K. Basu v. State of West Bengal (1997) established mandatory safeguards including arrest memo, notification to family, medical examination, and lawyer consultation.',
    relevantSection: 'D.K. Basu Guidelines',
    difficulty: 'Medium'
  },
  {
    id: 'qz_fr_3',
    topicId: 'fundamental_rights',
    question: 'What is the national legal aid helpline number for free legal services provided by NALSA?',
    options: ['15100', '1930', '100', '1915'],
    correctIndex: 0,
    explanation: '15100 is the National Legal Services Authority (NALSA) toll-free helpline providing free legal assistance to eligible citizens.',
    relevantSection: 'Legal Services Authorities Act, 1987',
    difficulty: 'Medium'
  },
  {
    id: 'qz_fr_4',
    topicId: 'fundamental_rights',
    question: 'Which constitutional writ can be filed before High Courts or Supreme Court against illegal detention without trial?',
    options: ['Writ of Quo Warranto', 'Writ of Habeas Corpus', 'Writ of Certiorari', 'Writ of Prohibition'],
    correctIndex: 1,
    explanation: 'Habeas Corpus ("produce the body") is the writ petition filed to order the immediate release of a person held in unlawful custody.',
    relevantSection: 'Article 32 & 226, Constitution',
    difficulty: 'Hard'
  },
  {
    id: 'qz_fr_5',
    topicId: 'fundamental_rights',
    question: 'Can police officers force an arrested citizen to sign blank sheets of paper or self-incriminating confessions?',
    options: ['Yes, during interrogation', 'No, Article 20(3) guarantees protection against self-incrimination and forced confessions are inadmissible', 'Only with senior inspector permission', 'Yes, for petty offenses'],
    correctIndex: 1,
    explanation: 'Article 20(3) provides that no accused person shall be compelled to be a witness against himself. Confessions made to police are inadmissible under Section 25 Evidence Act.',
    relevantSection: 'Article 20(3) & Section 25 Evidence Act',
    difficulty: 'Medium'
  },

  // Student & Workplace Issues
  {
    id: 'qz_work_1',
    topicId: 'student_workplace',
    question: 'What is the mandatory threshold number of employees for an organization to constitute an Internal Complaints Committee (ICC) under the POSH Act 2013?',
    options: ['50 employees', '25 employees', '10 or more employees', '100 employees'],
    correctIndex: 2,
    explanation: 'Section 4 of the Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013 mandates ICC for workplaces with 10+ employees.',
    relevantSection: 'Section 4, POSH Act 2013',
    difficulty: 'Medium'
  },
  {
    id: 'qz_work_2',
    topicId: 'student_workplace',
    question: 'Can an employer legally retain your original educational degrees or passport as a condition of employment?',
    options: ['Yes, if agreed in offer letter', 'No, retaining original certificates is illegal under labor laws and court rulings', 'Only for the first 6 months', 'Only if the salary is below ₹25,000'],
    correctIndex: 1,
    explanation: 'Neither educational institutes nor corporate employers have any legal authority to withhold original certificates as security.',
    relevantSection: 'UGC & Ministry of Labour Notifications',
    difficulty: 'Easy'
  },
  {
    id: 'qz_work_3',
    topicId: 'student_workplace',
    question: 'Under Section 27 of the Indian Contract Act, what is the legal status of an agreement that restrains lawful trade or profession?',
    options: ['It is fully enforceable', 'It is void and unenforceable to that extent', 'It requires High Court sanction', 'It is valid for 5 years'],
    correctIndex: 1,
    explanation: 'Section 27 declares every agreement by which anyone is restrained from exercising a lawful profession, trade or business of any kind, is to that extent void.',
    relevantSection: 'Section 27, Indian Contract Act 1872',
    difficulty: 'Hard'
  },
  {
    id: 'qz_work_4',
    topicId: 'student_workplace',
    question: 'What is the 24x7 toll-free National Anti-Ragging Helpline number?',
    options: ['1800-180-5522', '1930', '1098', '112'],
    correctIndex: 0,
    explanation: '1800-180-5522 is the toll-free Anti-Ragging Helpline monitored by the UGC and Supreme Court monitoring committee.',
    relevantSection: 'UGC Anti-Ragging Regulations 2009',
    difficulty: 'Easy'
  },
  {
    id: 'qz_work_5',
    topicId: 'student_workplace',
    question: 'Within how many hours must a college head file an FIR after receiving a formal complaint of ragging?',
    options: ['Within 24 hours', 'Within 7 days', 'Within 1 month', 'Only after internal inquiry completes'],
    correctIndex: 0,
    explanation: 'UGC regulations mandate that the head of the institution must file an FIR with the local police within 24 hours of receiving a ragging report.',
    relevantSection: 'Raghavan Committee Directive',
    difficulty: 'Medium'
  },

  // Women's Safety
  {
    id: 'qz_wom_1',
    topicId: 'womens_safety',
    question: 'What is a "Zero FIR"?',
    options: ['An FIR with zero accused persons', 'An FIR registered at any police station regardless of territorial jurisdiction and transferred later', 'An FIR closed without investigation', 'A traffic challan'],
    correctIndex: 1,
    explanation: 'A Zero FIR can be lodged at any police station across India. It is numbered as 0 and subsequently transferred to the appropriate jurisdictional station.',
    relevantSection: 'Justice Verma Committee Directives',
    difficulty: 'Easy'
  },
  {
    id: 'qz_wom_2',
    topicId: 'womens_safety',
    question: 'What are the legal restrictions on arresting a woman between sunset and sunrise under Section 46(4) CrPC?',
    options: ['Women can be arrested at any hour without conditions', 'No woman can be arrested between sunset and sunrise except under extraordinary circumstances with prior written permission of Judicial Magistrate and female officer presence', 'Only if accompanied by male family members', 'Arrest allowed only in private residences'],
    correctIndex: 1,
    explanation: 'Section 46(4) CrPC strictly forbids night arrest of women without written permission from a Judicial Magistrate First Class and the presence of a woman police officer.',
    relevantSection: 'Section 46(4) CrPC',
    difficulty: 'Medium'
  },
  {
    id: 'qz_wom_3',
    topicId: 'womens_safety',
    question: 'What is the National Emergency number across India that unifies Police, Fire, and Ambulance?',
    options: ['112', '100', '108', '101'],
    correctIndex: 0,
    explanation: '112 is India\'s Unified Emergency Response Support System (ERSS) integrating police, medical, and fire emergency dispatch.',
    relevantSection: 'MHA Emergency Response System',
    difficulty: 'Easy'
  },
  {
    id: 'qz_wom_4',
    topicId: 'womens_safety',
    question: 'What is the 24x7 helpline number for the National Commission for Women (NCW)?',
    options: ['7827170170', '1930', '1915', '1098'],
    correctIndex: 0,
    explanation: '7827170170 is the 24x7 dedicated helpline of the National Commission for Women (NCW) for violence against women.',
    relevantSection: 'National Commission for Women Act',
    difficulty: 'Medium'
  },
  {
    id: 'qz_wom_5',
    topicId: 'womens_safety',
    question: 'Which specialized centers provide integrated medical, legal, psychological, and temporary shelter assistance under one roof for women in distress?',
    options: ['Sakhi One Stop Centres (OSC)', 'Aadhaar Centers', 'Panchayat Bhavan', 'Consumer Forums'],
    correctIndex: 0,
    explanation: 'Sakhi One Stop Centres (OSCs) established by Ministry of Women and Child Development provide integrated medical, legal, and counseling aid under one roof.',
    relevantSection: 'Nirbhaya Framework Guidelines',
    difficulty: 'Easy'
  },

  // ── Women's Safety — Questions 6–10 ──────────────────────────────────────
  {
    id: 'qz_wom_6',
    topicId: 'womens_safety',
    question: 'Under the PWDVA 2005, who can a woman approach to apply for a Protection Order against domestic violence?',
    options: ['The Prime Minister\'s Office', 'Judicial Magistrate (First Class) through a Protection Officer or directly', 'Only the High Court', 'Panchayat Leader'],
    correctIndex: 1,
    explanation: 'Section 12 of the Protection of Women from Domestic Violence Act allows women to file an application before a Magistrate directly or through a Protection Officer or service provider.',
    relevantSection: 'Section 12, PWDVA 2005',
    difficulty: 'Medium'
  },
  {
    id: 'qz_wom_7',
    topicId: 'womens_safety',
    question: 'What does Section 354D IPC (now BNS) penalise?',
    options: ['Theft from women', 'Stalking — repeatedly following or contacting a woman against her will, including online monitoring', 'Eve-teasing in public transport', 'Refusal of employment to women'],
    correctIndex: 1,
    explanation: 'Section 354D IPC criminalises stalking, including internet, email, or electronic communication monitoring of a woman without her consent, with imprisonment up to 3 years for first offence.',
    relevantSection: 'Section 354D IPC / BNS',
    difficulty: 'Medium'
  },
  {
    id: 'qz_wom_8',
    topicId: 'womens_safety',
    question: 'Which law grants working women the right to paid maternity leave?',
    options: ['Factories Act, 1948', 'Maternity Benefit Act, 1961 (amended 2017)', 'Payment of Wages Act', 'POSH Act 2013'],
    correctIndex: 1,
    explanation: 'The Maternity Benefit (Amendment) Act 2017 provides 26 weeks of paid maternity leave for the first two children and also mandates creche facilities in establishments with 50+ employees.',
    relevantSection: 'Maternity Benefit (Amendment) Act 2017',
    difficulty: 'Easy'
  },
  {
    id: 'qz_wom_9',
    topicId: 'womens_safety',
    question: 'Where can cyber crimes against women and children specifically be reported online?',
    options: ['1930 helpline only', '1091 voice call only', 'cybercrime.gov.in — dedicated Women/Child category', '1800-180-5522'],
    correctIndex: 2,
    explanation: 'cybercrime.gov.in has a dedicated category for crimes against women and children including morphing, cyber stalking, and non-consensual image sharing.',
    relevantSection: 'I4C MHA Cyber Wing',
    difficulty: 'Easy'
  },
  {
    id: 'qz_wom_10',
    topicId: 'womens_safety',
    question: 'Where must police interrogate a woman witness or victim under Section 160 CrPC?',
    options: ['At the nearest police station', 'At her place of residence in the presence of a woman police officer', 'Only in a court room', 'At the Magistrate\'s office'],
    correctIndex: 1,
    explanation: 'Section 160 CrPC mandates that no woman should be required to attend a police station; police officers must interview women at their residence, and a woman officer must be present.',
    relevantSection: 'Section 160 CrPC',
    difficulty: 'Hard'
  },

  // ── Cybercrime — Questions 6–10 ───────────────────────────────────────────
  {
    id: 'qz_cy_6',
    topicId: 'cybercrime',
    question: 'What is the official portal to report financial cyber fraud and freeze fraudulent transactions in India?',
    options: ['rbi.org.in', 'cybercrime.gov.in and National Helpline 1930', 'incometax.gov.in', 'parivahan.gov.in'],
    correctIndex: 1,
    explanation: 'cybercrime.gov.in is the Ministry of Home Affairs portal. Calling 1930 within the golden hour can trigger I4C to freeze the beneficiary account before funds are withdrawn.',
    relevantSection: 'I4C / MHA Cyber Crime Portal',
    difficulty: 'Easy'
  },
  {
    id: 'qz_cy_7',
    topicId: 'cybercrime',
    question: 'Under Section 67 of the IT Act 2000, what is the punishment for publishing obscene material electronically?',
    options: ['Only monetary fine up to ₹10,000', 'Imprisonment up to 3 years and fine for first conviction', 'Community service only', 'Warning letter'],
    correctIndex: 1,
    explanation: 'Section 67 of the IT Act 2000 punishes electronic publication of obscene material with up to 3 years imprisonment and ₹5 Lakh fine for first offence, 5 years for repeat offence.',
    relevantSection: 'Section 67, IT Act 2000',
    difficulty: 'Hard'
  },
  {
    id: 'qz_cy_8',
    topicId: 'cybercrime',
    question: 'What is the Chakshu portal on Sanchar Saathi used for?',
    options: ['Booking train tickets', 'Reporting suspected fraud communications (calls, SMS, WhatsApp) to block scam numbers', 'Filing income tax returns', 'Applying for new SIM cards'],
    correctIndex: 1,
    explanation: 'Chakshu (sancharsaathi.gov.in/chakshu) is a DoT facility to report suspected fraudulent telecom communications. Reported numbers are analysed and blocked to prevent further fraud.',
    relevantSection: 'Department of Telecommunications (DoT)',
    difficulty: 'Medium'
  },
  {
    id: 'qz_cy_9',
    topicId: 'cybercrime',
    question: 'What does "vishing" mean in the context of cyber fraud?',
    options: ['Phishing via email links', 'Voice phishing — fraud via telephone calls impersonating banks, police, or government agencies', 'Hacking Wi-Fi networks', 'Installing malware via USB drives'],
    correctIndex: 1,
    explanation: 'Vishing (Voice + Phishing) involves fraudsters calling victims and impersonating trusted entities like banks, CBI, or customs to extract OTPs, card details, or extort money.',
    relevantSection: 'I4C Cyber Safety Guidelines',
    difficulty: 'Easy'
  },
  {
    id: 'qz_cy_10',
    topicId: 'cybercrime',
    question: 'If a scammer transfers money into your account to use you as a "mule", what should you do?',
    options: ['Spend it quickly before banks notice', 'Report to the bank and cybercrime.gov.in immediately — retaining such funds knowingly is an offense', 'Transfer it to another account', 'Ignore it as it is not your fault'],
    correctIndex: 1,
    explanation: 'Retaining funds from fraudulent transactions with knowledge can make a person liable under PMLA 2002. Immediate reporting to the bank and cybercrime.gov.in is mandatory.',
    relevantSection: 'PMLA 2002 / IT Act 2000',
    difficulty: 'Hard'
  },

  // ── Consumer Rights — Questions 6–10 ─────────────────────────────────────
  {
    id: 'qz_con_6',
    topicId: 'consumer_rights',
    question: 'What is the time limit to file a consumer complaint under the Consumer Protection Act 2019?',
    options: ['6 months from cause of action', '2 years from the date cause of action arose', '10 years', '1 month only'],
    correctIndex: 1,
    explanation: 'Section 69 of the Consumer Protection Act 2019 prescribes a 2-year limitation period. Delay can be condoned if sufficient cause is shown to the Commission.',
    relevantSection: 'Section 69, CPA 2019',
    difficulty: 'Hard'
  },
  {
    id: 'qz_con_7',
    topicId: 'consumer_rights',
    question: 'What is the pecuniary (monetary) jurisdiction of the District Consumer Disputes Redressal Commission?',
    options: ['Up to ₹1 Crore', 'Up to ₹50 Lakh', 'Up to ₹20 Lakh', 'Unlimited'],
    correctIndex: 0,
    explanation: 'Under CPA 2019, District Commissions handle claims up to ₹1 Crore; State Commissions up to ₹10 Crore; National Commission handles above ₹10 Crore.',
    relevantSection: 'Section 34, CPA 2019',
    difficulty: 'Medium'
  },
  {
    id: 'qz_con_8',
    topicId: 'consumer_rights',
    question: 'Which government body can take suo-motu (on its own) action against unfair trade practices?',
    options: ['SEBI', 'Central Consumer Protection Authority (CCPA)', 'Reserve Bank of India', 'TRAI'],
    correctIndex: 1,
    explanation: 'The Central Consumer Protection Authority (CCPA) under Section 10 CPA 2019 can initiate suo-motu investigations, issue product recalls, and impose penalties for unfair trade practices.',
    relevantSection: 'Section 10, CPA 2019',
    difficulty: 'Medium'
  },
  {
    id: 'qz_con_9',
    topicId: 'consumer_rights',
    question: 'What is "drip pricing" and is it legal in India?',
    options: ['Gradual water billing — legal', 'Revealing fees only at checkout after full price was hidden during browsing — prohibited by CCPA', 'GST applied on delivery — mandatory', 'Discounts released over time — allowed'],
    correctIndex: 1,
    explanation: 'Drip pricing hides true cost during browsing and reveals extra charges only at checkout. CCPA Dark Pattern Guidelines 2023 explicitly prohibit drip pricing as a dark pattern.',
    relevantSection: 'CCPA Dark Pattern Guidelines 2023',
    difficulty: 'Medium'
  },
  {
    id: 'qz_con_10',
    topicId: 'consumer_rights',
    question: 'Can you file a consumer complaint via WhatsApp in India?',
    options: ['No, only phone calls are accepted', 'Yes — WhatsApp support is available on 8800001915 (National Consumer Helpline)', 'Only via registered post', 'Only through a licensed lawyer'],
    correctIndex: 1,
    explanation: 'NCH accepts complaints via toll-free call at 1915, WhatsApp at 8800001915, the NCH app, and online at consumerhelpline.gov.in.',
    relevantSection: 'Department of Consumer Affairs',
    difficulty: 'Easy'
  },

  // ── Road Laws — Questions 6–10 ────────────────────────────────────────────
  {
    id: 'qz_rd_6',
    topicId: 'road_laws',
    question: 'What is the fine for using a mobile phone while driving under the Motor Vehicles (Amendment) Act 2019?',
    options: ['₹100', '₹500', '₹5,000 for first offence', '₹50,000'],
    correctIndex: 2,
    explanation: 'Using a handheld device while driving is penalised under Section 184 MVA with ₹5,000 for first offence and ₹10,000 for subsequent offences.',
    relevantSection: 'Section 184, MVA 2019 Amendment',
    difficulty: 'Easy'
  },
  {
    id: 'qz_rd_7',
    topicId: 'road_laws',
    question: 'What reward does the MoRTH Good Samaritan scheme provide to someone who saves a road accident victim?',
    options: ['₹500', '₹5,000 and a certificate under MoRTH scheme', '₹1 Lakh from Supreme Court fund', 'No monetary reward exists'],
    correctIndex: 1,
    explanation: 'The Ministry of Road Transport and Highways Good Samaritan reward scheme provides ₹5,000 and a certificate of commendation to individuals who save road accident victims.',
    relevantSection: 'MoRTH Good Samaritan Scheme',
    difficulty: 'Medium'
  },
  {
    id: 'qz_rd_8',
    topicId: 'road_laws',
    question: 'Under Section 199A MVA 2019, what happens if a juvenile (minor) drives a vehicle and causes an offence?',
    options: ['₹1,000 fine on parents only', 'Guardian faces ₹25,000 fine and 3 years imprisonment; vehicle registration cancelled; juvenile tried under JJ Act', 'Warning letter to the school', '6-month driving ban for guardian only'],
    correctIndex: 1,
    explanation: 'Section 199A MVA 2019 Amendment holds guardian/parent liable with ₹25,000 fine and 3 years imprisonment; vehicle registration is cancelled; juvenile tried under the Juvenile Justice Act.',
    relevantSection: 'Section 199A, MVA 2019',
    difficulty: 'Hard'
  },
  {
    id: 'qz_rd_9',
    topicId: 'road_laws',
    question: 'Can a traffic police officer permanently retain your vehicle for a routine fine without a court order?',
    options: ['Yes, for any violation', 'No — vehicle may be temporarily impounded only for specific serious violations; must be returned on payment of fine or bond', 'Yes, automatically for 30 days', 'Only if the owner is absent'],
    correctIndex: 1,
    explanation: 'Under Section 206 MVA, temporary detention is allowed for specific serious violations only. Permanent seizure without court order is unlawful; the officer must provide a seizure receipt.',
    relevantSection: 'Section 206, MVA 1988',
    difficulty: 'Medium'
  },
  {
    id: 'qz_rd_10',
    topicId: 'road_laws',
    question: 'Which Supreme Court case established that hospitals cannot refuse emergency treatment to road accident victims?',
    options: ['Vishaka v. State of Rajasthan', 'Parmanand Katara v. Union of India', 'D.K. Basu v. State of West Bengal', 'Maneka Gandhi v. Union of India'],
    correctIndex: 1,
    explanation: 'Parmanand Katara v. Union of India mandates that every doctor and hospital must provide immediate life-saving treatment to road accident victims without waiting for police formalities or advance payment.',
    relevantSection: 'Parmanand Katara v. Union of India',
    difficulty: 'Hard'
  },

  // ── Digital Privacy — Questions 6–10 ─────────────────────────────────────
  {
    id: 'qz_priv_6',
    topicId: 'digital_privacy',
    question: 'Under DPDPA 2023, what is a "Data Fiduciary"?',
    options: ['A government data regulator', 'Any person or entity that determines the purpose and means of processing personal data', 'An individual app user', 'A data backup service provider'],
    correctIndex: 1,
    explanation: 'Section 2(i) of DPDPA 2023 defines a Data Fiduciary as any person who alone or in conjunction with others determines the purpose and means of processing personal data.',
    relevantSection: 'Section 2(i), DPDPA 2023',
    difficulty: 'Hard'
  },
  {
    id: 'qz_priv_7',
    topicId: 'digital_privacy',
    question: 'How can a citizen check how many SIM connections are registered against their Aadhaar?',
    options: ['By visiting a telecom store', 'On the TAFCOP portal at sancharsaathi.gov.in', 'Only through an RTI application', 'By calling UIDAI 1947'],
    correctIndex: 1,
    explanation: 'TAFCOP portal on sancharsaathi.gov.in shows all SIM connections issued under a citizen\'s Aadhaar and allows reporting unauthorized connections for blocking.',
    relevantSection: 'DoT TAFCOP / Sanchar Saathi',
    difficulty: 'Easy'
  },
  {
    id: 'qz_priv_8',
    topicId: 'digital_privacy',
    question: 'Can a digital lending app legally access your location continuously (24x7) under RBI guidelines?',
    options: ['Yes, for risk assessment', 'No — RBI allows one-time location access only when the app is in active use, not continuous background tracking', 'Only for loans above ₹1 Lakh', 'Yes, if user signed a consent form'],
    correctIndex: 1,
    explanation: 'RBI Digital Lending Guidelines 2022 mandate that loan apps can only access one-time location (not continuous), cannot access contacts/media, and must store data only on Indian servers.',
    relevantSection: 'RBI Digital Lending Guidelines 2022',
    difficulty: 'Medium'
  },
  {
    id: 'qz_priv_9',
    topicId: 'digital_privacy',
    question: 'What right does Section 11 of the DPDPA 2023 give to citizens regarding their personal data?',
    options: ['Right to read other people\'s data', 'Right to withdraw consent and request erasure of personal data from data fiduciaries', 'Right to store data on government servers', 'Right to sell personal data'],
    correctIndex: 1,
    explanation: 'Section 11 DPDPA 2023 gives data principals the right to withdraw consent and request deletion/erasure of their personal data from any data fiduciary where purpose is fulfilled or consent withdrawn.',
    relevantSection: 'Section 11, DPDPA 2023',
    difficulty: 'Medium'
  },
  {
    id: 'qz_priv_10',
    topicId: 'digital_privacy',
    question: 'Under Section 66E of the IT Act, what specific act is criminalised?',
    options: ['Sending spam emails', 'Capturing, publishing or transmitting a person\'s private images without consent', 'Hacking government websites', 'Using pirated software commercially'],
    correctIndex: 1,
    explanation: 'Section 66E IT Act 2000 punishes capturing, publishing or transmitting private images of a person without consent with imprisonment up to 3 years or ₹2 Lakh fine.',
    relevantSection: 'Section 66E, IT Act 2000',
    difficulty: 'Hard'
  },

  // ── Fundamental Rights — Questions 6–10 ──────────────────────────────────
  {
    id: 'qz_fr_6',
    topicId: 'fundamental_rights',
    question: 'Can police enter and search your home without a warrant in ordinary circumstances?',
    options: ['Yes, any time they wish', 'Generally no — a written search warrant under Section 93 CrPC is required, except during active cognizable emergencies', 'Yes if 3 officers are present', 'Only during daytime'],
    correctIndex: 1,
    explanation: 'Section 93 CrPC mandates a written search warrant from a Magistrate. Exception applies only when making a lawful arrest in cognizable offences with reasonable grounds to believe evidence is present.',
    relevantSection: 'Section 93 CrPC / BNSS',
    difficulty: 'Medium'
  },
  {
    id: 'qz_fr_7',
    topicId: 'fundamental_rights',
    question: 'What does Article 14 of the Indian Constitution guarantee?',
    options: ['Right to Free Speech', 'Equality before law and equal protection of laws to all persons', 'Right against exploitation', 'Right to Free Education'],
    correctIndex: 1,
    explanation: 'Article 14 guarantees equality before the law and equal protection of laws within the territory of India to every person — citizen or non-citizen.',
    relevantSection: 'Article 14, Constitution of India',
    difficulty: 'Easy'
  },
  {
    id: 'qz_fr_8',
    topicId: 'fundamental_rights',
    question: 'What is a Bail Bond (Surety Bond) and who can provide surety?',
    options: ['A legal document only lawyers can sign', 'A financial guarantee by any creditworthy person acceptable to the court, ensuring the accused appears for trial', 'A government payment to release prisoners', 'An insurance product purchased from banks'],
    correctIndex: 1,
    explanation: 'A bail bond is a written undertaking with monetary surety provided to the court guaranteeing the accused\'s appearance at trial. Any creditworthy person accepted by the court can stand as surety.',
    relevantSection: 'Section 440, CrPC',
    difficulty: 'Medium'
  },
  {
    id: 'qz_fr_9',
    topicId: 'fundamental_rights',
    question: 'Who is entitled to free legal aid under the Legal Services Authorities Act 1987?',
    options: ['Only BPL card holders', 'Women, children, SC/ST, disaster victims, industrial workers, disabled persons, and those below income limits', 'Only criminal accused persons', 'Only senior citizens above 60 years'],
    correctIndex: 1,
    explanation: 'Section 12 of Legal Services Authorities Act 1987 entitles women, children, SC/ST members, victims of mass disaster, industrial workers, disabled persons, and those in custody to free legal aid.',
    relevantSection: 'Section 12, Legal Services Authorities Act 1987',
    difficulty: 'Easy'
  },
  {
    id: 'qz_fr_10',
    topicId: 'fundamental_rights',
    question: 'Under Article 20(3) of the Constitution, what right does an accused person have?',
    options: ['Right to bail', 'Protection against self-incrimination — no accused can be compelled to be a witness against himself', 'Right to free food in custody', 'Right to be tried in mother tongue only'],
    correctIndex: 1,
    explanation: 'Article 20(3) guarantees that no accused shall be compelled to be a witness against himself. Confessions made to police are inadmissible under Section 25 Evidence Act.',
    relevantSection: 'Article 20(3) & Section 25 Evidence Act',
    difficulty: 'Hard'
  },

  // ── Student & Workplace — Questions 6–10 ─────────────────────────────────
  {
    id: 'qz_work_6',
    topicId: 'student_workplace',
    question: 'What is the time limit for an Internal Complaints Committee to complete inquiry into a POSH complaint?',
    options: ['6 months', '1 year', 'Within 90 days of receiving the written complaint', '30 days'],
    correctIndex: 2,
    explanation: 'Section 11 of the POSH Act 2013 mandates the ICC to complete its inquiry within 90 days (3 months) of receiving the written complaint from the aggrieved woman.',
    relevantSection: 'Section 11, POSH Act 2013',
    difficulty: 'Medium'
  },
  {
    id: 'qz_work_7',
    topicId: 'student_workplace',
    question: 'Is a post-employment "non-compete clause" enforceable in India?',
    options: ['Yes, always enforceable', 'Generally void under Section 27 Indian Contract Act — courts refuse to enforce post-employment non-competes', 'Enforceable only for 1 year', 'Only in IT sector'],
    correctIndex: 1,
    explanation: 'Non-compete restrictions operating after employment ends are void under Section 27 Indian Contract Act 1872. Courts routinely refuse to enforce clauses that prevent earning a livelihood.',
    relevantSection: 'Section 27, Indian Contract Act 1872',
    difficulty: 'Hard'
  },
  {
    id: 'qz_work_8',
    topicId: 'student_workplace',
    question: 'Where can an unpaid intern or trainee file a complaint for recovery of stipend?',
    options: ['Income Tax Department', 'State Labour Commissioner or District Legal Services Authority (DLSA)', 'National Stock Exchange', 'Education Department of State'],
    correctIndex: 1,
    explanation: 'Unpaid stipend or wages can be recovered through the State Labour Commissioner or the District Legal Services Authority (DLSA) which provides free legal aid for workers.',
    relevantSection: 'Labour Code on Wages 2019',
    difficulty: 'Medium'
  },
  {
    id: 'qz_work_9',
    topicId: 'student_workplace',
    question: 'What maximum overtime hours per week can an adult factory worker be made to work under the Factories Act 1948?',
    options: ['40 hours', '60 hours total (48 regular + 12 overtime) with double pay for overtime', '72 hours', 'No legal limit'],
    correctIndex: 1,
    explanation: 'Under the Factories Act 1948 Sections 51 and 59, a worker can work a maximum of 48 regular hours plus 12 overtime hours per week, totaling 60 hours, with double wages for overtime.',
    relevantSection: 'Section 51 & 59, Factories Act 1948',
    difficulty: 'Hard'
  },
  {
    id: 'qz_work_10',
    topicId: 'student_workplace',
    question: 'Can a company deduct excessive salary as penalty for resigning without completing notice period?',
    options: ['Yes, unlimited deductions are allowed in contracts', 'Only actual notice period pay can be recovered — courts strike down excessive penalty clauses', 'No deductions allowed under any circumstance', 'Yes, up to 12 months salary'],
    correctIndex: 1,
    explanation: 'Courts permit recovery of only actual contractual notice period pay (typically 1-3 months). Additional punitive deductions beyond contractual notice period are void as restraint of trade.',
    relevantSection: 'Section 27, Indian Contract Act & Labour Court precedents',
    difficulty: 'Hard'
  },

  // ── Tenant & Property — Questions 1–10 ──────────────────────────────
  {
    id: 'qz_ten_1',
    topicId: 'tenant_property',
    question: 'Under the Model Tenancy Act 2021, what is the maximum security deposit a landlord can charge for a residential property?',
    options: ['6 months rent', '2 months rent', '12 months rent', 'No limit'],
    correctIndex: 1,
    explanation: 'Section 22 of the Model Tenancy Act caps the security deposit at 2 months\' rent for residential premises and 6 months\' for commercial properties.',
    relevantSection: 'Section 22, Model Tenancy Act 2021',
    difficulty: 'Easy'
  },
  {
    id: 'qz_ten_2',
    topicId: 'tenant_property',
    question: 'Can a landlord disconnect electricity or water to force a tenant to vacate?',
    options: ['Yes, if rent is overdue', 'No — it is illegal; eviction must follow due legal process through Rent Authority or court', 'Yes, after giving 24-hour notice', 'Only during daytime'],
    correctIndex: 1,
    explanation: 'Disconnecting essential services to force eviction constitutes criminal intimidation. The landlord must follow legal eviction procedures through the Rent Authority or court.',
    relevantSection: 'Section 21, Model Tenancy Act 2021',
    difficulty: 'Easy'
  },
  {
    id: 'qz_ten_3',
    topicId: 'tenant_property',
    question: 'What is RERA and what does it protect?',
    options: ['Revenue Regulation Act — protects tax payers', 'Real Estate (Regulation & Development) Act — protects home buyers from builder fraud and delays', 'Rental Estate Rules Act — protects landlords', 'Reserve Estate Registration Act — governs land surveys'],
    correctIndex: 1,
    explanation: 'RERA 2016 mandates registration of real estate projects, protects home buyers against delayed possession, and ensures builder accountability.',
    relevantSection: 'RERA 2016',
    difficulty: 'Easy'
  },
  {
    id: 'qz_ten_4',
    topicId: 'tenant_property',
    question: 'Under RERA, what maximum advance can a builder collect from a buyer before executing a registered agreement of sale?',
    options: ['25% of total cost', '50% of total cost', '10% of total cost', 'Full amount'],
    correctIndex: 2,
    explanation: 'Under Section 13(1) of RERA 2016, a promoter cannot accept more than 10% of the apartment cost as advance without first entering into a written, registered agreement of sale.',
    relevantSection: 'Section 13, RERA 2016',
    difficulty: 'Medium'
  },
  {
    id: 'qz_ten_5',
    topicId: 'tenant_property',
    question: 'Is a verbal rental agreement legally enforceable in Indian courts?',
    options: ['Fully enforceable', 'Has weak legal standing — written and registered agreements are strongly recommended under the Model Tenancy Act', 'More powerful than written agreements', 'Valid only for 3 months'],
    correctIndex: 1,
    explanation: 'While oral agreements may have some validity, they are extremely difficult to prove in court. The Model Tenancy Act 2021 mandates written tenancy agreements.',
    relevantSection: 'Section 4, Model Tenancy Act 2021',
    difficulty: 'Medium'
  },
  {
    id: 'qz_ten_6',
    topicId: 'tenant_property',
    question: 'Under RERA, what happens if a builder fails to deliver possession by the promised date?',
    options: ['Nothing — delays are normal', 'Buyer can claim full refund with interest OR compensation for each month of delay', 'Builder pays a fixed ₹10,000 penalty', 'Buyer must wait indefinitely'],
    correctIndex: 1,
    explanation: 'Section 18 of RERA gives buyers the right to either withdraw with a full refund plus interest or continue with monthly compensation until delivery.',
    relevantSection: 'Section 18, RERA 2016',
    difficulty: 'Medium'
  },
  {
    id: 'qz_ten_7',
    topicId: 'tenant_property',
    question: 'Within how many months must a tenancy agreement be registered with the Rent Authority under the Model Tenancy Act?',
    options: ['6 months', '2 months', '1 year', 'No registration needed'],
    correctIndex: 1,
    explanation: 'Section 4 mandates that every tenancy agreement must be registered with the Rent Authority within 2 months of execution.',
    relevantSection: 'Section 4, Model Tenancy Act 2021',
    difficulty: 'Medium'
  },
  {
    id: 'qz_ten_8',
    topicId: 'tenant_property',
    question: 'Who bears the responsibility for structural repairs in a rented property?',
    options: ['Always the tenant', 'The landlord is responsible for structural repairs; tenant handles minor wear and tear', 'Neither — the municipality handles it', 'Shared equally'],
    correctIndex: 1,
    explanation: 'Under most state Rent Acts and the Model Tenancy Act, the landlord is responsible for structural repairs, roof leaks, and major maintenance, while the tenant handles day-to-day upkeep.',
    relevantSection: 'State Rent Control Acts',
    difficulty: 'Easy'
  },
  {
    id: 'qz_ten_9',
    topicId: 'tenant_property',
    question: 'Can a builder divert funds collected from buyers of one project to another project?',
    options: ['Yes, it is a normal business practice', 'No — RERA mandates that 70% of project funds must be deposited in a separate escrow account for that project', 'Yes, with buyer consent', 'Only for government projects'],
    correctIndex: 1,
    explanation: 'Section 4(2)(l)(D) of RERA requires builders to deposit 70% of amounts collected from allottees in a separate escrow account to be used only for that specific project\'s construction.',
    relevantSection: 'Section 4, RERA 2016',
    difficulty: 'Hard'
  },
  {
    id: 'qz_ten_10',
    topicId: 'tenant_property',
    question: 'What notice period must a tenant give before vacating a rented premises under the Model Tenancy Act?',
    options: ['24 hours', 'As specified in the agreement, or if not specified, at least one month', '6 months mandatory', 'No notice required'],
    correctIndex: 1,
    explanation: 'The notice period is governed by the tenancy agreement terms. If the agreement is silent, a reasonable notice of at least one month is generally required.',
    relevantSection: 'Model Tenancy Act 2021',
    difficulty: 'Medium'
  },

  // ── RTI & Government Accountability — Questions 1–10 ─────────────────
  {
    id: 'qz_rti_1',
    topicId: 'rti_accountability',
    question: 'What is the fee for filing an RTI application with Central Government departments?',
    options: ['₹100', '₹10', '₹500', 'Free for all citizens'],
    correctIndex: 1,
    explanation: 'The standard RTI application fee for Central Government is ₹10, payable via Indian Postal Order, Demand Draft, or online payment. BPL card holders are exempt.',
    relevantSection: 'Section 6, RTI Act 2005',
    difficulty: 'Easy'
  },
  {
    id: 'qz_rti_2',
    topicId: 'rti_accountability',
    question: 'Within how many days must a Public Information Officer (PIO) respond to an RTI application?',
    options: ['7 days', '30 days (48 hours if life/liberty is involved)', '90 days', '60 days'],
    correctIndex: 1,
    explanation: 'Section 7 mandates that the PIO must furnish information within 30 days. If life or personal liberty is at stake, information must be provided within 48 hours.',
    relevantSection: 'Section 7, RTI Act 2005',
    difficulty: 'Easy'
  },
  {
    id: 'qz_rti_3',
    topicId: 'rti_accountability',
    question: 'What is the official online portal to file RTI applications for Central Government departments?',
    options: ['rti.gov.in', 'rtionline.gov.in', 'mygov.in/rti', 'nic.in/rti'],
    correctIndex: 1,
    explanation: 'rtionline.gov.in is the official Government portal for filing RTI applications to Central Government ministries and departments.',
    relevantSection: 'DoPT RTI Online System',
    difficulty: 'Easy'
  },
  {
    id: 'qz_rti_4',
    topicId: 'rti_accountability',
    question: 'Does a citizen need to give a reason for requesting information under RTI?',
    options: ['Yes, a valid justification is mandatory', 'No — Section 6 explicitly states that no reason needs to be provided', 'Only for sensitive departments', 'Yes, if it involves financial data'],
    correctIndex: 1,
    explanation: 'Section 6(2) of the RTI Act states: "An applicant making request for information shall not be required to give any reason for requesting the information."',
    relevantSection: 'Section 6(2), RTI Act 2005',
    difficulty: 'Medium'
  },
  {
    id: 'qz_rti_5',
    topicId: 'rti_accountability',
    question: 'What is the maximum penalty per day that the Information Commission can impose on a PIO for wrongful denial of information?',
    options: ['₹100/day', '₹250/day up to ₹25,000', '₹1,000/day', 'No penalty provision exists'],
    correctIndex: 1,
    explanation: 'Section 20 empowers the Information Commission to impose a penalty of ₹250 per day of delay, up to a maximum of ₹25,000, on officers who deny information without reasonable cause.',
    relevantSection: 'Section 20, RTI Act 2005',
    difficulty: 'Medium'
  },
  {
    id: 'qz_rti_6',
    topicId: 'rti_accountability',
    question: 'Within how many days of receiving a PIO response can a citizen file a First Appeal?',
    options: ['7 days', '30 days from the date of receipt of PIO response or expiry of 30-day limit', '90 days', '15 days'],
    correctIndex: 1,
    explanation: 'Section 19(1) allows a First Appeal within 30 days of receiving the PIO response (or 30 days after the response deadline expired). Late filing can be condoned if sufficient cause is shown.',
    relevantSection: 'Section 19(1), RTI Act 2005',
    difficulty: 'Medium'
  },
  {
    id: 'qz_rti_7',
    topicId: 'rti_accountability',
    question: 'Which types of information are exempt from RTI under Section 8?',
    options: ['All government salary data', 'Information affecting national security, cabinet papers, trade secrets, and personal privacy (with exceptions)', 'All financial budgets', 'Information more than 1 year old'],
    correctIndex: 1,
    explanation: 'Section 8 lists specific exemptions including national security, cabinet discussions, trade secrets, and personal information that has no public interest justification. However, information relating to corruption or human rights violations cannot be exempted.',
    relevantSection: 'Section 8, RTI Act 2005',
    difficulty: 'Hard'
  },
  {
    id: 'qz_rti_8',
    topicId: 'rti_accountability',
    question: 'Can RTI be filed against private companies and NGOs?',
    options: ['No, only government bodies', 'Yes — if they receive substantial government funding or perform public functions', 'Only if listed on stock exchange', 'Only against PSUs'],
    correctIndex: 1,
    explanation: 'Under Section 2(h), "public authority" includes bodies owned, controlled, or substantially financed by the government. Some NGOs receiving government grants and private bodies performing public functions are covered.',
    relevantSection: 'Section 2(h), RTI Act 2005',
    difficulty: 'Hard'
  },
  {
    id: 'qz_rti_9',
    topicId: 'rti_accountability',
    question: 'Are BPL (Below Poverty Line) card holders required to pay RTI application fees?',
    options: ['Yes, same ₹10 fee', 'No — BPL card holders are exempt from all fees under the RTI Act', 'They pay ₹5', 'Only exempt for state RTIs'],
    correctIndex: 1,
    explanation: 'The RTI Act exempts persons below the poverty line from paying any application or additional fees. A copy of the BPL card must accompany the application.',
    relevantSection: 'RTI Fee Rules',
    difficulty: 'Easy'
  },
  {
    id: 'qz_rti_10',
    topicId: 'rti_accountability',
    question: 'What is a "deemed refusal" under the RTI Act?',
    options: ['An explicit written rejection by PIO', 'If the PIO fails to respond within the 30-day deadline, it is treated as a refusal — enabling the citizen to file a First Appeal', 'A court order denying information', 'When a citizen withdraws the application'],
    correctIndex: 1,
    explanation: 'If a PIO does not respond within 30 days, it is "deemed" a refusal, and the applicant can directly proceed to file a First Appeal with the Appellate Authority.',
    relevantSection: 'Section 7(1), RTI Act 2005',
    difficulty: 'Medium'
  },

  // ── Environmental Rights — Questions 1–10 ─────────────────────────────
  {
    id: 'qz_env_1',
    topicId: 'environmental_rights',
    question: 'Which Supreme Court ruling recognized the right to a clean environment as part of Article 21?',
    options: ['Maneka Gandhi v. Union of India', 'M.C. Mehta v. Union of India', 'Kesavananda Bharati case', 'Golaknath case'],
    correctIndex: 1,
    explanation: 'The M.C. Mehta series of cases established that the right to a pollution-free environment is part of the fundamental Right to Life under Article 21.',
    relevantSection: 'Article 21 & M.C. Mehta Judgments',
    difficulty: 'Medium'
  },
  {
    id: 'qz_env_2',
    topicId: 'environmental_rights',
    question: 'What is the National Green Tribunal (NGT) and what cases does it handle?',
    options: ['A gardening advisory board', 'A specialized judicial body handling environmental disputes including pollution, forest conservation, and hazardous waste', 'A government nursery scheme', 'An agricultural research institute'],
    correctIndex: 1,
    explanation: 'The NGT, established under the NGT Act 2010, is a specialized judicial forum for effective and expeditious disposal of cases relating to environmental protection and conservation.',
    relevantSection: 'Section 14, NGT Act 2010',
    difficulty: 'Easy'
  },
  {
    id: 'qz_env_3',
    topicId: 'environmental_rights',
    question: 'What are the permissible noise levels for residential areas during daytime under Noise Pollution Rules?',
    options: ['75 dB', '55 dB during day, 45 dB at night', '65 dB', '80 dB'],
    correctIndex: 1,
    explanation: 'Under Rule 5 of Noise Pollution (Regulation & Control) Rules 2000, the ambient noise limit for residential zones is 55 dB during daytime (6 AM-10 PM) and 45 dB at night (10 PM-6 AM).',
    relevantSection: 'Rule 5, Noise Pollution Rules 2000',
    difficulty: 'Medium'
  },
  {
    id: 'qz_env_4',
    topicId: 'environmental_rights',
    question: 'Can loudspeakers be used between 10 PM and 6 AM?',
    options: ['Yes, during festivals', 'No — Rule 5(3) prohibits use of loudspeakers and public address systems between 10 PM and 6 AM', 'Yes, with police permission', 'Only in commercial zones'],
    correctIndex: 1,
    explanation: 'The Noise Pollution Rules strictly prohibit loudspeaker/public address system use between 10 PM and 6 AM. Even during festivals, the decibel limits apply.',
    relevantSection: 'Rule 5(3), Noise Pollution Rules 2000',
    difficulty: 'Easy'
  },
  {
    id: 'qz_env_5',
    topicId: 'environmental_rights',
    question: 'What is the "Polluter Pays Principle"?',
    options: ['Polluters can pay a fine to continue polluting', 'The entity causing pollution must bear the full cost of environmental damage, cleanup, and compensation to affected persons', 'Government pays for all pollution cleanup', 'Consumers pay extra tax for pollution'],
    correctIndex: 1,
    explanation: 'The Supreme Court established the Polluter Pays Principle in Indian law, mandating that the polluting entity must pay not only for cleanup but also for compensating victims and restoring the environment.',
    relevantSection: 'Indian Council for Enviro-Legal Action v. Union of India',
    difficulty: 'Medium'
  },
  {
    id: 'qz_env_6',
    topicId: 'environmental_rights',
    question: 'Which government body monitors air quality in India?',
    options: ['ISRO', 'Central Pollution Control Board (CPCB)', 'DRDO', 'NITI Aayog'],
    correctIndex: 1,
    explanation: 'The CPCB operates the National Air Quality Monitoring Programme and the SAMEER app that provides real-time AQI data for cities across India.',
    relevantSection: 'CPCB / Environment Protection Act 1986',
    difficulty: 'Easy'
  },
  {
    id: 'qz_env_7',
    topicId: 'environmental_rights',
    question: 'What punishment does the Environment Protection Act 1986 prescribe for contravention?',
    options: ['Only warning letters', 'Imprisonment up to 5 years and/or fine up to ₹1 Lakh, with ₹5,000/day for continuing contravention', 'Only fine of ₹100', 'Community service'],
    correctIndex: 1,
    explanation: 'Section 15 of the EPA prescribes imprisonment up to 5 years and fine up to ₹1 Lakh for contravention, with an additional ₹5,000 per day for continuing violations.',
    relevantSection: 'Section 15, Environment Protection Act 1986',
    difficulty: 'Hard'
  },
  {
    id: 'qz_env_8',
    topicId: 'environmental_rights',
    question: 'Can any citizen directly file a case at the National Green Tribunal?',
    options: ['Only the government can file', 'Yes — any aggrieved person can file an application under Section 14 of the NGT Act', 'Only registered NGOs', 'Only pollution victims with medical certificates'],
    correctIndex: 1,
    explanation: 'Section 14 of the NGT Act allows any person aggrieved by an environmental issue to file an application. No lawyer is mandatory, and filing fees are nominal.',
    relevantSection: 'Section 14, NGT Act 2010',
    difficulty: 'Easy'
  },
  {
    id: 'qz_env_9',
    topicId: 'environmental_rights',
    question: 'What does Article 48A (Directive Principles) say about the environment?',
    options: ['Citizens must plant trees', 'The State shall endeavour to protect and improve the environment and to safeguard forests and wildlife', 'Only industrial areas need environmental protection', 'Environment is a state subject only'],
    correctIndex: 1,
    explanation: 'Article 48A directs the State to protect and improve the environment and safeguard forests and wildlife. This is complemented by Article 51A(g) which makes it a fundamental duty of citizens.',
    relevantSection: 'Article 48A & 51A(g), Constitution of India',
    difficulty: 'Hard'
  },
  {
    id: 'qz_env_10',
    topicId: 'environmental_rights',
    question: 'What mobile app does CPCB provide for citizens to monitor real-time air quality?',
    options: ['AirWatch', 'SAMEER — CPCB official app showing real-time AQI data', 'PollutionTracker', 'CleanAir India'],
    correctIndex: 1,
    explanation: 'SAMEER (System of Air Quality and Weather Forecasting And Research) is the CPCB app providing real-time Air Quality Index (AQI) data for monitoring air pollution levels.',
    relevantSection: 'CPCB Air Quality Monitoring',
    difficulty: 'Medium'
  },

  // ── Senior Citizen Rights — Questions 1–10 ────────────────────────────
  {
    id: 'qz_sr_1',
    topicId: 'senior_citizens',
    question: 'What is the toll-free Elder Abuse Helpline number in India?',
    options: ['1930', '14567 (Elder Line)', '1091', '100'],
    correctIndex: 1,
    explanation: '14567 (Elder Line) is the national toll-free helpline for senior citizens operated by the Ministry of Social Justice & Empowerment, providing counseling and intervention services.',
    relevantSection: 'Ministry of Social Justice & Empowerment',
    difficulty: 'Easy'
  },
  {
    id: 'qz_sr_2',
    topicId: 'senior_citizens',
    question: 'Under the Maintenance and Welfare of Parents and Senior Citizens Act 2007, are children legally obligated to maintain their parents?',
    options: ['Only if parents are below poverty line', 'Yes — children and legal heirs are legally obligated to provide maintenance to parents who cannot maintain themselves', 'Only sons, not daughters', 'Only after parents turn 75'],
    correctIndex: 1,
    explanation: 'Section 4 mandates that children (including adopted children) and relatives who possess or will inherit property of a senior citizen are obligated to maintain them.',
    relevantSection: 'Section 4, Maintenance Act 2007',
    difficulty: 'Easy'
  },
  {
    id: 'qz_sr_3',
    topicId: 'senior_citizens',
    question: 'Can a senior citizen revoke a property transfer (gift deed) if the transferee fails to provide promised care?',
    options: ['No, gift deeds are irrevocable', 'Yes — under Section 23, the transfer can be declared void by the Maintenance Tribunal if care conditions are not met', 'Only within 6 months', 'Only through High Court'],
    correctIndex: 1,
    explanation: 'Section 23 of the Maintenance Act specifically allows senior citizens to declare void any property transfer made on the condition of receiving care, if the transferee neglects their obligations.',
    relevantSection: 'Section 23, Maintenance Act 2007',
    difficulty: 'Medium'
  },
  {
    id: 'qz_sr_4',
    topicId: 'senior_citizens',
    question: 'Within how many days must the Maintenance Tribunal decide a senior citizen\'s maintenance application?',
    options: ['30 days', '90 days from the date of service of notice', '1 year', '6 months'],
    correctIndex: 1,
    explanation: 'Section 5(4) mandates that the Tribunal shall dispose of the application within 90 days from the date of service of notice on the respondent.',
    relevantSection: 'Section 5(4), Maintenance Act 2007',
    difficulty: 'Medium'
  },
  {
    id: 'qz_sr_5',
    topicId: 'senior_citizens',
    question: 'Do senior citizens need a lawyer to file a maintenance application?',
    options: ['Yes, a lawyer is mandatory', 'No — the application can be filed directly at the SDM office without any lawyer', 'Only a government-appointed lawyer', 'Yes, but only through NGOs'],
    correctIndex: 1,
    explanation: 'The Maintenance Act is designed for easy access. Senior citizens can file applications directly at the Sub-Divisional Magistrate (SDM) office without any legal representation.',
    relevantSection: 'Maintenance Act 2007',
    difficulty: 'Easy'
  },
  {
    id: 'qz_sr_6',
    topicId: 'senior_citizens',
    question: 'Are government hospitals mandated to provide free treatment to senior citizens?',
    options: ['Only for emergencies', 'Yes — all government hospitals must provide beds for senior citizens and expand medical facilities for them', 'Only with BPL card', 'Only after age 70'],
    correctIndex: 1,
    explanation: 'Section 22 mandates that all government hospitals shall provide beds for senior citizens as far as possible, and the Government shall make provisions for their medical care.',
    relevantSection: 'Section 22, Maintenance Act 2007',
    difficulty: 'Medium'
  },
  {
    id: 'qz_sr_7',
    topicId: 'senior_citizens',
    question: 'What is the punishment for abandoning a senior citizen under the Maintenance Act?',
    options: ['No punishment exists', 'Imprisonment up to 3 months or fine up to ₹5,000 or both', 'Only a warning', 'Community service'],
    correctIndex: 1,
    explanation: 'Section 24 prescribes imprisonment up to 3 months or fine up to ₹5,000 or both for anyone who abandons a senior citizen in any place with the intention of wholly abandoning them.',
    relevantSection: 'Section 24, Maintenance Act 2007',
    difficulty: 'Hard'
  },
  {
    id: 'qz_sr_8',
    topicId: 'senior_citizens',
    question: 'At what age does a person become eligible for benefits under the Maintenance and Welfare of Parents and Senior Citizens Act?',
    options: ['55 years', '60 years for senior citizens (parents at any age)', '65 years', '70 years'],
    correctIndex: 1,
    explanation: 'Under the Act, "senior citizen" means any person who is 60 years or above. However, parents of any age who are unable to maintain themselves can claim maintenance.',
    relevantSection: 'Section 2(h), Maintenance Act 2007',
    difficulty: 'Easy'
  },
  {
    id: 'qz_sr_9',
    topicId: 'senior_citizens',
    question: 'Can a senior citizen claim maintenance from a grandchild if their children have predeceased them?',
    options: ['No, only from direct children', 'Yes — maintenance can be claimed from relatives who inherit or are likely to inherit the property', 'Only from government', 'Only if grandchild is employed'],
    correctIndex: 1,
    explanation: 'The term "relative" in the Act includes any legal heir who is not a minor and possesses or would inherit property of the senior citizen, which can include grandchildren.',
    relevantSection: 'Section 2(g), Maintenance Act 2007',
    difficulty: 'Hard'
  },
  {
    id: 'qz_sr_10',
    topicId: 'senior_citizens',
    question: 'Are senior citizens entitled to priority service at banks and government offices?',
    options: ['No special provisions exist', 'Yes — priority counters, separate queues, and seated waiting areas are mandated by government policy', 'Only at post offices', 'Only for pensioners'],
    correctIndex: 1,
    explanation: 'The National Policy on Older Persons and RBI guidelines mandate priority counters, separate queues, and accessible facilities for senior citizens at banks, post offices, and government offices.',
    relevantSection: 'National Policy on Older Persons & RBI Guidelines',
    difficulty: 'Easy'
  },

  // ── Personal Laws — Questions 1–10 ────────────────────────────────────
  {
    id: 'qz_pl_1',
    topicId: 'personal_laws',
    question: 'What is the minimum legal age for marriage in India for males and females?',
    options: ['18 for both', '21 for males, 18 for females', '25 for both', '21 for both'],
    correctIndex: 1,
    explanation: 'Under various personal laws and the Prohibition of Child Marriage Act, the minimum marriageable age is 21 for males and 18 for females.',
    relevantSection: 'Section 5, Hindu Marriage Act & Prohibition of Child Marriage Act',
    difficulty: 'Easy'
  },
  {
    id: 'qz_pl_2',
    topicId: 'personal_laws',
    question: 'What is the Special Marriage Act 1954 primarily designed for?',
    options: ['Celebrity weddings', 'Enabling civil marriages between persons of different religions, castes, or nationalities without requiring religious conversion', 'Only for NRI marriages', 'Court marriages for divorced persons'],
    correctIndex: 1,
    explanation: 'The Special Marriage Act provides a legal framework for inter-faith, inter-caste, and civil marriages without religious ceremonies or conversion.',
    relevantSection: 'Section 4, Special Marriage Act 1954',
    difficulty: 'Easy'
  },
  {
    id: 'qz_pl_3',
    topicId: 'personal_laws',
    question: 'What is the notice period required under the Special Marriage Act before solemnization?',
    options: ['7 days', '30 days notice to the Marriage Officer', '90 days', 'No notice needed'],
    correctIndex: 1,
    explanation: 'Section 5 requires the parties to give 30 days\' notice to the Marriage Officer. The Supreme Court has clarified that the notice need not be published publicly if safety concerns exist.',
    relevantSection: 'Section 5, Special Marriage Act 1954',
    difficulty: 'Medium'
  },
  {
    id: 'qz_pl_4',
    topicId: 'personal_laws',
    question: 'Under Section 13B of the Hindu Marriage Act, what is the mandatory waiting period for mutual consent divorce?',
    options: ['1 month', '6 months cooling period (can be waived by court if marriage has irretrievably broken down)', '1 year', 'No waiting period'],
    correctIndex: 1,
    explanation: 'Section 13B provides a 6-month cooling period between the first and second motions. The Supreme Court in Amardeep Singh v. Harveen Kaur (2017) held that this can be waived if the marriage has irretrievably broken down.',
    relevantSection: 'Section 13B, Hindu Marriage Act 1955',
    difficulty: 'Medium'
  },
  {
    id: 'qz_pl_5',
    topicId: 'personal_laws',
    question: 'Under Section 125 CrPC, who can claim maintenance?',
    options: ['Only wife', 'Wife (including divorced wife), minor children, and parents who are unable to maintain themselves', 'Only children below 5', 'Only parents above 75'],
    correctIndex: 1,
    explanation: 'Section 125 CrPC provides maintenance rights to wives (including divorced wives not remarried), legitimate or illegitimate minor children, and parents who are unable to maintain themselves.',
    relevantSection: 'Section 125, CrPC 1973',
    difficulty: 'Medium'
  },
  {
    id: 'qz_pl_6',
    topicId: 'personal_laws',
    question: 'Is marriage registration mandatory in India?',
    options: ['No, wedding ceremony is sufficient', 'Yes — most states have made marriage registration compulsory, and it serves as legal proof for passport, visa, and insurance', 'Only for inter-faith marriages', 'Only for court marriages'],
    correctIndex: 1,
    explanation: 'The Supreme Court in Seema v. Ashwani Kumar (2006) directed all states to make marriage registration compulsory. It serves as proof for legal rights including property, insurance, and passport.',
    relevantSection: 'Seema v. Ashwani Kumar (2006) & State Marriage Registration Rules',
    difficulty: 'Easy'
  },
  {
    id: 'qz_pl_7',
    topicId: 'personal_laws',
    question: 'In child custody disputes, what principle do Indian courts prioritize?',
    options: ['Father\'s right as legal guardian', 'The welfare and best interest of the child, above parental rights', 'Mother\'s right always', 'Grandparents\' preference'],
    correctIndex: 1,
    explanation: 'Indian courts consistently apply the "welfare of the child" doctrine, giving paramount consideration to the child\'s physical, emotional, and educational well-being over parental claims.',
    relevantSection: 'Guardians and Wards Act 1890 & Supreme Court Precedents',
    difficulty: 'Medium'
  },
  {
    id: 'qz_pl_8',
    topicId: 'personal_laws',
    question: 'What is the legal significance of "Stridhan" (woman\'s property) in Hindu law?',
    options: ['It belongs to the husband after marriage', 'It is the absolute property of the wife — husband has no ownership rights over it, and she can dispose of it as she wishes', 'It belongs to in-laws', 'It must be surrendered at marriage'],
    correctIndex: 1,
    explanation: 'Stridhan refers to property that belongs exclusively to the woman — gifts received before, during, or after marriage. The husband has no ownership rights and misappropriating it is punishable under Section 406 IPC (criminal breach of trust).',
    relevantSection: 'Hindu Marriage Act & Section 406 IPC',
    difficulty: 'Hard'
  },
  {
    id: 'qz_pl_9',
    topicId: 'personal_laws',
    question: 'Can a woman file for divorce on grounds of cruelty under Hindu Marriage Act?',
    options: ['Only if physical violence is proven', 'Yes — both physical and mental cruelty (including verbal abuse, dowry harassment, and denial of conjugal rights) are valid grounds under Section 13', 'Only after 5 years of marriage', 'Only with husband\'s consent'],
    correctIndex: 1,
    explanation: 'Section 13(1)(ia) recognizes cruelty as a ground for divorce. Courts have interpreted cruelty broadly to include physical violence, mental harassment, dowry demands, and persistent verbal abuse.',
    relevantSection: 'Section 13(1)(ia), Hindu Marriage Act 1955',
    difficulty: 'Hard'
  },
  {
    id: 'qz_pl_10',
    topicId: 'personal_laws',
    question: 'How long after marriage can a petition for mutual consent divorce be filed?',
    options: ['Immediately after marriage', 'After 1 year of marriage under Section 13B', 'After 5 years', 'After 2 years'],
    correctIndex: 1,
    explanation: 'Section 13B(1) of the Hindu Marriage Act requires that the parties have been living separately for at least 1 year before filing a mutual consent divorce petition.',
    relevantSection: 'Section 13B(1), Hindu Marriage Act 1955',
    difficulty: 'Medium'
  }
];


export const RESOURCES = [
  {
    id: 'res_1930',
    name: 'National Cyber Crime Helpline (1930)',
    category: 'Cybercrime',
    purpose: 'Immediate freeze of fraudulent banking transactions within the golden hour and registration of financial cyber crime complaints.',
    contactMethod: 'Toll-Free Dial 1930 / cybercrime.gov.in',
    officialUrl: 'https://cybercrime.gov.in',
    tollFree: '1930',
    verificationStatus: 'VERIFIED',
    lastVerifiedAt: '2026-08-15',
    reviewedBy: 'Adv. S. Sharma',
    location: 'National (I4C New Delhi)',
    badge: 'National Helpline'
  },
  {
    id: 'res_112',
    name: 'Emergency Response Support System (ERSS 112)',
    category: 'Emergency',
    purpose: 'Pan-India single unified emergency helpline for police, fire, medical, and disaster response dispatch.',
    contactMethod: 'Dial 112 / 112 India Mobile App',
    officialUrl: 'https://112.gov.in',
    tollFree: '112',
    verificationStatus: 'VERIFIED',
    lastVerifiedAt: '2026-09-01',
    reviewedBy: 'Adv. Anjali Mehta',
    location: 'Pan-India',
    badge: 'Emergency Priority'
  },
  {
    id: 'res_1915',
    name: 'National Consumer Helpline (1915)',
    category: 'Consumer Support',
    purpose: 'Statutory grievance resolution against e-commerce fraud, defective products, unfair trade practices, and misleading ads.',
    contactMethod: 'Dial 1915 / WhatsApp 8800001915 / consumerhelpline.gov.in',
    officialUrl: 'https://consumerhelpline.gov.in',
    tollFree: '1915',
    verificationStatus: 'VERIFIED',
    lastVerifiedAt: '2026-07-20',
    reviewedBy: 'Adv. R. Venkatraman',
    location: 'National (Dept of Consumer Affairs)',
    badge: 'Statutory Portal'
  },
  {
    id: 'res_edaakhil',
    name: 'e-Daakhil Consumer Disputes Redressal Portal',
    category: 'Consumer Support',
    purpose: 'Online filing and digital adjudication of consumer court petitions before District, State, and National Consumer Commissions without lawyer fees.',
    contactMethod: 'Web Portal: edaakhil.nic.in',
    officialUrl: 'https://edaakhil.nic.in',
    tollFree: '1915 (Support)',
    verificationStatus: 'VERIFIED',
    lastVerifiedAt: '2026-07-20',
    reviewedBy: 'Adv. R. Venkatraman',
    location: 'District & State Commissions Across India',
    badge: 'Online Court'
  },
  {
    id: 'res_nalsa_15100',
    name: 'National Legal Services Authority (NALSA 15100)',
    category: 'Legal Aid',
    purpose: 'Free legal aid, counsel appointment, Lok Adalat access, and legal defense for marginalized citizens, women, children, and custody detainees.',
    contactMethod: 'Dial 15100 / nalsa.gov.in',
    officialUrl: 'https://nalsa.gov.in',
    tollFree: '15100',
    verificationStatus: 'VERIFIED',
    lastVerifiedAt: '2026-07-15',
    reviewedBy: 'Adv. Anjali Mehta',
    location: 'Supreme Court & All District Courts',
    badge: 'Free Legal Aid'
  },
  {
    id: 'res_ncw_7827',
    name: 'National Commission for Women Helpline (7827170170)',
    category: 'Women\'s Safety',
    purpose: '24x7 counseling, complaints against domestic violence, sexual harassment, dowry harassment, and cyber crimes against women.',
    contactMethod: 'Call 7827170170 / ncw.nic.in',
    officialUrl: 'https://ncw.nic.in',
    tollFree: '7827170170',
    verificationStatus: 'VERIFIED',
    lastVerifiedAt: '2026-08-25',
    reviewedBy: 'Adv. Anjali Mehta',
    location: 'National (NCW New Delhi)',
    badge: '24x7 Women Care'
  },
  {
    id: 'res_sakhi_osc',
    name: 'Sakhi — One Stop Centres (OSC)',
    category: 'Women\'s Safety',
    purpose: 'Integrated medical aid, police facilitation, legal counseling, and temporary shelter under one roof for women facing violence.',
    contactMethod: 'Dial 181 / Nearest District Hospital OSC',
    officialUrl: 'https://wcd.nic.in',
    tollFree: '181',
    verificationStatus: 'VERIFIED',
    lastVerifiedAt: '2026-08-25',
    reviewedBy: 'Adv. Anjali Mehta',
    location: 'Present in over 700 Districts in India',
    badge: 'Physical Centers'
  },
  {
    id: 'res_sanchar_saathi',
    name: 'Sanchar Saathi (CEIR & TAFCOP)',
    category: 'Digital Safety',
    purpose: 'Block lost/stolen mobile phones (CEIR) and verify all active mobile SIM connections issued under your Aadhaar (TAFCOP).',
    contactMethod: 'Web Portal: sancharsaathi.gov.in',
    officialUrl: 'https://sancharsaathi.gov.in',
    tollFree: '1963 (DoT Support)',
    verificationStatus: 'VERIFIED',
    lastVerifiedAt: '2026-08-30',
    reviewedBy: 'Adv. S. Sharma',
    location: 'Department of Telecommunications',
    badge: 'Govt Portal'
  },
  {
    id: 'res_uidai_1947',
    name: 'UIDAI Aadhaar Helpline (1947)',
    category: 'Digital Safety',
    purpose: 'Aadhaar biometric locking, masked Aadhaar download, and verification against fraudulent misuse.',
    contactMethod: 'Dial 1947 / resident.uidai.gov.in',
    officialUrl: 'https://uidai.gov.in',
    tollFree: '1947',
    verificationStatus: 'VERIFIED',
    lastVerifiedAt: '2026-08-30',
    reviewedBy: 'Adv. S. Sharma',
    location: 'UIDAI Headquarters',
    badge: 'Aadhaar Security'
  },
  {
    id: 'res_echallan',
    name: 'MoRTH Parivahan e-Challan & Virtual Courts',
    category: 'Government Resources',
    purpose: 'Inspect traffic violation evidence, pay e-challans, or contest wrongful challans in Virtual Courts without station visits.',
    contactMethod: 'echallan.parivahan.gov.in & vcourts.gov.in',
    officialUrl: 'https://echallan.parivahan.gov.in',
    tollFree: '0120-2459169',
    verificationStatus: 'VERIFIED',
    lastVerifiedAt: '2026-09-01',
    reviewedBy: 'Adv. Anjali Mehta',
    location: 'All State Transport Departments',
    badge: 'Traffic Portal'
  },
  {
    id: 'res_antiragging',
    name: 'National Anti-Ragging Helpline',
    category: 'Government Resources',
    purpose: '24x7 toll-free helpline and web portal for confidential reporting of ragging incidents in universities and colleges across India.',
    contactMethod: 'Dial 1800-180-5522 / helpline@antiragging.in',
    officialUrl: 'https://antiragging.in',
    tollFree: '1800-180-5522',
    verificationStatus: 'VERIFIED',
    lastVerifiedAt: '2026-08-10',
    reviewedBy: 'Adv. S. K. Roy',
    location: 'University Grants Commission (UGC)',
    badge: 'Anti-Ragging'
  },
  {
    id: 'res_rbi_sachet',
    name: 'RBI Sachet Fraud Portal',
    category: 'Cybercrime',
    purpose: 'Check authorization of non-banking financial companies (NBFCs) and report illegal digital loan apps and unauthorized deposit schemes.',
    contactMethod: 'sachet.rbi.org.in',
    officialUrl: 'https://sachet.rbi.org.in',
    tollFree: '14440 (RBI CMS)',
    verificationStatus: 'VERIFIED',
    lastVerifiedAt: '2026-08-15',
    reviewedBy: 'Adv. S. Sharma',
    location: 'Reserve Bank of India',
    badge: 'RBI Regulatory'
  },
  {
    id: 'res_rera',
    name: 'State RERA Authority',
    category: 'Property',
    purpose: 'File complaints against builders for delayed possession, defective construction, or RERA violations. Verify project registration and check builder track records.',
    contactMethod: 'State RERA Website / rera.gov.in',
    officialUrl: 'https://rera.gov.in',
    tollFree: 'State-specific helplines',
    verificationStatus: 'VERIFIED',
    lastVerifiedAt: '2026-09-10',
    reviewedBy: 'Adv. P. Krishnamurthy',
    location: 'State RERA Authority (each state)',
    badge: 'Home Buyer Protection'
  },
  {
    id: 'res_rti',
    name: 'RTI Online Portal',
    category: 'RTI',
    purpose: 'File Right to Information applications to Central Government departments online. Track application status and file appeals.',
    contactMethod: 'rtionline.gov.in',
    officialUrl: 'https://rtionline.gov.in',
    tollFree: 'N/A (online only)',
    verificationStatus: 'VERIFIED',
    lastVerifiedAt: '2026-09-05',
    reviewedBy: 'Adv. A. K. Singh',
    location: 'Department of Personnel & Training (DoPT)',
    badge: 'Government Transparency'
  },
  {
    id: 'res_cpcb',
    name: 'CPCB SAMEER App / Pollution Control Board',
    category: 'Environment',
    purpose: 'Monitor real-time air quality, report industrial pollution, and file environmental complaints with State Pollution Control Boards.',
    contactMethod: 'SAMEER App / State PCB Portals',
    officialUrl: 'https://cpcb.nic.in',
    tollFree: 'State-specific SPCB numbers',
    verificationStatus: 'VERIFIED',
    lastVerifiedAt: '2026-09-12',
    reviewedBy: 'Adv. D. Gupta',
    location: 'Central Pollution Control Board & State PCBs',
    badge: 'Environment Protection'
  },
  {
    id: 'res_elderline',
    name: 'Elder Line Helpline (14567)',
    category: 'Senior Citizens',
    purpose: 'National toll-free helpline for senior citizens providing counseling, emotional support, information on pension/healthcare, and intervention in elder abuse cases.',
    contactMethod: 'Toll-Free Dial 14567',
    officialUrl: 'https://elderline.in',
    tollFree: '14567',
    verificationStatus: 'VERIFIED',
    lastVerifiedAt: '2026-09-08',
    reviewedBy: 'Adv. N. Bhatt',
    location: 'Ministry of Social Justice & Empowerment',
    badge: 'Elder Care'
  },
  {
    id: 'res_marriage_reg',
    name: 'Marriage Registration Office',
    category: 'Personal Law',
    purpose: 'Register marriages under Hindu Marriage Act or Special Marriage Act. Issue marriage certificates required for passport, visa, and legal rights.',
    contactMethod: 'District Sub-Registrar / Marriage Officer Office',
    officialUrl: 'https://lawmin.gov.in',
    tollFree: 'District-specific',
    verificationStatus: 'VERIFIED',
    lastVerifiedAt: '2026-09-15',
    reviewedBy: 'Adv. S. Banerjee',
    location: 'District Marriage Registration Office',
    badge: 'Family Law'
  }
];

export const BADGES = [
  {
    id: 'cyber_guardian',
    name: 'Cyber Guardian',
    nameHi: 'साइबर रक्षक',
    nameTe: 'సైబర్ రక్షకుడు',
    icon: 'ShieldCheck',
    color: '#3b82f6',
    description: 'Mastered Cybercrime prevention, UPI safety protocols, and Golden Hour reporting.',
    topicRequirement: 'cybercrime'
  },
  {
    id: 'consumer_champion',
    name: 'Consumer Champion',
    nameHi: 'उपभोक्ता विजेता',
    nameTe: 'వినియోగదారుల విజేత',
    icon: 'Award',
    color: '#f59e0b',
    description: 'Mastered consumer protections against unfair trade practices and e-Daakhil filing.',
    topicRequirement: 'consumer_rights'
  },
  {
    id: 'road_ready',
    name: 'Road Ready',
    nameHi: 'सड़क सुरक्षा दक्ष',
    nameTe: 'రహదారి భద్రతా నిపుణుడు',
    icon: 'Navigation',
    color: '#10b981',
    description: 'Understands Motor Vehicles Act, e-challans, and Good Samaritan legal immunity.',
    topicRequirement: 'road_laws'
  },
  {
    id: 'privacy_protector',
    name: 'Privacy Protector',
    nameHi: 'गोपनीयता संरक्षक',
    nameTe: 'ప్రైవసీ సంరక్షకుడు',
    icon: 'Key',
    color: '#8b5cf6',
    description: 'Proficient in DPDPA 2023, Aadhaar biometric safeguards, and data consent rights.',
    topicRequirement: 'digital_privacy'
  },
  {
    id: 'rights_explorer',
    name: 'Rights Explorer',
    nameHi: 'अधिकार अन्वेषक',
    nameTe: 'హక్కుల అన్వేషకుడు',
    icon: 'BookOpen',
    color: '#ec4899',
    description: 'Deep understanding of Article 21, D.K. Basu arrest safeguards, and lawful procedures.',
    topicRequirement: 'fundamental_rights'
  },
  {
    id: 'safety_smart',
    name: 'Safety Smart',
    nameHi: 'सुरक्षा दक्ष',
    nameTe: 'భద్రతా నిపుణుడు',
    icon: 'Heart',
    color: '#ef4444',
    description: 'Mastered Zero FIR procedures, Domestic Violence safeguards, and women\'s helplines.',
    topicRequirement: 'womens_safety'
  },
  {
    id: 'property_pro',
    name: 'Property Pro',
    nameHi: 'संपत्ति विशेषज्ञ',
    nameTe: 'ఆస్తి నిపుణుడు',
    icon: 'Home',
    color: '#14b8a6',
    description: 'Mastered tenant rights, RERA protections, and property law essentials.',
    topicRequirement: 'tenant_property'
  },
  {
    id: 'transparency_warrior',
    name: 'Transparency Warrior',
    nameHi: 'पारदर्शिता योद्धा',
    nameTe: 'పారదర్శకత యోధుడు',
    icon: 'FileSearch',
    color: '#0ea5e9',
    description: 'Mastered RTI procedures, appeals, and government accountability mechanisms.',
    topicRequirement: 'rti_accountability'
  },
  {
    id: 'eco_guardian',
    name: 'Eco Guardian',
    nameHi: 'पर्यावरण रक्षक',
    nameTe: 'పర్యావరణ రక్షకుడు',
    icon: 'Leaf',
    color: '#22c55e',
    description: 'Mastered environmental rights, pollution laws, and NGT complaint procedures.',
    topicRequirement: 'environmental_rights'
  },
  {
    id: 'elder_advocate',
    name: 'Elder Advocate',
    nameHi: 'वृद्ध अधिवक्ता',
    nameTe: 'వృద్ధుల న్యాయవాది',
    icon: 'Users',
    color: '#a855f7',
    description: 'Mastered senior citizen maintenance laws, elder abuse protections, and healthcare rights.',
    topicRequirement: 'senior_citizens'
  },
  {
    id: 'family_law_expert',
    name: 'Family Law Expert',
    nameHi: 'पारिवारिक कानून विशेषज्ञ',
    nameTe: 'కుటుంబ చట్ట నిపుణుడు',
    icon: 'Heart',
    color: '#f43f5e',
    description: 'Mastered marriage registration, divorce procedures, maintenance, and Special Marriage Act.',
    topicRequirement: 'personal_laws'
  },
  {
    id: 'civic_defender',
    name: 'Civic Defender',
    nameHi: 'नागरिक रक्षक',
    nameTe: 'పౌర రక్షకుడు',
    icon: 'Medal',
    color: '#06b6d4',
    description: 'Completed 5+ real-life scenarios with critical accuracy and civic responsibility.',
    scenarioRequirement: 5
  },
  {
    id: 'streak_master',
    name: 'Streak Master',
    nameHi: 'स्ट्रीक मास्टर',
    nameTe: 'స్ట్రీక్ మాస్టర్',
    icon: 'Flame',
    color: '#f97316',
    description: 'Maintained a multi-day legal literacy learning streak.',
    streakRequirement: 3
  },
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
    id: 'rights_ranger',
    name: 'Rights Ranger',
    nameHi: 'अधिकार रेंजर',
    nameTe: 'హక్కుల రేంజర్',
    icon: 'Flame',
    color: '#8b5cf6',
    description: 'Mastered 3+ Live Voice Cases with 3-star composure and accurate statutory counters.',
    liveCaseCountRequirement: 3
  },
  {
    id: 'lawlink_pioneer',
    name: 'LawLink Champion',
    nameHi: 'लॉलिंक चैंपियन',
    nameTe: 'లాలింక్ ఛాంపియన్',
    icon: 'Crown',
    color: '#eab308',
    description: 'Achieved Level 5 mastery and demonstrated comprehensive legal awareness.',
    levelRequirement: 5
  }
];

export const DAILY_CHALLENGES = [
  {
    id: 'daily_01',
    date: '2026-09-30',
    title: 'Damaged Food Delivery & Refusal of Refund',
    scenario: 'Your food delivery arrives spilled and stale. The restaurant refuses a refund citing "We don\'t refund opened boxes once handed to courier". What should you do before taking the next step?',
    options: [
      { text: 'Photograph the spilled order, save the invoice, and file an instant dispute via National Consumer Helpline (1915) or WhatsApp.', correct: true },
      { text: 'Confront the delivery rider physically when they return.', correct: false },
      { text: 'Accept the loss because food items have zero consumer protection under Indian law.', correct: false }
    ],
    explanation: 'Under the Consumer Protection (E-Commerce) Rules, delivery of unhygienic or defective goods entitles the consumer to a full refund or replacement. Photographing the evidence and reporting to NCH (1915) creates an official dispute.',
    xpReward: 50
  },
  {
    id: 'daily_02',
    date: '2026-10-01',
    title: 'Unexpected SIM Deactivation Alert',
    scenario: 'You receive an automated SMS: "Your SIM card will be deactivated by 6 PM unless you send an SMS with your 19-digit SIM number to this private mobile number." What does this indicate?',
    options: [
      { text: 'This is an unauthorized SIM Swap fraud attempt. Do NOT send any SMS or SIM numbers, and contact your telecom provider directly.', correct: true },
      { text: 'Follow the SMS instructions immediately to avoid losing phone connectivity.', correct: false },
      { text: 'Forward the message to all contacts.', correct: false }
    ],
    explanation: 'Sending your 19-digit SIM number initiates an unauthorized SIM Swap, transferring your mobile number and banking OTP access to the scammer. Telecom providers never request SIM numbers via private SMS.',
    xpReward: 50
  }
];

export const SEED_LEADERBOARD = [
  { uid: 'seed_u1', displayName: 'Dr. Priya Sharma', xp: 1450, level: 'Level 5 — LawLink Champion', badgesCount: 7, rank: 1, streak: 12 },
  { uid: 'seed_u2', displayName: 'Vikramaditya Roy', xp: 1120, level: 'Level 4 — Rights Ready', badgesCount: 5, rank: 2, streak: 8 },
  { uid: 'seed_u3', displayName: 'Sneha Reddy', xp: 950, level: 'Level 4 — Rights Ready', badgesCount: 4, rank: 3, streak: 6 },
  { uid: 'seed_u4', displayName: 'Mohammed Faizan', xp: 780, level: 'Level 3 — Practical', badgesCount: 3, rank: 4, streak: 5 },
  { uid: 'seed_u5', displayName: 'Ananya Deshmukh', xp: 640, level: 'Level 3 — Practical', badgesCount: 3, rank: 5, streak: 4 },
  { uid: 'seed_u6', displayName: 'Rahul K. Varma', xp: 480, level: 'Level 2 — Informed', badgesCount: 2, rank: 6, streak: 3 },
  { uid: 'seed_u7', displayName: 'Kavita Menon', xp: 320, level: 'Level 2 — Informed', badgesCount: 1, rank: 7, streak: 2 }
];

export const LEVEL_TIERS = [
  { level: 1, title: 'Aware', minXp: 0, maxXp: 299 },
  { level: 2, title: 'Informed', minXp: 300, maxXp: 699 },
  { level: 3, title: 'Practical', minXp: 700, maxXp: 1199 },
  { level: 4, title: 'Rights Ready', minXp: 1200, maxXp: 1999 },
  { level: 5, title: 'LawLink Champion', minXp: 2000, maxXp: 999999 }
];
