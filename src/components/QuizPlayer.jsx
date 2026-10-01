import React, { useState } from 'react';
import { 
  CheckCircle2, 
  XCircle, 
  HelpCircle, 
  Award, 
  RotateCcw, 
  ArrowRight, 
  ShieldCheck, 
  BookOpen,
  Trophy,
  Sparkles
} from 'lucide-react';
import { useGamification } from '../context/GamificationContext';
import { useAuth } from '../context/AuthContext';
import { recordQuizAttempt } from '../firebase/db';
import { sounds } from '../utils/soundEffects';

export const QuizPlayer = ({ topicId, topicTitle, questions, onBackToTopic }) => {
  const { user } = useAuth();
  const { addXp, triggerCelebration } = useGamification();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showExplanation, setShowExplanation] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [score, setScore] = useState(0);

  const currentQ = questions[currentIndex];

  if (!questions || questions.length === 0) {
    return (
      <div className="glass-panel" style={{ padding: '2.5rem', textAlign: 'center' }}>
        <p style={{ color: 'var(--text-secondary)' }}>No questions available for this module.</p>
        <button onClick={onBackToTopic} className="btn-secondary" style={{ marginTop: '1rem' }}>
          Back to Topic
        </button>
      </div>
    );
  }

  const handleSelect = (optionIdx) => {
    if (showExplanation) return;
    const isCorrect = optionIdx === currentQ.correctIndex;
    if (isCorrect) {
      sounds.playSuccess();
    } else {
      sounds.playError();
    }
    setSelectedAnswers(prev => ({ ...prev, [currentIndex]: optionIdx }));
    setShowExplanation(true);
  };

  const handleNext = () => {
    sounds.playClick();
    setShowExplanation(false);
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      finishQuiz();
    }
  };

  const finishQuiz = async () => {
    let calculatedScore = 0;
    questions.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correctIndex) {
        calculatedScore += 1;
      }
    });

    setScore(calculatedScore);
    setIsCompleted(true);
    triggerCelebration();

    const xpEarned = calculatedScore * 30 + 50; // Bonus for completion
    const markTopic = calculatedScore >= Math.ceil(questions.length * 0.6);

    if (markTopic) {
      sounds.playFanfare();
    } else {
      sounds.playClick();
    }

    if (user?.uid) {
      await recordQuizAttempt(user.uid, {
        topicId,
        score: calculatedScore,
        totalQuestions: questions.length,
        answers: selectedAnswers
      });

      await addXp(xpEarned, `Completed ${topicTitle} Quiz (${calculatedScore}/${questions.length})`, {
        quizId: `quiz_${topicId}`,
        topicId,
        score: calculatedScore,
        markTopicComplete: markTopic,
        type: 'QUIZ_COMPLETED'
      });
    }
  };

  const handleRestart = () => {
    sounds.playClick();
    setCurrentIndex(0);
    setSelectedAnswers({});
    setShowExplanation(false);
    setIsCompleted(false);
    setScore(0);
  };

  if (isCompleted) {
    const percentage = Math.round((score / questions.length) * 100);
    const passed = percentage >= 60;

    return (
      <div className="glass-panel" style={{ maxWidth: '640px', margin: '2rem auto', padding: '2.5rem', textAlign: 'center', animation: 'modal-slide-in 0.3s ease', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: passed ? 'linear-gradient(90deg, #10b981 0%, #34d399 100%)' : 'linear-gradient(90deg, #f59e0b 0%, #ec4899 100%)'
        }} />

        <div style={{
          width: '76px',
          height: '76px',
          borderRadius: '50%',
          background: passed ? 'rgba(16, 185, 129, 0.15)' : 'rgba(245, 158, 11, 0.15)',
          border: passed ? '2px solid #10b981' : '2px solid #f59e0b',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 1.25rem',
          boxShadow: passed ? '0 0 25px rgba(16, 185, 129, 0.3)' : '0 0 25px rgba(245, 158, 11, 0.3)'
        }}>
          <Trophy size={38} color={passed ? '#10b981' : '#f59e0b'} />
        </div>

        <h2 style={{ fontSize: '1.85rem', marginBottom: '0.5rem', fontWeight: 800 }}>
          {passed ? 'Quiz Mastered!' : 'Good Effort!'}
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.975rem', marginBottom: '1.75rem' }}>
          You scored <strong>{score} out of {questions.length}</strong> ({percentage}%) on {topicTitle}.
        </p>

        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1.5rem',
          padding: '1.35rem',
          background: 'rgba(255, 255, 255, 0.03)',
          border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-lg)',
          marginBottom: '2rem'
        }}>
          <div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700 }}>XP Earned</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#a5b4fc', marginTop: '0.2rem' }}>
              +{score * 30 + 50} XP
            </div>
          </div>
          <div style={{ width: '1px', background: 'var(--border-subtle)' }} />
          <div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700 }}>Status</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 800, color: passed ? '#10b981' : '#f59e0b', marginTop: '0.2rem' }}>
              {passed ? 'Passed ✓' : 'Needs Practice'}
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <button onClick={handleRestart} className="btn-secondary" style={{ padding: '0.75rem 1.5rem' }}>
            <RotateCcw size={16} />
            <span>Retake Quiz</span>
          </button>
          <button onClick={onBackToTopic} className="btn-primary" style={{ padding: '0.75rem 1.75rem' }}>
            <span>Back to Module</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    );
  }

  const selectedIdx = selectedAnswers[currentIndex];
  const isAnswered = selectedIdx !== undefined;

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', animation: 'modal-slide-in 0.3s ease' }}>
      {/* Progress & Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.85rem' }}>
        <button 
          onClick={() => {
            sounds.playClick();
            onBackToTopic();
          }} 
          style={{ color: 'var(--text-muted)', fontSize: '0.85rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.3rem' }}
        >
          ← Back to Topic
        </button>

        {/* Step Indicator Pills */}
        <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
          {questions.map((q, idx) => {
            const answered = selectedAnswers[idx] !== undefined;
            const isCurr = idx === currentIndex;
            const isCorr = answered && selectedAnswers[idx] === q.correctIndex;
            let dotBg = 'rgba(255, 255, 255, 0.15)';
            if (isCurr) dotBg = 'var(--primary)';
            else if (answered) dotBg = isCorr ? '#10b981' : '#f43f5e';

            return (
              <div
                key={idx}
                style={{
                  width: isCurr ? '20px' : '8px',
                  height: '8px',
                  borderRadius: '4px',
                  background: dotBg,
                  transition: 'all 0.25s ease'
                }}
              />
            );
          })}
        </div>

        <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 700 }}>
          {currentIndex + 1} / {questions.length}
        </span>
      </div>

      <div className="progress-bar-track" style={{ marginBottom: '1.5rem', height: '6px' }}>
        <div 
          className="progress-bar-fill" 
          style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }} 
        />
      </div>

      {/* Question Card */}
      <div className="glass-panel" style={{ padding: '2rem', marginBottom: '1.5rem', position: 'relative' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.85rem', flexWrap: 'wrap' }}>
          <span className="badge-tag badge-primary" style={{ fontSize: '0.75rem' }}>
            {currentQ.difficulty || 'Intermediate'}
          </span>
          <span style={{ fontSize: '0.8rem', color: 'var(--primary-light)', fontWeight: 600, background: 'rgba(99, 102, 241, 0.1)', padding: '0.2rem 0.6rem', borderRadius: '4px' }}>
            Statute: {currentQ.relevantSection}
          </span>
        </div>

        <h2 style={{ fontSize: '1.4rem', lineHeight: 1.45, marginBottom: '1.75rem', color: 'var(--text-main)', fontWeight: 700 }}>
          {currentQ.question}
        </h2>

        {/* Options */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
          {currentQ.options.map((optText, optIdx) => {
            const isThisSelected = selectedIdx === optIdx;
            const isCorrect = optIdx === currentQ.correctIndex;

            let border = '1px solid var(--border-subtle)';
            let bg = 'rgba(255, 255, 255, 0.025)';
            let icon = null;

            if (showExplanation) {
              if (isCorrect) {
                border = '2px solid #10b981';
                bg = 'rgba(16, 185, 129, 0.12)';
                icon = <CheckCircle2 size={22} color="#10b981" />;
              } else if (isThisSelected) {
                border = '2px solid #f43f5e';
                bg = 'rgba(244, 63, 94, 0.12)';
                icon = <XCircle size={22} color="#f43f5e" />;
              }
            } else if (isThisSelected) {
              border = '2px solid var(--primary-light)';
              bg = 'rgba(99, 102, 241, 0.15)';
            }

            return (
              <div
                key={optIdx}
                onClick={() => handleSelect(optIdx)}
                className="glass-panel"
                style={{
                  padding: '1.15rem',
                  border,
                  background: bg,
                  cursor: showExplanation ? 'default' : 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.85rem',
                  transition: 'all var(--transition-fast)'
                }}
              >
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: isThisSelected ? 'var(--primary)' : 'rgba(255, 255, 255, 0.05)',
                  color: isThisSelected ? '#ffffff' : 'var(--text-secondary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700,
                  fontSize: '0.875rem',
                  flexShrink: 0
                }}>
                  {String.fromCharCode(65 + optIdx)}
                </div>

                <div style={{ flex: 1, fontSize: '0.95rem', color: 'var(--text-main)', lineHeight: 1.45 }}>
                  {optText}
                </div>

                {icon && <div style={{ flexShrink: 0 }}>{icon}</div>}
              </div>
            );
          })}
        </div>

        {/* Explanation Card */}
        {showExplanation && (
          <div style={{
            marginTop: '1.75rem',
            padding: '1.35rem',
            background: 'rgba(6, 182, 212, 0.06)',
            borderLeft: '4px solid var(--accent-cyan)',
            borderTop: '1px solid var(--border-subtle)',
            borderRight: '1px solid var(--border-subtle)',
            borderBottom: '1px solid var(--border-subtle)',
            borderRadius: '0 var(--radius-md) var(--radius-md) 0',
            animation: 'modal-slide-in 0.25s ease'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: 'var(--accent-cyan)', fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.45rem' }}>
              <ShieldCheck size={18} />
              <span>Statutory Judicial Authority Breakdown:</span>
            </div>
            <p style={{ fontSize: '0.925rem', color: 'var(--text-main)', lineHeight: 1.6, margin: 0 }}>
              {currentQ.explanation}
            </p>
          </div>
        )}
      </div>

      {/* Bottom Button */}
      {showExplanation && (
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '2.5rem' }}>
          <button onClick={handleNext} className="btn-primary" style={{ padding: '0.85rem 2rem', fontSize: '1rem', fontWeight: 800 }}>
            <span>{currentIndex < questions.length - 1 ? 'Next Question' : 'Complete Quiz'}</span>
            <ArrowRight size={18} />
          </button>
        </div>
      )}
    </div>
  );
};
