import { NextPageWithLayout } from './_app';
import { Layout } from '../app/components/Layout';
import {Testi} from '../app/components/Testi';
import {KeepConnected} from '../app/components/KeepConnected';
import Carousel, { CarouselArrows, CarouselDots } from '../app/components/carousel';
import { carouselsExample } from './index';
import { CarouselItem } from '../app/components/carousel/CarouselCenterMode';
import { useRef } from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';


const HomePage7: NextPageWithLayout = () => {
    const carouselSettings = {
        slidesToShow: 2,
        dots: false,
        arrows: false,
        centerMode: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 2 },
            },
            {
                breakpoint: 600,
                settings: { slidesToShow: 2 },
            },
            {
                breakpoint: 480,
                settings: { slidesToShow: 1, centerPadding: '0' },
            },
        ],
    };
    const carouselRef = useRef<Carousel | null>(null);

	return (
		<>
			<header className="header-v7">
				<div className="container">
					<div className="header-v7-top">
						<div className="logo-v7">
							<a href="#" title="">
								<img src="/static/images/logo_3.png" alt="" />
							</a>
						</div>
						<button className="nav-toggle-btn a-nav-toggle desktop-hide mobile-show ms-auto">
							<span className="nav-toggle nav-toggle-sm">
								<span className="stick stick-1" />
								<span className="stick stick-2" />
								<span className="stick stick-3" />
							</span>
						</button>
					</div>
					<div className="header-v7-btm">
						<ul className="social-links">
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
									<i className="fab fa-instagram" />
								</a>
							</li>
							<li>
								<a href="#" title="">
									<i className="fab fa-youtube" />
								</a>
							</li>
						</ul>
						<nav>
							<ul>
								<li>
									<a className="active" href="#" title="">
										about
									</a>
									<ul>
										<li>
											<a href="about-agency.tsx" title="">
												About Agency
											</a>
										</li>
										<li>
											<a href="about-business.tsx" title="">
												About Business
											</a>
										</li>
										<li>
											<a href="about-me.tsx" title="">
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
											<a href="14_portfolio_parallax.html" title="">
												Portfolio Parallax
											</a>
										</li>
										<li>
											<a href="15_portfolio_horizontal_scroll.html" title="">
												Portfolio Horizontol
											</a>
										</li>
										<li>
											<a href="16_portfolio_masonry.html" title="">
												Portfolio Masonary
											</a>
										</li>
										<li>
											<a href="17_portfolio_single_layout_1.html" title="">
												Portfolio Single Layout V1
											</a>
										</li>
										<li>
											<a href="portfolio-single-layout-two.tsx" title="">
												Portfolio Single Layout V2
											</a>
										</li>
										<li>
											<a href="portfolio-single-layout-three.tsx" title="">
												Portfolio Single Layout V3
											</a>
										</li>
									</ul>
								</li>
								<li>
									<a href="#" title="">
										News
									</a>
									<ul>
										<li>
											<a href="blog-layout-one.tsx" title="">
												Blog V1
											</a>
										</li>
										<li>
											<a href="blog-layout-two.tsx" title="">
												Blog V2
											</a>
										</li>
										<li>
											<a href="blog-single-layout1.html" title="">
												Blog Single V1
											</a>
										</li>
										<li>
											<a href="blog-single-layout2.html" title="">
												Blog Single V2
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
											<a href="contact.tsx" title="">
												Contact V1
											</a>
										</li>
										<li>
											<a href="contact-two.tsx" title="">
												Contact V2
											</a>
										</li>
									</ul>
								</li>
							</ul>
						</nav>
						<ul className="links-rt">
							<li>
								<a href="#" title="" className="searchh">
									Search <i className="lni lni-search-alt" />
								</a>
								<form className="search-form-field">
									<input type="text" name="search" placeholder="Search Here..." />
								</form>
							</li>
							<li>
								<a href="#" title="">
									<i className="lni lni-cart" />
								</a>{' '}
								<span className="cart-count">2</span>
							</li>
						</ul>
						<button className="nav-toggle-btn a-nav-toggle desktop-hide mobile-show ms-auto">
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
									className="animsition-link active"
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

			<section className="main-banner-v7">
				<div className="container">
					<div className="banner-content-v7">
						<div
							className="en-info wow zoomIn"
							data-wow-duration="1000ms"
							data-wow-delay="0ms"
						>
							<img src="/static/images/en-img2.png" alt="" />
							<a
								href="https://www.youtube.com/watch?v=MsFOWoPjMFY"
								title=""
								className="html5lightbox play-video-btn"
							>
								play <br />
								video
							</a>
						</div>
						<div
							className="en-img wow fadeInUp"
							data-wow-duration="1000ms"
							data-wow-delay="0ms"
						>
							<img src="/static/images/en-img.png" alt="" />
						</div>
					</div>
				</div>
			</section>
			<section className="partners-section v3">
				<div className="container">
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
			</section>
			<section className="about-us-v7-sec">
				<div className="container">
					<div
						className="about-v7-content wow fadeInUp"
						data-wow-duration="1000ms"
						data-wow-delay="0ms"
					>
						<h2>
							Andy Grammer. I'm a life coach &amp; personal development mentor in
							Miami.
						</h2>
						<p>
							With extensive experience as a business coach, trainer and speaker,
							Andy has helped over <span>8,000 professionals</span> – from
							students to senior executives – discover the tools they need to
							realise their full potential, whatever their aspirations. Andy will
							help you open up lines of communication and enable people of all
							levels to work together with{' '}
							<span>
								genuine passion, enthusiasm and a shared vision for the future
							</span>
							. Together, you really can change the culture of your organisation
							for the better.
						</p>
						<ul className="lnz-links">
							<li>
								<a href="about-me.tsx" title="">
									About me
								</a>
							</li>
							<li>
								<a href="contact.tsx" title="">
									get consulation
								</a>
							</li>
						</ul>
					</div>
					<div className="mission-sec">
						<div className="row">
							<div className="col-xl-6">
								<div
									className="crlce-misz wow zoomIn"
									data-wow-duration="1000ms"
									data-wow-delay="0ms"
								>
									<ul className="crlce-list">
										<li className="v1">
											<div className="crlce-info">
												<i className="lni lni-users" />
												<h3>1 on 1 Coaching</h3>
											</div>
											<div className="crlce-img">
												<img src="/static/images/crcle-img1.png" alt="" />
											</div>
										</li>
										<li className="v2">
											<div className="crlce-info">
												<i className="lni lni-comments-reply" />
												<h3>Consultation</h3>
											</div>
											<div className="crlce-img">
												<img src="/static/images/crcle-img2.png" alt="" />
											</div>
										</li>
										<li className="v3">
											<div className="crlce-info">
												<i className="lni lni-empty-file" />
												<h3>Life Program</h3>
											</div>
											<div className="crlce-img">
												<img src="/static/images/crcle-img3.png" alt="" />
											</div>
										</li>
									</ul>
								</div>
							</div>
							<div className="col-xl-6">
								<div className="vlm-text">
									<h2>My Mission &amp; Philosophy</h2>
									<span>
										“I break down barriers so teams can focus on what matters –
										working together to create products their customers love.”
									</span>
									<p>
										Andy has dedicated his life to learning what makes humans
										tick. He studies, researches and reads everything hecan, and
										shares his findings with his clients. His philosophy is to
										learn, test, analyse, improve and re-test. His motto is stay
										agile, so you are best positioned to respond quickly and
										effectively to market forces.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="book-v7-sec">
				<div className="container">
					<div className="book-v7-content">
						<div className="row">
							<div className="col-lg-5">
								<div className="book-form">
									<h2>Download Free E-Book</h2>
									<span>Business Thinking - Strategy to Success</span>
									<form className="bk-form">
										<input type="text" name="name" placeholder="First Name" />
										<input type="text" name="last-name" placeholder="Last Name" />
										<input
											type="email"
											name="email"
											placeholder="Email Address"
										/>
										<div className="form_submit">
											<button type="submit">
												<span>get it now</span>
											</button>
										</div>
									</form>
								</div>
							</div>
							<div className="col-lg-7">
								<div
									className="book-img wow fadeInUp"
									data-wow-duration="1000ms"
									data-wow-delay="0ms"
								>
									<img src="/static/images/book-img.png" alt="" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="our-services-sec v2">
				<div className="container">
					<div className="mile-title">
						<h3>Recent Courses</h3>
					</div>
					<div className="our-services-content">
						<div className="row svs-slider">
                            <Carousel ref={carouselRef} {...carouselSettings}>
                                {carouselsExample.map(item => (
                                    <div className="col-lg-5">
                                        <div className="service-card-mile">
                                            <img src="/static/images/icon1.png" alt="" />
                                            <h2>
                                                <a href="service-one.tsx" title="">
                                                    Branding
                                                </a>
                                            </h2>
                                            <p>
                                                We build and activate brands throung cultural insigh &amp;,
                                                strategic vision.
                                            </p>
                                            <a href="#" title="" className="cat-up">
                                                case study
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </Carousel>
						</div>
						<ul
							className="counter-sec-v6 wow fadeInUp"
							id="counter"
							data-wow-duration="1000ms"
							data-wow-delay="0ms"
						>
							<li>
								<div className="counter-cont">
                                    <VisibilitySensor
                                        scrollCheck
                                        partialVisibility
                                        offset={{ bottom: 10 }}
                                    >
                                        {({
                                              isVisible,
                                          }: {
                                            isVisible: boolean;
                                        }) => (
                                            <h2 className=" count">
                                                {isVisible ? (
                                                    <CountUp end={100} />
                                                ) : (
                                                    '0'
                                                )}
                                            </h2>
                                        )}
                                    </VisibilitySensor>
									{/*<h2 className="count">100</h2>*/}
									<span>
										satisfaction <br /> clients
									</span>
								</div>
							</li>
							<li>
								<div className="counter-cont">
                                    <VisibilitySensor
                                        scrollCheck
                                        partialVisibility
                                        offset={{ bottom: 10 }}
                                    >
                                        {({
                                              isVisible,
                                          }: {
                                            isVisible: boolean;
                                        }) => (
                                            <h2 className="count">
                                                {isVisible ? (
                                                    <CountUp end={158} />
                                                ) : (
                                                    '0'
                                                )}
                                            </h2>
                                        )}
                                    </VisibilitySensor>
									{/*<h2 className="count">158</h2>*/}
									<span>event &amp; oline courses</span>
								</div>
							</li>
							<li>
								<div className="counter-cont">
                                    <VisibilitySensor
                                        scrollCheck
                                        partialVisibility
                                        offset={{ bottom: 10 }}
                                    >
                                        {({
                                              isVisible,
                                          }: {
                                            isVisible: boolean;
                                        }) => (
                                            <h2 className="clr1 count">
                                                {isVisible ? (
                                                    <CountUp end={3875} />
                                                ) : (
                                                    '0'
                                                )}
                                            </h2>
                                        )}
                                    </VisibilitySensor>
									{/*<h2 className="count">3875</h2>*/}
									<span>successful students on 60 countries</span>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</section>
            <section className="testi-v3-sec">
                <div className="container">
                    <Testi/>
                </div>
            </section>
			<section className="upcoming-events-sec">
				<div className="container">
					<div className="sec-title-v7 text-center">
						<h2>Upcoming Events</h2>
					</div>
					<div className="solu-upcoming">
						<h2>
							Solution for <br />
							AI &amp; Ecommerce
						</h2>
						<span>Strategy developer Ecommerce with AI</span>
						<div className="uo-com-row">
							<div className="us-row">
								<img src="/static/images/us-img1.png" alt="" />
								<h3>Andy grammer, Bob howy</h3>
							</div>
							<ul className="ll-list">
								<li>
									<span>Location</span>
									<h4>25 Orchard St, NY, CA</h4>
								</li>
								<li>
									<span>Date</span>
									<h4>September 19, 2020</h4>
								</li>
							</ul>
						</div>
					</div>
					<ul className="events-list">
						<li>
							<div className="event-details">
								<div className="event-date">
									<span>Aug</span>
									<h3>25</h3>
								</div>
								<div className="ms-project">
									<img src="/static/images/ms1.png" alt="" />
									<div className="ms-info">
										<h3>
											<a href="#" title="">
												Technology Conference 4.0, E-commerce trends
											</a>
										</h3>
									</div>
								</div>
								<div className="event-location">
									<span>Location</span>
									<h4>86 Beverly Hill, Ohio, USA</h4>
								</div>
								<div className="get-ticket">
									<a href="#" title="" className="active">
										get ticket
									</a>
								</div>
							</div>
						</li>
						<li>
							<div className="event-details">
								<div className="event-date">
									<span>Aug</span>
									<h3>16</h3>
								</div>
								<div className="ms-project">
									<img src="/static/images/ms2.png" alt="" />
									<div className="ms-info">
										<h3>
											<a href="#" title="">
												Financial Problems &amp; Business Management
											</a>
										</h3>
									</div>
								</div>
								<div className="event-location">
									<span>Location</span>
									<h4>252 Queen Ave, Mahatta, CA</h4>
								</div>
								<div className="get-ticket">
									<a href="#" title="">
										get ticket
									</a>
								</div>
							</div>
						</li>
						<li>
							<div className="event-details">
								<div className="event-date">
									<span>May</span>
									<h3>03</h3>
								</div>
								<div className="ms-project">
									<img src="/static/images/ms3.png" alt="" />
									<div className="ms-info">
										<h3>
											<a href="#" title="">
												Human Resource Management Consultancy
											</a>
										</h3>
									</div>
								</div>
								<div className="event-location">
									<span>Location</span>
									<h4>8 Orchard, Miami, FL</h4>
								</div>
								<div className="get-ticket">
									<a href="#" title="">
										get ticket
									</a>
								</div>
							</div>
						</li>
					</ul>
					<div className="text-center all-events">
						<p>
							Excited about our event?{' '}
							<a href="#" title="">
								View all events
							</a>
						</p>
					</div>
				</div>
			</section>
			<section className="blog-section-v7">
				<div className="container">
					<div className="blog-posts-v7">
						<div className="row">
							<div className="col-lg-4 col-md-6 col-sm-6">
								<div className="blog-post-v7">
									<div className="blog-thumbnail">
										<img
											src="/static/images/blog4.jpg"
											alt=""
											className="w-100"
										/>
									</div>
									<div className="blog-info">
										<ul className="meta">
											<li>
												<a href="#" title="">
													business
												</a>
											</li>
											<li>
												<a href="#" title="">
													May 17, 2020
												</a>
											</li>
										</ul>
										<h2>
											<a href="blog-single-layout1.html" title="">
												Value of life start from staircase
											</a>
										</h2>
										<ul className="meta2">
											<li>
												<i className="lni lni-comments" /> 25
											</li>
											<li>
												<i className="lni lni-eye" /> 32.6K
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-6 col-sm-6">
								<div className="blog-post-v7">
									<div className="blog-thumbnail">
										<img
											src="/static/images/blog5.jpg"
											alt=""
											className="w-100"
										/>
									</div>
									<div className="blog-info">
										<ul className="meta">
											<li>
												<a href="#" title="">
													community
												</a>
											</li>
											<li>
												<a href="#" title="">
													apr 28, 2020
												</a>
											</li>
										</ul>
										<h2>
											<a href="single-layout1.html" title="">
												Clients’s Stories
											</a>
										</h2>
										<ul className="meta2">
											<li>
												<i className="lni lni-comments" /> 4
											</li>
											<li>
												<i className="lni lni-eye" /> 7.2K
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-6 col-sm-6">
								<div className="blog-post-v7">
									<div className="blog-thumbnail">
										<img
											src="/static/images/blog6.jpg"
											alt=""
											className="w-100"
										/>
									</div>
									<div className="blog-info">
										<ul className="meta">
											<li>
												<a href="#" title="">
													life style
												</a>
											</li>
											<li>
												<a href="#" title="">
													apr 8, 2020
												</a>
											</li>
										</ul>
										<h2>
											<a href="single-layout1.html" title="">
												Work from home, solution in pandemic
											</a>
										</h2>
										<ul className="meta2">
											<li>
												<i className="lni lni-comments" /> 18
											</li>
											<li>
												<i className="lni lni-eye" /> 57.4K
											</li>
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
                    <KeepConnected/>
				</div>
			</section>
			<footer className="footer-v7">
				<div className="container">
					<div className="footer-content-v7">
						<ul className="menu-links">
							<li>
								<a href="about-agency.tsx" title="">
									About
								</a>
							</li>
							<li>
								<a href="#" title="">
									start here
								</a>
							</li>
							<li>
								<a href="#" title="">
									courses
								</a>
							</li>
							<li>
								<a href="#" title="">
									design
								</a>
							</li>
							<li>
								<a href="contact.tsx" title="">
									contact
								</a>
							</li>
						</ul>
						<div className="row">
							<div className="col-lg-4">
								<div className="widget-follow">
									<h3>follow us</h3>
									<ul className="social-links">
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
												<i className="fab fa-instagram" />
											</a>
										</li>
										<li>
											<a href="#" title="">
												<i className="fab fa-youtube" />
											</a>
										</li>
									</ul>
								</div>
							</div>
							<div className="col-lg-4">
								<div className="widget-about text-center">
									<img src="/static/images/logo_3.png" alt="" />
									<ul>
										<li>(+0024)-877-932-0563</li>
										<li>
											<a href="#" title="">
												enquiries@andygrammer.com
											</a>
										</li>
									</ul>
								</div>
							</div>
							<div className="col-lg-4">
								<div className="widget-language">
									<h3>Language</h3>
									<ul>
										<li>
											<a href="#" title="">
												ENG
											</a>
										</li>
										<li>
											<a href="#" title="">
												FRA
											</a>
										</li>
										<li>
											<a href="#" title="">
												GER
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<p className="text-center copy-tzt">
							© 2020{' '}
							<a href="#" title="">
								Andy Grammer
							</a>
							. Design by LoganCee
						</p>
					</div>
				</div>
			</footer>


		</>
	);
};

HomePage7.getLayout = function getLayout(page: React.ReactElement) {
	return <Layout title="Home">{page}</Layout>;
};

export default HomePage7;