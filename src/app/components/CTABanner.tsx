'use client';

export default function CTABanner() {
  return (
    <section style={{ background: '#fff', padding: '100px 0', borderTop: '1.5px solid #f3f4f6' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px' }}>

        {/* Inner box */}
        <div style={{
          background: '#111',
          borderRadius: 32,
          padding: '80px 72px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 40,
          position: 'relative',
          overflow: 'hidden',
        }}>

          {/* Background decoration */}
          <div style={{
            position: 'absolute', right: -80, top: -80,
            width: 400, height: 400,
            borderRadius: '50%',
            background: 'radial-gradient(circle, #22c55e18 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />
          <div style={{
            position: 'absolute', left: -40, bottom: -60,
            width: 300, height: 300,
            borderRadius: '50%',
            background: 'radial-gradient(circle, #f9731618 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />

          {/* Text */}
          <div style={{ position: 'relative', zIndex: 1, maxWidth: 600 }}>
            <span style={{ fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#6b7280', display: 'block', marginBottom: 16 }}>
              — Birlikte Çalışalım
            </span>
            <h2 className="heading-lg" style={{ color: '#fff', marginBottom: 16 }}>
              Fikrinizi{' '}
              <span className="pill pill-green">hayata</span>
              {' '}geçirelim.
            </h2>
            <p style={{ color: '#9ca3af', fontSize: '1rem', lineHeight: 1.7, fontFamily: "'Inter', sans-serif" }}>
              Startuptan büyük ölçekli projelere kadar — vizyonunuzu etkili dijital ürünlere dönüştürüyorum.
            </p>
          </div>

          {/* CTA Button */}
          <div style={{ position: 'relative', zIndex: 1, flexShrink: 0 }}>
            <a href="#contact" style={{
              display: 'inline-flex', alignItems: 'center', gap: 12,
              background: '#fff', color: '#111',
              padding: '18px 40px',
              borderRadius: 50, fontWeight: 800, fontSize: '1rem',
              textDecoration: 'none',
              transition: 'all 0.25s ease',
              fontFamily: "'Syne', sans-serif",
              letterSpacing: '-0.01em',
            }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLAnchorElement).style.background = '#22c55e';
                (e.currentTarget as HTMLAnchorElement).style.color = '#fff';
                (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLAnchorElement).style.background = '#fff';
                (e.currentTarget as HTMLAnchorElement).style.color = '#111';
                (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)';
              }}
            >
              Hemen Başlayalım
              <span style={{ fontSize: '1.2rem' }}>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
