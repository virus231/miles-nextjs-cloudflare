import { NextPageWithLayout } from './_app'
import { Layout } from '../app/components/Layout'
import {FooterVariant2} from "../app/components/Footer/FooterVariant2";
import {HeaderV1} from "../app/components/Navigation/HeaderV1";


const AboutAgency: NextPageWithLayout = () => {
return (
    <>
        <HeaderV1/>

        <section className="about-v1-page">
            <div className="about-agency-content">
                <div className="about-v-main">
                    <div
                        className="about-v-title wow fadeInUp"
                        data-wow-duration="1000ms"
                        data-wow-delay="0ms"
                    >
                        <span>about us</span>
                        <h2>
                            <strong>Say hello from Milles</strong> We know that good design
                            meant good business
                        </h2>
                    </div>
                </div>
                <div
                    className="abt-agency-banner wow slideInRight"
                    data-wow-duration="1000ms"
                    data-wow-delay="0ms"
                >
                    <img
                        src="/static/images/agency-banner.jpg"
                        alt=""
                        className="w-100"
                    />
                </div>
                <div
                    className="agency-banner-info wow fadeInUp"
                    data-wow-duration="1000ms"
                    data-wow-delay="0ms"
                >
                    <p>
                        We are a close team of creative professionals based out of Savannah,
                        Georgia. We are passionate about partnering with good people and
                        organizations to provide exceptional custom solutions.
                    </p>
                    <blockquote>
                        <p>
                            “We build thoughtful identities and experiences to elevate and
                            empower organizations.”
                        </p>
                        <h3>Jurgen Kloop</h3>
                        <span>CEO Founder Miles Studio</span>
                    </blockquote>
                </div>
            </div>
        </section>
        <section className="our-services-sec bg2">
            <div className="container">
                <div className="mile-title">
                    <h3>our services</h3>
                </div>
                <div className="our-services-content">
                    <div className="row svs-slider">
                        <div className="col-lg-5">
                            <div className="service-card-mile">
                                <img src="/static/images/icon1.png" alt="" />
                                <h2>
                                    <a href="service-two.tsx" title="">
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
                        <div className="col-lg-5">
                            <div className="service-card-mile">
                                <img src="/static/images/icon2.png" alt="" />
                                <h2>
                                    <a href="service-two.tsx" title="">
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
                        <div className="col-lg-5">
                            <div className="service-card-mile">
                                <img src="/static/images/icon3.png" alt="" />
                                <h2>
                                    <a href="service-two.tsx" title="">
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
                        <div className="col-lg-5">
                            <div className="service-card-mile">
                                <img src="/static/images/icon1.png" alt="" />
                                <h2>
                                    <a href="service-two.tsx" title="">
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
            </div>
        </section>
        <section className="agy-team-sec">
            <div className="container">
                <div
                    className="ag-title wow fadeInUp"
                    data-wow-duration="1000ms"
                    data-wow-delay="0ms"
                >
                    <h3>Meet Our Team</h3>
                    <p>
                        Meet our talented team of creatives, fun-lovers, and magic makers.
                        Shall seas yielding a he, moveth said gathering under all cattle
                        were years fruit whose isn’t.{" "}
                    </p>
                </div>
                <div className="row ag-teams">
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="ag-team">
                            <img src="/static/images/ag1.png" alt="" />
                            <h3>Atony Betrovert</h3>
                            <span>CEO Founder</span>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="ag-team">
                            <img src="/static/images/ag2.png" alt="" />
                            <h3>Luke Torres</h3>
                            <span>Co- Founder, Art Director</span>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="ag-team">
                            <img src="/static/images/ag3.png" alt="" />
                            <h3>Nathan Drake</h3>
                            <span>CTO</span>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="ag-team">
                            <img src="/static/images/ag4.png" alt="" />
                            <h3>Lina Johanson</h3>
                            <span>Management</span>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="ag-team">
                            <img src="/static/images/ag5.png" alt="" />
                            <h3>Kate Stephan</h3>
                            <span>Marketing</span>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="ag-team">
                            <img src="/static/images/ag6.png" alt="" />
                            <h3>Steve Roger</h3>
                            <span>Lead Designer</span>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 text-center">
                        <div className="join-team">
                            <i className="lni lni-users" />
                            <h3>
                                <a href="career.tsx" title="">
                                    join team
                                </a>
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="ag-office-sec">
            <div className="container">
                <div
                    className="ag-title wow fadeInUp"
                    data-wow-duration="1000ms"
                    data-wow-delay="0ms"
                >
                    <h3>Our Office</h3>
                    <p>
                        Modern life is office life. We don’t know if it’s the future our
                        ancestors dreamed of, but here we are.
                    </p>
                </div>
            </div>
            <div className="office-imgs row">
                <div
                    className="col-lg-8 col-md-8 col-sm-8 col-7 wow slideInLeft"
                    data-wow-duration="1000ms"
                    data-wow-delay="0ms"
                >
                    <img
                        src="/static/images/office1.jpg"
                        className="of-img w-100"
                        alt=""
                    />
                </div>
                <div
                    className="col-lg-4 col-md-4 col-sm-4 col-5 wow slideInLeft"
                    data-wow-duration="1000ms"
                    data-wow-delay="200ms"
                >
                    <img
                        src="/static/images/office2.jpg"
                        className="of-img v2 w-100"
                        alt=""
                    />
                </div>
            </div>
        </section>
        <section className="ag-partners">
            <div className="container">
                <div
                    className="ag-title wow fadeInUp"
                    data-wow-duration="1000ms"
                    data-wow-delay="0ms"
                >
                    <h3>Our Partners</h3>
                </div>
                <div className="pt-logos d-flex flex-wrap align-items-center">
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
        <section className="lets-sec">
            <div className="container">
                <div
                    className="lets-content wow fadeInUp"
                    data-wow-duration="1000ms"
                    data-wow-delay="0ms"
                >
                    <h2>
                        Let’s make something amazing together{" "}
                        <strong>
                            Start by{" "}
                            <a href="contact.tsx" title="">
                                saying hi
                            </a>
                        </strong>
                    </h2>
                </div>
            </div>
        </section>
        <FooterVariant2/>
    </>
    )
}

AboutAgency.getLayout = function getLayout(page: React.ReactElement) {
    return <Layout title="Home">{page}</Layout>;
};

export default AboutAgency