import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '../../hooks/useTranslation';
import { DATA } from '../../constants/data';
import { GraduationCap } from 'lucide-react';

const Education: React.FC = () => {
  const { t, language } = useTranslation();
  const data = DATA[language];

  return (
    <section id="education" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <GraduationCap className="text-accent" size={32} />
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            {t.education.title}
          </h2>
        </div>

        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >

              <div className="space-y-0">
                {data.education.map((edu, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative pl-10 pb-12 last:pb-0 group"
                  >
                    {/* Vertical Line - same as ExperienceCard */}
                    <div className="absolute left-[19px] top-0 bottom-0 w-0.5 bg-accent/30 group-hover:bg-accent transition-colors" />
                    
                    {/* Timeline Circle - same as ExperienceCard */}
                    <div className="absolute left-[12px] top-0 w-4 h-4 rounded-full bg-accent z-10 scale-100 group-hover:scale-110 transition-transform" />

                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-accent transition-colors">
                          {edu.degree}
                        </h4>
                        <p className="font-medium">
                          <span className="text-accent">{edu.institution}</span>
                        </p>
                      </div>
                      <div className="text-[12px] font-bold text-white bg-accent/10 px-3 py-1 rounded-full border border-accent/10 mt-1 md:mt-0 shadow-sm backdrop-blur-sm">
                        {edu.period}
                      </div>
                    </div>

                    {edu.description && (
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {edu.description}
                      </p>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
