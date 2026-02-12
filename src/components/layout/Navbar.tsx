import { Terminal, Home, GraduationCap, Briefcase, Code2 } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { cn } from '../../hooks/utils';
import { FlagUS, FlagBR } from '../ui/Flags';

const Navbar: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const navItems = [
    { id: 'home', label: language === 'en' ? 'Home' : 'Início', icon: Home },
    { id: 'education', label: language === 'en' ? 'Education' : 'Educação', icon: GraduationCap },
    { id: 'experience', label: language === 'en' ? 'Experience' : 'Experiência', icon: Briefcase },
    { id: 'skills', label: language === 'en' ? 'Skills' : 'Habilidades', icon: Code2 },
  ];

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300 border-b",
      "bg-midnight/90 backdrop-blur-md border-gray-800"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <button 
            onClick={() => scrollTo('home')} 
            className="flex-shrink-0 text-accent hover:scale-110 transition-transform cursor-pointer"
            title="Home"
          >
            <Terminal size={36} strokeWidth={2.5} />
          </button>
          
          <div className="hidden md:flex space-x-10">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-base font-bold text-gray-200 hover:text-accent transition-colors cursor-pointer flex items-center gap-2"
              >
                <item.icon size={20} />
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => setLanguage('en')}
              className={cn(
                "p-2 rounded-md transition-all flex items-center gap-2 border",
                language === 'en' 
                  ? "bg-accent/20 border-accent text-white shadow-[0_0_10px_rgba(56,189,248,0.3)]" 
                  : "border-gray-700 text-gray-400 hover:border-gray-500 hover:text-gray-200"
              )}
              title="English"
            >
              <FlagUS className="w-5 h-5" />
              <span className="text-xs font-bold uppercase hidden sm:inline">EN</span>
            </button>
            
            <button
              onClick={() => setLanguage('pt')}
              className={cn(
                "p-2 rounded-md transition-all flex items-center gap-2 border",
                language === 'pt' 
                  ? "bg-accent/20 border-accent text-white shadow-[0_0_10px_rgba(56,189,248,0.3)]" 
                  : "border-gray-700 text-gray-400 hover:border-gray-500 hover:text-gray-200"
              )}
              title="Português"
            >
              <FlagBR className="w-5 h-5" />
              <span className="text-xs font-bold uppercase hidden sm:inline">PT</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
