import React from 'react';

function AboutPage() {
    return (
        <div className="card" >
            <div className="card-body">
                <h5 className="card-title">About</h5>
                <p className="card-text">The Aurora CS Course Scheduler shows the CS Developer Track catalog, tracks which courses you have completed, and shows which courses you are eligible to take next.</p>
                <div>
                    <h5 className="card-title">Author (s)</h5>
                    <p className="card-text">
                        Partner One & Partner Two
                    </p>
                </div>
                <div>
                    <h5 className="card-title">Date</h5>
                    <p className="card-text">
                        Sunday, October 11, 2026
                    </p>
                </div>
                <div>
                    <h5 className="card-title">Version</h5>
                    <p className="card-text">
                        1.0.0
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AboutPage;