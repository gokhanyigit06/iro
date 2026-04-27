'use client';

import { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    await new Promise(r => setTimeout(r, 1400));
    setSending(false);
    setDone(true);
    setForm({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setDone(false), 5000);
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    border: '1px solid #1a1a1a',
    borderRadius: 12,
    padding: '14px 18px',
    fontSize: '0.95rem',
    fontFamily: "'Inter', sans-serif",
    background: '#0a0a0a',
    color: '#fff',
    outline: 'none',
    transition: 'border-color 0.2s',
  };

  return (
    <section id="contact" className="parallax-section" style={{
      background: '#000',
      paddingBottom: 100,
      position: 'relative',
      overflow: 'hidden',
    }}>

      {/* 111.svg — sol alana sabitlenmiş arka plan */}
      <div style={{
        position: 'absolute',
        left: '8%',
        top: 0,
        bottom: 0,
        width: '50%',
        zIndex: 0,
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
      }}>
        <img
          src="/111.svg"
          alt=""
          style={{
            height: '100%',
            width: 'auto',
            maxWidth: 'none',
            opacity: 0.4,
            userSelect: 'none',
          }}
          draggable={false}
        />
      </div>


      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '120px clamp(24px,5vw,80px) 0', position: 'relative', zIndex: 1 }}>

        {/* Başlık */}
        <div className="reveal" style={{ marginBottom: 56 }}>
          <span style={{
            fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.22em',
            textTransform: 'uppercase', color: '#e71c39',
            display: 'block', marginBottom: 14,
            fontFamily: "'Syne', sans-serif",
          }}>— Let's Work Together</span>

          <h2 style={{
            fontFamily: "'Syne', sans-serif", fontWeight: 900,
            fontSize: 'clamp(2.8rem, 5vw, 6rem)',
            color: '#fff', letterSpacing: '-0.04em', lineHeight: 0.95, margin: '0 0 20px',
          }}>
            Got an idea?<br />
            <span style={{ color: '#e71c39' }}>Let's talk.</span>
          </h2>

          <p style={{
            color: '#444', fontSize: '0.95rem', lineHeight: 1.7,
            fontFamily: "'Inter', sans-serif", maxWidth: 420,
          }}>
            From creative projects to brand identity — I'm here to create with you.
          </p>
        </div>

        {/* İki kolon: sol bilgi / sağ form */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.8fr', gap: 48, alignItems: 'start' }}>


          {/* Sol — iletişim bilgileri */}
          <div className="reveal-left" style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {[
              { icon: Mail,    label: 'Email',    value: 'irem@example.com', href: 'mailto:irem@example.com' },
              { icon: MapPin,  label: 'Location', value: 'Istanbul, Turkey', href: null },
            ].map(({ icon: Icon, label, value, href }) => (
              <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <div style={{
                  width: 48, height: 48, borderRadius: 14,
                  border: '1px solid #1a1a1a', background: '#0a0a0a',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>
                  <Icon size={20} color="#e71c39" />
                </div>
                <div>
                  <div style={{ fontSize: '0.72rem', color: '#444', fontFamily: "'Inter',sans-serif", marginBottom: 2, letterSpacing: '0.1em', textTransform: 'uppercase' }}>{label}</div>
                  {href
                    ? <a href={href} style={{ fontWeight: 700, color: '#fff', textDecoration: 'none', fontSize: '0.95rem', fontFamily: "'Syne',sans-serif" }}>{value}</a>
                    : <span style={{ fontWeight: 700, color: '#fff', fontSize: '0.95rem', fontFamily: "'Syne',sans-serif" }}>{value}</span>}
                </div>
              </div>
            ))}

            {/* Müsaitlik */}
            <div style={{
              padding: '18px 22px', border: '1px solid #e71c3922',
              borderRadius: 14, background: '#e71c3908',
              display: 'flex', alignItems: 'center', gap: 12, marginTop: 8,
            }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#e71c39', flexShrink: 0, animation: 'pulse 2s ease-in-out infinite' }} />
              <div>
                <div style={{ fontWeight: 800, color: '#fff', fontFamily: "'Syne',sans-serif", fontSize: '0.9rem' }}>Available</div>
                <div style={{ fontSize: '0.78rem', color: '#555', fontFamily: "'Inter',sans-serif", marginTop: 2 }}>Open to new projects</div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: 12, marginTop: 4 }}>
              {[
                { label: 'GitHub',   href: 'https://github.com/' },
                { label: 'LinkedIn', href: 'https://linkedin.com/' },
                { label: 'Behance',  href: 'https://behance.net/' },
              ].map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  style={{ padding: '10px 18px', border: '1px solid #1a1a1a', borderRadius: 50, textDecoration: 'none', color: '#555', fontWeight: 700, fontSize: '0.82rem', fontFamily: "'Syne',sans-serif", transition: 'color 0.2s, border-color 0.2s', letterSpacing: '0.05em' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#e71c39'; (e.currentTarget as HTMLAnchorElement).style.borderColor = '#e71c3944'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#555'; (e.currentTarget as HTMLAnchorElement).style.borderColor = '#1a1a1a'; }}
                >{s.label}</a>
              ))}
            </div>
          </div>

          {/* Sağ — form */}
          <div className="reveal-right reveal-delay-1" style={{ border: '1px solid #1a1a1a', borderRadius: 20, padding: '40px 36px', background: '#050505' }}>
            {done ? (
              <div style={{ textAlign: 'center', padding: '56px 0' }}>
                <CheckCircle size={56} color="#e71c39" style={{ margin: '0 auto 16px', display: 'block' }} />
                <h3 style={{ fontWeight: 900, fontSize: '1.5rem', marginBottom: 8, color: '#fff', fontFamily: "'Syne',sans-serif" }}>Message Received!</h3>
                <p style={{ color: '#444', fontFamily: "'Inter',sans-serif" }}>I'll get back to you as soon as possible.</p>
              </div>
            ) : (
              <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <div>
                    <label htmlFor="c-name" style={{ fontSize: '0.78rem', fontWeight: 700, color: '#444', display: 'block', marginBottom: 8, fontFamily: "'Syne',sans-serif", letterSpacing: '0.08em', textTransform: 'uppercase' }}>Your Name *</label>
                    <input id="c-name" type="text" required style={inputStyle} placeholder="Irem Cagan" value={form.name}
                      onFocus={e => (e.target as HTMLInputElement).style.borderColor = '#e71c39'}
                      onBlur={e => (e.target as HTMLInputElement).style.borderColor = '#1a1a1a'}
                      onChange={e => setForm({ ...form, name: e.target.value })} />
                  </div>
                  <div>
                    <label htmlFor="c-email" style={{ fontSize: '0.78rem', fontWeight: 700, color: '#444', display: 'block', marginBottom: 8, fontFamily: "'Syne',sans-serif", letterSpacing: '0.08em', textTransform: 'uppercase' }}>Email *</label>
                    <input id="c-email" type="email" required style={inputStyle} placeholder="irem@example.com" value={form.email}
                      onFocus={e => (e.target as HTMLInputElement).style.borderColor = '#e71c39'}
                      onBlur={e => (e.target as HTMLInputElement).style.borderColor = '#1a1a1a'}
                      onChange={e => setForm({ ...form, email: e.target.value })} />
                  </div>
                </div>
                <div>
                  <label htmlFor="c-subject" style={{ fontSize: '0.78rem', fontWeight: 700, color: '#444', display: 'block', marginBottom: 8, fontFamily: "'Syne',sans-serif", letterSpacing: '0.08em', textTransform: 'uppercase' }}>Subject</label>
                  <input id="c-subject" type="text" style={inputStyle} placeholder="Project collaboration" value={form.subject}
                    onFocus={e => (e.target as HTMLInputElement).style.borderColor = '#e71c39'}
                    onBlur={e => (e.target as HTMLInputElement).style.borderColor = '#1a1a1a'}
                    onChange={e => setForm({ ...form, subject: e.target.value })} />
                </div>
                <div>
                  <label htmlFor="c-msg" style={{ fontSize: '0.78rem', fontWeight: 700, color: '#444', display: 'block', marginBottom: 8, fontFamily: "'Syne',sans-serif", letterSpacing: '0.08em', textTransform: 'uppercase' }}>Message *</label>
                  <textarea id="c-msg" required rows={5} style={{ ...inputStyle, resize: 'none' }}
                    placeholder="Hi Irem, I'd love to work with you..."
                    value={form.message}
                    onFocus={e => (e.target as HTMLTextAreaElement).style.borderColor = '#e71c39'}
                    onBlur={e => (e.target as HTMLTextAreaElement).style.borderColor = '#1a1a1a'}
                    onChange={e => setForm({ ...form, message: e.target.value })} />
                </div>
                <button id="contact-submit" type="submit" disabled={sending} style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
                  background: sending ? '#1a1a1a' : '#e71c39', color: '#fff', border: 'none',
                  padding: '16px 32px', borderRadius: 12, fontWeight: 800, fontSize: '0.95rem',
                  fontFamily: "'Syne',sans-serif", cursor: 'none', transition: 'all 0.2s', marginTop: 4,
                }}>
                  {sending
                    ? <><div style={{ width: 16, height: 16, border: '2px solid rgba(255,255,255,0.3)', borderTopColor: '#fff', borderRadius: '50%', animation: 'spin 0.7s linear infinite' }} /> Sending...</>
                    : <><Send size={16} /> Send Message</>}
                </button>
              </form>
            )}
          </div>  {/* form kartı */}
        </div>    {/* bilgi+form grid */}
      </div>      {/* ana container */}

      <style>{`
        @keyframes spin  { to { transform: rotate(360deg); } }
        @keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.6;transform:scale(1.3)} }
      `}</style>
    </section>
  );
}
