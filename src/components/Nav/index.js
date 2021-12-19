import React from "react";

function Navigation(props) {

    return (
        <div className=" row navigation" id="navigation">
            <NavLink to="/about">About</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/resume">Resume</NavLink>
        </div>
    );
}

export default Navigation;