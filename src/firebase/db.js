// LAWLINK Cloud Database Service Layer
// Adheres strictly to the Firestore Data Architecture:
// users/{uid}, profiles/{uid}, topics/{topicId}, scenarios/{scenarioId}, quizQuestions/{questionId},
// resources/{resourceId}, progress/{uid}, quizAttempts/{attemptId}, achievements/{achievementId},
// userAchievements/{uid}/items/{achievementId}, learningHistory/{uid}/items/{activityId},
// guidanceSessions/{sessionId}, leaderboard/{uid}, contentVerification/{contentId}

import { 
  db, 
  isRealFirebaseConfigured, 
  doc, 
  getDoc, 
  setDoc, 
  updateDoc, 
  collection, 
  getDocs, 
  query, 
  where, 
  orderBy, 
  onSnapshot 
} from './config';

export { isRealFirebaseConfigured };
import { 
  TOPICS, 
  SCENARIOS, 
  QUIZ_QUESTIONS, 
  RESOURCES, 
  BADGES, 
  SEED_LEADERBOARD,
  LEVEL_TIERS 
} from '../data/seedData';

// BroadcastChannel for cross-tab realtime synchronization in demo mode
const syncChannel = typeof window !== 'undefined' && 'BroadcastChannel' in window 
  ? new BroadcastChannel('lawlink_realtime_db_sync') 
  : null;

// Local fallback store for offline/demo operation
const STORAGE_PREFIX = 'lawlink_cloud_v1_';

const getLocalCollection = (collName) => {
  try {
    const raw = localStorage.getItem(`${STORAGE_PREFIX}${collName}`);
    return raw ? JSON.parse(raw) : null;
  } catch (e) {
    console.error('Storage read error:', e);
    return null;
  }
};

const setLocalCollection = (collName, data) => {
  try {
    localStorage.setItem(`${STORAGE_PREFIX}${collName}`, JSON.stringify(data));
    if (syncChannel) {
      syncChannel.postMessage({ type: 'DB_MUTATION', collection: collName, timestamp: Date.now() });
    }
  } catch (e) {
    console.error('Storage write error:', e);
  }
};

// Initialize default seed store if not present
export const initializeSeedStore = () => {
  if (!getLocalCollection('topics')) {
    setLocalCollection('topics', TOPICS.reduce((acc, t) => ({ ...acc, [t.id]: t }), {}));
  }
  if (!getLocalCollection('scenarios')) {
    setLocalCollection('scenarios', SCENARIOS.reduce((acc, s) => ({ ...acc, [s.id]: s }), {}));
  }
  if (!getLocalCollection('quizQuestions')) {
    setLocalCollection('quizQuestions', QUIZ_QUESTIONS.reduce((acc, q) => ({ ...acc, [q.id]: q }), {}));
  }
  if (!getLocalCollection('resources')) {
    setLocalCollection('resources', RESOURCES.reduce((acc, r) => ({ ...acc, [r.id]: r }), {}));
  }
  if (!getLocalCollection('achievements')) {
    setLocalCollection('achievements', BADGES.reduce((acc, b) => ({ ...acc, [b.id]: b }), {}));
  }
  if (!getLocalCollection('leaderboard')) {
    setLocalCollection('leaderboard', SEED_LEADERBOARD.reduce((acc, l) => ({ ...acc, [l.uid]: l }), {}));
  }
};

initializeSeedStore();

// Calculate Level from XP
export const calculateLevel = (xp = 0) => {
  const tier = LEVEL_TIERS.slice().reverse().find(t => xp >= t.minXp) || LEVEL_TIERS[0];
  const nextTier = LEVEL_TIERS.find(t => t.level === tier.level + 1);
  const currentTierMin = tier.minXp;
  const currentTierMax = nextTier ? nextTier.minXp : tier.maxXp;
  const progressPercent = nextTier 
    ? Math.min(100, Math.max(0, Math.round(((xp - currentTierMin) / (currentTierMax - currentTierMin)) * 100)))
    : 100;

  return {
    levelNumber: tier.level,
    levelTitle: `Level ${tier.level} — ${tier.title}`,
    xp,
    nextLevelXp: currentTierMax,
    progressPercent
  };
};

// USER PROFILE SERVICES
export const getUserProfile = async (uid) => {
  if (!uid) return null;
  if (isRealFirebaseConfigured && db) {
    try {
      const snap = await getDoc(doc(db, 'profiles', uid));
      if (snap.exists()) return snap.data();
    } catch (e) {
      console.warn('Firestore getUserProfile error:', e.message);
    }
  }
  const profiles = getLocalCollection('profiles') || {};
  return profiles[uid] || null;
};

export const createOrUpdateUserProfile = async (uid, profileData) => {
  if (!uid) return;
  const payload = {
    uid,
    displayName: profileData.displayName || 'LawLink Learner',
    email: profileData.email || '',
    photoURL: profileData.photoURL || '',
    preferredLanguage: profileData.preferredLanguage || 'en',
    role: profileData.role || 'learner',
    createdAt: profileData.createdAt || new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };

  if (isRealFirebaseConfigured && db) {
    try {
      await setDoc(doc(db, 'profiles', uid), payload, { merge: true });
      await setDoc(doc(db, 'users', uid), { uid, email: payload.email, updatedAt: payload.updatedAt }, { merge: true });
    } catch (e) {
      console.warn('Firestore createOrUpdateUserProfile error:', e.message);
    }
  }

  const profiles = getLocalCollection('profiles') || {};
  profiles[uid] = { ...(profiles[uid] || {}), ...payload };
  setLocalCollection('profiles', profiles);
  return payload;
};

// USER PROGRESS & GAMIFICATION
export const getUserProgress = async (uid) => {
  if (!uid) return null;
  if (isRealFirebaseConfigured && db) {
    try {
      const snap = await getDoc(doc(db, 'progress', uid));
      if (snap.exists()) return snap.data();
    } catch (e) {
      console.warn('Firestore getUserProgress error:', e.message);
    }
  }
  const allProgress = getLocalCollection('progress') || {};
  return allProgress[uid] || {
    uid,
    xp: 0,
    level: 1,
    streak: 1,
    lastActiveDate: new Date().toISOString().split('T')[0],
    completedTopics: [],
    completedScenarios: [],
    completedQuizzes: [],
    completedLiveCases: [],
    quizAccuracy: 0,
    dailyChallengeDate: null
  };
};

export const subscribeToUserProgress = (uid, callback) => {
  if (!uid) return () => {};

  if (isRealFirebaseConfigured && db) {
    try {
      const unsub = onSnapshot(doc(db, 'progress', uid), (snap) => {
        if (snap.exists()) {
          callback(snap.data());
        } else {
          getUserProgress(uid).then(callback);
        }
      });
      return unsub;
    } catch (e) {
      console.warn('Firestore onSnapshot error, falling back to local channel:', e.message);
    }
  }

  // Initial call
  getUserProgress(uid).then(callback);

  // Sync listener
  const handler = (event) => {
    if (event.data?.collection === 'progress' || event.data?.collection === 'profiles') {
      getUserProgress(uid).then(callback);
    }
  };

  if (syncChannel) {
    syncChannel.addEventListener('message', handler);
  }

  const storageHandler = (e) => {
    if (e.key === `${STORAGE_PREFIX}progress`) {
      getUserProgress(uid).then(callback);
    }
  };
  window.addEventListener('storage', storageHandler);

  return () => {
    if (syncChannel) syncChannel.removeEventListener('message', handler);
    window.removeEventListener('storage', storageHandler);
  };
};

// AWARD XP & UPDATE PROGRESS
export const awardUserXp = async (uid, xpAmount, reason = '', metadata = {}) => {
  if (!uid || xpAmount <= 0) return;
  const current = await getUserProgress(uid);
  const newXp = (current?.xp || 0) + xpAmount;
  const levelInfo = calculateLevel(newXp);
  const today = new Date().toISOString().split('T')[0];

  let newStreak = current?.streak || 1;
  if (current?.lastActiveDate) {
    const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
    if (current.lastActiveDate === yesterday) {
      newStreak += 1;
    } else if (current.lastActiveDate !== today) {
      newStreak = 1;
    }
  }

  const updatedProgress = {
    ...current,
    uid,
    xp: newXp,
    level: levelInfo.levelNumber,
    levelTitle: levelInfo.levelTitle,
    streak: newStreak,
    lastActiveDate: today,
    updatedAt: new Date().toISOString()
  };

  if (metadata.topicId && !updatedProgress.completedTopics.includes(metadata.topicId)) {
    // Check if topic is completed
    if (metadata.markTopicComplete) {
      updatedProgress.completedTopics = [...updatedProgress.completedTopics, metadata.topicId];
    }
  }

  if (metadata.scenarioId && !updatedProgress.completedScenarios.includes(metadata.scenarioId)) {
    updatedProgress.completedScenarios = [...updatedProgress.completedScenarios, metadata.scenarioId];
  }

  if (metadata.quizId && !updatedProgress.completedQuizzes.includes(metadata.quizId)) {
    updatedProgress.completedQuizzes = [...updatedProgress.completedQuizzes, metadata.quizId];
  }

  if (metadata.liveCaseId) {
    const liveList = updatedProgress.completedLiveCases || [];
    if (!liveList.includes(metadata.liveCaseId)) {
      updatedProgress.completedLiveCases = [...liveList, metadata.liveCaseId];
    }
  }

  if (metadata.isDailyChallenge) {
    updatedProgress.dailyChallengeDate = today;
  }

  // Save to Firestore if connected
  if (isRealFirebaseConfigured && db) {
    try {
      await setDoc(doc(db, 'progress', uid), updatedProgress, { merge: true });
      // Update leaderboard record
      const userProf = await getUserProfile(uid);
      await setDoc(doc(db, 'leaderboard', uid), {
        uid,
        displayName: userProf?.displayName || 'LawLink Learner',
        xp: newXp,
        level: levelInfo.levelTitle,
        streak: newStreak,
        updatedAt: new Date().toISOString()
      }, { merge: true });
    } catch (e) {
      console.warn('Firestore awardUserXp error:', e.message);
    }
  }

  // Update local store
  const allProgress = getLocalCollection('progress') || {};
  allProgress[uid] = updatedProgress;
  setLocalCollection('progress', allProgress);

  // Update leaderboard locally
  const leaderboard = getLocalCollection('leaderboard') || {};
  const userProf = (getLocalCollection('profiles') || {})[uid];
  leaderboard[uid] = {
    uid,
    displayName: userProf?.displayName || 'You',
    xp: newXp,
    level: levelInfo.levelTitle,
    badgesCount: (getLocalCollection('userAchievements') || {})[uid]?.length || 1,
    streak: newStreak,
    rank: 1,
    updatedAt: new Date().toISOString()
  };
  setLocalCollection('leaderboard', leaderboard);

  // Record in learning history
  await recordLearningActivity(uid, {
    type: metadata.type || 'XP_EARNED',
    title: reason || `Earned +${xpAmount} XP`,
    xpEarned: xpAmount,
    metadata
  });

  // Evaluate badge unlocks
  await evaluateBadgeUnlocks(uid, updatedProgress);

  return updatedProgress;
};

// BADGE / ACHIEVEMENTS ENGINE
export const getUserAchievements = async (uid) => {
  if (!uid) return [];
  if (isRealFirebaseConfigured && db) {
    try {
      const snap = await getDocs(collection(db, `userAchievements/${uid}/items`));
      if (!snap.empty) {
        return snap.docs.map(d => d.data());
      }
    } catch (e) {
      console.warn('Firestore getUserAchievements error:', e.message);
    }
  }
  const achMap = getLocalCollection('userAchievements') || {};
  return achMap[uid] || [];
};

export const evaluateBadgeUnlocks = async (uid, progress) => {
  if (!uid || !progress) return [];
  const currentBadges = await getUserAchievements(uid);
  const currentBadgeIds = currentBadges.map(b => b.badgeId);
  const unlocked = [];

  for (const badge of BADGES) {
    if (currentBadgeIds.includes(badge.id)) continue;

    let shouldUnlock = false;
    if (badge.topicRequirement && progress.completedTopics?.includes(badge.topicRequirement)) {
      shouldUnlock = true;
    } else if (badge.scenarioRequirement && (progress.completedScenarios?.length || 0) >= badge.scenarioRequirement) {
      shouldUnlock = true;
    } else if (badge.streakRequirement && (progress.streak || 0) >= badge.streakRequirement) {
      shouldUnlock = true;
    } else if (badge.levelRequirement && (progress.level || 0) >= badge.levelRequirement) {
      shouldUnlock = true;
    } else if (badge.liveCaseRequirement && (progress.completedLiveCases || []).includes(badge.liveCaseRequirement)) {
      shouldUnlock = true;
    } else if (badge.liveCaseCountRequirement && (progress.completedLiveCases?.length || 0) >= badge.liveCaseCountRequirement) {
      shouldUnlock = true;
    }

    if (shouldUnlock) {
      const badgeRecord = {
        badgeId: badge.id,
        badgeName: badge.name,
        icon: badge.icon,
        color: badge.color,
        description: badge.description,
        unlockedAt: new Date().toISOString()
      };

      if (isRealFirebaseConfigured && db) {
        try {
          await setDoc(doc(db, `userAchievements/${uid}/items`, badge.id), badgeRecord);
        } catch (e) {
          console.warn('Firestore badge unlock error:', e.message);
        }
      }

      const achMap = getLocalCollection('userAchievements') || {};
      achMap[uid] = [...(achMap[uid] || []), badgeRecord];
      setLocalCollection('userAchievements', achMap);

      await recordLearningActivity(uid, {
        type: 'BADGE_UNLOCKED',
        title: `Unlocked Badge: ${badge.name}`,
        xpEarned: 100,
        metadata: { badgeId: badge.id }
      });

      unlocked.push(badgeRecord);
    }
  }

  return unlocked;
};

// LEARNING HISTORY
export const recordLearningActivity = async (uid, activity) => {
  if (!uid) return;
  const activityRecord = {
    id: `act_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`,
    userId: uid,
    timestamp: new Date().toISOString(),
    ...activity
  };

  if (isRealFirebaseConfigured && db) {
    try {
      await setDoc(doc(db, `learningHistory/${uid}/items`, activityRecord.id), activityRecord);
    } catch (e) {
      console.warn('Firestore recordLearningActivity error:', e.message);
    }
  }

  const histMap = getLocalCollection('learningHistory') || {};
  histMap[uid] = [activityRecord, ...(histMap[uid] || [])].slice(0, 50);
  setLocalCollection('learningHistory', histMap);
};

export const getLearningHistory = async (uid) => {
  if (!uid) return [];
  if (isRealFirebaseConfigured && db) {
    try {
      const q = query(
        collection(db, `learningHistory/${uid}/items`),
        orderBy('timestamp', 'desc')
      );
      const snap = await getDocs(q);
      if (!snap.empty) {
        return snap.docs.map(d => d.data());
      }
    } catch (e) {
      console.warn('Firestore getLearningHistory error:', e.message);
    }
  }
  const histMap = getLocalCollection('learningHistory') || {};
  return histMap[uid] || [];
};

// QUIZ ATTEMPTS
export const recordQuizAttempt = async (uid, attemptData) => {
  const attemptId = `qa_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`;
  const record = {
    attemptId,
    userId: uid,
    topicId: attemptData.topicId,
    score: attemptData.score,
    totalQuestions: attemptData.totalQuestions,
    percentage: Math.round((attemptData.score / attemptData.totalQuestions) * 100),
    answers: attemptData.answers,
    completedAt: new Date().toISOString()
  };

  if (isRealFirebaseConfigured && db) {
    try {
      await setDoc(doc(db, 'quizAttempts', attemptId), record);
    } catch (e) {
      console.warn('Firestore recordQuizAttempt error:', e.message);
    }
  }

  const attempts = getLocalCollection('quizAttempts') || [];
  attempts.unshift(record);
  setLocalCollection('quizAttempts', attempts.slice(0, 100));

  return record;
};

// CONTENT GETTERS & SEARCH
export const getTopics = async () => {
  if (isRealFirebaseConfigured && db) {
    try {
      const snap = await getDocs(collection(db, 'topics'));
      if (!snap.empty) {
        return snap.docs.map(d => d.data());
      }
    } catch (e) {
      console.warn('Firestore getTopics error:', e.message);
    }
  }
  const topicsObj = getLocalCollection('topics') || {};
  return Object.values(topicsObj);
};

export const getScenarios = async (topicId = null) => {
  if (isRealFirebaseConfigured && db) {
    try {
      let q = collection(db, 'scenarios');
      if (topicId) q = query(q, where('topicId', '==', topicId));
      const snap = await getDocs(q);
      if (!snap.empty) {
        return snap.docs.map(d => d.data());
      }
    } catch (e) {
      console.warn('Firestore getScenarios error:', e.message);
    }
  }
  const scObj = getLocalCollection('scenarios') || {};
  const list = Object.values(scObj);
  return topicId ? list.filter(s => s.topicId === topicId) : list;
};

export const getQuizQuestions = async (topicId = null) => {
  if (isRealFirebaseConfigured && db) {
    try {
      let q = collection(db, 'quizQuestions');
      if (topicId) q = query(q, where('topicId', '==', topicId));
      const snap = await getDocs(q);
      if (!snap.empty) {
        return snap.docs.map(d => d.data());
      }
    } catch (e) {
      console.warn('Firestore getQuizQuestions error:', e.message);
    }
  }
  const qqObj = getLocalCollection('quizQuestions') || {};
  const list = Object.values(qqObj);
  return topicId ? list.filter(q => q.topicId === topicId) : list;
};

export const getResources = async (category = null) => {
  if (isRealFirebaseConfigured && db) {
    try {
      let q = collection(db, 'resources');
      if (category && category !== 'All') q = query(q, where('category', '==', category));
      const snap = await getDocs(q);
      if (!snap.empty) {
        return snap.docs.map(d => d.data());
      }
    } catch (e) {
      console.warn('Firestore getResources error:', e.message);
    }
  }
  const resObj = getLocalCollection('resources') || {};
  const list = Object.values(resObj);
  return category && category !== 'All' ? list.filter(r => r.category === category) : list;
};

// LEADERBOARD
export const getLeaderboard = async (timeRange = 'all') => {
  if (isRealFirebaseConfigured && db) {
    try {
      const q = query(collection(db, 'leaderboard'), orderBy('xp', 'desc'));
      const snap = await getDocs(q);
      if (!snap.empty) {
        return snap.docs.map((d, index) => ({ ...d.data(), rank: index + 1 }));
      }
    } catch (e) {
      console.warn('Firestore getLeaderboard error:', e.message);
    }
  }
  const lbObj = getLocalCollection('leaderboard') || {};
  const list = Object.values(lbObj);
  return list.sort((a, b) => b.xp - a.xp).map((item, index) => ({ ...item, rank: index + 1 }));
};

// ADMIN: VERIFICATION & CONTENT MANAGEMENT
export const updateContentVerification = async (contentId, verificationData) => {
  const payload = {
    contentId,
    verificationStatus: verificationData.verificationStatus || 'VERIFIED',
    lastVerifiedAt: new Date().toISOString().split('T')[0],
    reviewedBy: verificationData.reviewedBy || 'Admin Reviewer',
    notes: verificationData.notes || '',
    updatedAt: new Date().toISOString()
  };

  if (isRealFirebaseConfigured && db) {
    try {
      await setDoc(doc(db, 'contentVerification', contentId), payload, { merge: true });
    } catch (e) {
      console.warn('Firestore updateContentVerification error:', e.message);
    }
  }

  const verifications = getLocalCollection('contentVerification') || {};
  verifications[contentId] = payload;
  setLocalCollection('contentVerification', verifications);
  return payload;
};

// SEED TO REAL FIRESTORE UTILITY
export const seedLiveFirestore = async () => {
  if (!isRealFirebaseConfigured || !db) {
    throw new Error('Real Firebase is not configured in .env');
  }

  // Seed topics
  for (const topic of TOPICS) {
    await setDoc(doc(db, 'topics', topic.id), topic);
  }
  // Seed scenarios
  for (const sc of SCENARIOS) {
    await setDoc(doc(db, 'scenarios', sc.id), sc);
  }
  // Seed quiz
  for (const qq of QUIZ_QUESTIONS) {
    await setDoc(doc(db, 'quizQuestions', qq.id), qq);
  }
  // Seed resources
  for (const res of RESOURCES) {
    await setDoc(doc(db, 'resources', res.id), res);
  }
  // Seed badges
  for (const b of BADGES) {
    await setDoc(doc(db, 'achievements', b.id), b);
  }
  // Seed initial leaderboard
  for (const lb of SEED_LEADERBOARD) {
    await setDoc(doc(db, 'leaderboard', lb.uid), lb);
  }

  return { success: true, count: TOPICS.length + SCENARIOS.length + QUIZ_QUESTIONS.length + RESOURCES.length };
};
