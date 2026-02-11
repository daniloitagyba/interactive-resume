import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { DATA } from '../constants/data';
import { Briefcase, ChevronDown, ChevronUp } from 'lucide-react';

const Experience: React.FC = () => {
  const { language } = useLanguage();
  const data = DATA[language];
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    if (showAll) {
      setTimeout(() => {
        const element = document.getElementById('experience');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
    setShowAll(!showAll);
  };

  const displayedExperience = showAll ? data.experience : data.experience.slice(0, 3);

  return (
    <section id="experience" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <Briefcase className="text-accent" size={32} />
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{language === 'en' ? 'Work Experience' : 'Experiência Profissional'}</h2>
        </div>

        <motion.div layout className="space-y-12">
          <AnimatePresence mode="popLayout" initial={false}>
            {displayedExperience.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${index}`}
                layout
                initial={{ opacity: 0, height: 0, marginBottom: 0 }}
                animate={{ 
                  opacity: 1, 
                  height: "auto", 
                  marginBottom: "3rem",
                  transition: { 
                    height: { duration: 0.4 },
                    opacity: { duration: 0.3, delay: 0.1 }
                  }
                }}
                exit={{ 
                  opacity: 0, 
                  height: 0, 
                  marginBottom: 0,
                  transition: {
                    height: { duration: 0.4, delay: 0.1 },
                    opacity: { duration: 0.2 }
                  }
                }}
                className="relative pl-10 overflow-hidden group"
              >
                {/* Vertical Line */}
                <div className="absolute left-[19px] top-0 bottom-0 w-0.5 bg-accent/30 group-hover:bg-accent transition-colors" />
                
                {/* Timeline Circle */}
                <div className="absolute left-[12px] top-0 w-4 h-4 rounded-full bg-accent z-10 scale-100 group-hover:scale-110 transition-transform" />
                
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.role}</h3>
                    <p className="font-medium">
                      <span className="text-accent">{exp.company}</span>
                      <span className="text-gray-500 dark:text-gray-400 text-sm ml-2">— {exp.location}</span>
                    </p>
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 mt-1 md:mt-0">
                    {exp.period}
                  </div>
                </div>

                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 mb-4">
                  {exp.description.map((desc, i) => (
                    <li key={i} className="leading-relaxed">{desc}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <span 
                      key={i} 
                      className="text-xs px-2 py-1 rounded bg-accent/10 text-accent border border-accent/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {data.experience.length > 3 && (
          <motion.div layout className="mt-12 text-center">
            <button
              onClick={toggleShowAll}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent/10 text-accent hover:bg-accent/20 transition-all font-semibold"
            >
              {showAll ? (
                <>
                  {language === 'en' ? 'Show Less' : 'Ver Menos'} <ChevronUp size={20} />
                </>
              ) : (
                <>
                  {language === 'en' ? 'Show More' : 'Ver Mais'} <ChevronDown size={20} />
                </>
              )}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Experience;
