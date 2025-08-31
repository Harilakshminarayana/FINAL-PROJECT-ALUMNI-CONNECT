import React from 'react';
import './style.css';
import useAnimationOnScroll from './script'; // 1. Import the custom hook

const App = () => {
    useAnimationOnScroll(); // 2. Call the hook here

    return (
        <div>
            {/* The rest of your JSX goes here... */}
            {/* Header Section */}
            <header id="header" className="sticky-top">
                <nav id="header-nav" className="navbar navbar-expand-lg bg-light shadow-sm">
                    <div className="container">
                        <a className="navbar-brand logo" href="#">
                            <img src="https://res.cloudinary.com/dnby5o1lt/image/upload/v1754489527/ALUMINI_CONNECT_LOGO_hwlrpw.png" alt="Logo" className="d-inline-block align-text-top rounded-circle logo-size" />
                            ALUMNI CONNECT
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ms-auto align-items-center">
                                <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
                                <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
                                <li className="nav-item ms-lg-3 mr-3"><a href="#" className="btn btn-outline-secondary">Log In</a></li>
                                <li className="nav-item ms-lg-2 ml-3"><a href="./register.html" className="btn btn-custom-red">Register</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>

            <main>
                {/* Hero Section */}
                <section className="hero-section d-flex align-items-center justify-content-center text-white">
                    <div className="hero-overlay"></div>
                    <h1 className="display-4 fw-bold text-center z-1">Connect With MAMCET</h1>
                </section>

                {/* Alumni Platform Vision Section */}
                <section className="vision-section text-white py-5">
                    <div className="container text-center">
                        <h2 className="h3 fw-bold mb-4">ALUMNI PLATFORM VISION</h2>
                        <div className="row py-4 my-4 border-top border-bottom border-white-50">
                            <div className="col-md-4">
                                <p className="display-4 fw-bold">5000+</p>
                                <p className="lead">Members</p>
                            </div>
                            <div className="col-md-4">
                                <p className="display-4 fw-bold">18+</p>
                                <p className="lead">Batches</p>
                            </div>
                            <div className="col-md-4">
                                <p className="display-4 fw-bold">70+</p>
                                <p className="lead">Companies</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Key Benefits Grid */}
                <section id="about" className="py-5 bg-light">
                    <div className="container text-center">
                        <h2 className="display-5 fw-bold text-dark mb-3">Key Benefits</h2>
                        <p className="lead text-muted mb-5">Discover the advantages of joining our Alumni Network.</p>
                        <div className="row g-4">
                            <div className="col-md-6 col-lg-3">
                                <div className="benefit-card card h-100 p-4 shadow-sm border-0">
                                    <i className="fas fa-sync-alt fa-3x text-custom-red mb-4"></i>
                                    <h3 className="h5 fw-bold mb-3">Reconnect</h3>
                                    <p className="text-muted">Reminisce about college days and build lasting relationships with old friends.</p>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <div className="benefit-card card h-100 p-4 shadow-sm border-0">
                                    <i className="fas fa-briefcase fa-3x text-custom-red mb-4"></i>
                                    <h3 className="h5 fw-bold mb-3">Opportunities</h3>
                                    <p className="text-muted">Explore exclusive job postings and advance your career through our network.</p>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <div className="benefit-card card h-100 p-4 shadow-sm border-0">
                                    <i className="fas fa-calendar-alt fa-3x text-custom-red mb-4"></i>
                                    <h3 className="h5 fw-bold mb-3">Events & Reunion</h3>
                                    <p className="text-muted">Participate in college events, reunions, and stay updated with the community.</p>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <div className="benefit-card card h-100 p-4 shadow-sm border-0">
                                    <i className="fas fa-trophy fa-3x text-custom-red mb-4"></i>
                                    <h3 className="h5 fw-bold mb-3">Achievements</h3>
                                    <p className="text-muted">Celebrate alumni success stories and engage with our accomplished graduates.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Upcoming Events */}
                <section className="py-5">
                    <div className="container text-center">
                        <h2 className="display-5 fw-bold text-dark mb-5">Upcoming Events</h2>
                        <div className="row g-4">
                            <div className="col-md-6 col-lg-4">
                                <div className="card shadow-sm overflow-hidden">
                                    <img src="https://placehold.co/400x250/a2d2ff/ffffff?text=Summer+Event" className="card-img-top" alt="Event Poster" />
                                    <div className="card-body">
                                        <h3 className="h5 card-title fw-bold">Alumni Network Night</h3>
                                        <p className="card-text text-muted">Connect with fellow alumni and grow your professional network.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="card shadow-sm overflow-hidden">
                                    <img src="https://placehold.co/400x250/bde0fe/ffffff?text=Annual+Meet" className="card-img-top" alt="Event Poster" />
                                    <div className="card-body">
                                        <h3 className="h5 card-title fw-bold">Annual Alumni Meet</h3>
                                        <p className="card-text text-muted">Reconnect with old friends and faculty at MAMCET.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="card shadow-sm overflow-hidden">
                                    <img src="https://placehold.co/400x250/ffafcc/ffffff?text=Career+Fair" className="card-img-top" alt="Event Poster" />
                                    <div className="card-body">
                                        <h3 className="h5 card-title fw-bold">Campus Career Fair</h3>
                                        <p className="card-text text-muted">Explore career opportunities and connect with employers.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Gallery Slider */}
                <section className="py-5 bg-light">
                    <div className="container text-center">
                        <h2 className="display-5 fw-bold text-dark mb-5">Gallery Highlights</h2>
                        <div id="galleryCarousel" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="row">
                                        <div className="col-6 col-md-3"><img src="https://placehold.co/200x200/ffc8dd/ffffff?text=Festa'25" className="d-block w-100 rounded-circle" alt="Gallery Image 1" /></div>
                                        <div className="col-6 col-md-3"><img src="https://placehold.co/200x200/cdb4db/ffffff?text=Fest'24" className="d-block w-100 rounded-circle" alt="Gallery Image 2" /></div>
                                        <div className="col-6 col-md-3"><img src="https://placehold.co/200x200/bde0fe/ffffff?text=IEEE+Event" className="d-block w-100 rounded-circle" alt="Gallery Image 3" /></div>
                                        <div className="col-6 col-md-3"><img src="https://placehold.co/200x200/a2d2ff/ffffff?text=Symposium" className="d-block w-100 rounded-circle" alt="Gallery Image 4" /></div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="row">
                                        <div className="col-6 col-md-3"><img src="https://placehold.co/200x200/ffafcc/ffffff?text=PALS+Event" className="d-block w-100 rounded-circle" alt="Gallery Image 5" /></div>
                                        <div className="col-6 col-md-3"><img src="https://placehold.co/200x200/ffc8dd/ffffff?text=Festa'25" className="d-block w-100 rounded-circle" alt="Gallery Image 1" /></div>
                                        <div className="col-6 col-md-3"><img src="https://placehold.co/200x200/cdb4db/ffffff?text=Fest'24" className="d-block w-100 rounded-circle" alt="Gallery Image 2" /></div>
                                        <div className="col-6 col-md-3"><img src="https://placehold.co/200x200/bde0fe/ffffff?text=IEEE+Event" className="d-block w-100 rounded-circle" alt="Gallery Image 3" /></div>
                                    </div>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#galleryCarousel" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span><span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#galleryCarousel" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span><span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </section>

                {/* Success Stories */}
                <section className="py-5">
                    <div className="container text-center">
                        <h2 className="display-5 fw-bold text-dark mb-5">Success Stories</h2>
                        <div className="success-story-card card card-body mx-auto p-5 shadow-lg border-0">
                            <img src="https://placehold.co/80x80/cccccc/333333?text=B" alt="Bharath" className="story-avatar" />
                            <h3 className="h5 fw-bold mt-3">Alumni Student</h3>
                            <div className="text-warning my-2">
                                <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                            </div>
                            <p className="lead text-muted fst-italic">"The MAMCET Alumni Connect platform has been instrumental in reconnecting me with old friends and expanding my professional network. It's a fantastic resource for staying engaged with the college community."</p>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer id="contact" className="bg-dark text-white py-5">
                <div className="container text-center">
                    <p className="fw-semibold">For direct inquiries, contact us at <a href="mailto:alumni@mamcet.com" className="text-danger text-decoration-none">alumni@mamcet.com</a></p>
                    <p>Phone: <span className="fw-semibold">8088077077</span></p>
                    <p>Address: <span className="fw-semibold">Chennai Trunk Road, Siruganur, Trichy - 621105</span></p>
                    <p className="text-white-50 mt-4">&copy; 2025 MAMCET Alumni Connect. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default App;