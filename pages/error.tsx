import { NextPageWithLayout } from './_app';
import { Layout } from '../app/components/Layout';
import {HeaderV1} from '../app/components/Navigation/HeaderV1';
import { FooterVariant1 } from '../app/components/Footer/FooterVariant1';


const ErrorPage: NextPageWithLayout = () => {
    return (
        <>
            <HeaderV1/>
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
            <FooterVariant1/>
        </>
    );
};

ErrorPage.getLayout = function getLayout(page: React.ReactElement) {
    return <Layout title="Error">{page}</Layout>;
};

export default ErrorPage;