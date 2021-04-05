import React from "react";
import logo from "../assets/images/logo.svg";

const Header = () => {
    return (
        <header className="header">
            <img src={logo} alt={logo} className="header-logo" />
            <div className="header-topnav">
                <span>Features</span>
                <span>Team</span>
                <span>Sign In</span>
            </div>
        </header>
    );
};

export default Header;
