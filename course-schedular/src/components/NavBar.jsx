import React from 'react';
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav className="navbar navbar-dark bg-dark px-4 py-1">

            <Link to="/" className="navbar-brand">
                Aurora CS Course Scheduler
            </Link>

            <ul className="navbar-nav flex-row ms-auto gap-3">

                <li className="nav-item">
                    <Link to="/home" className="nav-link">
                        Home
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to="/about" className="nav-link">
                        About
                    </Link>
                </li>

            </ul>

        </nav>
    );
}

export default NavBar;
