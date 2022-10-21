<!DOCTYPE html>
<html lang="en">
@include('partials/head.html')

<body>


<div class="wrapper">


    <header class="pb">
        <div class="container-fluid">
            <div class="header-content v1 d-flex flex-wrap align-items-center">
                <div class="logo">
                    <a href="#" title=""><img src="/static/images/logo_1.png" alt=""></a>
                </div><!--logo end-->
                <div class="mile-right ms-auto">
                    <button class="nav-toggle-btn a-nav-toggle">
                        <span class="nav-toggle-title">Menu</span>
                        <span class="nav-toggle nav-toggle-sm">
							<span class="stick stick-1"></span>
							<span class="stick stick-2"></span>
							<span class="stick stick-3"></span>
							</span>
                    </button>
                    <a href="#" title="" class="btn-default no-bg">Let’s talk<i class="lni lni-comments"></i></a>
                </div><!--mile-right end-->
            </div><!--header-content end-->
        </div>
    </header><!--header end-->

    <div class="responsive-menu">
        <div class="rep-header">
            <div class="rep-logo">
                <img src="/static/images/logo2.png" alt="">
            </div>
            <a href="#" title="" class="close-menu"><i class="lni lni-close"></i></a>
        </div>
        <div class="search-box">
            <form>
                <input type="text" name="search" placeholder="Search">
                <button type="submit"><i class="lni lni-search-alt"></i></button>
            </form>
        </div>
        <ul class="mobile-menu">
            <li>
                <a class="active" href="#" title="">Home</a>
                <ul>
                    <li><a href="index.html" class="animsition-link active" data-animsition-out-class="fade-out"
                           title="" data-text="Home Agency">Home Agency</a></li>
                    <li><a href="index2.html" class="animsition-link" data-animsition-out-class="fade-out" title=""
                           data-text="Home Studio">Home Studio</a></li>
                    <li><a href="index3.html" class="animsition-link" data-animsition-out-class="fade-out" title=""
                           data-text="Home Freelancer">Home Freelancer</a></li>
                    <li><a href="index4.html" class="animsition-link" data-animsition-out-class="fade-out" title=""
                           data-text="Home Developer">Home Developer</a></li>
                    <li><a href="index5.html" class="animsition-link" data-animsition-out-class="fade-out" title=""
                           data-text="Home Blogger">Home Blogger</a></li>
                    <li><a href="index7.html" class="animsition-link" data-animsition-out-class="fade-out" title=""
                           data-text="Home Coach">Home Coach</a></li>
                    <li><a href="index6.html" class="animsition-link" data-animsition-out-class="fade-out" title=""
                           data-text="Business Startup">Business Startup</a></li>
                    <li><a href="index8.html" class="animsition-link" data-animsition-out-class="fade-out" title=""
                           data-text="Marketing Agency">Marketing Agency</a></li>
                    <li><a href="index9.html" class="animsition-link" data-animsition-out-class="fade-out" title=""
                           data-text="Business Consulting">Business Consulting</a></li>
                    <li><a href="index10.html" class="animsition-link" data-animsition-out-class="fade-out" title=""
                           data-text="Creative Agency">Creative Agency</a></li>
                    <li><a href="index11.html" class="animsition-link" data-animsition-out-class="fade-out" title=""
                           data-text="Creative Agency 2">Creative Agency 2</a></li>
                    <li><a href="index12.html" class="animsition-link" data-animsition-out-class="fade-out" title=""
                           data-text="Home Portfolio 1">Home Portfolio 1</a></li>
                    <li><a href="index13.html" class="animsition-link" data-animsition-out-class="fade-out" title=""
                           data-text="Home Portfolio 2">Home Portfolio 2</a></li>
                </ul>
            </li>
            <li><a href="#" title="">About</a>
                <ul>
                    <li><a href="24_about_agency.html" class="animsition-link" data-animsition-out-class="fade-out"
                           title="" data-text="About Agency">About Agency</a></li>
                    <li><a href="25_about_business.html" class="animsition-link" data-animsition-out-class="fade-out"
                           title="" data-text="About Business">About Business</a></li>
                    <li><a href="26_about_me.html" class="animsition-link" data-animsition-out-class="fade-out" title=""
                           data-text="About Me">About Me</a></li>
                </ul>
            </li>
            <li><a href="#" title="">Portfolio</a>
                <ul>
                    <li><a href="14_portfolio_parallax.html" class="animsition-link"
                           data-animsition-out-class="fade-out" title="" data-text="Porfolio Parallax">Porfolio
                        Parallax</a></li>
                    <li><a href="15_portfolio_horizontal_scroll.html" class="animsition-link"
                           data-animsition-out-class="fade-out" title="" data-text="Porfolio Horizontal Scroll">Porfolio
                        Horizontal Scroll</a></li>
                    <li><a href="16_portfolio_masonry.html" title="">Porfolio Masonary</a></li>
                    <li><a href="17_portfolio_single_layout_1.html" class="animsition-link"
                           data-animsition-out-class="fade-out" title="" data-text="Porfolio Single V1">Porfolio Single
                        V1</a></li>
                    <li><a href="18_portfolio_single_layout_2.html" class="animsition-link"
                           data-animsition-out-class="fade-out" title="" data-text="Porfolio Single V2">Porfolio Single
                        V2</a></li>
                    <li><a href="19_portfolio_single_layout_3.html" class="animsition-link"
                           data-animsition-out-class="fade-out" title="" data-text="Porfolio Single V3">Porfolio Single
                        V3</a></li>
                </ul>
            </li>
            <li><a href="#" title="">Service</a>
                <ul>
                    <li><a href="27_service_1.html" class="animsition-link" data-animsition-out-class="fade-out"
                           title="" data-text="Service V1">Service V1</a></li>
                    <li><a href="28_services_2.html" class="animsition-link" data-animsition-out-class="fade-out"
                           title="" data-text="Service V2">Service V2</a></li>
                    <li><a href="29_services_3.html" class="animsition-link" data-animsition-out-class="fade-out"
                           title="" data-text="Service V3">Service V3</a></li>
                </ul>
            </li>
            <li><a href="#" title="">Pages</a>
                <ul>
                    <li><a href="32_team.html" class="animsition-link" data-animsition-out-class="fade-out" title=""
                           data-text="Team">Team</a></li>
                    <li><a href="33_career.html" class="animsition-link" data-animsition-out-class="fade-out" title=""
                           data-text="Career">Career</a></li>
                    <li><a href="34_career_detail.html" class="animsition-link" data-animsition-out-class="fade-out"
                           title="" data-text="Career Details">Career Details</a></li>
                    <li><a href="37_pricing.html" class="animsition-link" data-animsition-out-class="fade-out" title=""
                           data-text="Pricing">Pricing</a></li>
                    <li><a href="35_404_error.html" class="animsition-link" data-animsition-out-class="fade-out"
                           title="" data-text="404">404</a></li>
                    <li><a href="36_coming_soon.html" class="animsition-link" data-animsition-out-class="fade-out"
                           title="" data-text="Coming Soon">Coming Soon</a></li>
                </ul>
            </li>
            <li><a href="#" title="">Blogs</a>
                <ul>
                    <li><a href="blog-layout1.html" class="animsition-link" data-animsition-out-class="fade-out"
                           title="" data-text="Blog Layout V1">Blog Layout V1</a></li>
                    <li><a href="blog-layout2.html" class="animsition-link" data-animsition-out-class="fade-out"
                           title="" data-text="Blog Layout V2">Blog Layout V2</a></li>
                    <li><a href="blog-single-layout1.html" class="animsition-link" data-animsition-out-class="fade-out"
                           title="" data-text="Blog Single Layout V1">Blog Single Layout V1</a></li>
                    <li><a href="blog-single-layout2.html" class="animsition-link" data-animsition-out-class="fade-out"
                           title="" data-text="Blog Single Layout V2">Blog Single Layout V2</a></li>
                </ul>
            </li>
            <li><a href="#" title="">Contact</a>
                <ul>
                    <li><a href="30_contact_1.html" class="animsition-link" data-animsition-out-class="fade-out"
                           title="" data-text="Contact V1">Contact V1</a></li>
                    <li><a href="31_contact_2.html" class="animsition-link" data-animsition-out-class="fade-out"
                           title="" data-text="Contact V2">Contact V2</a></li>
                </ul>
            </li>
        </ul>
    </div><!--responsive-menu end-->

    <div class="promo promo-primary-container">
        <div class="section-bg promo-primary-bg">
            <div class="inside"></div>
        </div>
        <div class="step-position"></div>
        <div class="promo-primary">
            <div class="container">
                <div class="promo-primary-content">
                    <span>miles studio</span>
                    <h2>Boost your business up to high level</h2>
                    <p>Like any great agency, we are only as good as the result we deliver of our recent work 😎</p>
                    <a href="#" class="btn-default">Get Started</a>
                </div>
            </div>
            <div class="square"></div>
        </div>
    </div>

    <section class="banner-sec" style="display: none;">
        <div class="section-bg promo-primary-bg">
            <div class="inside"></div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-lg-6 offset-lg-6">
                    <div class="banner-text wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="0ms">
                        <span>miles studio</span>
                        <h2>Boost your business up to high level</h2>
                        <p>Like any great agency, we are only as good as the result we deliver of our recent work</p>
                        <a href="#" title="" class="btn-default">Get Started</a>
                    </div><!--banner-text end-->
                </div>
            </div>
        </div>
    </section><!--banner-sec end-->

    <section class="partners-section">
        <div class="container">
            <div class="pt-logos text-center d-flex flex-wrap justify-content-center align-items-center">
                <div class="pt-logo">
                    <a href="#" title="">
                        <img src="/static/images/pt1.png" alt="">
                    </a>
                </div><!--pt-logo end-->
                <div class="pt-logo">
                    <a href="#" title="">
                        <img src="/static/images/pt2.png" alt="">
                    </a>
                </div><!--pt-logo end-->
                <div class="pt-logo">
                    <a href="#" title="">
                        <img src="/static/images/pt3.png" alt="">
                    </a>
                </div><!--pt-logo end-->
                <div class="pt-logo">
                    <a href="#" title="">
                        <img src="/static/images/pt4.png" alt="">
                    </a>
                </div><!--pt-logo end-->
                <div class="pt-logo">
                    <a href="#" title="">
                        <img src="/static/images/pt5.png" alt="">
                    </a>
                </div><!--pt-logo end-->
                <div class="pt-logo">
                    <a href="#" title="">
                        <img src="/static/images/pt6.png" alt="">
                    </a>
                </div><!--pt-logo end-->
                <div class="pt-logo">
                    <a href="#" title="">
                        <img src="/static/images/pt7.png" alt="">
                    </a>
                </div><!--pt-logo end-->
                <div class="pt-logo">
                    <a href="#" title="">
                        <img src="/static/images/pt8.png" alt="">
                    </a>
                </div><!--pt-logo end-->
            </div><!--pt-logos end-->
        </div>
    </section><!--partners-section end-->

    <section class="services-home">
        <div class="vector-bg"></div>
        <div class="container">
            <div class="services-content">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="service-text">
                            <span>services</span>
                            <h2>Trusted solutions for business</h2>
                            <h3>We know that good design mean that good business.</h3>
                            <p>We help our client suceed by creating identities, digital experiences, and printmaterials
                                that communicate clearly, achieve marketing goals & look fantastic</p>
                            <a href="#" title="" class="btn-default no-bg">Learn More</a>
                        </div><!--service-text end-->
                    </div>
                    <div class="col-lg-6">
                        <div class="services-card-list">
                            <div class="service-card clr1 wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="0ms">
                                <div class="service-icon">
                                    <img src="/static/images/icon1.png" alt="">
                                </div>
                                <div class="service-info">
                                    <h3>Branding</h3>
                                    <p>We build and activate brands throung cultural insigh &, strategic vision.</p>
                                </div>
                            </div><!--service-card end-->
                            <div class="service-card clr2 wow fadeInRight" data-wow-duration="1000ms"
                                 data-wow-delay="300ms">
                                <div class="service-icon">
                                    <img src="/static/images/icon2.png" alt="">
                                </div>
                                <div class="service-info">
                                    <h3>Interaction</h3>
                                    <p>We build and activate brands throung cultural insigh &, strategic vision.</p>
                                </div>
                            </div><!--service-card end-->
                            <div class="service-card clr3 wow fadeInLeft" data-wow-duration="1000ms"
                                 data-wow-delay="500ms">
                                <div class="service-icon">
                                    <img src="/static/images/icon3.png" alt="">
                                </div>
                                <div class="service-info">
                                    <h3>Motion</h3>
                                    <p>We build and activate brands throung cultural insigh &, strategic vision.</p>
                                </div>
                            </div><!--service-card end-->
                        </div><!--services-card-list end-->
                    </div>
                </div>
            </div><!--services-content end-->
        </div>
    </section><!--services-home end-->

    <section class="projects-sec">
        <div class="container">
            <div class="projects-sec-content">
                <div class="row">
                    <div class="col-lg-6 col-md-6">
                        <div class="mile-projects v1">
                            <div class="mile-project">
                                <div class="project-thumb" style="background-color: #78901b">
                                    <img src="/static/images/pic21.png" alt="" class="w-100">
                                </div>
                                <div class="project-info">
                                    <span>Branding</span>
                                    <h2><a href="17_portfolio_single_layout_1.html" title="">Ls. Boxes Package</a></h2>
                                </div>
                            </div><!--mile-project end-->
                            <div class="mile-project">
                                <div class="project-thumb" style="background-color: #5169fb">
                                    <img src="/static/images/pic22.png" alt="" class="w-100">
                                </div>
                                <div class="project-info">
                                    <span>Interaction - Motion</span>
                                    <h2><a href="17_portfolio_single_layout_1.html" title="">Lewis Creative Agency</a>
                                    </h2>
                                </div>
                            </div><!--mile-project end-->
                        </div><!--mile-projects end-->
                    </div>
                    <div class="col-lg-6 col-md-6">
                        <div class="mile-projects v2">
                            <div class="section-title wow fadeInUp" data-wow-duration="1000ms">
                                <span>featured projects</span>
                                <h2>Bigger, Bolder & Better</h2>
                            </div><!--section-title end-->
                            <div class="mile-project">
                                <div class="project-thumb" style="background-color: #f1445a">
                                    <img src="/static/images/pic23.png" alt="" class="w-100">
                                </div>
                                <div class="project-info">
                                    <span>Interaction - Motion</span>
                                    <h2><a href="17_portfolio_single_layout_1.html" title="">Bynazo Finance Manage
                                        App</a></h2>
                                </div>
                            </div><!--mile-project end-->
                            <a href="15_portfolio_horizontal_scroll.html" title="" class="btn-default no-bg">See More
                                Projects <i class="lni lni-chevron-right"></i></a>
                        </div><!--mile-projects end-->
                    </div>
                </div>
            </div><!--projects-sec-content end-->
        </div>
    </section><!--projects-sec end-->

    <section class="testimonial-sec">
        <div class="container">
            <div class="section-title">
                <span>people love miles</span>
                <h2>Trusted by +9K clients</h2>
            </div><!--section-title end-->
            <div class="testimonial-slider dots-hide">
                <div class="row testimo-slider">
                    <div class="col-12 col-lg-6">
                        <div class="testimonial-slide">
                            <p>“Originally, creative and with an innate understanding of their customer’s need. The team
                                at Miles are always a pleasure to work with. Recommended.”</p>
                            <div class="thmb-row">
                                <div class="thmb-img">
                                    <img src="/static/images/thumb1.png" alt="">
                                </div>
                                <div class="thmb-info">
                                    <h3>Bobby Hanesto</h3>
                                    <span>Director of <em>Inivisionapp</em></span>
                                </div>
                            </div>
                        </div><!--testimonial-slide end-->
                    </div>
                    <div class="col-12 col-lg-6">
                        <div class="testimonial-slide">
                            <p>“I don’t know what else to say, this is something that you haven’t seen before. Unique
                                design, lightweight, and outstanding support.”</p>
                            <div class="thmb-row">
                                <div class="thmb-img">
                                    <img src="/static/images/thumb2.png" alt="">
                                </div>
                                <div class="thmb-info">
                                    <h3>Jeans Grey</h3>
                                    <span>CEO of  <em>BraveBred</em></span>
                                </div>
                            </div>
                        </div><!--testimonial-slide end-->
                    </div>
                    <div class="col-12 col-lg-6">
                        <div class="testimonial-slide">
                            <p>“Extremly impressed with the Miles release. This is the best WP theme ever. Launch your
                                website look amazing in fie minutes. Greated!!!</p>
                            <div class="thmb-row">
                                <div class="thmb-img">
                                    <img src="/static/images/thumb3.png" alt="">
                                </div>
                                <div class="thmb-info">
                                    <h3>Charlies Xavier</h3>
                                    <span>Onwer of  <em>Growhacker</em></span>
                                </div>
                            </div>
                        </div><!--testimonial-slide end-->
                    </div>
                    <div class="col-12 col-lg-6">
                        <div class="testimonial-slide">
                            <p>“Originally, creative and with an innate understanding of their customer’s need. The team
                                at Miles are always a pleasure to work with. Recommended.”</p>
                            <div class="thmb-row">
                                <div class="thmb-img">
                                    <img src="/static/images/thumb1.png" alt="">
                                </div>
                                <div class="thmb-info">
                                    <h3>Bobby Hanesto</h3>
                                    <span>Director of <em>Inivisionapp</em></span>
                                </div>
                            </div>
                        </div><!--testimonial-slide end-->
                    </div>
                    <div class="col-12 col-lg-6">
                        <div class="testimonial-slide">
                            <p>“I don’t know what else to say, this is something that you haven’t seen before. Unique
                                design, lightweight, and outstanding support.”</p>
                            <div class="thmb-row">
                                <div class="thmb-img">
                                    <img src="/static/images/thumb2.png" alt="">
                                </div>
                                <div class="thmb-info">
                                    <h3>Jeans Grey</h3>
                                    <span>CEO of  <em>BraveBred</em></span>
                                </div>
                            </div>
                        </div><!--testimonial-slide end-->
                    </div>
                    <div class="col-12 col-lg-6">
                        <div class="testimonial-slide">
                            <p>“Extremly impressed with the Miles release. This is the best WP theme ever. Launch your
                                website look amazing in fie minutes. Greated!!!</p>
                            <div class="thmb-row">
                                <div class="thmb-img">
                                    <img src="/static/images/thumb3.png" alt="">
                                </div>
                                <div class="thmb-info">
                                    <h3>Charlies Xavier</h3>
                                    <span>Onwer of  <em>Growhacker</em></span>
                                </div>
                            </div>
                        </div><!--testimonial-slide end-->
                    </div>
                    <div class="col-12 col-lg-6">
                        <div class="testimonial-slide">
                            <p>“Originally, creative and with an innate understanding of their customer’s need. The team
                                at Miles are always a pleasure to work with. Recommended.”</p>
                            <div class="thmb-row">
                                <div class="thmb-img">
                                    <img src="/static/images/thumb1.png" alt="">
                                </div>
                                <div class="thmb-info">
                                    <h3>Bobby Hanesto</h3>
                                    <span>Director of <em>Inivisionapp</em></span>
                                </div>
                            </div>
                        </div><!--testimonial-slide end-->
                    </div>
                    <div class="col-12 col-lg-6">
                        <div class="testimonial-slide">
                            <p>“I don’t know what else to say, this is something that you haven’t seen before. Unique
                                design, lightweight, and outstanding support.”</p>
                            <div class="thmb-row">
                                <div class="thmb-img">
                                    <img src="/static/images/thumb2.png" alt="">
                                </div>
                                <div class="thmb-info">
                                    <h3>Jeans Grey</h3>
                                    <span>CEO of  <em>BraveBred</em></span>
                                </div>
                            </div>
                        </div><!--testimonial-slide end-->
                    </div>
                </div>
            </div><!--testimonial-slider end-->
        </div>
    </section><!--testimonial-sec end-->

    <section class="team-sec">
        <div class="container">
            <div class="team-sec-content">
                <div class="row align-items-center">
                    <div class="col-lg-7">
                        <div class="team-thumb wow zoomIn" data-wow-duration="1000ms">
                            <img src="/static/images/img4.png" alt="">
                        </div><!--testi-thumbe end-->
                    </div>
                    <div class="col-lg-5">
                        <div class="team-info">
                            <div class="section-title">
                                <span>our team</span>
                                <h2>Creative and Funny</h2>
                            </div>
                            <p>Meet our talented team of creatives, fun-lovers, and magic makers. Shall seas yielding a
                                he, moveth said gathering under all cattle were years fruit whose isn’t. </p>
                            <a href="32_team.html" title="" class="btn-default no-bg">Meet Our Team</a>
                        </div><!--testi-info end-->
                    </div>
                </div>
            </div><!--test-sec-content end-->
        </div>
    </section><!--testi-sec end-->

    <section class="featured-post-sec">
        <div class="container">
            <div class="featured-post">
                <div class="row align-items-center">
                    <div class="col-lg-6">
                        <div class="featured-post-text">
                            <span>Featured Post</span>
                            <h2>Brief Guide into Social Media Marketing Trends 2020</h2>
                            <p>These days, the Internet permeates every single facet of our lives on a daily basis.
                                Indeed, there is rarely a thing that anyone.</p>
                            <a href="blog-single-layout1.html" title="" class="btn-default">Continue Reading <i
                                    class="lni lni-chevron-right"></i></a>
                        </div><!--featured-post-text end-->
                    </div>
                    <div class="col-lg-6">
                        <div class="vector-img">
                            <img src="/static/images/vector2.png" alt="">
                        </div><!--vector-img end-->
                    </div>
                </div>
            </div><!--featured-content end-->
            <div class="row">
                <div class="col-lg-6">
                    <div class="mile-post wow fadeIn" data-wow-duration="1000ms" data-wow-delay="0ms">
                        <div class="mile-thumb">
                            <img src="/static/images/post1.jpg" alt="">
                        </div>
                        <div class="mile-info">
                            <span>3 Hours ago</span>
                            <h2><a href="blog-single-layout1.html" title="">Proven Tricks And Tools That Save Designers’
                                Time</a></h2>
                        </div>
                    </div><!--mile-post end-->
                    <div class="mile-post wow fadeIn" data-wow-duration="1000ms" data-wow-delay="200ms">
                        <div class="mile-thumb">
                            <img src="/static/images/post2.jpg" alt="">
                        </div>
                        <div class="mile-info">
                            <span>March 20, 2020</span>
                            <h2><a href="blog-single-layout1.html" title="">Effective Practices on Blog Images & Visual
                                Content</a></h2>
                        </div>
                    </div><!--mile-post end-->
                </div>
                <div class="col-lg-6">
                    <div class="mile-post wow fadeIn" data-wow-duration="1000ms" data-wow-delay="400ms">
                        <div class="mile-thumb">
                            <img src="/static/images/post3.jpg" alt="">
                        </div>
                        <div class="mile-info">
                            <span>March 16, 2020</span>
                            <h2><a href="blog-single-layout1.html" title="">How to Make Your Brand Great Again!</a></h2>
                        </div>
                    </div><!--mile-post end-->
                    <div class="mile-post wow fadeIn" data-wow-duration="1000ms" data-wow-delay="600ms">
                        <div class="mile-thumb">
                            <img src="/static/images/post4.jpg" alt="">
                        </div>
                        <div class="mile-info">
                            <span>April 3, 2020</span>
                            <h2><a href="blog-single-layout1.html" title="">UI Inspiration: 20+ Creative Tab Bar
                                Animations</a></h2>
                        </div>
                    </div><!--mile-post end-->
                </div>
            </div>
        </div>
    </section><!--featured-post-sec end-->

    <section class="contact-sec">
        <div class="container">
            <div class="sec-title text-center wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="0ms">
                <h2>Ready to get started</h2>
                <span>Ask away! we will response within 24 hours</span>
            </div><!--sec-title end-->
            <form class="contact-form">
                <div class="row">
                    <div class="col-md-4">
                        <div class="form-group">
                            <input type="text" class="form--control" id="name" name="name" placeholder="">
                            <label for="name">Full Name</label>
                        </div><!--form-group end-->
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                            <input type="text" class="form--control" id="email" name="email" placeholder="">
                            <label for="email">Email Address <span>*</span></label>
                        </div><!--form-group end-->
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                            <input type="text" class="form--control" id="subject" name="subject" placeholder="">
                            <label for="subject">Subject</label>
                        </div><!--form-group end-->
                    </div>
                    <div class="col-md-12">
                        <div class="form-group">
                            <textarea class="form--control" id="message"></textarea>
                            <label for="message">Your message here</label>
                        </div><!--form-group end-->
                    </div>
                    <div class="col-md-12">
                        <div class="form-group text-center m-0">
                            <button type="submit" class="btn-default no-bg">Send Message</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </section><!--contact-sec end-->

    <footer>
        <div class="top-footer">
            <div class="container">
                <div class="footer-content">
                    <div class="row">
                        <div class="col-lg-6 col-md-6">
                            <div class="ft-text wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="0ms">
                                <p>We are a close team of creative professionals based out of Savannah, Georgia. We are
                                    passionate about partnering & organizations to provide exceptional solutions.</p>
                                <div class="ft-form">
                                    <h4>Subscribe our newsletter for news update</h4>
                                    <form>
											<span class="input input--makiko">
												<input class="input__field input__field--makiko" type="email"
                                                       id="input-16" placeholder="Enter email address...">
												<label class="input__label input__label--makiko">
													<button type="submit"
                                                            class="input__label-content input__label-content--makiko">subscribe  <i
                                                            class="lni lni-chevron-right"></i></button>
												</label>
											</span>
                                    </form>
                                </div><!--ft-form end-->
                            </div><!--ft-text end-->
                        </div>
                        <div class="col-lg-6 col-md-6">
                            <div class="get-touch-txt wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="300ms">
                                <span>get in touch</span>
                                <h3>116 Fairground Rd, FL 32904, USA <a href="#" title="">hello@miles.co</a></h3>
                                <ul>
                                    <li><a href="26_about_me.html" title="">About</a></li>
                                    <li><a href="15_portfolio_horizontal_scroll.html" title="">Works</a></li>
                                    <li><a href="30_contact_1.html" title="">Contact</a></li>
                                    <li><a href="28_services_2.html" title="">Services</a></li>
                                    <li><a href="blog-layout1.html" title="">News</a></li>
                                </ul>
                            </div><!--get-touch-txt end-->
                        </div>
                    </div>
                </div><!--footer-content end-->
            </div>
        </div><!--top-footer end-->
        <div class="bottom-footer">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6 col-md-6">
                        <div class="cp-mile">
                            <img src="/static/images/logo_1.png" alt="">
                            <p>© 2020. All Rights Reserved</p>
                        </div><!--cp-mile end-->
                    </div>
                    <div class="col-lg-6 col-md-6">
                        <ul class="social-links">
                            <li><a href="#" title=""><i class="fab fa-facebook-square"></i></a></li>
                            <li><a href="#" title=""><i class="fab fa-twitter"></i></a></li>
                            <li><a href="#" title=""><i class="fab fa-behance"></i></a></li>
                            <li><a href="#" title=""><i class="fab fa-instagram"></i></a></li>
                        </ul><!--social-links end-->
                    </div>
                </div>
            </div>
        </div><!--bottom-footer end-->
    </footer><!--footer end-->

</div><!--wrapper end-->

@include('partials/scripts.html')

</body>

</html>