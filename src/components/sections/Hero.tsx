import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Rss } from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslation';
import { DATA, NAME, LINKS } from '../../constants/data';

const SOCIAL_LINKS = [
  { href: LINKS.github, icon: Github, label: 'GitHub' },
  { href: LINKS.linkedin, icon: Linkedin, label: 'LinkedIn' },
  { href: LINKS.blog, icon: Rss, label: 'Blog' },
  { href: `mailto:${LINKS.email}`, icon: Mail, label: 'Email' },
];

const Hero = () => {
  const { t, language } = useTranslation();
  const data = DATA[language];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-accent text-xl md:text-2xl font-bold mb-4">
            {t.hero.greeting}
          </h2>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-theme-text tracking-tight flex justify-center flex-wrap">
            {Array.from(NAME).map((char, index) => (
              <motion.span
                key={`${NAME}-${index}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.1, delay: index * 0.16, ease: "easeOut" }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
              className="inline-block w-[3px] md:w-[5px] h-[0.8em] bg-accent ml-1 self-center"
            />
          </h1>
          <h3 className="text-3xl md:text-5xl font-bold text-theme-text-muted mb-8">
            {data.title}
          </h3>
          <div className="max-w-3xl mx-auto mb-10">
            <p className="text-xl md:text-2xl font-medium text-theme-text leading-relaxed">
              {data.summary}
            </p>
            <p className="mt-5 text-base md:text-lg font-medium text-theme-text-muted leading-relaxed">
              {data.highlights.map((highlight, index) => (
                <span key={highlight}>
                  {index > 0 && (
                    <span className="mx-2 text-accent" aria-hidden="true">•</span>
                  )}
                  {highlight}
                </span>
              ))}
            </p>
          </div>

          <div className="flex justify-center space-x-6">
            {SOCIAL_LINKS.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target={label !== 'Email' ? '_blank' : undefined}
                rel={label !== 'Email' ? 'noopener noreferrer' : undefined}
                className="nav-link"
                aria-label={label}
              >
                <Icon size={28} />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
