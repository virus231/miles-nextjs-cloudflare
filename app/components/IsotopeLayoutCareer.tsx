import { useEffect, useRef, useState } from 'react';
import Isotope, { IsotopeOptions } from 'isotope-layout';
import fetch from 'isomorphic-unfetch';


type Item = {
    id: number,
    value: string
}

type Props = {
    items: Item[]
}

export default function IsotopeLayoutCareer(props: Props) {
    const [filterKey, setFilterKey] = useState('*');
    const isotope = useRef<Isotope | null>(null);

    const handleFilterKeyChange = (key: string) => () => {
        setFilterKey(key);

    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            isotope.current = new Isotope('.masonary', {
                itemSelector: '.career',
                layoutMode: 'masonry'
            });
        }
    }, []);

    useEffect(() => {
        if (filterKey === '*') isotope.current?.arrange({ filter: '*' });
        else isotope.current?.arrange({ filter: `.${filterKey}` });
    }, [isotope, filterKey]);

    const isActive = (key: string) => {
        return filterKey === key ? 'selected' : '';
    };

    return (
        <>
            <div className="options">
                <div className="option-isotop">
                    <ul id="filter" className="option-set filters-nav text-center" data-option-key="filter">
                        <li>
                            <a className={`${isActive('*')}`} onClick={handleFilterKeyChange('*')} data-option-value="*">
                                All Jobs{' '}
                            </a>
                        </li>
                        <li>
                            <a className={`${isActive('full_time')}`} onClick={handleFilterKeyChange('full_time')} data-option-value=".full_time">Full Time</a>
                        </li>
                        <li>
                            <a className={`${isActive('part_time')}`} onClick={handleFilterKeyChange('part_time')} data-option-value=".part_time">Part Time</a>
                        </li>
                        <li>
                            <a className={`${isActive('remote')}`} onClick={handleFilterKeyChange('remote')} data-option-value=".remote">Remote</a>
                        </li>
                        <li>
                            <a className={`${isActive('internship')}`} onClick={handleFilterKeyChange('internship')} data-option-value=".internship">Internship</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="row ms-row masonary">
                {props.items.map((item: Item) => (
                    <div key={item.id}
                        className={`career col-lg-6 col-md-6 col-sm-6 ${item.value}`}>
                        <div className="career-item">
                            <div className="career-thumb">
                                <img src={`/static/images/cr${item.id}.jpg`} alt="" className="w-100" />
                            </div>
                            <div className="career-info">
                                <h2>
                                    <a href="career-detail.tsx" title="">
                                        Creative Director
                                    </a>
                                </h2>
                                <p>
                                    First and foremost, you’re a leader. You see what others don’t and know what it takes to turn a
                                    vision...
                                </p>
                                <span>Sanfrancisco / Full Time</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
};