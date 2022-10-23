import classNames from 'classnames'
import { NextLink } from '../app/components/BaseNextLink'
import styles from '../styles/Home.module.scss'
import { NextPageWithLayout } from './_app'
import { Layout } from '../app/components/Layout'


const HomePage9: NextPageWithLayout = () => {

	return (
		<>

			<header className="header-v8 v9">
				<div className="container">
					<div className="header-content-v8">
						<div className="logo-v8">
							<a href="#" title="">
								<img src="/static/images/miles-consulting.png" alt="" />
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
						<a href="#" title="" className="chat-btn">
							Let’s chat! <i className="lni lni-comments-reply" />
						</a>
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
									className="animsition-link active"
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
			
			<section className="main-banner-v9">
				<div className="container">
					<div
						className="banner-slider-v9 wow fadeInUp"
						data-wow-duration="1000ms"
						data-wow-delay="0ms"
					>
						<div className="banner-slide-v9">
							<span>Rewared for your trust</span>
							<h2>
								<span>Building The Right</span> Foundations
							</h2>
							<p>
								Like any great agency, we are only as good as the result we
								deliver of our recent work
							</p>
							<a href="#" title="" className="btn-default-v9">
								Get Started
							</a>
						</div>
						<div className="banner-slide-v9">
							<span>Rewared for your trust</span>
							<h2>
								<span>Building The Right</span> Foundations
							</h2>
							<p>
								Like any great agency, we are only as good as the result we
								deliver of our recent work
							</p>
							<a href="#" title="" className="btn-default-v9">
								Get Started
							</a>
						</div>
						<div className="banner-slide-v9">
							<span>Rewared for your trust</span>
							<h2>
								<span>Building The Right</span> Foundations
							</h2>
							<p>
								Like any great agency, we are only as good as the result we
								deliver of our recent work
							</p>
							<a href="#" title="" className="btn-default-v9">
								Get Started
							</a>
						</div>
					</div>
				</div>
			</section>

			<section className="about-v9">
				<div className="container">
					<div className="abt-v9-cntr">
						<div className="row align-items-center">
							<div className="col-lg-6">
								<div className="call-us-v9">
									<span className="icon-v9">
										<i className="lni lni-phone" />
									</span>
									<h4>call us directly</h4>
									<h3>(+37) 96 3548 68</h3>
								</div>
							</div>
							<div className="col-lg-6">
								<ul className="cl-ordr" id="counter">
									<li>
										<h3 className="count">2560</h3>
										<span>Happy Clients in 25 years</span>
									</li>
									<li>
										<h3 className="count">42680</h3>
										<span>Projects completed on the worldwide</span>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="about-v9-content">
				<div className="container-fluid">
					<div className="about-v9-row">
						<div className="ban-img-v9">
							<img src="/static/images/ban-img6.png" alt="" />
						</div>
						<div
							className="about-v9-txt wow fadeInUp"
							data-wow-duration="1000ms"
							data-wow-delay="0ms"
						>
							<span>about us</span>
							<h2>
								<span>Optimized</span> <br />
								For Your Business Better
							</h2>
							<p>
								Leverage agile frameworks to provide a robust synopsis for high
								level overviews. Iterative approaches to corporate strategy foster
								collaborative thinking to further the overall value proposition.
							</p>
							<a
								href="24_about_agency.html"
								title=""
								className="btn-default-v9 v2"
							>
								Learn More
							</a>
							<a
								href="https://www.youtube.com/watch?v=vw6QmjPpdy4"
								title=""
								className="view-btn html5lightbox"
							>
								<span className="pl-btn">
									<i className="lni lni-play" />
								</span>
								<span className="vt">view our story</span>
							</a>
						</div>
					</div>
				</div>
			</section>
			<section className="services-v9">
				<div className="container">
					<div
						className="title-v9 text-center wow fadeInUp"
						data-wow-duration="1000ms"
						data-wow-delay="0ms"
					>
						<span>what we can help</span>
						<h2>
							<span>Delivering End-to-End</span> Company Solutions Online
						</h2>
					</div>
					<div className="row services_v9">
						<div className="col-lg-4 col-md-6">
							<div className="service-v9">
								<span className="s-icon">
									<i className="lni lni-crown" />
								</span>
								<h3>
									<a href="17_portfolio_single_layout_1.html" title="">
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
						<div className="col-lg-4 col-md-6">
							<div className="service-v9">
								<span className="s-icon">
									<i className="lni lni-crown" />
								</span>
								<h3>
									<a href="17_portfolio_single_layout_1.html" title="">
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
						<div className="col-lg-4 col-md-6">
							<div className="service-v9">
								<span className="s-icon">
									<i className="lni lni-crown" />
								</span>
								<h3>
									<a href="17_portfolio_single_layout_1.html" title="">
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
						<div className="col-lg-4 col-md-6">
							<div className="service-v9">
								<span className="s-icon">
									<i className="lni lni-crown" />
								</span>
								<h3>
									<a href="17_portfolio_single_layout_1.html" title="">
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
						<div className="col-lg-4 col-md-6">
							<div className="service-v9">
								<span className="s-icon">
									<i className="lni lni-crown" />
								</span>
								<h3>
									<a href="17_portfolio_single_layout_1.html" title="">
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
						<div className="col-lg-4 col-md-6">
							<div className="sv-text-v9">
								<h2>
									“Our Avantage can help you with picking out the best people for
									your company.”
								</h2>
								<img src="/static/images/sign2.png" alt="" />
								<span>Founder at Misulting</span>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="why-us-v9">
				<div className="container">
					<div className="row">
						<div className="col-lg-6">
							<div className="why-txt-v9">
								<div className="title-v9">
									<span>why choose us</span>
									<h2>
										<span>Different Value</span> Created Us
									</h2>
								</div>
								<ul>
									<li>
										<div className="us-svs">
											<span className="svs-icon">
												<i className="lni lni-money-protection" />
											</span>
											<div className="svs-info">
												<h3>Affordable Price</h3>
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
												<i className="lni lni-crown" />
											</span>
											<div className="svs-info">
												<h3>Top-notch Experts Consulting</h3>
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
												<i className="lni lni-comments-reply" />
											</span>
											<div className="svs-info">
												<h3>Dedicated Support 24/7</h3>
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
								className="wy-img wow fadeInRight"
								data-wow-duration="1000ms"
								data-wow-delay="0ms"
							>
								<img src="/static/images/ban-img7.png" alt="" />
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="testimonial-v4-sec v9">
				<div className="container">
					<div
						className="title-v9 wow fadeInUp"
						data-wow-duration="1000ms"
						data-wow-delay="0ms"
					>
						<span>Testimonials</span>
						<h2>
							<span>Our Reputation,</span> Our Reputation
						</h2>
					</div>
					<div className="cl-slider-v4">
						<div className="cl-slide">
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
								Daniel was a real pleasure to work with and we look forward to
								working with him again. He’s definitely the kind of designer you
								can trust with a project from start to finish
							</p>
						</div>
						<div className="cl-slide">
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
								Daniel was a real pleasure to work with and we look forward to
								working with him again. He’s definitely the kind of designer you
								can trust with a project from start to finish
							</p>
						</div>
						<div className="cl-slide">
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
								Daniel was a real pleasure to work with and we look forward to
								working with him again. He’s definitely the kind of designer you
								can trust with a project from start to finish
							</p>
						</div>
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
			</section>
			<section className="team-sec v9">
				<div className="container">
					<div className="team-sec-content">
						<div className="row align-items-center">
							<div className="col-lg-7">
								<div
									className="team-thumb wow zoomIn"
									data-wow-duration="1000ms"
									data-wow-delay="0ms"
								>
									<img src="/static/images/img5.png" alt="" />
								</div>
							</div>
							<div className="col-lg-5">
								<div className="team-info">
									<div className="title-v9">
										<span>TEam</span>
										<h2>
											<span>Meet</span> Our Experts
										</h2>
									</div>
									<p>
										Meet our talented team of creatives, fun-lovers, and magic
										makers. Shall seas yielding a he, moveth said gathering under
										all cattle were years fruit whose isn’t.
									</p>
									<a href="32_team.html" title="" className="btn-default-v9 v2">
										Learn More
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="blog-section-v7 v9">
				<div className="container">
					<div
						className="title-v9 text-center wow fadeInUp"
						data-wow-duration="1000ms"
						data-wow-delay="0ms"
					>
						<span>our press</span>
						<h2>
							<span>Latest</span> Articles
						</h2>
					</div>
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
													tips
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
												How to optimization cost for GG Ads?
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
											<a href="blog-single-layout1.html" title="">
												Workflow Strategy
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
											<a href="blog-single-layout1.html" title="">
												Elena Holson Shared: Marketing Vision 2020
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
			<footer className="footer-v9">
				<div className="container">
					<div className="footer-content-v9 row">
						<div className="col-lg-4 col-md-6 col-sm-6">
							<div className="widget widget-about">
								<img src="/static/images/miles-consulting.png" alt="" />
								<h3 className="widget-title">Information</h3>
								<ul>
									<li>
										<span className="wz-icon">
											<i className="lni lni-map" />
										</span>
										<p>90 Fifth Avenue, 3rd Floor New York NY 10011</p>
									</li>
									<li>
										<span className="wz-icon">
											<i className="lni lni-envelope" />
										</span>
										<p>
											<a href="mailto:example@example.com" title="">
												hello@msulting.co.us
											</a>
										</p>
									</li>
									<li>
										<span className="wz-icon">
											<i className="lni lni-phone" />
										</span>
										<p>(+37) 96 5468 68</p>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-lg-2 col-md-6 col-sm-6">
							<div className="widget widget-links">
								<h3 className="widget-title">comany</h3>
								<ul className="wd-links">
									<li>
										<a href="24_about_agency.html" title="">
											About Us
										</a>
									</li>
									<li>
										<a href="32_team.html" title="">
											Team
										</a>
									</li>
									<li>
										<a href="33_career.html" title="">
											Careers
										</a>
									</li>
									<li>
										<a href="#" title="">
											Investors
										</a>
									</li>
									<li>
										<a href="27_service_1.html" title="">
											Services
										</a>
									</li>
									<li>
										<a href="#" title="">
											Cases
										</a>
									</li>
									<li>
										<a href="30_contact_1.html" title="">
											Contact Us
										</a>
									</li>
									<li>
										<a href="#" title="">
											Offices
										</a>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-lg-2 col-md-6 col-sm-6">
							<div className="widget widget-links">
								<h3 className="widget-title">quick links</h3>
								<ul className="wd-links">
									<li>
										<a href="#" title="">
											Help Center
										</a>
									</li>
									<li>
										<a href="#" title="">
											FAQs
										</a>
									</li>
									<li>
										<a href="#" title="">
											Policy Privacy
										</a>
									</li>
									<li>
										<a href="#" title="">
											Term Conditions
										</a>
									</li>
									<li>
										<a href="#" title="">
											Sitemap
										</a>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-lg-4 col-md-6 col-sm-6">
							<div className="widget widget-newsletter">
								<h3 className="widget-title">Newsletter</h3>
								<p>
									Subscribe to our newsletter and we will inform you about newset
									projects and promotions
								</p>
								<form className="newz-form">
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
												<i className="lni lni-envelope" />
											</button>
										</label>
									</span>
								</form>
							</div>
						</div>
					</div>
					<div className="row btm-footer">
						<div className="col-lg-4 col-md-6">
							<ul className="social-links">
								<li>
									<a href="#" title="">
										<i className="fab fa-twitter" />
									</a>
								</li>
								<li>
									<a href="#" title="">
										<i className="fab fa-github" />
									</a>
								</li>
								<li>
									<a href="#" title="">
										<i className="fab fa-facebook-f" />
									</a>
								</li>
								<li>
									<a href="#" title="">
										<i className="fab fa-dribbble" />
									</a>
								</li>
								<li>
									<a href="#" title="">
										<i className="fab fa-instagram" />
									</a>
								</li>
							</ul>
						</div>
						<div className="col-lg-4 col-md-6">
							<p className="cp-txt">© 2020 Msulting. All Rights Reserved</p>
						</div>
						<div className="col-lg-4">
							<div className="widget-language text-left">
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
				</div>
			</footer>

		</>
	)
}

HomePage9.getLayout = function getLayout(page: React.ReactElement) {
	return <Layout title="Home">{page}</Layout>;
};

export default HomePage9
