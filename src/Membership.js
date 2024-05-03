import React, { useEffect, useState } from "react";
import StripeCheckout from "./components/StripeCheckout";
import backgroundImage2 from './images/IMG_8105.jpeg';
import './Membership.css';  // Assume we create this CSS file
import Modal from "./components/SignUpModal";
import { useAuth } from "./AuthContext";
import { getUser, setFirstandLastName, getFirstandLastName } from "./services/firebase-services";

const Membership = () => {
    console.log('Membership component mounted')
    const [isModalOpen, setIsModalOpen] = useState(true);
    const { currentUser, userData, updateUserDocument } = useAuth();
    const [firstName, setFirstName] = useState(userData.firstName || '');
    const [lastName, setLastName] = useState(userData.lastName || '');
    const [isLoading, setIsLoading] = useState(false);

    // const membershipStatus = getUserMembershipStatus(currentUser.uid);
    // console.log("currentUser is: ", currentUser.uid);
    // console.log({ membershipStatus });

    // Listen to userData changes and update local state
    useEffect(() => {
        if (userData.firstName && userData.lastName) {
            setFirstName(userData.firstName);
            setLastName(userData.lastName);
        }
    }, [userData.firstName, userData.lastName]);

    const handleNameSubmit = () => {
        if (currentUser) {
            updateUserDocument(currentUser.uid, { firstName, lastName }).then(() => {
                console.log("Name updated successfully!");
            });
        }
    };

    useEffect(() => {
        if (userData.isMember) {
            setIsLoading(true);
            setTimeout(() => {
                setIsLoading(false);
            }, 3000); // Loading for 3 seconds
        }
    }, [userData.isMember]);

    const handleAppDownload = () => {
        const userAgent = navigator.userAgent || navigator.vendor || window.opera;
        if (/android/i.test(userAgent)) {
            window.location.href = 'https://play.google.com/store/apps/details?id=com.nagimo.Nagimo';
        } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
            window.location.href = 'https://apps.apple.com/app/id6469657180';
        } else {
            console.log('Please visit this page on a mobile device to download the app');
        }
    };
    return (
        <div className="membership-container">
            {!currentUser && <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />}
            <main className="main-content">
                <div className="background-container">
                    <img src={backgroundImage2} alt="Background" className="background-image" />
                </div>
                <div id="checkout" style={{ width: '100%', display: 'flex', alignItems: 'center' }}>
                    {!userData.isMember && <StripeCheckout />}
                    {isLoading && <div className="loading" style={{ width: '100%', display: 'flex', alignItems: 'center' }}>Loading...</div>}
                    {currentUser && userData.isMember && !isLoading &&
                        <div className="welcome-steps fade-in" style={{ display: 'flex', flex: 1, height: 450, flexDirection: 'column' }}>
                            <div style={{ marginTop: 15, marginLeft: 25 }}>
                                <p style={{ fontSize: 32, marginBottom: 10 }}>Welcome to Nagimo 🌺</p>
                                <p style={{ margin: 0 }}>Complete steps below to activate membership</p>
                            </div>
                            <div style={{ marginTop: 20, marginLeft: 25 }}>
                                <p style={{ fontSize: 20 }}>{userData.isMember ? '✅' : '➡️'} – Step 1: Complete payment</p>
                                <p style={{ fontSize: 20 }}>{userData.firstName ? '✅' : '➡️'} – Step 2: Enter first and last name</p>
                                <div style={{ marginTop: 20, flex: 1, display: 'flex' }}>
                                    <input type="text" placeholder="First name" style={{ marginRight: 10, width: 100 }} value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                                    <input type="text" placeholder="Last name" style={{ marginRight: 10, width: 100 }} value={lastName} onChange={(e) => setLastName(e.target.value)} />
                                    <button onClick={handleNameSubmit}>OK</button>
                                </div>
                                <p style={{ fontSize: 20, marginTop: 20 }}>{userData.firstName && userData.lastName && userData.image ? '✅' : '➡️'} – Step 3: Download app and upload selfie</p>
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <button style={{ width: '100%', height: 35, borderRadius: 7.5, borderColor: 'transparent', backgroundColor: '#ff8100', color: 'white', fontWeight: '600', fontSize: 15, display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 4 }}
                                        onClick={handleAppDownload}>Download App</button>
                                    <p style={{ flex: 1, textAlign: 'center' }}>---></p>
                                    <p style={{ flex: 4 }}>🤳 selfie (in the app)</p>
                                </div>
                                {userData.isMember && userData.firstName && userData.lastName && userData.image && (
                                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', alignItems: 'center', flexDirection: 'column' }}>
                                        <p style={{ fontSize: 20, fontWeight: 600, }}>🌸🌺🌸🌺🌸🌺🌸🌺🌸🌺</p>
                                        <div style={{ display: 'flex', flex: 1, flexDirection: 'row' }}>
                                            <p>Cancel process WIP</p>
                                            <button
                                                onClick={() => { }}
                                                onMouseDown={(e) => e.target.style.transform = 'scale(0.95)'} // Scales down when mouse is down
                                                onMouseUp={(e) => e.target.style.transform = 'scale(1)'} // Scales back when mouse is released
                                                onTouchStart={(e) => e.target.style.transform = 'scale(0.95)'} // Also handles touch screens
                                                onTouchEnd={(e) => e.target.style.transform = 'scale(1)'} // Reset on touch end
                                            >cancel</button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    }
                </div>
            </main>
        </div>
    );
};

export default Membership;