import { Layout } from "../app/components/Layout"
import { NextPageWithLayout } from "./_app"

const HomePage3: NextPageWithLayout = () => {
    return (
            <>
                <header className="header-v3">
                    <div className="container">
                        <div className="header-content d-flex flex-wrap">
                            <div className="logo">
                                <a href="#" title="">
                                    <img src="/static/images/logo_8.png" alt="" />
                                </a>
                            </div>
                            <div className="head-cat">
                                <span>
                                    art direction <br />
                                    design
                                </span>
                            </div>
                            <ul className="hd-links">
                                <li>Call me. (+706) 898-0751</li>
                                <li>info@crisdesign.co</li>
                            </ul>
                            <button className="nav-toggle-btn a-nav-toggle">
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
                            <img src="/static/images/logo_8.png" alt="" />
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
                                        className="animsition-link active"
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
                                        href="24_about_agency.html"
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
                                        href="18_portfolio_single_layout_2.html"
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
                                        href="27_service_1.html"
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
                                        href="28_services_2.html"
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
                                        href="29_services_3.html"
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
                                        href="33_career.html"
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
                                        href="34_career_detail.html"
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
                                        href="37_pricing.html"
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
                                        href="35_404_error.html"
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
                                        href="36_coming_soon.html"
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
                                        href="blog-layout1.html"
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
                                        href="blog-layout2.html"
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
                                        href="30_contact_1.html"
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
                                        href="31_contact_2.html"
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
                
                <section className="main-banner-v3">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-6">
                                <div
                                    className="banner-txt wow fadeInUp"
                                    data-wow-duration="1000ms"
                                    data-wow-delay="0ms"
                                >
                                    <h2>Christopher Felami</h2>
                                    <span>
                                        Interaction Designer and <br /> dog lover
                                    </span>
                                    <p>
                                        You are a freelancer and you love dogs just like me! Lets shake
                                        hands, bro
                                    </p>
                                    <a href="30_contact_1.html" title="" className="btn-default3">
                                        let’s chat!
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div
                                    className="banner-img wow zoomIn"
                                    data-wow-duration="1000ms"
                                    data-wow-delay="0ms"
                                >
                                    <img src="/static/images/banner-img3.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section className="vls-sections">
                    <div
                        className="mile-vl-sec wow fadeInUp"
                        data-wow-duration="1000ms"
                        data-wow-delay="0ms"
                    >
                        <div className="container">
                            <div className="mile-vl-sec-details">
                                <div className="mile-vl-dt">
                                    <span className="vl-icon clr1">
                                        <i className="lni lni-crown" />
                                    </span>
                                    <h3>
                                        <a
                                            href="27_service_1.html"
                                            title=""
                                            className="animsition-link"
                                            data-animsition-out-class="fade-out"
                                        >
                                            Branding
                                        </a>
                                    </h3>
                                    <p>
                                        I build and activate brands throung cultural insigh &amp;,
                                        strategic vision.
                                    </p>
                                    <a href="17_portfolio_single_layout_1.html" title="">
                                        See Project
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="mile-vl-sec wow fadeInUp"
                        data-wow-duration="1000ms"
                        data-wow-delay="0ms"
                    >
                        <div className="container">
                            <div className="mile-vl-sec-details v2">
                                <div className="mile-vl-dt">
                                    <span className="vl-icon clr2">
                                        <i className="lni lni-mobile" />
                                    </span>
                                    <h3>
                                        <a
                                            href="27_service_1.html"
                                            title=""
                                            className="animsition-link"
                                            data-animsition-out-class="fade-out"
                                        >
                                            Motion
                                        </a>
                                    </h3>
                                    <p>
                                        I build and activate brands throung cultural insigh &amp;,
                                        strategic vision.
                                    </p>
                                    <a href="17_portfolio_single_layout_1.html" title="">
                                        See Project
                                    </a>
                                </div>
                                <div className="clearfix" />
                            </div>
                        </div>
                    </div>
                    <div
                        className="mile-vl-sec wow fadeInUp"
                        data-wow-duration="1000ms"
                        data-wow-delay="0ms"
                    >
                        <div className="container">
                            <div className="mile-vl-sec-details v3">
                                <div className="mile-vl-dt">
                                    <span className="vl-icon clr3">
                                        <i className="lni lni-anchor" />
                                    </span>
                                    <h3>
                                        <a
                                            href="27_service_1.html"
                                            title=""
                                            className="animsition-link"
                                            data-animsition-out-class="fade-out"
                                        >
                                            Illustration
                                        </a>
                                    </h3>
                                    <p>Decribe things abstract become visible with a look impressive</p>
                                    <a href="17_portfolio_single_layout_1.html" title="">
                                        See Project
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section className="clients-sec-v3">
                    <div className="container">
                        <div
                            className="section-title-v3 wow fadeInUp"
                            data-wow-duration="1000ms"
                            data-wow-delay="0ms"
                        >
                            <h2>Big Clients</h2>
                            <span>Work with many big brands, brings for me great experience.</span>
                        </div>
                        <div className="client-works">
                            <div className="col-m-2">
                                <div className="cl-imag">
                                    <img src="/static/images/cl1.png" alt="" />
                                </div>
                            </div>
                            <div className="col-m-2">
                                <div className="cl-imag">
                                    <img src="/static/images/cl2.png" alt="" />
                                </div>
                            </div>
                            <div className="col-m-2">
                                <div className="cl-imag">
                                    <img src="/static/images/cl3.png" alt="" />
                                </div>
                            </div>
                            <div className="col-m-2">
                                <div className="cl-imag">
                                    <img src="/static/images/cl4.png" alt="" />
                                </div>
                            </div>
                            <div className="col-m-2">
                                <div className="cl-imag">
                                    <img src="/static/images/cl5.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <ul
                            className="counter-sec wow fadeInUp"
                            id="counter"
                            data-wow-duration="1000ms"
                            data-wow-delay="0ms"
                        >
                            <li>
                                <div className="count-dv">
                                    <h2 className="count">10</h2>
                                    <span>Years Experience</span>
                                </div>
                            </li>
                            <li>
                                <div className="count-dv">
                                    <h2 className="count">102</h2>
                                    <span>Satisfaction Clients</span>
                                </div>
                            </li>
                            <li>
                                <div className="count-dv">
                                    <h2 className="count">285</h2>
                                    <span>
                                        Projects Completed On <br /> 34 Countries
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>
                
                <section className="works-v3-sec pb-0">
                    <div className="container">
                        <div className="section-title-v3">
                            <h2>Works</h2>
                            <span>Featured projects, which my best projects be choice to show</span>
                        </div>
                    </div>
                    <div className="work-projects">
                        <div className="container">
                            <div className="row work-slider">
                                <div className="col-lg-6">
                                    <div className="work-slide">
                                        <img src="/static/images/pic2.jpg" alt="" />
                                        <div className="wkr-txt">
                                            <h3>
                                                <a
                                                    href="17_portfolio_single_layout_1.html"
                                                    title=""
                                                    className="animsition-link"
                                                    data-animsition-out-class="fade-out"
                                                >
                                                    Faye Fo
                                                </a>
                                            </h3>
                                            <span>Interaction, Illustration</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="work-slide">
                                        <img src="/static/images/pic3.jpg" alt="" />
                                        <div className="wkr-txt">
                                            <h3>
                                                <a
                                                    href="17_portfolio_single_layout_1.html"
                                                    title=""
                                                    className="animsition-link"
                                                    data-animsition-out-class="fade-out"
                                                >
                                                    Taskly
                                                </a>
                                            </h3>
                                            <span>Branding, Illustration, Interaction</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="work-slide">
                                        <img src="/static/images/pic2.jpg" alt="" />
                                        <div className="wkr-txt">
                                            <h3>
                                                <a
                                                    href="17_portfolio_single_layout_1.html"
                                                    title=""
                                                    className="animsition-link"
                                                    data-animsition-out-class="fade-out"
                                                >
                                                    Faye Fo
                                                </a>
                                            </h3>
                                            <span>Interaction, Illustration</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="work-slide">
                                        <img src="/static/images/pic3.jpg" alt="" />
                                        <div className="wkr-txt">
                                            <h3>
                                                <a
                                                    href="17_portfolio_single_layout_1.html"
                                                    title=""
                                                    className="animsition-link"
                                                    data-animsition-out-class="fade-out"
                                                >
                                                    Taskly
                                                </a>
                                            </h3>
                                            <span>Branding, Illustration, Interaction</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section className="testi-v3-sec">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-5">
                                <div className="testi-v3-slider">
                                    <div className="testi-v3-slide current" id="tab1">
                                        <span className="t-icon">
                                            <i className="lni lni-quotation" />
                                        </span>
                                        <p>
                                            I don’t know what else to say, this is something that you
                                            haven’t seen before. Unique design, lightweight, and outstanding
                                            support.
                                        </p>
                                        <h3>Edison Cavani</h3>
                                        <span>Product Management at Spotify</span>
                                    </div>
                                    <div className="testi-v3-slide" id="tab2">
                                        <span className="t-icon">
                                            <i className="lni lni-quotation" />
                                        </span>
                                        <p>
                                            this is something that you haven’t seen before. Unique design,
                                            lightweight, and outstanding support.
                                        </p>
                                        <h3>Edison Cavani</h3>
                                        <span>Product Management at Spotify</span>
                                    </div>
                                    <div className="testi-v3-slide" id="tab3">
                                        <span className="t-icon">
                                            <i className="lni lni-quotation" />
                                        </span>
                                        <p>
                                            I don’t know what else to say before. Unique design,
                                            lightweight, and outstanding support.
                                        </p>
                                        <h3>Logan Cee</h3>
                                        <span>Product Management at Spotify</span>
                                    </div>
                                    <div className="testi-v3-slide" id="tab4">
                                        <span className="t-icon">
                                            <i className="lni lni-quotation" />
                                        </span>
                                        <p>
                                            I don’t know what else to say, this is something that you
                                            haven’t seen before. Unique design, lightweight, and outstanding
                                            support.
                                        </p>
                                        <h3>Edison Cavani</h3>
                                        <span>Product Management at Spotify</span>
                                    </div>
                                    <div className="testi-v3-slide" id="tab5">
                                        <span className="t-icon">
                                            <i className="lni lni-quotation" />
                                        </span>
                                        <p>
                                            this is something that you haven’t seen before. Unique design,
                                            lightweight, and outstanding support.
                                        </p>
                                        <h3>Edison Cavani</h3>
                                        <span>Product Management at Spotify</span>
                                    </div>
                                    <div className="testi-v3-slide" id="tab6">
                                        <span className="t-icon">
                                            <i className="lni lni-quotation" />
                                        </span>
                                        <p>
                                            I don’t know what else to say before. Unique design,
                                            lightweight, and outstanding support.
                                        </p>
                                        <h3>Logan Cee</h3>
                                        <span>Product Management at Spotify</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-7">
                                <div className="testi-bg">
                                    <img src="/static/images/testi-bg.png" alt="" />
                                    <ul className="testi-thumbs">
                                        <li data-tab="tab1" className="v1 current">
                                            <img src="/static/images/tm1.jpg" alt="" />
                                        </li>
                                        <li data-tab="tab2" className="v2">
                                            <img src="/static/images/tm2.jpg" alt="" />
                                        </li>
                                        <li data-tab="tab3" className="v3">
                                            <img src="/static/images/tm3.jpg" alt="" />
                                        </li>
                                        <li data-tab="tab4" className="v4">
                                            <img src="/static/images/tm4.jpg" alt="" />
                                        </li>
                                        <li data-tab="tab5" className="v5">
                                            <img src="/static/images/tm5.jpg" alt="" />
                                        </li>
                                        <li data-tab="tab6" className="v6">
                                            <img src="/static/images/tm6.jpg" alt="" />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section className="work-inquiry-sec">
                    <div className="container">
                        <div className="work-inquery">
                            <div className="inqu-text">
                                <h3>Work Inquiry</h3>
                                <span>Let’s work together and i’ll help you by all my best</span>
                            </div>
                            <div className="inq-btn">
                                <a href="30_contact_1.html" title="" className="btn-default3">
                                    Let’s Chat!
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section className="stay-touch-sec">
                    <div className="container">
                        <div
                            className="txh-text text-center wow fadeInUp"
                            data-wow-duration="1000ms"
                            data-wow-delay="0ms"
                        >
                            <h3>Stay Connected</h3>
                            <h4>San Francisco, CA</h4>
                            <h2>hello@crisdesign.co</h2>
                            <span>(+03) 456 - 8957 - 386</span>
                            <ul className="social-linkss">
                                <li>
                                    <a href="#" title="" className="dribble">
                                        <i className="lni lni-dribbble" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#" title="" className="behance">
                                        <i className="lni lni-behance-original" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#" title="" className="instagram">
                                        <i className="lni lni-instagram-original" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
                
                <footer className="footer-v3">
                    <div className="container">
                        <div className="footer-content">
                            <div className="ft-logo">
                                <img src="/static/images/logo_8.png" alt="" />
                            </div>
                            <ul className="nav-btm-links">
                                <li>
                                    <a href="25_about_business.html" title="">
                                        about
                                    </a>
                                </li>
                                <li>
                                    <a href="15_portfolio_horizontal_scroll.html" title="">
                                        works
                                    </a>
                                </li>
                                <li>
                                    <a href="27_service_1.html" title="">
                                        services
                                    </a>
                                </li>
                                <li>
                                    <a href="blog-layout1.html" title="">
                                        news
                                    </a>
                                </li>
                                <li>
                                    <a href="30_contact_1.html" title="">
                                        contact
                                    </a>
                                </li>
                            </ul>
                            <div className="cpy-text">
                                <p>© 2020 cris. all rights reserved</p>
                            </div>
                        </div>
                    </div>
                    <div className="btm-shape">
                        <img src="/static/images/shape2.jpg" alt="" />
                    </div>
                </footer>
            </>
    )
}

HomePage3.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout title="Home">{page}</Layout>;
};

export default HomePage3;
