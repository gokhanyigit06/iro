'use client';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: '#111', borderTop: '1px solid #1f2937' }}>
      {/* Main footer */}
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '64px 40px 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr', gap: 48, marginBottom: 56 }}>

          {/* Brand */}
          <div>
            <div style={{ fontWeight: 900, fontSize: '2rem', color: '#fff', letterSpacing: '-0.05em', marginBottom: 12 }}>İ.Ç</div>
            <p style={{ color: '#6b7280', fontSize: '0.88rem', lineHeight: 1.7, fontFamily: "'Inter',sans-serif", maxWidth: 240, marginBottom: 24 }}>
              Modern, performanslı ve estetik web uygulamaları geliştiren Full Stack Developer.
            </p>
            {/* Socials */}
            <div style={{ display: 'flex', gap: 10 }}>
              {[
                { emoji: '🐙', href: 'https://github.com/', label: 'GitHub' },
                { emoji: '💼', href: 'https://linkedin.com/', label: 'LinkedIn' },
              ].map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  title={s.label}
                  style={{ width: 38, height: 38, borderRadius: 10, background: '#1f2937', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, textDecoration: 'none', transition: 'background 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.background = '#374151')}
                  onMouseLeave={e => (e.currentTarget.style.background = '#1f2937')}
                >{s.emoji}</a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <div style={{ color: '#fff', fontWeight: 800, fontSize: '0.85rem', marginBottom: 20, letterSpacing: '0.05em' }}>Sayfalar</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[['#home', 'Ana Sayfa'], ['#about', 'Hakkımda'], ['#services', 'Hizmetler'], ['#projects', 'Projeler']].map(([href, label]) => (
                <a key={href} href={href} style={{ color: '#6b7280', textDecoration: 'none', fontSize: '0.88rem', fontFamily: "'Inter',sans-serif", transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#6b7280')}
                >{label}</a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <div style={{ color: '#fff', fontWeight: 800, fontSize: '0.85rem', marginBottom: 20, letterSpacing: '0.05em' }}>Hizmetler</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {['Full Stack Dev', 'UI/UX Tasarım', 'Firebase & Cloud', 'Performans & SEO'].map(s => (
                <span key={s} style={{ color: '#6b7280', fontSize: '0.88rem', fontFamily: "'Inter',sans-serif" }}>{s}</span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <div style={{ color: '#fff', fontWeight: 800, fontSize: '0.85rem', marginBottom: 20, letterSpacing: '0.05em' }}>İletişim</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { icon: '✉️', val: 'irem@example.com' },
                { icon: '📍', val: 'İstanbul, Türkiye' },
                { icon: '🟢', val: 'Müsait — İş Teklifleri Açık' },
              ].map(({ icon, val }) => (
                <div key={val} style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                  <span style={{ fontSize: 14, flexShrink: 0, marginTop: 1 }}>{icon}</span>
                  <span style={{ color: '#6b7280', fontSize: '0.88rem', fontFamily: "'Inter',sans-serif", lineHeight: 1.5 }}>{val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid #1f2937', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ color: '#4b5563', fontSize: '0.82rem', fontFamily: "'Inter',sans-serif" }}>
            © {year} İrem Çağan. Tüm hakları saklıdır.
          </p>
          <p style={{ color: '#4b5563', fontSize: '0.82rem', fontFamily: "'Inter',sans-serif" }}>
            Next.js + Tailwind CSS — Firebase Hosting&apos;de barındırılıyor
          </p>
        </div>
      </div>
    </footer>
  );
}
