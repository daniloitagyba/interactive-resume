import { motion } from 'framer-motion';
import { Award, BadgeCheck } from 'lucide-react';
import { DATA } from '../../constants/data';
import { useTranslation } from '../../hooks/useTranslation';

const Certifications = () => {
  const { t, language } = useTranslation();
  const data = DATA[language];

  return (
    <section id="certifications" className="section-padding bg-theme-bg-secondary" aria-labelledby="certifications-title">
      <div className="max-w-4xl mx-auto">
        <header className="flex items-center gap-4 mb-12">
          <Award className="text-accent" size={32} aria-hidden="true" />
          <h2 id="certifications-title" className="text-3xl font-bold text-theme-text">
            {t.certifications.title}
          </h2>
        </header>

        <div className="grid md:grid-cols-2 gap-4">
          {data.certifications.map((certification, index) => (
            <motion.article
              key={`${certification.name}-${index}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.04 }}
              className="rounded-lg border border-theme-border bg-theme-card p-5 shadow-sm"
            >
              <div className="flex items-start gap-3">
                <span className="mt-1 text-accent" aria-hidden="true">
                  <BadgeCheck size={20} />
                </span>
                <div className="min-w-0">
                  <h3 className="text-base font-bold text-theme-text leading-snug">
                    {certification.name}
                  </h3>
                  {certification.issuer && (
                    <p className="mt-1 text-sm font-medium text-accent">
                      {certification.issuer}
                    </p>
                  )}
                  {certification.issued && (
                    <p className="mt-2 text-sm text-theme-text-muted">
                      {certification.issued}
                    </p>
                  )}
                  {certification.credentialId && (
                    <p className="mt-2 break-all text-xs text-theme-text-muted">
                      <span className="font-semibold text-theme-text">{t.certifications.credentialId}:</span>{' '}
                      {certification.credentialId}
                    </p>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
