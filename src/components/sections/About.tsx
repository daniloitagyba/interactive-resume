import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { DATA } from '../../constants/data';
import { GraduationCap, User } from 'lucide-react';

const About: React.FC = () => {
  const { language } = useLanguage();
  const data = DATA[language];

  return (
    <section id="about" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <User className="text-accent" size={32} />
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{language === 'en' ? 'About Me' : 'Sobre Mim'}</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              {data.summary}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="text-accent" size={24} />
              <h3 className="text-xl font-bold">{language === 'en' ? 'Education' : 'Formação'}</h3>
            </div>
            
            <div className="space-y-6">
              {data.education.map((edu, index) => (
                <div key={index} className="border-l-2 border-accent/20 pl-4">
                  <h4 className="font-bold text-gray-900 dark:text-white">{edu.degree}</h4>
                  <p className="text-accent text-sm">{edu.institution}</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">{edu.period}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
