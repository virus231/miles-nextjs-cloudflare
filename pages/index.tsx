import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { NextLink } from '../app/components/BaseNextLink'
import Page from '../app/components/Page'
import styles from '../styles/Home.module.scss'


const Home: NextPage = () => {
  return (
    <Page title="Main Page">
      <div className="wrapper">

        <header className={styles.headerV8}>
          <div className="container">
            <div className={styles.headerContentV8}>
              
              <div className={styles.logoV8}>
                <NextLink href="index.html" title="logo">
                  <img src="/static/images/logo_8.png" alt="Logo" />
                </NextLink>
              </div>

              <nav>
                <ul>
                  <li>
                    <NextLink className="active" href="#" >about</NextLink>
                    <ul>
                      <li>
                        <NextLink href="24_about_agency.html" >About Agency</NextLink>
                      </li>
                      <li>
                        <NextLink href="25_about_business.html" >About Business</NextLink>
                      </li>
                      <li><NextLink href="26_about_me.html" >About Me</NextLink></li>
                    </ul>
                  </li>
                  <li>
                    <NextLink href="#" >Portfolio</NextLink>
                    <ul>
                      <li>
                        <NextLink href="14_portfolio_parallax.html" >Portfolio Parallax</NextLink>
                      </li>
                      <li>
                        <NextLink href="15_portfolio_horizontal_scroll.html" >Portfolio Horizontol</NextLink>
                      </li>
                      <li>
                        <NextLink href="16_portfolio_masonry.html" >Portfolio Masonary</NextLink>
                      </li>
                      <li>
                        <NextLink href="17_portfolio_single_layout_1.html" >Portfolio Single Layout
                          V1</NextLink>
                      </li>
                      <li>
                        <NextLink href="18_portfolio_single_layout_2.html" >Portfolio Single Layout
                          V2</NextLink>
                      </li>
                      <li>
                        <NextLink href="19_portfolio_single_layout_3.html" >Portfolio Single Layout
                          V3</NextLink>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <NextLink href="#" >News</NextLink>
                    <ul>
                      <li><NextLink href="blog-layout1.html" >Blog V1</NextLink></li>
                      <li><NextLink href="blog-layout2.html" >Blog V2</NextLink></li>
                      <li>
                        <NextLink href="blog-single-layout1.html" >Blog Single V1</NextLink>
                      </li>
                      <li>
                        <NextLink href="blog-single-layout2.html" >Blog Single V2</NextLink>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <NextLink href="#" >Contact</NextLink>
                    <ul>
                      <li><NextLink href="30_contact_1.html" >Contact V1</NextLink></li>
                      <li><NextLink href="31_contact_2.html" >Contact V2</NextLink></li>
                    </ul>
                  </li>
                  <li>
                    <NextLink href="#" >Elements</NextLink>
                    <ul className="w-300">
                      <div className="container">
                        <div className="row">
                          <div className="col-6">
                            <li><NextLink href="counter.html" >Counter</NextLink></li>
                            <li>
                              <NextLink href="blockquote.html" >Blockquote</NextLink>
                            </li>
                            <li><NextLink href="partners.html" >Partners</NextLink></li>
                            <li><NextLink href="pricing.html" >Pricing</NextLink></li>
                            <li>
                              <NextLink href="newsletter.html" >Newsletter</NextLink>
                            </li>
                            <li><NextLink href="contact.html" >Contact</NextLink></li>
                            <li><NextLink href="team.html" >Team</NextLink></li>
                            <li><NextLink href="awards.html" >Awards</NextLink></li>
                            <li><NextLink href="features.html" >Features</NextLink></li>
                            <li><NextLink href="events.html" >Events</NextLink></li>

                          </div>

                          <div className="col-6">
                            <li><NextLink href="blog.html" >Blog</NextLink></li>
                            <li><NextLink href="footer.html" >Footer</NextLink></li>
                            <li>
                              <NextLink href="portfolio.html" >Portfolio</NextLink>
                            </li>
                            <li>
                              <NextLink href="testimonials.html" >Testimonials</NextLink>
                            </li>
                            <li><NextLink href="header.html" >Header</NextLink></li>
                            <li><NextLink href="slider.html" >Slider</NextLink></li>
                            <li><NextLink href="hero.html" >Hero</NextLink></li>
                            <li><NextLink href="about-us.html" >About Us</NextLink></li>
                            <li><NextLink href="services.html" >Services</NextLink></li>
                          </div>
                        </div>
                      </div>
                    </ul>
                  </li>
                </ul>
              </nav>

              <NextLink href="#" className={styles.chatBtn}>
                Let’s chat! 
                <i className="lni lni-comments-reply"></i>
              </NextLink>

              <button type="button" className="nav-toggle-btn a-nav-toggle ms-auto">
                <span className="nav-toggle nav-toggle-sm">
                  <span className="stick stick-1"></span>
                  <span className="stick stick-2"></span>
                  <span className="stick stick-3"></span>
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
            <NextLink href="#"  className="close-menu"><i className="lni lni-close"></i></NextLink>
          </div>
          <div className="search-box">
            <form>
              <input type="text" name="search" placeholder="Search" />
              <button type="submit"><i className="lni lni-search-alt"></i></button>
            </form>
          </div>
          <ul className="mobile-menu">
            <li>
              <NextLink className="active" href="#" >Home</NextLink>
              <ul>
                <li>
                  <NextLink href="index.html" className="animsition-link" data-animsition-out-className="fade-out" 
                    data-text="Home Agency">Home Agency</NextLink>
                </li>
                <li>
                  <NextLink href="index2.html" className="animsition-link" data-animsition-out-className="fade-out" 
                    data-text="Home Studio">Home Studio</NextLink>
                </li>
                <li>
                  <NextLink href="index3.html" className="animsition-link" data-animsition-out-className="fade-out" 
                    data-text="Home Freelancer">Home Freelancer</NextLink>
                </li>
                <li>
                  <NextLink href="index4.html" className="animsition-link" data-animsition-out-className="fade-out" 
                    data-text="Home Developer">Home Developer</NextLink>
                </li>
                <li>
                  <NextLink href="index5.html" className="animsition-link" data-animsition-out-className="fade-out" 
                    data-text="Home Blogger">Home Blogger</NextLink>
                </li>
                <li>
                  <NextLink href="index7.html" className="animsition-link" data-animsition-out-className="fade-out" 
                    data-text="Home Coach">Home Coach</NextLink>
                </li>
                <li>
                  <NextLink href="index6.html" className="animsition-link" data-animsition-out-className="fade-out" 
                    data-text="Business Startup">Business Startup</NextLink>
                </li>
                <li>
                  <NextLink href="index8.html" className="animsition-link active" data-animsition-out-className="fade-out"
                     data-text="Marketing Agency">Marketing Agency</NextLink>
                </li>
                <li>
                  <NextLink href="index9.html" className="animsition-link" data-animsition-out-className="fade-out" 
                    data-text="Business Consulting">Business Consulting</NextLink>
                </li>
                <li>
                  <NextLink href="index10.html" className="animsition-link" data-animsition-out-className="fade-out" 
                    data-text="Creative Agency">Creative Agency</NextLink>
                </li>
                <li>
                  <NextLink href="index11.html" className="animsition-link" data-animsition-out-className="fade-out" 
                    data-text="Creative Agency 2">Creative Agency 2</NextLink>
                </li>
                <li>
                  <NextLink href="index12.html" className="animsition-link" data-animsition-out-className="fade-out" 
                    data-text="Home Portfolio 1">Home Portfolio 1</NextLink>
                </li>
                <li>
                  <NextLink href="index13.html" className="animsition-link" data-animsition-out-className="fade-out" 
                    data-text="Home Portfolio 2">Home Portfolio 2</NextLink>
                </li>
              </ul>
            </li>
            <li>
              <NextLink href="#" >About</NextLink>
              <ul>
                <li>
                  <NextLink href="24_about_agency.html" className="animsition-link" data-animsition-out-className="fade-out"
                     data-text="About Agency">About Agency</NextLink>
                </li>
                <li>
                  <NextLink href="25_about_business.html" className="animsition-link"
                    data-animsition-out-className="fade-out"  data-text="About Business">About
                    Business</NextLink>
                </li>
                <li>
                  <NextLink href="26_about_me.html" className="animsition-link" data-animsition-out-className="fade-out"
                     data-text="About Me">About Me</NextLink>
                </li>
              </ul>
            </li>
            <li>
              <NextLink href="#" >Portfolio</NextLink>
              <ul>
                <li>
                  <NextLink href="14_portfolio_parallax.html" className="animsition-link"
                    data-animsition-out-className="fade-out"  data-text="Porfolio Parallax">Porfolio
                    Parallax</NextLink>
                </li>
                <li>
                  <NextLink href="15_portfolio_horizontal_scroll.html" className="animsition-link"
                    data-animsition-out-className="fade-out" 
                    data-text="Porfolio Horizontal Scroll">Porfolio Horizontal Scroll</NextLink>
                </li>
                <li>
                  <NextLink href="16_portfolio_masonry.html" >Porfolio Masonary</NextLink>
                </li>
                <li>
                  <NextLink href="17_portfolio_single_layout_1.html" className="animsition-link"
                    data-animsition-out-className="fade-out"  data-text="Porfolio Single V1">Porfolio
                    Single V1</NextLink>
                </li>
                <li>
                  <NextLink href="18_portfolio_single_layout_2.html" className="animsition-link"
                    data-animsition-out-className="fade-out"  data-text="Porfolio Single V2">Porfolio
                    Single V2</NextLink>
                </li>
                <li>
                  <NextLink href="19_portfolio_single_layout_3.html" className="animsition-link"
                    data-animsition-out-className="fade-out"  data-text="Porfolio Single V3">Porfolio
                    Single V3</NextLink>
                </li>
              </ul>
            </li>
            <li>
              <NextLink href="#" >Service</NextLink>
              <ul>
                <li>
                  <NextLink href="27_service_1.html" className="animsition-link" data-animsition-out-className="fade-out"
                     data-text="Service V1">Service V1</NextLink>
                </li>
                <li>
                  <NextLink href="28_services_2.html" className="animsition-link" data-animsition-out-className="fade-out"
                     data-text="Service V2">Service V2</NextLink>
                </li>
                <li>
                  <NextLink href="29_services_3.html" className="animsition-link" data-animsition-out-className="fade-out"
                     data-text="Service V3">Service V3</NextLink>
                </li>
              </ul>
            </li>
            <li>
              <NextLink href="#" >Pages</NextLink>
              <ul>
                <li>
                  <NextLink href="32_team.html" className="animsition-link" data-animsition-out-className="fade-out" 
                    data-text="Team">Team</NextLink>
                </li>
                <li>
                  <NextLink href="33_career.html" className="animsition-link" data-animsition-out-className="fade-out"
                     data-text="Career">Career</NextLink>
                </li>
                <li>
                  <NextLink href="34_career_detail.html" className="animsition-link" data-animsition-out-className="fade-out"
                     data-text="Career Details">Career Details</NextLink>
                </li>
                <li>
                  <NextLink href="37_pricing.html" className="animsition-link" data-animsition-out-className="fade-out"
                     data-text="Pricing">Pricing</NextLink>
                </li>
                <li>
                  <NextLink href="35_404_error.html" className="animsition-link" data-animsition-out-className="fade-out"
                     data-text="404">404</NextLink>
                </li>
                <li>
                  <NextLink href="36_coming_soon.html" className="animsition-link" data-animsition-out-className="fade-out"
                     data-text="Coming Soon">Coming Soon</NextLink>
                </li>
              </ul>
            </li>
            <li>
              <NextLink href="#" >Blogs</NextLink>
              <ul>
                <li>
                  <NextLink href="blog-layout1.html" className="animsition-link" data-animsition-out-className="fade-out"
                     data-text="Blog Layout V1">Blog Layout V1</NextLink>
                </li>
                <li>
                  <NextLink href="blog-layout2.html" className="animsition-link" data-animsition-out-className="fade-out"
                     data-text="Blog Layout V2">Blog Layout V2</NextLink>
                </li>
                <li>
                  <NextLink href="blog-single-layout1.html" className="animsition-link"
                    data-animsition-out-className="fade-out"  data-text="Blog Single Layout V1">Blog
                    Single Layout V1</NextLink>
                </li>
                <li>
                  <NextLink href="blog-single-layout2.html" className="animsition-link"
                    data-animsition-out-className="fade-out"  data-text="Blog Single Layout V2">Blog
                    Single Layout V2</NextLink>
                </li>
              </ul>
            </li>
            <li>
              <NextLink href="#" >Contact</NextLink>
              <ul>
                <li>
                  <NextLink href="30_contact_1.html" className="animsition-link" data-animsition-out-className="fade-out"
                     data-text="Contact V1">Contact V1</NextLink>
                </li>
                <li>
                  <NextLink href="31_contact_2.html" className="animsition-link" data-animsition-out-className="fade-out"
                     data-text="Contact V2">Contact V2</NextLink>
                </li>
              </ul>
            </li>
            <li>
              <NextLink href="#" >Elements</NextLink>
              <ul>
                <li>
                  <NextLink className="animsition-link" date-animsition-out-className="fade-out"  data-text="Counter"
                    href="counter.html" >Counter</NextLink>
                </li>
                <li>
                  <NextLink className="animsition-link" date-animsition-out-className="fade-out" 
                    data-text="Blockquote" href="blockquote.html" >Blockquote</NextLink>
                </li>
                <li>
                  <NextLink className="animsition-link" date-animsition-out-className="fade-out"  data-text=""
                    href="partners.html" >Partners</NextLink>
                </li>
                <li>
                  <NextLink className="animsition-link" date-animsition-out-className="fade-out"  data-text=""
                    href="pricing.html" >Pricing</NextLink>
                </li>
                <li>
                  <NextLink className="animsition-link" date-animsition-out-className="fade-out"  data-text=""
                    href="newsletter.html" >Newsletter</NextLink>
                </li>
                <li>
                  <NextLink className="animsition-link" date-animsition-out-className="fade-out"  data-text="Contact"
                    href="contact.html" >Contact</NextLink>
                </li>
                <li>
                  <NextLink className="animsition-link" date-animsition-out-className="fade-out"  data-text="Team"
                    href="team.html" >Team</NextLink>
                </li>
                <li>
                  <NextLink className="animsition-link" date-animsition-out-className="fade-out"  data-text="Blog"
                    href="blog.html" >Blog</NextLink>
                </li>
                <li>
                  <NextLink className="animsition-link" date-animsition-out-className="fade-out"  data-text="Footer"
                    href="footer.html" >Footer</NextLink>
                </li>
                <li>
                  <NextLink className="animsition-link" date-animsition-out-className="fade-out" 
                    data-text="Portfolio" href="portfolio.html" >Portfolio</NextLink>
                </li>
                <li>
                  <NextLink className="animsition-link" date-animsition-out-className="fade-out" 
                    data-text="Testimonials" href="testimonials.html" >Testimonials</NextLink>
                </li>
                <li>
                  <NextLink className="animsition-link" date-animsition-out-className="fade-out"  data-text="Header"
                    href="header.html" >Header</NextLink>
                </li>
                <li>
                  <NextLink className="animsition-link" date-animsition-out-className="fade-out" 
                    data-text="Services" href="services.html" >Services</NextLink>
                </li>
                <li>
                  <NextLink className="animsition-link" date-animsition-out-className="fade-out" 
                    data-text="About Us" href="about-us.html" >About Us</NextLink>
                </li>
                <li>
                  <NextLink className="animsition-link" date-animsition-out-className="fade-out" 
                    data-text="Awards" href="awards.html" >Awards</NextLink>
                </li>
                <li>
                  <NextLink className="animsition-link" date-animsition-out-className="fade-out" 
                    data-text="Events" href="events.html" >Events</NextLink>
                </li>
                <li>
                  <NextLink className="animsition-link" date-animsition-out-className="fade-out" 
                    data-text="Features" href="features.html" >Features</NextLink>
                </li>
                <li>
                  <NextLink className="animsition-link" date-animsition-out-className="fade-out" 
                    data-text="Hero" href="hero.html" >Hero</NextLink>
                </li>
                <li>
                  <NextLink className="animsition-link" date-animsition-out-className="fade-out" 
                    data-text="Slider" href="slider.html" >Slider</NextLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <section className="banner-v8">
          <div className="container">
            <div className="banner-v8-content">
              <div className="row">
                <div className="col-lg-5">
                  <div className="banner-txt-v8 wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="0ms">
                    <h2>Boost your business up to high level</h2>
                    <p>
                      Like any great agency, we are only as good as the result we
                      deliver of our recent work
                    </p>
                    <NextLink href="#"  className="btn-default-v8">Get Started</NextLink>
                  </div>
                  banner-txt end
                  <div className="banner-wid">
                    <p>
                      If you are hurry, quick call for us. Our supporters alway
                      24/7 and will help you asap
                    </p>
                    <div className="wd-inz">
                      <span className="cinon"><i className="lni lni-phone"></i></span>
                      <div className="wl-info">
                        <span>hotline 24/7</span>
                        <h3>+65 - 3002 56 56 376</h3>
                      </div>
                    </div>
                  </div>
                  banner-wid end
                </div>
                <div className="col-lg-7">
                  <div className="banner-Image-v8 wow zoomIn" data-wow-duration="1000ms" data-wow-delay="0ms">
                    <img src="/static/static/images/banner-v8.png" alt="" />
                  </div>
                  banner-Image-v8 end
                </div>
              </div>
            </div>
            banner-v8-content end
          </div>
        </section>
        banner-v8 end
        <section className="misson-section-v8">
          <div className="container">
            <div className="mission-sec">
              <div className="row">
                <div className="col-xl-6">
                  <div className="crlce-misz wow zoomIn" data-wow-duration="1000ms" data-wow-delay="0ms">
                    <ul className="crlce-list">
                      <li className="v1">
                        <div className="crlce-info">
                          <i className="lni lni-layout"></i>
                          <h3>Website Optimization</h3>
                        </div>
                        <div className="crlce-Image">
                          <img src="/static/images/crcle-Image1.png" alt="" />
                        </div>
                        crlce-Image end
                      </li>
                      <li className="v2">
                        <div className="crlce-info">
                          <i className="lni lni-envelope"></i>
                          <h3>Email Marketing</h3>
                        </div>
                        <div className="crlce-Image">
                          <img src="/static/images/crcle-Image2.png" alt="" />
                        </div>
                        crlce-Image end
                      </li>
                      <li className="v3">
                        <div className="crlce-info">
                          <i className="lni lni-bulb"></i>
                          <h3>Marketing Strategy</h3>
                        </div>
                        <div className="crlce-Image">
                          <img src="/static/images/crcle-Image3.png" alt="" />
                        </div>
                        crlce-Image end
                      </li>
                    </ul>
                    crlce-list end
                  </div>
                  crlce-misz end
                </div>
                <div className="col-xl-6">
                  <div className="vlm-text">
                    <h2>We help you increase sales by improving SEO</h2>
                    <span>“We know good design meant that good business.”</span>
                    <p>
                      Andy has dedicated his life to learning what makes humans
                      tick. He studies, researches and reads everything hecan, and
                      shares his findings with his clients. His philosophy is to
                      learn, test, analyse, improve and re-test. His motto is stay
                      agile, so you are best positioned to respond quickly and
                      effectively to market forces.
                    </p>
                    <NextLink href="24_about_agency.html"  className="btn-default-v8 v2">Learn More</NextLink>
                  </div>
                  vlm-text end
                </div>
              </div>
            </div>
          </div>
        </section>
        mission-section-v8 end

        <section className="grow-business-v8">
          <div className="container">
            <div className="grw-content-v8">
              <div className="row align-items-center">
                <div className="col-lg-5">
                  <div className="gr-text wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="0ms">
                    <h2>Grow Your Business with Our SEO Agency</h2>
                    <h4>
                      Over 10 years Onum helping companies reach their financial
                      and branding goals
                    </h4>
                    <p>
                      Over the years, we have worked with Fortune 500s and
                      brand-new startups.. We help ambitious businesses like yours
                      generate more profits by building awareness, driving web
                      traffic, connecting with customers, and growing overall
                      sales. Give us a call.
                    </p>
                    <NextLink href="24_about_agency.html"  className="btn-default-v8 v2">Learn More</NextLink>
                    <NextLink href="https://www.youtube.com/watch?v=vw6QmjPpdy4" 
                      className="view-btn html5lightbox">
                      <span className="pl-btn"><i className="lni lni-play"></i></span>
                      <span className="vt">view our story</span>
                    </NextLink>
                  </div>
                  gr-text end
                </div>
                <div className="col-lg-7">
                  <div className="gw-Image">
                    <img src="/static/images/v2.png" alt="" />
                    <div className="gw-text">
                      <h1>25</h1>
                      <h2>
                        years <br />
                        of <br />experience
                      </h2>
                      <h3>The Leading In Digital Marketing Industrial</h3>
                    </div>
                    gw-text end
                  </div>
                  gw-Image end
                </div>
              </div>
            </div>
            <ul className="counter-sec-v6 wow fadeInUp" id="counter" data-wow-duration="1000ms" data-wow-delay="0ms">
              <li>
                <div className="counter-cont">
                  <h2 className="clr1 count">100</h2>
                  <span>satisfaction <br />
                    clients</span>
                </div>

              </li>
              <li>
                <div className="counter-cont">
                  <h2 className="clr2 count">250</h2>
                  <span>employees on worldwide</span>
                </div>

              </li>
              <li>
                <div className="counter-cont">
                  <h2 className="clr3 count">3875</h2>
                  <span>Project Completed on 60 countries</span>
                </div>

              </li>
            </ul>
          </div>
        </section>
        <section className="projects-v8">
          <div className="container">
            <div className="title-v8 text-center">
              <h2>Our Latest Projects</h2>
            </div>
            <div className="projects-tab-sec">
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item">
                  <NextLink className="nav-link active" id="all-tab" data-bs-toggle="tab" href="#all" role="tab"
                    aria-controls="all" aria-selected="true">all</NextLink>
                </li>
                <li className="nav-item">
                  <NextLink className="nav-link" id="website-tab" data-bs-toggle="tab" href="#website" role="tab"
                    aria-controls="website" aria-selected="false">Website seo</NextLink>
                </li>
                <li className="nav-item">
                  <NextLink className="nav-link" id="fb-tab" data-bs-toggle="tab" href="#fb" role="tab"
                    aria-controls="fb" aria-selected="false">fb/gg ads</NextLink>
                </li>
                <li className="nav-item">
                  <NextLink className="nav-link" id="marketing-tab" data-bs-toggle="tab" href="#marketing" role="tab"
                    aria-controls="marketing" aria-selected="false">email marketing</NextLink>
                </li>
                <li className="nav-item">
                  <NextLink className="nav-link" id="webdesign-tab" data-bs-toggle="tab" href="#webdesign" role="tab"
                    aria-controls="webdesign" aria-selected="false">web design</NextLink>
                </li>
                <li className="nav-item">
                  <NextLink className="nav-link" id="videoviral-tab" data-bs-toggle="tab" href="#video" role="tab"
                    aria-controls="videoviral-tab" aria-selected="false">video viral</NextLink>
                </li>
              </ul>
              <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="all" role="tabpanel" aria-labelledby="all-tab">
                  <div className="row projects-sliders">
                    <div className="col-lg-4">
                      <div className="project-slide">
                        <img src="/static/images/project1.jpg" alt="" className="w-100" />
                        <div className="project-slide-info">
                          <h3>
                            <NextLink href="17_portfolio_single_layout_1.html" >Taskly
                              Dashboard</NextLink>
                          </h3>
                          <p>
                            BibliU is a digital platform that provides university
                            students with personalized learning pathways..
                          </p>
                        </div>
                        <span className="category">Website SEO</span>
                        <NextLink href="#"  className="share"><i className="lni lni-share"></i></NextLink>
                      </div>
                      project-slide end
                    </div>
                    <div className="col-lg-4">
                      <div className="project-slide">
                        <img src="/static/images/project2.jpg" alt="" className="w-100" />
                        <div className="project-slide-info">
                          <h3>
                            <NextLink href="17_portfolio_single_layout_1.html" >Taskly
                              Dashboard</NextLink>
                          </h3>
                          <p>
                            BibliU is a digital platform that provides university
                            students with personalized learning pathways..
                          </p>
                        </div>
                        <span className="category">Website SEO</span>
                        <NextLink href="#"  className="share"><i className="lni lni-share"></i></NextLink>
                      </div>
                      project-slide end
                    </div>
                    <div className="col-lg-4">
                      <div className="project-slide">
                        <img src="/static/images/project3.jpg" alt="" className="w-100" />
                        <div className="project-slide-info">
                          <h3>
                            <NextLink href="17_portfolio_single_layout_1.html" >Taskly
                              Dashboard</NextLink>
                          </h3>
                          <p>
                            BibliU is a digital platform that provides university
                            students with personalized learning pathways..
                          </p>
                        </div>
                        <span className="category">Website SEO</span>
                        <NextLink href="#"  className="share"><i className="lni lni-share"></i></NextLink>
                      </div>
                      project-slide end
                    </div>
                    <div className="col-lg-4">
                      <div className="project-slide">
                        <img src="/static/images/project1.jpg" alt="" className="w-100" />
                        <div className="project-slide-info">
                          <h3>
                            <NextLink href="17_portfolio_single_layout_1.html" >Taskly
                              Dashboard</NextLink>
                          </h3>
                          <p>
                            BibliU is a digital platform that provides university
                            students with personalized learning pathways..
                          </p>
                        </div>
                        <span className="category">Website SEO</span>
                        <NextLink href="#"  className="share"><i className="lni lni-share"></i></NextLink>
                      </div>
                      project-slide end
                    </div>
                    <div className="col-lg-4">
                      <div className="project-slide">
                        <img src="/static/images/project2.jpg" alt="" className="w-100" />
                        <div className="project-slide-info">
                          <h3>
                            <NextLink href="17_portfolio_single_layout_1.html" >Taskly
                              Dashboard</NextLink>
                          </h3>
                          <p>
                            BibliU is a digital platform that provides university
                            students with personalized learning pathways..
                          </p>
                        </div>
                        <span className="category">Website SEO</span>
                        <NextLink href="#"  className="share"><i className="lni lni-share"></i></NextLink>
                      </div>
                      project-slide end
                    </div>
                    <div className="col-lg-4">
                      <div className="project-slide">
                        <img src="/static/images/project3.jpg" alt="" className="w-100" />
                        <div className="project-slide-info">
                          <h3>
                            <NextLink href="17_portfolio_single_layout_1.html" >Taskly
                              Dashboard</NextLink>
                          </h3>
                          <p>
                            BibliU is a digital platform that provides university
                            students with personalized learning pathways..
                          </p>
                        </div>
                        <span className="category">Website SEO</span>
                        <NextLink href="#"  className="share"><i className="lni lni-share"></i></NextLink>
                      </div>
                      project-slide end
                    </div>
                  </div>
                  projects-sliders end
                </div>
                <div className="tab-pane fade" id="website" role="tabpanel" aria-labelledby="website-tab">
                  <div className="row projects-sliders">
                    <div className="col-lg-4">
                      <div className="project-slide">
                        <img src="/static/images/project1.jpg" alt="" className="w-100" />
                        <div className="project-slide-info">
                          <h3>
                            <NextLink href="17_portfolio_single_layout_1.html" >Taskly
                              Dashboard</NextLink>
                          </h3>
                          <p>
                            BibliU is a digital platform that provides university
                            students with personalized learning pathways..
                          </p>
                        </div>
                        <span className="category">Website SEO</span>
                        <NextLink href="#"  className="share"><i className="lni lni-share"></i></NextLink>
                      </div>
                      project-slide end
                    </div>
                    <div className="col-lg-4">
                      <div className="project-slide">
                        <img src="/static/images/project2.jpg" alt="" className="w-100" />
                        <div className="project-slide-info">
                          <h3>
                            <NextLink href="17_portfolio_single_layout_1.html" >Taskly
                              Dashboard</NextLink>
                          </h3>
                          <p>
                            BibliU is a digital platform that provides university
                            students with personalized learning pathways..
                          </p>
                        </div>
                        <span className="category">Website SEO</span>
                        <NextLink href="#"  className="share"><i className="lni lni-share"></i></NextLink>
                      </div>
                      project-slide end
                    </div>
                    <div className="col-lg-4">
                      <div className="project-slide">
                        <img src="/static/images/project3.jpg" alt="" className="w-100" />
                        <div className="project-slide-info">
                          <h3>
                            <NextLink href="17_portfolio_single_layout_1.html" >Taskly
                              Dashboard</NextLink>
                          </h3>
                          <p>
                            BibliU is a digital platform that provides university
                            students with personalized learning pathways..
                          </p>
                        </div>
                        <span className="category">Website SEO</span>
                        <NextLink href="#"  className="share"><i className="lni lni-share"></i></NextLink>
                      </div>
                      project-slide end
                    </div>
                    <div className="col-lg-4">
                      <div className="project-slide">
                        <img src="/static/images/project1.jpg" alt="" className="w-100" />
                        <div className="project-slide-info">
                          <h3>
                            <NextLink href="17_portfolio_single_layout_1.html" >Taskly
                              Dashboard</NextLink>
                          </h3>
                          <p>
                            BibliU is a digital platform that provides university
                            students with personalized learning pathways..
                          </p>
                        </div>
                        <span className="category">Website SEO</span>
                        <NextLink href="#"  className="share"><i className="lni lni-share"></i></NextLink>
                      </div>
                      project-slide end
                    </div>
                    <div className="col-lg-4">
                      <div className="project-slide">
                        <img src="/static/images/project2.jpg" alt="" className="w-100" />
                        <div className="project-slide-info">
                          <h3>
                            <NextLink href="17_portfolio_single_layout_1.html" >Taskly
                              Dashboard</NextLink>
                          </h3>
                          <p>
                            BibliU is a digital platform that provides university
                            students with personalized learning pathways..
                          </p>
                        </div>
                        <span className="category">Website SEO</span>
                        <NextLink href="#"  className="share"><i className="lni lni-share"></i></NextLink>
                      </div>
                      project-slide end
                    </div>
                    <div className="col-lg-4">
                      <div className="project-slide">
                        <img src="/static/images/project3.jpg" alt="" className="w-100" />
                        <div className="project-slide-info">
                          <h3>
                            <NextLink href="17_portfolio_single_layout_1.html" >Taskly
                              Dashboard</NextLink>
                          </h3>
                          <p>
                            BibliU is a digital platform that provides university
                            students with personalized learning pathways..
                          </p>
                        </div>
                        <span className="category">Website SEO</span>
                        <NextLink href="#"  className="share"><i className="lni lni-share"></i></NextLink>
                      </div>
                      project-slide end
                    </div>
                  </div>
                  projects-sliders end
                </div>
                <div className="tab-pane fade" id="fb" role="tabpanel" aria-labelledby="fb-tab">
                  <div className="row projects-sliders">
                    <div className="col-lg-4">
                      <div className="project-slide">
                        <img src="/static/images/project1.jpg" alt="" className="w-100" />
                        <div className="project-slide-info">
                          <h3>
                            <NextLink href="17_portfolio_single_layout_1.html" >Taskly
                              Dashboard</NextLink>
                          </h3>
                          <p>
                            BibliU is a digital platform that provides university
                            students with personalized learning pathways..
                          </p>
                        </div>
                        <span className="category">Website SEO</span>
                        <NextLink href="#"  className="share"><i className="lni lni-share"></i></NextLink>
                      </div>
                      project-slide end
                    </div>
                    <div className="col-lg-4">
                      <div className="project-slide">
                        <img src="/static/images/project2.jpg" alt="" className="w-100" />
                        <div className="project-slide-info">
                          <h3>
                            <NextLink href="17_portfolio_single_layout_1.html" >Taskly
                              Dashboard</NextLink>
                          </h3>
                          <p>
                            BibliU is a digital platform that provides university
                            students with personalized learning pathways..
                          </p>
                        </div>
                        <span className="category">Website SEO</span>
                        <NextLink href="#"  className="share"><i className="lni lni-share"></i></NextLink>
                      </div>
                      project-slide end
                    </div>
                    <div className="col-lg-4">
                      <div className="project-slide">
                        <img src="/static/images/project3.jpg" alt="" className="w-100" />
                        <div className="project-slide-info">
                          <h3>
                            <NextLink href="17_portfolio_single_layout_1.html" >Taskly
                              Dashboard</NextLink>
                          </h3>
                          <p>
                            BibliU is a digital platform that provides university
                            students with personalized learning pathways..
                          </p>
                        </div>
                        <span className="category">Website SEO</span>
                        <NextLink href="#"  className="share"><i className="lni lni-share"></i></NextLink>
                      </div>
                      project-slide end
                    </div>
                    <div className="col-lg-4">
                      <div className="project-slide">
                        <img src="/static/images/project1.jpg" alt="" className="w-100" />
                        <div className="project-slide-info">
                          <h3>
                            <NextLink href="17_portfolio_single_layout_1.html" >Taskly
                              Dashboard</NextLink>
                          </h3>
                          <p>
                            BibliU is a digital platform that provides university
                            students with personalized learning pathways..
                          </p>
                        </div>
                        <span className="category">Website SEO</span>
                        <NextLink href="#"  className="share"><i className="lni lni-share"></i></NextLink>
                      </div>
                      project-slide end
                    </div>
                    <div className="col-lg-4">
                      <div className="project-slide">
                        <img src="/static/images/project2.jpg" alt="" className="w-100" />
                        <div className="project-slide-info">
                          <h3>
                            <NextLink href="17_portfolio_single_layout_1.html" >Taskly
                              Dashboard</NextLink>
                          </h3>
                          <p>
                            BibliU is a digital platform that provides university
                            students with personalized learning pathways..
                          </p>
                        </div>
                        <span className="category">Website SEO</span>
                        <NextLink href="#"  className="share"><i className="lni lni-share"></i></NextLink>
                      </div>
                      project-slide end
                    </div>
                    <div className="col-lg-4">
                      <div className="project-slide">
                        <img src="/static/images/project3.jpg" alt="" className="w-100" />
                        <div className="project-slide-info">
                          <h3>
                            <NextLink href="17_portfolio_single_layout_1.html" >Taskly
                              Dashboard</NextLink>
                          </h3>
                          <p>
                            BibliU is a digital platform that provides university
                            students with personalized learning pathways..
                          </p>
                        </div>
                        <span className="category">Website SEO</span>
                        <NextLink href="#"  className="share"><i className="lni lni-share"></i></NextLink>
                      </div>
                      project-slide end
                    </div>
                  </div>
                  projects-sliders end
                </div>
                <div className="tab-pane fade" id="marketing" role="tabpanel" aria-labelledby="marketing-tab">
                  <div className="row projects-sliders">
                    <div className="col-lg-4">
                      <div className="project-slide">
                        <img src="/static/images/project1.jpg" alt="" className="w-100" />
                        <div className="project-slide-info">
                          <h3>
                            <NextLink href="17_portfolio_single_layout_1.html" >Taskly
                              Dashboard</NextLink>
                          </h3>
                          <p>
                            BibliU is a digital platform that provides university
                            students with personalized learning pathways..
                          </p>
                        </div>
                        <span className="category">Website SEO</span>
                        <NextLink href="#"  className="share"><i className="lni lni-share"></i></NextLink>
                      </div>
                      project-slide end
                    </div>
                    <div className="col-lg-4">
                      <div className="project-slide">
                        <img src="/static/images/project2.jpg" alt="" className="w-100" />
                        <div className="project-slide-info">
                          <h3>
                            <NextLink href="17_portfolio_single_layout_1.html" >Taskly
                              Dashboard</NextLink>
                          </h3>
                          <p>
                            BibliU is a digital platform that provides university
                            students with personalized learning pathways..
                          </p>
                        </div>
                        <span className="category">Website SEO</span>
                        <NextLink href="#"  className="share"><i className="lni lni-share"></i></NextLink>
                      </div>
                      project-slide end
                    </div>
                    <div className="col-lg-4">
                      <div className="project-slide">
                        <img src="/static/images/project3.jpg" alt="" className="w-100" />
                        <div className="project-slide-info">
                          <h3>
                            <NextLink href="17_portfolio_single_layout_1.html" >Taskly
                              Dashboard</NextLink>
                          </h3>
                          <p>
                            BibliU is a digital platform that provides university
                            students with personalized learning pathways..
                          </p>
                        </div>
                        <span className="category">Website SEO</span>
                        <NextLink href="#"  className="share"><i className="lni lni-share"></i></NextLink>
                      </div>
                      project-slide end
                    </div>
                    <div className="col-lg-4">
                      <div className="project-slide">
                        <img src="/static/images/project1.jpg" alt="" className="w-100" />
                        <div className="project-slide-info">
                          <h3>
                            <NextLink href="17_portfolio_single_layout_1.html" >Taskly
                              Dashboard</NextLink>
                          </h3>
                          <p>
                            BibliU is a digital platform that provides university
                            students with personalized learning pathways..
                          </p>
                        </div>
                        <span className="category">Website SEO</span>
                        <NextLink href="#"  className="share"><i className="lni lni-share"></i></NextLink>
                      </div>
                      project-slide end
                    </div>
                    <div className="col-lg-4">
                      <div className="project-slide">
                        <img src="/static/images/project2.jpg" alt="" className="w-100" />
                        <div className="project-slide-info">
                          <h3>
                            <NextLink href="17_portfolio_single_layout_1.html" >Taskly
                              Dashboard</NextLink>
                          </h3>
                          <p>
                            BibliU is a digital platform that provides university
                            students with personalized learning pathways..
                          </p>
                        </div>
                        <span className="category">Website SEO</span>
                        <NextLink href="#"  className="share"><i className="lni lni-share"></i></NextLink>
                      </div>
                      project-slide end
                    </div>
                    <div className="col-lg-4">
                      <div className="project-slide">
                        <img src="/static/images/project3.jpg" alt="" className="w-100" />
                        <div className="project-slide-info">
                          <h3>
                            <NextLink href="17_portfolio_single_layout_1.html" >Taskly
                              Dashboard</NextLink>
                          </h3>
                          <p>
                            BibliU is a digital platform that provides university
                            students with personalized learning pathways..
                          </p>
                        </div>
                        <span className="category">Website SEO</span>
                        <NextLink href="#"  className="share"><i className="lni lni-share"></i></NextLink>
                      </div>
                      project-slide end
                    </div>
                  </div>
                  projects-sliders end
                </div>
                <div className="tab-pane fade" id="webdesign" role="tabpanel" aria-labelledby="webdesign-tab">
                  <div className="row projects-sliders">
                    <div className="col-lg-4">
                      <div className="project-slide">
                        <img src="/static/images/project1.jpg" alt="" className="w-100" />
                        <div className="project-slide-info">
                          <h3>
                            <NextLink href="17_portfolio_single_layout_1.html" >Taskly
                              Dashboard</NextLink>
                          </h3>
                          <p>
                            BibliU is a digital platform that provides university
                            students with personalized learning pathways..
                          </p>
                        </div>
                        <span className="category">Website SEO</span>
                        <NextLink href="#"  className="share"><i className="lni lni-share"></i></NextLink>
                      </div>
                      project-slide end
                    </div>
                    <div className="col-lg-4">
                      <div className="project-slide">
                        <img src="/static/images/project2.jpg" alt="" className="w-100" />
                        <div className="project-slide-info">
                          <h3>
                            <NextLink href="17_portfolio_single_layout_1.html" >Taskly
                              Dashboard</NextLink>
                          </h3>
                          <p>
                            BibliU is a digital platform that provides university
                            students with personalized learning pathways..
                          </p>
                        </div>
                        <span className="category">Website SEO</span>
                        <NextLink href="#"  className="share"><i className="lni lni-share"></i></NextLink>
                      </div>
                      project-slide end
                    </div>
                    <div className="col-lg-4">
                      <div className="project-slide">
                        <img src="/static/images/project3.jpg" alt="" className="w-100" />
                        <div className="project-slide-info">
                          <h3>
                            <NextLink href="17_portfolio_single_layout_1.html" >Taskly
                              Dashboard</NextLink>
                          </h3>
                          <p>
                            BibliU is a digital platform that provides university
                            students with personalized learning pathways..
                          </p>
                        </div>
                        <span className="category">Website SEO</span>
                        <NextLink href="#"  className="share"><i className="lni lni-share"></i></NextLink>
                      </div>
                      project-slide end
                    </div>
                    <div className="col-lg-4">
                      <div className="project-slide">
                        <img src="/static/images/project1.jpg" alt="" className="w-100" />
                        <div className="project-slide-info">
                          <h3>
                            <NextLink href="17_portfolio_single_layout_1.html" >Taskly
                              Dashboard</NextLink>
                          </h3>
                          <p>
                            BibliU is a digital platform that provides university
                            students with personalized learning pathways..
                          </p>
                        </div>
                        <span className="category">Website SEO</span>
                        <NextLink href="#"  className="share"><i className="lni lni-share"></i></NextLink>
                      </div>
                      project-slide end
                    </div>
                    <div className="col-lg-4">
                      <div className="project-slide">
                        <img src="/static/images/project2.jpg" alt="" className="w-100" />
                        <div className="project-slide-info">
                          <h3>
                            <NextLink href="17_portfolio_single_layout_1.html" >Taskly
                              Dashboard</NextLink>
                          </h3>
                          <p>
                            BibliU is a digital platform that provides university
                            students with personalized learning pathways..
                          </p>
                        </div>
                        <span className="category">Website SEO</span>
                        <NextLink href="#"  className="share"><i className="lni lni-share"></i></NextLink>
                      </div>
                      project-slide end
                    </div>
                    <div className="col-lg-4">
                      <div className="project-slide">
                        <img src="/static/images/project3.jpg" alt="" className="w-100" />
                        <div className="project-slide-info">
                          <h3>
                            <NextLink href="17_portfolio_single_layout_1.html" >Taskly
                              Dashboard</NextLink>
                          </h3>
                          <p>
                            BibliU is a digital platform that provides university
                            students with personalized learning pathways..
                          </p>
                        </div>
                        <span className="category">Website SEO</span>
                        <NextLink href="#"  className="share"><i className="lni lni-share"></i></NextLink>
                      </div>
                      project-slide end
                    </div>
                  </div>
                  projects-sliders end
                </div>
                <div className="tab-pane fade" id="video" role="tabpanel" aria-labelledby="videoviral-tab">
                  <div className="row projects-sliders">
                    <div className="col-lg-4">
                      <div className="project-slide">
                        <img src="/static/images/project1.jpg" alt="" className="w-100" />
                        <div className="project-slide-info">
                          <h3>
                            <NextLink href="17_portfolio_single_layout_1.html" >Taskly
                              Dashboard</NextLink>
                          </h3>
                          <p>
                            BibliU is a digital platform that provides university
                            students with personalized learning pathways..
                          </p>
                        </div>
                        <span className="category">Website SEO</span>
                        <NextLink href="#"  className="share"><i className="lni lni-share"></i></NextLink>
                      </div>
                      project-slide end
                    </div>
                    <div className="col-lg-4">
                      <div className="project-slide">
                        <img src="/static/images/project2.jpg" alt="" className="w-100" />
                        <div className="project-slide-info">
                          <h3>
                            <NextLink href="17_portfolio_single_layout_1.html" >Taskly
                              Dashboard</NextLink>
                          </h3>
                          <p>
                            BibliU is a digital platform that provides university
                            students with personalized learning pathways..
                          </p>
                        </div>
                        <span className="category">Website SEO</span>
                        <NextLink href="#"  className="share"><i className="lni lni-share"></i></NextLink>
                      </div>
                      project-slide end
                    </div>
                    <div className="col-lg-4">
                      <div className="project-slide">
                        <img src="/static/images/project3.jpg" alt="" className="w-100" />
                        <div className="project-slide-info">
                          <h3>
                            <NextLink href="17_portfolio_single_layout_1.html" >Taskly
                              Dashboard</NextLink>
                          </h3>
                          <p>
                            BibliU is a digital platform that provides university
                            students with personalized learning pathways..
                          </p>
                        </div>
                        <span className="category">Website SEO</span>
                        <NextLink href="#"  className="share"><i className="lni lni-share"></i></NextLink>
                      </div>
                      project-slide end
                    </div>
                    <div className="col-lg-4">
                      <div className="project-slide">
                        <img src="/static/images/project1.jpg" alt="" className="w-100" />
                        <div className="project-slide-info">
                          <h3>
                            <NextLink href="17_portfolio_single_layout_1.html" >Taskly
                              Dashboard</NextLink>
                          </h3>
                          <p>
                            BibliU is a digital platform that provides university
                            students with personalized learning pathways..
                          </p>
                        </div>
                        <span className="category">Website SEO</span>
                        <NextLink href="#"  className="share"><i className="lni lni-share"></i></NextLink>
                      </div>
                      project-slide end
                    </div>
                    <div className="col-lg-4">
                      <div className="project-slide">
                        <img src="/static/images/project2.jpg" alt="" className="w-100" />
                        <div className="project-slide-info">
                          <h3>
                            <NextLink href="17_portfolio_single_layout_1.html" >Taskly
                              Dashboard</NextLink>
                          </h3>
                          <p>
                            BibliU is a digital platform that provides university
                            students with personalized learning pathways..
                          </p>
                        </div>
                        <span className="category">Website SEO</span>
                        <NextLink href="#"  className="share"><i className="lni lni-share"></i></NextLink>
                      </div>
                      project-slide end
                    </div>
                    <div className="col-lg-4">
                      <div className="project-slide">
                        <img src="/static/images/project3.jpg" alt="" className="w-100" />
                        <div className="project-slide-info">
                          <h3>
                            <NextLink href="17_portfolio_single_layout_1.html" >Taskly
                              Dashboard</NextLink>
                          </h3>
                          <p>
                            BibliU is a digital platform that provides university
                            students with personalized learning pathways..
                          </p>
                        </div>
                        <span className="category">Website SEO</span>
                        <NextLink href="#"  className="share"><i className="lni lni-share"></i></NextLink>
                      </div>
                      project-slide end
                    </div>
                  </div>
                  projects-sliders end
                </div>
              </div>
            </div>
            projects-tab-sec end
          </div>
        </section>
        projects-v8 end

        <section className="why-us-v8">
          <div className="container">
            <div className="title-v8 text-center wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="0ms">
              <h2>Why choose Milseo</h2>
              <p>
                Our strategy includes consistently evolving, to ensure we’re
                producing exceptional SEO for business.
              </p>
            </div>
            title-v8 end
            <div className="row fzt-row">
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="our-fzt">
                  <h3>
                    <NextLink href="28_services_2.html" >Competitor Research</NextLink>
                  </h3>
                  <p>Help business with their brading identity system better</p>
                  <span className="fzt-icon v1"><i className="lni lni-users"></i></span>
                </div>
                our-fzt end
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="our-fzt">
                  <h3>
                    <NextLink href="28_services_2.html" >Innovatives Ideas & Strategy</NextLink>
                  </h3>
                  <p>
                    Reach out your clients better through website & mobile app
                  </p>
                  <span className="fzt-icon v2"><i className="lni lni-invention"></i></span>
                </div>
                our-fzt end
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="our-fzt">
                  <h3>
                    <NextLink href="28_services_2.html" >Affordable Cost</NextLink>
                  </h3>
                  <p>
                    Building plan & strategy for your business by social marketing
                  </p>
                  <span className="fzt-icon v3"><i className="lni lni-money-protection"></i></span>
                </div>
                our-fzt end
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="our-fzt">
                  <h3>
                    <NextLink href="28_services_2.html" >Dedicated Support & 24/7</NextLink>
                  </h3>
                  <p>Improve quality of product with high resolution photos</p>
                  <span className="fzt-icon v4"><i className="lni lni-headphone"></i></span>
                </div>
                our-fzt end
              </div>
            </div>
          </div>
        </section>
        why-us-v8 end

        <section className="testi-v3-sec">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-5">
                <div className="testi-v3-slider">
                  <div className="testi-v3-slide current" id="tab1">
                    <span className="t-icon"><i className="lni lni-quotation"></i></span>
                    <p>
                      I don’t know what else to say, this is something that you
                      haven’t seen before. Unique design, lightweight, and
                      outstanding support.
                    </p>
                    <h3>Edison Cavani</h3>
                    <span>Product Management at Spotify</span>
                  </div>
                  testi-v3-slide end
                  <div className="testi-v3-slide" id="tab2">
                    <span className="t-icon"><i className="lni lni-quotation"></i></span>
                    <p>
                      this is something that you haven’t seen before. Unique
                      design, lightweight, and outstanding support.
                    </p>
                    <h3>Edison Cavani</h3>
                    <span>Product Management at Spotify</span>
                  </div>
                  testi-v3-slide end
                  <div className="testi-v3-slide" id="tab3">
                    <span className="t-icon"><i className="lni lni-quotation"></i></span>
                    <p>
                      I don’t know what else to say before. Unique design,
                      lightweight, and outstanding support.
                    </p>
                    <h3>Logan Cee</h3>
                    <span>Product Management at Spotify</span>
                  </div>
                  testi-v3-slide end
                  <div className="testi-v3-slide" id="tab4">
                    <span className="t-icon"><i className="lni lni-quotation"></i></span>
                    <p>
                      I don’t know what else to say, this is something that you
                      haven’t seen before. Unique design, lightweight, and
                      outstanding support.
                    </p>
                    <h3>Edison Cavani</h3>
                    <span>Product Management at Spotify</span>
                  </div>
                  testi-v3-slide end
                  <div className="testi-v3-slide" id="tab5">
                    <span className="t-icon"><i className="lni lni-quotation"></i></span>
                    <p>
                      this is something that you haven’t seen before. Unique
                      design, lightweight, and outstanding support.
                    </p>
                    <h3>Edison Cavani</h3>
                    <span>Product Management at Spotify</span>
                  </div>
                  testi-v3-slide end
                  <div className="testi-v3-slide" id="tab6">
                    <span className="t-icon"><i className="lni lni-quotation"></i></span>
                    <p>
                      I don’t know what else to say before. Unique design,
                      lightweight, and outstanding support.
                    </p>
                    <h3>Logan Cee</h3>
                    <span>Product Management at Spotify</span>
                  </div>
                  testi-v3-slide end
                </div>
                testi-v3-slider end
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

        <section className="partners-v8-sec">
          <div className="container">
            <div className="title-v8 text-center wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="0ms">
              <h2>Our Partners</h2>
              <p className="mw-100">
                Your succesful, our reputation! We are proaud to accompany more
                than 30 major brands
              </p>
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

        <section className="blog-section-v7 v8">
          <div className="container">
            <div className="title-v8 text-center wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="0ms">
              <h2>Latest Articles</h2>
            </div>
            title-v8 end
            <div className="blog-posts-v7">
              <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="blog-post-v7">
                    <div className="blog-thumbnail">
                      <img src="/static/images/blog4.jpg" alt="" className="w-100" />
                    </div>
                    <div className="blog-info">
                      <ul className="meta">
                        <li><NextLink href="#" >tips</NextLink></li>
                        <li><NextLink href="#" >May 17, 2020</NextLink></li>
                      </ul>
                      <h2>
                        <NextLink href="blog-single-layout2.html" >How to optimization cost for GG
                          Ads?</NextLink>
                      </h2>
                      <ul className="meta2">
                        <li><i className="lni lni-comments"></i> 25</li>
                        <li><i className="lni lni-eye"></i> 32.6K</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="blog-post-v7">
                    <div className="blog-thumbnail">
                      <img src="/static/images/blog5.jpg" alt="" className="w-100" />
                    </div>
                    <div className="blog-info">
                      <ul className="meta">
                        <li><NextLink href="#" >community </NextLink></li>
                        <li><NextLink href="#" >apr 28, 2020</NextLink></li>
                      </ul>
                      <h2>
                        <NextLink href="blog-single-layout2.html" >Workflow Strategy</NextLink>
                      </h2>
                      <ul className="meta2">
                        <li><i className="lni lni-comments"></i> 4</li>
                        <li><i className="lni lni-eye"></i> 7.2K</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="blog-post-v7">
                    <div className="blog-thumbnail">
                      <img src="/static/images/blog6.jpg" alt="" className="w-100" />
                    </div>
                    <div className="blog-info">
                      <ul className="meta">
                        <li><NextLink href="#" >life style</NextLink></li>
                        <li><NextLink href="#" >apr 8, 2020</NextLink></li>
                      </ul>
                      <h2>
                        <NextLink href="blog-single-layout2.html" >Elena Holson Shared: Marketing
                          Vision 2020</NextLink>
                      </h2>
                      <ul className="meta2">
                        <li><i className="lni lni-comments"></i> 18</li>
                        <li><i className="lni lni-eye"></i> 57.4K</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="newslettter-sec-v7">
          <div className="container">
            <div className="news-letter-v7 wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="0ms">
              <div className="row align-items-center">
                <div className="col-lg-5">
                  <div className="newsletter-text">
                    <h2>Keep Connected</h2>
                    <span>Get updates by subscribe my weekly newsletter</span>
                  </div>
                </div>
                <div className="col-lg-7">
                  <form className="newsletter-form-v7">
                    <input type="email" name="email" placeholder="Email Address" />
                    <button type="submit">Subscribe</button>
                    <i className="lni lni-envelope"></i>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="footer-v6 v8">
          <div className="container">
            <div className="footer-content-v6">
              <div className="row">
                <div className="col-lg-6">
                  <div className="widget-abt wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="0ms">
                    <h2>Boost your business up to high level</h2>
                    <h2>Start by<NextLink href="#" > saying hi</NextLink></h2>
                  </div>
                </div>
                <div className="col-lg-2">
                  <div className="widget-ft-services">
                    <h3>Services</h3>
                    <ul>
                      <li><NextLink href="#" >SEO Marketing</NextLink></li>
                      <li><NextLink href="#" >SEO Services</NextLink></li>
                      <li><NextLink href="#" >Pay Per Click</NextLink></li>
                      <li><NextLink href="#" >SEO Audit</NextLink></li>
                      <li><NextLink href="#" >FB/GG Ads</NextLink></li>
                      <li><NextLink href="#" >Email Marketing</NextLink></li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="get-touch-txt mw-100 wow fadeInRight" data-wow-duration="1000ms"
                    data-wow-delay="0ms">
                    <h5>contact</h5>
                    <h4>90 Fairground Rd, FL 3290, United States</h4>
                    <NextLink href="#" >hello@milseo.co</NextLink>
                    <ul>
                      <li>
                        <NextLink href="15_portfolio_horizontal_scroll.html" >Works</NextLink>
                      </li>
                      <li><NextLink href="24_about_agency.html" >About</NextLink></li>
                      <li><NextLink href="blog-layout1.html" >News</NextLink></li>
                      <li><NextLink href="30_contact_1.html" >Contact</NextLink></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="mile-bottom-footer">
                <div className="row align-items-center">
                  <div className="col-lg-8">
                    <div className="btm-copy">
                      <img src="/static/images/logo8.png" alt="" />
                      <p>© 2020. All Rights Reserved</p>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <ul className="social-header">
                      <li>
                        <NextLink href="#" ><i className="lni lni-twitter-original"></i></NextLink>
                      </li>
                      <li>
                        <NextLink href="#" ><i className="lni lni-facebook-filled"></i></NextLink>
                      </li>
                      <li>
                        <NextLink href="#" ><i className="lni lni-instagram-original"></i></NextLink>
                      </li>
                      <li>
                        <NextLink href="#" ><i className="lni lni-pinterest"></i></NextLink>
                      </li>
                      <li>
                        <NextLink href="#" ><i className="lni lni-youtube"></i></NextLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Page>
  )
}

export default Home
