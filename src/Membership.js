import React, { useEffect } from "react";
import StripeCheckout from "./components/StripeCheckout";
import backgroundImage2 from './images/IMG_8105.jpeg';
import './Membership.css';  // Assume we create this CSS file
import Modal from "./components/SignUpModal";
import GoogleSignInButton from "./components/GoogleSignInButton";


const Membership = () => {
    const [isModalOpen, setIsModalOpen] = React.useState(false);

    useEffect(() => {
        setIsModalOpen(true);
    },
        []);

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleGoogleSignInSuccess = (user, token) => {
        console.log('Signed in as:', user);
        // Perform any additional actions upon successful sign-in
    };

    const handleGoogleSignInError = (errorCode, errorMessage, email, credential) => {
        console.error('Google Sign-In error:', errorMessage);
        // Handle the sign-in error
    };




    return (
        <div className="membership-container">
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <h2>Welcome to Nagimo</h2>
                <p>Please sign in or sign up below</p>
                <div style={{}}>
                    <label htmlFor="email" style={{ display: 'block' }}>Email</label>
                    <input type="text" placeholder="you@email.com" id="email" style={{ width: '100%', boxSizing: 'border-box' }} />
                </div>
                <GoogleSignInButton
                    onSuccess={handleGoogleSignInSuccess}
                    onError={handleGoogleSignInError}
                />

            </Modal>
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