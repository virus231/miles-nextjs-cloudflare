import classNames from 'classnames'
import { NextLink } from '../app/components/BaseNextLink'
import styles from '../styles/Home.module.scss'
import { NextPageWithLayout } from './_app'
import { Layout } from '../app/components/Layout'
import {FooterVariant1} from "../app/components/Footer/FooterVariant1";
import {HeaderV1} from "../app/components/Navigation/HeaderV1";


const PortfolioMasonry: NextPageWithLayout = () => {
    return (
        <>

            <HeaderV1/>

            <section className="portfolio-ms-page">
                <div className="container-fluid">
                    <div className="sv-title v3 text-center">
                        <span>our works</span>
                        <h2>Bigger, Bolder &amp; Better</h2>
                    </div>
                    <div className="options">
                        <div className="option-isotop">
                            <ul
                                id="filter"
                                className="option-set filters-nav text-center"
                                data-option-key="filter"
                            >
                                <li>
                                    <a data-option-value="*" className="selected">
                                        All Projects{" "}
                                    </a>
                                </li>
                                <li>
                                    <a data-option-value=".ui-ux">UI/UX</a>
                                </li>
                                <li>
                                    <a data-option-value=".branding">Branding</a>
                                </li>
                                <li>
                                    <a data-option-value=".motion">Motion</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="row ms-row masonary">
                        <div className="col-lg-4 col-md-4 col-sm-6 ui-ux">
                            <div className="pt-item">
                                <a href="17_portfolio_single_layout_1.html" title="" className="">
                                    <img src="/static/images/pt1.jpg" alt="" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 motion">
                            <div className="pt-item">
                                <a href="17_portfolio_single_layout_1.html" title="">
                                    <img src="/static/images/pt2.jpg" alt="" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 branding">
                            <div className="pt-item">
                                <a href="17_portfolio_single_layout_1.html" title="">
                                    <img src="/static/images/pt3.jpg" alt="" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 motion">
                            <div className="pt-item">
                                <a href="17_portfolio_single_layout_1.html" title="">
                                    <img src="/static/images/pt4.jpg" alt="" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 branding">
                            <div className="pt-item">
                                <a href="17_portfolio_single_layout_1.html" title="">
                                    <img src="/static/images/pt5.jpg" alt="" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 ui-ux">
                            <div className="pt-item">
                                <a href="17_portfolio_single_layout_1.html" title="">
                                    <img src="/static/images/pt6.jpg" alt="" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 motion">
                            <div className="pt-item">
                                <a href="17_portfolio_single_layout_1.html" title="">
                                    <img src="/static/images/pt7.jpg" alt="" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 ui-ux">
                            <div className="pt-item">
                                <a href="17_portfolio_single_layout_1.html" title="">
                                    <img src="/static/images/pt8.jpg" alt="" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 branding">
                            <div className="pt-item">
                                <a href="17_portfolio_single_layout_1.html" title="">
                                    <img src="/static/images/pt9.jpg" alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="more-items text-center">
                        <a href="#" title="" className="more-item">
                            more
                        </a>
                    </div>
                </div>
            </section>
            <FooterVariant1/>
        </>
    )
}

PortfolioMasonry.getLayout = function getLayout(page: React.ReactElement) {
    return <Layout title="Home">{page}</Layout>;
};

export default PortfolioMasonry;