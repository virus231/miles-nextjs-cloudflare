import classNames from 'classnames'
import { NextLink } from '../app/components/BaseNextLink'
import styles from '../styles/Home.module.scss'
import { NextPageWithLayout } from './_app'
import { Layout } from '../app/components/Layout'
import { Navigation } from '../app/components/Navigation'
import { Footer } from '../app/components/Footer'


const HomePage6: NextPageWithLayout = () => {

	return (
		<>
			<header className="header-v6">
				<div className="container">
					<div className="header-content-v6">
						<div className="logo">
							<a href="#" title="">
								<img src="/static/images/logo_12.png" alt="" />
							</a>
						</div>
						<nav>
							<ul>
								<li>
									<a className="active" href="#" title="">
										about
									</a>
									<ul>
										<li>
											<a href="24_about_agency.html" title="">
												About Agency
											</a>
										</li>
										<li>
											<a href="25_about_business.html" title="">
												About Business
											</a>
										</li>
										<li>
											<a href="26_about_me.html" title="">
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
											<a href="18_portfolio_single_layout_2.html" title="">
												Portfolio Single Layout V2
											</a>
										</li>
										<li>
											<a href="19_portfolio_single_layout_3.html" title="">
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
											<a href="blog-layout1.html" title="">
												Blog V1
											</a>
										</li>
										<li>
											<a href="blog-layout2.html" title="">
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
											<a href="30_contact_1.html" title="">
												Contact V1
											</a>
										</li>
										<li>
											<a href="31_contact_2.html" title="">
												Contact V2
											</a>
										</li>
									</ul>
								</li>
							</ul>
						</nav>
						<a href="#" title="" className="hd-btn">
							Let’s chat! <i className="lni lni-comments-reply" />
						</a>
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
									className="animsition-link active"
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
			<section className="main-banner-v6">
				<div className="container">
					<div className="main-banner-content">
						<div className="row">
							<div className="col-lg-6">
								<div
									className="banner-v6-text wow fadeInUp"
									data-wow-duration="1000ms"
									data-wow-delay="0ms"
								>
									<h2>
										Help your <br />
										business growth up
										<br /> to high level
									</h2>
									<p>
										Like any great agency, we are only as good as the result we
										deliver of our recent work
									</p>
									<ul className="btns">
										<li>
											<a href="30_contact_1.html" title="" className="active">
												get started
											</a>
										</li>
										<li>
											<a href="25_about_business.html" title="">
												about us
											</a>
										</li>
									</ul>
								</div>
								<div className="banner-btm-info">
									<p>
										If you are hurry, quick call for us. Our supporters alway 24/7
										and will help you asap{" "}
									</p>
									<div className="btm-hd-info">
										<span className="bt-icon">
											<i className="lni lni-phone" />
										</span>
										<div className="bt-para">
											<span>hotline 24/7</span>
											<h3>+65 - 3002 56 56 376</h3>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-6">
								<div
									className="ban-img wow zoomIn"
									data-wow-duration="1000ms"
									data-wow-delay="0ms"
								>
									<img
										src="/static/images/ban-img4.jpg"
										alt=""
										className="w-100"
									/>
								</div>
								<ul className="vl-list">
									<li className="active">
										Digital <br />
										marketing
									</li>
									<li>
										User
										<br />
										interface
									</li>
									<li>
										Business
										<br />
										consulation
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="partners-section v-2">
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
			<section className="our-services-sec">
				<div className="container">
					<div className="mile-title">
						<h3>our services</h3>
					</div>
					<div className="our-services-content">
						<div className="row svs-slider">
							<div className="col-lg-5">
								<div className="service-card-mile">
									<img src="/static/images/icon1.png" alt="" />
									<h2>
										<a href="27_service_1.html" title="">
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
							<div className="col-lg-5">
								<div className="service-card-mile">
									<img src="/static/images/icon2.png" alt="" />
									<h2>
										<a href="27_service_1.html" title="">
											Interaction
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
							<div className="col-lg-5">
								<div className="service-card-mile">
									<img src="/static/images/icon3.png" alt="" />
									<h2>
										<a href="27_service_1.html" title="">
											Motion
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
							<div className="col-lg-5">
								<div className="service-card-mile">
									<img src="/static/images/icon1.png" alt="" />
									<h2>
										<a href="27_service_1.html" title="">
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
						</div>
						<ul
							className="counter-sec-v6 wow fadeInUp"
							id="counter"
							data-wow-duration="1000ms"
							data-wow-delay="0ms"
						>
							<li>
								<div className="counter-cont">
									<h2 className="count">820</h2>
									<span>
										satisfaction <br /> clients
									</span>
								</div>
							</li>
							<li>
								<div className="counter-cont">
									<h2 className="count">643</h2>
									<span>employees on worldwide</span>
								</div>
							</li>
							<li>
								<div className="counter-cont">
									<h2 className="count">1875</h2>
									<span>projects completed on 60 countries</span>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</section>
			<section className="recent-works-v6-sec">
				<div className="container">
					<div className="rc-work-content">
						<div className="row">
							<div className="col-lg-7 col-md-7">
								<div className="mile-title">
									<h3>recent works</h3>
								</div>
								<div className="rc-posts">
									<div className="rc-work-post">
										<div className="rc-thumbnail">
											<img
												src="/static/images/rc1.jpg"
												alt=""
												className="w-100"
											/>
										</div>
										<div className="rc-info">
											<span>Interaction, Motion</span>
											<h3>
												<a href="17_portfolio_single_layout_1.html" title="">
													Faye Fo
												</a>
											</h3>
											<p>
												Discover how we helped CleanCloud to increase their
												presence on a global market by their scaling up its visual
												identity and building a flexible style guide for their
												future product elaboration.
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-5 col-md-5">
								<div className="rc-posts v-2">
									<div className="rc-work-post v-2">
										<div className="rc-thumbnail">
											<img
												src="/static/images/rc2.jpg"
												alt=""
												className="w-100"
											/>
										</div>
										<div className="rc-info">
											<span>Branding</span>
											<h3>
												<a href="17_portfolio_single_layout_1.html" title="">
													Taskly Dashboard
												</a>
											</h3>
											<p>
												BibliU is a digital platform that provides university
												students with personalized learning pathways
											</p>
										</div>
									</div>
									<div className="rc-work-post v-2">
										<div className="rc-thumbnail">
											<img
												src="/static/images/rc3.jpg"
												alt=""
												className="w-100"
											/>
										</div>
										<div className="rc-info">
											<span>Interaction, Brandingv</span>
											<h3>
												<a href="17_portfolio_single_layout_1.html" title="">
													Nike Workout
												</a>
											</h3>
											<p>
												Discover how we helped them scale up from <br /> local to
												global.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<a
							href="15_portfolio_horizontal_scroll.html"
							title=""
							className="btn-deafult-v6"
						>
							more projects
						</a>
					</div>
				</div>
			</section>
			<section className="about-sec-v6">
				<div className="about-v6-content">
					<div className="container">
						<div
							className="mile-title wow fadeInUp"
							data-wow-duration="1000ms"
							data-wow-delay="0ms"
						>
							<h3>about us</h3>
							<p>
								We are surrounded by amazing cultural and physical weather
								climates. Our HQ is located in Odesa — a beautiful seaside resort
								city near the Black Sea. Anton Checkhov lived in our same
								neighborhood, and we are just one minute away from the opera house
								where Tchaikovsky conducted.
							</p>
						</div>
					</div>
					<div className="mile-large-abt">
						<div className="row">
							<div className="col-lg-9 col-md-8 col-sm-7">
								<div
									className="lrg-col wow slideInLeft"
									data-wow-duration="1000ms"
									data-wow-delay="0ms"
								>
									<img
										src="/static/images/lg-img1.jpg"
										alt=""
										className="w-100"
									/>
								</div>
							</div>
							<div className="col-lg-3 col-md-4 col-sm-5">
								<div
									className="lrg-col wow slideInLeft"
									data-wow-duration="1000ms"
									data-wow-delay="0ms"
								>
									<img
										src="/static/images/lg-img2.jpg"
										alt=""
										className="w-100"
									/>
									<a
										href="https://www.youtube.com/watch?v=MsFOWoPjMFY"
										title=""
										className="play-video-btn html5lightbox"
									>
										play <br />
										video
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="container">
						<div className="abtt-para">
							<p>
								It's always good to receive positive and constructive feedback for
								your work - from clients and moreover, from designers!
							</p>
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
					</div>
				</div>
			</section>
			<section className="testimonial-v6-sec">
				<div className="container">
					<div className="mile-title">
						<h3>TEstimonials</h3>
					</div>
					<div className="testi-sec-v6">
						<div className="testi-slider-v6">
							<div className="testi-slide-v6">
								<h3>Edison Cavani</h3>
								<span>Product Management at Spotify</span>
								<p>
									I don’t know what else to say, this is something that you
									haven’t seen before. Unique design, lightweight, and outstanding
									support. Milbase are always a pleasure to work!”
								</p>
							</div>
							<div className="testi-slide-v6">
								<h3>Edison Cavani</h3>
								<span>Product Management at Spotify</span>
								<p>
									I don’t know what else to say, this is something that you
									haven’t seen before. Unique design, lightweight, and outstanding
									support. Milbase are always a pleasure to work!”
								</p>
							</div>
							<div className="testi-slide-v6">
								<h3>Edison Cavani</h3>
								<span>Product Management at Spotify</span>
								<p>
									I don’t know what else to say, this is something that you
									haven’t seen before. Unique design, lightweight, and outstanding
									support. Milbase are always a pleasure to work!”
								</p>
							</div>
							<div className="testi-slide-v6">
								<h3>Edison Cavani</h3>
								<span>Product Management at Spotify</span>
								<p>
									I don’t know what else to say, this is something that you
									haven’t seen before. Unique design, lightweight, and outstanding
									support. Milbase are always a pleasure to work!”
								</p>
							</div>
						</div>
						<ul className="slider-thumb">
							<li>
								<img src="/static/images/th1.jpg" alt="" />
							</li>
							<li>
								<img src="/static/images/th2.jpg" alt="" />
							</li>
							<li>
								<img src="/static/images/th3.jpg" alt="" />
							</li>
							<li>
								<img src="/static/images/th4.jpg" alt="" />
							</li>
						</ul>
					</div>
					<div className="mile-rtz-sec">
						<div className="row">
							<div className="col-lg-8 mile-pst-collection p-0 mw-100">
								<div className="mile-post">
									<div className="mile-post-thumbnail">
										<img src="/static/images/pic13.jpg" alt="" />
									</div>
									<div className="mile-post-info">
										<span className="category">design</span>
										<span className="posted-on">July 21st, 2020</span>
										<h2>
											<a href="blog-single-layout1.html" title="">
												Power of Grid System in Design
											</a>
										</h2>
										<a href="#" title="">
											<i className="lni lni-share" /> Share
										</a>
									</div>
								</div>
							</div>
							<div className="col-lg-4">
								<div className="newsletter-sc">
									<h3>Newsletter</h3>
									<p>Subscribe our newsletter to get update regularly</p>
									<form>
										<input
											type="email"
											name="email"
											placeholder="Email Address"
										/>
										<button type="submit">
											<i className="lni lni-envelope" />
										</button>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<footer className="footer-v6">
				<div className="container">
					<div className="footer-content-v6">
						<div className="row">
							<div className="col-lg-6">
								<div
									className="widget-abt wow fadeInUp"
									data-wow-duration="1000ms"
									data-wow-delay="0ms"
								>
									<h2>Let’s make something amazing toghtether.</h2>
									<h2>
										Start by
										<a href="#" title="">
											{" "}
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
									<h5>contact info</h5>
									<h4>5th, Floor, 216 Fairground Rd, FL 3290, USA</h4>
									<a href="#" title="">
										hello@miles.co
									</a>
									<ul>
										<li>
											<a href="15_portfolio_horizontal_scroll.html" title="">
												Works
											</a>
										</li>
										<li>
											<a href="24_about_agency.html" title="">
												About
											</a>
										</li>
										<li>
											<a href="blog-layout1.html" title="">
												News
											</a>
										</li>
										<li>
											<a href="30_contact_1.html" title="">
												Contact
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="mile-bottom-footer">
							<div className="row align-items-center">
								<div className="col-lg-6">
									<div className="btm-copy">
										<img src="/static/images/logo_12.png" alt="" />
										<p>© 2020. All Rights Reserved</p>
									</div>
								</div>
								<div className="col-lg-6">
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
			</footer>
		</>
	)
}

HomePage6.getLayout = function getLayout(page: React.ReactElement) {
	return <Layout title="Home">{page}</Layout>;
};

export default HomePage6
