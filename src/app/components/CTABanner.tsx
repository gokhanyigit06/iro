'use client';

export default function CTABanner() {
  return (
    <section style={{
      background: '#000',
      padding: '120px clamp(24px,5vw,80px)',
      borderTop: '1px solid #111',
      position: 'relative',
      overflow: 'hidden',
    }}>

      {/* Arka plan kırmızı glow */}
      <div style={{
        position: 'absolute',
        left: '50%', top: '50%',
        transform: 'translate(-50%,-50%)',
        width: '60vw', height: '60vw',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(231,28,57,0.07) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{
        maxWidth: 1200, margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 48,
        position: 'relative',
        zIndex: 1,
      }}>

        {/* Metin */}
        <div style={{ maxWidth: 680 }}>
          <span style={{
            fontSize: '0.72rem', fontWeight: 800,
            letterSpacing: '0.22em', textTransform: 'uppercase',
            color: '#e71c39', display: 'block', marginBottom: 16,
            fontFamily: "'Syne', sans-serif",
          }}>— Let's Work Together</span>

          <h2 style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 900,
            fontSize: 'clamp(2.5rem, 6vw, 6rem)',
            color: '#fff',
            letterSpacing: '-0.04em',
            lineHeight: 1.0,
            margin: '0 0 24px',
          }}>
            Got an idea?<br />
            <span style={{ color: '#e71c39' }}>Let's talk.</span>
          </h2>

          <p style={{
            color: '#444',
            fontSize: '1rem',
            lineHeight: 1.7,
            fontFamily: "'Inter', sans-serif",
            maxWidth: 480,
          }}>
            From creative projects to brand identity — I'm here to create with you.
          </p>
        </div>

        {/* Buton */}
        <a
          href="#contact"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 14,
            background: '#e71c39', color: '#fff',
            padding: '20px 44px',
            borderRadius: 50, fontWeight: 800, fontSize: '1rem',
            textDecoration: 'none',
            transition: 'all 0.25s ease',
            fontFamily: "'Syne', sans-serif",
            letterSpacing: '-0.01em',
            flexShrink: 0,
            border: '1.5px solid #e71c39',
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
            (e.currentTarget as HTMLAnchorElement).style.color = '#e71c39';
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLAnchorElement).style.background = '#e71c39';
            (e.currentTarget as HTMLAnchorElement).style.color = '#fff';
          }}
        >
          Let's Get Started
          <span style={{ fontSize: '1.3rem' }}>→</span>
        </a>
      </div>
    </section>
  );
}
