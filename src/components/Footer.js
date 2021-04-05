import React, { useState } from "react";
import * as EmailValidator from "email-validator";

import logo from "../assets/images/logo.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMapMarkerAlt,
    faPhoneAlt,
    faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
    faFacebookSquare,
    faTwitterSquare,
    faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    const [email, setEmail] = useState("");
    const [warning, setWarning] = useState("");

    const handleEmail = (event) => {
        const value = event.target.value;
        setEmail(value);
        validateEmail(value);
    };

    // verify email format
    const validateEmail = (value) => {
        if (!EmailValidator.validate(value)) {
            setWarning(true);
        } else {
            setWarning(false);
        }
    };

    return (
        <footer className="footer">
            <div className="footer-form-wrap">
                <div className="footer-form">
                    <h1>Get early access today</h1>
                    <p>
                        It only takes a minute to sign up and our free starter
                        tier is extremely generous. If you have any <br />{" "}
                        questions, our support team would be happy to help you.
                    </p>
                    <div className="input-wrap">
                        <input
                            type="email"
                            placeholder="email@example.com"
                            className="input"
                            value={email}
                            onChange={handleEmail}
                        />
                        <div className="button-wrap">
                            <button className="btn-get-started">
                                Get started For Free
                            </button>
                        </div>
                    </div>
                    <div>
                        {warning && (
                            <span className="warning-message">
                                Please enter a valid email adress
                            </span>
                        )}
                    </div>
                </div>
            </div>
            <img src={logo} alt={logo} className="footer-logo" />
            <div className="grid-footer-wrap">
                {/* large screen */}
                <div className="grid-footer">
                    <div>
                        <FontAwesomeIcon
                            icon={faMapMarkerAlt}
                            className="icon-style"
                        />
                        <span>San Francisco - CA</span>
                    </div>
                    <div className="grid-footer-contact">
                        <div>
                            <FontAwesomeIcon
                                icon={faPhoneAlt}
                                className="icon-style"
                            />
                            <span>+1-543-123-4567</span>
                        </div>
                        <div>
                            <FontAwesomeIcon
                                icon={faEnvelope}
                                className="icon-style"
                            />
                            <span>example@fylo.com</span>
                        </div>
                    </div>
                    <div className="grid-footer-info">
                        <p>About Us</p>
                        <p>Jobs</p>
                        <p>Press</p>
                        <p>Blog</p>
                    </div>
                    <div className="grid-footer-info">
                        <p>Contact Us</p>
                        <p>Terms</p>
                        <p>Privacy</p>
                    </div>
                    <div>
                        <FontAwesomeIcon
                            icon={faFacebookSquare}
                            size="2x"
                            className="icon-style icon-social-hover"
                        />
                        <FontAwesomeIcon
                            icon={faTwitterSquare}
                            size="2x"
                            className="icon-style icon-social-hover"
                        />
                        <FontAwesomeIcon
                            icon={faInstagramSquare}
                            size="2x"
                            className="icon-style icon-social-hover"
                        />
                    </div>
                </div>

                {/* small screen */}
                <div className="footer-info-small-screen">
                    <div className="small-screen-conract">
                        <div>
                            <FontAwesomeIcon
                                icon={faMapMarkerAlt}
                                className="icon-style"
                            />
                            <span>San Francisco - CA</span>
                        </div>

                        <div>
                            <FontAwesomeIcon
                                icon={faPhoneAlt}
                                className="icon-style"
                            />
                            <span>+1-543-123-4567</span>
                        </div>

                        <div>
                            <FontAwesomeIcon
                                icon={faEnvelope}
                                className="icon-style"
                            />
                            <span>example@fylo.com</span>
                        </div>
                    </div>
                    <div className="small-screen-menu">
                        <p>About Us</p>
                        <p>Jobs</p>
                        <p>Press</p>
                        <p>Blog</p>
                        <p>Contact Us</p>
                        <p>Terms</p>
                        <p>Privacy</p>
                    </div>
                    <div className="small-screen-social-wrap">
                        <div>
                            <FontAwesomeIcon
                                icon={faFacebookSquare}
                                size="2x"
                                className="icon-style icon-social-hover"
                            />
                            <FontAwesomeIcon
                                icon={faTwitterSquare}
                                size="2x"
                                className="icon-style icon-social-hover"
                            />
                            <FontAwesomeIcon
                                icon={faInstagramSquare}
                                size="2x"
                                className="icon-style icon-social-hover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
