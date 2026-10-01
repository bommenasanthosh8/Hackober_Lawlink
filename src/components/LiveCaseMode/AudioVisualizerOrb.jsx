// LAWLINK — High-Tech Audio Visualizer Orb
// Renders dynamic pulsing waveform, reactive frequency spectrum, and glowing particle aura

import React, { useEffect, useRef } from 'react';

export const AudioVisualizerOrb = ({
  isNpcSpeaking = false,
  isUserSpeaking = false,
  status = 'connected', // 'connecting' | 'connected' | 'idle'
  mode = 'live', // 'live' | 'fallback'
  size = 180
}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let phase = 0;

    const render = () => {
      phase += 0.04;
      const width = canvas.width;
      const height = canvas.height;
      const centerX = width / 2;
      const centerY = height / 2;
      const baseRadius = size * 0.28;

      ctx.clearRect(0, 0, width, height);

      // Determine state colors
      let primaryColor = '#4f46e5'; // Default indigo
      let glowColor = 'rgba(79, 70, 229, 0.4)';
      let rippleScale = 1.0;

      if (isNpcSpeaking) {
        primaryColor = '#f59e0b'; // Amber / Orange when NPC talks
        glowColor = 'rgba(245, 158, 11, 0.6)';
        rippleScale = 1.35;
      } else if (isUserSpeaking) {
        primaryColor = '#06b6d4'; // Cyan when player speaks
        glowColor = 'rgba(6, 182, 212, 0.65)';
        rippleScale = 1.25;
      } else if (status === 'connecting') {
        primaryColor = '#94a3b8';
        glowColor = 'rgba(148, 163, 184, 0.3)';
        rippleScale = 0.9;
      }

      // 1. Draw outer ambient pulsating aura rings
      for (let i = 3; i >= 1; i--) {
        const ringRadius = baseRadius + i * 16 * rippleScale + Math.sin(phase + i) * 6;
        ctx.beginPath();
        ctx.arc(centerX, centerY, Math.max(10, ringRadius), 0, Math.PI * 2);
        ctx.fillStyle = glowColor.replace(/[\d\.]+\)$/, `${0.08 / i})`);
        ctx.fill();
        ctx.lineWidth = 1.5;
        ctx.strokeStyle = primaryColor + '33';
        ctx.stroke();
      }

      // 2. Draw reactive frequency wave spikes around perimeter
      const spikes = 32;
      ctx.beginPath();
      for (let i = 0; i <= spikes; i++) {
        const angle = (i / spikes) * Math.PI * 2;
        const waveAmp = (isNpcSpeaking || isUserSpeaking)
          ? Math.sin(angle * 8 + phase * 2) * 8 + Math.cos(angle * 4 - phase) * 6
          : Math.sin(angle * 3 + phase) * 3;
        const r = baseRadius + waveAmp;
        const x = centerX + Math.cos(angle) * r;
        const y = centerY + Math.sin(angle) * r;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();

      // Gradient fill for core orb
      const grad = ctx.createRadialGradient(
        centerX - baseRadius * 0.3,
        centerY - baseRadius * 0.3,
        baseRadius * 0.1,
        centerX,
        centerY,
        baseRadius * 1.2
      );

      if (isNpcSpeaking) {
        grad.addColorStop(0, '#fef3c7');
        grad.addColorStop(0.4, '#f59e0b');
        grad.addColorStop(1, '#b45309');
      } else if (isUserSpeaking) {
        grad.addColorStop(0, '#cffafe');
        grad.addColorStop(0.4, '#06b6d4');
        grad.addColorStop(1, '#0e7490');
      } else {
        grad.addColorStop(0, '#e0e7ff');
        grad.addColorStop(0.4, '#6366f1');
        grad.addColorStop(1, '#3730a3');
      }

      ctx.fillStyle = grad;
      ctx.shadowColor = primaryColor;
      ctx.shadowBlur = (isNpcSpeaking || isUserSpeaking) ? 28 : 14;
      ctx.fill();

      // Reset shadow for crisp outline
      ctx.shadowBlur = 0;
      ctx.lineWidth = 2;
      ctx.strokeStyle = '#ffffff';
      ctx.stroke();

      // 3. Inner glassy specular highlight
      ctx.beginPath();
      ctx.ellipse(
        centerX - baseRadius * 0.35,
        centerY - baseRadius * 0.4,
        baseRadius * 0.3,
        baseRadius * 0.18,
        -Math.PI / 4,
        0,
        Math.PI * 2
      );
      ctx.fillStyle = 'rgba(255, 255, 255, 0.45)';
      ctx.fill();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [isNpcSpeaking, isUserSpeaking, status, size]);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative'
    }}>
      <canvas
        ref={canvasRef}
        width={size * 1.5}
        height={size * 1.5}
        style={{
          width: size * 1.5,
          height: size * 1.5,
          pointerEvents: 'none'
        }}
      />
      <div style={{
        marginTop: '-12px',
        fontSize: '0.75rem',
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: '0.08em',
        padding: '0.2rem 0.75rem',
        borderRadius: '999px',
        background: isNpcSpeaking 
          ? 'rgba(245, 158, 11, 0.15)' 
          : isUserSpeaking 
          ? 'rgba(6, 182, 212, 0.15)' 
          : 'rgba(148, 163, 184, 0.12)',
        color: isNpcSpeaking ? '#d97706' : isUserSpeaking ? '#0891b2' : '#64748b',
        border: `1px solid ${isNpcSpeaking ? 'rgba(245, 158, 11, 0.3)' : isUserSpeaking ? 'rgba(6, 182, 212, 0.3)' : 'rgba(148, 163, 184, 0.25)'}`,
        transition: 'all 0.25s ease'
      }}>
        {isNpcSpeaking ? '● NPC Speaking' : isUserSpeaking ? '● You Speaking' : 'Listening...'}
      </div>
    </div>
  );
};
