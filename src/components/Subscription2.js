import React from "react";
import './Subscription.css';
import svgsvg from '../images/membership-card-check(1).svg';
import { useNavigate } from 'react-router-dom';

const Subscription2 = () => {

    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/membership'); // Ensure this route exists in your Routes
    };

    return (
        <div className="subscription-mega-container" style={{ width: '100%' }}>
            <div className="subscription-container" style={{}}>
                <div className="subscription-header" style={{ height: '90px', justifyContent: 'center', alignItems: 'center' }} >
                    <p className="" style={{
                        // backgroundColor: 'rgba(252, 247, 243, .30)',
                        color: 'white',
                        fontWeight: 700,
                        height: 60,
                        width: 200,
                        borderRadius: 10,
                        textAlign: 'center',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        fontSize: 28
                    }}>Save $2,460</p>
                </div>
                <div style={{ paddingLeft: 20, paddingRight: 20 }}>
                    {/* Save money */}
                    <div style={{ paddingTop: 5 }}>
                        <p style={{ fontSize: '96px', fontWeight: '700', color: '#ff6633', marginBottom: 0, marginTop: 20, textAlign: 'center' }}>$199
                            <span style={{ fontSize: '14px' }}>
                                / mo
                            </span>
                        </p>
                        <h3 style={{ marginTop: 0, textAlign: 'center' }}>Unlimited Check-ins</h3>
                    </div>
                    <div style={{ marginBottom: 15 }}>
                        <button onClick={handleButtonClick} style={{ borderRadius: '8px', border: '2px solid #ff6633', width: '100%', paddingLeft: 15, paddingRight: 15, backgroundColor: '#ff6633', height: 50, cursor: 'pointer' }}
                            onMouseDown={(e) => e.target.style.transform = 'scale(0.95)'} // Scales down when mouse is down
                            onMouseUp={(e) => e.target.style.transform = 'scale(1)'} // Scales back when mouse is released
                            onTouchStart={(e) => e.target.style.transform = 'scale(0.95)'} // Also handles touch screens
                            onTouchEnd={(e) => e.target.style.transform = 'scale(1)'} // Reset on touch end
                        >
                            <p style={{ fontSize: '17px', margin: 0, fontWeight: '700', color: "white" }}>Join us!</p>
                        </button>
                    </div>

                    {/* <p style={{ marginBottom: 15, fontWeight: '700', color: '#2eba88', fontSize: 12 }}>* 3 memberships for the price of 1.5 memberships</p> */}
                </div>
            </div>
        </div >
    );
};

export default Subscription2;
