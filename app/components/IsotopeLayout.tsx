import { useEffect, useRef, useState } from 'react';
import Isotope from 'isotope-layout';

const isBrowser = typeof window !== "undefined";

export const IsotopeLayout = () => {
    const isotope = useRef<Isotope | null>();
    const [filterKey, setFilterKey] = useState('*');

    // useEffect(() => {
    //     if (isBrowser) {
    //       new Isotope('.masonary', {
    //         itemSelector: '.main',
    //         layoutMode: 'masonry'
    //       });
    //     }
    //
    //     return () => isotope.current?.destroy();
    // }, [isBrowser]);

    useEffect(() => {
        if (filterKey === '*') isotope.current?.arrange({ filter: '*' });
        else isotope.current?.arrange({ filter: `.${filterKey}` });
    }, [filterKey]);

    const handleFilterKeyChange = (key: string) => () => setFilterKey(key);

    return {
        handleFilterKeyChange
    };
};
