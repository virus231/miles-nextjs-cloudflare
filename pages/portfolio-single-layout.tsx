import { NextPageWithLayout } from './_app';
import { Layout } from '../app/components/Layout';
import { FooterVariant1 } from '../app/components/Footer/FooterVariant1';
import { carouselsExample } from './index';
import Carousel, { CarouselArrows, CarouselDots } from '../app/components/carousel';
import { useRef, useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';


const tabItems = [
    {
        id: '1',
        title: 'strategy'
    },
    {
        id: '2',
        title: 'ui-ux'
    },
    {
        id: '3',
        title: 'testing'
    },
    {
        id: '4',
        title: 'showcase'
    },
];  

const PortfolioSingleLayoutOnePage: NextPageWithLayout = () => {
    const carouselRef = useRef<Carousel | null>(null);
    const carouselRef2 = useRef<Carousel | null>(null);
    const [key, setKey] = useState<string>('strategy');

    const carouselSettings = {
        slidesToShow: 4,
        dots: true,
        arrows: false,
        centerMode: false,
        ...CarouselDots({
            rounded: true,
            sx: { mt: '0px', color: '#f59e31' }
        }),
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 2 }
            },
            {
                breakpoint: 600,
                settings: { slidesToShow: 2 }
            },
            {
                breakpoint: 480,
                settings: { slidesToShow: 1, centerPadding: '0' }
            }
        ]
    };

    const carouselSettings2 = {
        slidesToShow: 1,
        dots: false,
        arrows: false,
        centerMode: false
    };


    const handlePrev = () => {
        carouselRef2.current?.slickPrev();
    };

    const handleNext = () => {
        carouselRef2.current?.slickNext();
    };

    return (
        <>
            <header className="pb">
                <div className="container-fluid">
                    <div className="header-content d-flex flex-wrap align-items-center">
                        <div className="logo">
                            <a href="#" title="" className="white-logo">
                                <img src="/static/images/logo.png" alt="" />
                            </a>
                            <a href="#" title="" className="dark-logo">
                                <img src="/static/images/logo2.png" alt="" />
                            </a>
                        </div>
                        <div className="mile-right ms-auto">
                            <button className="nav-toggle-btn a-nav-toggle white ms-auto">
                                <span className="nav-toggle-title">Menu</span>
                                <span className="nav-toggle nav-toggle-sm">
                                    <span className="stick stick-1" />
                                    <span className="stick stick-2" />
                                    <span className="stick stick-3" />
                                </span>
                            </button>
                            <a href="#" title="" className="btn-default white no-bg">
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
                                    className="animsition-link active"
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

            <div className="project-single-slider">
                <CarouselArrows
                    textLeftArrow="Previous"
                    textRightArrow="Next"
                    leftButtonProps={{
                        sx: {
                            fontSize: '14px',
                            color: '#000',
                            fontWeight: '700',
                            textTransform: 'uppercase',
                            // backgroundColor: '#fff',
                            border: '0',
                            width: 'auto',
                            height: '42px',
                            lineHeight: '42px',
                            top: '50%',
                            padding: '0 24px',
                            letterSpacing: '2 px',
                            borderRadius: '0',
                            transform: 'rotate(-90deg)',
                            '&:hover': {
                                boxShadow: 'inherit',
                                backgroundColor: '#f93',
                                color: '#fff'
                            }
                        }
                    }}
                    rightButtonProps={{
                        sx: {
                            fontSize: '14px',
                            color: '#000',
                            fontWeight: '700',
                            textTransform: 'uppercase',
                            // backgroundColor: '#fff',
                            border: '0',
                            width: 'auto',
                            height: '42px',
                            lineHeight: '42px',
                            top: '50%',
                            padding: '0 24px',
                            letterSpacing: '2 px',
                            borderRadius: '0',
                            transform: 'rotate(90deg)',
                            '&:hover': {
                                boxShadow: 'inherit',
                                backgroundColor: '#f93',
                                color: '#fff'
                            }
                        }
                    }}
                    onNext={handleNext}
                    topSpace={50}
                    onPrevious={handlePrev}
                    sx={{
                        zIndex: 9,
                        color: '#ccc'
                    }}
                >
                    <Carousel ref={carouselRef2} {...carouselSettings2}>
                        {carouselsExample.map((item) => (
                            <div key={item.id} className="project-single-slide">
                                <div className="pf-single-banner">
                                    <div className="container">
                                        <div
                                            className="pf-banner d-flex justify-content-center wow fadeInUp"
                                            data-wow-duration="1000ms"
                                            data-wow-delay="0ms"
                                        >
                                            <img src="/static/images/pf-banner.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="project-content-v1">
                                    <div className="container">
                                        <div className="row project-v1-info">
                                            <div className="col-lg-7">
                                                <div className="project-dt">
                                                    <h2>Byzano Finance Manage App</h2>
                                                    <div className="row">
                                                        <div className="col-md-6 col-sm-6">
                                                            <div className="dd-tinfo">
                                                                <h3>client</h3>
                                                                <span>IBM Finance Center Global Inc.</span>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 col-sm-6">
                                                            <div className="dd-tinfo">
                                                                <h3>team</h3>
                                                                <span>Daniel Tan - Designer</span>{' '}
                                                                <span>Naby Keita - Mobile Developer</span>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 col-sm-6">
                                                            <div className="dd-tinfo">
                                                                <h3>services</h3>
                                                                <span>UI/UX, Branding</span>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 col-sm-6">
                                                            <div className="dd-tinfo">
                                                                <h3>date</h3>
                                                                <span>Feburary 25th, 2020</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-5">
                                                <div className="ppr-sldr wow fadeInRight" data-wow-duration="1000ms" data-wow-delay="0ms">
                                                    <p>
                                                        “Originally, creative &amp; with an innate understanding of their customer’s need.
                                                        The team at Miles are always a pleasure to work !”
                                                    </p>
                                                    <div className="pp-info">
                                                        <div className="pp-img">
                                                            <img src="/static/images/thumb1.png" alt="" />
                                                        </div>
                                                        <div className="pp-dt">
                                                            <h3>Enesto Valverde</h3>
                                                            <span>
                                                                Director of{' '}
                                                                <a href="#" title="">
                                                                    byzano.co
                                                                </a>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="txt-content text-center wow fadeInUp"
                                            data-wow-duration="1000ms"
                                            data-wow-delay="0ms"
                                        >
                                            <p>
                                                Byzano nestled right into our wheelhouse. A dynamic co-working space attracting
                                                entrepreneurs, tinkerers, and creatives in the tech hub of Ann Arbor, Michigan, they wanted
                                                a lifestyle brand—a complete ecosystem of brand visuals and assets that could be worn,
                                                posted, shared.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Carousel>
                </CarouselArrows>
            </div>

            <section className="challenge-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="mv-title">
                                <span>challenge</span>
                                <h2>Best finance app professional &amp; friendly for all people.</h2>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="mv-para">
                                <p>
                                    <strong>Miles Studio</strong> believes a team of creatives who are excited about unique ideas and help
                                    digital and fin-tech companies. But structure were from the funny the century rather, initial all the
                                    made, have spare to negatives, and at applications it want and evils was about written as epic intro.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row sl-sec">
                        <div className="col-md-6 col-sm-6 col-6">
                            <div className="zoom-img">
                                <img src="/static/images/sl-img1.jpg" alt="" className="w-100" />
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6 col-6">
                            <div className="zoom-img">
                                <img src="/static/images/sl-img2.jpg" alt="" className="w-100" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row op-row">
                        <div className="col-lg-6">
                            <div className="op-details wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="0ms">
                                <div className="mv-title">
                                    <span>our progress</span>
                                    <h2>Creating an unique visual system and strategy.</h2>
                                </div>
                                <p>
                                    We're a team of creatives who are excited about unique ideas and help digital and fin-tech companies.
                                    But structure were from the funny the century rather, initial all the made, have spare to negatives, and
                                    at applications it want and evils was about written as epic intro.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="pp-tabs-sec wow zoomIn d-flex flex-column-reverse" data-wow-duration="1000ms" data-wow-delay="0ms">
                                {/* <div className="tab-content" id="myTabContent">
                                    <div className="tab-pane fade show active" id="strategy" role="tabpanel" aria-labelledby="strategy-tab">
                                        <div className="vl-img">
                                            <img src="/static/images/vl-img1.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="ui-ux" role="tabpanel" aria-labelledby="ui-ux-tab">
                                        <div className="vl-img">
                                            <img src="/static/images/vl-img2.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="testing" role="tabpanel" aria-labelledby="testing-tab">
                                        <div className="vl-img">
                                            <img src="/static/images/vl-img3.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="showcase" role="tabpanel" aria-labelledby="showcase-tab">
                                        <div className="vl-img">
                                            <img src="/static/images/vl-img4.png" alt="" />
                                        </div>
                                    </div>
                                </div> */}
                                {/* <ul className="nav nav-tabs" id="myTab" role="tablist"> */}
                                    <Tabs  activeKey={key} onSelect={(k) => setKey(k || '')} id="myTab">
                                        {tabItems.map((item: { id: string; title: string }) => {
                                            return (
                                                <Tab as="div" key={`tab-${item.title}`} className="nav-item" eventKey={item.title} title={item.title.toUpperCase()}>
                                                    <div className="tab-content" id="myTabContent">
                                                        <div className="tab-pane fade show active" 
                                                            id={item.title.toLowerCase()} 
                                                            role="tabpanel" 
                                                            aria-labelledby={`${item.title.toLowerCase()}-tab`}>
                                                            <div className="vl-img">
                                                                <img src={`/static/images/vl-img${item.id}.png`} alt="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Tab>
                                            );
                                        })}
                                    </Tabs>
                                    {/* <li className="nav-item">
                                        <a
                                            className="nav-link active"
                                            id="strategy-tab"
                                            data-bs-toggle="tab"
                                            href="#strategy"
                                            role="tab"
                                            aria-controls="strategy-tab"
                                            aria-selected="true"
                                        >
                                            Strategy
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            id="ui-ux-tab"
                                            data-bs-toggle="tab"
                                            href="#ui-ux"
                                            role="tab"
                                            aria-controls="ui-ux-tab"
                                            aria-selected="false"
                                        >
                                            UI/UX
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            id="testing-tab"
                                            data-bs-toggle="tab"
                                            href="#testing"
                                            role="tab"
                                            aria-controls="testing-tab"
                                            aria-selected="false"
                                        >
                                            A/B Testing
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            id="showcase-tab"
                                            data-bs-toggle="tab"
                                            href="#showcase"
                                            role="tab"
                                            aria-controls="showcase"
                                            aria-selected="false"
                                        >
                                            Showcase
                                        </a>
                                    </li> */}
                                {/* </ul> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="showcase-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7">
                            <div className="mv-title">
                                <span>showcase</span>
                                <h2>
                                    Best solution <br /> choiced
                                </h2>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <p>
                                Throughout at pretty slid fresh decided go to gloomy excuse partiality let of the such of perhaps at road,
                                succeeded asked an embarrassed.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row showcase-slider">
                        <Carousel ref={carouselRef} {...carouselSettings}>
                            {carouselsExample.map((item) => (
                                <div key={item.id} className="col-lg-3">
                                    <div className="screen-slide">
                                        <img src="/static/images/screen1.jpg" alt="" className="w-100" />
                                    </div>
                                </div>
                            ))}
                        </Carousel>
                    </div>
                </div>
            </section>

            <section className="avl-sec">
                <div className="container">
                    <div className="avl-content wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="0ms">
                        <img src="/static/images/avl.png" alt="" />
                        <p>
                            After launch, brand interaction across all social channels increased. The brand went from having a few hundreds
                            of thousands of followers to over a million in just a few months.
                        </p>
                        <h3>available on</h3>
                        <ul className="download-links">
                            <li>
                                <a href="#" title="">
                                    <img src="/static/images/app1.png" alt="" />
                                </a>
                            </li>
                            <li>
                                <a href="#" title="">
                                    <img src="/static/images/app2.png" alt="" />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="avl-btm">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <div className="shareon">
                                    <h3>Share:</h3>
                                    <ul>
                                        <li>
                                            <a href="#" title="">
                                                <i className="fab fa-twitter" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" title="">
                                                <i className="fab fa-facebook-f" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" title="">
                                                <i className="fab fa-google-plus-g" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" title="">
                                                <i className="fab fa-tumblr" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" title="">
                                                <i className="fa fa-rss" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="liked-dv">
                                    <span className="liked">
                                        <i className="lni lni-heart-filled" />
                                    </span>
                                    <span>18 Liked</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <FooterVariant1 />
        </>
    );
};

PortfolioSingleLayoutOnePage.getLayout = function getLayout(page: React.ReactElement) {
    return <Layout title="Portfolio Single Layout">{page}</Layout>;
};

export default PortfolioSingleLayoutOnePage;
