import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { NextPage } from 'next/types'
import { ReactElement, ReactNode } from 'react'


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
