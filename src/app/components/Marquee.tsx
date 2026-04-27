'use client';

interface MarqueeProps {
  items?: string[];
  speed?: number;      // saniye cinsinden döngü süresi
  dark?: boolean;      // dark = siyah zemin, light = kırmızı zemin
}

const defaultItems = [
  'CREATIVE DESIGN',
  'TYPOGRAPHY',
  'ILLUSTRATION',
  'VISUAL IDENTITY',
  'BRANDING',
  'EDITORIAL',
  'CONCEPT ART',
];

export default function Marquee({ items = defaultItems, speed = 28, dark = false }: MarqueeProps) {
  // items'ı 4x çoğalt — sürekli döngü hissi için
  const repeated = [...items, ...items, ...items, ...items];

  return (
    <div style={{
      background: dark ? '#000' : '#e71c39',
      overflow: 'hidden',
      padding: '18px 0',
      borderTop:    dark ? '1px solid #111' : 'none',
      borderBottom: dark ? '1px solid #111' : 'none',
    }}>
      <div style={{
        display: 'flex',
        whiteSpace: 'nowrap',
        animation: `marquee-scroll ${speed}s linear infinite`,
        willChange: 'transform',
      }}>
        {repeated.map((item, i) => (
          <span key={i} style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 800,
            fontSize: 'clamp(0.7rem, 1.2vw, 0.85rem)',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: dark ? '#272727' : '#000',
            marginRight: 0,
            padding: '0 32px',
            display: 'flex',
            alignItems: 'center',
            gap: 32,
          }}>
            {item}
            <span style={{ color: dark ? '#333' : '#000', opacity: 0.4 }}>✦</span>
          </span>
        ))}
      </div>

      <style>{`
        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
