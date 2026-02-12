import { PortfolioData } from '../types';
import { calculateDuration } from '../utils/formatters';
import { lastJobStart } from './common';

export const dataEn: PortfolioData = {
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
  };
