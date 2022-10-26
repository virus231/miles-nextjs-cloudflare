import { NextPageWithLayout } from './_app'
import { Layout } from '../app/components/Layout'


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
            <footer>
                <div className="top-footer">
                    <div className="container">
                        <div className="footer-content">
                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <div
                                        className="ft-text wow fadeInUp"
                                        data-wow-duration="1000ms"
                                        data-wow-delay="0ms"
                                    >
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
                                    <div
                                        className="get-touch-txt wow fadeInRight"
                                        data-wow-duration="1000ms"
                                        data-wow-delay="0ms"
                                    >
                                        <span>get in touch</span>
                                        <h3>
                                            116 Fairground Rd, FL 32904, USA{" "}
                                            <a href="#" title="">
                                                hello@miles.co
                                            </a>
                                        </h3>
                                        <ul>
                                            <li>
                                                <a href="about-me.tsx" title="">
                                                    About
                                                </a>
                                            </li>
                                            <li>
                                                <a href="15_portfolio_horizontal_scroll.html" title="">
                                                    Works
                                                </a>
                                            </li>
                                            <li>
                                                <a href="contact.tsx" title="">
                                                    Contact
                                                </a>
                                            </li>
                                            <li>
                                                <a href="service-two.tsx" title="">
                                                    Services
                                                </a>
                                            </li>
                                            <li>
                                                <a href="blog-layout-one.tsx" title="">
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

ErrorPage.getLayout = function getLayout(page: React.ReactElement) {
    return <Layout title="Error">{page}</Layout>;
};

export default ErrorPage