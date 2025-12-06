// Portfolio Domain Types

export interface PersonalInfo {
  name: string;
  title: string;
  subtitle: string;
  description: string;
  avatar: string;
  location: string;
  email: string;
}

export interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon: 'github' | 'linkedin' | 'x' | 'phone' | 'email';
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  technologies: string[];
  logo?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  coordinates?: {
    lat: number;
    lng: number;
  };
}

export interface CVDownload {
  language: 'tr' | 'en';
  label: string;
  filename: string;
}

export interface PortfolioData {
  personalInfo: PersonalInfo;
  socialLinks: SocialLink[];
  experiences: Experience[];
  projects: Project[];
  cvDownloads: CVDownload[];
}

