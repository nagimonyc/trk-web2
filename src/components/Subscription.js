import React from "react";
import './Subscription.css';
import svgsvg from '../images/membership-card-check(1).svg';
import { useNavigate } from 'react-router-dom';

const Subscription = () => {

    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/membership'); // Ensure this route exists in your Routes
    };

    return (
        <div className="subscription-mega-container">
            <h1 style={{ fontSize: 35, font: 'DM Sans sans-serif', marginBottom: 20 }}>Subscription</h1>
            <div className="subscription-container">
                <div className="subscription-header">
                    <p style={{ paddingLeft: 20 }}>Our plan</p>
                </div>
                <div style={{ paddingLeft: 20, paddingRight: 20 }}>
                    {/* Save money */}
                    <div >
                        <p className="save-pill">Save $2,460 per year*</p>
                    </div>
                    <div style={{ paddingTop: 5 }}>
                        <p style={{ fontSize: '56px', fontWeight: '700', color: '#ff6633', marginBottom: 0 }}>$169.99
                            <span style={{ fontSize: '14px' }}>
                                / mo
                            </span>
                        </p>
                        <h3 style={{ marginTop: 0 }}>Unlimited Check-ins</h3>
                    </div>
                    <div style={{}}>
                        <button onClick={handleButtonClick} style={{ borderRadius: '8px', border: '2px solid #ff6633', width: '100%', paddingLeft: 15, paddingRight: 15, backgroundColor: '#ff6633', height: 50, cursor: 'pointer' }}
                            onMouseDown={(e) => e.target.style.transform = 'scale(0.95)'} // Scales down when mouse is down
                            onMouseUp={(e) => e.target.style.transform = 'scale(1)'} // Scales back when mouse is released
                            onTouchStart={(e) => e.target.style.transform = 'scale(0.95)'} // Also handles touch screens
                            onTouchEnd={(e) => e.target.style.transform = 'scale(1)'} // Reset on touch end
                        >
                            <p style={{ fontSize: '17px', margin: 0, fontWeight: '700', color: "white" }}>Join us!</p>
                        </button>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <h5 style={{ fontSize: 15 }}>How to use your unlimited check-ins</h5>
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <div style={{ marginRight: 11 }}>
                                <img src={svgsvg} />
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <div style={{ marginBottom: 0 }}>
                                    <h4 style={{ marginBottom: 0, marginTop: 0 }}>On-site amenities</h4>
                                </div>
                                <div>
                                    <p style={{ marginTop: 5, color: '#8c9bb0' }}>Get access to all gym amenities (climbing, fitness, sauna, ice-bath, etc.)</p>
                                </div>
                            </div>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <div style={{ marginRight: 11 }}>
                                <img src={svgsvg} />
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <div style={{ marginBottom: 0 }}>
                                    <h4 style={{ marginBottom: 0, marginTop: 0 }}>On-site activites</h4>
                                </div>
                                <div>
                                    <p style={{ marginTop: 5, color: '#8c9bb0' }}>Fancy a group fitness class? Get access to all gym classes (yoga, cycling, pilates, etc.)</p>
                                </div>
                            </div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <div style={{ marginRight: 11 }}>
                                <img src={svgsvg} />
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <div style={{ marginBottom: 0 }}>
                                    <h4 style={{ marginBottom: 0, marginTop: 0 }}>Nagimo events</h4>
                                </div>
                                <div>
                                    <p style={{ marginTop: 5, color: '#8c9bb0' }}>Free access to all Nagimo events, including members-only events</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ borderBottom: '1px solid #e7eaee' }}></div>
                    <div>
                        <ul style={{ paddingLeft: 20 }}>
                            <li style={{ marginBottom: 16 }}>Cancel anytime. Get refunded for remaining days</li>
                            <li>Freeze possible</li>
                        </ul>
                    </div>
                    <p style={{ marginBottom: 15, fontWeight: '700', color: '#2eba88', fontSize: 12 }}>* 3 memberships for the price of 1.5 memberships</p>
                </div>
            </div>
        </div>
    );
};

export default Subscription;
