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
  name: string;
  title: string;
  summary: string;
  techStack: string[];
  experience: Experience[];
  education: Education[];
  links: {
    linkedin: string;
    github: string;
    email: string;
    blog: string;
  };
}
