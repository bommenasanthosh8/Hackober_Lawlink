// Multilingual Context for LAWLINK: English, Hindi (हिंदी), and Telugu (తెలుగు)
import React, { createContext, useContext, useState, useEffect } from 'react';

const TRANSLATIONS = {
  en: {
    appName: 'LawLink',
    tagline: 'Learn the Law. Recognize the Situation. Know What To Do.',
    navDashboard: 'Dashboard',
    navTopics: 'Topics & Scenarios',
    navFindHelp: 'Find Help Near Me',
    navAskAI: 'Ask LawLink Guide',
    navLeaderboard: 'Leaderboard',
    navAdmin: 'Admin',
    navProfile: 'Profile',
    btnDemoTour: '⚡ 3-Min Judge Demo',
    searchPlaceholder: 'Search legal topics, UPI fraud, FIR, consumer rights, POSH...',
    philosophyTitle: 'The LawLink Philosophy',
    philosophyOld: 'Most Legal Websites: READ → SEARCH → EXIT',
    philosophyNew: 'LAWLINK: EXPERIENCE → UNDERSTAND → PRACTICE → ACT → GET HELP',
    welcomeBack: 'Welcome back,',
    levelLabel: 'Current Level',
    xpLabel: 'Total XP',
    streakLabel: 'Day Streak',
    accuracyLabel: 'Quiz Accuracy',
    badgesEarned: 'Badges Earned',
    continueLearning: 'Continue Learning',
    dailyChallenge: 'Daily Legal Challenge',
    recommendedForYou: 'Recommended For You',
    journeyTimeline: 'Your Legal Literacy Journey',
    trustedHelpQuick: 'Verified Helplines',
    scenarioWhatWouldYouDo: 'What Would You Do?',
    yourChoice: 'YOUR CHOICE',
    whyExplanation: 'WHY THIS MATTERS',
    legalAwareness: 'LEGAL AWARENESS',
    whatToDoNext: 'WHAT TO DO NEXT',
    whatEvidenceToKeep: 'WHAT EVIDENCE TO KEEP',
    whereToGetHelp: 'WHERE TO GET HELP',
    sourceVerification: 'Source & Verification',
    educationalDisclaimer: 'LawLink provides educational legal awareness and general information. It is not professional legal advice.',
    btnNext: 'Next Step',
    btnSubmit: 'Submit Choice',
    btnTryQuiz: 'Take Knowledge Quiz',
    loginTitle: 'Sign In to LawLink',
    signupTitle: 'Create Learner Account',
    logout: 'Log Out',
    switchAccount: 'Switch Test Profile',
    verifiedBadge: 'VERIFIED STATUTORY CONTENT',
    reviewRequired: 'REVIEW REQUIRED',
    openInGoogleMaps: 'Open in Google Maps',
    callNow: 'Call Helpline',
    directions: 'Directions'
  },
  hi: {
    appName: 'लॉलिंक (LawLink)',
    tagline: 'कानून सीखें। स्थिति पहचानें। जानें क्या करना है।',
    navDashboard: 'डैशबोर्ड',
    navTopics: 'विषय और परिदृश्य',
    navFindHelp: 'मदद खोजें (नक्शा)',
    navAskAI: 'लॉलिंक गाइड (एआई)',
    navLeaderboard: 'लीडरबोर्ड',
    navAdmin: 'व्यवस्थापक',
    navProfile: 'प्रोफ़ाइल',
    btnDemoTour: '⚡ 3-मिनट जज डेमो',
    searchPlaceholder: 'कानूनी विषय, यूपीआई धोखाधड़ी, एफआईआर, उपभोक्ता अधिकार खोजें...',
    philosophyTitle: 'लॉलिंक दृष्टिकोण',
    philosophyOld: 'पारंपरिक वेबसाइटें: पढ़ें → खोजें → बाहर निकलें',
    philosophyNew: 'लॉलिंक: अनुभव करें → समझें → अभ्यास करें → कार्रवाई करें → सहायता प्राप्त करें',
    welcomeBack: 'स्वागत है,',
    levelLabel: 'वर्तमान स्तर',
    xpLabel: 'कुल एक्सपी',
    streakLabel: 'दिन की स्ट्रीक',
    accuracyLabel: 'प्रश्नोत्तरी सटीकता',
    badgesEarned: 'अर्जित बैज',
    continueLearning: 'सीखना जारी रखें',
    dailyChallenge: 'दैनिक कानूनी चुनौती',
    recommendedForYou: 'आपके लिए अनुशंसित',
    journeyTimeline: 'आपकी कानूनी साक्षरता यात्रा',
    trustedHelpQuick: 'सत्यापित हेल्पलाइन',
    scenarioWhatWouldYouDo: 'आप क्या करेंगे?',
    yourChoice: 'आपकी पसंद',
    whyExplanation: 'यह क्यों महत्वपूर्ण है',
    legalAwareness: 'कानूनी जागरूकता',
    whatToDoNext: 'आगे क्या करें',
    whatEvidenceToKeep: 'कौन से सबूत सुरक्षित रखें',
    whereToGetHelp: 'मदद कहाँ से प्राप्त करें',
    sourceVerification: 'स्रोत और सत्यापन',
    educationalDisclaimer: 'लॉलिंक केवल शैक्षिक कानूनी जागरूकता प्रदान करता है। यह पेशेवर कानूनी सलाह नहीं है।',
    btnNext: 'अगला कदम',
    btnSubmit: 'विकल्प चुनें',
    btnTryQuiz: 'प्रश्नोत्तरी हल करें',
    loginTitle: 'लॉलिंक में साइन इन करें',
    signupTitle: 'नया खाता बनाएँ',
    logout: 'लॉग आउट',
    switchAccount: 'परीक्षण प्रोफ़ाइल बदलें',
    verifiedBadge: 'सत्यापित वैधानिक सामग्री',
    reviewRequired: 'समीक्षा आवश्यक',
    openInGoogleMaps: 'गूगल मैप्स में खोलें',
    callNow: 'हेल्पलाइन पर कॉल करें',
    directions: 'दिशा-निर्देश'
  },
  te: {
    appName: 'లాలింక్ (LawLink)',
    tagline: 'చట్టాన్ని తెలుసుకోండి. పరిస్థితిని గుర్తించండి. ఏం చేయాలో తెలుసుకోండి.',
    navDashboard: 'డ్యాష్‌బోర్డ్',
    navTopics: 'అంశాలు & సన్నివేశాలు',
    navFindHelp: 'సమీప సహాయ కేంద్రాలు',
    navAskAI: 'లాలింక్ గైడ్ (AI)',
    navLeaderboard: 'లీడర్‌బోర్డ్',
    navAdmin: 'అడ్మిన్',
    navProfile: 'ప్రొఫైల్',
    btnDemoTour: '⚡ 3-నిమిషాల జడ్జ్ డెమో',
    searchPlaceholder: 'చట్టపరమైన అంశాలు, యూపీఐ మోసాలు, ఎఫ్‌ఐఆర్, వినియోగదారు హక్కులను శోధించండి...',
    philosophyTitle: 'లాలింక్ విధానం',
    philosophyOld: 'సాధారణ వెబ్‌సైట్లు: చదవండి → శోధించండి → నిష్క్రమించండి',
    philosophyNew: 'లాలింక్: అనుభవించండి → అర్థం చేసుకోండి → సాధన చేయండి → చర్య తీసుకోండి → సహాయం పొందండి',
    welcomeBack: 'స్వాగతం,',
    levelLabel: 'ప్రస్తుత స్థాయి',
    xpLabel: 'మొత్తం XP',
    streakLabel: 'రోజుల స్ట్రీక్',
    accuracyLabel: 'క్విజ్ ఖచ్చితత్వం',
    badgesEarned: 'సాధించిన బ్యాడ్జీలు',
    continueLearning: 'నేర్చుకోవడం కొనసాగించండి',
    dailyChallenge: 'రోజువారీ చట్టపరమైన సవాలు',
    recommendedForYou: 'మీ కోసం సిఫార్సు చేసినవి',
    journeyTimeline: 'మీ న్యాయ అక్షరాస్యత ప్రయాణం',
    trustedHelpQuick: 'ధృవీకరించబడిన హెల్ప్‌లైన్లు',
    scenarioWhatWouldYouDo: 'మీరైతే ఏం చేస్తారు?',
    yourChoice: 'మీ ఎంపిక',
    whyExplanation: 'ఇది ఎందుకు ముఖ్యం',
    legalAwareness: 'చట్టపరమైన అవగాహన',
    whatToDoNext: 'తర్వాత ఏం చేయాలి',
    whatEvidenceToKeep: 'ఏ సాక్ష్యాలను దాచుకోవాలి',
    whereToGetHelp: 'సహాయం ఎక్కడ పొందాలి',
    sourceVerification: 'మూలం & ధృవీకరణ',
    educationalDisclaimer: 'లాలింక్ విద్యాపరమైన చట్టపరమైన అవగాహనను మాత్రమే అందిస్తుంది. ఇది వృత్తిపరమైన న్యాయ సలహా కాదు.',
    btnNext: 'తదుపరి దశ',
    btnSubmit: 'ఎంపికను సమర్పించండి',
    btnTryQuiz: 'క్విజ్ ప్రారంభించండి',
    loginTitle: 'లాలింక్‌లోకి ప్రవేశించండి',
    signupTitle: 'కొత్త ఖాతా తెరవండి',
    logout: 'లాగ్ అవుట్',
    switchAccount: 'టెస్ట్ ప్రొఫైల్ మార్చండి',
    verifiedBadge: 'ధృవీకరించబడిన చట్టపరమైన సమాచారం',
    reviewRequired: 'సమీక్ష అవసరం',
    openInGoogleMaps: 'గూగుల్ మ్యాప్స్‌లో చూడండి',
    callNow: 'హెల్ప్‌లైన్‌కు కాల్ చేయండి',
    directions: 'రూట్ మ్యాప్'
  }
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('lawlink_lang') || 'en';
  });

  const changeLanguage = (lang) => {
    if (TRANSLATIONS[lang]) {
      setLanguage(lang);
      localStorage.setItem('lawlink_lang', lang);
    }
  };

  const t = (key) => {
    return TRANSLATIONS[language]?.[key] || TRANSLATIONS.en[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
