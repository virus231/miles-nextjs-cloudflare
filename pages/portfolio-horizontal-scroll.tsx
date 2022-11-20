import { NextPageWithLayout } from './_app';
import { Layout } from '../app/components/Layout';
import { HeaderV1 } from "../app/components/Navigation/HeaderV1";

const PortfolioHorizontalScroll: NextPageWithLayout = () => {
    return (
        <>
            <HeaderV1 />

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
