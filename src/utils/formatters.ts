import type { Language } from '../context/LanguageContext';
import { TRANSLATIONS } from '../constants/translations';

const MONTHS = {
  en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  pt: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
} as const;

export const formatDuration = (startDate: Date, endDate: Date | null, language: Language): string => {
  const end = endDate ?? new Date();
  let years = end.getFullYear() - startDate.getFullYear();
  let months = end.getMonth() - startDate.getMonth();

  if (months < 0) {
    years--;
    months += 12;
  }

  const t = TRANSLATIONS[language].common;
  const parts: string[] = [];

  if (years > 0) {
    parts.push(`${years} ${years > 1 ? t.years : t.year}`);
  }

  if (months > 0) {
    parts.push(`${months} ${months > 1 ? t.months : t.month}`);
  }

  return parts.join(', ');
};

export const formatPeriod = (startDate: Date, endDate: Date | null, language: Language): string => {
  const t = TRANSLATIONS[language].common;
  const startMonth = MONTHS[language][startDate.getMonth()];
  const startYear = startDate.getFullYear();

  const endLabel = endDate
    ? `${MONTHS[language][endDate.getMonth()]} ${endDate.getFullYear()}`
    : t.present;

  const duration = formatDuration(startDate, endDate, language);

  return `${startMonth} ${startYear} - ${endLabel} (${duration})`;
};
