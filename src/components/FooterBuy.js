import React from 'react';
import './FooterBuy.css';
import { useNavigate } from 'react-router-dom';

const FooterBuy = () => {


    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/join'); // Ensure this route exists in your Routes
    };


    return (
        <div className="footerbuy-container">
            <div className='footerbuy-sizer'>
                <div className="mobile-only">
                    <button className='footerbuy-button'
                        onClick={handleButtonClick}
                        onMouseDown={(e) => e.target.style.transform = 'scale(0.95)'} // Scales down when mouse is down
                        onMouseUp={(e) => e.target.style.transform = 'scale(1)'} // Scales back when mouse is released
                        onTouchStart={(e) => e.target.style.transform = 'scale(0.95)'} // Also handles touch screens
                        onTouchEnd={(e) => e.target.style.transform = 'scale(1)'} // Reset on touch end

                    >
                        Buy Membership
                    </button>
                </div>
                <div className="desktop-only" style={{ flexDirection: 'row' }}>
                    <div style={{ width: '66%' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginRight: 75, lineHeight: '18px' }}>
                            <p style={{ margin: 0, fontSize: 14, alignSelf: 'center' }}>4-gym membership</p>
                            <p style={{ margin: 0, fontSize: 20, fontWeight: '700', padding: 0 }}>$169.99</p>
                        </div>
                        <div style={{}}>
                            <p style={{ margin: 0, fontSize: 12 }}>No initiation fee</p>
                            <p style={{ margin: 0, fontSize: 12 }}>Guaranteed lifetime rate. Cancel anytime.</p>
                        </div>
                    </div>
                    <div style={{ width: '33%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <button className='footerbuy-button'
                            onClick={handleButtonClick}
                            onMouseDown={(e) => e.target.style.transform = 'scale(0.95)'} // Scales down when mouse is down
                            onMouseUp={(e) => e.target.style.transform = 'scale(1)'} // Scales back when mouse is released
                            onTouchStart={(e) => e.target.style.transform = 'scale(0.95)'} // Also handles touch screens
                            onTouchEnd={(e) => e.target.style.transform = 'scale(1)'} // Reset on touch end

                        >
                            Buy Membership
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FooterBuy;
