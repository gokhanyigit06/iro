// scripts/seed.mjs
// Çalıştır: node scripts/seed.mjs

import { initializeApp } from 'firebase/app';
import { getFirestore, setDoc, addDoc, doc, collection } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDkFDtYXKE2VjwDny042wDwF7WNM9473ds",
  authDomain: "irem-potfolyo.firebaseapp.com",
  projectId: "irem-potfolyo",
  storageBucket: "irem-potfolyo.firebasestorage.app",
  messagingSenderId: "991494548732",
  appId: "1:991494548732:web:64433f945175a2be6a7b79",
  measurementId: "G-QVRWWTGHB2",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function seed() {
  console.log('🌱 Seeding Firestore...\n');

  // ── Hero ──────────────────────────────────────────
  await setDoc(doc(db, 'portfolio', 'hero'), {
    image: '/3svg.svg',
  });
  console.log('✅ Hero');

  // ── About ─────────────────────────────────────────
  await setDoc(doc(db, 'portfolio', 'about'), {
    subtitle: 'Visual Communication Designer',
    title: 'what am I',
    titleHighlight: 'thinking',
    description: "The real world isn't always inspiring enough. That's why I chose to draw my own. Sometimes tangled lines, sometimes colors erupting in unexpected places.\n\nFrom the outside, it might look like chaos, but this is entirely my personal order. This portfolio isn't a showcase; it's my unfiltered, living mind itself, running by my own rules.",
    name: 'İREM ÇAĞAN',
    year: '2026',
    photo: '/cover.jpg',
  });
  console.log('✅ About');

  // ── Contact ───────────────────────────────────────
  await setDoc(doc(db, 'portfolio', 'contact'), {
    email: 'irem@example.com',
    location: 'Istanbul, Turkey',
    github: 'https://github.com/gokhanyigit06',
    linkedin: 'https://linkedin.com/',
    behance: 'https://behance.net/',
    available: true,
    availabilityText: 'Open to new projects',
  });
  console.log('✅ Contact');

  // ── Services ──────────────────────────────────────
  const services = [
    {
      num: '01',
      title: 'Visual Communication Design',
      desc: 'I build strong identities through editorial design, typography, and visual language. Every project carries its own unique feel.',
      tags: ['Editorial', 'Typography', 'Brand Identity'],
    },
    {
      num: '02',
      title: 'UI/UX Design',
      desc: 'User-centered, aesthetic and functional interfaces — from wireframe to pixel perfection with Figma.',
      tags: ['Figma', 'Prototyping', 'Design System'],
    },
    {
      num: '03',
      title: 'Full Stack Development',
      desc: 'Modern web applications with React, Next.js and Node.js — from frontend to backend.',
      tags: ['React', 'Next.js', 'TypeScript'],
    },
    {
      num: '04',
      title: 'Motion & Digital',
      desc: 'Bringing brands to life through digital content, animation, and interactive experiences.',
      tags: ['Motion', 'Digital', 'Interactive'],
    },
  ];
  for (const s of services) {
    await addDoc(collection(db, 'services'), s);
  }
  console.log('✅ Services');

  // ── Projects ──────────────────────────────────────
  const projects = [
    { file: '/6.svg',  title: 'Alphabet & Bug', tag: 'Typography / Illustration', order: 1 },
    { file: '/7.svg',  title: 'Work 02',         tag: 'Visual Design',            order: 2 },
    { file: '/8.svg',  title: 'Work 03',         tag: 'Concept',                  order: 3 },
    { file: '/9.svg',  title: "Finger'S",         tag: 'Typography / Branding',   order: 4 },
    { file: '/10.svg', title: 'Work 05',         tag: 'Illustration',             order: 5 },
  ];
  for (const p of projects) {
    await addDoc(collection(db, 'projects'), p);
  }
  console.log('✅ Projects');

  // ── Skills ────────────────────────────────────────
  const skills = [
    { name: 'React / Next.js', level: 92, emoji: '⚛️', color: '#22c55e', order: 1 },
    { name: 'TypeScript',      level: 85, emoji: '🔷', color: '#3b82f6', order: 2 },
    { name: 'Tailwind CSS',    level: 95, emoji: '💨', color: '#06b6d4', order: 3 },
    { name: 'Firebase',        level: 90, emoji: '🔥', color: '#f97316', order: 4 },
    { name: 'Node.js',         level: 78, emoji: '🟢', color: '#22c55e', order: 5 },
    { name: 'Figma / Design',  level: 88, emoji: '🎨', color: '#8b5cf6', order: 6 },
    { name: 'PostgreSQL',      level: 72, emoji: '🐘', color: '#6366f1', order: 7 },
    { name: 'Git & DevOps',    level: 85, emoji: '📦', color: '#f59e0b', order: 8 },
  ];
  for (const s of skills) {
    await addDoc(collection(db, 'skills'), s);
  }
  console.log('✅ Skills');

  // ── Tech Pills ────────────────────────────────────
  const techPills = [
    'React', 'Next.js', 'TypeScript', 'Tailwind CSS',
    'Firebase', 'Node.js', 'Figma', 'Git', 'Vercel', 'PostgreSQL',
  ];
  for (let i = 0; i < techPills.length; i++) {
    await addDoc(collection(db, 'techPills'), { label: techPills[i], order: i + 1 });
  }
  console.log('✅ Tech Pills');

  console.log('\n🎉 Seed tamamlandı!');
  process.exit(0);
}

seed().catch(err => {
  console.error('❌ Hata:', err);
  process.exit(1);
});
