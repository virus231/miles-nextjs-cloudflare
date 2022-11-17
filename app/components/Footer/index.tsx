import classNames from 'classnames';
import { NextLink } from '../BaseNextLink';
import styles from './Footer.module.scss';

export const Footer = () => {


    return <footer className={classNames(styles.footerV6, styles.v8)}>
        <div className="container">
            <div className={styles.footerContentV6}>
                <div className="row">
                    <div className="col-lg-6">
                        <div className={styles.widgetAbt}
                             data-wow-duration="1000ms"
                             data-wow-delay="0ms">
                            <h2>Boost your business up to high level</h2>
                            <h2>Start by
                                <div> saying hi</div>
                            </h2>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className={styles.widgetFtServices}>
                            <h3>Services</h3>
                            <ul>
                                <li><NextLink href="#">SEO Marketing</NextLink></li>
                                <li><NextLink href="#">SEO Services</NextLink></li>
                                <li><NextLink href="#">Pay Per Click</NextLink></li>
                                <li><NextLink href="#">SEO Audit</NextLink></li>
                                <li><NextLink href="#">FB/GG Ads</NextLink></li>
                                <li><NextLink href="#">Email Marketing</NextLink></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className={classNames(styles.getTouchTxt, 'mw-100 wow fadeInRight')}
                             data-wow-duration="1000ms"
                             data-wow-delay="0ms">
                            <h5>Contact</h5>
                            <h4>90 Fairground Rd, FL 3290, United States</h4>
                            <NextLink className={styles.email} href="#">hello@milseo.co</NextLink>
                            <ul className={styles.contactMenu}>
                                <li>
                                    <NextLink href="15_portfolio_horizontal_scroll.html">Works</NextLink>
                                </li>
                                <li><NextLink href="24_about_agency.html">About</NextLink></li>
                                <li><NextLink href="blog-layout1.html">News</NextLink></li>
                                <li><NextLink href="30_contact_1.html">Contact</NextLink></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={styles.mileBottomFooter}>
                    <div className="row align-items-center">
                        <div className="col-lg-8">
                            <div className={styles.btmCopy}>
                                <img src="/static/images/logo8.png" alt="" />
                                <p>© 2020. All Rights Reserved</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <ul className={styles.socialHeader}>
                                <li>
                                    <NextLink href="#"><i className="lni lni-twitter-original"></i></NextLink>
                                </li>
                                <li>
                                    <NextLink href="#"><i className="lni lni-facebook-filled"></i></NextLink>
                                </li>
                                <li>
                                    <NextLink href="#"><i className="lni lni-instagram-original"></i></NextLink>
                                </li>
                                <li>
                                    <NextLink href="#"><i className="lni lni-pinterest"></i></NextLink>
                                </li>
                                <li>
                                    <NextLink href="#"><i className="lni lni-youtube"></i></NextLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>;
};