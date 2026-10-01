// Gamification Context: Realtime XP, Levels, Badges, Streaks, and Celebrations
import React, { createContext, useContext, useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { useAuth } from './AuthContext';
import { 
  subscribeToUserProgress, 
  getUserAchievements, 
  awardUserXp, 
  getLearningHistory,
  calculateLevel 
} from '../firebase/db';
import { BADGES, DAILY_CHALLENGES } from '../data/seedData';

const GamificationContext = createContext();

export const GamificationProvider = ({ children }) => {
  const { user } = useAuth();
  const [progress, setProgress] = useState(null);
  const [achievements, setAchievements] = useState([]);
  const [history, setHistory] = useState([]);
  const [newBadgeUnlocked, setNewBadgeUnlocked] = useState(null);
  const [levelUpNotice, setLevelUpNotice] = useState(null);

  // Subscribe to real-time progress for active user
  useEffect(() => {
    if (!user?.uid) {
      setProgress(null);
      setAchievements([]);
      setHistory([]);
      return;
    }

    const unsubscribe = subscribeToUserProgress(user.uid, async (latestProgress) => {
      if (latestProgress) {
        // Detect level up
        if (progress && latestProgress.level > progress.level) {
          triggerLevelUpCelebration(latestProgress.level, latestProgress.levelTitle);
        }
        setProgress(latestProgress);
      }
      // Refresh achievements and history
      const ach = await getUserAchievements(user.uid);
      setAchievements(ach);
      const hist = await getLearningHistory(user.uid);
      setHistory(hist);
    });

    return () => unsubscribe();
  }, [user?.uid]);

  // Confetti celebration helper
  const triggerCelebration = () => {
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (e) {
      // Ignore if canvas-confetti is not loaded
    }
  };

  const triggerLevelUpCelebration = (lvl, title) => {
    setLevelUpNotice({ level: lvl, title });
    try {
      confetti({
        particleCount: 150,
        spread: 100,
        origin: { y: 0.5 },
        colors: ['#4f46e5', '#eab308', '#10b981', '#ec4899']
      });
    } catch (e) {}
  };

  // Add XP helper with celebration
  const addXp = async (amount, reason, metadata = {}) => {
    if (!user?.uid) return;
    const updated = await awardUserXp(user.uid, amount, reason, metadata);
    triggerCelebration();
    // Check if new badge unlocked
    const newAch = await getUserAchievements(user.uid);
    if (newAch.length > achievements.length) {
      const newlyAdded = newAch.find(b => !achievements.some(existing => existing.badgeId === b.badgeId));
      if (newlyAdded) {
        setNewBadgeUnlocked(newlyAdded);
      }
      setAchievements(newAch);
    }
    return updated;
  };

  // Daily Challenge state
  const todayStr = new Date().toISOString().split('T')[0];
  const activeDailyChallenge = DAILY_CHALLENGES[0];
  const isDailyCompletedToday = progress?.dailyChallengeDate === todayStr;

  const completeDailyChallenge = async (selectedOptionIndex) => {
    if (isDailyCompletedToday || !user?.uid) return;
    const option = activeDailyChallenge.options[selectedOptionIndex];
    if (option.correct) {
      await addXp(activeDailyChallenge.xpReward, `Completed Daily Challenge: ${activeDailyChallenge.title}`, {
        isDailyChallenge: true,
        challengeId: activeDailyChallenge.id,
        type: 'DAILY_CHALLENGE'
      });
      return { success: true, earnedXp: activeDailyChallenge.xpReward };
    }
    return { success: false, explanation: activeDailyChallenge.explanation };
  };

  const currentLevelInfo = calculateLevel(progress?.xp || 0);

  return (
    <GamificationContext.Provider value={{
      progress,
      levelInfo: currentLevelInfo,
      achievements,
      history,
      allBadges: BADGES,
      addXp,
      triggerCelebration,
      activeDailyChallenge,
      isDailyCompletedToday,
      completeDailyChallenge,
      newBadgeUnlocked,
      clearNewBadgeNotice: () => setNewBadgeUnlocked(null),
      levelUpNotice,
      clearLevelUpNotice: () => setLevelUpNotice(null)
    }}>
      {children}
    </GamificationContext.Provider>
  );
};

export const useGamification = () => useContext(GamificationContext);
