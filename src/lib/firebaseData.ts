import { db } from './firebase';
import {
  doc, getDoc, collection, getDocs,
  addDoc, serverTimestamp, query, orderBy,
} from 'firebase/firestore';
import type {
  HeroData, AboutData, Service, Project,
  Skill, TechPill, ContactData, ContactMessage,
} from '@/types/portfolio';

// ── Hero ──────────────────────────────────────────────
export async function getHeroData(): Promise<HeroData | null> {
  const snap = await getDoc(doc(db, 'portfolio', 'hero'));
  return snap.exists() ? (snap.data() as HeroData) : null;
}

// ── About ─────────────────────────────────────────────
export async function getAboutData(): Promise<AboutData | null> {
  const snap = await getDoc(doc(db, 'portfolio', 'about'));
  return snap.exists() ? (snap.data() as AboutData) : null;
}

// ── Services ──────────────────────────────────────────
export async function getServices(): Promise<Service[]> {
  const snap = await getDocs(query(collection(db, 'services'), orderBy('num')));
  return snap.docs.map(d => ({ id: d.id, ...d.data() } as Service));
}

// ── Projects ──────────────────────────────────────────
export async function getProjects(): Promise<Project[]> {
  const snap = await getDocs(query(collection(db, 'projects'), orderBy('order')));
  return snap.docs.map(d => ({ id: d.id, ...d.data() } as Project));
}

// ── Skills ────────────────────────────────────────────
export async function getSkills(): Promise<Skill[]> {
  const snap = await getDocs(query(collection(db, 'skills'), orderBy('order')));
  return snap.docs.map(d => ({ id: d.id, ...d.data() } as Skill));
}

// ── Tech Pills ────────────────────────────────────────
export async function getTechPills(): Promise<TechPill[]> {
  const snap = await getDocs(query(collection(db, 'techPills'), orderBy('order')));
  return snap.docs.map(d => ({ id: d.id, ...d.data() } as TechPill));
}

// ── Contact Info ──────────────────────────────────────
export async function getContactData(): Promise<ContactData | null> {
  const snap = await getDoc(doc(db, 'portfolio', 'contact'));
  return snap.exists() ? (snap.data() as ContactData) : null;
}

// ── Save Contact Message ──────────────────────────────
export async function saveContactMessage(msg: Omit<ContactMessage, 'createdAt'>): Promise<void> {
  await addDoc(collection(db, 'messages'), {
    ...msg,
    createdAt: serverTimestamp(),
  });
}
