import { NextPageWithLayout } from './_app'
import { Layout } from '../app/components/Layout'


const AboutMe: NextPageWithLayout = () => {
    return (
        <>

            <header className="pb">
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
                                    href="26_about_me.html"
                                    className="animsition-link active"
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
            <section className="about_me_sec">
                <div className="container">
                    <div className="about_me_content">
                        <div
                            className="about_txt wow fadeInLeft"
                            data-wow-duration="1000ms"
                            data-wow-delay="0ms"
                        >
            <span>
              interaction &amp; visual <br /> product.
            </span>
                            <h2>Hello! I’m Milles Raymond. Interactive Designer</h2>
                            <p>
                                I’m Miles Raymond, a freelance Interaction &amp; Visual Product
                                Designer based in Toronto, Canada. “Design is thinking made
                                visual”.
                            </p>
                            <a href="#about-section" title="" className="arrow-down">
                                <svg id="more-arrows">
                                    <polygon
                                        className="arrow-top"
                                        points="37.6,27.9 1.8,1.3 3.3,0 37.6,25.3 71.9,0 73.7,1.3 "
                                    />
                                    <polygon
                                        className="arrow-middle"
                                        points="37.6,45.8 0.8,18.7 4.4,16.4 37.6,41.2 71.2,16.4 74.5,18.7 "
                                    />
                                </svg>
                            </a>
                        </div>
                        <div
                            className="about_img wow fadeInUp"
                            data-wow-duration="1000ms"
                            data-wow-delay="0ms"
                        >
                            <img src="/static/images/about_img.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="about_v1_sec" id="about-section">
                <div className="container">
                    <div className="about_v1_content">
                        <p>
                            <span>Miles Raymond</span> is a designer from Toronto, Canada.{" "}
                            <br />
                            He works in his little studio-home for galleries around the world.
                            His work has been featured in the most important galleries in the
                            five continents. Also, Miles is one of the most recognizable
                            painters in our time.
                        </p>
                        <h4>Doing great since 2011 from Canada</h4>
                    </div>
                    <div className="resume_details">
                        <div className="resume_mile row">
                            <div className="col-lg-5">
                                <h3 className="rs-heading">service</h3>
                            </div>
                            <div className="col-lg-7">
                                <div className="rs_info">
                                    <p>
                                        It's time to bring it all together. Nothing is more rewarding
                                        for me than making great work for clients with meaningful
                                        missions.
                                    </p>
                                    <div className="row">
                                        <div className="col-md-4">
                                            <ul className="lniks">
                                                <li>Logo Design</li>
                                                <li>Brand Guide</li>
                                                <li>Package Design</li>
                                                <li>Poster design</li>
                                            </ul>
                                        </div>
                                        <div className="col-md-4">
                                            <ul className="lniks">
                                                <li>Flayer design</li>
                                                <li>Advertising</li>
                                                <li>Web design</li>
                                                <li>web advertising</li>
                                            </ul>
                                        </div>
                                        <div className="col-md-4">
                                            <ul className="lniks">
                                                <li>Icon design</li>
                                                <li>Illustration</li>
                                                <li>Photography</li>
                                                <li>Seo</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="resume_mile row">
                            <div className="col-lg-5">
                                <h3 className="rs-heading">edu &amp; career</h3>
                            </div>
                            <div className="col-lg-7">
                                <div className="rs_info">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="edu-exp border-top">
                                                <h3>Education</h3>
                                                <ul>
                                                    <li>
                                                        <div className="edu-knw">
                                                            <h3>
                                                                Graduated with Graphic Design at California of Art
                                                                university, USA
                                                            </h3>
                                                            <span>2007-2010</span>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="edu-knw">
                                                            <h3>Bachelor of Multi-Meida University in UK</h3>
                                                            <span>2011-2014</span>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="exp-div border-top">
                                                <h3>Experience</h3>
                                                <ul>
                                                    <li>
                                                        <h4>Art Director</h4>
                                                        <span>
                            <b className="red">Invision Inc</b>, 2018-Current
                          </span>
                                                    </li>
                                                    <li>
                                                        <h4>Senior Visual Product</h4>
                                                        <span>
                            <b className="black">Apple</b>, 2016-2017
                          </span>
                                                    </li>
                                                    <li>
                                                        <h4>Leader UI/UX Product Designer</h4>
                                                        <span>
                            <b className="green">Spotiy</b>, 2015-2016
                          </span>
                                                    </li>
                                                    <li>
                                                        <h4>Intership Graphic Designer</h4>
                                                        <span>
                            <b className="fb">Facebook</b>, 2012-2015
                          </span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="resume_mile row">
                            <div className="col-lg-5">
                                <h3 className="rs-heading">my pride</h3>
                            </div>
                            <div className="col-lg-7">
                                <div className="awrds-info">
                                    <p>
                                        It's always good to receive positive and constructive feedback
                                        for your work - from clients and moreover, from designers!
                                    </p>
                                    <ul>
                                        <li>
                                            <span className="year">2019</span>
                                            <img src="/static/images/awd4.png" alt="" />
                                            <h3>Featured Portfolio Websites</h3>
                                        </li>
                                        <li>
                                            <span className="year">2018</span>
                                            <img src="/static/images/awd5.png" alt="" />
                                            <h3>Top 10 Design</h3>
                                        </li>
                                        <li>
                                            <span className="year">2017</span>
                                            <img src="/static/images/awd6.png" alt="" />
                                            <h3>Website Inspiration</h3>
                                        </li>
                                        <li>
                                            <span className="year">2017</span>
                                            <img src="/static/images/awd7.png" alt="" />
                                            <h3>Creative Things</h3>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="testi_about_v1">
                <div className="container">
                    <div className="testi-v-sec">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="tv-col">
                                    <div className="tv-col-thumb">
                                        <img src="/static/images/rv1.png" alt="" />
                                    </div>
                                    <div className="tv-col-info">
                                        <h3>Enesto Valverde</h3>
                                        <span>
                    Director of <i>byzano.co</i>
                  </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-9">
                                <div className="testi-content">
                                    <p>
                                        “Originally, creative &amp; with an innate understand of their
                                        customer’s need. Miles Raymond are always a pleasure to work
                                        !”
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lets-sec">
                        <div
                            className="lets-content text-center wow fadeInUp"
                            data-wow-duration="1000ms"
                            data-wow-delay="0ms"
                        >
                            <h2>
                                Let’s make something amazing together{" "}
                                <strong>
                                    Start by{" "}
                                    <a href="contact.tsx" title="">
                                        saying hi
                                    </a>
                                </strong>
                            </h2>
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

AboutMe.getLayout = function getLayout(page: React.ReactElement) {
    return <Layout title="Home">{page}</Layout>;
};

export default AboutMe