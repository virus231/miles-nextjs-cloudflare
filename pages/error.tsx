import { NextPageWithLayout } from './_app'
import { Layout } from '../app/components/Layout'
import {FooterVariant2} from "../app/components/Footer/FooterVariant2";


const ErrorPage: NextPageWithLayout = () => {
    return (
        <>
            {/*@include('partials/header-v1.html')*/}

            <section className="error-page">
                <div className="container">
                    <div className="error-content">
                        <img src="/static/images/404.png" alt="" />
                        <h3>Error! Page Not Found</h3>
                        <p>You seem can’t to find the page you’re looking for</p>
                        <a href="index.html" title="" className="btn-default box-shadow-none">
                            Back To Homepage
                        </a>
                    </div>
                </div>
            </section>
            <FooterVariant2/>
        </>
    )
}

ErrorPage.getLayout = function getLayout(page: React.ReactElement) {
    return <Layout title="Error">{page}</Layout>;
};

export default ErrorPage