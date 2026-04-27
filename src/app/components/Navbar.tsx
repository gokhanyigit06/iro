'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: "Let's Talk" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const ids = ['home', 'about', 'services', 'projects', 'contact'];
      for (const id of [...ids].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 150) { setActive(id); break; }
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav style={{
      position: 'fixed',
      top: 0, left: 0, right: 0,
      zIndex: 100,
      padding: scrolled ? '14px 48px' : '22px 48px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      background: 'rgba(0,0,0,0.92)',
      boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.5)' : 'none',
      transition: 'all 0.3s ease',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
    }}>
      {/* Logo */}
      <a href="#home" style={{
        fontFamily: "'Syne', sans-serif",
        fontSize: '1.3rem',
        fontWeight: 900,
        letterSpacing: '-0.04em',
        color: '#fff',
        textDecoration: 'none',
      }}>İ.Ç</a>

      {/* Desktop links */}
      <ul style={{
        display: 'flex',
        alignItems: 'center',
        gap: 36,
        listStyle: 'none',
        margin: 0,
        padding: 0,
      }}>
        {navLinks.map(link => {
          const id = link.href.replace('#', '');
          const isLast = id === 'contact';
          return (
            <li key={link.href} style={{ display: 'none' }}
              className="md-show">
              <a
                href={link.href}
                style={isLast ? {
                  background: '#fff',
                  color: '#000',
                  padding: '10px 22px',
                  borderRadius: '50px',
                  fontWeight: 700,
                  fontSize: '0.88rem',
                  textDecoration: 'none',
                  fontFamily: "'Syne', sans-serif",
                  transition: 'all 0.2s',
                  display: 'block',
                } : {
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  color: active === id ? '#e71c39' : 'rgba(255,255,255,0.65)',
                  textDecoration: 'none',
                  fontFamily: "'Syne', sans-serif",
                  transition: 'color 0.2s',
                  display: 'block',
                }}
              >
                {link.label}
              </a>
            </li>
          );
        })}
      </ul>

      {/* Mobile toggle */}
      <button
        className="mobile-toggle"
        style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 6, display: 'none', alignItems: 'center' }}
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle menu"
      >
        {mobileOpen ? <X size={22} color="#fff" /> : <Menu size={22} color="#fff" />}
      </button>

      {/* Mobile menu */}
      {mobileOpen && (
        <div style={{
          position: 'fixed', inset: 0, top: '68px',
          background: '#000', zIndex: 99,
          padding: '32px 24px',
          display: 'flex', flexDirection: 'column', gap: '24px',
          borderTop: '1px solid rgba(255,255,255,0.08)',
        }}>
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontSize: '1.6rem', fontWeight: 900,
                color: '#fff', textDecoration: 'none',
                fontFamily: "'Syne', sans-serif",
              }}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (min-width: 768px) { .md-show { display: list-item !important; } }
        @media (max-width: 767px) { .mobile-toggle { display: flex !important; } }
      `}</style>
    </nav>
  );
}
