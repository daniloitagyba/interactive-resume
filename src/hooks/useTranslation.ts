import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../constants/translations';

export const useTranslation = () => {
  const { language } = useLanguage();

  const t = TRANSLATIONS[language];

  return { t, language };
};
