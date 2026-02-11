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
}

export interface PortfolioData {
  title: string;
  shortSummary: string;
  summary: string;
  experience: Experience[];
  education: Education[];
}
