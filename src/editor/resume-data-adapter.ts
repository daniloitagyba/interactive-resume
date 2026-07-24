import type { ResumeData } from '../types';
import type { EditableResumeData } from './types';

const toMonthValue = (date: Date): string =>
  `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;

export const toEditableResumeData = (data: ResumeData): EditableResumeData => ({
  ...data,
  experience: data.experience.map((item) => ({
    ...item,
    startDate: toMonthValue(item.startDate),
    endDate: item.endDate ? toMonthValue(item.endDate) : null,
  })),
});
