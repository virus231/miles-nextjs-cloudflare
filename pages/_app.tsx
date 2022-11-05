import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { NextPage } from 'next/types'
import { ReactElement, ReactNode } from 'react'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-lazy-load-image-component/src/effects/blur.css';


export type NextPageWithLayout = NextPage & {
    getLayout?: (page: ReactElement) => ReactNode
}

interface MyAppProps extends AppProps {
    Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: MyAppProps) {
    const getLayout = Component.getLayout ?? ((page: ReactElement) => page);
    return (
        <>
            {getLayout(<Component {...pageProps} />)}
        </>
    )
}

export default MyApp
