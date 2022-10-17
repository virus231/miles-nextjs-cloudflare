import {NextLink} from "../BaseNextLink";
import styles from "./RightMenu.module.scss"
import classNames from "classnames";


type Props = {
    isOpen: boolean;
    closeMenu: () => void;
}

export const RightMenu = ({isOpen = false, closeMenu}: Props) => {
    return <div className={classNames(styles.responsiveMenu, {
        [styles.active]: isOpen
    })}>
        <div className={classNames(styles.repHeader)}>
            <div className={classNames(styles.repLogo)}>
                <img src="/static/images/logo2.png" alt="" />
            </div>
            <div onClick={closeMenu} className={classNames(styles.closeMenu)}>
                <i className="lni lni-close"></i>
            </div>
        </div>
        <div className={classNames(styles.searchBox)}>
            <form>
                <input type="text" name="search" placeholder="Search" />
                <button type="submit"><i className="lni lni-search-alt"></i></button>
            </form>
        </div>
        <ul className={styles.mobileMenu}>
            <li>
                <NextLink className="active" href="#" >Home</NextLink>
                <ul>
                    <li>
                        <NextLink href="index.html" className="animsition-link" data-animsition-out-className="fade-out"
                                  data-text="Home Agency">Home Agency</NextLink>
                    </li>
                    <li>
                        <NextLink href="index2.html" className="animsition-link" data-animsition-out-className="fade-out"
                                  data-text="Home Studio">Home Studio</NextLink>
                    </li>
                    <li>
                        <NextLink href="index3.html" className="animsition-link" data-animsition-out-className="fade-out"
                                  data-text="Home Freelancer">Home Freelancer</NextLink>
                    </li>
                    <li>
                        <NextLink href="index4.html" className="animsition-link" data-animsition-out-className="fade-out"
                                  data-text="Home Developer">Home Developer</NextLink>
                    </li>
                    <li>
                        <NextLink href="index5.html" className="animsition-link" data-animsition-out-className="fade-out"
                                  data-text="Home Blogger">Home Blogger</NextLink>
                    </li>
                    <li>
                        <NextLink href="index7.html" className="animsition-link" data-animsition-out-className="fade-out"
                                  data-text="Home Coach">Home Coach</NextLink>
                    </li>
                    <li>
                        <NextLink href="index6.html" className="animsition-link" data-animsition-out-className="fade-out"
                                  data-text="Business Startup">Business Startup</NextLink>
                    </li>
                    <li>
                        <NextLink href="index8.html" className="animsition-link active" data-animsition-out-className="fade-out"
                                  data-text="Marketing Agency">Marketing Agency</NextLink>
                    </li>
                    <li>
                        <NextLink href="index9.html" className="animsition-link" data-animsition-out-className="fade-out"
                                  data-text="Business Consulting">Business Consulting</NextLink>
                    </li>
                    <li>
                        <NextLink href="index10.html" className="animsition-link" data-animsition-out-className="fade-out"
                                  data-text="Creative Agency">Creative Agency</NextLink>
                    </li>
                    <li>
                        <NextLink href="index11.html" className="animsition-link" data-animsition-out-className="fade-out"
                                  data-text="Creative Agency 2">Creative Agency 2</NextLink>
                    </li>
                    <li>
                        <NextLink href="index12.html" className="animsition-link" data-animsition-out-className="fade-out"
                                  data-text="Home Portfolio 1">Home Portfolio 1</NextLink>
                    </li>
                    <li>
                        <NextLink href="index13.html" className="animsition-link" data-animsition-out-className="fade-out"
                                  data-text="Home Portfolio 2">Home Portfolio 2</NextLink>
                    </li>
                </ul>
            </li>
            <li>
                <NextLink href="#" >About</NextLink>
                <ul>
                    <li>
                        <NextLink href="24_about_agency.html" className="animsition-link" data-animsition-out-className="fade-out"
                                  data-text="About Agency">About Agency</NextLink>
                    </li>
                    <li>
                        <NextLink href="25_about_business.html" className="animsition-link"
                                  data-animsition-out-className="fade-out"  data-text="About Business">About
                            Business</NextLink>
                    </li>
                    <li>
                        <NextLink href="26_about_me.html" className="animsition-link" data-animsition-out-className="fade-out"
                                  data-text="About Me">About Me</NextLink>
                    </li>
                </ul>
            </li>
            <li>
                <NextLink href="#" >Portfolio</NextLink>
                <ul>
                    <li>
                        <NextLink href="14_portfolio_parallax.html" className="animsition-link"
                                  data-animsition-out-className="fade-out"  data-text="Porfolio Parallax">Porfolio
                            Parallax</NextLink>
                    </li>
                    <li>
                        <NextLink href="15_portfolio_horizontal_scroll.html" className="animsition-link"
                                  data-animsition-out-className="fade-out"
                                  data-text="Porfolio Horizontal Scroll">Porfolio Horizontal Scroll</NextLink>
                    </li>
                    <li>
                        <NextLink href="16_portfolio_masonry.html" >Porfolio Masonary</NextLink>
                    </li>
                    <li>
                        <NextLink href="17_portfolio_single_layout_1.html" className="animsition-link"
                                  data-animsition-out-className="fade-out"  data-text="Porfolio Single V1">Porfolio
                            Single V1</NextLink>
                    </li>
                    <li>
                        <NextLink href="18_portfolio_single_layout_2.html" className="animsition-link"
                                  data-animsition-out-className="fade-out"  data-text="Porfolio Single V2">Porfolio
                            Single V2</NextLink>
                    </li>
                    <li>
                        <NextLink href="19_portfolio_single_layout_3.html" className="animsition-link"
                                  data-animsition-out-className="fade-out"  data-text="Porfolio Single V3">Porfolio
                            Single V3</NextLink>
                    </li>
                </ul>
            </li>
            <li>
                <NextLink href="#" >Service</NextLink>
                <ul>
                    <li>
                        <NextLink href="27_service_1.html" className="animsition-link" data-animsition-out-className="fade-out"
                                  data-text="Service V1">Service V1</NextLink>
                    </li>
                    <li>
                        <NextLink href="28_services_2.html" className="animsition-link" data-animsition-out-className="fade-out"
                                  data-text="Service V2">Service V2</NextLink>
                    </li>
                    <li>
                        <NextLink href="29_services_3.html" className="animsition-link" data-animsition-out-className="fade-out"
                                  data-text="Service V3">Service V3</NextLink>
                    </li>
                </ul>
            </li>
            <li>
                <NextLink href="#" >Pages</NextLink>
                <ul>
                    <li>
                        <NextLink href="32_team.html" className="animsition-link" data-animsition-out-className="fade-out"
                                  data-text="Team">Team</NextLink>
                    </li>
                    <li>
                        <NextLink href="33_career.html" className="animsition-link" data-animsition-out-className="fade-out"
                                  data-text="Career">Career</NextLink>
                    </li>
                    <li>
                        <NextLink href="34_career_detail.html" className="animsition-link" data-animsition-out-className="fade-out"
                                  data-text="Career Details">Career Details</NextLink>
                    </li>
                    <li>
                        <NextLink href="37_pricing.html" className="animsition-link" data-animsition-out-className="fade-out"
                                  data-text="Pricing">Pricing</NextLink>
                    </li>
                    <li>
                        <NextLink href="35_404_error.html" className="animsition-link" data-animsition-out-className="fade-out"
                                  data-text="404">404</NextLink>
                    </li>
                    <li>
                        <NextLink href="36_coming_soon.html" className="animsition-link" data-animsition-out-className="fade-out"
                                  data-text="Coming Soon">Coming Soon</NextLink>
                    </li>
                </ul>
            </li>
            <li>
                <NextLink href="#" >Blogs</NextLink>
                <ul>
                    <li>
                        <NextLink href="blog-layout1.html" className="animsition-link" data-animsition-out-className="fade-out"
                                  data-text="Blog Layout V1">Blog Layout V1</NextLink>
                    </li>
                    <li>
                        <NextLink href="blog-layout2.html" className="animsition-link" data-animsition-out-className="fade-out"
                                  data-text="Blog Layout V2">Blog Layout V2</NextLink>
                    </li>
                    <li>
                        <NextLink href="blog-single-layout1.html" className="animsition-link"
                                  data-animsition-out-className="fade-out"  data-text="Blog Single Layout V1">Blog
                            Single Layout V1</NextLink>
                    </li>
                    <li>
                        <NextLink href="blog-single-layout2.html" className="animsition-link"
                                  data-animsition-out-className="fade-out"  data-text="Blog Single Layout V2">Blog
                            Single Layout V2</NextLink>
                    </li>
                </ul>
            </li>
            <li>
                <NextLink href="#" >Contact</NextLink>
                <ul>
                    <li>
                        <NextLink href="30_contact_1.html" className="animsition-link" data-animsition-out-className="fade-out"
                                  data-text="Contact V1">Contact V1</NextLink>
                    </li>
                    <li>
                        <NextLink href="31_contact_2.html" className="animsition-link" data-animsition-out-className="fade-out"
                                  data-text="Contact V2">Contact V2</NextLink>
                    </li>
                </ul>
            </li>
            <li>
                <NextLink href="#" >Elements</NextLink>
                <ul>
                    <li>
                        <NextLink className="animsition-link" date-animsition-out-className="fade-out"  data-text="Counter"
                                  href="counter.html" >Counter</NextLink>
                    </li>
                    <li>
                        <NextLink className="animsition-link" date-animsition-out-className="fade-out"
                                  data-text="Blockquote" href="blockquote.html" >Blockquote</NextLink>
                    </li>
                    <li>
                        <NextLink className="animsition-link" date-animsition-out-className="fade-out"  data-text=""
                                  href="partners.html" >Partners</NextLink>
                    </li>
                    <li>
                        <NextLink className="animsition-link" date-animsition-out-className="fade-out"  data-text=""
                                  href="pricing.html" >Pricing</NextLink>
                    </li>
                    <li>
                        <NextLink className="animsition-link" date-animsition-out-className="fade-out"  data-text=""
                                  href="newsletter.html" >Newsletter</NextLink>
                    </li>
                    <li>
                        <NextLink className="animsition-link" date-animsition-out-className="fade-out"  data-text="Contact"
                                  href="contact.html" >Contact</NextLink>
                    </li>
                    <li>
                        <NextLink className="animsition-link" date-animsition-out-className="fade-out"  data-text="Team"
                                  href="team.html" >Team</NextLink>
                    </li>
                    <li>
                        <NextLink className="animsition-link" date-animsition-out-className="fade-out"  data-text="Blog"
                                  href="blog.html" >Blog</NextLink>
                    </li>
                    <li>
                        <NextLink className="animsition-link" date-animsition-out-className="fade-out"  data-text="Footer"
                                  href="footer.html" >Footer</NextLink>
                    </li>
                    <li>
                        <NextLink className="animsition-link" date-animsition-out-className="fade-out"
                                  data-text="Portfolio" href="portfolio.html" >Portfolio</NextLink>
                    </li>
                    <li>
                        <NextLink className="animsition-link" date-animsition-out-className="fade-out"
                                  data-text="Testimonials" href="testimonials.html" >Testimonials</NextLink>
                    </li>
                    <li>
                        <NextLink className="animsition-link" date-animsition-out-className="fade-out"  data-text="Header"
                                  href="header.html" >Header</NextLink>
                    </li>
                    <li>
                        <NextLink className="animsition-link" date-animsition-out-className="fade-out"
                                  data-text="Services" href="services.html" >Services</NextLink>
                    </li>
                    <li>
                        <NextLink className="animsition-link" date-animsition-out-className="fade-out"
                                  data-text="About Us" href="about-us.html" >About Us</NextLink>
                    </li>
                    <li>
                        <NextLink className="animsition-link" date-animsition-out-className="fade-out"
                                  data-text="Awards" href="awards.html" >Awards</NextLink>
                    </li>
                    <li>
                        <NextLink className="animsition-link" date-animsition-out-className="fade-out"
                                  data-text="Events" href="events.html" >Events</NextLink>
                    </li>
                    <li>
                        <NextLink className="animsition-link" date-animsition-out-className="fade-out"
                                  data-text="Features" href="features.html" >Features</NextLink>
                    </li>
                    <li>
                        <NextLink className="animsition-link" date-animsition-out-className="fade-out"
                                  data-text="Hero" href="hero.html" >Hero</NextLink>
                    </li>
                    <li>
                        <NextLink className="animsition-link" date-animsition-out-className="fade-out"
                                  data-text="Slider" href="slider.html" >Slider</NextLink>
                    </li>
                </ul>
            </li>
        </ul>
    </div>

}