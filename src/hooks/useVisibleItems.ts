import { useState } from 'react';

interface UseVisibleItemsOptions {
  initialCount: number;
  sectionId?: string;
}

export const useVisibleItems = (totalItems: number, options: UseVisibleItemsOptions) => {
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    if (showAll && options.sectionId) {
      setTimeout(() => {
        const element = document.getElementById(options.sectionId!);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
    setShowAll(!showAll);
  };

  const visibleCount = showAll ? totalItems : options.initialCount;

  return {
    showAll,
    toggleShowAll,
    visibleCount,
    hasMore: totalItems > options.initialCount,
  };
};
