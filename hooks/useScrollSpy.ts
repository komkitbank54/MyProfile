import { useState, useEffect, RefObject } from "react";

export function useScrollSpy(
    containerRef: RefObject<HTMLElement>,
    sectionIds: string[]
) {
    const [activeId, setActiveId] = useState<string>(sectionIds[0]);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            {
                root: container,
                threshold: 0.5,
            }
        );

        sectionIds.forEach((id) => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => {
            sectionIds.forEach((id) => {
                const element = document.getElementById(id);
                if (element) observer.unobserve(element);
            });
        };

    }, [containerRef, sectionIds]);

    return activeId
}
