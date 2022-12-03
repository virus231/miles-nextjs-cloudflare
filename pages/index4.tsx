import { Layout } from '../app/components/Layout';
import { NextPageWithLayout } from './_app';
import Carousel, { CarouselDots } from '../app/components/carousel';
import { carouselsExample } from './index';
import { useRef } from 'react';


const HomePage4: NextPageWithLayout = () => {
    const carouselRef = useRef<Carousel | null>(null);

    const carouselSettings = {
      slidesToShow: 1,
      dots: false,
      arrows: false,
      centerMode: false,
      ...CarouselDots({
        rounded: true,
        sx: { mt: '10px', color: '#f59e31' }
      })
    };

    return (
        <>
            <header className="header-v4">
                <div className="container">
                    <div className="header-content-v4">
                        <div className="logo">
                            <a href="#" title="">
                                <img src="/static/images/miles-developer.png" alt="" />
                            </a>
                        </div>
                        <nav>
                            <ul>
                                <li>
                                    <a href="#" title="" data-text="about">
                                        about
                                    </a>
                                    <ul>
                                        <li>
                                            <a href="about-agency.tsx" title="" data-text="About Agency">
                                                About Agency
                                            </a>
                                        </li>
                                        <li>
                                            <a href="about-business.tsx" title="" data-text="About Business">
                                                About Business
                                            </a>
                                        </li>
                                        <li>
                                            <a href="about-me.tsx" title="" data-text="About Me">
                                                About Me
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#" title="" data-text="Portfolio">
                                        Portfolio
                                    </a>
                                    <ul>
                                        <li>
                                            <a href="14_portfolio_parallax.html" title="" data-text="Portfolio Parallax">
                                                Portfolio Parallax
                                            </a>
                                        </li>
                                        <li>
                                            <a href="15_portfolio_horizontal_scroll.html" title="" data-text="Portfolio Horizontol">
                                                Portfolio Horizontol
                                            </a>
                                        </li>
                                        <li>
                                            <a href="16_portfolio_masonry.html" title="" data-text="Portfolio Masonary">
                                                Portfolio Masonary
                                            </a>
                                        </li>
                                        <li>
                                            <a href="17_portfolio_single_layout_1.html" title="" data-text="Portfolio Single Layout V1">
                                                Portfolio Single Layout V1
                                            </a>
                                        </li>
                                        <li>
                                            <a href="portfolio-single-layout-two.tsx" title="" data-text="Portfolio Single Layout V2">
                                                Portfolio Single Layout V2
                                            </a>
                                        </li>
                                        <li>
                                            <a href="portfolio-single-layout-three.tsx" title="" data-text="Portfolio Single Layout V3">
                                                Portfolio Single Layout V3
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#" title="" data-text="News">
                                        News
                                    </a>
                                    <ul>
                                        <li>
                                            <a href="blog-layout-one.tsx" title="" data-text="Blog V2">
                                                Blog V1
                                            </a>
                                        </li>
                                        <li>
                                            <a href="blog-layout-two.tsx" title="" data-text="Blog V2">
                                                Blog V2
                                            </a>
                                        </li>
                                        <li>
                                            <a href="blog-single-layout1.html" title="" data-text="Blog Single V1">
                                                Blog Single V1
                                            </a>
                                        </li>
                                        <li>
                                            <a href="blog-single-layout2.html" title="" data-text="Blog Single V2">
                                                Blog Single V2
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#" title="" data-text="Contact">
                                        Contact
                                    </a>
                                    <ul>
                                        <li>
                                            <a href="contact.tsx" title="" data-text="Contact V1">
                                                Contact V1
                                            </a>
                                        </li>
                                        <li>
                                            <a href="contact-two.tsx" title="" data-text="Contact V2">
                                                Contact V2
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                        <div className="right-hd">
                            <ul className="sociz-links">
                                <li>
                                    <a href="#" title="">
                                        <i className="lni lni-twitter-original" /> Twitter
                                    </a>
                                </li>
                                <li>
                                    <a href="#" title="">
                                        <i className="lni lni-github" /> Github
                                    </a>
                                </li>
                            </ul>
                            <a href="#" title="" className="en-icon">
                                <i className="lni lni-envelope" />
                            </a>
                        </div>
                        <button className="nav-toggle-btn a-nav-toggle desktop-hide mobile-show white ms-auto">
                            <span className="nav-toggle nav-toggle-sm">
                                <span className="stick stick-1" />
                                <span className="stick stick-2" />
                                <span className="stick stick-3" />
                            </span>
                        </button>
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
                        <a className="active" href="#" title="">
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
                                    className="animsition-link active"
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

            <div id="pagepiling">
                <section className="section pp-scrollable">
                    <div className="main-banner-v4">
                        <div className="container">
                            <div className="banner-content-v4">
                                <div className="banner-txt-v4 wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="0ms">
                                    <span>Front-End Developer</span>
                                    <h2>Talk is cheap. Show me the code</h2>
                                    <p>I design and code beautifully simple things, and I love what I do.</p>
                                    <a href="contact.tsx" title="">
                                        let’s chat!
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section pp-scrollable">
                    <div className="slide-container">
                        <div className="partners-section p-0">
                            <div className="container">
                                <div className="pt-logos text-center d-flex flex-wrap justify-content-center align-items-center">
                                    <div className="pt-logo">
                                        <a href="#" title="">
                                            <img src="/static/images/pz1.png" alt="" />
                                        </a>
                                    </div>
                                    <div className="pt-logo">
                                        <a href="#" title="">
                                            <img src="/static/images/pz2.png" alt="" />
                                        </a>
                                    </div>
                                    <div className="pt-logo">
                                        <a href="#" title="">
                                            <img src="/static/images/pz3.png" alt="" />
                                        </a>
                                    </div>
                                    <div className="pt-logo">
                                        <a href="#" title="">
                                            <img src="/static/images/pz4.png" alt="" />
                                        </a>
                                    </div>
                                    <div className="pt-logo">
                                        <a href="#" title="">
                                            <img src="/static/images/pz5.png" alt="" />
                                        </a>
                                    </div>
                                    <div className="pt-logo">
                                        <a href="#" title="">
                                            <img src="/static/images/pz6.png" alt="" />
                                        </a>
                                    </div>
                                    <div className="pt-logo">
                                        <a href="#" title="">
                                            <img src="/static/images/pz7.png" alt="" />
                                        </a>
                                    </div>
                                    <div className="pt-logo">
                                        <a href="#" title="">
                                            <img src="/static/images/pz8.png" alt="" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section pp-scrollable">
                    <div className="slide-container">
                        <div className="latest-works-v4-sec p-0">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6">
                                        <div className="sec-title-v4">
                                            <h2>Latest Works</h2>
                                            <span>Perfect solutions for digital experience</span>
                                        </div>
                                        <div className="item-work v1">
                                            <img src="/static/images/item1.jpg" alt="" className="w-100" />
                                            <div className="item-caption">
                                                <h2>
                                                    <a href="17_portfolio_single_layout_1.html" title="">
                                                        Lewis
                                                    </a>
                                                </h2>
                                                <ul>
                                                    <li>Javascript</li>
                                                    <li>PHP</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="all-projects">
                                            <a href="15_portfolio_horizontal_scroll.html" title="" className="btn-default-v4">
                                                all projects
                                            </a>
                                            <p>
                                                * Some projects not allow publish by NDA, if you want to see more,{' '}
                                                <a href="contact.tsx" title="">
                                                    contact
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="item-works-projects">
                                            <div className="item-work">
                                                <img src="/static/images/item2.jpg" alt="" className="w-100" />
                                                <div className="item-caption">
                                                    <h2>
                                                        <a href="17_portfolio_single_layout_1.html" title="">
                                                            Finaco
                                                        </a>
                                                    </h2>
                                                    <ul>
                                                        <li>GastbyJs</li>
                                                        <li>React</li>
                                                        <li>HTML</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="item-work">
                                                <img src="/static/images/item3.jpg" alt="" className="w-100" />
                                                <div className="item-caption">
                                                    <h2>
                                                        <a href="17_portfolio_single_layout_1.html" title="">
                                                            Focus
                                                        </a>
                                                    </h2>
                                                    <ul>
                                                        <li>React</li>
                                                        <li>HTML</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section pp-scrollable" id="testimonial">
                    <div className="slide-container">
                        <div className="testimonial-v4-sec p-0">
                            <div className="container">
                                <div className="sec-head">
                                    <h2>Testimonials</h2>
                                    <span>What’s clients say about me</span>
                                </div>
                                <div className="cl-slider-v4">
                                  <Carousel ref={carouselRef} {...carouselSettings}>
                                    {carouselsExample.map((item) => (
                                      <div key={item.id} className="cl-slide">
                                        <ul className="rating">
                                          <li>
                                            <i className="lni lni-star-filled" />
                                          </li>
                                          <li>
                                            <i className="lni lni-star-filled" />
                                          </li>
                                          <li>
                                            <i className="lni lni-star-filled" />
                                          </li>
                                          <li>
                                            <i className="lni lni-star-filled" />
                                          </li>
                                          <li>
                                            <i className="lni lni-star-filled" />
                                          </li>
                                        </ul>
                                        <span>5.0 Rating</span>
                                        <p>
                                          Daniel was a real pleasure to work with and we look forward to working with him again. He’s
                                          definitely the kind of designer you can trust with a project from start to finish
                                        </p>
                                      </div>

                                    ))}
                                  </Carousel>
                                </div>
                                <div className="cl-slide-thumbs">
                                    <div className="cli-thumb">
                                        <img src="/static/images/tol1.png" alt="" />
                                        <div className="col-info">
                                            <h3>Benjamin Bryant</h3>
                                            <span>
                                                VP &amp; Co-Founder, <strong>Wiser.</strong>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="cli-thumb">
                                        <img src="/static/images/tol2.png" alt="" />
                                        <div className="col-info">
                                            <h3>Raaid Hossain</h3>
                                            <span>
                                                Project Management, <strong>Focuslab</strong>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="cli-thumb">
                                        <img src="/static/images/tol3.png" alt="" />
                                        <div className="col-info">
                                            <h3>Logan Cee</h3>
                                            <span>
                                                UI/UX Designer, <strong>LoganCee</strong>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section pp-scrollable" id="awards">
                    <div className="slide-container">
                        <div className="awards-v4-sec p-0">
                            <div className="container">
                                <div className="sec-head">
                                    <h2>Awards</h2>
                                    <span>Awards make my projects become valuable </span>
                                </div>
                                <div className="awards-v4-content-sec">
                                    <div className="award-v4-content">
                                        <div className="row">
                                            <div className="col-lg-3">
                                                <span className="year-hd">2017</span>
                                            </div>
                                            <div className="col-lg-9">
                                                <ul className="awd-infoo">
                                                    <li>
                                                        <h4>Awwwards</h4>
                                                        <span>
                                                            Site Of The Years for{' '}
                                                            <a href="17_portfolio_single_layout_1.html" title="">
                                                                Lewis
                                                            </a>
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <h4>Css Design Awards</h4>
                                                        <span>
                                                            Honorable Mention for{' '}
                                                            <a href="17_portfolio_single_layout_1.html" title="">
                                                                Bauhaus
                                                            </a>
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <h4>Product Hunt Maker</h4>
                                                        <span>
                                                            Gold In Digital Craft for{' '}
                                                            <a href="17_portfolio_single_layout_1.html" title="">
                                                                Biforde
                                                            </a>
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="award-v4-content">
                                        <div className="row">
                                            <div className="col-lg-3">
                                                <span className="year-hd">2016</span>
                                            </div>
                                            <div className="col-lg-9">
                                                <ul className="awd-infoo">
                                                    <li>
                                                        <h4>Fwa</h4>
                                                        <span>
                                                            Coporate Social Responsiblity for{' '}
                                                            <a href="17_portfolio_single_layout_1.html" title="">
                                                                Arquito
                                                            </a>
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <h4>Semplice</h4>
                                                        <span>
                                                            Best Showcase for{' '}
                                                            <a href="17_portfolio_single_layout_1.html" title="">
                                                                Focus
                                                            </a>
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section pp-scrollable" id="footer">
                    <div className="slide-container">
                        <div className="footer-v6 dark-v p-0">
                            <div className="container">
                                <div className="footer-content-v6">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="widget-abt wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="0ms">
                                                <h2>Let’s make something amazing toghtether.</h2>
                                                <h2>
                                                    Start by
                                                    <a href="#" title="">
                                                        {' '}
                                                        saying hi
                                                    </a>
                                                </h2>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div
                                                className="get-touch-txt mw-100 wow fadeInRight"
                                                data-wow-duration="1000ms"
                                                data-wow-delay="0ms"
                                            >
                                                <h5>Information</h5>
                                                <h4>5th, Floor, 216 Fairground Rd, FL 3290, USA</h4>
                                                <a href="#" title="">
                                                    hello@daniel.io
                                                </a>
                                                <ul>
                                                    <li>
                                                        <a href="service-one.tsx" title="">
                                                            Services
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="15_portfolio_horizontal_scroll.html" title="">
                                                            Works
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="blog-layout-one.tsx" title="">
                                                            News
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="contact.tsx" title="">
                                                            Contact
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mile-bottom-footer">
                                        <div className="row align-items-center">
                                            <div className="col-lg-8 col-md-8">
                                                <div className="btm-copy">
                                                    <img src="/static/images/miles-developer.png" alt="" />
                                                    <p>© 2020. All Rights Reserved</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4">
                                                <ul className="social-header">
                                                    <li>
                                                        <a href="#" title="">
                                                            <i className="lni lni-twitter-original" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" title="">
                                                            <i className="lni lni-facebook-filled" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" title="">
                                                            <i className="lni lni-instagram-original" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" title="">
                                                            <i className="lni lni-pinterest" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" title="">
                                                            <i className="lni lni-youtube" />
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

HomePage4.getLayout = function getLayout(page: React.ReactElement) {
    return <Layout title="Home">{page}</Layout>;
};

export default HomePage4;
