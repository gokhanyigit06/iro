'use client';

interface SkillsBreakProps {
  variant?: 'a' | 'b' | 'c';
}

const variantData = {
  a: {
    words: [
      { text: 'TYPOGRAPHY',    size: '7vw',  x: '2%',   y: '8%',   color: '#fff',    opacity: 1,    angle: '-3deg',  weight: 900 },
      { text: 'ILLUSTRATION',  size: '3.2vw',x: '38%',  y: '4%',   color: '#e71c39', opacity: 1,    angle: '0deg',   weight: 800 },
      { text: 'VISUAL',        size: '11vw', x: '18%',  y: '38%',  color: '#111',    opacity: 1,    angle: '0deg',   weight: 900, stroke: true },
      { text: 'IDENTITY',      size: '5vw',  x: '52%',  y: '62%',  color: '#fff',    opacity: 0.15, angle: '2deg',   weight: 900 },
      { text: 'BRANDING',      size: '4vw',  x: '62%',  y: '12%',  color: '#fff',    opacity: 0.9,  angle: '-1deg',  weight: 700 },
      { text: 'EDITORIAL',     size: '2.4vw',x: '5%',   y: '72%',  color: '#e71c39', opacity: 1,    angle: '0deg',   weight: 800 },
      { text: 'CONCEPT ART',   size: '3vw',  x: '68%',  y: '70%',  color: '#fff',    opacity: 0.5,  angle: '1deg',   weight: 700 },
      { text: '✦',             size: '2rem', x: '57%',  y: '32%',  color: '#e71c39', opacity: 1,    angle: '0deg',   weight: 400 },
      { text: '✦',             size: '1rem', x: '32%',  y: '82%',  color: '#333',    opacity: 1,    angle: '0deg',   weight: 400 },
    ],
    bg: '#000',
    height: '240px',
  },
  b: {
    words: [
      { text: 'DESIGN',        size: '10vw', x: '0%',   y: '5%',   color: '#0a0a0a', opacity: 1,    angle: '0deg',   weight: 900, stroke: true },
      { text: 'CODE',          size: '4.5vw',x: '55%',  y: '8%',   color: '#e71c39', opacity: 1,    angle: '-2deg',  weight: 900 },
      { text: 'MOTION',        size: '3vw',  x: '72%',  y: '55%',  color: '#fff',    opacity: 0.4,  angle: '3deg',   weight: 700 },
      { text: 'BRAND',         size: '6vw',  x: '40%',  y: '42%',  color: '#fff',    opacity: 0.08, angle: '0deg',   weight: 900 },
      { text: 'IDENTITY',      size: '2.5vw',x: '6%',   y: '68%',  color: '#fff',    opacity: 0.7,  angle: '0deg',   weight: 800 },
      { text: '◆',             size: '1.2rem',x:'48%',  y: '78%',  color: '#e71c39', opacity: 0.6,  angle: '0deg',   weight: 400 },
    ],
    bg: '#050505',
    height: '200px',
  },
  c: {
    words: [
      { text: 'İ.Ç',           size: '14vw', x: '28%',  y: '-10%', color: '#fff',    opacity: 0.04, angle: '0deg',   weight: 900 },
      { text: 'CREATIVE',      size: '5.5vw',x: '3%',   y: '15%',  color: '#e71c39', opacity: 1,    angle: '-1deg',  weight: 900 },
      { text: 'PORTFOLIO',     size: '3vw',  x: '48%',  y: '8%',   color: '#fff',    opacity: 0.6,  angle: '2deg',   weight: 700 },
      { text: 'ART',           size: '8vw',  x: '62%',  y: '30%',  color: '#111',    opacity: 1,    angle: '0deg',   weight: 900, stroke: true },
      { text: 'VISION',        size: '2.8vw',x: '5%',   y: '65%',  color: '#fff',    opacity: 0.35, angle: '0deg',   weight: 800 },
      { text: '2024',          size: '1.8vw',x: '75%',  y: '70%',  color: '#e71c39', opacity: 0.5,  angle: '0deg',   weight: 700 },
    ],
    bg: '#000',
    height: '220px',
  },
};

export default function SkillsBreak({ variant = 'a' }: SkillsBreakProps) {
  const { words, bg, height } = variantData[variant];

  return (
    <div style={{
      background: bg,
      position: 'relative',
      height,
      overflow: 'hidden',
      borderTop: '1px solid #111',
      borderBottom: '1px solid #111',
    }}>
      {words.map((w, i) => (
        <span key={i} style={{
          position: 'absolute',
          left: w.x,
          top: w.y,
          fontSize: w.size,
          fontFamily: "'Syne', sans-serif",
          fontWeight: w.weight,
          color: w.stroke ? 'transparent' : w.color,
          opacity: w.opacity,
          transform: `rotate(${w.angle})`,
          letterSpacing: '-0.03em',
          lineHeight: 1,
          whiteSpace: 'nowrap',
          userSelect: 'none',
          pointerEvents: 'none',
          WebkitTextStroke: w.stroke ? `1px ${w.color === '#111' ? '#1f1f1f' : w.color}` : undefined,
        }}>
          {w.text}
        </span>
      ))}
    </div>
  );
}
