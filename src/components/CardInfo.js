import React from "react";

const CardInfo = ({ icon, title, text }) => {
    return (
        <div className="grid-info-card">
            <img src={icon} alt={icon} />
            <h2>{title}</h2>
            <p>{text}</p>
        </div>
    );
};

export default CardInfo;
