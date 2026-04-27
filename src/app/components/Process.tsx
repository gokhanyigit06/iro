'use client';

export default function Process() {
  return (
    <section
      id="process"
      className="parallax-section"
      style={{
        background: '#000',
        overflow: 'hidden',
        position: 'relative',
        padding: '0',
        marginTop: '-120px',
      }}
    >
      {/* SVG + baloncuk içi metin */}
      <div style={{ position: 'relative', width: '100%' }}>

        {/* Üstten siyaha fade */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0,
          height: '80px',
          background: 'linear-gradient(to bottom, #000 0%, transparent 100%)',
          zIndex: 3, pointerEvents: 'none',
        }} />

        {/* SVG — hafif yukarı-aşağı yüzme animasyonu */}
        <div style={{ animation: 'process-float 6s ease-in-out infinite' }}>
          <img
            src="/5.svg?v=6"
            alt="Process Diagram"
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </div>

        {/* Baloncuğun içine metin — pulse animasyonu */}
        <div style={{
          position: 'absolute',
          top: '38%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          zIndex: 4,
          pointerEvents: 'none',
          width: '40%',
          animation: 'process-pulse 6s ease-in-out infinite',
        }}>
          <span style={{
            fontSize: 'clamp(0.55rem, 0.8vw, 0.72rem)',
            fontWeight: 800,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#e71c39',
            display: 'block',
            marginBottom: 10,
            fontFamily: "'Syne', sans-serif",
          }}>How I Work</span>
          <h2 style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 900,
            fontSize: 'clamp(1.6rem, 3vw, 4rem)',
            color: '#fff',
            letterSpacing: '-0.03em',
            lineHeight: 1.0,
            margin: 0,
          }}>
            Think first.<br />
            <span style={{ color: '#e71c39' }}>Design second.</span>
          </h2>
        </div>

        {/* Alttan siyaha fade */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          height: '160px',
          background: 'linear-gradient(to top, #000 0%, transparent 100%)',
          zIndex: 3, pointerEvents: 'none',
        }} />
      </div>

      <style>{`
        @keyframes process-float {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-12px); }
        }
        @keyframes process-pulse {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
          50%       { transform: translate(-50%, -50%) scale(1.03); opacity: 0.92; }
        }
      `}</style>
    </section>
  );
}
