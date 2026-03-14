import { useTranslation } from '../../hooks/useTranslation';
import { Github, Linkedin, Mail, Rss } from 'lucide-react';
import { LINKS, NAME } from '../../constants/data';

const SOCIAL_LINKS = [
  { href: LINKS.github, label: 'GitHub', icon: Github },
  { href: LINKS.linkedin, label: 'LinkedIn', icon: Linkedin },
  { href: LINKS.blog, label: 'Blog', icon: Rss },
  { href: `mailto:${LINKS.email}`, label: 'Email', icon: Mail },
];

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="py-12 bg-theme-bg-secondary border-t border-theme-border">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
        <div className="flex space-x-6 mb-8">
          {SOCIAL_LINKS.map(({ href, label, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={label !== 'Email' ? '_blank' : undefined}
              rel={label !== 'Email' ? 'noopener noreferrer' : undefined}
              className="text-theme-text-muted hover:text-accent transition-colors"
              aria-label={label}
            >
              <Icon size={24} aria-hidden="true" />
            </a>
          ))}
        </div>
        <p className="text-theme-text-muted text-sm font-medium">
          {new Date().getFullYear()} &copy; {NAME}. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
