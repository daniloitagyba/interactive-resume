import React from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import { Github, Linkedin, Mail, Rss } from 'lucide-react';
import { LINKS, NAME } from '../../constants/data';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="py-12 bg-theme-bg-secondary border-t border-theme-border">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
        <div className="flex space-x-6 mb-8">
          <a href={LINKS.github} target="_blank" rel="noopener noreferrer" className="text-theme-text-muted hover:text-accent transition-colors">
            <Github size={24} />
          </a>
          <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="text-theme-text-muted hover:text-accent transition-colors">
            <Linkedin size={24} />
          </a>
          <a href={LINKS.blog} target="_blank" rel="noopener noreferrer" className="text-theme-text-muted hover:text-accent transition-colors" title="Blog">
            <Rss size={24} />
          </a>
          <a href={`mailto:${LINKS.email}`} className="text-theme-text-muted hover:text-accent transition-colors">
            <Mail size={24} />
          </a>
        </div>
        
        <p className="text-theme-text-muted text-sm font-medium">
         {new Date().getFullYear()} © {NAME}. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
