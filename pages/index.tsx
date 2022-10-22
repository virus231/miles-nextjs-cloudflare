import classNames from 'classnames'
import { NextLink } from '../app/components/BaseNextLink'
import styles from '../styles/Home.module.scss'
import { NextPageWithLayout } from './_app'
import { Layout } from '../app/components/Layout'
import { Navigation } from '../app/components/Navigation'


const HomePage: NextPageWithLayout = () => {

  return (
    <>
      <Navigation />

      <section className={styles.bannerV8}>
        <div className="container">
          <div className={styles.bannerV8Content}>
            <div className="row">
              <div className="col-lg-5">
                <div className={classNames(styles.bannerTxtV8, "wow fadeInUp")}
                  data-wow-duration="1000ms"
                  data-wow-delay="0ms"
                >
                  <h2>Boost your business up to high level</h2>
                  <p>
                    Like any great agency, we are only as good as the result we
                    deliver of our recent work
                  </p>
                  <NextLink href="#" className={styles.btnDefaultV8}>Get Started</NextLink>
                </div>
                <div className={styles.bannerWid}>
                  <p>
                    If you are hurry, quick call for us. Our supporters alway
                    24/7 and will help you asap
                  </p>
                  <div className={styles.wdInz}>
                    <span className={styles.cinon}><i className="lni lni-phone"></i></span>
                    <div className={styles.wlInfo}>
                      <span>hotline 24/7</span>
                      <h3>+65 - 3002 56 56 376</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className={styles.bannerImgV8}
                  data-wow-duration="1000ms"
                  data-wow-delay="0ms">
                  <img src="/static/images/banner-v8.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                        <img src="/static/images/crcle-img1.png" alt="" />
                      </div>
                      crlce-Image end
                    </li>
                    <li className="v2">
                      <div className="crlce-info">
                        <i className="lni lni-envelope"></i>
                        <h3>Email Marketing</h3>
                      </div>
                      <div className="crlce-Image">
                        <img src="/static/images/crcle-img2.png" alt="" />
                      </div>
                      crlce-Image end
                    </li>
                    <li className="v3">
                      <div className="crlce-info">
                        <i className="lni lni-bulb"></i>
                        <h3>Marketing Strategy</h3>
                      </div>
                      <div className="crlce-Image">
                        <img src="/static/images/crcle-img3.png" alt="" />
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
                  <NextLink href="24_about_agency.html" className="btn-default-v8 v2">Learn More</NextLink>
                </div>
                vlm-text end
              </div>
            </div>
          </div>
        </div>
      </section>

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
                  <NextLink href="24_about_agency.html" className="btn-default-v8 v2">Learn More</NextLink>
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
                      <NextLink href="#" className="share"><i className="lni lni-share"></i></NextLink>
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
                      <NextLink href="#" className="share"><i className="lni lni-share"></i></NextLink>
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
                      <NextLink href="#" className="share"><i className="lni lni-share"></i></NextLink>
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
                      <NextLink href="#" className="share"><i className="lni lni-share"></i></NextLink>
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
                      <NextLink href="#" className="share"><i className="lni lni-share"></i></NextLink>
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
                      <NextLink href="#" className="share"><i className="lni lni-share"></i></NextLink>
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
                      <NextLink href="#" className="share"><i className="lni lni-share"></i></NextLink>
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
                      <NextLink href="#" className="share"><i className="lni lni-share"></i></NextLink>
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
                      <NextLink href="#" className="share"><i className="lni lni-share"></i></NextLink>
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
                      <NextLink href="#" className="share"><i className="lni lni-share"></i></NextLink>
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
                      <NextLink href="#" className="share"><i className="lni lni-share"></i></NextLink>
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
                      <NextLink href="#" className="share"><i className="lni lni-share"></i></NextLink>
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
                      <NextLink href="#" className="share"><i className="lni lni-share"></i></NextLink>
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
                      <NextLink href="#" className="share"><i className="lni lni-share"></i></NextLink>
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
                      <NextLink href="#" className="share"><i className="lni lni-share"></i></NextLink>
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
                      <NextLink href="#" className="share"><i className="lni lni-share"></i></NextLink>
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
                      <NextLink href="#" className="share"><i className="lni lni-share"></i></NextLink>
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
                      <NextLink href="#" className="share"><i className="lni lni-share"></i></NextLink>
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
                      <NextLink href="#" className="share"><i className="lni lni-share"></i></NextLink>
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
                      <NextLink href="#" className="share"><i className="lni lni-share"></i></NextLink>
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
                      <NextLink href="#" className="share"><i className="lni lni-share"></i></NextLink>
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
                      <NextLink href="#" className="share"><i className="lni lni-share"></i></NextLink>
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
                      <NextLink href="#" className="share"><i className="lni lni-share"></i></NextLink>
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
                      <NextLink href="#" className="share"><i className="lni lni-share"></i></NextLink>
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
                      <NextLink href="#" className="share"><i className="lni lni-share"></i></NextLink>
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
                      <NextLink href="#" className="share"><i className="lni lni-share"></i></NextLink>
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
                      <NextLink href="#" className="share"><i className="lni lni-share"></i></NextLink>
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
                      <NextLink href="#" className="share"><i className="lni lni-share"></i></NextLink>
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
                      <NextLink href="#" className="share"><i className="lni lni-share"></i></NextLink>
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
                      <NextLink href="#" className="share"><i className="lni lni-share"></i></NextLink>
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
                      <NextLink href="#" className="share"><i className="lni lni-share"></i></NextLink>
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
                      <NextLink href="#" className="share"><i className="lni lni-share"></i></NextLink>
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
                      <NextLink href="#" className="share"><i className="lni lni-share"></i></NextLink>
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
                      <NextLink href="#" className="share"><i className="lni lni-share"></i></NextLink>
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
                      <NextLink href="#" className="share"><i className="lni lni-share"></i></NextLink>
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
                      <NextLink href="#" className="share"><i className="lni lni-share"></i></NextLink>
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
    </>
  )
}

HomePage.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout title="Home">{page}</Layout>;
};

export default HomePage
