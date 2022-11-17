import classNames from 'classnames';
import {useEffect, useRef, useState} from 'react';
import { NextLink } from '../BaseNextLink';
import { RightMenu } from '../RightMenu';
import { Burger } from './Burger';
import { Links } from './Links';
import styles from './Navigation.module.scss';


export const Navigation = () => {
    const [open, setOpen] = useState<boolean>(false);

    return (<>
        <header className={styles.headerV8}>
            <div className="container">
                <div className={styles.headerContentV8}>
                    <div className={styles.logoV8}>
                        <NextLink href="/" title="logo">
                            <img src="/static/images/logo_8.png" alt="Logo" />
                        </NextLink>
                    </div>
                    <nav>
                        <ul>
                            <Links />
                        </ul>
                    </nav>

                    <NextLink href="#" className={styles.chatBtn}>
                        Let’s chat!
                        <i className="lni lni-comments-reply"></i>
                    </NextLink>

                    <Burger setOpen={() => setOpen(!open)} />

                </div>
            </div>
        </header>

        <RightMenu isOpen={open} closeMenu={() => setOpen(!open)} />
    </>
    );
};