export interface HeroData {
  image: string;
}

export interface AboutData {
  subtitle: string;
  title: string;
  titleHighlight: string;
  description: string;
  name: string;
  year: string;
  photo: string;
}

export interface Service {
  id?: string;
  num: string;
  title: string;
  desc: string;
  tags: string[];
}

export interface Project {
  id?: string;
  file: string;
  title: string;
  tag: string;
  order: number;
}

export interface Skill {
  id?: string;
  name: string;
  level: number;
  emoji: string;
  color: string;
  order: number;
}

export interface TechPill {
  id?: string;
  label: string;
  order: number;
}

export interface ContactData {
  email: string;
  location: string;
  github: string;
  linkedin: string;
  behance: string;
  available: boolean;
  availabilityText: string;
}

export interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: Date;
}
