import { Terminal, Home, GraduationCap, Briefcase, Code2, Moon, Sun, Languages, Pencil } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useTheme } from '../../context/ThemeContext';
import { useTranslation } from '../../hooks/useTranslation';
import { cn } from '../../utils/cn';
import { FlagUS, FlagBR } from '../ui/Flags';

const Navbar = () => {
  const { language, setLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const { t } = useTranslation();
  const isLocalDevelopment =
    import.meta.env.DEV && ['localhost', '127.0.0.1', '[::1]'].includes(window.location.hostname);

  const navItems = [
    { id: 'home', label: t.nav.home, icon: Home },
    { id: 'experience', label: t.nav.experience, icon: Briefcase },
    { id: 'skills', label: t.nav.skills, icon: Code2 },
    { id: 'education', label: t.nav.education, icon: GraduationCap },
    { id: 'languages', label: t.nav.languages, icon: Languages },
  ];

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const languageButtonClass = (isActive: boolean) =>
    cn(
      "p-2 rounded-md transition-all flex items-center gap-2 border",
      isActive
        ? "bg-accent/20 border-accent text-accent shadow-[0_0_10px_rgba(56,189,248,0.2)]"
        : "border-theme-border text-theme-text-muted hover:border-accent/30 hover:text-accent"
    );

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300 border-b",
      "bg-theme-bg/90 backdrop-blur-md border-theme-border"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <button
            onClick={() => scrollTo('home')}
            className="flex-shrink-0 text-accent hover:scale-110 transition-transform cursor-pointer"
            aria-label={t.nav.home}
          >
            <Terminal size={36} strokeWidth={2.5} />
          </button>

          <div className="hidden lg:flex gap-7">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-sm font-bold text-theme-text hover:text-accent transition-colors cursor-pointer flex items-center gap-2 whitespace-nowrap"
              >
                <item.icon size={20} aria-hidden="true" />
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            {isLocalDevelopment && (
              <a
                href="/editar"
                className="p-2 rounded-md border border-amber-500/40 text-amber-600 dark:text-amber-400 hover:bg-amber-500/10 transition-all"
                aria-label="Abrir editor local do currículo"
                title="Editar currículo"
              >
                <Pencil size={20} aria-hidden="true" />
              </a>
            )}

            <button
              onClick={toggleTheme}
              className="p-2 rounded-md border border-theme-border text-theme-text-muted hover:text-accent transition-all"
              aria-label={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
            >
              {theme === 'light' ? <Moon size={20} aria-hidden="true" /> : <Sun size={20} aria-hidden="true" />}
            </button>

            <div className="flex items-center space-x-2">
              <button
                onClick={() => setLanguage('en')}
                className={languageButtonClass(language === 'en')}
                aria-label="Switch to English"
                aria-current={language === 'en' ? 'true' : undefined}
              >
                <FlagUS className="w-5 h-5" aria-hidden="true" />
                <span className="text-xs font-bold uppercase hidden sm:inline">EN</span>
              </button>

              <button
                onClick={() => setLanguage('pt')}
                className={languageButtonClass(language === 'pt')}
                aria-label="Mudar para Português"
                aria-current={language === 'pt' ? 'true' : undefined}
              >
                <FlagBR className="w-5 h-5" aria-hidden="true" />
                <span className="text-xs font-bold uppercase hidden sm:inline">PT</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
