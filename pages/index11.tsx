import classNames from 'classnames'
import { NextLink } from '../app/components/BaseNextLink'
import styles from '../styles/Home.module.scss'
import { NextPageWithLayout } from './_app'
import { Layout } from '../app/components/Layout'
import { Navigation } from '../app/components/Navigation'
import { Footer } from '../app/components/Footer'


const HomePage11: NextPageWithLayout = () => {

	return (
		<>

			<header className="header-v6 v11 pb">
				<div className="container">
					<div className="header-content-v6">
						<div className="logo">
							<a href="#" title="">
								<img src="/static/images/miles-agency-white.png" alt="" />
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
						<button className="nav-toggle-btn a-nav-toggle desktop-hide mobile-show ms-auto white">
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
									className="animsition-link active"
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
			<section className="main-banner-v11">
				<div className="container">
					<div
						className="content-v11 wow fadeInUp"
						data-wow-duration="1000ms"
						data-wow-delay="0ms"
					>
						<span>miles agency</span>
						<h2>
							We build <br /> brands that lead &amp; inspire
						</h2>
						<p>
							Like any great agency, we are only as good as the result we deliver
							of our recent work
						</p>
						<a href="#" title="" className="btn-default v11">
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
			</section>

			<section className="partners-section v11 gray-bg">
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
						<div className="pt-logo">
							<a href="#" title="">
								<img src="/static/images/pt6.png" alt="" />
							</a>
						</div>
						<div className="pt-logo">
							<a href="#" title="">
								<img src="/static/images/pt7.png" alt="" />
							</a>
						</div>
						<div className="pt-logo">
							<a href="#" title="">
								<img src="/static/images/pt8.png" alt="" />
							</a>
						</div>
					</div>
				</div>
			</section>

			<section className="about-v4-sec v11 gray-bg">
				<div className="container">
					<div className="about-v4-content">
						<div className="row">
							<div className="col-lg-6">
								<div className="abt-list">
									<div className="abt-content">
										<h3>
											<a href="27_service_1.html" title="">
												Branding
											</a>
										</h3>
										<p>Create digital products with unique ideas</p>
										<a href="17_portfolio_single_layout_1.html" title="">
											20 Projects
										</a>
										<span className="iconn">
											<i className="lni lni-vector" />
										</span>
									</div>
									<div className="abt-content">
										<h3>
											<a href="27_service_1.html" title="">
												UI/UX Interaction
											</a>
										</h3>
										<p>I develop front-end with coding super smooth</p>
										<a href="17_portfolio_single_layout_1.html" title="">
											165 Projects
										</a>
										<span className="iconn">
											<i className="lni lni-code" />
										</span>
									</div>
									<div className="abt-content">
										<h3>
											<a href="27_service_1.html" title="">
												Motion
											</a>
										</h3>
										<p>Create digital products with unique ideas</p>
										<a href="17_portfolio_single_layout_1.html" title="">
											20 Projects
										</a>
										<span className="iconn">
											<i className="lni lni-compass" />
										</span>
									</div>
								</div>
							</div>
							<div className="col-lg-6">
								<div
									className="abt-col-text wow fadeInUp"
									data-wow-duration="1000ms"
									data-wow-delay="0ms"
								>
									<span>about us</span>
									<h2>We brings trusted solutions your business</h2>
									<h3>We know that good design mean that good business.</h3>
									<p>
										We help our client suceed by creating identities, digital
										experiences, and printmaterials that communicate clearly,
										achieve marketing goals &amp; look fantastic Lorem uispum
										dolor sit amert tunoer poea opefse ceefo goipully. Communicate
										clearly, achieve marketing goals &amp; look fantastic Lorem
										uispum dolor sit amert tunoer poea opefse ceefo goipully.
									</p>
									<a
										href="24_about_agency.html"
										title=""
										className="btn-default v11"
									>
										Learn More
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="why-us-v8 v11">
				<div className="container">
					<div
						className="title-v8 v11 text-center wow fadeInUp"
						data-wow-duration="1000ms"
						data-wow-delay="0ms"
					>
						<span>why choose us</span>
						<h2>Top reasons for why choose us</h2>
						<p>
							Our strategy includes consistently evolving, to ensure we’re
							producing exceptional SEO for business.
						</p>
					</div>
					<div className="row fzt-row">
						<div className="col-lg-3 col-md-6 col-sm-6">
							<div className="our-fzt">
								<h3>
									<a href="27_service_1.html" title="">
										Competitor Research
									</a>
								</h3>
								<p>Help business with their brading identity system better</p>
								<span className="fzt-icon v1">
									<i className="lni lni-users" />
								</span>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 col-sm-6">
							<div className="our-fzt">
								<h3>
									<a href="27_service_1.html" title="">
										Innovatives Ideas &amp; Strategy
									</a>
								</h3>
								<p>
									Reach out your clients better through website &amp; mobile app
								</p>
								<span className="fzt-icon v2">
									<i className="lni lni-invention" />
								</span>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 col-sm-6">
							<div className="our-fzt">
								<h3>
									<a href="27_service_1.html" title="">
										Affordable Cost
									</a>
								</h3>
								<p>
									Building plan &amp; strategy for your business by social
									marketing
								</p>
								<span className="fzt-icon v3">
									<i className="lni lni-money-protection" />
								</span>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 col-sm-6">
							<div className="our-fzt">
								<h3>
									<a href="27_service_1.html" title="">
										Dedicated Support &amp; 24/7
									</a>
								</h3>
								<p>Improve quality of product with high resolution photos</p>
								<span className="fzt-icon v4">
									<i className="lni lni-headphone" />
								</span>
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
			</section>

			<section className="works-v3-sec v10 v11">
				<div className="container">
					<div
						className="title-v10 text-center wow fadeInUp"
						data-wow-duration="1000ms"
						data-wow-delay="0ms"
					>
						<span>Portfolio</span>
						<h2>Our Latest Projects</h2>
					</div>
				</div>
				<div className="work-projects">
					<div className="container">
						<div className="row work-slider">
							<div className="col-lg-6">
								<div className="work-slide">
									<img src="/static/images/pict1.jpg" alt="" />
									<div className="wkr-txt">
										<h3>
											<a href="18_portfolio_single_layout_2.html" title="">
												Arquito
											</a>
										</h3>
										<span>Interaction, Illustration</span>
									</div>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="work-slide">
									<img src="/static/images/pict2.jpg" alt="" />
									<div className="wkr-txt">
										<h3>
											<a href="18_portfolio_single_layout_2.html" title="">
												Lewis Mobile
											</a>
										</h3>
										<span>Branding, Illustration, Interaction</span>
									</div>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="work-slide">
									<img src="/static/images/pict1.jpg" alt="" />
									<div className="wkr-txt">
										<h3>
											<a href="18_portfolio_single_layout_2.html" title="">
												Arquito
											</a>
										</h3>
										<span>Interaction, Illustration</span>
									</div>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="work-slide">
									<img src="/static/images/pict2.jpg" alt="" />
									<div className="wkr-txt">
										<h3>
											<a href="18_portfolio_single_layout_2.html" title="">
												Lewis Mobile
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

			<section className="award-certificate-sec">
				<div className="container">
					<div
						className="title-v8 v11 text-center wow fadeInUp"
						data-wow-duration="1000ms"
						data-wow-delay="0ms"
					>
						<span>awards</span>
						<h2>Rewards for our efforts</h2>
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
			</section>

			<section className="team-sec-v11">
				<div className="container">
					<div
						className="title-v8 v11 text-center wow fadeInUp"
						data-wow-duration="1000ms"
						data-wow-delay="0ms"
					>
						<span>team</span>
						<h2>Join 4000+ talented members of Miles</h2>
					</div>
					teams end--&gt;
					<div className="full-div text-center">
						<a href="33_career.html" title="" className="btn-default v11">
							Become our member
						</a>
					</div>
				</div>
			</section>
			<section className="blog-section-v7 v11">
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

			<section className="testimonial-sec v10 v11">
				<div className="container">
					<div
						className="title-v8 v11 text-center wow fadeInUp"
						data-wow-duration="1000ms"
						data-wow-delay="0ms"
					>
						<span>Testimonials </span>
						<h2>See why clients love us</h2>
					</div>
					<div className="testimonial-slider style2">
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
				</div>
			</section>
			<section className="contact-sec v11 pf-single">
				<div className="container">
					<div className="border-top-content">
						<div
							className="title-v8 v11 text-center wow fadeInUp"
							data-wow-duration="1000ms"
							data-wow-delay="0ms"
						>
							<span>drop a line</span>
							<h2>Kick-start your project now with us</h2>
						</div>
						<form className="contact-form">
							<div className="row">
								<div className="col-md-4">
									<div className="form-group">
										<input
											type="text"
											className="form--control"
											id="name"
											name="name"
											placeholder=""
										/>
										<label htmlFor="name">
											Full Name <span>*</span>{" "}
										</label>
									</div>
								</div>
								<div className="col-md-4">
									<div className="form-group">
										<input
											type="text"
											className="form--control"
											id="email"
											name="email"
											placeholder=""
										/>
										<label htmlFor="email">
											Email Address <span>*</span>
										</label>
									</div>
								</div>
								<div className="col-md-4">
									<div className="form-group">
										<input
											type="text"
											className="form--control"
											id="subject"
											name="subject"
											placeholder=""
										/>
										<label htmlFor="subject">Subject</label>
									</div>
								</div>
								<div className="col-md-12">
									<div className="form-group">
										<textarea
											className="form--control"
											id="message"
											defaultValue={""}
										/>
										<label htmlFor="message">Your message here</label>
									</div>
								</div>
								<div className="col-md-12">
									<div className="form-group text-center m-0">
										<button type="submit" className="btn-default v11 no-bg">
											Submit Your Inquiry
										</button>
									</div>
								</div>
							</div>
						</form>
					</div>
				</div>
			</section>
			<footer className="footer-v9 v11">
				<div className="container">
					<div className="footer-content-v9 row">
						<div className="col-lg-4 col-md-6 col-sm-6">
							<div className="widget widget-about">
								<img src="/static/images/logo_1.png" alt="" />
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

HomePage11.getLayout = function getLayout(page: React.ReactElement) {
	return <Layout title="Home">{page}</Layout>;
};

export default HomePage11
