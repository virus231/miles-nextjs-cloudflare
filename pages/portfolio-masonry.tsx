import classNames from 'classnames'
import { NextLink } from '../app/components/BaseNextLink'
import styles from '../styles/Home.module.scss'
import { NextPageWithLayout } from './_app'
import { Layout } from '../app/components/Layout'
import { MainNavigation } from '../app/components/Navigation/MainNavigation'
import { MainFooter } from '../app/components/MainFooter'


const PortfolioMasonry: NextPageWithLayout = () => {
    return (
        <>

            {/* @include('partials/header-v1.html') */}

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
            <footer>
                <div className="top-footer">
                    <div className="container">
                        <div className="footer-content">
                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <div className="ft-text">
                                        <p>
                                            We are a close team of creative professionals based out of
                                            Savannah, Georgia. We are passionate about partnering &amp;
                                            organizations to provide exceptional solutions.
                                        </p>
                                        <div className="ft-form">
                                            <h4>Subscribe our newsletter for news update</h4>
                                            <form>
                                                <span className="input input--makiko">
                                                    <input
                                                        className="input__field input__field--makiko"
                                                        type="email"
                                                        id="input-16"
                                                        placeholder="Enter email address..."
                                                    />
                                                    <label className="input__label input__label--makiko">
                                                        <button
                                                            type="submit"
                                                            className="input__label-content input__label-content--makiko"
                                                        >
                                                            subscribe <i className="lni lni-chevron-right" />
                                                        </button>
                                                    </label>
                                                </span>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="get-touch-txt">
                                        <span>get in touch</span>
                                        <h3>
                                            116 Fairground Rd, FL 32904, USA{" "}
                                            <a href="#" title="">
                                                hello@miles.co
                                            </a>
                                        </h3>
                                        <ul>
                                            <li>
                                                <a href="26_about_me.html" title="">
                                                    About
                                                </a>
                                            </li>
                                            <li>
                                                <a href="15_portfolio_horizontal_scroll.html" title="">
                                                    Works
                                                </a>
                                            </li>
                                            <li>
                                                <a href="30_contact_1.html" title="">
                                                    Contact
                                                </a>
                                            </li>
                                            <li>
                                                <a href="28_services_2.html" title="">
                                                    Services
                                                </a>
                                            </li>
                                            <li>
                                                <a href="blog-layout1.html" title="">
                                                    News
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottom-footer">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-6">
                                <div className="cp-mile">
                                    <img src="/static/images/ft-logo.png" alt="" />
                                    <p>© 2020. All Rights Reserved</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <ul className="social-links">
                                    <li>
                                        <a href="#" title="">
                                            <i className="fab fa-facebook-square" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" title="">
                                            <i className="fab fa-twitter" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" title="">
                                            <i className="fab fa-behance" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" title="">
                                            <i className="fab fa-instagram" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}

PortfolioMasonry.getLayout = function getLayout(page: React.ReactElement) {
    return <Layout title="Home">{page}</Layout>;
};

export default PortfolioMasonry;