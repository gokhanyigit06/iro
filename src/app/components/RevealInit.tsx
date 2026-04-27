'use client';
import { useScrollReveal }   from '../hooks/useScrollReveal';
import { useParallaxScroll } from '../hooks/useParallaxScroll';

export default function RevealInit() {
  useScrollReveal();
  useParallaxScroll();
  return null;
}
