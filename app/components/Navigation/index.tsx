import classNames from "classnames"
import { useState } from "react"
import { navigationItems } from "../../_mock/menu-config"
import { NextLink } from "../BaseNextLink"
import styles from "./Navigation.module.scss"

type Props = {
    setOpen: () => void;
}

export const Navigation = ({setOpen}: Props) => {

    return <header className={styles.headerV8}>
        <div className="container">
            <div className={styles.headerContentV8}>
                <div className={styles.logoV8}>
                    <NextLink href="index.html" title="logo">
                        <img src="/static/images/logo_8.png" alt="Logo" />
                    </NextLink>
                </div>
                <nav>
                    <ul>
                        {
                            navigationItems.map((item, index) => (
                                <li key={item.name}>
                                    <div>
                                        {item.name}
                                    </div>
                                    <ul className={styles.hoverMenu}>
                                        {item.children.map((child, index) => (
                                            <li key={child.name}>
                                                <NextLink href={child.href}>
                                                    {child.name}
                                                </NextLink>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            ))
                        }
                        <li>
                            <div>Elements</div>
                            <ul className={classNames(styles.hoverMenu)} style={{
                                width: "300px"
                            }}>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-6">
                                            <li><NextLink href="counter.html" >Counter</NextLink></li>
                                            <li>
                                                <NextLink href="blockquote.html" >Blockquote</NextLink>
                                            </li>
                                            <li><NextLink href="partners.html" >Partners</NextLink></li>
                                            <li><NextLink href="pricing.html" >Pricing</NextLink></li>
                                            <li>
                                                <NextLink href="newsletter.html" >Newsletter</NextLink>
                                            </li>
                                            <li><NextLink href="contact.html" >Contact</NextLink></li>
                                            <li><NextLink href="team.html" >Team</NextLink></li>
                                            <li><NextLink href="awards.html" >Awards</NextLink></li>
                                            <li><NextLink href="features.html" >Features</NextLink></li>
                                            <li><NextLink href="events.html" >Events</NextLink></li>
                                        </div>
                                        <div className="col-6">
                                            <li><NextLink href="blog.html" >Blog</NextLink></li>
                                            <li><NextLink href="footer.html" >Footer</NextLink></li>
                                            <li>
                                                <NextLink href="portfolio.html" >Portfolio</NextLink>
                                            </li>
                                            <li>
                                                <NextLink href="testimonials.html" >Testimonials</NextLink>
                                            </li>
                                            <li><NextLink href="header.html" >Header</NextLink></li>
                                            <li><NextLink href="slider.html" >Slider</NextLink></li>
                                            <li><NextLink href="hero.html" >Hero</NextLink></li>
                                            <li><NextLink href="about-us.html" >About Us</NextLink></li>
                                            <li><NextLink href="services.html" >Services</NextLink></li>
                                        </div>
                                    </div>
                                </div>
                            </ul>
                        </li>
                    </ul>
                </nav>

                <NextLink href="#" className={styles.chatBtn}>
                    Let’s chat!
                    <i className="lni lni-comments-reply"></i>
                </NextLink>

                <button type="button"
                        className={classNames(styles.navToggleBtn, "ms-auto")}
                        onClick={setOpen}
                    // className="nav-toggle-btn a-nav-toggle ms-auto"
                >
                    <span className={classNames(styles.navToggle, "nav-toggle-sm")}
                    >
                      <span className={classNames(styles.stick, styles.stick1)}></span>
                      <span className={classNames(styles.stick, styles.stick2)}></span>
                      <span className={classNames(styles.stick, styles.stick3)}></span>
                    </span>
                </button>

            </div>
        </div>
    </header>
}