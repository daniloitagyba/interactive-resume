import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { DATA } from '../constants/data';
import { Code2 } from 'lucide-react';

const Skills: React.FC = () => {
  const { language } = useLanguage();
  const data = DATA[language];

  return (
    <section id="skills" className="section-padding bg-midnight-light/10">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <Code2 className="text-accent" size={32} />
          <h2 className="text-3xl font-bold">{language === 'en' ? 'Technical Skills' : 'Habilidades Técnicas'}</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {data.techStack.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className="p-4 rounded-lg bg-white dark:bg-midnight-light border border-gray-200 dark:border-gray-700 text-center font-medium shadow-sm text-gray-800 dark:text-gray-200"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
