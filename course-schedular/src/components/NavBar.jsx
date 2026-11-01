import React from 'react';
import {NavLink,Link} from "react-router-dom";

function NavBar(props) {
    return (



        <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand">Aurora CS Course Scheduler</a>


            <ul className="navbar-nav ">
                <li className="nav-item">

                    <Link to="/about">About</Link>
                </li>
                <li className="nav-item">

                    <Link to="/home">Home</Link>
                </li>


            </ul>

        </nav>

);
}

export default NavBar;