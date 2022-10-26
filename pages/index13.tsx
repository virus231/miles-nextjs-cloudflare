import classNames from 'classnames'
import { NextLink } from '../app/components/BaseNextLink'
import styles from '../styles/Home.module.scss'
import { NextPageWithLayout } from './_app'
import { Layout } from '../app/components/Layout'
import { Navigation } from '../app/components/Navigation'
import { Footer } from '../app/components/Footer'


const HomePage13: NextPageWithLayout = () => {

	return (
		<>

			<header className="header-v12 v13 pb active">
				<div className="container">
					<div className="header-content">
						<div className="logo">
							<a href="#" title="" className="light-logo">
								<img src="/static/images/logo13.png" alt="" />
							</a>
							<a href="#" title="" className="dark-logo">
								<img src="/static/images/logo14.png" alt="" />
							</a>
						</div>
						<button className="nav-toggle-btn a-nav-toggle ms-auto white">
							<span className="nav-toggle-title">Menu</span>
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
									className="animsition-link active"
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
			<div className="list-menu active">
				<ul id="menuMain">
					<li data-menuanchor="contact">
						<a href="#contact" title="">
							contact
						</a>
					</li>
					<li data-menuanchor="clients">
						<a href="#clients" title="">
							clients
						</a>
					</li>
					<li data-menuanchor="cases">
						<a href="#cases" title="">
							cases
						</a>
					</li>
					<li data-menuanchor="why-choose-us">
						<a href="#why-choose-us" title="">
							why choose us
						</a>
					</li>
					<li data-menuanchor="services">
						<a href="#services" title="">
							services
						</a>
					</li>
					<li data-menuanchor="about" className="active">
						<a href="#about" title="">
							about
						</a>
					</li>
				</ul>
			</div>

			<div id="pagepiling" className="dots-hidden">
				<div className="section pp-scrollable" id="about">
					<div className="slide-container">
						<h2 className="slide-number">1</h2>
						<div className="fixed-bg bg-3" />
						<div className="container">
							<div
								className="business-txt wow fadeInUp"
								data-wow-duration="1000ms"
								data-wow-delay="0ms"
							>
								<h2>Digital innovation companay that creates progress</h2>
								<p>
									Like any great agency, we are only as good as the result we
									deliver of our recent work{" "}
								</p>
								<a href="#" title="" className="btn-default v13">
									Get Started
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
							<ul
								className="bd-list wow fadeInUp"
								data-wow-duration="1000ms"
								data-wow-delay="300ms"
							>
								<li>
									<h3>branding identity</h3>
								</li>
								<li>
									<h3>UI/UX Interaction</h3>
								</li>
								<li>
									<h3>3d illustration &amp; animation</h3>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="section pp-scrollable" id="services">
					<div className="slide-container">
						<h2 className="slide-number">2</h2>
						<div className="fixed-bg bg-gray" />
						<div className="about-v4-sec v11 gray-bg">
							<div className="container">
								<div className="about-v4-content">
									<div className="row">
										<div className="col-lg-6">
											<div className="abt-list">
												<div className="abt-content">
													<h3>
														<a href="17_portfolio_single_layout_1.html" title="">
															Branding
														</a>
													</h3>
													<p>Create digital products with unique ideas</p>
													<a href="#" title="">
														20 Projects
													</a>
													<span className="iconn">
														<i className="lni lni-crown" />
													</span>
												</div>
												<div className="abt-content">
													<h3>
														<a href="17_portfolio_single_layout_1.html" title="">
															UI/UX Interaction
														</a>
													</h3>
													<p>I develop front-end with coding super smooth</p>
													<a href="#" title="">
														165 Projects
													</a>
													<span className="iconn">
														<i className="lni lni-layout" />
													</span>
												</div>
												<div className="abt-content">
													<h3>
														<a href="17_portfolio_single_layout_1.html" title="">
															Motion
														</a>
													</h3>
													<p>Create digital products with unique ideas</p>
													<a href="#" title="">
														20 Projects
													</a>
													<span className="iconn">
														<i className="lni lni-video" />
													</span>
												</div>
											</div>
										</div>
										<div className="col-lg-6">
											<div className="abt-col-text">
												<h2>Smart solutions for your business</h2>
												<h3>We know that good design mean that good business.</h3>
												<p>
													We help our client suceed by creating identities,
													digital experiences, and printmaterials that communicate
													clearly, achieve marketing goals &amp; look fantastic
													Lorem uispum dolor sit amert tunoer poea opefse ceefo
													goipully. Communicate clearly, achieve marketing goals
													&amp; look fantastic Lorem uispum dolor sit amert tunoer
													poea opefse ceefo goipully.
												</p>
												<a href="#" title="" className="btn-default v13">
													Learn More
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="section pp-scrollable" id="why-choose-us">
					<div className="slide-container">
						<h2 className="slide-number">3</h2>
						<div className="fixed-bg bg-white" />
						<div className="grow-business-v8">
							<div className="container">
								<div className="grw-content-v8 m-0">
									<div className="row align-items-center">
										<div className="col-lg-5">
											<div className="gr-text">
												<h2>Top reason for why choose miles</h2>
												<div className="why-txt-v9">
													<ul>
														<li>
															<div className="us-svs">
																<span className="svs-icon">
																	<i className="lni lni-money-protection" />
																</span>
																<div className="svs-info">
																	<h3>Affordable Price</h3>
																	<p>
																		Nanotechnology immersion along the information
																		highway will close the loop on focusing solely
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
																		Nanotechnology immersion along the information
																		highway will close the loop on focusing solely
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
																		Nanotechnology immersion along the information
																		highway will close the loop on focusing solely
																	</p>
																</div>
															</div>
														</li>
													</ul>
												</div>
											</div>
										</div>
										<div className="col-lg-7">
											<div className="gw-img">
												<img src="/static/images/gw-img3.png" alt="" />
												<div className="gw-text">
													<h1>25</h1>
													<h2>
														years <br /> of <br />
														experience
													</h2>
													<h3>The Leading In Digital Marketing Industrial</h3>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="section pp-scrollable" id="cases">
					<div className="slide-container">
						<h2 className="slide-number">4</h2>
						<div className="fixed-bg bg-gray" />
						<div className="task-section">
							<div className="container">
								<div className="task-slider">
									<div className="task-slide">
										<div className="row align-items-center">
											<div className="col-lg-6">
												<div className="tsk-text">
													<h2>Taskly Dashboard Redesign</h2>
													<span>Interaction</span>
													<p>
														Lewis nestled right into our wheelhouse. A dynamic
														co-working space attracting entrepreneurs, tinkerers,
														and creatives in the tech hub of Ann Arbor, Michigan,
														they wanted a lifestyle brand—a complete ecosystem of
														brand visuals and assets.
													</p>
													<a
														href="17_portfolio_single_layout_1.html"
														title=""
														className="btn-default v13"
													>
														View Project
													</a>
												</div>
											</div>
											<div className="col-lg-6">
												<div className="tsk-img">
													<img src="/static/images/tsk-img1.jpg" alt="" />
												</div>
											</div>
										</div>
									</div>
									<div className="task-slide">
										<div className="row align-items-center">
											<div className="col-lg-6">
												<div className="tsk-text">
													<h2>Taskly Dashboard Redesign</h2>
													<span>Interaction</span>
													<p>
														Lewis nestled right into our wheelhouse. A dynamic
														co-working space attracting entrepreneurs, tinkerers,
														and creatives in the tech hub of Ann Arbor, Michigan,
														they wanted a lifestyle brand—a complete ecosystem of
														brand visuals and assets.
													</p>
													<a
														href="17_portfolio_single_layout_1.html"
														title=""
														className="btn-default v13"
													>
														View Project
													</a>
												</div>
											</div>
											<div className="col-lg-6">
												<div className="tsk-img">
													<img src="/static/images/tsk-img1.jpg" alt="" />
												</div>
											</div>
										</div>
									</div>
									<div className="task-slide">
										<div className="row align-items-center">
											<div className="col-lg-6">
												<div className="tsk-text">
													<h2>Taskly Dashboard Redesign</h2>
													<span>Interaction</span>
													<p>
														Lewis nestled right into our wheelhouse. A dynamic
														co-working space attracting entrepreneurs, tinkerers,
														and creatives in the tech hub of Ann Arbor, Michigan,
														they wanted a lifestyle brand—a complete ecosystem of
														brand visuals and assets.
													</p>
													<a
														href="17_portfolio_single_layout_1.html"
														title=""
														className="btn-default v13"
													>
														View Project
													</a>
												</div>
											</div>
											<div className="col-lg-6">
												<div className="tsk-img">
													<img src="/static/images/tsk-img1.jpg" alt="" />
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="section pp-scrollable" id="clients">
					<div className="slide-container">
						<h2 className="slide-number">5</h2>
						<div className="fixed-bg bg-white" />
						<div className="testimonial-sec v10">
							<div className="container">
								<div className="title-v10">
									<h2>See why clients love us</h2>
								</div>
								<div className="testimonial-slider">
									<div className="row testimo-slider">
										<div className="col-lg-6">
											<div className="testimonial-slide">
												<p>
													“Originally, creative and with an innate understanding
													of their customer’s need. The team at Miles are always a
													pleasure to work with. Recommended.”
												</p>
												<div className="thmb-row">
													<div className="thmb-img">
														<img src="/static/images/thumb1.png" alt="" />
													</div>
													<div className="thmb-info">
														<h3>Bobby Hanesto</h3>
														<span>
															Director of <em>Inivisionapp</em>
														</span>
													</div>
												</div>
											</div>
										</div>
										<div className="col-lg-6">
											<div className="testimonial-slide">
												<p>
													“I don’t know what else to say, this is something that
													you haven’t seen before. Unique design, lightweight, and
													outstanding support.”
												</p>
												<div className="thmb-row">
													<div className="thmb-img">
														<img src="/static/images/thumb2.png" alt="" />
													</div>
													<div className="thmb-info">
														<h3>Jeans Grey</h3>
														<span>
															CEO of <em>BraveBred</em>
														</span>
													</div>
												</div>
											</div>
										</div>
										<div className="col-lg-6">
											<div className="testimonial-slide">
												<p>
													“Originally, creative and with an innate understanding
													of their customer’s need. The team at Miles are always a
													pleasure to work with. Recommended.”
												</p>
												<div className="thmb-row">
													<div className="thmb-img">
														<img src="/static/images/thumb1.png" alt="" />
													</div>
													<div className="thmb-info">
														<h3>Bobby Hanesto</h3>
														<span>
															Director of <em>Inivisionapp</em>
														</span>
													</div>
												</div>
											</div>
										</div>
										<div className="col-lg-6">
											<div className="testimonial-slide">
												<p>
													“I don’t know what else to say, this is something that
													you haven’t seen before. Unique design, lightweight, and
													outstanding support.”
												</p>
												<div className="thmb-row">
													<div className="thmb-img">
														<img src="/static/images/thumb2.png" alt="" />
													</div>
													<div className="thmb-info">
														<h3>Jeans Grey</h3>
														<span>
															CEO of <em>BraveBred</em>
														</span>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="partners-section v10">
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
							</div>
						</div>
					</div>
				</div>
				<div className="section pp-scrollable" id="contact">
					<div className="slide-container">
						<h2 className="slide-number">6</h2>
						<div className="fixed-bg bg-gray" />
						<div className="contact-pp-content">
							<div className="container">
								<div className="pp-map">
									<iframe
										id="gmap_canvas"
										src="https://maps.google.com/maps?q=&t=&z=13&ie=UTF8&iwloc=&output=embed"
									/>
								</div>
								<div className="pp-text">
									<h2>Contact us for any further question</h2>
									<div className="row">
										<div className="col-lg-4 col-md-6">
											<div className="pp-col">
												<div className="pp-head">
													<h3>Contact Directly</h3>
													<span>
														<i className="lni lni-envelope" />
													</span>
												</div>
												<div className="pp-content">
													<span>
														<a href="mailto:example@example.com" title="">
															contact@milesstudio.com
														</a>
													</span>
													<span>(+056) 83-458-868</span>
												</div>
											</div>
										</div>
										<div className="col-lg-4 col-md-6">
											<div className="pp-col">
												<div className="pp-head">
													<h3>our office</h3>
													<span>
														<i className="lni lni-map-marker" />
													</span>
												</div>
												<div className="pp-content">
													<span>
														962 Fifth Avenue Str, 3rd-Floor Trump Building, NY
														10006, USA
													</span>
												</div>
											</div>
										</div>
										<div className="col-lg-4 col-md-6">
											<div className="pp-col">
												<div className="pp-head">
													<h3>work with us</h3>
													<span>
														<i className="lni lni-briefcase" />
													</span>
												</div>
												<div className="pp-content">
													<span>
														Send your CV/Resumer or Linkedin to:
														carrer@milesstuio.com
													</span>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<ul className="social-vertical active v2">
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


		</>
	)
}

HomePage13.getLayout = function getLayout(page: React.ReactElement) {
	return <Layout title="Home">{page}</Layout>;
};

export default HomePage13
