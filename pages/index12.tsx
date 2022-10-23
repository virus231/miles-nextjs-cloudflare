import classNames from 'classnames'
import { NextLink } from '../app/components/BaseNextLink'
import styles from '../styles/Home.module.scss'
import { NextPageWithLayout } from './_app'
import { Layout } from '../app/components/Layout'
import { Navigation } from '../app/components/Navigation'
import { Footer } from '../app/components/Footer'


const HomePage12: NextPageWithLayout = () => {

	return (
		<>
			<header className="header-v12 pb">
				<div className="container">
					<div className="header-content">
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
									className="animsition-link active"
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
			<div id="pagepiling">
				<div className="section pp-scrollable">
					<div className="slide-container">
						<h2 className="page-num">Hello</h2>
						<div className="fixed-bg bg-1" />
						<div className="container">
							<div className="sl-content">
								<div className="row align-items-center">
									<div className="col-lg-6 col-md-6">
										<div
											className="sl-text wow fadeInUp"
											data-wow-duration="1000ms"
											data-wow-delay="0ms"
										>
											<h2>Where your ideas evolve into products</h2>
											<span>
												miloose creative digtal <br /> studio
											</span>
											<p>
												Like any great agency, we are only as good as the result
												we deliver of our recent work
											</p>
											<a href="#" title="" className="btn-default-v12">
												Get started
											</a>
										</div>
									</div>
									<div className="col-lg-6 col-md-6">
										<div
											className="bnm-img wow zoomIn"
											data-wow-duration="1000ms"
											data-wow-delay="0ms"
										>
											<img src="/static/images/bn-img1.png" alt="" />
											<a
												href="https://www.youtube.com/watch?v=vw6QmjPpdy4"
												title=""
												className="viz-btn html5lightbox"
											>
												<i className="lni lni-play" />
												<span>See our story</span>
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="section pp-scrollable">
					<div className="slide-container">
						<h2 className="page-num">services</h2>
						<div className="fixed-bg bg-white" />
						<div className="misson-section-v8">
							<div className="container">
								<div className="mission-sec">
									<div className="row">
										<div className="col-xl-6">
											<div
												className="crlce-misz wow fadeInUp"
												data-wow-duration="1000ms"
												data-wow-delay="0ms"
											>
												<ul className="crlce-list">
													<li className="v1 clr-v1">
														<div className="crlce-info">
															<i className="lni lni-crown" />
															<h3>
																Branding <br /> Identity
															</h3>
														</div>
														<div className="crlce-img">
															<img src="/static/images/crcle-img1.png" alt="" />
														</div>
													</li>
													<li className="v2 clr-v2">
														<div className="crlce-info">
															<i className="lni lni-layout" />
															<h3>
																UI/UX <br /> Interaction
															</h3>
														</div>
														<div className="crlce-img">
															<img src="/static/images/crcle-img2.png" alt="" />
														</div>
													</li>
													<li className="v3 clr-v3">
														<div className="crlce-info">
															<i className="lni lni-video" />
															<h3>
																Motion <br /> Video
															</h3>
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
												<h2>We provide trusted solutions for your business</h2>
												<span>
													“We know good design meant that good business.”
												</span>
												<p>
													We help our client suceed by creating identities,
													digital experiences, and printmaterials that communicate
													clearly, achieve marketing goals &amp; look fantastic
												</p>
												<a
													href="24_about_agency.html"
													title=""
													className="btn-default-v12 no-bg"
												>
													Learn More
												</a>
												<span className="ps-txt">
													If you're hurry, quick call for us. Our supporters alway
													24/7{" "}
												</span>
												<div className="wd-inz">
													<span className="cinon">
														<i className="lni lni-phone" />
													</span>
													<div className="wl-info">
														<span>hotline 24/7</span>
														<h3>+65 - 3002 56 56 376</h3>
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
				<div className="section pp-scrollable">
					<div className="slide-container">
						<h2 className="page-num">Cases</h2>
						<div className="fixed-bg bg-gray" />
						<div className="latest-projects-v12">
							<div className="container">
								<h3 className="ld-head">latest projects</h3>
								<div className="projects-list-v12">
									<div className="projects-head-top">
										<div className="projectt-info">
											<h2>
												<a href="#" title="">
													Fayer <br />
													Fov
												</a>
											</h2>
											<span>2020 / Interaction</span>
											<div className="project-thumbnail">
												<img src="/static/images/pr-thumb1.jpg" alt="" />
											</div>
										</div>
										<div className="projectt-info v2 ms-auto">
											<h2>
												<a href="#" title="">
													Lumio Email <br />
													Marketing
												</a>
											</h2>
											<span>2018 / interaction, motion</span>
											<div className="project-thumbnail">
												<img src="/static/images/pr-thumb1.jpg" alt="" />
											</div>
										</div>
									</div>
									<div className="projects-head-top">
										<div className="projectt-info">
											<h2>
												<a href="#" title="">
													Arquito
												</a>
											</h2>
											<span>2017 / Interaction, branding</span>
											<div className="project-thumbnail">
												<img src="/static/images/pr-thumb1.jpg" alt="" />
											</div>
										</div>
										<div className="projectt-info v3">
											<h2>
												<a href="#" title="">
													Lewis <br />
													Mobile
												</a>
											</h2>
											<span>2017 / Interaction, Illustration</span>
											<div className="project-thumbnail">
												<img src="/static/images/pr-thumb1.jpg" alt="" />
											</div>
										</div>
										<div className="more-projects">
											<a href="#" title="">
												more <br />
												projects
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="section pp-scrollable">
					<div className="slide-container">
						<h2 className="page-num">Partners</h2>
						<div className="fixed-bg bg-white" />
						<div className="clients-sec-v3 pb-0">
							<div className="container">
								<div className="section-title-v3">
									<h2>The trust from client make our value</h2>
									<span>
										Work with many big brands, brings for me great experience.
									</span>
								</div>
								<div className="client-works client-slider">
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
								<ul className="counter-sec border-bottom" id="counter">
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
						</div>
					</div>
				</div>
				<div className="section pp-scrollable">
					<div className="slide-container">
						<div className="fixed-bg bg-gray" />
						<h2 className="page-num">Testimonials</h2>
						<div className="testi-v3-sec v7">
							<div className="container">
								<div className="row align-items-center">
									<div className="col-lg-7 col-md-12">
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
									<div className="col-lg-5 col-md-12">
										<div className="testi-v3-slider">
											<div className="testi-v3-slide current" id="tab1">
												<span className="t-icon">
													<i className="lni lni-quotation" />
												</span>
												<p>
													I don’t know what else to say, this is something that
													you haven’t seen before. Unique design, lightweight, and
													outstanding support.
												</p>
												<h3>Edison Cavani</h3>
												<span>Product Management at Spotify</span>
											</div>
											<div className="testi-v3-slide" id="tab2">
												<span className="t-icon">
													<i className="lni lni-quotation" />
												</span>
												<p>
													this is something that you haven’t seen before. Unique
													design, lightweight, and outstanding support.
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
													I don’t know what else to say, this is something that
													you haven’t seen before. Unique design, lightweight, and
													outstanding support.
												</p>
												<h3>Edison Cavani</h3>
												<span>Product Management at Spotify</span>
											</div>
											<div className="testi-v3-slide" id="tab5">
												<span className="t-icon">
													<i className="lni lni-quotation" />
												</span>
												<p>
													this is something that you haven’t seen before. Unique
													design, lightweight, and outstanding support.
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
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="section pp-scrollable">
					<div className="slide-container">
						<div className="fixed-bg bg-white" />
						<h2 className="page-num">Awards</h2>
						<div className="container">
							<div className="sec-title-v5">
								<h2>Rewards for our efforts</h2>
								<span>
									It's always good to receive positive and constructive feedback
									for your work - from clients and moreover, from designers!
								</span>
							</div>
							<div className="certicications-sec pp-scrollable">
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
				</div>
				<div className="section pp-scrollable">
					<div className="slide-container">
						<div className="fixed-bg bg-gray" />
						<h2 className="page-num">Contact</h2>
						<div className="contact-piling">
							<div className="container">
								<div className="row">
									<div className="col-lg-6">
										<div className="map-address">
											<h3>
												Brooklyn, <span>New York</span>
											</h3>
											<p>
												962 Fifth Avenue Str, 3rd Floor-Trump Building NY 10006,
												United State.
											</p>
											<span className="mail">
												Email:{" "}
												<a href="mailto:example@example.com" title="">
													info@milesstudio.co
												</a>
											</span>
											<span className="call-dir">Call directly:</span>
											<h2 className="phone">+8(663)125-08-59</h2>
											<div className="office-addrs">
												<h3>Brand Offices:</h3>
												<ul>
													<li>
														<a href="#" title="">
															Allentown PA
														</a>
													</li>
													<li>
														<a href="#" title="">
															Allanta, GA
														</a>
													</li>
													<li>
														<a href="#" title="">
															Chicago, IL
														</a>
													</li>
													<li>
														<a href="#" title="">
															Dallas, TX
														</a>
													</li>
													<li>
														<a href="#" title="">
															Edison, NJ
														</a>
													</li>
													<li>
														<a href="#" title="">
															Houston, TX
														</a>
													</li>
												</ul>
											</div>
										</div>
									</div>
									<div className="col-lg-6">
										<div className="mile-contect-form">
											<h2>Kick-start your project now</h2>
											<form>
												<input type="text" name="name" placeholder="Full Name" />
												<input
													type="text"
													name="email"
													placeholder="Email Address"
												/>
												<input
													type="text"
													name="subject"
													placeholder="Subject (optional)"
												/>
												<textarea
													name="message"
													placeholder="Your Message"
													defaultValue={""}
												/>
												<button type="submit" className="btn-default-v12">
													Send Message
												</button>
											</form>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<ul className="social-vertical v12">
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
			<div className="py-text">
				<p>
					© miles 2020 <br /> All Rights Reserved
				</p>
			</div>

		</>
	)
}

HomePage12.getLayout = function getLayout(page: React.ReactElement) {
	return <Layout title="Home">{page}</Layout>;
};

export default HomePage12
