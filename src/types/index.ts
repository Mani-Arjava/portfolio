export interface NavLink {
  label: string;
  href: string;
}

export interface SiteConfig {
  name: string;
  shortName: string;
  title: string;
  description: string;
  url: string;
  ogImage: string;
}

export interface AboutData {
  title: string;
  subtitle: string;
  description: string[];
  image: string;
  stats: Stat[];
}

export interface Stat {
  label: string;
  value: number;
  suffix?: string;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  icon: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
  technologies: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  overview?: string;
  keyFeatures?: string[];
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
}

export interface Mentoring {
  id: string;
  organization: string;
  role: string;
  startDate: string;
  endDate: string;
  description: string[];
  studentsCount: number;
  technologies: string[];
  achievements: string[];
}

export interface Product {
  id: string;
  image: string;
  alt: string;
  name: string;
  subtitle: string;
  features: string[];
  imageLeft: boolean;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}
