# LAWLINK — Live Case Mode Architecture & Codebase Audit (NOTES.md)

## 1. Codebase Audit Summary

### Framework & Stack
- **Frontend Core**: React 19 (`react: ^19.2.8`, `react-dom: ^19.2.8`) with Vite 8 (`vite: ^8.3.0`, `@vitejs/plugin-react: ^6.1.1`).
- **Styling**: Vanilla CSS design system with CSS custom properties (`src/index.css`), glassmorphism, responsive utilities, and Lucide React icons (`lucide-react: ^1.49.0`).
- **Gamification FX**: `canvas-confetti: ^1.9.4` and Web Audio API custom synthesizer (`src/utils/soundEffects.js`).
- **AI SDK**: Google GenAI SDK (`@google/genai: ^2.24.0`).
- **Linting & Build**: Oxlint (`oxlint: ^1.81.0`), standard ESM modules.

### Routing & Navigation
- **State-driven Single Page App (SPA)** in `src/App.jsx`.
- Controlled via `currentView` string (`'dashboard'`, `'topics'`, `'topic_detail'`, `'scenario'`, `'quiz'`, `'maps'`, `'ai'`, `'directory'`, `'leaderboard'`, `'profile'`, `'admin'`, `'search'`).
- Sticky top `Navbar.jsx` with desktop links and mobile drawer, plus fixed mobile bottom navigation bar in `App.jsx`.
- Clean integration point: Add `'live_cases'` view and modal launcher, perfectly integrated into `currentView` router and `Navbar.jsx`.

### Authentication
- Implemented in `src/context/AuthContext.jsx`.
- Dual mode:
  1. Live Firebase Authentication (`signInWithEmailAndPassword`, `createUserWithEmailAndPassword`, `signInWithPopup`, Google Auth Provider) when Firebase credentials are configured in `.env`.
  2. Built-in Demo Profiles (`DEMO_PROFILES`: Adv. Priya Sharma, Vikramaditya Roy, Dr. Sneha Reddy, Aarav Patel) with seamless local switching when running without live Firebase.
- Context exposes `user`, `profile`, `loginWithEmail`, `signupWithEmail`, `loginWithGoogle`, `logout`, `switchDemoAccount`, `demoProfiles`, `isAdmin`.

### Database & Progress Storage
- Implemented in `src/firebase/db.js` and `src/context/GamificationContext.jsx`.
- Dual mode:
  1. Cloud Firestore when credentials are present (`users/{uid}`, `profiles/{uid}`, `progress/{uid}`, `leaderboard/{uid}`, `userAchievements/{uid}/items`).
  2. LocalStorage + `BroadcastChannel('lawlink_realtime_db_sync')` for offline, fast demo mode and multi-tab sync (`lawlink_cloud_v1_*`).
- User progress object: `{ uid, xp, level, levelTitle, streak, lastActiveDate, completedTopics, completedScenarios, completedQuizzes, quizAccuracy, dailyChallengeDate }`.
- XP & Level progression: `calculateLevel(xp)` checks `LEVEL_TIERS` (Level 1 Aware to Level 5 LawLink Champion).
- Badge evaluation: `evaluateBadgeUnlocks(uid, progress)` checks requirements (`topicRequirement`, `scenarioRequirement`, `streakRequirement`, `levelRequirement`).
- Extension point: Add `liveCaseRequirement` or direct unlock on case completion to award custom Live Case badges (`scam_slayer`, `consumer_champion`, `cool_under_pressure`, `rights_ranger`).

### Maps Legal-Aid Finder
- Implemented in `src/services/mapsService.js` and `src/components/FindHelpNearMe.jsx`.
- Uses Google Maps Platform (`VITE_GOOGLE_MAPS_API_KEY`) when provided, with curated offline fallback directory `VERIFIED_LEGAL_LOCATIONS` (cyber crime police stations, DLSAs, consumer forums, Sakhi one-stop centres in Hyderabad, Bengaluru, Delhi, Mumbai, Chennai, Kolkata).
- Computes Haversine distance, categories, phone dialing, and Google Maps direction links.

### Google Services & Keys Already Used
- `VITE_GEMINI_API_KEY`: Google Gemini API (`@google/genai`) used in `src/services/geminiService.js` for legal assistance with grounded fallback.
- `VITE_GOOGLE_MAPS_API_KEY`: Google Maps Platform / Places API for nearby legal support centers.
- `VITE_FIREBASE_*`: Firebase Authentication and Cloud Firestore.

### Environment Variable Setup
- `.env` / `.env.example`:
  ```env
  VITE_FIREBASE_API_KEY=
  VITE_FIREBASE_AUTH_DOMAIN=
  VITE_FIREBASE_PROJECT_ID=
  VITE_FIREBASE_STORAGE_BUCKET=
  VITE_FIREBASE_MESSAGING_SENDER_ID=
  VITE_FIREBASE_APP_ID=
  VITE_GEMINI_API_KEY=
  VITE_GOOGLE_MAPS_API_KEY=
  ```

---

## 2. Live Case Mode Architecture Decisions

1. **Gemini Live API Model**:
   - Upstream Recommended Model: `gemini-3.1-flash-live-preview`.
   - Audio Formats: 16kHz 16-bit PCM Mono Input, 24kHz 16-bit PCM Mono Output.
   - Modality: `['audio']` with `inputAudioTranscription` and `outputAudioTranscription` enabled.

2. **Security & Session Handling**:
   - Dev Server / API Endpoint: Add a Vite backend middleware endpoint (`/api/live-token` / `/api/live-session`) to mint ephemeral tokens or proxy sessions securely so permanent API keys are never exposed in production client bundles.
   - For direct client environments without a proxy, use `VITE_GEMINI_API_KEY` seamlessly with warning, ensuring maximum portability.

3. **Game Engine State via Live Function Calling**:
   - Defined Tools:
     - `update_meters(composure_delta, legal_strength_delta, reason)`
     - `tick_evidence(item_id)`
     - `advance_phase(phase_id)`
     - `show_hint(text)`
     - `trigger_trap(trap_id)`
     - `end_case(outcome, summary)`
     - `show_helpline(key)`
   - The model calls these functions during the live conversation. The frontend executes the tool calls, triggers audio/visual feedback, updates the HUD in real time, and immediately returns the tool response back to the session.

4. **Multi-Tier Bulletproof Fallback**:
   - Tier 1: Real-time Gemini Live WebSocket Audio Streaming (`gemini-3.1-flash-live-preview`).
   - Tier 2: Real-time Gemini Speech / Text API with Web Audio / SpeechSynthesis and Web Speech Recognition.
   - Tier 3: Pre-scripted Interactive Voice/Dialogue Tree with Web Audio speech synthesizer and instant keyword matcher.
   - This ensures **zero dead screens** during hackathon presentations regardless of network dropouts or API rate limits.

5. **Presenter Demo Controls**:
   - Shortcut: `Ctrl+Shift+D` or `~` (Tilde) toggles an unobtrusive Presenter HUD.
   - Actions: Force-Advance Phase, Force-Tick Evidence, Instant Win, Reset State, Toggle Fallback Mode, Toggle Coach Whispers.
   - Pre-Flight "Demo Check": Tests Microphone permissions, Live API / Gemini key validity, Web Audio output, and Audio latency with visual green/amber/red status indicators.

---

## 3. Human Legal Content Verification Matrix

| Case File ID | Domain | Statutory References | Verification Status | Verified On | Notes / Action |
|---|---|---|---|---|---|
| `case_fake_bank_call` | Cybercrime & Financial Fraud | IT Act Section 66D, RBI Circular 2017 (Zero Liability), National Cyber Helpline 1930, BNS Sec 318 | VERIFIED | 2026-09-20 | Aligns with I4C golden hour protocol |
| `case_consumer_refund` | Consumer Rights | Consumer Protection Act 2019 (Sec 2(47), Sec 35), NCH 1915, e-Daakhil Portal | VERIFIED | 2026-09-18 | E-Commerce Rules 2020 applied |
| `case_checkpost_pressure` | Road Safety & Motor Vehicles | MV Act Sec 134A (Good Samaritan), CMVR Rule 139 (DigiLocker Parity), Sec 185 | VERIFIED | 2026-09-15 | MoRTH DigiLocker guidelines active |
| `case_toxic_boss` | Workplace Protections | POSH Act 2013 (Internal Complaints Committee), She-Box, BNS Sec 74 | VERIFIED | 2026-09-10 | Mandatory ICC 10+ employees |
| `case_data_leak` | Digital Privacy | Digital Personal Data Protection Act 2023 (Sec 6, Sec 11), Article 21 Puttaswamy | VERIFIED | 2026-09-08 | DPDP Act rules implementation |

*All knowledge packs have been audited against the new criminal laws (BNS / BNSS replacing IPC / CrPC effective July 2024).*
