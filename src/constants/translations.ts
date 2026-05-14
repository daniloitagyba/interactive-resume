export const TRANSLATIONS = {
  en: {
    nav: {
      home: 'Home',
      education: 'Education',
      experience: 'Experience',
      skills: 'Skills',
      certifications: 'Certifications',
      languages: 'Languages',
    },
    hero: {
      greeting: 'Hi, my name is',
    },
    experience: {
      title: 'Work Experience',
      showMore: 'Show More',
      showLess: 'Show Less',
    },
    education: {
      title: 'Education',
    },
    skills: {
      title: 'Technical Skills',
    },
    certifications: {
      title: 'Licenses & Certifications',
      credentialId: 'Credential ID',
    },
    languages: {
      title: 'Languages',
    },
    footer: {
      rights: 'All rights reserved.',
    },
    common: {
      present: 'Present',
      year: 'year',
      years: 'years',
      month: 'month',
      months: 'months',
    }
  },
  pt: {
    nav: {
      home: 'Início',
      education: 'Educação',
      experience: 'Experiência',
      skills: 'Habilidades',
      certifications: 'Certificações',
      languages: 'Idiomas',
    },
    hero: {
      greeting: 'Olá, meu nome é',
    },
    experience: {
      title: 'Experiência Profissional',
      showMore: 'Ver Mais',
      showLess: 'Ver Menos',
    },
    education: {
      title: 'Formação',
    },
    skills: {
      title: 'Habilidades Técnicas',
    },
    certifications: {
      title: 'Licenças e Certificados',
      credentialId: 'Nº da credencial',
    },
    languages: {
      title: 'Idiomas',
    },
    footer: {
      rights: 'Todos os direitos reservados.',
    },
    common: {
      present: 'Presente',
      year: 'ano',
      years: 'anos',
      month: 'mês',
      months: 'meses',
    }
  },
} as const;

export type TranslationKey = typeof TRANSLATIONS;
