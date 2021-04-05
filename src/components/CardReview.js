import React from "react";

const CardReview = ({ text, profilePicture, profileName, profilePosition }) => {
    return (
        <div className="grid-review-card">
            <p>{text}</p>
            <div className="profile-info">
                <img src={profilePicture} alt={profilePicture} />
                <div className="profile-bio">
                    <span className="profile-name">{profileName}</span>
                    <span className="profile-position">{profilePosition}</span>
                </div>
            </div>
        </div>
    );
};

export default CardReview;
