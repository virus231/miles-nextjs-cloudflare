import { NextPageWithLayout } from './_app'
import { Layout } from '../app/components/Layout'


const CareerDetailPage: NextPageWithLayout = () => {
    return (
        <>
            {/*@include('partials/header-v1.html')*/}

            <section className="career-page">
                <div className="container">
                    <div className="sv-title v2 text-center">
                        <span>job description</span>
                        <h2>Creative Director</h2>
                    </div>
                    <div className="career-single">
                        <span className="job-type">Sanfrancisco / Full Time</span>
                        <div className="cr-single-thumb">
                            <img src="/static/images/cr-single.jpg" alt="" className="w-100" />
                        </div>
                        <div className="cr-single-content">
                            <p>
                                First and foremost, you’re a leader. You see what others don’t and
                                know what it takes to turn a vision into a real world execution
                            </p>
                            <p>
                                You love positioning brands to matter in culture, and you’ve
                                dedicated your career to creating game changing experiences for
                                the world’s most renowned brands. When it comes to this position
                                and our embedded team in Mountain View, you see this as your
                                opportunity to do the best work of your life.
                            </p>
                            <h3>What you’ll do:</h3>
                            <ul>
                                <li>Work with a team of 40+ people on-site in Mountain View.</li>
                                <li>Leading the creative staff.</li>
                                <li>
                                    Collaborate with the team to drive several large-scale digital
                                    projects to completion including websites, branding, content,
                                    and more.
                                </li>
                                <li>
                                    Inspire the client, as well as your team through collaborative
                                    concepts.
                                </li>
                                <li>
                                    Bring business strategy to creative execution to drive results.
                                </li>
                                <li>
                                    Be a leader, putting the client and your team before yourself.
                                </li>
                                <li>
                                    Work with little process in place, solving problems through
                                    proactive problem solving.
                                </li>
                                <li>You hustle your ass off..</li>
                            </ul>
                            <h3>What you’ll bring:</h3>
                            <ul>
                                <li> 7+ years of design and interactive work.</li>
                                <li>
                                    Confidence and talent when it comes to presenting to
                                    stakeholders at all levels.
                                </li>
                                <li>
                                    {" "}
                                    Strong knowledge of visual design, user-centered experience
                                    design, interaction design, brand development, and the creative
                                    process.
                                </li>
                                <li>
                                    Ability to lead internal teams with strategic vision and
                                    creative inspiration.
                                </li>
                                <li>A solid point-of-view and a collaborative nature.</li>
                                <li>An entrepreneurial and independent spirit.</li>
                                <li>
                                    {" "}
                                    A diverse sense of taste with the knowledge necessary to apply
                                    to various challenges.
                                </li>
                                <li>
                                    Real passion for our craft: design, creativity, technology.
                                </li>
                            </ul>
                            <h3>What you’ll get:</h3>
                            <ul>
                                <li>Money.</li>
                                <li>Full benefits including medical, dental, and vision.</li>
                                <li> Paid holidays and vacation.</li>
                                <li>Matching 401k.</li>
                                <li>Amazing clients to work with.</li>
                                <li>Dogs to pet and things to drink.</li>
                                <li>A team that works hard, has fun and loves a challenge.</li>
                            </ul>
                            <a
                                href="#"
                                title=""
                                className="btn-default box-shadow-none w-100 text-center"
                            >
                                Send Your CV/Resume
                            </a>
                        </div>
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
                              className="input__label-content input__label-content--makiko"
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
                                            116 Fairground Rd, FL 32904, USA{" "}
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

CareerDetailPage.getLayout = function getLayout(page: React.ReactElement) {
    return <Layout title="Career Detail">{page}</Layout>;
};

export default CareerDetailPage