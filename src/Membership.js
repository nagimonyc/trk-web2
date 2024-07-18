import React, { useEffect, useState } from "react";
import StripeCheckout from "./components/StripeCheckout";
import './Membership.css';  // Assume we create this CSS file
import Modal from "./components/SignUpModal";
import { useAuth } from "./AuthContext";
import { countUsersWithStripeCustomerId, getUser, fetchImageURL } from "./services/firebase-services";
import Header from "./components/Header";
import Steps from './components/Steps';
import Card from './components/Card';  // Import the Card component
import QRDownload from './images/QR-DL.png';
import googleDownloadImg from './images/google-play-badge.png';
import appleDownloadImg from './images/AppleDL-SVG.svg';

import Footer from './components/Footer';
import polaImages from './images/IMG_6777-1.png';

const Membership = () => {
    const [isModalOpen, setIsModalOpen] = useState(true);
    const [currentStep, setCurrentStep] = useState(1);
    const { currentUser, userData, updateUserDocument } = useAuth();
    const [firstName, setFirstName] = useState(userData.firstName || '');
    const [lastName, setLastName] = useState(userData.lastName || '');
    const [isLoading, setIsLoading] = useState(false);
    const [photoUrl, setPhotoUrl] = useState(null);  // State for photo URL
    const [stripeCustomerCount, setStripeCustomerCount] = useState(0);
    const [user, setUser] = useState(null);  // State for user data
    const [deviceType, setDeviceType] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const count = await countUsersWithStripeCustomerId();
                setStripeCustomerCount(count);
            } catch (error) {
                console.error('Error fetching stripe customer count:', error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        if (currentUser) {
            const fetchUserDetails = async () => {
                try {
                    const userData = await getUser(currentUser.uid);
                    if (userData) {
                        setUser(userData);
                        if (userData.image && userData.image[0] && userData.image[0].path) {
                            const url = await fetchImageURL(userData.image[0].path);
                            setPhotoUrl(url);
                            setFirstName(userData.firstName);
                            setLastName(userData.lastName);
                        }
                    }
                } catch (error) {
                    console.error('Error fetching user details:', error);
                }
            };
            fetchUserDetails();
        }
    }, [currentUser]);

    const handleNameSubmit = () => {
        if (currentUser) {
            updateUserDocument(currentUser.uid, { firstName, lastName }).then(() => {
                console.log("Name updated successfully!");
            });
        }
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
        setCurrentStep(2); // Move to the Payment step upon successful sign-up
    };

    const handleAppDownload = () => {
        if (deviceType === 'Android') {
            window.location.href = 'https://play.google.com/store/apps/details?id=com.nagimo.Nagimo';
        } else if (deviceType === 'iOS') {
            window.location.href = 'https://apps.apple.com/app/id6469657180';
        } else {
            console.log('Please visit this page on a mobile device to download the app');
        }
    };

    useEffect(() => {
        // Set the current step based on user's status
        if (currentUser) {
            if (!userData.isMember) {
                setCurrentStep(2); // Move to the Payment step
            } else {
                setCurrentStep(3); // Move to the Activation step
            }
        }
    }, [currentUser, userData]);

    return (
        <div className="membership-container">
            <Header step={currentStep} />
            <div className="membership-sizer">
                <div style={{ marginBottom: 20 }}>
                    <h1>Welcome to Nagimo</h1>
                    <Steps currentStep={currentStep} />
                </div>
                {isModalOpen && currentStep === 1 && (
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Modal isOpen={isModalOpen} onClose={handleModalClose} />
                    </div>
                )}
                {currentStep === 2 && (
                    <div id="checkout" style={{ width: '100%', display: 'flex', alignItems: 'center' }}>
                        <StripeCheckout />
                    </div>
                )}
                {isLoading && (
                    <div className="loading" style={{ width: '100%', display: 'flex', alignItems: 'center' }}>Loading...</div>
                )}
                {currentUser && userData.isMember && !isLoading && currentStep === 3 && (
                    <div className="fade-in row-layout" style={{}}>
                        <div className="row-layout-card">
                            <Card currentStep={currentStep} firstName={userData.firstName ? userData.firstName : ''} lastName={userData.lastName ? userData.lastName : ''} photoUrl={userData.image ? photoUrl : ''} />
                        </div>
                        <div className="row-layout-info">
                            {/* <p style={{ fontSize: 20 }}>{userData.isMember ? '✅' : '➡️'} : Complete payment</p> */}
                            <p style={{ fontSize: 20 }}>{userData.firstName ? '✅' : '➡️'} Enter first and last name</p>
                            <div style={{ marginTop: 20, flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <input
                                    type="text"
                                    placeholder="John"
                                    style={{
                                        height: 35,
                                        borderRadius: 7.5,
                                        borderColor: '#C3C3C3',
                                        marginBottom: 10,
                                        borderWidth: '1px',
                                        borderStyle: 'solid',
                                        padding: '0 10px',
                                        color: '#000',
                                        fontSize: 16, // Adjust font size to prevent zooming
                                    }}
                                    value={userData.firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                                <input
                                    type="text"
                                    placeholder="Doe"
                                    style={{
                                        height: 35,
                                        borderRadius: 7.5,
                                        borderColor: '#C3C3C3',
                                        marginBottom: 10,
                                        borderWidth: '1px',
                                        borderStyle: 'solid',
                                        padding: '0 10px',
                                        color: '#000',
                                        fontSize: 16, // Adjust font size to prevent zooming
                                        boxSizing: 'border-box'
                                    }}
                                    value={userData.lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                                <button onClick={handleNameSubmit} style={{ borderRadius: '8px', border: '2px solid #ff6633', width: '100%', paddingLeft: 15, paddingRight: 15, backgroundColor: '#ff6633', height: 50, cursor: 'pointer' }}
                                    onMouseDown={(e) => e.target.style.transform = 'scale(0.95)'} // Scales down when mouse is down
                                    onMouseUp={(e) => e.target.style.transform = 'scale(1)'} // Scales back when mouse is released
                                    onTouchStart={(e) => e.target.style.transform = 'scale(0.95)'} // Also handles touch screens
                                    onTouchEnd={(e) => e.target.style.transform = 'scale(1)'} // Reset on touch end
                                >
                                    <p style={{ fontSize: '17px', margin: 0, fontWeight: '700', color: "white" }}>Confirm</p>
                                </button>
                            </div>
                            <p style={{ fontSize: 20, marginTop: 20 }}>{userData.firstName && userData.lastName && userData.image ? '✅' : '➡️'} Get app, sign in, and upload selfie</p>
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'left',
                                    alignItems: 'center',
                                    flexDirection: 'row',
                                    width: '100%',
                                }}
                            >
                                {deviceType === 'Android' && (
                                    <img src={googleDownloadImg} alt="Download on Google Play" onClick={handleAppDownload} style={{ cursor: 'pointer', width: '150px', height: 'auto' }} />
                                )}
                                {deviceType === 'iOS' && (
                                    <img src={appleDownloadImg} alt="Download on App Store" onClick={handleAppDownload} style={{ cursor: 'pointer', width: '125px', height: 'auto' }} />
                                )}
                                {deviceType !== 'Android' && deviceType !== 'iOS' && (
                                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                        <img src={QRDownload} alt="Download via QR" style={{ cursor: 'pointer', width: '150px', height: 'auto', marginBottom: 10 }} />
                                        <p style={{ color: 'black', fontStyle: 'initial', fontSize: 12 }}>Scan QR to download app</p>
                                    </div>
                                )}
                            </div>
                            {userData.firstName && userData.lastName && userData.image && (
                                <div style={{ marginTop: 20 }}>
                                    <p style={{ fontSize: 20, margin: 0, padding: 0 }}>🎉 All set! Enjoy your membership. </p>
                                    <p style={{ fontSize: 10, fontStyle: 'italic', margin: 0, marginTop: 5, padding: 0, }}>
                                        <span style={{ fontWeight: 'bold' }}>Cancel anytime.</span> For more information <a href="mailto:nagimo.nyc@nagimo.org">email</a> us, or DM on <a href="https://www.instagram.com/nagimosends/">Instagram</a>
                                    </p>
                                </div>
                            )}

                        </div>
                    </div>
                )}
            </div>
            <Footer page={"membership"} />
        </div>
    );
};

export default Membership;
