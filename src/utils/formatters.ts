import { TRANSLATIONS } from '../constants/translations';

export const calculateDuration = (startDate: Date, language: "en" | "pt") => {
  const now = new Date();
  let years = now.getFullYear() - startDate.getFullYear();
  let months = now.getMonth() - startDate.getMonth();

  if (months < 0) {
    years--;
    months += 12;
  }

  const t = TRANSLATIONS[language].common;
  const parts = [];

  if (years > 0) {
    parts.push(`${years} ${years > 1 ? t.years : t.year}`);
  }
  
  if (months > 0) {
    parts.push(`${months} ${months > 1 ? t.months : t.month}`);
  }

  return parts.join(", ");
};
