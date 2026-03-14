import type { Language } from '../context/LanguageContext';

export type Translatable = Record<Language, string>;
export type TranslatableList = Record<Language, string[]>;

export interface RawExperience {
  role: Translatable;
  company: string;
  location: Translatable;
  startDate: Date;
  endDate: Date | null;
  description: TranslatableList;
  technologies: string[];
}

export interface RawEducation {
  degree: Translatable;
  institution: string;
  period: string;
  description?: Translatable;
}

export interface ResumeData {
  title: Translatable;
  summary: Translatable;
  experience: RawExperience[];
  education: RawEducation[];
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  description?: string;
}

export interface PortfolioData {
  title: string;
  summary: string;
  experience: Experience[];
  education: Education[];
}
