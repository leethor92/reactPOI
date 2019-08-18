import React, { Component } from "react";
import {Link} from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <nav className="navbar  navbar-light fixed-top  bg-primary ">
                <h1>
                    <Link className="navbar-brand text-white" to="/">Point App</Link>
                </h1>
                <h1>
                    Points <span className="badge badge-pill badge-success">{this.props.numPoints}</span>
                </h1>
                <span className="navbar-text text-light">Some nice place to see!</span>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <authButton />
                    </li>
                </ul>
            </nav>

    );
    }
}

export default Header;