import type { Project } from './types';

export const LOGO_URL = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3e%3cdefs%3e%3cmask id='hole'%3e%3crect width='100' height='100' fill='white'/%3e%3ccircle cx='50' cy='50' r='12' fill='black'/%3e%3c/mask%3e%3c/defs%3e%3cg fill='%234285F4'%3e%3ccircle cx='50' cy='18' r='14'/%3e%3ccircle cx='81.4' cy='69' r='14'/%3e%3ccircle cx='18.6' cy='69' r='14'/%3e%3cg mask='url(%23hole)'%3e%3ccircle cx='50' cy='50' r='38'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e";

export const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'About Us', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 1,
    title: 'Textly',
    logoUrl: '',
    description: 'Harness the power of AI to distill vast amounts of text into concise summaries, generate articulate paragraphs, and rephrase content with nuance. Textly handles up to 300,000 words, transforming your workflow. Currently in beta.',
    link: '/projects',
    glowColor: 'cyan',
  },
  {
    id: 2,
    title: 'Notionary',
    logoUrl: '',
    description: 'A sanctuary for your thoughts. Notionary is a platform where you can capture notes, feelings, and emotions, and choose to share them with a global community. Find your voice, independently.',
    link: 'https://notionary-psi.vercel.app',
    glowColor: 'red',
  },
  {
    id: 3,
    title: 'OnlyPets',
    logoUrl: '',
    description: 'Connecting hearts and paws. OnlyPets is a dedicated social platform that simplifies pet adoption, creating a community for animal lovers to find their perfect companion. Every pet deserves a home.',
    link: '/projects',
    glowColor: 'amber',
  },
];