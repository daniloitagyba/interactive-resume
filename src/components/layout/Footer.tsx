import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Github, Linkedin, Mail, Rss } from 'lucide-react';
import { DATA } from '../../constants/data';

const Footer: React.FC = () => {
  const { language } = useLanguage();
  const data = DATA[language];

  return (
    <footer className="py-12 bg-midnight/50 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
        <div className="flex space-x-6 mb-8">
          <a href={data.links.github} target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-accent transition-colors">
            <Github size={24} />
          </a>
          <a href={data.links.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-accent transition-colors">
            <Linkedin size={24} />
          </a>
          <a href={data.links.blog} target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-accent transition-colors" title="Blog">
            <Rss size={24} />
          </a>
          <a href={`mailto:${data.links.email}`} className="text-gray-600 dark:text-gray-400 hover:text-accent transition-colors">
            <Mail size={24} />
          </a>
        </div>
        
        <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">
         {new Date().getFullYear()} © Danilo Itagyba. {language === 'en' ? 'All rights reserved.' : 'Todos os direitos reservados.'}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
