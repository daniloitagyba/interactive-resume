import type { Language } from '../context/LanguageContext';
import type { PortfolioData } from '../types';
import { RESUME_DATA } from './resume-data';
import { formatPeriod } from '../utils/formatters';

export { NAME, LINKS } from './personal';
export { TECH_STACK } from './tech-stack';

const resolveData = (language: Language): PortfolioData => ({
  title: RESUME_DATA.title[language],
  summary: RESUME_DATA.summary[language],
  experience: RESUME_DATA.experience.map((exp) => ({
    role: exp.role[language],
    company: exp.company,
    location: exp.location[language],
    period: formatPeriod(exp.startDate, exp.endDate, language),
    description: exp.description[language],
    technologies: exp.technologies,
  })),
  education: RESUME_DATA.education.map((edu) => ({
    degree: edu.degree[language],
    institution: edu.institution,
    period: edu.period[language],
    description: edu.description?.[language],
  })),
  certifications: RESUME_DATA.certifications.map((certification) => ({
    name: certification.name[language],
    issuer: certification.issuer,
    issued: certification.issued?.[language],
    credentialId: certification.credentialId,
  })),
  languages: RESUME_DATA.languages.map((item) => ({
    name: item.name[language],
    proficiency: item.proficiency[language],
  })),
});

export const DATA: Record<Language, PortfolioData> = {
  en: resolveData('en'),
  pt: resolveData('pt'),
};
