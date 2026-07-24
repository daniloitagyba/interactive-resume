import type { ResumeData } from '../types';

export const RESUME_DATA: ResumeData = {
  title: {
    en: "Senior Software Engineer",
    pt: "Engenheiro de Software Sênior",
  },
  summary: {
    en: "I design and build scalable, reliable software systems using microservices and modular monolith architectures.\n\nMy work is guided by proven engineering practices, including Clean Code, SOLID principles, Domain-Driven Design, Design Patterns, Clean Architecture, CI/CD and observability.",
    pt: "Projeto e desenvolvo sistemas de software escaláveis e confiáveis utilizando arquiteturas de microsserviços e monólitos modulares.\n\nMeu trabalho é orientado por práticas consolidadas de engenharia, incluindo Clean Code, princípios SOLID, Domain-Driven Design, padrões de projeto, Clean Architecture, CI/CD e observabilidade.",
  },
  experience: [
    {
      role: {
        en: "Senior Software Engineer",
        pt: "Engenheiro de Software Sênior",
      },
      company: "Bionexo",
      location: {
        en: "São Paulo, Brazil (remote)",
        pt: "São Paulo, Brasil (remoto)",
      },
      startDate: new Date(2024, 4),
      endDate: null,
      description: {
        en: [
          "Developed and maintained a full inventory management system for health tech, integrating RFID with .NET Core for efficient tracking of medical products.",
          "Created notification services that send critical information to thousands of customers daily, including product expiration dates and storage-temperature alerts, enabling precise control of high-value products.",
          "Delivered a robust full-stack solution with CI/CD via Azure Pipelines, unit, integration and end-to-end tests, plus monitoring for high availability.",
        ],
        pt: [
          "Desenvolvimento e manutenção de um sistema completo de gestão de estoque para health tech, integrando RFID com .NET Core para rastreamento eficiente de produtos médicos.",
          "Entreguei solução full-stack robusta com CI/CD via Azure Pipelines, testes unitários, testes de integração, end-to-end e monitoramento para alta disponibilidade.",
        ],
      },
      technologies: [
        "C#",
        ".NET Core",
        ".NET Framework",
        "T-SQL",
        "Microservices",
        "REST",
        "SOAP",
        "RabbitMQ",
        "SQL Server",
        "Redis",
        "JavaScript",
        "TypeScript",
        "React",
        "CI/CD",
        "Azure Pipelines",
        "Dynatrace",
        "End-to-end Tests",
      ],
    },
    {
      role: {
        en: "Senior Software Engineer",
        pt: "Engenheiro de Software Sênior",
      },
      company: "Cielo",
      location: {
        en: "São Paulo, Brazil (remote)",
        pt: "São Paulo, Brasil (remoto)",
      },
      startDate: new Date(2021, 9),
      endDate: new Date(2024, 1),
      description: {
        en: [
          "Developed services that process millions of sales records every day, perform automated reconciliations, and deliver accurate business information on time.",
          "Maintained and improved dozens of .NET and .NET Core applications in hybrid infrastructure with Windows VMs and Kubernetes, ensuring high performance.",
          "Implemented robust CI/CD pipelines with Azure DevOps, automating deployments and reducing feature delivery time.",
        ],
        pt: [
          "Desenvolvi soluções críticas de conciliação financeira para Cielo E-Commerce, otimizando processos entre adquirentes e sistema financeiro.",
          "Mantive e aprimorei dezenas de aplicações .NET e .NET Core em infraestrutura híbrida com VMs Windows e Kubernetes, garantindo alta performance.",
          "Implementei pipelines CI/CD robustos com Azure DevOps, automatizando deploys e reduzindo tempo de entrega de funcionalidades.",
        ],
      },
      technologies: [
        "C#",
        ".NET Core",
        ".NET Framework",
        "T-SQL",
        "Microservices",
        "REST",
        "SOAP",
        "RabbitMQ",
        "SQL Server",
        "Redis",
        "CI/CD",
        "Azure DevOps",
        "Azure Pipelines",
        "Datadog",
        "Fluent Validator",
      ],
    },
    {
      role: {
        en: "Software Engineer",
        pt: "Engenheiro de Software",
      },
      company: "Manager Saúde",
      location: {
        en: "Juiz de Fora, Minas Gerais, Brazil (remote)",
        pt: "Juiz de Fora, Minas Gerais, Brasil (remoto)",
      },
      startDate: new Date(2020, 10),
      endDate: new Date(2021, 9),
      description: {
        en: [
          "Built microservices that collect thousands of data points daily from ERP systems and make them available across online marketplaces.",
          "Developed scalable .NET Core microservices with Azure Functions, processing Portal Bionexo transactions efficiently.",
        ],
        pt: [
          "Criei integrações complexas entre marketplace de saúde e múltiplos ERPs, conectando compradores e vendedores via APIs REST/SOAP.",
          "Desenvolvi microservices escaláveis em .NET Core com Azure Functions, processando transações do Portal Bionexo de forma eficiente.",
        ],
      },
      technologies: [
        "C#",
        ".NET Core",
        ".NET Framework",
        "ASP.NET MVC",
        "Microservices",
        "REST",
        "SOAP",
        "T-SQL",
        "PL/SQL",
        "SQL Server",
        "Azure Pipelines",
        "Azure Functions",
        "Fluent Validator",
      ],
    },
    {
      role: {
        en: "Senior Systems Analyst (Contractor)",
        pt: "Analista de Sistemas Sênior (PJ)",
      },
      company: "Unicasa Esquadrias",
      location: {
        en: "Juiz de Fora, Minas Gerais, Brazil",
        pt: "Juiz de Fora, Minas Gerais, Brasil",
      },
      startDate: new Date(2019, 7),
      endDate: new Date(2020, 10),
      description: {
        en: [
          "Developed strategic Power BI dashboards and reports for the aluminum industry, improving operational decision-making.",
          "Created data visualizations that turned complex production information into actionable management insights.",
        ],
        pt: [
          "Desenvolvi dashboards e relatórios estratégicos em Power BI para indústria de alumínio, otimizando a tomada de decisões operacionais.",
          "Criei visualizações de dados que transformaram informações complexas da produção em insights acionáveis para gestão.",
        ],
      },
      technologies: ["ERP", "Power BI", "SQL"],
    },
    {
      role: {
        en: "Senior Systems Analyst (Contractor)",
        pt: "Analista de Sistemas Sênior (PJ)",
      },
      company: "SBA Peças Acabadas de Alumínio",
      location: {
        en: "Juiz de Fora, Minas Gerais, Brazil",
        pt: "Juiz de Fora, Minas Gerais, Brasil",
      },
      startDate: new Date(2016, 0),
      endDate: new Date(2020, 10),
      description: {
        en: [
          "Implemented Business Intelligence solutions with Power BI, automating production and quality control reports in the aluminum industry.",
        ],
        pt: [
          "Implementei soluções de Business Intelligence com Power BI, automatizando relatórios de produção e controle de qualidade na indústria de alumínio.",
        ],
      },
      technologies: ["ERP", "Power BI", "SQL"],
    },
    {
      role: {
        en: "Senior Systems Analyst",
        pt: "Analista de Sistemas Sênior",
      },
      company: "Hiperroll Embalagens",
      location: {
        en: "Juiz de Fora, Minas Gerais, Brazil",
        pt: "Juiz de Fora, Minas Gerais, Brasil",
      },
      startDate: new Date(2015, 3),
      endDate: new Date(2017, 5),
      description: {
        en: [
          "Optimized system processes in the plastic packaging industry, improving operational efficiency through technology solutions.",
        ],
        pt: [
          "Otimizei processos sistêmicos na indústria de embalagens plásticas, melhorando eficiência operacional através de soluções tecnológicas.",
        ],
      },
      technologies: ["ERP", "Power BI", "SQL"],
    },
    {
      role: {
        en: "Systems Analyst",
        pt: "Analista de Sistemas",
      },
      company: "Multstock Ltda.",
      location: {
        en: "Belo Horizonte, Minas Gerais, Brazil",
        pt: "Belo Horizonte e Região",
      },
      startDate: new Date(2011, 4),
      endDate: new Date(2012, 5),
      description: {
        en: [
          "Developed specialized systems for rescue and emergency materials management, ensuring traceability and control of critical inventory.",
        ],
        pt: [
          "Desenvolvi sistemas especializados para gestão de materiais de resgate e salvamento, garantindo rastreabilidade e controle de estoque crítico.",
        ],
      },
      technologies: ["ERP", "Power BI", "SQL"],
    },
    {
      role: {
        en: "Systems Analyst",
        pt: "Analista de Sistemas",
      },
      company: "Hiperroll Embalagens",
      location: {
        en: "Juiz de Fora, Minas Gerais, Brazil",
        pt: "Juiz de Fora, Minas Gerais, Brasil",
      },
      startDate: new Date(2007, 2),
      endDate: new Date(2011, 3),
      description: {
        en: [
          "Automated production processes in the plastic packaging industry, implementing solutions that increased operational control and efficiency.",
        ],
        pt: [
          "Automatizei processos produtivos na indústria de embalagens plásticas, implementando soluções que aumentaram controle e eficiência operacional.",
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
      period: {
        en: "2025 - Present",
        pt: "2025 - o momento",
      },
      description: {
        en: "Focusing on modern software architecture, cloud-native development, and advanced engineering principles.",
        pt: "Foco em arquitetura de software moderna, desenvolvimento cloud-native e princípios avançados de engenharia.",
      },
    },
  ],
  certifications: [
    {
      name: {
        en: "React 18 with Next.js Playbook",
        pt: "React 18 with Next.js Playbook",
      },
      issuer: "Pluralsight",
      issued: {
        en: "Issued Sep 2024",
        pt: "Emitido em set. de 2024",
      },
      credentialId: "d99ad3dc-af71-4e58-9161-e2edccfbbc82",
    },
    {
      name: {
        en: "React Native: The Big Picture",
        pt: "React Native: The Big Picture",
      },
      issuer: "Pluralsight",
      issued: {
        en: "Issued Sep 2024",
        pt: "Emitido em set. de 2024",
      },
      credentialId: "a7752281-79ea-4327-ab24-799af58c6719",
    },
    {
      name: {
        en: "Architecting ASP.NET Core 3 Applications: Best Practices",
        pt: "Architecting ASP.NET Core 3 Applications: Best Practices",
      },
      issuer: "Pluralsight",
      issued: {
        en: "Issued May 2022",
        pt: "Emitido em mai. de 2022",
      },
    },
    {
      name: {
        en: "Clean Architecture: Patterns, Practices, and Principles",
        pt: "Clean Architecture: Patterns, Practices, and Principles",
      },
      issuer: "Pluralsight",
      issued: {
        en: "Issued May 2022",
        pt: "Emitido em mai. de 2022",
      },
    },
    {
      name: {
        en: "Microservices Architecture Fundamentals",
        pt: "Microservices Architecture Fundamentals",
      },
      issuer: "Pluralsight",
      issued: {
        en: "Issued May 2022",
        pt: "Emitido em mai. de 2022",
      },
    },
    {
      name: {
        en: "Unit Testing an ASP.NET Core",
        pt: "Unit Testing an ASP.NET Core",
      },
      issuer: "Pluralsight",
      issued: {
        en: "Issued May 2022",
        pt: "Emitido em mai. de 2022",
      },
    },
  ],
  languages: [
    {
      name: {
        en: "Portuguese",
        pt: "Português",
      },
      proficiency: {
        en: "Native or bilingual proficiency",
        pt: "Nível nativo ou bilíngue",
      },
    },
    {
      name: {
        en: "English",
        pt: "Inglês",
      },
      proficiency: {
        en: "Intermediate proficiency",
        pt: "Nível intermediário",
      },
    },
  ],
};
