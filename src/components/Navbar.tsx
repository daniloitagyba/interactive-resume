import { Terminal, Home, User, Briefcase, Code2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { cn } from '../hooks/utils';

const Navbar: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const navItems = [
    { id: 'home', label: language === 'en' ? 'Home' : 'Início', icon: Home },
    { id: 'about', label: language === 'en' ? 'About' : 'Sobre', icon: User },
    { id: 'experience', label: language === 'en' ? 'Experience' : 'Experiência', icon: Briefcase },
    { id: 'skills', label: language === 'en' ? 'Skills' : 'Habilidades', icon: Code2 },
  ];

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const FlagUS = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" className="w-5 h-5">
      <path fill="#bd3d44" d="M0 0h640v480H0z"/>
      <path stroke="#fff" strokeWidth="37" d="M0 55.4h640M0 129h640M0 203h640M0 277h640M0 351h640M0 424.6h640"/>
      <path fill="#192f5d" d="M0 0h256v258.5H0z"/>
      <marker id="a" markerHeight="6.1" markerWidth="6.1" orient="auto">
        <path fill="#fff" d="m0 0 2.3 7h-6l5-4.3h-6.3Z"/>
      </marker>
      <path fill="none" markerEnd="url(#a)" markerMid="url(#a)" markerStart="url(#a)" d="m26 23 23 31h158l23-31M26 71l23 31h158l23-31M26 119l23 31h158l23-31M26 167l23 31h158l23-31M26 215l23 31h158l23-31M50 47l23 31h110l23-31M50 95l23 31h110l23-31M50 143l23 31h110l23-31M50 191l23 31h110l23-31"/>
      <circle cx="26" cy="23" r="1" fill="#fff"/><circle cx="49" cy="47" r="1" fill="#fff"/><circle cx="72" cy="23" r="1" fill="#fff"/><circle cx="95" cy="47" r="1" fill="#fff"/><circle cx="118" cy="23" r="1" fill="#fff"/><circle cx="141" cy="47" r="1" fill="#fff"/><circle cx="164" cy="23" r="1" fill="#fff"/><circle cx="187" cy="47" r="1" fill="#fff"/><circle cx="210" cy="23" r="1" fill="#fff"/><circle cx="233" cy="47" r="1" fill="#fff"/><circle cx="26" cy="71" r="1" fill="#fff"/><circle cx="49" cy="95" r="1" fill="#fff"/><circle cx="72" cy="71" r="1" fill="#fff"/><circle cx="95" cy="95" r="1" fill="#fff"/><circle cx="118" cy="71" r="1" fill="#fff"/><circle cx="141" cy="95" r="1" fill="#fff"/><circle cx="164" cy="71" r="1" fill="#fff"/><circle cx="187" cy="95" r="1" fill="#fff"/><circle cx="210" cy="71" r="1" fill="#fff"/><circle cx="233" cy="95" r="1" fill="#fff"/><circle cx="26" cy="119" r="1" fill="#fff"/><circle cx="49" cy="143" r="1" fill="#fff"/><circle cx="72" cy="119" r="1" fill="#fff"/><circle cx="95" cy="143" r="1" fill="#fff"/><circle cx="118" cy="119" r="1" fill="#fff"/><circle cx="141" cy="143" r="1" fill="#fff"/><circle cx="164" cy="119" r="1" fill="#fff"/><circle cx="187" cy="143" r="1" fill="#fff"/><circle cx="210" cy="119" r="1" fill="#fff"/><circle cx="233" cy="143" r="1" fill="#fff"/><circle cx="26" cy="167" r="1" fill="#fff"/><circle cx="49" cy="191" r="1" fill="#fff"/><circle cx="72" cy="167" r="1" fill="#fff"/><circle cx="95" cy="191" r="1" fill="#fff"/><circle cx="118" cy="167" r="1" fill="#fff"/><circle cx="141" cy="191" r="1" fill="#fff"/><circle cx="164" cy="167" r="1" fill="#fff"/><circle cx="187" cy="191" r="1" fill="#fff"/><circle cx="210" cy="167" r="1" fill="#fff"/><circle cx="233" cy="191" r="1" fill="#fff"/><circle cx="26" cy="215" r="1" fill="#fff"/><circle cx="49" cy="239" r="1" fill="#fff"/><circle cx="72" cy="215" r="1" fill="#fff"/><circle cx="95" cy="239" r="1" fill="#fff"/><circle cx="118" cy="215" r="1" fill="#fff"/><circle cx="141" cy="239" r="1" fill="#fff"/><circle cx="164" cy="215" r="1" fill="#fff"/><circle cx="187" cy="239" r="1" fill="#fff"/><circle cx="210" cy="215" r="1" fill="#fff"/><circle cx="233" cy="239" r="1" fill="#fff"/>
    </svg>
  );

  const FlagBR = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" className="w-5 h-5">
      <path fill="#009c3b" d="M0 0h640v480H0z"/>
      <path fill="#ffdf00" d="m320 40 280 200-280 200L40 240z"/>
      <circle cx="320" cy="240" r="140" fill="#002776"/>
      <path fill="#fff" d="M180 240a140 140 0 0 0 280 0c0-10-8-10-8-10a140 140 0 0 1-264 10s-8 0-8 10z"/>
    </svg>
  );

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
              <FlagUS />
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
              <FlagBR />
              <span className="text-xs font-bold uppercase hidden sm:inline">PT</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
