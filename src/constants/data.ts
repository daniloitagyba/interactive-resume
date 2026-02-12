import { PortfolioData } from '../types';
import { calculateDuration } from '../utils/formatters';

export * from './personal';
export * from './tech-stack';

const lastJobStart = new Date(2024, 4);

export const DATA: Record<"en" | "pt", PortfolioData> = {
  en: {
    title: "Senior Software Engineer",
    summary:
      "With a solid career spanning over 15 years in Technology, I built a strong foundation working for a decade with ERP, SQL, and Business Intelligence (BI). For the past 6 years, I have shifted my career towards software engineering with a focus on back-end. I have experience in the complete software engineering lifecycle, designing, delivering, and maintaining robust solutions across various architectures.",
    experience: [
      {
        role: "Senior Software Engineer",
        company: "Bionexo",
        location: "São Paulo - SP (remote)",
        period: `May 2024 - Present (${calculateDuration(lastJobStart, "en")})`,
        description: [
          "Health tech (Biotacker Project: Inventory management with RFID).",
          "Development and maintenance in .Net/.Net Core (Windows/Kubernetes VMs).",
          "CI/CD (Azure Pipelines), unit/integration testing. Technical and decision-making support.",
        ],
        technologies: [
          "C#",
          ".Net Core",
          ".Net Framework",
          "T-SQL",
          "Microservices",
          "Rest",
          "Soap",
          "RabbitMQ",
          "SQL Server",
          "Redis",
          "JS",
          "TS",
          "React",
          "CI/CD",
          "Azure Pipelines",
          "Dynatrace",
        ],
      },
      {
        role: "Senior Software Engineer",
        company: "Cielo",
        location: "São Paulo - SP (remote)",
        period: "October 2021 - February 2024 (2 years, 4 months)",
        description: [
          "Cielo E-Commerce. Reconciliation solutions.",
          "Development and maintenance in .Net/.Net Core (Windows/Kubernetes VMs).",
          "CI/CD (Azure Pipelines), unit/integration testing. Technical and decision-making support.",
        ],
        technologies: [
          "C#",
          ".Net Core",
          ".Net Framework",
          "T-SQL",
          "Microservices",
          "Rest",
          "Soap",
          "RabbitMQ",
          "SQL Server",
          "Redis",
          "CI/CD",
          "Azure Pipelines",
          "Datadog",
        ],
      },
      {
        role: "Senior Software Engineer",
        company: "Manager Saúde",
        location: "Juiz de Fora - MG (remote)",
        period: "November 2020 - October 2021 (11 months)",
        description: [
          "Healthcare Marketplace.",
          "Development and maintenance of integrations with ERPs (buyers/sellers).",
        ],
        technologies: [
          "C#",
          ".Net Core",
          ".Net Framework",
          "AspNet MVC",
          "Microservices",
          "Rest",
          "Soap",
          "T-SQL",
          "PL/SQL",
          "SQL Server",
          "Azure Pipelines",
          "Azure Functions",
        ],
      },
      {
        role: "Senior Systems Analyst (Contractor)",
        company: "Unicasa",
        location: "Juiz de Fora - MG",
        period: "August 2019 - November 2020 (1 year, 3 months)",
        description: [
          "Aluminum industry.",
          "Customization of ERP (proprietary language), development of reports/dashboards in Power BI.",
          "Mastery of the complete industrial process.",
        ],
        technologies: ["ERP", "Power BI", "SQL"],
      },
      {
        role: "Senior Systems Analyst (Contractor)",
        company: "SBA",
        location: "Juiz de Fora - MG",
        period: "January 2016 - November 2020 (4 years, 10 months)",
        description: [
          "Aluminum industry.",
          "Customization of ERP (proprietary language), development of reports/dashboards in Power BI.",
          "Mastery of the complete industrial process.",
        ],
        technologies: ["ERP", "Power BI", "SQL"],
      },
      {
        role: "Senior Systems Analyst",
        company: "Hiperroll",
        location: "Juiz de Fora - MG",
        period: "April 2015 - June 2017 (2 years, 2 months)",
        description: [
          "Plastic packaging industry.",
          "Customization of ERP (proprietary language), development of reports/dashboards in Power BI.",
          "Mastery of the complete industrial process.",
        ],
        technologies: ["ERP", "Power BI", "SQL"],
      },
      {
        role: "Senior Systems Analyst",
        company: "Multstock",
        location: "Belo Horizonte - MG",
        period: "May 2011 - June 2012 (1 year, 1 month)",
        description: [
          "Industry/trade of rescue materials.",
          "Customization of ERP (proprietary language), development of reports/dashboards in Power BI.",
          "Mastery of the complete industrial process.",
        ],
        technologies: ["ERP", "Power BI", "SQL"],
      },
      {
        role: "Senior Systems Analyst",
        company: "Hiperroll",
        location: "Juiz de Fora - MG",
        period: "March 2007 - April 2011 (4 years, 1 month)",
        description: [
          "Plastic packaging industry.",
          "Customization of ERP (proprietary language), development of reports/dashboards in Power BI.",
          "Mastery of the complete industrial process.",
        ],
        technologies: ["ERP", "Power BI", "SQL"],
      },
    ],
    education: [
      {
        degree: "Software Engineering",
        institution: "Uniamérica",
        period: "2025 - 2027",
        description: "Focusing on modern software architecture, cloud-native development, and advanced engineering principles."
      },      
      {
        degree: "Systems Analysis and Development",
        institution: "Instituo Vianna Junior",
        period: "2016 - 2018",
        description: "Comprehensive foundation in software development, database management, and systems design, with a focus on practical application and problem-solving."
      },

    ]
  },
  pt: {
    title: "Engenheiro de Software Sênior",
    summary:
      "Com uma sólida carreira de mais de 15 anos em Tecnologia, construí uma base sólida atuando por uma década com ERP, SQL e Business Intelligence (BI). ​Há 6 anos, direcionei minha carreira para a engenharia de software com foco em back-end. Tenho experiência no ciclo completo de engenharia de software, projetando, entregando e mantendo soluções robustas em diversas arquiteturas.",
    experience: [
      {
        role: "Engenheiro de Software Sênior",
        company: "Bionexo",
        location: "São Paulo - SP (remoto)",
        period: `Maio 2024 - Presente (${calculateDuration(lastJobStart, "pt")})`,
        description: [
          "Health tech (Projeto Biotacker: Gestão de estoque com RFID).",
          "Desenvolvimento e manutenção em .Net/.Net Core (VMs Windows/Kubernetes).",
          "CI/CD (Azure Pipelines), testes unitários/integração. Apoio técnico e decisório.",
        ],
        technologies: [
          "C#",
          ".Net Core",
          ".Net Framework",
          "T-SQL",
          "Microserviços",
          "Rest",
          "Soap",
          "RabbitMQ",
          "SQL Server",
          "Redis",
          "JS",
          "TS",
          "React",
          "Testes Unitários e de integração",
          "CI/CD",
          "Azure Pipelines",
          "Dynatrace",
        ],
      },
      {
        role: "Engenheiro de Software Sênior",
        company: "Cielo",
        location: "São Paulo - SP (remoto)",
        period: "Outubro 2021 - Fevereiro 2024 (2 anos, 4 meses)",
        description: [
          "Cielo E-Commerce. Soluções de conciliação.",
          "Desenvolvimento e manutenção em .Net/.Net Core (VMs Windows/Kubernetes).",
          "CI/CD (Azure Pipelines), testes unitários/integração. Apoio técnico e decisório.",
        ],
        technologies: [
          "C#",
          ".Net Core",
          ".Net Framework",
          "T-SQL",
          "Microserviços",
          "Rest",
          "Soap",
          "Service Bus",
          "RabbitMQ",
          "Sql Server",
          "Redis",
          "Testes Unitários e de integração",
          "CI/CD",
          "Azure Pipelines",
          "Datadog",
        ],
      },
      {
        role: "Engenheiro de Software",
        company: "Manager Saúde",
        location: "Juiz de Fora - MG (remoto)",
        period: "Novembro 2020 - Outubro 2021 (11 meses)",
        description: [
          "Marketplace da saúde.",
          "Desenvolvimento e manutenção de integrações com ERPs (compradores/vendedores).",
        ],
        technologies: [
          "C#",
          ".Net Core",
          ".Net Framework",
          "AspNet MVC",
          "Microserviços",
          "Rest",
          "Soap",
          "T-SQL",
          "PL/SQL",
          "SQL Server",
          "Azure Pipelines",
          "Azure Functions",
        ],
      },
      {
        role: "Analista de Sistemas Sênior (PJ)",
        company: "Unicasa",
        location: "Juiz de Fora - MG",
        period: "Agosto 2019 - Novembro 2020 (1 ano, 3 meses)",
        description: [
          "Indústria de alumínio.",
          "Customização de ERP (linguagem própria), desenvolvimento de relatórios/painéis em Power BI.",
          "Domínio do processo industrial completo.",
        ],
        technologies: ["ERP", "Power BI", "SQL"],
      },
      {
        role: "Analista de Sistemas Sênior (PJ)",
        company: "SBA",
        location: "Juiz de Fora - MG",
        period: "Janeiro 2016 - Novembro 2020 (4 anos, 10 meses)",
        description: [
          "Indústria de alumínio.",
          "Customização de ERP (linguagem própria), desenvolvimento de relatórios/painéis em Power BI.",
          "Domínio do processo industrial completo.",
        ],
        technologies: ["ERP", "Power BI", "SQL"],
      },
      {
        role: "Analista de Sistemas Sênior",
        company: "Hiperroll",
        location: "Juiz de Fora - MG",
        period: "Abril 2015 - Junho 2017 (2 anos, 2 meses)",
        description: [
          "Indústria de embalagens plásticas.",
          "Customização de ERP (linguagem própria), desenvolvimento de relatórios/painéis em Power BI.",
          "Domínio do processo industrial completo.",
        ],
        technologies: ["ERP", "Power BI", "SQL"],
      },
      {
        role: "Analista de Sistemas Sênior",
        company: "Multstock",
        location: "Belo Horizonte - MG",
        period: "Maio 2011 - Junho 2012 (1 year, 1 mês)",
        description: [
          "Indústria/comércio de materiais de resgate.",
          "Customização de ERP (linguagem própria), desenvolvimento de relatórios/painéis em Power BI.",
          "Domínio do processo industrial completo.",
        ],
        technologies: ["ERP", "Power BI", "SQL"],
      },
      {
        role: "Analista de Sistemas Sênior",
        company: "Hiperroll",
        location: "Juiz de Fora - MG",
        period: "Março 2007 - Abril 2011 (4 anos, 1 mês)",
        description: [
          "Indústria de embalagens plásticas.",
          "Customização de ERP (linguagem própria), desenvolvimento de relatórios/painéis em Power BI.",
          "Domínio do processo industrial completo.",
        ],
        technologies: ["ERP", "Power BI", "SQL"],
      },
    ],
    education: [
      {
        degree: "Engenharia de Software",
        institution: "Uniamérica",
        period: "2025 - 2027",
        description: "Foco em arquitetura de software moderna, desenvolvimento cloud-native e princípios avançados de engenharia."
      },
      {
        degree: "Systems Analysis and Development",
        institution: "Instituo Vianna Junior",
        period: "2016 - 2018",
        description: "Base sólida em desenvolvimento de software, gerenciamento de banco de dados e design de sistemas, com foco em aplicação prática e resolução de problemas."
      },
    ]
  },
};
