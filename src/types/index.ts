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
  issuer: string;
  year: string;
}

export interface PortfolioData {
  title: string;
  summary: string;
  experience: Experience[];
  education: Education[];
  certifications?: Certification[];
}
