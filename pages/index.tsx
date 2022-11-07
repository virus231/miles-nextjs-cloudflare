import { NextPageWithLayout } from './_app'
import { Layout } from '../app/components/Layout'
import { Navigation } from '../app/components/Navigation'
import { Footer } from '../app/components/Footer'
import CountUp  from "react-countup";
import VisibilitySensor from 'react-visibility-sensor';
import { Testi } from '../app/components/Testi';
import {KeepConnected} from "../app/components/KeepConnected";
import CarouselCenterMode from '../app/components/carousel/CarouselCenterMode';
import {Card, CardHeader, CardContent } from '@mui/material';
import { useState } from 'react';
import { Tabs } from '../app/components/Tabs/Tabs';

// const _carouselsExample = [...Array(5)].map((_, index) => ({
//     id: index.toString(),
//     title: "123",
//     image: "/static/images/1.jpg",
//     description: "Description",
// }));

export const _carouselsExample = [
    {
        id: "1",
        title: "123",
        image: "/static/images/project1.jpg",
        description: "Description",
    },
    {
        id: "2",
        title: "123",
        image: "/static/images/project2.jpg",
        description: "Description",
    },
    {
        id: "3",
        title: "123",
        image: "/static/images/project3.jpg",
        description: "Description",
    },
    {
        id: "4",
        title: "123",
        image: "/static/images/project1.jpg",
        description: "Description",
    },
    {
        id: "5",
        title: "123",
        image: "/static/images/project1.jpg",
        description: "Description",
    },
    {
        id: "6",
        title: "123",
        image: "/static/images/project2.jpg",
        description: "Description",
    },
    {
        id: "7",
        title: "123",
        image: "/static/images/project3.jpg",
        description: "Description",
    },
    {
        id: "8",
        title: "123",
        image: "/static/images/project1.jpg",
        description: "Description",
    },
    {
        id: "9",
        title: "123",
        image: "/static/images/project1.jpg",
        description: "Description",
    },
    {
        id: "10",
        title: "123",
        image: "/static/images/project2.jpg",
        description: "Description",
    },
    {
        id: "11",
        title: "123",
        image: "/static/images/project3.jpg",
        description: "Description",
    },
    {
        id: "12",
        title: "123",
        image: "/static/images/project1.jpg",
        description: "Description",
    },
    {
        id: "13",
        title: "123",
        image: "/static/images/project1.jpg",
        description: "Description",
    },
    {
        id: "14",
        title: "123",
        image: "/static/images/project2.jpg",
        description: "Description",
    },
    {
        id: "18",
        title: "123",
        image: "/static/images/project3.jpg",
        description: "Description",
    },
    {
        id: "19",
        title: "123",
        image: "/static/images/project1.jpg",
        description: "Description",
    }
]

const tabItems = ["all", "Website seo", "fb/gg ads", "email marketing", "web design", "video viral"]

const HomePage: NextPageWithLayout = () => {

  return (
    <>
        <Navigation/>
        <section className="banner-v8">
            <div className="container">
                <div className="banner-v8-content">
                    <div className="row">
                        <div className="col-lg-5">
                            <div
                                className="banner-txt-v8 wow fadeInUp"
                                data-wow-duration="1000ms"
                                data-wow-delay="0ms"
                            >
                                <h2>Boost your business up to high level</h2>
                                <p>
                                    Like any great agency, we are only as good as the result we
                                    deliver of our recent work
                                </p>
                                <a href="#" title="" className="btn-default-v8">
                                    Get Started
                                </a>
                            </div>
                            <div className="banner-wid">
                                <p>
                                    If you are hurry, quick call for us. Our supporters alway 24/7
                                    and will help you asap
                                </p>
                                <div className="wd-inz">
                <span className="cinon">
                  <i className="lni lni-phone"/>
                </span>
                                    <div className="wl-info">
                                        <span>hotline 24/7</span>
                                        <h3>+65 - 3002 56 56 376</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div
                                className="banner-img-v8 wow zoomIn"
                                data-wow-duration="1000ms"
                                data-wow-delay="0ms"
                            >
                                <img src="/static/images/banner-v8.png" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="misson-section-v8">
            <div className="container">
                <div className="mission-sec">
                    <div className="row">
                        <div className="col-xl-6">
                            <div
                                className="crlce-misz wow zoomIn"
                                data-wow-duration="1000ms"
                                data-wow-delay="0ms"
                            >
                                <ul className="crlce-list">
                                    <li className="v1">
                                        <div className="crlce-info">
                                            <i className="lni lni-layout"/>
                                            <h3>Website Optimization</h3>
                                        </div>
                                        <div className="crlce-img">
                                            <img src="/static/images/crcle-img1.png" alt=""/>
                                        </div>
                                    </li>
                                    <li className="v2">
                                        <div className="crlce-info">
                                            <i className="lni lni-envelope"/>
                                            <h3>Email Marketing</h3>
                                        </div>
                                        <div className="crlce-img">
                                            <img src="/static/images/crcle-img2.png" alt=""/>
                                        </div>
                                    </li>
                                    <li className="v3">
                                        <div className="crlce-info">
                                            <i className="lni lni-bulb"/>
                                            <h3>Marketing Strategy</h3>
                                        </div>
                                        <div className="crlce-img">
                                            <img src="/static/images/crcle-img3.png" alt=""/>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="vlm-text">
                                <h2>We help you increase sales by improving SEO</h2>
                                <span>“We know good design meant that good business.”</span>
                                <p>
                                    Andy has dedicated his life to learning what makes humans tick.
                                    He studies, researches and reads everything hecan, and shares
                                    his findings with his clients. His philosophy is to learn, test,
                                    analyse, improve and re-test. His motto is stay agile, so you
                                    are best positioned to respond quickly and effectively to market
                                    forces.
                                </p>
                                <a
                                    href="24_about_agency.html"
                                    title=""
                                    className="btn-default-v8 v2"
                                >
                                    Learn More
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="grow-business-v8">
            <div className="container">
                <div className="grw-content-v8">
                    <div className="row align-items-center">
                        <div className="col-lg-5">
                            <div
                                className="gr-text wow fadeInUp"
                                data-wow-duration="1000ms"
                                data-wow-delay="0ms"
                            >
                                <h2>Grow Your Business with Our SEO Agency</h2>
                                <h4>
                                    Over 10 years Onum helping companies reach their financial and
                                    branding goals
                                </h4>
                                <p>
                                    Over the years, we have worked with Fortune 500s and brand-new
                                    startups.. We help ambitious businesses like yours generate more
                                    profits by building awareness, driving web traffic, connecting
                                    with customers, and growing overall sales. Give us a call.
                                </p>
                                <a
                                    href="24_about_agency.html"
                                    title=""
                                    className="btn-default-v8 v2"
                                >
                                    Learn More
                                </a>
                                <a
                                    href="https://www.youtube.com/watch?v=vw6QmjPpdy4"
                                    title=""
                                    className="view-btn html5lightbox"
                                >
                <span className="pl-btn">
                  <i className="lni lni-play"/>
                </span>
                                    <span className="vt">view our story</span>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="gw-img">
                                <img src="/static/images/v2.png" alt=""/>
                                <div className="gw-text">
                                    <h1>25</h1>
                                    <h2>
                                        years <br/>
                                        of <br/>
                                        experience
                                    </h2>
                                    <h3>The Leading In Digital Marketing Industrial</h3>
                                </div>
                            </div>
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
                            <VisibilitySensor scrollCheck partialVisibility offset={{bottom: 10}}
                            >
                                {({isVisible}: { isVisible: boolean }) => (
                                    <h2 className="clr1 count">
                                        {isVisible ? <CountUp end={100}/> : "0"}
                                    </h2>
                                )}
                            </VisibilitySensor>
                            <span>
                              satisfaction <br/>
                              clients
                            </span>
                        </div>
                    </li>
                    <li>
                        <div className="counter-cont">
                            <VisibilitySensor scrollCheck partialVisibility offset={{bottom: 10}}>
                                {({isVisible}: { isVisible: boolean }) => (
                                    <h2 className="clr2 count">
                                        {isVisible ? <CountUp end={250}/> : "0"}
                                    </h2>
                                )}
                            </VisibilitySensor>
                            <span>employees on worldwide</span>
                        </div>
                    </li>
                    <li>
                        <div className="counter-cont">
                            <VisibilitySensor scrollCheck partialVisibility offset={{bottom: 10}}>
                                {({isVisible}: { isVisible: boolean }) => (
                                    <h2 className="clr3 count">
                                        {isVisible ? <CountUp end={3875}/> : "0"}
                                    </h2>
                                )}
                            </VisibilitySensor>
                            <span>Project Completed on 60 countries</span>
                        </div>
                    </li>
                </ul>
            </div>
        </section>

        <section className="projects-v8">
            <div className="container">
                <div className="title-v8 text-center">
                    <h2>Our Latest Projects</h2>
                </div>
                <div className="projects-tab-sec">
                    <Tabs tabItems={tabItems} />

                    {/* <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item">
                            <a
                                className="nav-link active"
                                id="all-tab"
                                data-bs-toggle="tab"
                                href="#all"
                                role="tab"
                                aria-controls="all"
                                aria-selected="true"
                            >
                                all
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                id="website-tab"
                                data-bs-toggle="tab"
                                href="#website"
                                role="tab"
                                aria-controls="website"
                                aria-selected="false"
                            >
                                Website seo
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                id="fb-tab"
                                data-bs-toggle="tab"
                                href="#fb"
                                role="tab"
                                aria-controls="fb"
                                aria-selected="false"
                            >
                                fb/gg ads
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                id="marketing-tab"
                                data-bs-toggle="tab"
                                href="#marketing"
                                role="tab"
                                aria-controls="marketing"
                                aria-selected="false"
                            >
                                email marketing
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                id="webdesign-tab"
                                data-bs-toggle="tab"
                                href="#webdesign"
                                role="tab"
                                aria-controls="webdesign"
                                aria-selected="false"
                            >
                                web design
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                id="videoviral-tab"
                                data-bs-toggle="tab"
                                href="#video"
                                role="tab"
                                aria-controls="videoviral-tab"
                                aria-selected="false"
                            >
                                video viral
                            </a>
                        </li>
                    </ul>

                    <div className="tab-content" id="myTabContent">
                        <div
                            className="tab-pane fade show active"
                            id="all"
                            role="tabpanel"
                            aria-labelledby="all-tab"
                        >
                            <div className="row projects-sliders">
                                <div className="col-lg-4">
                                    <div className="project-slide">
                                        <img
                                            src="/static/images/project1.jpg"
                                            alt=""
                                            className="w-100"
                                        />
                                        <div className="project-slide-info">
                                            <h3>
                                                <a href="17_portfolio_single_layout_1.html" title="">
                                                    Taskly Dashboard
                                                </a>
                                            </h3>
                                            <p>
                                                BibliU is a digital platform that provides university
                                                students with personalized learning pathways..
                                            </p>
                                        </div>
                                        <span className="category">Website SEO</span>
                                        <a href="#" title="" className="share">
                                            <i className="lni lni-share"/>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="project-slide">
                                        <img
                                            src="/static/images/project2.jpg"
                                            alt=""
                                            className="w-100"
                                        />
                                        <div className="project-slide-info">
                                            <h3>
                                                <a href="17_portfolio_single_layout_1.html" title="">
                                                    Taskly Dashboard
                                                </a>
                                            </h3>
                                            <p>
                                                BibliU is a digital platform that provides university
                                                students with personalized learning pathways..
                                            </p>
                                        </div>
                                        <span className="category">Website SEO</span>
                                        <a href="#" title="" className="share">
                                            <i className="lni lni-share"/>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="project-slide">
                                        <img
                                            src="/static/images/project3.jpg"
                                            alt=""
                                            className="w-100"
                                        />
                                        <div className="project-slide-info">
                                            <h3>
                                                <a href="17_portfolio_single_layout_1.html" title="">
                                                    Taskly Dashboard
                                                </a>
                                            </h3>
                                            <p>
                                                BibliU is a digital platform that provides university
                                                students with personalized learning pathways..
                                            </p>
                                        </div>
                                        <span className="category">Website SEO</span>
                                        <a href="#" title="" className="share">
                                            <i className="lni lni-share"/>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="project-slide">
                                        <img
                                            src="/static/images/project1.jpg"
                                            alt=""
                                            className="w-100"
                                        />
                                        <div className="project-slide-info">
                                            <h3>
                                                <a href="17_portfolio_single_layout_1.html" title="">
                                                    Taskly Dashboard
                                                </a>
                                            </h3>
                                            <p>
                                                BibliU is a digital platform that provides university
                                                students with personalized learning pathways..
                                            </p>
                                        </div>
                                        <span className="category">Website SEO</span>
                                        <a href="#" title="" className="share">
                                            <i className="lni lni-share"/>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="project-slide">
                                        <img
                                            src="/static/images/project2.jpg"
                                            alt=""
                                            className="w-100"
                                        />
                                        <div className="project-slide-info">
                                            <h3>
                                                <a href="17_portfolio_single_layout_1.html" title="">
                                                    Taskly Dashboard
                                                </a>
                                            </h3>
                                            <p>
                                                BibliU is a digital platform that provides university
                                                students with personalized learning pathways..
                                            </p>
                                        </div>
                                        <span className="category">Website SEO</span>
                                        <a href="#" title="" className="share">
                                            <i className="lni lni-share"/>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="project-slide">
                                        <img
                                            src="/static/images/project3.jpg"
                                            alt=""
                                            className="w-100"
                                        />
                                        <div className="project-slide-info">
                                            <h3>
                                                <a href="17_portfolio_single_layout_1.html" title="">
                                                    Taskly Dashboard
                                                </a>
                                            </h3>
                                            <p>
                                                BibliU is a digital platform that provides university
                                                students with personalized learning pathways..
                                            </p>
                                        </div>
                                        <span className="category">Website SEO</span>
                                        <a href="#" title="" className="share">
                                            <i className="lni lni-share"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="tab-pane fade"
                            id="website"
                            role="tabpanel"
                            aria-labelledby="website-tab"
                        >
                            <div className="row projects-sliders">
                                <div className="col-lg-4">
                                    <div className="project-slide">
                                        <img
                                            src="/static/images/project1.jpg"
                                            alt=""
                                            className="w-100"
                                        />
                                        <div className="project-slide-info">
                                            <h3>
                                                <a href="17_portfolio_single_layout_1.html" title="">
                                                    Taskly Dashboard
                                                </a>
                                            </h3>
                                            <p>
                                                BibliU is a digital platform that provides university
                                                students with personalized learning pathways..
                                            </p>
                                        </div>
                                        <span className="category">Website SEO</span>
                                        <a href="#" title="" className="share">
                                            <i className="lni lni-share"/>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="project-slide">
                                        <img
                                            src="/static/images/project2.jpg"
                                            alt=""
                                            className="w-100"
                                        />
                                        <div className="project-slide-info">
                                            <h3>
                                                <a href="17_portfolio_single_layout_1.html" title="">
                                                    Taskly Dashboard
                                                </a>
                                            </h3>
                                            <p>
                                                BibliU is a digital platform that provides university
                                                students with personalized learning pathways..
                                            </p>
                                        </div>
                                        <span className="category">Website SEO</span>
                                        <a href="#" title="" className="share">
                                            <i className="lni lni-share"/>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="project-slide">
                                        <img
                                            src="/static/images/project3.jpg"
                                            alt=""
                                            className="w-100"
                                        />
                                        <div className="project-slide-info">
                                            <h3>
                                                <a href="17_portfolio_single_layout_1.html" title="">
                                                    Taskly Dashboard
                                                </a>
                                            </h3>
                                            <p>
                                                BibliU is a digital platform that provides university
                                                students with personalized learning pathways..
                                            </p>
                                        </div>
                                        <span className="category">Website SEO</span>
                                        <a href="#" title="" className="share">
                                            <i className="lni lni-share"/>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="project-slide">
                                        <img
                                            src="/static/images/project1.jpg"
                                            alt=""
                                            className="w-100"
                                        />
                                        <div className="project-slide-info">
                                            <h3>
                                                <a href="17_portfolio_single_layout_1.html" title="">
                                                    Taskly Dashboard
                                                </a>
                                            </h3>
                                            <p>
                                                BibliU is a digital platform that provides university
                                                students with personalized learning pathways..
                                            </p>
                                        </div>
                                        <span className="category">Website SEO</span>
                                        <a href="#" title="" className="share">
                                            <i className="lni lni-share"/>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="project-slide">
                                        <img
                                            src="/static/images/project2.jpg"
                                            alt=""
                                            className="w-100"
                                        />
                                        <div className="project-slide-info">
                                            <h3>
                                                <a href="17_portfolio_single_layout_1.html" title="">
                                                    Taskly Dashboard
                                                </a>
                                            </h3>
                                            <p>
                                                BibliU is a digital platform that provides university
                                                students with personalized learning pathways..
                                            </p>
                                        </div>
                                        <span className="category">Website SEO</span>
                                        <a href="#" title="" className="share">
                                            <i className="lni lni-share"/>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="project-slide">
                                        <img
                                            src="/static/images/project3.jpg"
                                            alt=""
                                            className="w-100"
                                        />
                                        <div className="project-slide-info">
                                            <h3>
                                                <a href="17_portfolio_single_layout_1.html" title="">
                                                    Taskly Dashboard
                                                </a>
                                            </h3>
                                            <p>
                                                BibliU is a digital platform that provides university
                                                students with personalized learning pathways..
                                            </p>
                                        </div>
                                        <span className="category">Website SEO</span>
                                        <a href="#" title="" className="share">
                                            <i className="lni lni-share"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="tab-pane fade"
                            id="fb"
                            role="tabpanel"
                            aria-labelledby="fb-tab"
                        >
                            <div className="row projects-sliders">
                                <div className="col-lg-4">
                                    <div className="project-slide">
                                        <img
                                            src="/static/images/project1.jpg"
                                            alt=""
                                            className="w-100"
                                        />
                                        <div className="project-slide-info">
                                            <h3>
                                                <a href="17_portfolio_single_layout_1.html" title="">
                                                    Taskly Dashboard
                                                </a>
                                            </h3>
                                            <p>
                                                BibliU is a digital platform that provides university
                                                students with personalized learning pathways..
                                            </p>
                                        </div>
                                        <span className="category">Website SEO</span>
                                        <a href="#" title="" className="share">
                                            <i className="lni lni-share"/>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="project-slide">
                                        <img
                                            src="/static/images/project2.jpg"
                                            alt=""
                                            className="w-100"
                                        />
                                        <div className="project-slide-info">
                                            <h3>
                                                <a href="17_portfolio_single_layout_1.html" title="">
                                                    Taskly Dashboard
                                                </a>
                                            </h3>
                                            <p>
                                                BibliU is a digital platform that provides university
                                                students with personalized learning pathways..
                                            </p>
                                        </div>
                                        <span className="category">Website SEO</span>
                                        <a href="#" title="" className="share">
                                            <i className="lni lni-share"/>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="project-slide">
                                        <img
                                            src="/static/images/project3.jpg"
                                            alt=""
                                            className="w-100"
                                        />
                                        <div className="project-slide-info">
                                            <h3>
                                                <a href="17_portfolio_single_layout_1.html" title="">
                                                    Taskly Dashboard
                                                </a>
                                            </h3>
                                            <p>
                                                BibliU is a digital platform that provides university
                                                students with personalized learning pathways..
                                            </p>
                                        </div>
                                        <span className="category">Website SEO</span>
                                        <a href="#" title="" className="share">
                                            <i className="lni lni-share"/>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="project-slide">
                                        <img
                                            src="/static/images/project1.jpg"
                                            alt=""
                                            className="w-100"
                                        />
                                        <div className="project-slide-info">
                                            <h3>
                                                <a href="17_portfolio_single_layout_1.html" title="">
                                                    Taskly Dashboard
                                                </a>
                                            </h3>
                                            <p>
                                                BibliU is a digital platform that provides university
                                                students with personalized learning pathways..
                                            </p>
                                        </div>
                                        <span className="category">Website SEO</span>
                                        <a href="#" title="" className="share">
                                            <i className="lni lni-share"/>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="project-slide">
                                        <img
                                            src="/static/images/project2.jpg"
                                            alt=""
                                            className="w-100"
                                        />
                                        <div className="project-slide-info">
                                            <h3>
                                                <a href="17_portfolio_single_layout_1.html" title="">
                                                    Taskly Dashboard
                                                </a>
                                            </h3>
                                            <p>
                                                BibliU is a digital platform that provides university
                                                students with personalized learning pathways..
                                            </p>
                                        </div>
                                        <span className="category">Website SEO</span>
                                        <a href="#" title="" className="share">
                                            <i className="lni lni-share"/>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="project-slide">
                                        <img
                                            src="/static/images/project3.jpg"
                                            alt=""
                                            className="w-100"
                                        />
                                        <div className="project-slide-info">
                                            <h3>
                                                <a href="17_portfolio_single_layout_1.html" title="">
                                                    Taskly Dashboard
                                                </a>
                                            </h3>
                                            <p>
                                                BibliU is a digital platform that provides university
                                                students with personalized learning pathways..
                                            </p>
                                        </div>
                                        <span className="category">Website SEO</span>
                                        <a href="#" title="" className="share">
                                            <i className="lni lni-share"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="tab-pane fade"
                            id="marketing"
                            role="tabpanel"
                            aria-labelledby="marketing-tab"
                        >
                            <div className="row projects-sliders">
                                <div className="col-lg-4">
                                    <div className="project-slide">
                                        <img
                                            src="/static/images/project1.jpg"
                                            alt=""
                                            className="w-100"
                                        />
                                        <div className="project-slide-info">
                                            <h3>
                                                <a href="17_portfolio_single_layout_1.html" title="">
                                                    Taskly Dashboard
                                                </a>
                                            </h3>
                                            <p>
                                                BibliU is a digital platform that provides university
                                                students with personalized learning pathways..
                                            </p>
                                        </div>
                                        <span className="category">Website SEO</span>
                                        <a href="#" title="" className="share">
                                            <i className="lni lni-share"/>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="project-slide">
                                        <img
                                            src="/static/images/project2.jpg"
                                            alt=""
                                            className="w-100"
                                        />
                                        <div className="project-slide-info">
                                            <h3>
                                                <a href="17_portfolio_single_layout_1.html" title="">
                                                    Taskly Dashboard
                                                </a>
                                            </h3>
                                            <p>
                                                BibliU is a digital platform that provides university
                                                students with personalized learning pathways..
                                            </p>
                                        </div>
                                        <span className="category">Website SEO</span>
                                        <a href="#" title="" className="share">
                                            <i className="lni lni-share"/>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="project-slide">
                                        <img
                                            src="/static/images/project3.jpg"
                                            alt=""
                                            className="w-100"
                                        />
                                        <div className="project-slide-info">
                                            <h3>
                                                <a href="17_portfolio_single_layout_1.html" title="">
                                                    Taskly Dashboard
                                                </a>
                                            </h3>
                                            <p>
                                                BibliU is a digital platform that provides university
                                                students with personalized learning pathways..
                                            </p>
                                        </div>
                                        <span className="category">Website SEO</span>
                                        <a href="#" title="" className="share">
                                            <i className="lni lni-share"/>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="project-slide">
                                        <img
                                            src="/static/images/project1.jpg"
                                            alt=""
                                            className="w-100"
                                        />
                                        <div className="project-slide-info">
                                            <h3>
                                                <a href="17_portfolio_single_layout_1.html" title="">
                                                    Taskly Dashboard
                                                </a>
                                            </h3>
                                            <p>
                                                BibliU is a digital platform that provides university
                                                students with personalized learning pathways..
                                            </p>
                                        </div>
                                        <span className="category">Website SEO</span>
                                        <a href="#" title="" className="share">
                                            <i className="lni lni-share"/>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="project-slide">
                                        <img
                                            src="/static/images/project2.jpg"
                                            alt=""
                                            className="w-100"
                                        />
                                        <div className="project-slide-info">
                                            <h3>
                                                <a href="17_portfolio_single_layout_1.html" title="">
                                                    Taskly Dashboard
                                                </a>
                                            </h3>
                                            <p>
                                                BibliU is a digital platform that provides university
                                                students with personalized learning pathways..
                                            </p>
                                        </div>
                                        <span className="category">Website SEO</span>
                                        <a href="#" title="" className="share">
                                            <i className="lni lni-share"/>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="project-slide">
                                        <img
                                            src="/static/images/project3.jpg"
                                            alt=""
                                            className="w-100"
                                        />
                                        <div className="project-slide-info">
                                            <h3>
                                                <a href="17_portfolio_single_layout_1.html" title="">
                                                    Taskly Dashboard
                                                </a>
                                            </h3>
                                            <p>
                                                BibliU is a digital platform that provides university
                                                students with personalized learning pathways..
                                            </p>
                                        </div>
                                        <span className="category">Website SEO</span>
                                        <a href="#" title="" className="share">
                                            <i className="lni lni-share"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="tab-pane fade"
                            id="webdesign"
                            role="tabpanel"
                            aria-labelledby="webdesign-tab"
                        >
                            <div className="row projects-sliders">
                                <div className="col-lg-4">
                                    <div className="project-slide">
                                        <img
                                            src="/static/images/project1.jpg"
                                            alt=""
                                            className="w-100"
                                        />
                                        <div className="project-slide-info">
                                            <h3>
                                                <a href="17_portfolio_single_layout_1.html" title="">
                                                    Taskly Dashboard
                                                </a>
                                            </h3>
                                            <p>
                                                BibliU is a digital platform that provides university
                                                students with personalized learning pathways..
                                            </p>
                                        </div>
                                        <span className="category">Website SEO</span>
                                        <a href="#" title="" className="share">
                                            <i className="lni lni-share"/>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="project-slide">
                                        <img
                                            src="/static/images/project2.jpg"
                                            alt=""
                                            className="w-100"
                                        />
                                        <div className="project-slide-info">
                                            <h3>
                                                <a href="17_portfolio_single_layout_1.html" title="">
                                                    Taskly Dashboard
                                                </a>
                                            </h3>
                                            <p>
                                                BibliU is a digital platform that provides university
                                                students with personalized learning pathways..
                                            </p>
                                        </div>
                                        <span className="category">Website SEO</span>
                                        <a href="#" title="" className="share">
                                            <i className="lni lni-share"/>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="project-slide">
                                        <img
                                            src="/static/images/project3.jpg"
                                            alt=""
                                            className="w-100"
                                        />
                                        <div className="project-slide-info">
                                            <h3>
                                                <a href="17_portfolio_single_layout_1.html" title="">
                                                    Taskly Dashboard
                                                </a>
                                            </h3>
                                            <p>
                                                BibliU is a digital platform that provides university
                                                students with personalized learning pathways..
                                            </p>
                                        </div>
                                        <span className="category">Website SEO</span>
                                        <a href="#" title="" className="share">
                                            <i className="lni lni-share"/>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="project-slide">
                                        <img
                                            src="/static/images/project1.jpg"
                                            alt=""
                                            className="w-100"
                                        />
                                        <div className="project-slide-info">
                                            <h3>
                                                <a href="17_portfolio_single_layout_1.html" title="">
                                                    Taskly Dashboard
                                                </a>
                                            </h3>
                                            <p>
                                                BibliU is a digital platform that provides university
                                                students with personalized learning pathways..
                                            </p>
                                        </div>
                                        <span className="category">Website SEO</span>
                                        <a href="#" title="" className="share">
                                            <i className="lni lni-share"/>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="project-slide">
                                        <img
                                            src="/static/images/project2.jpg"
                                            alt=""
                                            className="w-100"
                                        />
                                        <div className="project-slide-info">
                                            <h3>
                                                <a href="17_portfolio_single_layout_1.html" title="">
                                                    Taskly Dashboard
                                                </a>
                                            </h3>
                                            <p>
                                                BibliU is a digital platform that provides university
                                                students with personalized learning pathways..
                                            </p>
                                        </div>
                                        <span className="category">Website SEO</span>
                                        <a href="#" title="" className="share">
                                            <i className="lni lni-share"/>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="project-slide">
                                        <img
                                            src="/static/images/project3.jpg"
                                            alt=""
                                            className="w-100"
                                        />
                                        <div className="project-slide-info">
                                            <h3>
                                                <a href="17_portfolio_single_layout_1.html" title="">
                                                    Taskly Dashboard
                                                </a>
                                            </h3>
                                            <p>
                                                BibliU is a digital platform that provides university
                                                students with personalized learning pathways..
                                            </p>
                                        </div>
                                        <span className="category">Website SEO</span>
                                        <a href="#" title="" className="share">
                                            <i className="lni lni-share"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="tab-pane fade"
                            id="video"
                            role="tabpanel"
                            aria-labelledby="videoviral-tab"
                        >
                            <div className="row projects-sliders">
                                <div className="col-lg-4">
                                    <div className="project-slide">
                                        <img
                                            src="/static/images/project1.jpg"
                                            alt=""
                                            className="w-100"
                                        />
                                        <div className="project-slide-info">
                                            <h3>
                                                <a href="17_portfolio_single_layout_1.html" title="">
                                                    Taskly Dashboard
                                                </a>
                                            </h3>
                                            <p>
                                                BibliU is a digital platform that provides university
                                                students with personalized learning pathways..
                                            </p>
                                        </div>
                                        <span className="category">Website SEO</span>
                                        <a href="#" title="" className="share">
                                            <i className="lni lni-share"/>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="project-slide">
                                        <img
                                            src="/static/images/project2.jpg"
                                            alt=""
                                            className="w-100"
                                        />
                                        <div className="project-slide-info">
                                            <h3>
                                                <a href="17_portfolio_single_layout_1.html" title="">
                                                    Taskly Dashboard
                                                </a>
                                            </h3>
                                            <p>
                                                BibliU is a digital platform that provides university
                                                students with personalized learning pathways..
                                            </p>
                                        </div>
                                        <span className="category">Website SEO</span>
                                        <a href="#" title="" className="share">
                                            <i className="lni lni-share"/>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="project-slide">
                                        <img
                                            src="/static/images/project3.jpg"
                                            alt=""
                                            className="w-100"
                                        />
                                        <div className="project-slide-info">
                                            <h3>
                                                <a href="17_portfolio_single_layout_1.html" title="">
                                                    Taskly Dashboard
                                                </a>
                                            </h3>
                                            <p>
                                                BibliU is a digital platform that provides university
                                                students with personalized learning pathways..
                                            </p>
                                        </div>
                                        <span className="category">Website SEO</span>
                                        <a href="#" title="" className="share">
                                            <i className="lni lni-share"/>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="project-slide">
                                        <img
                                            src="/static/images/project1.jpg"
                                            alt=""
                                            className="w-100"
                                        />
                                        <div className="project-slide-info">
                                            <h3>
                                                <a href="17_portfolio_single_layout_1.html" title="">
                                                    Taskly Dashboard
                                                </a>
                                            </h3>
                                            <p>
                                                BibliU is a digital platform that provides university
                                                students with personalized learning pathways..
                                            </p>
                                        </div>
                                        <span className="category">Website SEO</span>
                                        <a href="#" title="" className="share">
                                            <i className="lni lni-share"/>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="project-slide">
                                        <img
                                            src="/static/images/project2.jpg"
                                            alt=""
                                            className="w-100"
                                        />
                                        <div className="project-slide-info">
                                            <h3>
                                                <a href="17_portfolio_single_layout_1.html" title="">
                                                    Taskly Dashboard
                                                </a>
                                            </h3>
                                            <p>
                                                BibliU is a digital platform that provides university
                                                students with personalized learning pathways..
                                            </p>
                                        </div>
                                        <span className="category">Website SEO</span>
                                        <a href="#" title="" className="share">
                                            <i className="lni lni-share"/>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="project-slide">
                                        <img
                                            src="/static/images/project3.jpg"
                                            alt=""
                                            className="w-100"
                                        />
                                        <div className="project-slide-info">
                                            <h3>
                                                <a href="17_portfolio_single_layout_1.html" title="">
                                                    Taskly Dashboard
                                                </a>
                                            </h3>
                                            <p>
                                                BibliU is a digital platform that provides university
                                                students with personalized learning pathways..
                                            </p>
                                        </div>
                                        <span className="category">Website SEO</span>
                                        <a href="#" title="" className="share">
                                            <i className="lni lni-share"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
        
        <section className="why-us-v8">
            <div className="container">
                <div
                    className="title-v8 text-center wow fadeInUp"
                    data-wow-duration="1000ms"
                    data-wow-delay="0ms"
                >
                    <h2>Why choose Milseo</h2>
                    <p>
                        Our strategy includes consistently evolving, to ensure we’re producing
                        exceptional SEO for business.
                    </p>
                </div>
                <div className="row fzt-row">
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="our-fzt">
                            <h3>
                                <a href="28_services_2.html" title="">
                                    Competitor Research
                                </a>
                            </h3>
                            <p>Help business with their brading identity system better</p>
                            <span className="fzt-icon v1">
              <i className="lni lni-users"/>
            </span>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="our-fzt">
                            <h3>
                                <a href="28_services_2.html" title="">
                                    Innovatives Ideas &amp; Strategy
                                </a>
                            </h3>
                            <p>
                                Reach out your clients better through website &amp; mobile app
                            </p>
                            <span className="fzt-icon v2">
              <i className="lni lni-invention"/>
            </span>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="our-fzt">
                            <h3>
                                <a href="28_services_2.html" title="">
                                    Affordable Cost
                                </a>
                            </h3>
                            <p>
                                Building plan &amp; strategy for your business by social marketing
                            </p>
                            <span className="fzt-icon v3">
              <i className="lni lni-money-protection"/>
            </span>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="our-fzt">
                            <h3>
                                <a href="28_services_2.html" title="">
                                    Dedicated Support &amp; 24/7
                                </a>
                            </h3>
                            <p>Improve quality of product with high resolution photos</p>
                            <span className="fzt-icon v4">
              <i className="lni lni-headphone"/>
            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="testi-v3-sec">
            <div className="container">
                <Testi/>
            </div>
        </section>
        <section className="partners-v8-sec">
            <div className="container">
                <div
                    className="title-v8 text-center wow fadeInUp"
                    data-wow-duration="1000ms"
                    data-wow-delay="0ms"
                >
                    <h2>Our Partners</h2>
                    <p className="mw-100">
                        Your succesful, our reputation! We are proaud to accompany more than
                        30 major brands
                    </p>
                </div>
                <div className="pt-logos-v8 row">
                    <div className="col-lg-2">
                        <div className="pt-logo-v8">
                            <img src="/static/images/po1.png" alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="pt-logo-v8">
                            <img src="/static/images/po2.png" alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="pt-logo-v8">
                            <img src="/static/images/po3.png" alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="pt-logo-v8">
                            <img src="/static/images/po4.png" alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="pt-logo-v8">
                            <img src="/static/images/po5.png" alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="pt-logo-v8">
                            <img src="/static/images/po6.png" alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="pt-logo-v8">
                            <img src="/static/images/po7.png" alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="pt-logo-v8">
                            <img src="/static/images/po8.png" alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="pt-logo-v8">
                            <img src="/static/images/po9.png" alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="pt-logo-v8">
                            <img src="/static/images/po10.png" alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="pt-logo-v8">
                            <img src="/static/images/po11.png" alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="pt-logo-v8">
                            <img src="/static/images/po12.png" alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="pt-logo-v8">
                            <img src="/static/images/po13.png" alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="pt-logo-v8">
                            <img src="/static/images/po14.png" alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="pt-logo-v8">
                            <img src="/static/images/po15.png" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="blog-section-v7 v8">
            <div className="container">
                <div
                    className="title-v8 text-center wow fadeInUp"
                    data-wow-duration="1000ms"
                    data-wow-delay="0ms"
                >
                    <h2>Latest Articles</h2>
                </div>
                <div className="blog-posts-v7">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="blog-post-v7">
                                <div className="blog-thumbnail">
                                    <img src="/static/images/blog4.jpg" alt="" className="w-100"/>
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
                                        <a href="blog-single-layout2.html" title="">
                                            How to optimization cost for GG Ads?
                                        </a>
                                    </h2>
                                    <ul className="meta2">
                                        <li>
                                            <i className="lni lni-comments"/> 25
                                        </li>
                                        <li>
                                            <i className="lni lni-eye"/> 32.6K
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="blog-post-v7">
                                <div className="blog-thumbnail">
                                    <img src="/static/images/blog5.jpg" alt="" className="w-100"/>
                                </div>
                                <div className="blog-info">
                                    <ul className="meta">
                                        <li>
                                            <a href="#" title="">
                                                community{" "}
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" title="">
                                                apr 28, 2020
                                            </a>
                                        </li>
                                    </ul>
                                    <h2>
                                        <a href="blog-single-layout2.html" title="">
                                            Workflow Strategy
                                        </a>
                                    </h2>
                                    <ul className="meta2">
                                        <li>
                                            <i className="lni lni-comments"/> 4
                                        </li>
                                        <li>
                                            <i className="lni lni-eye"/> 7.2K
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="blog-post-v7">
                                <div className="blog-thumbnail">
                                    <img src="/static/images/blog6.jpg" alt="" className="w-100"/>
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
                                        <a href="blog-single-layout2.html" title="">
                                            Elena Holson Shared: Marketing Vision 2020
                                        </a>
                                    </h2>
                                    <ul className="meta2">
                                        <li>
                                            <i className="lni lni-comments"/> 18
                                        </li>
                                        <li>
                                            <i className="lni lni-eye"/> 57.4K
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="newslettter-sec-v7">
            <div className="container">
                <KeepConnected/>
            </div>
        </section>

        <Footer/>
    </>
  )
}

HomePage.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout title="Home">{page}</Layout>;
};

export default HomePage
