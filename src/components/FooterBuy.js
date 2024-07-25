import React from 'react';
import './FooterBuy.css';

const FooterBuy = () => {
    return (
        <div className="footerbuy-container">
            <div className='footerbuy-sizer'>
                <div className="mobile-only">
                    <button className='footerbuy-button'>
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
                            <p style={{ margin: 0, fontSize: 12 }}>Guaranteed lifetime rate</p>
                        </div>
                    </div>
                    <div style={{ width: '33%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <button className='footerbuy-button'>
                            Buy Membership
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FooterBuy;
