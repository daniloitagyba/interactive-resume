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
  period: Translatable;
  description?: Translatable;
}

export interface RawCertification {
  name: Translatable;
  issuer?: string;
  issued?: Translatable;
  credentialId?: string;
}

export interface RawLanguage {
  name: Translatable;
  proficiency: Translatable;
}

export interface ResumeData {
  title: Translatable;
  summary: Translatable;
  experience: RawExperience[];
  education: RawEducation[];
  certifications: RawCertification[];
  languages: RawLanguage[];
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

export interface Certification {
  name: string;
  issuer?: string;
  issued?: string;
  credentialId?: string;
}

export interface LanguageSkill {
  name: string;
  proficiency: string;
}

export interface PortfolioData {
  title: string;
  summary: string;
  experience: Experience[];
  education: Education[];
  certifications: Certification[];
  languages: LanguageSkill[];
}
