'use client';

export default function Footer() {
  const year = new Date().getFullYear();

  const links = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: "Let's Talk" },
  ];

  const socials = [
    { label: 'GitHub', href: 'https://github.com/' },
    { label: 'LinkedIn', href: 'https://linkedin.com/' },
    { label: 'Behance', href: 'https://behance.net/' },
  ];

  return (
    <footer style={{
      background: '#000',
      borderTop: '1px solid #111',
      position: 'relative',
      overflow: 'hidden',
    }}>

      {/* Arka plan watermark */}
      <div style={{
        position: 'absolute',
        bottom: '-10%',
        right: '-2%',
        fontFamily: "'Syne', sans-serif",
        fontWeight: 900,
        fontSize: 'clamp(8rem, 18vw, 18rem)',
        color: 'rgba(255,255,255,0.025)',
        letterSpacing: '-0.05em',
        lineHeight: 1,
        userSelect: 'none',
        pointerEvents: 'none',
      }}>
        İ.Ç
      </div>

      <div style={{ padding: '40px clamp(24px,5vw,80px) 28px', position: 'relative', zIndex: 1 }}>

        {/* Tek satır: logo sol ↔ sağ kolonu */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 32, flexWrap: 'wrap', marginBottom: 32 }}>

          {/* Sol: logo */}
          <div style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 900,
            fontSize: '2rem',
            color: '#fff',
            letterSpacing: '-0.05em',
          }}>İ.Ç</div>

          {/* Sağ: nav linkleri */}
          <nav style={{ display: 'flex', gap: 'clamp(16px,3vw,40px)', flexWrap: 'wrap', alignItems: 'center' }}>
            {links.map(link => (
              <a
                key={link.href}
                href={link.href}
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  color: 'rgba(255,255,255,0.4)',
                  textDecoration: 'none',
                  letterSpacing: '0.04em',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = '#e71c39')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.4)')}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Ayraç */}
        <div style={{ height: '1px', background: '#111', marginBottom: 20 }} />

        {/* Alt satır: copyright sol / sosyaller sağ */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.75rem',
            color: 'rgba(255,255,255,0.18)',
          }}>
            © {year} İrem Çağan. All rights reserved.
          </p>

          <div style={{ display: 'flex', gap: 24 }}>
            {socials.map(s => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  color: 'rgba(255,255,255,0.18)',
                  textDecoration: 'none',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = '#e71c39')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.18)')}
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
