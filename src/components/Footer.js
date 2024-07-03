import React from "react";
import './Footer.css';
import nagimoTeam from '../images/IMG_6777-1.png';

const Footer = () => {
    const handleContactClick = () => {
        alert("Contact us at: +1 (347) 443-0228");
    };

    return (
        <div className="footer-container">
            <img src={nagimoTeam} className="footer-img" alt="Nagimo Team" />
            <div className="footer-messaging">
                <p>A community built on the mat • <span style={{ textDecoration: 'underline', cursor: 'pointer' }} onClick={handleContactClick}>Contact us</span></p>
            </div>
        </div>
    );
}

export default Footer;
