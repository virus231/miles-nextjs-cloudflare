import { NextPageWithLayout } from './_app'
import { Layout } from '../app/components/Layout'


const Pricing: NextPageWithLayout = () => {
    return (
        <>
            {/*@include('partials/header-v1.html')*/}

            <section className="pricing-v10 clr-default">
                <div className="container">
                    <div
                        className="title-v10 text-center wow fadeInUp"
                        data-wow-duration="1000ms"
                        data-wow-delay="0ms"
                    >
                        <span className="gray-color">Plan &amp; pricing</span>
                        <h2>Start With An Affordable </h2>
                    </div>
                    <ul className="tab-btns">
                        <li data-tab="monthly" className="tab-btn active-btn">
                            Billed monthly{" "}
                        </li>
                        <li data-tab="annually" className="tab-btn">
                            Billed annually
                        </li>
                    </ul>
                    <div className="tb-content">
                        <div className="tab-data active" id="monthly">
                            <div className="row prices-v10">
                                <div className="col-lg-4 col-md-6">
                                    <div className="price-v10">
                                        <img src="/static/images/p-icon1.png" alt="" />
                                        <h4>Basic</h4>
                                        <span>Start for everyone</span>
                                        <h2>
                                            <sup>$</sup> 9.99 <span>/ month</span>
                                        </h2>
                                        <ul>
                                            <li>500 request</li>
                                            <li>unlimited projects</li>
                                        </ul>
                                        <a href="#" title="" className="btn-default-v10 v2">
                                            Get Started Now
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="price-v10">
                                        <div className="recommended">
                                            <span className="recommended">recommended</span>
                                        </div>
                                        <img src="/static/images/p-icon2.png" alt="" />
                                        <h4>premium</h4>
                                        <span>Start for team</span>
                                        <h2>
                                            <sup>$</sup> 29.99 <span>/ month</span>
                                        </h2>
                                        <ul>
                                            <li>2000 request</li>
                                            <li>unlimited projects</li>
                                            <li>free trial pro functions</li>
                                        </ul>
                                        <a href="#" title="" className="btn-default-v10 v2">
                                            Get Started Now
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="price-v10">
                                        <img src="/static/images/p-icon3.png" alt="" />
                                        <h4>ultimate</h4>
                                        <span>Start for enterprise</span>
                                        <h2>
                                            <sup>$</sup> 69.99 <span>/ month</span>
                                        </h2>
                                        <ul>
                                            <li>5000 request</li>
                                            <li>unlimited projects</li>
                                            <li>unlimited pro functions</li>
                                        </ul>
                                        <a href="#" title="" className="btn-default-v10 v2">
                                            Get Started Now
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-data" id="annually">
                            <div className="row prices-v10">
                                <div className="col-lg-4 col-md-6">
                                    <div className="price-v10">
                                        <img src="/static/images/p-icon1.png" alt="" />
                                        <h4>Basic</h4>
                                        <span>Start for everyone</span>
                                        <h2>
                                            <sup>$</sup> 9.99 <span>/ month</span>
                                        </h2>
                                        <ul>
                                            <li>500 request</li>
                                            <li>unlimited projects</li>
                                        </ul>
                                        <a href="#" title="" className="btn-default-v10 v2">
                                            Get Started Now
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="price-v10">
                                        <div className="recommended">
                                            <span className="recommended">recommended</span>
                                        </div>
                                        <img src="/static/images/p-icon2.png" alt="" />
                                        <h4>premium</h4>
                                        <span>Start for team</span>
                                        <h2>
                                            <sup>$</sup> 29.99 <span>/ month</span>
                                        </h2>
                                        <ul>
                                            <li>2000 request</li>
                                            <li>unlimited projects</li>
                                            <li>free trial pro functions</li>
                                        </ul>
                                        <a href="#" title="" className="btn-default-v10 v2">
                                            Get Started Now
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="price-v10">
                                        <img src="/static/images/p-icon3.png" alt="" />
                                        <h4>ultimate</h4>
                                        <span>Start for enterprise</span>
                                        <h2>
                                            <sup>$</sup> 69.99 <span>/ month</span>
                                        </h2>
                                        <ul>
                                            <li>5000 request</li>
                                            <li>unlimited projects</li>
                                            <li>unlimited pro functions</li>
                                        </ul>
                                        <a href="#" title="" className="btn-default-v10 v2">
                                            Get Started Now
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center pl-btm">
                        <p>
                            You have a large team?{" "}
                            <a href="#" title="">
                                Contact us
                            </a>{" "}
                            for information about more enterprise options
                        </p>
                    </div>
                </div>
            </section>
            <section className="testimonial-sec v10 clr-default">
                <div className="container">
                    <div
                        className="title-v10 wow fadeInUp"
                        data-wow-duration="1000ms"
                        data-wow-delay="0ms"
                    >
                        <span className="gray-color">testimonials</span>
                        <h2>Why Clients Love Us</h2>
                    </div>
                    <div className="testimonial-slider">
                        <div className="row testimo-slider">
                            <div className="col-lg-6">
                                <div className="testimonial-slide">
                                    <p>
                                        “Originally, creative and with an innate understanding of
                                        their customer’s need. The team at Miles are always a pleasure
                                        to work with. Recommended.”
                                    </p>
                                    <div className="thmb-row">
                                        <div className="thmb-img">
                                            <img src="/static/images/thumb1.png" alt="" />
                                        </div>
                                        <div className="thmb-info">
                                            <h3>Bobby Hanesto</h3>
                                            <span>
                      Director of <em>Inivisionapp</em>
                    </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="testimonial-slide">
                                    <p>
                                        “I don’t know what else to say, this is something that you
                                        haven’t seen before. Unique design, lightweight, and
                                        outstanding support.”
                                    </p>
                                    <div className="thmb-row">
                                        <div className="thmb-img">
                                            <img src="/static/images/thumb2.png" alt="" />
                                        </div>
                                        <div className="thmb-info">
                                            <h3>Jeans Grey</h3>
                                            <span>
                      CEO of <em>BraveBred</em>
                    </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="testimonial-slide">
                                    <p>
                                        “Originally, creative and with an innate understanding of
                                        their customer’s need. The team at Miles are always a pleasure
                                        to work with. Recommended.”
                                    </p>
                                    <div className="thmb-row">
                                        <div className="thmb-img">
                                            <img src="/static/images/thumb1.png" alt="" />
                                        </div>
                                        <div className="thmb-info">
                                            <h3>Bobby Hanesto</h3>
                                            <span>
                      Director of <em>Inivisionapp</em>
                    </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="testimonial-slide">
                                    <p>
                                        “I don’t know what else to say, this is something that you
                                        haven’t seen before. Unique design, lightweight, and
                                        outstanding support.”
                                    </p>
                                    <div className="thmb-row">
                                        <div className="thmb-img">
                                            <img src="/static/images/thumb2.png" alt="" />
                                        </div>
                                        <div className="thmb-info">
                                            <h3>Jeans Grey</h3>
                                            <span>
                      CEO of <em>BraveBred</em>
                    </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="partners-section v10">
                        <div className="pt-logos text-center d-flex flex-wrap justify-content-center align-items-center">
                            <div className="pt-logo">
                                <a href="#" title="">
                                    <img src="/static/images/pt1.png" alt="" />
                                </a>
                            </div>
                            <div className="pt-logo">
                                <a href="#" title="">
                                    <img src="/static/images/pt2.png" alt="" />
                                </a>
                            </div>
                            <div className="pt-logo">
                                <a href="#" title="">
                                    <img src="/static/images/pt3.png" alt="" />
                                </a>
                            </div>
                            <div className="pt-logo">
                                <a href="#" title="">
                                    <img src="/static/images/pt4.png" alt="" />
                                </a>
                            </div>
                            <div className="pt-logo">
                                <a href="#" title="">
                                    <img src="/static/images/pt5.png" alt="" />
                                </a>
                            </div>
                        </div>
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

Pricing.getLayout = function getLayout(page: React.ReactElement) {
    return <Layout title="Pricing">{page}</Layout>;
};

export default Pricing