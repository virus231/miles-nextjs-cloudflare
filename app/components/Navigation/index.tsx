import classNames from "classnames"
import { NextLink } from "../BaseNextLink"
import { Burger } from "./Burger"
import { Links } from "./Links"
import styles from "./Navigation.module.scss"


type Props = {
    setOpen: () => void;
}

export const Navigation = ({setOpen}: Props) => {

    return <header className={styles.headerV8}>
        <div className="container">
            <div className={styles.headerContentV8}>
                <div className={styles.logoV8}>
                    <NextLink href="/" title="logo">
                        <img src="/static/images/logo_8.png" alt="Logo" />
                    </NextLink>
                </div>
                <nav>
                    <ul>
                        <Links/>
                    </ul>
                </nav>

                <NextLink href="#" className={styles.chatBtn}>
                    Let’s chat!
                    <i className="lni lni-comments-reply"></i>
                </NextLink>

                <Burger setOpen={setOpen} />

            </div>
        </div>
    </header>
}