import classNames from 'classnames'
import { NextLink } from '../app/components/BaseNextLink'
import styles from '../styles/Home.module.scss'
import { NextPageWithLayout } from './_app'
import { Layout } from '../app/components/Layout'
import { Navigation } from '../app/components/Navigation'
import { Footer } from '../app/components/Footer'


const HomePage10: NextPageWithLayout = () => {

	return (
		<>

			<header className="header-v6 v10">
				<div className="container">
					<div className="header-content-v6">
						<div className="logo">
							<a href="#" title="">
								<img src="/static/images/logo_1.png" alt="" />
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
									className="animsition-link active"
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
			<section className="banner-v10">
				<div className="container">
					<div className="banner-content-v10">
						<div
							className="banner-txt-v10 wow fadeInUp"
							data-wow-duration="1000ms"
							data-wow-delay="0ms"
						>
							<span>miles agency</span>
							<h2>
								We build <br /> brands that lead &amp; inspire
							</h2>
							<p>
								Like any great agency, we are only as good as the result we
								deliver of our recent work
							</p>
							<a href="#" title="" className="btn-default-v10">
								Get Started
							</a>
						</div>
						<div
							className="ban-img-v10 wow zoomIn"
							data-wow-duration="1000ms"
							data-wow-delay="0ms"
						>
							<img src="/static/images/ban-img10.png" alt="" className="w-100" />
						</div>
					</div>
				</div>
			</section>
			<section className="our-services-sec v10">
				<div className="container">
					<div className="our-services-content">
						<div className="row">
							<div className="col-lg-4 col-md-6">
								<div
									className="service-card-mile wow fadeInLeft"
									data-wow-duration="1000ms"
									data-wow-delay="0ms"
								>
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
							<div className="col-lg-4 col-md-6">
								<div
									className="service-card-mile wow fadeInUp"
									data-wow-duration="1000ms"
									data-wow-delay="200ms"
								>
									<img src="/static/images/icon2.png" alt="" />
									<h2>
										<a href="service-one.tsx" title="">
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
							<div className="col-lg-4 col-md-6">
								<div
									className="service-card-mile wow fadeInRight"
									data-wow-duration="1000ms"
									data-wow-delay="400ms"
								>
									<img src="/static/images/icon3.png" alt="" />
									<h2>
										<a href="service-one.tsx" title="">
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
						</div>
					</div>
				</div>
			</section>
			<section className="about-v10">
				<div className="container">
					<div className="row about-v10-content">
						<div className="col-lg-6">
							<div
								className="abt-v10-img wow fadeInUp"
								data-wow-duration="1000ms"
								data-wow-delay="0ms"
							>
								<img src="/static/images/ban-img11.png" alt="" />
							</div>
						</div>
						<div className="col-lg-6">
							<div className="abt-v10-txt">
								<div className="title-v10">
									<span>about us</span>
									<h2>Creative Design &amp; Advertising</h2>
								</div>
								<span>
									We know that good design mean that good business.Design is so
									simple.
								</span>
								<p>
									We help our client suceed by creating identities, digital
									experiences, and printmaterials that communicate clearly,
									achieve marketing goals, and look fantastic
								</p>
								<a
									href="about-business.tsx"
									title=""
									className="btn-default-v10 v2"
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
					<ul
						className="counter-sec-v6 wow fadeInUp"
						id="counter"
						data-wow-duration="1000ms"
						data-wow-delay="0ms"
					>
						<li>
							<div className="counter-cont">
								<h2 className="count">100</h2>
								<span>
									satisfaction <br /> clients
								</span>
							</div>
						</li>
						<li>
							<div className="counter-cont">
								<h2 className="count">158</h2>
								<span>event &amp; oline courses</span>
							</div>
						</li>
						<li>
							<div className="counter-cont">
								<h2 className="count">3875</h2>
								<span>successful students on 60 countries</span>
							</div>
						</li>
					</ul>
				</div>
			</section>
			<section className="works-v3-sec v10">
				<div className="container">
					<div className="title-v10 text-center">
						<span>Portfolio</span>
						<h2>Latest Projects</h2>
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
											<a href="17_portfolio_single_layout_1.html" title="">
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
											<a href="17_portfolio_single_layout_1.html" title="">
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
											<a href="17_portfolio_single_layout_1.html" title="">
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
											<a href="17_portfolio_single_layout_1.html" title="">
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
			<section className="pricing-v10">
				<div className="container">
					<div
						className="title-v10 text-center wow fadeInUp"
						data-wow-duration="1000ms"
						data-wow-delay="0ms"
					>
						<span>Plan &amp; pricing</span>
						<h2>Start With An Affordable </h2>
					</div>
					<div className="row prices-v10">
						<div className="col-lg-4 col-md-6">
							<div className="price-v10">
								<img src="/static/images/p-icon1.png" alt="" />
								<h4>Basic</h4>
								<span>Start for everyone</span>
								<h2>
									<sup>$</sup> 9.99 <span>/ month</span>
								</h2>
								<ul>
									<li>500 request</li>
									<li>unlimited projects</li>
								</ul>
								<a href="#" title="" className="btn-default-v10 v2">
									Get Started Now
								</a>
							</div>
						</div>
						<div className="col-lg-4 col-md-6">
							<div className="price-v10">
								<div className="recommended">
									<span className="recommended">recommended</span>
								</div>
								<img src="/static/images/p-icon2.png" alt="" />
								<h4>premium</h4>
								<span>Start for team</span>
								<h2>
									<sup>$</sup> 29.99 <span>/ month</span>
								</h2>
								<ul>
									<li>2000 request</li>
									<li>unlimited projects</li>
									<li>free trial pro functions</li>
								</ul>
								<a href="#" title="" className="btn-default-v10 v2">
									Get Started Now
								</a>
							</div>
						</div>
						<div className="col-lg-4 col-md-6">
							<div className="price-v10">
								<img src="/static/images/p-icon3.png" alt="" />
								<h4>ultimate</h4>
								<span>Start for enterprise</span>
								<h2>
									<sup>$</sup> 69.99 <span>/ month</span>
								</h2>
								<ul>
									<li>5000 request</li>
									<li>unlimited projects</li>
									<li>unlimited pro functions</li>
								</ul>
								<a href="#" title="" className="btn-default-v10 v2">
									Get Started Now
								</a>
							</div>
						</div>
					</div>
					<div className="text-center pl-btm">
						<p>
							You have a large team?{" "}
							<a href="#" title="">
								Contact us
							</a>{" "}
							for information about more enterprise options
						</p>
					</div>
				</div>
			</section>
			<section className="testimonial-sec v10">
				<div className="container">
					<div
						className="title-v10 wow fadeInUp"
						data-wow-duration="1000ms"
						data-wow-delay="0ms"
					>
						<span>testimonials</span>
						<h2>Why Clients Love Us</h2>
					</div>
					<div className="testimonial-slider">
						<div className="row testimo-slider">
							<div className="col-lg-6">
								<div className="testimonial-slide">
									<p>
										“Originally, creative and with an innate understanding of
										their customer’s need. The team at Miles are always a pleasure
										to work with. Recommended.”
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
										“I don’t know what else to say, this is something that you
										haven’t seen before. Unique design, lightweight, and
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
										“Originally, creative and with an innate understanding of
										their customer’s need. The team at Miles are always a pleasure
										to work with. Recommended.”
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
										“I don’t know what else to say, this is something that you
										haven’t seen before. Unique design, lightweight, and
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
			</section>
			<section className="blogs-v10">
				<div className="container">
					<div
						className="title-v10 text-center wow fadeInUp"
						data-wow-duration="1000ms"
						data-wow-delay="0ms"
					>
						<span>our press</span>
						<h2>Lastes Articles</h2>
					</div>
					<div className="blog-posts-v10 row">
						<div className="col-lg-4 col-md-6 col-sm-6">
							<div className="post-v10">
								<div className="post-thumb">
									<img
										src="/static/images/blog-post1.jpg"
										alt=""
										className="w-100"
									/>
								</div>
								<div className="post-info">
									<span className="category">discuss</span>
									<h2>
										<a href="blog-single-layout1.html" title="">
											5 Things That You Need To Knows About E-Commerce
										</a>
									</h2>
									<p>
										Handshake scrum project learning curve termsheet buzz
										bandwidth alpha pivot analytics supply.
									</p>
									<span className="posted-on">
										May 3rd, 2020, by{" "}
										<a href="#" title="">
											Admin
										</a>
									</span>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6 col-sm-6">
							<div className="post-v10">
								<div className="post-thumb">
									<img
										src="/static/images/blog-post2.jpg"
										alt=""
										className="w-100"
									/>
								</div>
								<div className="post-info">
									<span className="category">discuss</span>
									<h2>
										<a href="single-layout1.html" title="">
											Times &amp; The Focus - How to Control Its Smart{" "}
										</a>
									</h2>
									<p>
										Handshake scrum project learning curve termsheet buzz
										bandwidth alpha pivot analytics supply.
									</p>
									<span className="posted-on">
										April 24th, 2020, by{" "}
										<a href="#" title="">
											Admin
										</a>
									</span>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6 col-sm-6">
							<div className="post-v10">
								<div className="post-thumb">
									<img
										src="/static/images/blog-post3.jpg"
										alt=""
										className="w-100"
									/>
								</div>
								<div className="post-info">
									<span className="category">resources</span>
									<h2>
										<a href="single-layout1.html" title="">
											Branding Mockup Essentials for Your Projects
										</a>
									</h2>
									<p>
										Handshake scrum project learning curve termsheet buzz
										bandwidth alpha pivot analytics supply.
									</p>
									<span className="posted-on">
										April 22th, 2020, by{" "}
										<a href="#" title="">
											Admin
										</a>
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<footer className="footer-v6 v10">
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
											<a href="about-agency.tsx" title="">
												About
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
								<div className="col-lg-7">
									<div className="btm-copy">
										<img src="/static/images/logo_1.png" alt="" />
										<p>© 2020. All Rights Reserved</p>
									</div>
								</div>
								<div className="col-lg-5">
									<ul className="social-header text-left">
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

HomePage10.getLayout = function getLayout(page: React.ReactElement) {
	return <Layout title="Home">{page}</Layout>;
};

export default HomePage10
