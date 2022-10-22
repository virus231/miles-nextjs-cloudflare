import classNames from "classnames";
import Head from "next/head";
import { ReactNode, ReactNodeArray, useState } from "react";
import { Footer } from "../Footer";
import { Navigation } from "../Navigation";
import { RightMenu } from "../RightMenu";
import styles from "./Layout.module.scss"

export type LayoutProps = {
    children?: ReactNode | ReactNodeArray
    title?: string,
    keywords?: string,
    description?: string
}

export function Layout({ title, keywords, description, children }: LayoutProps) {
    const [open, setOpen] = useState(false);

    return <div className={styles.layoutWrapper}>
        <Head>
            <title>{title ? `${title} · Miles` : `Miles`}</title>
            {keywords ? <meta name="keywords" content={keywords}/> : null}
            {description ? <meta name="description" content={description}/> : null}
            <meta name="viewport" content="initial-scale=1, width=device-width" />
            {/*<link rel="icon" href="/static/favicon.ico"/>*/}
        </Head>
        <div className={styles.layoutRoot}>
            {/* <Navigation setOpen={() => setOpen(!open)} />
            <RightMenu closeMenu={() => setOpen(false)} isOpen={open} /> */}
            {children}
            {/*<Box flex={1} position="relative">*/}
            {/*    <Container maxWidth="lg">*/}
            {/*        <>{children}</>*/}
            {/*    </Container>*/}
            {/*</Box>*/}
            {/* <Footer/> */}
        </div>
    </div>
}
