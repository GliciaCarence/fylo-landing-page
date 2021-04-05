import React from "react";

// assets
import heroImage from "../assets/images/illustration-intro.png";
import image from "../assets/images/illustration-stay-productive.png";
import iconAccess from "../assets/images/icon-access-anywhere.svg";
import iconSecurity from "../assets/images/icon-security.svg";
import iconCollab from "../assets/images/icon-collaboration.svg";
import iconFile from "../assets/images/icon-any-file.svg";
import profilePictureOne from "../assets/images/profile-1.jpg";
import profilePictureTwo from "../assets/images/profile-2.jpg";
import profilePictureThree from "../assets/images/profile-3.jpg";

// icons
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// components
import CardInfo from "../components/CardInfo";
import CardReview from "../components/CardReview";

const Home = () => {
    return (
        <main>
            {/* 1st section - site presentation */}
            <section>
                <div className="intro intro-bg-image">
                    <img src={heroImage} alt={heroImage} />
                    <div className="intro-text">
                        <h1>
                            All your files in one secure location, <br />{" "}
                            accessible anywhere.
                        </h1>
                        <p>
                            Fylo stores all your most important files in one
                            secure location. <br /> Access them wherever you
                            need, share and collaborate with <br /> friends,
                            family and co-workers.
                        </p>
                    </div>

                    <button className="btn-intro">Get Started</button>
                </div>
            </section>

            {/* 2nd section - services info */}
            <section>
                <div className="grid-info-wrap">
                    <div className="grid-info">
                        <CardInfo
                            icon={iconAccess}
                            title="Access your files, anywhere"
                            text="The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere."
                        />
                        <CardInfo
                            icon={iconSecurity}
                            title="Security you can trust"
                            text="2-factor authentication and user-controlled encryption are just a couple of security features we allow to help secure files."
                        />
                        <CardInfo
                            icon={iconCollab}
                            title="Real-time collaboration"
                            text="Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required."
                        />
                        <CardInfo
                            icon={iconFile}
                            title="Store any type of file"
                            text="Whether you're sharing photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared."
                        />
                    </div>
                </div>
            </section>

            {/* 3rd section - info and reviews */}
            <section>
                <div className="description-wrap">
                    <img src={image} alt={image} />
                    <div className="description">
                        <h1>
                            Stay productive, <br /> wherever you are
                        </h1>
                        <p>
                            Never let location be an issue when accessing your
                            files. Fylo has you covered for all of your file
                            storage needs.
                        </p>
                        <p>
                            Securely share files and folders with friends,
                            family and colleagues for live collaboration. No
                            email attachments required.
                        </p>
                        <div className="how-it-works">
                            <p>See how Fylo works</p>
                            <FontAwesomeIcon
                                icon={faArrowCircleRight}
                                color="hsl(176, 68%, 64%)"
                            />
                        </div>
                    </div>
                </div>

                <div className="grid-review-wrap">
                    <div className="grid-review">
                        <CardReview
                            text="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-olled collaboration machine."
                            profilePicture={profilePictureOne}
                            profileName="Satish Patel"
                            profilePosition="Founder & CEO, Huddle"
                        />
                        <CardReview
                            text="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-olled collaboration machine."
                            profilePicture={profilePictureTwo}
                            profileName="Bruce McKenzie"
                            profilePosition="Founder & CEO, Huddle"
                        />
                        <CardReview
                            text="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-olled collaboration machine."
                            profilePicture={profilePictureThree}
                            profileName="Iva Boyd"
                            profilePosition="Founder & CEO, Huddle"
                        />
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;
