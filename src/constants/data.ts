import { PortfolioData } from '../types';
import { dataEn } from './data-en';
import { dataPt } from './data-pt';

export * from './personal';
export * from './tech-stack';
export * from './common';

export const DATA: Record<"en" | "pt", PortfolioData> = {
  en: dataEn,
  pt: dataPt
};
