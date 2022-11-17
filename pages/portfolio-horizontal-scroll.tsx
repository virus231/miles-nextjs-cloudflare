import classNames from 'classnames';
import { NextLink } from '../app/components/BaseNextLink';
import styles from '../styles/Home.module.scss';
import { NextPageWithLayout } from './_app';
import { Layout } from '../app/components/Layout';
import { MainNavigation } from '../app/components/Navigation/MainNavigation';
import { MainFooter } from '../app/components/Footer/MainFooter';


const PortfolioHorizontalScroll: NextPageWithLayout = () => {
	return (
		<>

			<header>
				<div className="container-fluid">
					<div className="header-content d-flex flex-wrap align-items-center">
						<div className="logo">
							<a href="#" title="">
								<img src="/static/images/logo2.png" alt="" />
							</a>
						</div>
						<div className="mile-right ms-auto">
							<button className="nav-toggle-btn a-nav-toggle ms-auto">
								<span className="nav-toggle-title">Menu</span>
								<span className="nav-toggle nav-toggle-sm">
									<span className="stick stick-1" />
									<span className="stick stick-2" />
									<span className="stick stick-3" />
								</span>
							</button>
							<a href="#" title="" className="btn-default no-bg">
								Let’s talk
								<i className="lni lni-comments" />
							</a>
						</div>
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
						<a href="#" title="">
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
						<a className="active" href="#" title="">
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
									className="animsition-link active"
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
			<section className="portfolio-horizontol">
				<div className="pf-hr-slider row">
					<div className="col-lg-3">
						<div className="pf-hr-slide">
							<div className="pfr-thumb">
								<img src="/static/images/ph1.jpg" alt="" className="w-100" />
							</div>
							<div className="pfr-info">
								<h3>
									<a href="portfolio-single-layout-two.tsx" title="">
										Bynazo Finance Manage App
									</a>
								</h3>
							</div>
						</div>
					</div>
					<div className="col-lg-3">
						<div className="pf-hr-slide">
							<div className="pfr-thumb">
								<img src="/static/images/ph2.jpg" alt="" className="w-100" />
							</div>
							<div className="pfr-info">
								<h3>
									<a href="portfolio-single-layout-two.tsx" title="">
										Lewis Agency
									</a>
								</h3>
							</div>
						</div>
					</div>
					<div className="col-lg-3">
						<div className="pf-hr-slide">
							<div className="pfr-thumb">
								<img src="/static/images/ph3.jpg" alt="" className="w-100" />
							</div>
							<div className="pfr-info">
								<h3>
									<a href="portfolio-single-layout-two.tsx" title="">
										BDash UI Dashboard
									</a>
								</h3>
							</div>
						</div>
					</div>
					<div className="col-lg-3">
						<div className="pf-hr-slide">
							<div className="pfr-thumb">
								<img src="/static/images/ph4.jpg" alt="" className="w-100" />
							</div>
							<div className="pfr-info">
								<h3>
									<a href="portfolio-single-layout-two.tsx" title="">
										Bynazo Finance Manage App
									</a>
								</h3>
							</div>
						</div>
					</div>
					<div className="col-lg-3">
						<div className="pf-hr-slide">
							<div className="pfr-thumb">
								<img src="/static/images/ph1.jpg" alt="" className="w-100" />
							</div>
							<div className="pfr-info">
								<h3>
									<a href="portfolio-single-layout-two.tsx" title="">
										Bynazo Finance Manage App
									</a>
								</h3>
							</div>
						</div>
					</div>
					<div className="col-lg-3">
						<div className="pf-hr-slide">
							<div className="pfr-thumb">
								<img src="/static/images/ph2.jpg" alt="" className="w-100" />
							</div>
							<div className="pfr-info">
								<h3>
									<a href="portfolio-single-layout-two.tsx" title="">
										Lewis Agency
									</a>
								</h3>
							</div>
						</div>
					</div>
					<div className="col-lg-3">
						<div className="pf-hr-slide">
							<div className="pfr-thumb">
								<img src="/static/images/ph3.jpg" alt="" className="w-100" />
							</div>
							<div className="pfr-info">
								<h3>
									<a href="portfolio-single-layout-two.tsx" title="">
										BDash UI Dashboard
									</a>
								</h3>
							</div>
						</div>
					</div>
					<div className="col-lg-3">
						<div className="pf-hr-slide">
							<div className="pfr-thumb">
								<img src="/static/images/ph4.jpg" alt="" className="w-100" />
							</div>
							<div className="pfr-info">
								<h3>
									<a href="portfolio-single-layout-two.tsx" title="">
										Bynazo Finance Manage App
									</a>
								</h3>
							</div>
						</div>
					</div>
				</div>
				<h2 className="pagee-title">ui/ux</h2>
			</section>

		</>
	);
};

PortfolioHorizontalScroll.getLayout = function getLayout(page: React.ReactElement) {
	return <Layout title="Home">{page}</Layout>;
};

export default PortfolioHorizontalScroll;
