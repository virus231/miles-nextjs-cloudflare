import { NextPageWithLayout } from './_app'
import { Layout } from '../app/components/Layout'


const PortfolioSingleLayoutThree: NextPageWithLayout = () => {
    return (
        <>
            {/*body class - bg2*/}
            <header>
                <div className="container-fluid">
                    <div className="header-content d-flex flex-wrap align-items-center">
                        <div className="logo">
                            <a href="#" title="">
                                <img src="/static/images/logo2.png" alt="" />
                            </a>
                        </div>
                        <div className="mile-right ms-auto">
                            <button className="nav-toggle-btn a-nav-toggle ms-auto">
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
                        <a href="#" title="">
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
                                    href="about-business.tsx"
                                    className="animsition-link"
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
                        <a className="active" href="#" title="">
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
                                    href="19_portfolio_single_layout_3.html"
                                    className="animsition-link active"
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
            <section className="pf-single-layout3">
                <div className="pf-head-v3">
                    <div className="container">
                        <div
                            className="pf-head-content-v3 text-center wow fadeInUp"
                            data-wow-duration="1000ms"
                            data-wow-delay="0ms"
                        >
                            <h2>Fodo Rebrand</h2>
                            <ul className="prp-list">
                                <li>
                                    <h3>client</h3>
                                    <span>Fodo Pouch Ltd</span>
                                </li>
                                <li>
                                    <h3>services</h3>
                                    <span>Branding, Motion</span>
                                </li>
                                <li>
                                    <h3>date</h3>
                                    <span>December 25th, 2020</span>
                                </li>
                                <li>
                                    <h3>team</h3>
                                    <span>Luka Modric - Designer</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="pf-banner-v3">
                    <img src="/static/images/pf-banner2.png" alt="" />
                </div>
                <div className="container">
                    <div
                        className="txt-content v2 text-center border-bottom wow fadeInUp"
                        data-wow-duration="1000ms"
                        data-wow-delay="0ms"
                    >
                        <p>
                            Byzano nestled right into our wheelhouse. A dynamic co-working space
                            attracting entrepreneurs, tinkerers, and creatives in the tech hub
                            of Ann Arbor, Michigan, they wanted a lifestyle brand—a complete
                            ecosystem of brand visuals and assets that could be worn, posted,
                            shared.
                        </p>
                    </div>
                </div>
            </section>
            <section className="chal-sec-v3">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="mv-title">
                                <span>challenge</span>
                                <h2>
                                    Best finance app professional &amp; friendly for all people.
                                </h2>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="mv-para">
                                <p>
                                    <strong>Miles Studio</strong> believes a team of creatives who
                                    are excited about unique ideas and help digital and fin-tech
                                    companies. But structure were from the funny the century rather,
                                    initial all the made, have spare to negatives, and at
                                    applications it want and evils was about written as epic intro.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pl-v3-slider-sec">
                    <div className="row pl-v3-slider">
                        <div className="col-lg-4">
                            <div className="pf-slide-v3">
                                <img src="/static/images/pf-img1.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="pf-slide-v3">
                                <img src="/static/images/pf-img2.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="pf-slide-v3">
                                <img src="/static/images/pf-img3.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="pf-slide-v3">
                                <img src="/static/images/pf-img1.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="pf-slide-v3">
                                <img src="/static/images/pf-img2.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="pf-slide-v3">
                                <img src="/static/images/pf-img3.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="vd-frame-sec">
                <div className="container">
                    <div
                        className="ms-title text-center wow fadeInUp"
                        data-wow-duration="1000ms"
                        data-wow-delay="0ms"
                    >
                        <h2>
                            No matter how you slice it, she likes what she´s seen so far, and
                            she’s willing to give you a chance.
                        </h2>
                    </div>
                    <div className="yt-frame">
                        <iframe src="https://www.youtube.com/embed/DBXH9jJRaDk?autoplay=0&fs=1&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=https://youtubeembedcode.com" />
                    </div>
                </div>
            </section>
            <section className="post-control-sec">
                <div className="container">
                    <h2
                        className="text-center wow fadeInUp"
                        data-wow-duration="1000ms"
                        data-wow-delay="0ms"
                    >
                        Bdash UI Dashboard
                    </h2>
                    <div className="avl-btm">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <div className="shareon">
                                    <h3>Share:</h3>
                                    <ul>
                                        <li>
                                            <a href="#" title="">
                                                <i className="fab fa-twitter" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" title="">
                                                <i className="fab fa-facebook-f" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" title="">
                                                <i className="fab fa-google-plus-g" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" title="">
                                                <i className="fab fa-tumblr" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" title="">
                                                <i className="fa fa-rss" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="liked-dv">
                <span className="liked">
                  <i className="lni lni-heart-filled" />
                </span>
                                    <span>18 Liked</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="bg-white">
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

PortfolioSingleLayoutThree.getLayout = function getLayout(page: React.ReactElement) {
    return <Layout title="Portfolio Single Layout Three">{page}</Layout>;
};

export default PortfolioSingleLayoutThree