# LAWLINK

### *“Learn the Law. Recognize the Situation. Know What To Do.”*

A gamified, production-grade legal literacy and civic safety platform built for the **GDG on Campus Hackathon**.

LAWLINK bridges the gap between intimidating, complex statutory text and practical everyday citizen confidence. Instead of forcing users to read endless legal sections, LAWLINK provides an **interactive, decision-driven journey**:

> **The LawLink Philosophy:**  
> Traditional Legal Websites: `READ → SEARCH → EXIT`  
> **LAWLINK:** `EXPERIENCE → UNDERSTAND → PRACTICE → ACT → GET HELP`

---

## 🌟 Key Features & Architecture Highlights

### 1. 🛡️ Hero Feature: Real-Life Scenario Engine ("What Would You Do?")
- Interactive branching case dilemmas across **7 statutory domains**:
  1. **Cybercrime & Financial Fraud** (UPI scams, OTP phishing, SIM swaps, IT Act Sec 66D, RBI Zero Liability)
  2. **Consumer Rights & E-Commerce** (Defective goods, dark patterns, mandatory restaurant service charges, e-Daakhil)
  3. **Road Laws & Motor Vehicles Act** (Sec 134A Good Samaritan legal immunity, DigiLocker parity Rule 139 CMVR, virtual court e-challans)
  4. **Digital Privacy & Data Protection** (DPDPA 2023, Aadhaar biometric locking, predatory loan apps)
  5. **Fundamental Rights & Police Interactions** (Article 21, D.K. Basu arrest safeguards, Section 57 CrPC 24h limit)
  6. **Student Rights & Workplace Protections** (UGC anti-ragging regulations, POSH Act 2013, degree certificate retention ban)
  7. **Women’s Safety & Legal Safeguards** (Zero FIR nationwide mandate, Sec 46(4) CrPC sunset arrest safeguards, Sakhi One Stop Centres)
- **Every decision returns a 6-part structured breakdown:**
  - `YOUR CHOICE` (Correct ✓ / Risky ⚠ / Critical Risk ✗)
  - `WHY THIS MATTERS` (Detailed rationale)
  - `LEGAL AWARENESS` (Statutory legal citation)
  - `WHAT TO DO NEXT` (Concrete immediate steps)
  - `WHAT EVIDENCE TO KEEP` (Screenshots, transaction reference IDs, unboxing videos)
  - `WHERE TO GET HELP` (Direct link to verified portal or helpline)
  - `SOURCE & VERIFICATION` (Audit badge with reviewer name and date)

### 2. 🤖 Grounded Google Gemini AI ("LawLink Guide")
- Powered by `@google/genai` using `gemini-2.5-flash`.
- **Zero-Hallucination Guardrails:** AI answers are grounded strictly in the application's curated statutory knowledge layer. Gemini is strictly prohibited from inventing sections, case law, or phone numbers.
- **Voice Input:** Integrated browser Speech Recognition API (`webkitSpeechRecognition`) with live microphone recording.
- **Mandatory Safety Disclaimers:** Explicitly marked as educational awareness, not formal legal representation.

### 3. 🗺️ Google Maps Platform & Places API (New)
- **Address Autocomplete:** Instant search for landmarks (e.g. *"GRIET Hyderabad"*, *"Nizampet"*, *"Connaught Place"*, *"BKC Mumbai"*).
- **Find Legal Help Near Me:** Interactive map with customized markers for Cyber Police Stations, District Legal Services Authorities (DLSA), Consumer Dispute Redressal Commissions, and Sakhi Crisis Centres.
- **Distance Calculation:** Haversine formula calculation (in km) with direct turn-by-turn navigation in Google Maps (`https://www.google.com/maps/dir/...`).
- **Graceful Fallback:** Seamless experience when location permission is denied.

### 4. 🎮 Real Persistent Gamification Engine
- **Cloud Firestore Backed:** User XP, Level, Streak, Completed Scenarios, and Badges are saved to Firestore under `progress/{uid}` and `userAchievements/{uid}/items`.
- **Level Tiers:**
  - *Level 1 — Aware* (0 - 299 XP)
  - *Level 2 — Informed* (300 - 699 XP)
  - *Level 3 — Practical* (700 - 1,199 XP)
  - *Level 4 — Rights Ready* (1,200 - 1,999 XP)
  - *Level 5 — LawLink Champion* (2,000+ XP)
- **Civic Badges:** *Cyber Guardian*, *Consumer Champion*, *Road Ready*, *Privacy Protector*, *Rights Explorer*, *Safety Smart*, *Civic Defender*, *Streak Master*, *LawLink Champion*.
- **Celebration Feedback:** Integrated `canvas-confetti` celebrations upon leveling up, badge unlocking, and quiz completion.

### 5. ⚡ 3-Minute Judge Demo Mode
- A dedicated top-bar button (`⚡ 3-Min Judge Demo`) guiding hackathon judges through a 10-step interactive presentation of all core features.

### 6. 🔒 Strict Account Isolation & Multi-Device Sync
- When **User A** creates an account, only User A's data appears.
- When **User B** signs up, User B starts with a clean profile (0 XP, no badges).
- Changes made on Device A immediately reflect on Device B via Firestore real-time listeners (`onSnapshot`) and cross-tab synchronization.

### 7. 🔑 Official Test Account Credentials (Ready to Test)

The application includes pre-configured verified credentials for evaluating multi-device account isolation and role-based views. You can log in manually with email & password, or use the **"Credentials"** button in the navbar for 1-click fast sign-in:

| Persona / Role | Name | Email | Password | Evaluation Purpose |
|---|---|---|---|---|
| **Citizen Learner** | Priya Sharma | `priya.sharma@lawlink.org` | `Citizen@123` | Active citizen learner (450 XP, 4-day streak, Cybercrime & Road Laws mastered) |
| **College Student** | Arjun Patel | `arjun.patel@lawlink.org` | `Student@123` | Clean-slate test account (0 XP) to test fresh onboarding & zero-loss progress |
| **Legal Aid Volunteer** | Kavita Desai | `kavita.desai@lawlink.org` | `Legal@123` | Community para-legal volunteer (850 XP, 7-day streak, Women Safety & Zero FIR expert) |
| **Statutory Admin** | Adv. Rajesh Kumar | `admin@lawlink.org` | `Admin@1234` | Full access to Admin Console, Content Audit, and Cloud Firestore seeder |

---

## 🛠️ Technology Stack

| Component | Technology |
|---|---|
| **Frontend Framework** | React 19 + Vite |
| **Styling** | Vanilla CSS Design System with Glassmorphism, CSS Variables & Fluid Typography (No Tailwind) |
| **Cloud Database** | Google Cloud Firestore |
| **Authentication** | Firebase Authentication (Email/Password, Google Sign-In) |
| **AI / LLM** | Google Gemini API (`@google/genai`, model `gemini-2.5-flash`) |
| **Mapping & Places** | Google Maps JavaScript API & Places API (New) |
| **Icons & Visuals** | Lucide React & Canvas Confetti |
| **Speech Recognition** | Web Speech Recognition API |
| **Localization** | Multi-language engine (English, Hindi, Telugu) |

---

## 📁 Firestore Database Schema

```text
users/{uid}                                -> User authentication records
profiles/{uid}                             -> Display name, avatar, preferred language, role
topics/{topicId}                           -> 7 Curated statutory modules
scenarios/{scenarioId}                     -> 14+ Branching real-life case studies
quizQuestions/{questionId}                 -> 35+ Statutory knowledge questions
resources/{resourceId}                     -> 20+ Verified government helplines & legal aid
progress/{uid}                             -> User XP, Level, Streak, completed arrays
progress/{uid}/topicProgress/{topicId}     -> Per-topic progress status
quizAttempts/{attemptId}                   -> Audit log of user quiz scores & percentages
userAchievements/{uid}/items/{badgeId}     -> Unlocked badges with timestamps
learningHistory/{uid}/items/{activityId}   -> Chronological legal literacy timeline
guidanceSessions/{sessionId}               -> LawLink Guide AI consultation history
leaderboard/{uid}                          -> Public leaderboard ranking document
contentVerification/{contentId}            -> Audit timestamps and legal reviewer stamps
```

---

## 🚀 Quick Start (Local Development)

### Prerequisites
- Node.js (v18 or higher)
- npm (v9 or higher)

### 1. Clone & Install Dependencies
```bash
git clone <repository-url>
cd HACKOBER
npm install
```

### 2. Configure Environment Variables
Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```

Open `.env` and fill in your keys (optional for initial demo evaluation):
```env
# Firebase Configuration (From Firebase Console)
VITE_FIREBASE_API_KEY=AIzaSy...
VITE_FIREBASE_AUTH_DOMAIN=your-app.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-app-id
VITE_FIREBASE_STORAGE_BUCKET=your-app.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
VITE_FIREBASE_APP_ID=1:123456789:web:abcdef

# Google Gemini API Key (From Google AI Studio)
VITE_GEMINI_API_KEY=AIzaSy...

# Google Maps Platform API Key (With Places API enabled)
VITE_GOOGLE_MAPS_API_KEY=AIzaSy...
```

> **Note:** The application includes a **Resilient Dual-Engine**. If Firebase credentials are not provided, it seamlessly runs with an in-memory/cross-tab simulated Cloud Data Engine with real seed data, UID account isolation, and cross-tab real-time sync, so you can test immediately without any initial blockers!

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## ☁️ Google Cloud & Firebase Setup Guide

### Step 1: Create a Firebase Project
1. Go to the [Firebase Console](https://console.firebase.google.com/).
2. Click **Add project**, name it `lawlink-platform`, and proceed.
3. In Project Overview, click the **Web icon (`</>`)** to register a web app.
4. Copy the `firebaseConfig` keys into your `.env` file.

### Step 2: Enable Firebase Authentication
1. In the Firebase Console left menu, navigate to **Build → Authentication**.
2. Click **Get Started**.
3. Under **Sign-in method**, enable:
   - **Email/Password**
   - **Google** (Configure the project support email).

### Step 3: Create Cloud Firestore Database
1. Navigate to **Build → Firestore Database**.
2. Click **Create database**.
3. Select **Production Mode** and choose a location (e.g. `asia-south1` for India).
4. Deploy the security rules from `firestore.rules` (see below).

### Step 4: Deploy Firestore Security Rules
Use the Firebase CLI or paste the contents of [`firestore.rules`](./firestore.rules) into the Firebase Console Rules tab:
```bash
npx -y firebase-tools@latest deploy --only firestore:rules
```

### Step 5: Seed Cloud Firestore with Live Data
1. Open the LawLink application in your browser.
2. Sign in with the Admin account (`admin@lawlink.org`) or click **Switch Test Profile → Adv. Rajesh Kumar (Legal Lead)**.
3. Open the **Admin** console from the navbar.
4. Click **Cloud Firestore Seeder → Push Seed Data to Cloud**.
5. All 7 topics, 14+ scenarios, 35+ quizzes, and 20+ resources will be written directly to your Cloud Firestore instance!

---

## 🗺️ Google Maps Platform Setup

1. Go to the [Google Cloud Console](https://console.cloud.google.com/).
2. Select your project and navigate to **APIs & Services → Library**.
3. Enable the following APIs:
   - **Maps JavaScript API**
   - **Places API (New)**
   - **Geocoding API**
4. Navigate to **APIs & Services → Credentials** and click **Create Credentials → API Key**.
5. **API Key Restrictions:**
   - Under *Application restrictions*, select **Websites** and add `http://localhost:*` and your production domain.
   - Under *API restrictions*, select only the 3 enabled Google Maps APIs above.
6. Paste the key into `VITE_GOOGLE_MAPS_API_KEY` in `.env`.

---

## 🤖 Google Gemini AI Setup

1. Visit [Google AI Studio](https://aistudio.google.com/).
2. Click **Get API key** and generate a key for your project.
3. Paste the key into `VITE_GEMINI_API_KEY` in `.env`.
4. The application uses `gemini-2.5-flash` with low temperature (`0.2`) and strict grounding context to ensure factual accuracy and zero hallucinations.

---

## 🌐 Deployment to Firebase Hosting

```bash
# Build production bundle
npm run build

# Initialize Firebase hosting (if not done)
npx -y firebase-tools@latest init hosting

# Deploy
npx -y firebase-tools@latest deploy --only hosting
```

---

## ⚖️ Legal Disclaimer

*LawLink is an educational legal-literacy platform designed to empower citizens with awareness of statutory rights and official dispute-resolution mechanisms. LawLink does not provide formal legal advice or legal representation. In critical or hazardous situations, always contact emergency helplines (112) or consult a qualified legal professional.*
