import React from 'react';

function AboutPage() {
    return (
        <main className="container-fluid bg-light min-vh-100 py-4">
            <div className="row justify-content-center">
                <div className="col-12 col-md-8 col-lg-6">
                    <section className="card shadow-sm">
                        <div className="card-body">
                            <h5 className="card-title">About</h5>

                            <p className="card-text">
                                The Aurora CS Course Scheduler shows the CS Developer Track
                                catalog, tracks which courses you have completed, and shows
                                which courses you are eligible to take next.
                            </p>

                            <div className="row mb-2">
                                <div className="col-sm-4 fw-semibold">Author(s)</div>
                                <div className="col-sm-8">Joshua &amp; Jesse</div>
                            </div>

                            <div className="row mb-2">
                                <div className="col-sm-4 fw-semibold">Date</div>
                                <div className="col-sm-8">{new Date().toLocaleDateString("en-US",{
                                    year:"numeric",
                                    month:"long",
                                    day:"numeric"
                                })}</div>
                            </div>

                            <div className="row">
                                <div className="col-sm-4 fw-semibold">Version</div>
                                <div className="col-sm-8">1.0.0</div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
}

export default AboutPage;
