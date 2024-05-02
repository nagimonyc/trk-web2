import React, { useEffect, useState } from "react";
import StripeCheckout from "./components/StripeCheckout";
import backgroundImage2 from './images/IMG_8105.jpeg';
import './Membership.css';  // Assume we create this CSS file
import Modal from "./components/SignUpModal";
import { useAuth } from "./AuthContext";
import { getUser, setFirstandLastName, getFirstandLastName } from "./services/firebase-services";

const Membership = () => {
    console.log('Membership component mounted')
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [membershipStatus, setMembershipStatus] = useState(false);
    const [isNameSubmitted, setIsNameSubmitted] = useState(false);

    const { currentUser } = useAuth();
    // const membershipStatus = getUserMembershipStatus(currentUser.uid);
    // console.log("currentUser is: ", currentUser.uid);
    // console.log({ membershipStatus });

    useEffect(() => {
        console.log('Current user:', currentUser);
        if (currentUser) {
            getUser(currentUser.uid).then((data) => {
                console.log('User membership status:', data.isMember);
                setMembershipStatus(data.isMember);
                if (data.firstName && data.lastName) {
                    setIsNameSubmitted(true);
                    setFirstName(data.firstName);
                    setLastName(data.lastName);
                }
            });
        }
    }, [currentUser]);

    const [isModalOpen, setIsModalOpen] = useState(true);
    const closeModal = () => {
        console.log('Modal is being closed');
        setIsModalOpen(false);
    };

    const handleNameSubmit = () => {
        console.log('First name:', firstName);
        console.log('Last name:', lastName);
        if (currentUser) {
            setFirstandLastName(currentUser.uid, firstName, lastName).then(() => {
                setIsNameSubmitted(true); // Update state when Firebase action is complete
            });
        }
    }

    const handleAppDownload = () => {
        const userAgent = navigator.userAgent || navigator.vendor || window.opera;
        if (/android/i.test(userAgent)) {
            window.location.href = 'https://play.google.com/store/apps/details??id=com.nagimo.Nagimo'; // Your Android app link
        } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
            window.location.href = 'https://apps.apple.com/app/id6469657180'; // Your iOS app link
        } else {
            // Handle desktop or other devices
            console.log('Please visit this page on a mobile device to download the app');
        }
    };

    return (
        <div className="membership-container">
            {!currentUser && <Modal isOpen={isModalOpen} onClose={closeModal} />}
            <main className="main-content">
                <div className="background-container">
                    <img src={backgroundImage2} alt="Background" className="background-image" />
                </div>
                <div id="checkout" className="" style={{ width: '100%', display: 'flex', alignItems: 'center' }}>
                    {/* Only mount StripeCheckout if there is a current user */}
                    {!membershipStatus && <StripeCheckout />}
                    {currentUser && membershipStatus &&
                        <div style={{ display: 'flex', flex: 1, height: 450, flexDirection: 'column' }}>
                            <div style={{ marginTop: 15, marginLeft: 25 }}>
                                <p style={{ fontSize: 32, marginBottom: 10 }}>Welcome to Nagimo 🌺</p>
                                <p style={{ margin: 0 }}>Complete steps below to activate membership</p>
                            </div>
                            <div style={{ marginTop: 20, marginLeft: 25 }}>
                                <p style={{ fontSize: 20 }}>{membershipStatus ? '✅' : '➡️'} – Step 1: Complete payment</p>
                                <p style={{ fontSize: 20 }}>{isNameSubmitted ? '✅' : '➡️'} – Step 2: Enter first and last name</p>
                                <div style={{ marginTop: 20, flex: 1, display: 'flex' }}>
                                    <input
                                        type="text"
                                        placeholder="First name"
                                        style={{ marginRight: 10, width: 100 }}
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                    >

                                    </input>
                                    <input
                                        type="text"
                                        placeholder="Last name"
                                        style={{ marginRight: 10, width: 100 }}
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                    >
                                    </input>
                                    <button
                                        onClick={handleNameSubmit}
                                        onMouseDown={(e) => e.target.style.transform = 'scale(0.95)'} // Scales down when mouse is down
                                        onMouseUp={(e) => e.target.style.transform = 'scale(1)'} // Scales back when mouse is released
                                        onTouchStart={(e) => e.target.style.transform = 'scale(0.95)'} // Also handles touch screens
                                        onTouchEnd={(e) => e.target.style.transform = 'scale(1)'} // Reset on touch end
                                    >OK</button>
                                </div>
                                <p style={{ fontSize: 20, marginTop: 20 }}>➡️ – Step 3: Download app and upload selfie</p>
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <button
                                        style={{
                                            width: '100%',
                                            height: 35,
                                            borderRadius: 7.5,
                                            borderColor: 'transparent',
                                            backgroundColor: '#ff8100',
                                            color: 'white',
                                            fontWeight: '600',
                                            fontSize: 15,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            flex: 4
                                        }}
                                        onClick={handleAppDownload}
                                        onMouseDown={(e) => e.target.style.transform = 'scale(0.95)'} // Scales down when mouse is down
                                        onMouseUp={(e) => e.target.style.transform = 'scale(1)'} // Scales back when mouse is released
                                        onTouchStart={(e) => e.target.style.transform = 'scale(0.95)'} // Also handles touch screens
                                        onTouchEnd={(e) => e.target.style.transform = 'scale(1)'} // Reset on touch end
                                    >Download App</button>
                                    <p style={{ flex: 1, textAlign: 'center' }}>---></p>
                                    <p style={{ flex: 4 }}>🤳 selfie (in the app)</p>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </main >
        </div >
    );
};

export default Membership;