import { NextPageWithLayout } from './_app'
import { Layout } from '../app/components/Layout'


const Career: NextPageWithLayout = () => {
    return (
        <>
            {/*@include('partials/header-v1.html')*/}

            <section className="career-page">
                <div className="container">
                    <div className="sv-title v2 text-center">
                        <span>career</span>
                        <h2>Start your dream works with Miles</h2>
                    </div>
                    <div className="options">
                        <div className="option-isotop">
                            <ul
                                id="filter"
                                className="option-set filters-nav text-center"
                                data-option-key="filter"
                            >
                                <li>
                                    <a data-option-value="*" className="selected">
                                        All Jobs{" "}
                                    </a>
                                </li>
                                <li>
                                    <a data-option-value=".full_time">Full Time</a>
                                </li>
                                <li>
                                    <a data-option-value=".part_time">Part Time</a>
                                </li>
                                <li>
                                    <a data-option-value=".remote">Remote</a>
                                </li>
                                <li>
                                    <a data-option-value=".internship">Internship</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="row ms-row masonary">
                        --&gt;
                        <div className="col-lg-6 col-md-6 col-sm-6 part_time">
                            <div className="career-item">
                                <div className="career-thumb">
                                    <img src="/static/images/cr1.jpg" alt="" className="w-100" />
                                </div>
                                <div className="career-info">
                                    <h2>
                                        <a href="career-detail.tsx" title="">
                                            Creative Director
                                        </a>
                                    </h2>
                                    <p>
                                        First and foremost, you’re a leader. You see what others don’t
                                        and know what it takes to turn a vision...
                                    </p>
                                    <span>Sanfrancisco / Full Time</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 full_time">
                            <div className="career-item">
                                <div className="career-thumb">
                                    <img src="/static/images/cr2.jpg" alt="" className="w-100" />
                                </div>
                                <div className="career-info">
                                    <h2>
                                        <a href="career-detail.tsx" title="">
                                            Senior Product Management
                                        </a>
                                    </h2>
                                    <p>
                                        You’ve got grit and a deep desire to design and contribute to
                                        the creation of amazing digital experiences...
                                    </p>
                                    <span>Sanfrancisco / Full Time</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 full_time">
                            <div className="career-item">
                                <div className="career-thumb">
                                    <img src="/static/images/cr.jpg" alt="" className="w-100" />
                                </div>
                                <div className="career-info">
                                    <h2>
                                        <a href="career-detail.tsx" title="">
                                            Senior UI/UX Product Designer
                                        </a>
                                    </h2>
                                    <p>
                                        First and foremost, you’re a leader. You see what others don’t
                                        and know what it takes to turn a vision...
                                    </p>
                                    <span>Sanfrancisco / Full Time</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 internship">
                            <div className="career-item">
                                <div className="career-thumb">
                                    <img src="/static/images/cr4.jpg" alt="" className="w-100" />
                                </div>
                                <div className="career-info">
                                    <h2>
                                        <a href="career-detail.tsx" title="">
                                            Content Executive
                                        </a>
                                    </h2>
                                    <p>
                                        You’ve got grit and a deep desire to design and contribute to
                                        the creation of amazing digital experiences...
                                    </p>
                                    <span>Los Angeles / intership</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 full_time">
                            <div className="career-item">
                                <div className="career-thumb">
                                    <img src="/static/images/cr5.jpg" alt="" className="w-100" />
                                </div>
                                <div className="career-info">
                                    <h2>
                                        <a href="career-detail.tsx" title="">
                                            Leader Strategry &amp; Marketing
                                        </a>
                                    </h2>
                                    <p>
                                        First and foremost, you’re a leader. You see what others don’t
                                        and know what it takes to turn a vision...
                                    </p>
                                    <span>Mahattan / Full Time</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 remote part_time">
                            <div className="career-item">
                                <div className="career-thumb">
                                    <img src="/static/images/cr6.jpg" alt="" className="w-100" />
                                </div>
                                <div className="career-info">
                                    <h2>
                                        <a href="career-detail.tsx" title="">
                                            Graphic Designer
                                        </a>
                                    </h2>
                                    <p>
                                        You’ve got grit and a deep desire to design and contribute to
                                        the creation of amazing digital experiences...
                                    </p>
                                    <span>remote</span>
                                </div>
                            </div>
                        </div>
                        --&gt;
                    </div>
                </div>
            </section>
            <footer>
                <div className="top-footer">
                    <div className="container">
                        <div className="footer-content">
                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <div
                                        className="ft-text wow fadeInUp"
                                        data-wow-duration="1000ms"
                                        data-wow-delay="0ms"
                                    >
                                        <p>
                                            We are a close team of creative professionals based out of
                                            Savannah, Georgia. We are passionate about partnering &amp;
                                            organizations to provide exceptional solutions.
                                        </p>
                                        <div className="ft-form">
                                            <h4>Subscribe our newsletter for news update</h4>
                                            <form>
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
                              className="
                                  input__label-content
                                  input__label-content--makiko
                                "
                          >
                            subscribe <i className="lni lni-chevron-right" />
                          </button>
                        </label>
                      </span>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div
                                        className="get-touch-txt wow fadeInRight"
                                        data-wow-duration="1000ms"
                                        data-wow-delay="0ms"
                                    >
                                        <span>get in touch</span>
                                        <h3>
                                            116 Fairground Rd, FL 32904, USA
                                            <a href="#" title="">
                                                hello@miles.co
                                            </a>
                                        </h3>
                                        <ul>
                                            <li>
                                                <a href="about-me.tsx" title="">
                                                    About
                                                </a>
                                            </li>
                                            <li>
                                                <a href="15_portfolio_horizontal_scroll.html" title="">
                                                    Works
                                                </a>
                                            </li>
                                            <li>
                                                <a href="contact.tsx" title="">
                                                    Contact
                                                </a>
                                            </li>
                                            <li>
                                                <a href="service-two.tsx" title="">
                                                    Services
                                                </a>
                                            </li>
                                            <li>
                                                <a href="blog-layout-one.tsx" title="">
                                                    News
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottom-footer">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-6">
                                <div className="cp-mile">
                                    <img src="/static/images/ft-logo.png" alt="" />
                                    <p>© 2020. All Rights Reserved</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <ul className="social-links">
                                    <li>
                                        <a href="#" title="">
                                            <i className="fab fa-facebook-square" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" title="">
                                            <i className="fab fa-twitter" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" title="">
                                            <i className="fab fa-behance" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" title="">
                                            <i className="fab fa-instagram" />
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

Career.getLayout = function getLayout(page: React.ReactElement) {
    return <Layout title="Career">{page}</Layout>;
};

export default Career
