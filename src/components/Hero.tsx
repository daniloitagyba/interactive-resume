import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Rss } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { DATA } from '../constants/data';

const Hero: React.FC = () => {
  const { language } = useLanguage();
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
            {language === 'en' ? "Hi, my name is" : "Olá, meu nome é"}
          </h2>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-gray-900 dark:text-white tracking-tight">
            {data.name}
          </h1>
          <h3 className="text-3xl md:text-5xl font-bold text-gray-600 dark:text-gray-400 mb-8">
            {data.title}
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            {data.summary}
          </p>
          
          <div className="flex justify-center space-x-6">
            <a href={data.links.github} target="_blank" rel="noopener noreferrer" className="nav-link">
              <Github size={28} />
            </a>
            <a href={data.links.linkedin} target="_blank" rel="noopener noreferrer" className="nav-link">
              <Linkedin size={28} />
            </a>
            <a href={data.links.blog} target="_blank" rel="noopener noreferrer" className="nav-link" title="Blog">
              <Rss size={28} />
            </a>
            <a href={`mailto:${data.links.email}`} className="nav-link">
              <Mail size={28} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
