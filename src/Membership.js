import React, { useEffect, useState } from "react";
import StripeCheckout from "./components/StripeCheckout";
import backgroundImage2 from './images/IMG_8105.jpeg';
import './Membership.css';  // Assume we create this CSS file
import Modal from "./components/SignUpModal";
import { useAuth } from "./AuthContext";

const Membership = () => {
    console.log('Membership component mounted')

    const { currentUser } = useAuth();

    const [isModalOpen, setIsModalOpen] = useState(true);
    const closeModal = () => {
        console.log('Modal is being closed');
        setIsModalOpen(false);
    };

    useEffect(() => {
        if (!isModalOpen) {
            console.log('Modal state changed to closed');
            // Perform any cleanup or additional actions necessary when modal closes
        }
    }, [isModalOpen, currentUser]);


    return (
        <div className="membership-container">
            <Modal isOpen={isModalOpen} onClose={closeModal} />
            <main className="main-content">
                <div className="background-container">
                    <img src={backgroundImage2} alt="Background" className="background-image" />
                </div>
                <div id="checkout" className="" style={{ width: '100%', display: 'flex', alignItems: 'center' }}>
                    {/* Only mount StripeCheckout if there is a current user */}
                    {currentUser && <StripeCheckout />}
                </div>
            </main>
        </div>
    );
};

export default Membership;