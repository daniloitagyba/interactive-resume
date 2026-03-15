import type { ResumeData } from '../types';

export const RESUME_DATA: ResumeData = {
  title: {
    en: "Senior Software Engineer",
    pt: "Engenheiro de Software Sênior",
  },
  summary: {
    en: "With 16 years of experience in IT, including 10 years dedicated to ERP, SQL, and BI, I transitioned to software engineering 6 years ago. I have worked across the entire development cycle, creating efficient solutions, modernizing legacy systems, optimizing performance and implementing automated tests to ensure robust, scalable and high-quality applications.",
    pt: "Com 16 anos de experiência em TI, sendo 10 anos dedicados a ERP, SQL e BI, migrei há 6 anos para a engenharia de software. Tenho experiência no ciclo completo de desenvolvimento, criando soluções, modernizando sistemas legados, otimizando performance e implementando testes automatizados, garantindo aplicações robustas e escaláveis.",
  },
  experience: [
    {
      role: {
        en: "Senior Software Engineer",
        pt: "Engenheiro de Software Sênior",
      },
      company: "Bionexo",
      location: {
        en: "São Paulo - SP (remote)",
        pt: "São Paulo - SP (remoto)",
      },
      startDate: new Date(2024, 4),
      endDate: null,
      description: {
        en: [
          "Health tech (Biotacker Project: Inventory management with RFID).",
          "Development and maintenance in .Net/.Net Core (Windows/Kubernetes VMs).",
          "CI/CD (Azure Pipelines), unit/integration testing. Technical and decision-making support.",
        ],
        pt: [
          "Health tech (Projeto Biotacker: Gestão de estoque com RFID).",
          "Desenvolvimento e manutenção em .Net/.Net Core (VMs Windows/Kubernetes).",
          "CI/CD (Azure Pipelines), testes unitários/integração. Apoio técnico e decisório.",
        ],
      },
      technologies: [
        "C#", ".Net Core", ".Net Framework", "T-SQL", "Microservices", "Rest", "Soap",
        "RabbitMQ", "SQL Server", "Redis", "JS", "TS", "React", "CI/CD", "Azure Pipelines", "Dynatrace",
      ],
    },
    {
      role: {
        en: "Senior Software Engineer",
        pt: "Engenheiro de Software Sênior",
      },
      company: "Cielo",
      location: {
        en: "São Paulo - SP (remote)",
        pt: "São Paulo - SP (remoto)",
      },
      startDate: new Date(2021, 9),
      endDate: new Date(2024, 1),
      description: {
        en: [
          "Cielo E-Commerce. Reconciliation solutions.",
          "Development and maintenance in .Net/.Net Core (Windows/Kubernetes VMs).",
          "CI/CD (Azure Pipelines), unit/integration testing. Technical and decision-making support.",
        ],
        pt: [
          "Cielo E-Commerce. Soluções de conciliação.",
          "Desenvolvimento e manutenção em .Net/.Net Core (VMs Windows/Kubernetes).",
          "CI/CD (Azure Pipelines), testes unitários/integração. Apoio técnico e decisório.",
        ],
      },
      technologies: [
        "C#", ".Net Core", ".Net Framework", "T-SQL", "Microservices", "Rest", "Soap",
        "RabbitMQ", "SQL Server", "Redis", "CI/CD", "Azure Pipelines", "Datadog",
      ],
    },
    {
      role: {
        en: "Senior Software Engineer",
        pt: "Engenheiro de Software",
      },
      company: "Manager Saúde",
      location: {
        en: "Juiz de Fora - MG (remote)",
        pt: "Juiz de Fora - MG (remoto)",
      },
      startDate: new Date(2020, 10),
      endDate: new Date(2021, 9),
      description: {
        en: [
          "Healthcare Marketplace.",
          "Development and maintenance of integrations with ERPs (buyers/sellers).",
        ],
        pt: [
          "Marketplace da saúde.",
          "Desenvolvimento e manutenção de integrações com ERPs (compradores/vendedores).",
        ],
      },
      technologies: [
        "C#", ".Net Core", ".Net Framework", "AspNet MVC", "Microservices", "Rest", "Soap",
        "T-SQL", "PL/SQL", "SQL Server", "Azure Pipelines", "Azure Functions",
      ],
    },
    {
      role: {
        en: "Senior Systems Analyst (Contractor)",
        pt: "Analista de Sistemas Sênior (PJ)",
      },
      company: "Unicasa",
      location: {
        en: "Juiz de Fora - MG",
        pt: "Juiz de Fora - MG",
      },
      startDate: new Date(2019, 7),
      endDate: new Date(2020, 10),
      description: {
        en: [
          "Aluminum industry.",
          "Customization of ERP (proprietary language), development of reports/dashboards in Power BI.",
          "Mastery of the complete industrial process.",
        ],
        pt: [
          "Indústria de alumínio.",
          "Customização de ERP (linguagem própria), desenvolvimento de relatórios/painéis em Power BI.",
          "Domínio do processo industrial completo.",
        ],
      },
      technologies: ["ERP", "Power BI", "SQL"],
    },
    {
      role: {
        en: "Senior Systems Analyst (Contractor)",
        pt: "Analista de Sistemas Sênior (PJ)",
      },
      company: "SBA",
      location: {
        en: "Juiz de Fora - MG",
        pt: "Juiz de Fora - MG",
      },
      startDate: new Date(2016, 0),
      endDate: new Date(2020, 10),
      description: {
        en: [
          "Aluminum industry.",
          "Customization of ERP (proprietary language), development of reports/dashboards in Power BI.",
          "Mastery of the complete industrial process.",
        ],
        pt: [
          "Indústria de alumínio.",
          "Customização de ERP (linguagem própria), desenvolvimento de relatórios/painéis em Power BI.",
          "Domínio do processo industrial completo.",
        ],
      },
      technologies: ["ERP", "Power BI", "SQL"],
    },
    {
      role: {
        en: "Senior Systems Analyst",
        pt: "Analista de Sistemas Sênior",
      },
      company: "Hiperroll",
      location: {
        en: "Juiz de Fora - MG",
        pt: "Juiz de Fora - MG",
      },
      startDate: new Date(2015, 3),
      endDate: new Date(2017, 5),
      description: {
        en: [
          "Plastic packaging industry.",
          "Customization of ERP (proprietary language), development of reports/dashboards in Power BI.",
          "Mastery of the complete industrial process.",
        ],
        pt: [
          "Indústria de embalagens plásticas.",
          "Customização de ERP (linguagem própria), desenvolvimento de relatórios/painéis em Power BI.",
          "Domínio do processo industrial completo.",
        ],
      },
      technologies: ["ERP", "Power BI", "SQL"],
    },
    {
      role: {
        en: "Senior Systems Analyst",
        pt: "Analista de Sistemas Sênior",
      },
      company: "Multstock",
      location: {
        en: "Belo Horizonte - MG",
        pt: "Belo Horizonte - MG",
      },
      startDate: new Date(2011, 4),
      endDate: new Date(2012, 5),
      description: {
        en: [
          "Industry/trade of rescue materials.",
          "Customization of ERP (proprietary language), development of reports/dashboards in Power BI.",
          "Mastery of the complete industrial process.",
        ],
        pt: [
          "Indústria/comércio de materiais de resgate.",
          "Customização de ERP (linguagem própria), desenvolvimento de relatórios/painéis em Power BI.",
          "Domínio do processo industrial completo.",
        ],
      },
      technologies: ["ERP", "Power BI", "SQL"],
    },
    {
      role: {
        en: "Senior Systems Analyst",
        pt: "Analista de Sistemas Sênior",
      },
      company: "Hiperroll",
      location: {
        en: "Juiz de Fora - MG",
        pt: "Juiz de Fora - MG",
      },
      startDate: new Date(2007, 2),
      endDate: new Date(2011, 3),
      description: {
        en: [
          "Plastic packaging industry.",
          "Customization of ERP (proprietary language), development of reports/dashboards in Power BI.",
          "Mastery of the complete industrial process.",
        ],
        pt: [
          "Indústria de embalagens plásticas.",
          "Customização de ERP (linguagem própria), desenvolvimento de relatórios/painéis em Power BI.",
          "Domínio do processo industrial completo.",
        ],
      },
      technologies: ["ERP", "Power BI", "SQL"],
    },
  ],
  education: [
    {
      degree: {
        en: "Software Engineering",
        pt: "Engenharia de Software",
      },
      institution: "Uniamérica",
      period: "2025 - 2027",
      description: {
        en: "Focusing on modern software architecture, cloud-native development, and advanced engineering principles.",
        pt: "Foco em arquitetura de software moderna, desenvolvimento cloud-native e princípios avançados de engenharia.",
      },
    },
    {
      degree: {
        en: "Systems Analysis and Development",
        pt: "Análise e Desenvolvimento de Sistemas",
      },
      institution: "Instituto Vianna Junior",
      period: "2016 - 2018",
      description: {
        en: "Comprehensive foundation in software development, database management, and systems design, with a focus on practical application and problem-solving.",
        pt: "Base sólida em desenvolvimento de software, gerenciamento de banco de dados e design de sistemas, com foco em aplicação prática e resolução de problemas.",
      },
    },
  ],
};
