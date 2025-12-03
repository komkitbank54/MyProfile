import { useState, useEffect, RefObject } from 'react';

export const useScrollSpy = (
  containerRef: RefObject<HTMLElement>,
  sectionIds: string[],
  offset: number = 200
) => {
  const [activeId, setActiveId] = useState<string>(sectionIds[0]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollPosition = container.scrollTop + offset;

      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (!element) continue;

        const top = element.offsetTop;
        const height = element.offsetHeight;

        if (scrollPosition >= top && scrollPosition < top + height) {
          setActiveId(id);
          break;
        }
      }
    };

    container.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => container.removeEventListener('scroll', handleScroll);
  }, [containerRef, sectionIds, offset]);

  return activeId;
};