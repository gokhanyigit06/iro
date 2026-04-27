'use client';

import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [phase, setPhase]   = useState<'show' | 'exit' | 'done'>('show');
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    // Hızlı sayaç
    let val = 0;
    const interval = setInterval(() => {
      val += Math.floor(Math.random() * 12) + 4;
      if (val >= 100) { val = 100; clearInterval(interval); }
      setCounter(val);
    }, 40);

    // 2.2 sn sonra çıkış animasyonu
    const t1 = setTimeout(() => setPhase('exit'), 2200);
    // 2.9 sn sonra tamamen kaldır
    const t2 = setTimeout(() => setPhase('done'), 2900);

    return () => { clearInterval(interval); clearTimeout(t1); clearTimeout(t2); };
  }, []);

  if (phase === 'done') return null;

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 100000,
      background: '#000',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      transition: phase === 'exit' ? 'opacity 0.7s ease, transform 0.7s cubic-bezier(0.76,0,0.24,1)' : 'none',
      opacity: phase === 'exit' ? 0 : 1,
      transform: phase === 'exit' ? 'scale(1.04)' : 'scale(1)',
      pointerEvents: phase === 'exit' ? 'none' : 'auto',
    }}>
      {/* İsim */}
      <div style={{
        fontFamily: "'Syne', sans-serif",
        fontWeight: 900,
        fontSize: 'clamp(2.5rem, 6vw, 7rem)',
        color: '#fff',
        letterSpacing: '-0.04em',
        lineHeight: 1,
        marginBottom: 40,
        overflow: 'hidden',
      }}>
        <span style={{
          display: 'inline-block',
          animation: 'slideUp 0.6s cubic-bezier(0.16,1,0.3,1) forwards',
        }}>İrem</span>
        {' '}
        <span style={{
          display: 'inline-block',
          color: '#e71c39',
          animation: 'slideUp 0.6s 0.12s cubic-bezier(0.16,1,0.3,1) both',
        }}>Çağan</span>
      </div>

      {/* Progress bar */}
      <div style={{
        width: 'clamp(200px, 30vw, 400px)',
        height: 1,
        background: '#1a1a1a',
        borderRadius: 2,
        overflow: 'hidden',
      }}>
        <div style={{
          height: '100%',
          width: `${counter}%`,
          background: '#e71c39',
          transition: 'width 0.05s linear',
        }} />
      </div>

      {/* Sayaç */}
      <span style={{
        marginTop: 16,
        fontFamily: "'Syne', sans-serif",
        fontWeight: 800,
        fontSize: '0.75rem',
        letterSpacing: '0.2em',
        color: '#444',
      }}>{String(counter).padStart(3, '0')}</span>

      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(60px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
