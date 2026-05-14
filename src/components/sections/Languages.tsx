import { motion } from 'framer-motion';
import { Languages as LanguagesIcon } from 'lucide-react';
import { DATA } from '../../constants/data';
import { useTranslation } from '../../hooks/useTranslation';

const Languages = () => {
  const { t, language } = useTranslation();
  const data = DATA[language];

  return (
    <section id="languages" className="section-padding" aria-labelledby="languages-title">
      <div className="max-w-4xl mx-auto">
        <header className="flex items-center gap-4 mb-12">
          <LanguagesIcon className="text-accent" size={32} aria-hidden="true" />
          <h2 id="languages-title" className="text-3xl font-bold text-theme-text">
            {t.languages.title}
          </h2>
        </header>

        <div className="grid sm:grid-cols-2 gap-4">
          {data.languages.map((item, index) => (
            <motion.article
              key={item.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.08 }}
              className="rounded-lg border border-theme-border bg-theme-card p-5 shadow-sm"
            >
              <h3 className="text-xl font-bold text-theme-text">
                {item.name}
              </h3>
              <p className="mt-2 text-theme-text-muted">
                {item.proficiency}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Languages;
