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
  try {
    const snap = await getDoc(doc(db, 'portfolio', 'hero'));
    return snap.exists() ? (snap.data() as HeroData) : null;
  } catch { return null; }
}

// ── About ─────────────────────────────────────────────
export async function getAboutData(): Promise<AboutData | null> {
  try {
    const snap = await getDoc(doc(db, 'portfolio', 'about'));
    return snap.exists() ? (snap.data() as AboutData) : null;
  } catch { return null; }
}

// ── Services ──────────────────────────────────────────
export async function getServices(): Promise<Service[]> {
  try {
    const snap = await getDocs(query(collection(db, 'services'), orderBy('num')));
    return snap.docs.map(d => ({ id: d.id, ...d.data() } as Service));
  } catch { return []; }
}

// ── Projects ──────────────────────────────────────────
export async function getProjects(): Promise<Project[]> {
  try {
    const snap = await getDocs(query(collection(db, 'projects'), orderBy('order')));
    return snap.docs.map(d => ({ id: d.id, ...d.data() } as Project));
  } catch { return []; }
}

// ── Skills ────────────────────────────────────────────
export async function getSkills(): Promise<Skill[]> {
  try {
    const snap = await getDocs(query(collection(db, 'skills'), orderBy('order')));
    return snap.docs.map(d => ({ id: d.id, ...d.data() } as Skill));
  } catch { return []; }
}

// ── Tech Pills ────────────────────────────────────────
export async function getTechPills(): Promise<TechPill[]> {
  try {
    const snap = await getDocs(query(collection(db, 'techPills'), orderBy('order')));
    return snap.docs.map(d => ({ id: d.id, ...d.data() } as TechPill));
  } catch { return []; }
}

// ── Contact Info ──────────────────────────────────────
export async function getContactData(): Promise<ContactData | null> {
  try {
    const snap = await getDoc(doc(db, 'portfolio', 'contact'));
    return snap.exists() ? (snap.data() as ContactData) : null;
  } catch { return null; }
}

// ── Save Contact Message ──────────────────────────────
export async function saveContactMessage(msg: Omit<ContactMessage, 'createdAt'>): Promise<void> {
  await addDoc(collection(db, 'messages'), {
    ...msg,
    createdAt: serverTimestamp(),
  });
}
