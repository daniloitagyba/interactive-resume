import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from '../../hooks/useTranslation';
import { useVisibleItems } from '../../hooks/useVisibleItems';
import { DATA } from '../../constants/data';
import { Briefcase, ChevronDown, ChevronUp } from 'lucide-react';
import ExperienceCard from '../ui/ExperienceCard';

const Experience: React.FC = () => {
  const { t, language } = useTranslation();
  const data = DATA[language];
  
  const { showAll, toggleShowAll, visibleCount, hasMore } = useVisibleItems(
    data.experience.length,
    { initialCount: 2, sectionId: 'experience' }
  );

  const displayedExperience = data.experience.slice(0, visibleCount);

  return (
    <section id="experience" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <Briefcase className="text-accent" size={32} />
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{t.experience.title}</h2>
        </div>

        <motion.div layout className="space-y-12">
          <AnimatePresence mode="popLayout" initial={false}>
            {displayedExperience.map((exp, index) => (
              <ExperienceCard key={`${exp.company}-${index}`} exp={exp} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {hasMore && (
          <motion.div layout className="mt-12 text-center">
            <button
              onClick={toggleShowAll}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent/10 text-accent hover:bg-accent/20 transition-all font-semibold"
            >
              {showAll ? (
                <>
                  {t.experience.showLess} <ChevronUp size={20} />
                </>
              ) : (
                <>
                  {t.experience.showMore} <ChevronDown size={20} />
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
