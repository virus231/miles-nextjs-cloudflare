import { NextPageWithLayout } from './_app'
import { Layout } from '../app/components/Layout'


const HomePage5: NextPageWithLayout = () => {
	return (
		<>
			<header className="header-v5">
				<div className="container">
					<div className="header-content">
						<div className="logo">
							<a href="#" title="">
								<img src="/static/images/logo_2.png" alt="" />
							</a>
						</div>
						<div className="cate-lg">
							<span>travel, photography and design</span>
						</div>
						<nav>
							<ul>
								<li>
									<a className="active" href="#" title="">
										about
									</a>
									<ul>
										<li>
											<a
												href="24_about_agency.html"
												className="animsition-link"
												data-animsition-out-class="fade-out"
												title=""
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
											>
												Portfolio Parallax
											</a>
										</li>
										<li>
											<a
												href="15_portfolio_horizontal_scroll.html"
												className="animsition-link"
												data-animsition-out-class="fade-out"
												title=""
											>
												Portfolio Horizontol
											</a>
										</li>
										<li>
											<a
												href="16_portfolio_masonry.html"
												className="animsition-link"
												data-animsition-out-class="fade-out"
												title=""
											>
												Portfolio Masonary
											</a>
										</li>
										<li>
											<a
												href="17_portfolio_single_layout_1.html"
												className="animsition-link"
												data-animsition-out-class="fade-out"
												title=""
											>
												Portfolio Single Layout V1
											</a>
										</li>
										<li>
											<a
												href="18_portfolio_single_layout_2.html"
												className="animsition-link"
												data-animsition-out-class="fade-out"
												title=""
											>
												Portfolio Single Layout V2
											</a>
										</li>
										<li>
											<a
												href="19_portfolio_single_layout_3.html"
												className="animsition-link"
												data-animsition-out-class="fade-out"
												title=""
											>
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
											<a
												href="blog-layout1.html"
												className="animsition-link"
												data-animsition-out-class="fade-out"
												title=""
											>
												Blog V1
											</a>
										</li>
										<li>
											<a
												href="blog-layout2.html"
												className="animsition-link"
												data-animsition-out-class="fade-out"
												title=""
											>
												Blog V2
											</a>
										</li>
										<li>
											<a
												href="blog-single-layout1.html"
												className="animsition-link"
												data-animsition-out-class="fade-out"
												title=""
											>
												Blog Single V1
											</a>
										</li>
										<li>
											<a
												href="blog-single-layout2.html"
												className="animsition-link"
												data-animsition-out-class="fade-out"
												title=""
											>
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
											<a
												href="30_contact_1.html"
												className="animsition-link"
												data-animsition-out-class="fade-out"
												title=""
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
											>
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
						<div className="search-hd">
							<a href="#" title="">
								Search <i className="lni lni-search-alt" />
							</a>
							<form className="search-form-field">
								<input type="text" name="search" placeholder="Search Here..." />
							</form>
						</div>
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
									className="animsition-link active"
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

			<section className="main-banner-v5">
				<div className="container">
					<div className="main-banner-content">
						<div
							className="main-banner-txt wow fadeInLeft"
							data-wow-duration="1000ms"
							data-wow-delay="0ms"
						>
							<h2>
								I’m Justina Carmo I love <b>travel</b>, <span>photography</span> and{" "}
								<b>writting</b>
							</h2>
							<p>
								Here is a place that i share my everything, travel, photography and
								designing. Read, write &amp; discuss with me
							</p>
							<a href="#" title="">
								<i className="lni lni-envelope" />
								Subscribe
							</a>
						</div>
						<div
							className="ban-img wow fadeInUp"
							data-wow-duration="1000ms"
							data-wow-delay="0ms"
						>
							<img src="/static/images/ban-img.png" alt="" />
						</div>
					</div>
				</div>
			</section>

			<section className="main-content-v5">
				<div className="container-fluid">
					<div className="main-content-v5-sections">
						<div className="container">
							<div className="featured-posts-sec-v5">
								<h3 className="sc-title">Featured Posts</h3>
								<div className="featured-products-sec">
									<div className="row">
										<div className="col-lg-4 col-md-4 col-sm-6">
											<div className="featured-product">
												<div className="featured-thumbnail">
													<img
														src="/static/images/pic4.jpg"
														alt=""
														className="w-100"
													/>
												</div>
												<div className="featured-info">
													<span>travel</span>
													<h2>
														<a href="blog-single-layout1.html" title="">
															Summer activities with happy feels
														</a>
													</h2>
													<ul className="meta">
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
										<div className="col-lg-4 col-md-4 col-sm-6">
											<div className="featured-product">
												<div className="featured-thumbnail">
													<img
														src="/static/images/pic5.jpg"
														alt=""
														className="w-100"
													/>
												</div>
												<div className="featured-info">
													<span>design</span>
													<h2>
														<a href="blog-single-layout1.html" title="">
															Color’s Stories
														</a>
													</h2>
													<ul className="meta">
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
										<div className="col-lg-4 col-md-4 col-sm-6">
											<div className="featured-product">
												<div className="featured-thumbnail">
													<img
														src="/static/images/pic6.jpg"
														alt=""
														className="w-100"
													/>
												</div>
												<div className="featured-info">
													<span>design</span>
													<h2>
														<a href="blog-single-layout1.html" title="">
															The windows know to say beside you
														</a>
													</h2>
													<ul className="meta">
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
							<div className="mile-posts-content">
								<div className="row">
									<div className="col-lg-8">
										<div className="mile-pst-collection">
											<div className="mile-post">
												<div className="mile-post-thumbnail">
													<img src="/static/images/pic7.jpg" alt="" />
												</div>
												<div className="mile-post-info">
													<span className="category">Lifestyle</span>
													<span className="posted-on">July 26th, 2020</span>
													<h2>
														<a href="blog-single-layout1.html" title="">
															Experience the life of Africa’s womens
														</a>
													</h2>
													<a href="#" title="">
														<i className="lni lni-share" /> Share
													</a>
												</div>
											</div>
											<div className="mile-post">
												<div className="mile-post-thumbnail">
													<img src="/static/images/pic8.jpg" alt="" />
												</div>
												<div className="mile-post-info">
													<span className="category">design</span>
													<span className="posted-on">July 21st, 2020</span>
													<h2>
														<a href="blog-single-layout1.html" title="">
															Pastel colors - The trend of 2020
														</a>
													</h2>
													<a href="#" title="">
														<i className="lni lni-share" /> Share
													</a>
												</div>
											</div>
											<div className="mile-post v2">
												<img
													src="/static/images/pic11.jpg"
													alt=""
													className="w-100"
												/>
												<div className="mile-post-info">
													<span className="category">Lifestyle</span>
													<span className="posted-on">June 17th, 2020</span>
													<h2>
														<a href="blog-single-layout1.html" title="">
															Boy outfit
														</a>
													</h2>
													<a href="#" title="">
														<i className="lni lni-share" /> Share
													</a>
												</div>
											</div>
											<div className="mile-post">
												<div className="mile-post-thumbnail">
													<img src="/static/images/pic9.jpg" alt="" />
												</div>
												<div className="mile-post-info">
													<span className="category">travel</span>
													<span className="posted-on">May 22nd, 2020</span>
													<h2>
														<a href="blog-single-layout1.html" title="">
															Great experience in Phuket, Thailand 2019
														</a>
													</h2>
													<a href="#" title="">
														<i className="lni lni-share" /> Share
													</a>
												</div>
											</div>
											<div className="mile-post v2">
												<img
													src="/static/images/pic12.jpg"
													alt=""
													className="w-100"
												/>
												<div className="mile-post-info-v2">
													<h2>
														EBC Backpacks Simple but <strong>Powerful</strong>
													</h2>
													<span>
														Discount <strong>30% OFF</strong>
													</span>
												</div>
											</div>
											<div className="mile-post">
												<div className="mile-post-thumbnail">
													<img src="/static/images/pic10.jpg" alt="" />
												</div>
												<div className="mile-post-info">
													<span className="category">Lifestyle, design</span>
													<span className="posted-on">April 8th, 2020</span>
													<h2>
														<a href="blog-single-layout1.html" title="">
															Pastel colors - The trend of 2020
														</a>
													</h2>
													<a href="#" title="">
														<i className="lni lni-share" /> Share
													</a>
												</div>
											</div>
										</div>
										<div className="mile-pagination">
											<nav aria-label="Page navigation example">
												<ul className="pagination">
													<li className="page-item active">
														<a className="page-link" href="#">
															1
														</a>
													</li>
													<li className="page-item">
														<a className="page-link" href="#">
															2
														</a>
													</li>
													<li className="page-item">
														<a className="page-link" href="#">
															3
														</a>
													</li>
													<li className="page-item">
														<a className="page-link" href="#">
															4
														</a>
													</li>
													<li className="page-item">
														<span>...</span>
													</li>
													<li className="page-item">
														<a className="page-link" href="#">
															35
														</a>
													</li>
													<li className="page-item">
														<a className="page-link" href="#" aria-label="Next">
															<i className="lni lni-chevron-right" />
														</a>
													</li>
												</ul>
											</nav>
										</div>
									</div>
									<div className="col-lg-4">
										<div className="mile-sidedar">
											<div className="widget widget-search">
												<form>
													<input
														type="text"
														name="search"
														placeholder="Whatcha looking for?"
													/>
													<button type="submit">
														<i className="lni lni-search-alt" />
													</button>
												</form>
											</div>
											<div className="widget widget-follow">
												<h3 className="widget-title">follow me</h3>
												<ul className="wd-follow">
													<li>
														<a href="#" title="">
															<i className="lni lni-twitter-filled" />
															56K
														</a>
													</li>
													<li>
														<a href="#" title="">
															<i className="lni lni-facebook-filled" />
															26K
														</a>
													</li>
													<li>
														<a href="#" title="">
															<i className="lni lni-instagram-original" />
															66K
														</a>
													</li>
													<li>
														<a href="#" title="">
															<i className="lni lni-pinterest" />
															4.6K
														</a>
													</li>
													<li>
														<a href="#" title="">
															<i className="lni lni-youtube" />
															963
														</a>
													</li>
												</ul>
											</div>
											<div className="widget widget-popular-posts">
												<h3 className="widget-title">Popular posts</h3>
												<ul>
													<li className="wd-post">
														<span>1</span>
														<a href="blog-single-layout1.html" title="">
															Pastel colors - The trend of 2020
														</a>
													</li>
													<li className="wd-post">
														<span>1</span>
														<a href="blog-single-layout1.html" title="">
															The windows know to say beside you
														</a>
													</li>
													<li className="wd-post">
														<span>1</span>
														<a href="blog-single-layout1.html" title="">
															Inspiration #4
														</a>
													</li>
													<li className="wd-post">
														<span>1</span>
														<a href="blog-single-layout1.html" title="">
															Summer activities with happy feel
														</a>
													</li>
												</ul>
											</div>
											<div className="widget widget-categories">
												<h3 className="widget-title">categories</h3>
												<ul>
													<li>
														<a href="#" title="">
															all{" "}
														</a>
														<span>(98)</span>
													</li>
													<li>
														<a href="#" title="">
															Travel{" "}
														</a>
														<span>(54)</span>
													</li>
													<li>
														<a href="#" title="">
															lifestyle{" "}
														</a>
														<span>(9)</span>
													</li>
													<li>
														<a href="#" title="">
															design{" "}
														</a>
														<span>(34)</span>
													</li>
													<li>
														<a href="#" title="">
															other{" "}
														</a>
														<span>(12)</span>
													</li>
												</ul>
											</div>
											<div className="widget widget-instagram">
												<h3 className="widget-title">Instagram</h3>
												<div className="insta-head">
													<img src="/static/images/insta1.png" alt="" />
													<div className="insta-info">
														<h3>
															<a href="#" title="">
																justina.amg
															</a>
														</h3>
														<span>@justina.amg</span>
													</div>
													<a href="#" title="" className="follow">
														Follow
													</a>
												</div>
												<ul className="insta-count">
													<li>
														<strong>256</strong> posts
													</li>
													<li>
														<strong>4.7K</strong> followers
													</li>
													<li>
														<strong>1.2K</strong> followings
													</li>
												</ul>
												<ul className="inst-imgs">
													<li>
														<a href="#" title="">
															<img src="/static/images/inst1.jpg" alt="" />
														</a>
													</li>
													<li>
														<a href="#" title="">
															<img src="/static/images/inst2.jpg" alt="" />
														</a>
													</li>
													<li>
														<a href="#" title="">
															<img src="/static/images/inst3.jpg" alt="" />
														</a>
													</li>
													<li>
														<a href="#" title="">
															<img src="/static/images/inst4.jpg" alt="" />
														</a>
													</li>
													<li>
														<a href="#" title="">
															<img src="/static/images/inst5.jpg" alt="" />
														</a>
													</li>
													<li>
														<a href="#" title="">
															<img src="/static/images/inst6.jpg" alt="" />
														</a>
													</li>
												</ul>
											</div>
											<div className="widget widget-advertisement">
												<img
													src="/static/images/ad-img.jpg"
													alt=""
													className="w-100"
												/>
												<div className="wid-info">
													<span>
														5 days <br /> 4 nights
													</span>
													<h2>
														<a href="#" title="">
															Santorini Resort
														</a>
													</h2>
													<span className="limited-offer">
														Limited offer from <small>July 7th - Jult 12</small>
													</span>
													<strong>
														Best price: <span>$5000</span>
													</strong>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<footer className="footer-v5">
				<div className="container">
					<div className="mile-top-footer">
						<div className="row">
							<div className="col-lg-4 col-md-6">
								<div className="widget widget-about">
									<h2>
										When I was young, I lived like an old woman, and when I've got
										old, I had to live like a young person
									</h2>
									<div className="wid-newslettter">
										<h4>Newsletter</h4>
										<form>
											<input
												type="text"
												name="email"
												placeholder="Enter email address..."
											/>
											<button type="submit">
												<i className="lni lni-envelope" /> Subscribe
											</button>
										</form>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-6">
								<div className="widget widget-tags">
									<h3 className="widget-title">popular tags</h3>
									<ul>
										<li>
											<a href="#" title="">
												#wordpress{" "}
											</a>
										</li>
										<li>
											<a href="#" title="">
												#theme
											</a>
										</li>
										<li>
											<a href="#" title="">
												#psd
											</a>
										</li>
										<li>
											<a href="#" title="">
												#idea
											</a>
										</li>
										<li>
											<a href="#" title="">
												#inspiration{" "}
											</a>
										</li>
										<li>
											<a href="#" title="">
												#trending{" "}
											</a>
										</li>
										<li>
											<a href="#" title="">
												#lifestyle{" "}
											</a>
										</li>
										<li>
											<a href="#" title="">
												#design{" "}
											</a>
										</li>
									</ul>
								</div>
							</div>
							<div className="col-lg-4 col-md-6">
								<div className="widget widget-contact">
									<h3 className="widget-title">get in touch</h3>
									<h2>
										116 Fairground Rd, FL 32904, USA{" "}
										<a href="mailto:example@example.com" title="">
											hello@justina.com
										</a>
									</h2>
									<ul>
										<li>
											<a href="25_about_business.html" title="">
												About
											</a>
										</li>
										<li>
											<a href="#" title="">
												Travel
											</a>
										</li>
										<li>
											<a href="#" title="">
												Lifestyle
											</a>
										</li>
										<li>
											<a href="#" title="">
												Design
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
					</div>
					<div className="mile-bottom-footer">
						<div className="row align-items-center">
							<div className="col-lg-6">
								<div className="btm-copy">
									<img src="/static/images/logo_2.png" alt="" />
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
			</footer>
		</>
	)
}

HomePage5.getLayout = function getLayout(page: React.ReactElement) {
	return <Layout title="Home">{page}</Layout>;
};

export default HomePage5