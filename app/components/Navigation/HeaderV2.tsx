import { useState } from 'react';
import { RightMenu } from '../RightMenu';
import { Burger } from './Burger';
import { NextLink } from '../BaseNextLink';

export const HeaderV2 = () => {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <>
            <header className="pb">
                <div className="container-fluid">
                    <div className="header-content d-flex flex-wrap align-items-center">
                        <div className="logo">
                            <NextLink href="/" title="" className="white-logo">
                                <img src="/static/images/logo.png" alt="" />
                            </NextLink>
                            <NextLink href="/" title="" className="dark-logo">
                                <img src="/static/images/logo2.png" alt="" />
                            </NextLink>
                        </div>
                        <div className="mile-right ms-auto">
                            <Burger setOpen={() => setOpen(!open)} />

                            <NextLink href="#" title="" className="btn-default no-bg">
                                Let’s talk
                                <i className="lni lni-comments" />
                            </NextLink>
                        </div>
                    </div>
                </div>
            </header>
            <RightMenu isOpen={open} closeMenu={() => setOpen(!open)} />
        </>
    );
};
