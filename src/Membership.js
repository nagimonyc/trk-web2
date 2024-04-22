import React, { useEffect, useState } from "react";
import StripeCheckout from "./components/StripeCheckout";
import backgroundImage2 from './images/IMG_8105.jpeg';
import './Membership.css';  // Assume we create this CSS file
import Modal from "./components/SignUpModal";


const Membership = () => {
    console.log('Membership component mounted')
    const [isModalOpen, setIsModalOpen] = useState(true);

    const closeModal = () => {
        setIsModalOpen(false);
    };


    return (
        <div className="membership-container">
            <Modal isOpen={isModalOpen} onClose={closeModal} />
            <main className="main-content">
                <div className="background-container">
                    <img src={backgroundImage2} alt="Background" className="background-image" />
                </div>
                <div id="checkout" className="" style={{ width: '100%', display: 'flex', alignItems: 'center' }}>
                    <StripeCheckout />
                </div>
            </main>
        </div>
    );
};

export default Membership;