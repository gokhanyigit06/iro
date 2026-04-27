'use client';

import { useEffect } from 'react';

export function useScrollReveal() {
  useEffect(() => {
    const selectors = ['.reveal', '.reveal-left', '.reveal-right', '.reveal-scale'];
    const els = document.querySelectorAll(selectors.join(','));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}
