import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';
import nagimologo from '../images/Nagimo-Logotype.png';
import profile from '../images/Vector2.png';
import { logOut } from '../services/firebase-services';

const Header = ({ step, photoUrl }) => {
    const currentStep = step ? step : 0;
    const navigate = useNavigate();
    const [isDropdownVisible, setDropdownVisible] = useState(false);

    const handleButtonClick = () => {
        navigate('/membership'); // Ensure this route exists in your Routes
    };

    const handleProfileClick = () => {
        setDropdownVisible(!isDropdownVisible);
    };

    const handleSignoutClick = async () => {
        await logOut();
        window.location.reload(); // Reload the page after logging out
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
                            Get Started
                        </button>
                    )}
                    {currentStep === 1 && ('')}
                    {(currentStep === 2 || currentStep === 3) && (
                        <div className="profile-container">
                            <button onClick={handleProfileClick} className='header-button2' style={{ cursor: 'pointer' }}
                                onMouseDown={(e) => e.target.style.transform = 'scale(0.95)'} // Scales down when mouse is down
                                onMouseUp={(e) => e.target.style.transform = 'scale(1)'} // Scales back when mouse is released
                                onTouchStart={(e) => e.target.style.transform = 'scale(0.95)'} // Also handles touch screens
                                onTouchEnd={(e) => e.target.style.transform = 'scale(1)'} // Reset on touch end
                            >
                                {photoUrl ? (
                                    <img src={photoUrl} alt="Profile" className="profile-img" />
                                ) : (
                                    <img src={profile} alt="Profile" className="profile-img" />
                                )}
                            </button>
                            {isDropdownVisible && (
                                <div className="dropdown-menu">
                                    <button onClick={handleSignoutClick} className='dropdown-item'>
                                        Sign out
                                    </button>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Header;
