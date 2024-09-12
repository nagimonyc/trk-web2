import React from "react";
import './Footer.css';
import nagimoTeam from '../images/IMG_6777-1.png';
import instagramLogo from '../images/Instagram_logo.png';

const Footer = ({ page }) => {
    return (
        <div className="footer-container">
            <img src={nagimoTeam} className="footer-img" alt="Nagimo Team" />
            <div className="footer-messaging">
                <p>A community built on the mat • Join us
                    <a href="https://www.instagram.com/nagimosends/">
                        <img src={instagramLogo} alt="Instagram" style={{ height: 25 }} />
                    </a>
                </p>
            </div>
        </div>
    );
}

export default Footer;