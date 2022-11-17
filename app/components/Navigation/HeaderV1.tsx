import { useState } from 'react';
import {RightMenu} from '../RightMenu';
import {NextLink} from '../BaseNextLink';
import {Burger} from './Burger';

export const HeaderV1 = () => {
    const [open, setOpen] = useState<boolean>(false);

    return <>
        <header className="rel">
            <div className="container-fluid">
                <div className="header-content d-flex flex-wrap align-items-center">
                    <div className="logo">
                        <NextLink href="/" title="logo">
                            <img src="/static/images/logo2.png" alt=""/>
                        </NextLink>
                    </div>
                    <div className="mile-right ms-auto">
                        <Burger setOpen={() => setOpen(!open)} />

                        <a href="#" title="" className="btn-default no-bg">
                            Let’s talk
                            <i className="lni lni-comments"/>
                        </a>
                    </div>
                </div>
            </div>
        </header>
        <RightMenu isOpen={open} closeMenu={() => setOpen(!open)}/>
    
    </>; 
};