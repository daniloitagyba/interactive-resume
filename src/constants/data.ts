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

const calculateDuration = (startDate: Date, language: 'en' | 'pt') => {
  const now = new Date();
  let years = now.getFullYear() - startDate.getFullYear();
  let months = now.getMonth() - startDate.getMonth();

  if (months < 0) {
    years--;
    months += 12;
  }

  const parts = [];
  if (years > 0) {
    if (language === 'en') {
      parts.push(`${years} year${years > 1 ? 's' : ''}`);
    } else {
      parts.push(`${years} ano${years > 1 ? 's' : ''}`);
    }
  }
  if (months > 0) {
    if (language === 'en') {
      parts.push(`${months} month${months > 1 ? 's' : ''}`);
    } else {
      parts.push(`${months} ${months > 1 ? 'meses' : 'mês'}`);
    }
  }

  const joiner = language === 'en' ? ' and ' : ' e ';
  return parts.join(joiner);
};

const lastJobStart = new Date(2024, 4);

export const DATA: Record<'en' | 'pt', PortfolioData> = {
  en: {
    name: "Danilo G. Itagyba Neto",
    title: "Senior Software Engineer",
    summary: "With over 15 years of experience in IT, I have built a solid foundation working for a decade with ERP, SQL, and Business Intelligence (BI). For the past 6 years, I have pivoted my career to focus on Back-end software development. I have proven experience in the full software engineering lifecycle, designing and delivering robust solutions across diverse architectures.",
    techStack: [
      "C#", ".Net Framework", ".Net Core", "T-SQL", "PL/SQL", "Node", "React", "Javascript", "Typescript",
      "Clean Architecture", "DDD", "Design Patterns", "SOLID", "Microservices", "Rest APIs", "Soap", "Wpf", "SPAs",
      "CI/CD", "Azure", "AWS", "Docker", "Kubernetes", "SQL Server", "Oracle", "MySql", "PostgreSQL", "Redis",
      "RabbitMQ", "Service Bus", "Unit Tests", "Integration Tests"
    ],
    experience: [
      {
        role: "Senior Software Engineer",
        company: "Bionexo",
        location: "São Paulo - SP (remote)",
        period: `May 2024 - Present (${calculateDuration(lastJobStart, 'en')})`,
        description: [
          "Health tech (Biotacker Project: Inventory management with RFID).",
          "Development and maintenance in .Net/.Net Core (Windows/Kubernetes VMs).",
          "CI/CD (Azure Pipelines), unit/integration testing. Technical and decision-making support."
        ],
        technologies: ["C#", ".Net Core", ".Net Framework", "T-SQL", "Microservices", "Rest", "Soap", "RabbitMQ", "SQL Server", "Redis", "JS", "TS", "React", "CI/CD", "Azure Pipelines", "Dynatrace"]
      },
      {
        role: "Senior Software Engineer",
        company: "Cielo",
        location: "São Paulo - SP (remote)",
        period: "October 2021 - February 2024 (2 years and 4 months)",
        description: [
          "Cielo E-Commerce. Reconciliation solutions.",
          "Development and maintenance in .Net/.Net Core (Windows/Kubernetes VMs).",
          "CI/CD (Azure Pipelines), unit/integration testing. Technical and decision-making support."
        ],
        technologies: ["C#", ".Net Core", ".Net Framework", "T-SQL", "Microservices", "Rest", "Soap", "RabbitMQ", "SQL Server", "Redis", "CI/CD", "Azure Pipelines", "Datadog"]
      },
      {
        role: "Senior Software Engineer",
        company: "Manager Saúde",
        location: "Juiz de Fora - MG (remote)",
        period: "November 2020 - October 2021 (11 months)",
        description: [
          "Healthcare Marketplace.",
          "Development and maintenance of integrations with ERPs (buyers/sellers)."
        ],
        technologies: ["C#", ".Net Core", ".Net Framework", "AspNet MVC", "Microservices", "Rest", "Soap", "T-SQL", "PL/SQL", "SQL Server", "Azure Pipelines", "Azure Functions"]
      },
      {
        role: "Senior Systems Analyst (Contractor)",
        company: "Unicasa",
        location: "Juiz de Fora - MG",
        period: "August 2019 - November 2020 (1 year and 3 months)",
        description: [
          "Aluminum industry.",
          "Customization of ERP (proprietary language), development of reports/dashboards in Power BI.",
          "Mastery of the complete industrial process."
        ],
        technologies: ["ERP", "Power BI", "SQL"]
      },
      {
        role: "Senior Systems Analyst (Contractor)",
        company: "SBA",
        location: "Juiz de Fora - MG",
        period: "January 2016 - November 2020 (4 years and 10 months)",
        description: [
          "Aluminum industry.",
          "Customization of ERP (proprietary language), development of reports/dashboards in Power BI.",
          "Mastery of the complete industrial process."
        ],
        technologies: ["ERP", "Power BI", "SQL"]
      },
      {
        role: "Senior Systems Analyst",
        company: "Hiperroll",
        location: "Juiz de Fora - MG",
        period: "April 2015 - June 2017 (2 years and 2 months)",
        description: [
          "Plastic packaging industry.",
          "Customization of ERP (proprietary language), development of reports/dashboards in Power BI.",
          "Mastery of the complete industrial process."
        ],
        technologies: ["ERP", "Power BI", "SQL"]
      },
      {
        role: "Senior Systems Analyst",
        company: "Multstock",
        location: "Belo Horizonte - MG",
        period: "May 2011 - June 2012 (1 year and 1 month)",
        description: [
          "Industry/trade of rescue materials.",
          "Customization of ERP (proprietary language), development of reports/dashboards in Power BI.",
          "Mastery of the complete industrial process."
        ],
        technologies: ["ERP", "Power BI", "SQL"]
      },
      {
        role: "Senior Systems Analyst",
        company: "Hiperroll",
        location: "Juiz de Fora - MG",
        period: "March 2007 - April 2011 (4 years and 1 month)",
        description: [
          "Plastic packaging industry.",
          "Customization of ERP (proprietary language), development of reports/dashboards in Power BI.",
          "Mastery of the complete industrial process."
        ],
        technologies: ["ERP", "Power BI", "SQL"]
      }
    ],
    education: [
      {
        degree: "Software Engineering",
        institution: "Uniamérica",
        period: "January 2025 - December 2027"
      }
    ],
    links: {
      linkedin: "https://www.linkedin.com/in/danilo-itagyba/",
      github: "https://github.com/daniloitagyba",
      blog: "https://dev.to/itagyba",
      email: "daniloitagyba@gmail.com"
    }
  },
  pt: {
    name: "Danilo G. Itagyba Neto",
    title: "Engenheiro de Software Sênior",
    summary: "Com uma trajetória de mais de 15 anos na área de TI, construí uma base sólida atuando por uma década com ERP, SQL e Business Intelligence (BI). Há 6 anos, direcionei minha carreira para a engenharia de software com foco em back-end. Tenho experiência no ciclo completo de engenharia de software, projetando, entregando e mantendo soluções robustas em diversas arquiteturas.",
    techStack: [
      "C#", ".Net Framework", ".Net Core", "T-SQL", "PL/SQL", "Node", "React", "Javascript", "Typescript",
      "Arquitetura Limpa", "DDD", "Design Patterns", "SOLID", "Microserviços", "Rest APIs", "Soap", "Wpf", "SPAs",
      "CI/CD", "Azure", "AWS", "Docker", "Kubernetes", "SQL Server", "Oracle", "MySql", "PostgreSQL", "Redis",
      "RabbitMQ", "Service Bus", "Testes Unitários", "Testes de Integração"
    ],
    experience: [
      {
        role: "Engenheiro de Software Sênior",
        company: "Bionexo",
        location: "São Paulo - SP (remoto)",
        period: `Maio 2024 - Presente (${calculateDuration(lastJobStart, 'pt')})`,
        description: [
          "Health tech (Projeto Biotacker: Gestão de estoque com RFID).",
          "Desenvolvimento e manutenção em .Net/.Net Core (VMs Windows/Kubernetes).",
          "CI/CD (Azure Pipelines), testes unitários/integração. Apoio técnico e decisório."
        ],
        technologies: ["C#", ".Net Core", ".Net Framework", "T-SQL", "Microserviços", "Rest", "Soap", "RabbitMQ", "SQL Server", "Redis", "JS", "TS", "React", "Testes Unitários e de integração", "CI/CD", "Azure Pipelines", "Dynatrace"]
      },
      {
        role: "Engenheiro de Software Sênior",
        company: "Cielo",
        location: "São Paulo - SP (remoto)",
        period: "Outubro 2021 - Fevereiro 2024 (2 anos e 4 meses)",
        description: [
          "Cielo E-Commerce. Soluções de conciliação.",
          "Desenvolvimento e manutenção em .Net/.Net Core (VMs Windows/Kubernetes).",
          "CI/CD (Azure Pipelines), testes unitários/integração. Apoio técnico e decisório."
        ],
        technologies: ["C#", ".Net Core", ".Net Framework", "T-SQL", "Microserviços", "Rest", "Soap", "Service Bus", "RabbitMQ", "Sql Server", "Redis", "Testes Unitários e de integração", "CI/CD", "Azure Pipelines", "Datadog"]
      },
      {
        role: "Engenheiro de Software",
        company: "Manager Saúde",
        location: "Juiz de Fora - MG (remoto)",
        period: "Novembro 2020 - Outubro 2021 (11 meses)",
        description: [
          "Marketplace da saúde.",
          "Desenvolvimento e manutenção de integrações com ERPs (compradores/vendedores)."
        ],
        technologies: ["C#", ".Net Core", ".Net Framework", "AspNet MVC", "Microserviços", "Rest", "Soap", "T-SQL", "PL/SQL", "SQL Server", "Azure Pipelines", "Azure Functions"]
      },
      {
        role: "Analista de Sistemas Sênior (PJ)",
        company: "Unicasa",
        location: "Juiz de Fora - MG",
        period: "Agosto 2019 - Novembro 2020 (1 ano e 3 meses)",
        description: [
          "Indústria de alumínio.",
          "Customização de ERP (linguagem própria), desenvolvimento de relatórios/painéis em Power BI.",
          "Domínio do processo industrial completo."
        ],
        technologies: ["ERP", "Power BI", "SQL"]
      },
      {
        role: "Analista de Sistemas Sênior (PJ)",
        company: "SBA",
        location: "Juiz de Fora - MG",
        period: "Janeiro 2016 - Novembro 2020 (4 anos e 10 meses)",
        description: [
          "Indústria de alumínio.",
          "Customização de ERP (linguagem própria), desenvolvimento de relatórios/painéis em Power BI.",
          "Domínio do processo industrial completo."
        ],
        technologies: ["ERP", "Power BI", "SQL"]
      },
      {
        role: "Analista de Sistemas Sênior",
        company: "Hiperroll",
        location: "Juiz de Fora - MG",
        period: "Abril 2015 - Junho 2017 (2 anos e 2 meses)",
        description: [
          "Indústria de embalagens plásticas.",
          "Customização de ERP (linguagem própria), desenvolvimento de relatórios/painéis em Power BI.",
          "Domínio do processo industrial completo."
        ],
        technologies: ["ERP", "Power BI", "SQL"]
      },
      {
        role: "Analista de Sistemas Sênior",
        company: "Multstock",
        location: "Belo Horizonte - MG",
        period: "Maio 2011 - Junho 2012 (1 ano e 1 mês)",
        description: [
          "Indústria/comércio de materiais de resgate.",
          "Customização de ERP (linguagem própria), desenvolvimento de relatórios/painéis em Power BI.",
          "Domínio do processo industrial completo."
        ],
        technologies: ["ERP", "Power BI", "SQL"]
      },
      {
        role: "Analista de Sistemas Sênior",
        company: "Hiperroll",
        location: "Juiz de Fora - MG",
        period: "Março 2007 - Abril 2011 (4 anos e 1 mês)",
        description: [
          "Indústria de embalagens plásticas.",
          "Customização de ERP (linguagem própria), desenvolvimento de relatórios/painéis em Power BI.",
          "Domínio do processo industrial completo."
        ],
        technologies: ["ERP", "Power BI", "SQL"]
      }
    ],
    education: [
      {
        degree: "Engenharia de Software",
        institution: "Uniamérica",
        period: "Janeiro 2025 a Dezembro 2027"
      }
    ],
    links: {
      linkedin: "https://www.linkedin.com/in/danilo-itagyba/",
      github: "https://github.com/daniloitagyba",
      blog: "https://dev.to/itagyba",
      email: "daniloitagyba@gmail.com"
    }
  }
};
