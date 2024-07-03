import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';
import nagimologo from '../images/Nagimo-Logotype.png';

const Header = () => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/membership'); // Ensure this route exists in your Routes
    };

    return (
        <div className="header-container">
            <div className="header-desktop">
                <div className="header-item">
                    <img src={nagimologo} alt="Nagimo Logo" style={{ height: '100%', width: 150, objectFit: 'contain' }} />
                </div>
                <div className="header-item">
                    <button onClick={handleButtonClick} className='header-button'
                        onMouseDown={(e) => e.target.style.transform = 'scale(0.95)'} // Scales down when mouse is down
                        onMouseUp={(e) => e.target.style.transform = 'scale(1)'} // Scales back when mouse is released
                        onTouchStart={(e) => e.target.style.transform = 'scale(0.95)'} // Also handles touch screens
                        onTouchEnd={(e) => e.target.style.transform = 'scale(1)'} // Reset on touch end
                    >
                        Join us!
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;
