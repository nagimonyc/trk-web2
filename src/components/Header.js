import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';
import nagimologo from '../images/Nagimo-Logotype.png';

const Header = ({ step }) => {
    const currentStep = step ? step : 0;
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/membership'); // Ensure this route exists in your Routes
    };

    return (
        <div className="header-container">
            <div className="header-desktop">
                <a className="header-item" href='https://nagimo.org/'>
                    <img src={nagimologo} alt="Nagimo Logo" style={{ height: '100%', width: 150, objectFit: 'contain' }} />
                </a>
                <div className="header-item">
                    {currentStep === 0 && (
                        <button onClick={handleButtonClick} className='header-button' style={{ cursor: 'pointer' }}
                            onMouseDown={(e) => e.target.style.transform = 'scale(0.95)'} // Scales down when mouse is down
                            onMouseUp={(e) => e.target.style.transform = 'scale(1)'} // Scales back when mouse is released
                            onTouchStart={(e) => e.target.style.transform = 'scale(0.95)'} // Also handles touch screens
                            onTouchEnd={(e) => e.target.style.transform = 'scale(1)'} // Reset on touch end
                        >
                            Join us!
                        </button>
                    )}
                    {currentStep === 1 && ('')}
                    {(currentStep === 2 || currentStep === 3) && (
                        <button onClick={handleButtonClick} className='header-button2' style={{ cursor: 'pointer' }}
                            onMouseDown={(e) => e.target.style.transform = 'scale(0.95)'} // Scales down when mouse is down
                            onMouseUp={(e) => e.target.style.transform = 'scale(1)'} // Scales back when mouse is released
                            onTouchStart={(e) => e.target.style.transform = 'scale(0.95)'} // Also handles touch screens
                            onTouchEnd={(e) => e.target.style.transform = 'scale(1)'} // Reset on touch end
                        >
                            Connected
                        </button>
                    )}

                </div>
            </div>
        </div>
    );
};

export default Header;
