import { NextPageWithLayout } from './_app'
import { Layout } from '../app/components/Layout'


const AboutBusiness: NextPageWithLayout = () => {
    return (
        <>
            <header className="pb">
                <div className="container-fluid">
                    <div className="header-content d-flex flex-wrap align-items-center">
                        <div className="logo">
                            <a href="#" title="" className="white-logo">
                                <img src="/static/images/logo.png" alt="" />
                            </a>
                            <a href="#" title="" className="dark-logo">
                                <img src="/static/images/logo2.png" alt="" />
                            </a>
                        </div>
                        <div className="mile-right ms-auto">
                            <button className="nav-toggle-btn a-nav-toggle white ms-auto">
                                <span className="nav-toggle-title">Menu</span>
                                <span className="nav-toggle nav-toggle-sm">
                <span className="stick stick-1" />
                <span className="stick stick-2" />
                <span className="stick stick-3" />
              </span>
                            </button>
                            <a href="#" title="" className="btn-default no-bg">
                                Let’s talk
                                <i className="lni lni-comments" />
                            </a>
                        </div>
                    </div>
                </div>
            </header>
            <div className="responsive-menu">
                <div className="rep-header">
                    <div className="rep-logo">
                        <img src="/static/images/logo2.png" alt="" />
                    </div>
                    <a href="#" title="" className="close-menu">
                        <i className="lni lni-close" />
                    </a>
                </div>
                <div className="search-box">
                    <form>
                        <input type="text" name="search" placeholder="Search" />
                        <button type="submit">
                            <i className="lni lni-search-alt" />
                        </button>
                    </form>
                </div>
                <ul className="mobile-menu">
                    <li>
                        <a href="#" title="">
                            Home
                        </a>
                        <ul>
                            <li>
                                <a
                                    href="index.html"
                                    className="animsition-link"
                                    data-animsition-out-class="fade-out"
                                    title=""
                                    data-text="Home Agency"
                                >
                                    Home Agency
                                </a>
                            </li>
                            <li>
                                <a
                                    href="index2.html"
                                    className="animsition-link"
                                    data-animsition-out-class="fade-out"
                                    title=""
                                    data-text="Home Studio"
                                >
                                    Home Studio
                                </a>
                            </li>
                            <li>
                                <a
                                    href="index3.html"
                                    className="animsition-link"
                                    data-animsition-out-class="fade-out"
                                    title=""
                                    data-text="Home Freelancer"
                                >
                                    Home Freelancer
                                </a>
                            </li>
                            <li>
                                <a
                                    href="index4.html"
                                    className="animsition-link"
                                    data-animsition-out-class="fade-out"
                                    title=""
                                    data-text="Home Developer"
                                >
                                    Home Developer
                                </a>
                            </li>
                            <li>
                                <a
                                    href="index5.html"
                                    className="animsition-link"
                                    data-animsition-out-class="fade-out"
                                    title=""
                                    data-text="Home Blogger"
                                >
                                    Home Blogger
                                </a>
                            </li>
                            <li>
                                <a
                                    href="index7.html"
                                    className="animsition-link"
                                    data-animsition-out-class="fade-out"
                                    title=""
                                    data-text="Home Coach"
                                >
                                    Home Coach
                                </a>
                            </li>
                            <li>
                                <a
                                    href="index6.html"
                                    className="animsition-link"
                                    data-animsition-out-class="fade-out"
                                    title=""
                                    data-text="Business Startup"
                                >
                                    Business Startup
                                </a>
                            </li>
                            <li>
                                <a
                                    href="index8.html"
                                    className="animsition-link"
                                    data-animsition-out-class="fade-out"
                                    title=""
                                    data-text="Marketing Agency"
                                >
                                    Marketing Agency
                                </a>
                            </li>
                            <li>
                                <a
                                    href="index9.html"
                                    className="animsition-link"
                                    data-animsition-out-class="fade-out"
                                    title=""
                                    data-text="Business Consulting"
                                >
                                    Business Consulting
                                </a>
                            </li>
                            <li>
                                <a
                                    href="index10.html"
                                    className="animsition-link"
                                    data-animsition-out-class="fade-out"
                                    title=""
                                    data-text="Creative Agency"
                                >
                                    Creative Agency
                                </a>
                            </li>
                            <li>
                                <a
                                    href="index11.html"
                                    className="animsition-link"
                                    data-animsition-out-class="fade-out"
                                    title=""
                                    data-text="Creative Agency 2"
                                >
                                    Creative Agency 2
                                </a>
                            </li>
                            <li>
                                <a
                                    href="index12.html"
                                    className="animsition-link"
                                    data-animsition-out-class="fade-out"
                                    title=""
                                    data-text="Home Portfolio 1"
                                >
                                    Home Portfolio 1
                                </a>
                            </li>
                            <li>
                                <a
                                    href="index13.html"
                                    className="animsition-link"
                                    data-animsition-out-class="fade-out"
                                    title=""
                                    data-text="Home Portfolio 2"
                                >
                                    Home Portfolio 2
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a className="active" href="#" title="">
                            About
                        </a>
                        <ul>
                            <li>
                                <a
                                    href="about-agency.tsx"
                                    className="animsition-link"
                                    data-animsition-out-class="fade-out"
                                    title=""
                                    data-text="About Agency"
                                >
                                    About Agency
                                </a>
                            </li>
                            <li>
                                <a
                                    href="25_about_business.html"
                                    className="animsition-link active"
                                    data-animsition-out-class="fade-out"
                                    title=""
                                    data-text="About Business"
                                >
                                    About Business
                                </a>
                            </li>
                            <li>
                                <a
                                    href="about-me.tsx"
                                    className="animsition-link"
                                    data-animsition-out-class="fade-out"
                                    title=""
                                    data-text="About Me"
                                >
                                    About Me
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#" title="">
                            Portfolio
                        </a>
                        <ul>
                            <li>
                                <a
                                    href="14_portfolio_parallax.html"
                                    className="animsition-link"
                                    data-animsition-out-class="fade-out"
                                    title=""
                                    data-text="Porfolio Parallax"
                                >
                                    Porfolio Parallax
                                </a>
                            </li>
                            <li>
                                <a
                                    href="15_portfolio_horizontal_scroll.html"
                                    className="animsition-link"
                                    data-animsition-out-class="fade-out"
                                    title=""
                                    data-text="Porfolio Horizontal Scroll"
                                >
                                    Porfolio Horizontal Scroll
                                </a>
                            </li>
                            <li>
                                <a href="16_portfolio_masonry.html" title="">
                                    Porfolio Masonary
                                </a>
                            </li>
                            <li>
                                <a
                                    href="17_portfolio_single_layout_1.html"
                                    className="animsition-link"
                                    data-animsition-out-class="fade-out"
                                    title=""
                                    data-text="Porfolio Single V1"
                                >
                                    Porfolio Single V1
                                </a>
                            </li>
                            <li>
                                <a
                                    href="portfolio-single-layout-two.tsx"
                                    className="animsition-link"
                                    data-animsition-out-class="fade-out"
                                    title=""
                                    data-text="Porfolio Single V2"
                                >
                                    Porfolio Single V2
                                </a>
                            </li>
                            <li>
                                <a
                                    href="portfolio-single-layout-three.tsx"
                                    className="animsition-link"
                                    data-animsition-out-class="fade-out"
                                    title=""
                                    data-text="Porfolio Single V3"
                                >
                                    Porfolio Single V3
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#" title="">
                            Service
                        </a>
                        <ul>
                            <li>
                                <a
                                    href="service-one.tsx"
                                    className="animsition-link"
                                    data-animsition-out-class="fade-out"
                                    title=""
                                    data-text="Service V1"
                                >
                                    Service V1
                                </a>
                            </li>
                            <li>
                                <a
                                    href="service-two.tsx"
                                    className="animsition-link"
                                    data-animsition-out-class="fade-out"
                                    title=""
                                    data-text="Service V2"
                                >
                                    Service V2
                                </a>
                            </li>
                            <li>
                                <a
                                    href="service-three.tsx"
                                    className="animsition-link"
                                    data-animsition-out-class="fade-out"
                                    title=""
                                    data-text="Service V3"
                                >
                                    Service V3
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#" title="">
                            Pages
                        </a>
                        <ul>
                            <li>
                                <a
                                    href="32_team.html"
                                    className="animsition-link"
                                    data-animsition-out-class="fade-out"
                                    title=""
                                    data-text="Team"
                                >
                                    Team
                                </a>
                            </li>
                            <li>
                                <a
                                    href="career.tsx"
                                    className="animsition-link"
                                    data-animsition-out-class="fade-out"
                                    title=""
                                    data-text="Career"
                                >
                                    Career
                                </a>
                            </li>
                            <li>
                                <a
                                    href="career-detail.tsx"
                                    className="animsition-link"
                                    data-animsition-out-class="fade-out"
                                    title=""
                                    data-text="Career Details"
                                >
                                    Career Details
                                </a>
                            </li>
                            <li>
                                <a
                                    href="pricing.tsx"
                                    className="animsition-link"
                                    data-animsition-out-class="fade-out"
                                    title=""
                                    data-text="Pricing"
                                >
                                    Pricing
                                </a>
                            </li>
                            <li>
                                <a
                                    href="error.tsx"
                                    className="animsition-link"
                                    data-animsition-out-class="fade-out"
                                    title=""
                                    data-text={404}
                                >
                                    404
                                </a>
                            </li>
                            <li>
                                <a
                                    href="coming-soon.tsx"
                                    className="animsition-link"
                                    data-animsition-out-class="fade-out"
                                    title=""
                                    data-text="Coming Soon"
                                >
                                    Coming Soon
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#" title="">
                            Blogs
                        </a>
                        <ul>
                            <li>
                                <a
                                    href="blog-layout-one.tsx"
                                    className="animsition-link"
                                    data-animsition-out-class="fade-out"
                                    title=""
                                    data-text="Blog Layout V1"
                                >
                                    Blog Layout V1
                                </a>
                            </li>
                            <li>
                                <a
                                    href="blog-layout-two.tsx"
                                    className="animsition-link"
                                    data-animsition-out-class="fade-out"
                                    title=""
                                    data-text="Blog Layout V2"
                                >
                                    Blog Layout V2
                                </a>
                            </li>
                            <li>
                                <a
                                    href="blog-single-layout1.html"
                                    className="animsition-link"
                                    data-animsition-out-class="fade-out"
                                    title=""
                                    data-text="Blog Single Layout V1"
                                >
                                    Blog Single Layout V1
                                </a>
                            </li>
                            <li>
                                <a
                                    href="blog-single-layout2.html"
                                    className="animsition-link"
                                    data-animsition-out-class="fade-out"
                                    title=""
                                    data-text="Blog Single Layout V2"
                                >
                                    Blog Single Layout V2
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#" title="">
                            Contact
                        </a>
                        <ul>
                            <li>
                                <a
                                    href="contact.tsx"
                                    className="animsition-link"
                                    data-animsition-out-class="fade-out"
                                    title=""
                                    data-text="Contact V1"
                                >
                                    Contact V1
                                </a>
                            </li>
                            <li>
                                <a
                                    href="contact-two.tsx"
                                    className="animsition-link"
                                    data-animsition-out-class="fade-out"
                                    title=""
                                    data-text="Contact V2"
                                >
                                    Contact V2
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <section className="business-banner">
                <div className="container">
                    <div
                        className="business-txt text-center wow fadeInUp"
                        data-wow-duration="1000ms"
                        data-wow-delay="0ms"
                    >
                        <span>miles agency</span>
                        <h2>
                            We highly focus on <span>creative and innovative</span> solutions
                        </h2>
                        <p>
                            Like any great agency, we are only as good as the result we deliver
                            of our recent work{" "}
                        </p>
                        <a href="#" title="" className="btn-default">
                            Learn more
                        </a>
                        <a
                            href="https://www.youtube.com/watch?v=vw6QmjPpdy4"
                            title=""
                            className="view-btn yellow html5lightbox"
                        >
            <span className="pl-btn">
              <i className="lni lni-play" />
            </span>
                            <span title="" className="vt">
              view our story
            </span>
                        </a>
                    </div>
                </div>
            </section>
            <section className="about-v9-content v2">
                <div className="container-fluid">
                    <div className="about-v9-row">
                        <div className="ban-img-v9">
                            <img src="/static/images/ban-img6.png" alt="" />
                        </div>
                        <div
                            className="about-v9-txt wow fadeInRight"
                            data-wow-duration="1000ms"
                            data-wow-delay="0ms"
                        >
                            <span>about us</span>
                            <h2>
                                <span>Optimized</span> For Your Business Better
                            </h2>
                            <p>
                                We help our client suceed by creating identities, digital
                                experiences, and printmaterials that communicate clearly, achieve
                                marketing goals &amp; look fantastic Lorem uispum dolor sit amert
                                tunoer poea opefse ceefo goipully. Communicate clearly, achieve
                                marketing goals &amp; look fantastic Lorem uispum dolor sit amert
                                tunoer poea opefse ceefo goipully.
                            </p>
                            <div className="wd-inz">
              <span className="cinon">
                <i className="lni lni-phone" />
              </span>
                                <div className="wl-info">
                                    <span>hotline 24/7</span>
                                    <h3>+65 - 3002 56 56 376</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="services-v9 v2">
                <div className="container">
                    <div
                        className="title-v9 text-center wow fadeInUp"
                        data-wow-duration="1000ms"
                        data-wow-delay="0ms"
                    >
                        <span className="gray-color">what we can help</span>
                        <h2 className="black-clr">
                            <span className="clr-yeloow">Delivering End-to-End</span> Company
                            Solutions Online
                        </h2>
                    </div>
                    <div className="row services_v9">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="service-v9">
              <span className="s-icon clr-yeloow">
                <i className="lni lni-graduation" />
              </span>
                                <h3>
                                    <a href="service-one.tsx" title="">
                                        Solicitory
                                    </a>
                                </h3>
                                <p>
                                    Nanotechnology immersion along the information highway will
                                    close the loop on focusing solely
                                </p>
                                <span className="s-category">case study</span>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="service-v9">
              <span className="s-icon clr-yeloow">
                <i className="lni lni-empty-file" />
              </span>
                                <h3>
                                    <a href="service-one.tsx" title="">
                                        Business Planning
                                    </a>
                                </h3>
                                <p>
                                    Podcasting operational change management inside of workflows to
                                    establish a framework.
                                </p>
                                <span className="s-category">case study</span>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="service-v9">
              <span className="s-icon clr-yeloow">
                <i className="lni lni-crown" />
              </span>
                                <h3>
                                    <a href="service-one.tsx" title="">
                                        Strategy
                                    </a>
                                </h3>
                                <p>
                                    Dynamically innovate resource-leveling customer service for
                                    state of the art customer service.
                                </p>
                                <span className="s-category">case study</span>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="service-v9">
              <span className="s-icon clr-yeloow">
                <i className="lni lni-users" />
              </span>
                                <h3>
                                    <a href="service-one.tsx" title="">
                                        Human Resources
                                    </a>
                                </h3>
                                <p>
                                    Nanotechnology immersion along the information highway will
                                    close the loop on focusing solely
                                </p>
                                <span className="s-category">case study</span>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="service-v9">
              <span className="s-icon clr-yeloow">
                <i className="lni lni-rocket" />
              </span>
                                <h3>
                                    <a href="service-one.tsx" title="">
                                        Startup
                                    </a>
                                </h3>
                                <p>
                                    Nanotechnology immersion along the information highway will
                                    close the loop on focusing solely
                                </p>
                                <span className="s-category">case study</span>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="sv-text-v9">
                                <h2 className="black-clr">
                                    “Our Avantage can help you with picking out the best people for
                                    your company.”
                                </h2>
                                <img src="/static/images/sign2.png" alt="" />
                                <span>Founder at Misulting</span>
                            </div>
                        </div>
                    </div>
                    <ul
                        className="counter-sec-v6 br-top pb-0 wow fadeInUp"
                        id="counter"
                        data-wow-duration="1000ms"
                        data-wow-delay="0ms"
                    >
                        <li>
                            <div className="counter-cont">
                                <h2 className="count">100%</h2>
                                <span>
                satisfaction <br /> clients
              </span>
                            </div>
                        </li>
                        <li>
                            <div className="counter-cont">
                                <h2 className="count">158</h2>
                                <span>event &amp; oline courses</span>
                            </div>
                        </li>
                        <li>
                            <div className="counter-cont">
                                <h2 className="count">3875</h2>
                                <span>successful students on 60 countries</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
            <section className="why-us-v9 v2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="why-txt-v9 v2">
                                <div className="title-v9">
                                    <span className="gray-color">why choose us</span>
                                    <h2 className="black-clr">
                                        <span className="clr-yeloow d-block">Different Value</span>{" "}
                                        Created Us
                                    </h2>
                                </div>
                                <ul>
                                    <li>
                                        <div className="us-svs">
                    <span className="svs-icon">
                      <i className="lni lni-money-protection clr-yeloow" />
                    </span>
                                            <div className="svs-info">
                                                <h3 className="black-clr">Affordable Price</h3>
                                                <p>
                                                    Nanotechnology immersion along the information highway
                                                    will close the loop on focusing solely
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="us-svs">
                    <span className="svs-icon">
                      <i className="lni lni-crown clr-yeloow" />
                    </span>
                                            <div className="svs-info">
                                                <h3 className="black-clr">
                                                    Top-notch Experts Consulting
                                                </h3>
                                                <p>
                                                    Nanotechnology immersion along the information highway
                                                    will close the loop on focusing solely
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="us-svs">
                    <span className="svs-icon">
                      <i className="lni lni-comments-reply clr-yeloow" />
                    </span>
                                            <div className="svs-info">
                                                <h3 className="black-clr">Dedicated Support 24/7</h3>
                                                <p>
                                                    Nanotechnology immersion along the information highway
                                                    will close the loop on focusing solely
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div
                                className="wy-img v2 wow fadeInRight"
                                data-wow-duration="1000ms"
                                data-wow-delay="0ms"
                            >
                                <img src="/static/images/ban-img7.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="partners-v8-sec v2">
                <div className="container">
                    <div
                        className="title-v9 text-center wow fadeInUp"
                        data-wow-duration="1000ms"
                        data-wow-delay="0ms"
                    >
                        <span className="gray-color">Our Partners</span>
                        <h2 className="black-clr">
                            <span className="clr-yeloow">Your Succesful,</span> Our Reputation
                        </h2>
                    </div>
                    <div className="pt-logos-v8 row">
                        <div className="col-lg-2">
                            <div className="pt-logo-v8">
                                <img src="/static/images/po1.png" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="pt-logo-v8">
                                <img src="/static/images/po2.png" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="pt-logo-v8">
                                <img src="/static/images/po3.png" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="pt-logo-v8">
                                <img src="/static/images/po4.png" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="pt-logo-v8">
                                <img src="/static/images/po5.png" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="pt-logo-v8">
                                <img src="/static/images/po6.png" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="pt-logo-v8">
                                <img src="/static/images/po7.png" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="pt-logo-v8">
                                <img src="/static/images/po8.png" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="pt-logo-v8">
                                <img src="/static/images/po9.png" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="pt-logo-v8">
                                <img src="/static/images/po10.png" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="pt-logo-v8">
                                <img src="/static/images/po11.png" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="pt-logo-v8">
                                <img src="/static/images/po12.png" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="pt-logo-v8">
                                <img src="/static/images/po13.png" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="pt-logo-v8">
                                <img src="/static/images/po14.png" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="pt-logo-v8">
                                <img src="/static/images/po15.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bz-certificate">
                <div className="container">
                    <div
                        className="title-v9 text-center wow fadeInUp"
                        data-wow-duration="1000ms"
                        data-wow-delay="0ms"
                    >
                        <span className="gray-color">awards winning </span>
                        <h2 className="black-clr">
                            <span className="clr-yeloow">Rewards</span> For Our Effortless
                        </h2>
                    </div>
                    <div className="certicications-sec">
                        <div className="certificate-details">
                            <span className="date">2020</span>
                            <div className="awd-logo">
                                <img src="/static/images/awd1.png" alt="" />
                            </div>
                            <div className="awd-list">
                                <div className="row">
                                    <div className="col-lg-8">
                                        <div className="awd-info">
                                            <h3>SOTY 2020</h3>
                                            <span>Faye Fo Website Redesign</span>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <a href="#" title="" className="web-link">
                                            www.fayefo.co.uk
                                        </a>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-8">
                                        <div className="awd-info">
                                            <h3>Mobile Excellence</h3>
                                            <span>Nike Workout App</span>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <a href="#" title="" className="web-link">
                                            www.nike-workout.io
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="certificate-details">
                            <span className="date">2019</span>
                            <div className="awd-logo">
                                <img src="/static/images/awd2.png" alt="" />
                            </div>
                            <div className="awd-list">
                                <div className="row">
                                    <div className="col-lg-8">
                                        <div className="awd-info">
                                            <h3>Websites Of The Year 2019</h3>
                                            <span>Focus - Financial Management System</span>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <a href="#" title="" className="web-link">
                                            www.focus.com
                                        </a>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-8">
                                        <div className="awd-info">
                                            <h3>Websites Of The Month, August 2019 </h3>
                                            <span>Lewis Creative Agency</span>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <a href="#" title="" className="web-link">
                                            www.lewisstudio.com
                                        </a>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-8">
                                        <div className="awd-info">
                                            <h3>Best 20 Websites Favourite 2019 </h3>
                                            <span>Arquito Architeture &amp; Interior Firm</span>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <a href="#" title="" className="web-link">
                                            www.arquito.pl
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="certificate-details">
                            <span className="date">2018</span>
                            <div className="awd-logo">
                                <img src="/static/images/awd3.png" alt="" />
                            </div>
                            <div className="awd-list">
                                <div className="row">
                                    <div className="col-lg-8">
                                        <div className="awd-info">
                                            <h3>Winner Portfolio Review United States</h3>
                                            <span>Summit Spa Brand</span>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <a href="#" title="" className="web-link">
                                            www.submitspa.com.us
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-sec v10 pb-0">
                        <div
                            className="title-v9 text-center wow fadeInUp"
                            data-wow-duration="1000ms"
                            data-wow-delay="0ms"
                        >
                            <span className="gray-color">Testimonials </span>
                            <h2 className="black-clr">
                                <span className="clr-yeloow">The Trusted</span> From Clients For
                                Miles
                            </h2>
                        </div>
                        <div className="testimonial-slider style2">
                            <div className="row testimo-slider">
                                <div className="col-lg-6">
                                    <div className="testimonial-slide">
                                        <p>
                                            “Originally, creative and with an innate understanding of
                                            their customer’s need. The team at Miles are always a
                                            pleasure to work with. Recommended.”
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
                                            their customer’s need. The team at Miles are always a
                                            pleasure to work with. Recommended.”
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

AboutBusiness.getLayout = function getLayout(page: React.ReactElement) {
    return <Layout title="About Business">{page}</Layout>;
};

export default AboutBusiness