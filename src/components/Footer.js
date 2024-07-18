import React from "react";
import './Footer.css';
import nagimoTeam from '../images/IMG_6777-1.png';

const Footer = ({ page }) => {
    return (
        <div className="footer-container">
            <img src={nagimoTeam} className="footer-img" alt="Nagimo Team" />
            <div className="footer-messaging">
                <p>A community built on the mat • <a href="mailto:nagimo.nyc@nagimo.org" style={{ textDecoration: 'underline', cursor: 'pointer', color: 'black' }}>Contact us</a></p>
            </div>
        </div>
    );
}

export default Footer;
