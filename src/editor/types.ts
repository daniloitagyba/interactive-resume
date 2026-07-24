import type { ResumeData } from '../types';

export type EditableExperience = Omit<ResumeData['experience'][number], 'startDate' | 'endDate'> & {
  startDate: string;
  endDate: string | null;
};

export type EditableResumeData = Omit<ResumeData, 'experience'> & {
  experience: EditableExperience[];
};
