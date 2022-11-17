import { useEffect, useState } from 'react';

export const useScrollPosition = () => {
    if (typeof window === 'undefined') return 500;

    // Store the state
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [scrollPos, setScrollPos] = useState(window.scrollY);

    // On Scroll
    const onScroll = () => {
        setScrollPos(window.scrollY);
    };

    // Add and remove the window listener
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        window.addEventListener('scroll', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    });

    return scrollPos;
};
