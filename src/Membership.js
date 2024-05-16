import React, { useEffect, useState } from "react";
import StripeCheckout from "./components/StripeCheckout";
import backgroundImage2 from './images/IMG_8105.jpeg';
import './Membership.css';  // Assume we create this CSS file
import Modal from "./components/SignUpModal";
import { useAuth } from "./AuthContext";
import appleDownloadImg from './images/AppleDL-SVG.svg'; // Import the Apple download image
import googleDownloadImg from './images/google-play-badge.png'; // Import the Google Play image
import { countUsersWithStripeCustomerId } from "./services/firebase-services";

const Membership = () => {
    const [isModalOpen, setIsModalOpen] = useState(true);
    const { currentUser, userData, updateUserDocument } = useAuth();
    const [firstName, setFirstName] = useState(userData.firstName || '');
    const [lastName, setLastName] = useState(userData.lastName || '');
    const [isLoading, setIsLoading] = useState(false);
    const [deviceType, setDeviceType] = useState(null);
    const [stripeCustomerCount, setStripeCustomerCount] = useState(0);

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
        const userAgent = navigator.userAgent || navigator.vendor || window.opera;
        if (/android/i.test(userAgent)) {
            setDeviceType('Android');
        } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
            setDeviceType('iOS');
        }
    }, []);

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
        if (deviceType === 'Android') {
            window.location.href = 'https://play.google.com/store/apps/details?id=com.nagimo.Nagimo';
        } else if (deviceType === 'iOS') {
            window.location.href = 'https://apps.apple.com/app/id6469657180';
        } else {
            console.log('Please visit this page on a mobile device to download the app');
        }
    };

    const handleInputBlur = () => {
        const viewport = document.querySelector('meta[name="viewport"]');
        viewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
        window.scrollTo(0, 0);  // Optionally reset the scroll position
    };

    const handleInputFocus = () => {
        const viewport = document.querySelector('meta[name="viewport"]');
        viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0');
    };

    return (
        <div className="membership-container">
            {!currentUser && <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />}
            {currentUser && (
                <div>
                    <button className="logged-in-button">
                        Logged In
                    </button>
                    <button className="passes-left-button">
                        <span style={{ fontWeight: 600 }}>{37 - stripeCustomerCount}</span>/30 passes left
                    </button>
                </div>
            )}
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
                                <p style={{ margin: 0 }}>To activate membership, see below:</p>
                            </div>
                            <div style={{ marginTop: 20, marginLeft: 25 }}>
                                <p style={{ fontSize: 20 }}>{userData.isMember ? '✅' : '➡️'} : Complete payment</p>
                                <p style={{ fontSize: 20 }}>{userData.firstName ? '✅' : '➡️'} : Submit first and last name</p>
                                <div style={{ marginTop: 20, flex: 1, display: 'flex' }}>
                                    <input type="text" placeholder="First name" style={{ marginRight: 10, width: 100, fontSize: 16 }} value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                                    <input type="text" placeholder="Last name" style={{ marginRight: 10, width: 100, fontSize: 16 }} value={lastName} onChange={(e) => setLastName(e.target.value)} />
                                    <button onClick={handleNameSubmit} style={{}}>SUBMIT</button>
                                </div>
                                <p style={{ fontSize: 20, marginTop: 20 }}>{userData.firstName && userData.lastName && userData.image ? '✅' : '➡️'} : Get app, sign in, and upload selfie</p>
                                <div
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'left',
                                        alignItems: 'center',
                                        flexDirection: 'row',
                                        width: '100%'
                                    }}
                                >
                                    {deviceType === 'Android' && (
                                        <img src={googleDownloadImg} alt="Download on Google Play" onClick={handleAppDownload} style={{ cursor: 'pointer', width: '150px', height: 'auto' }} />
                                    )}
                                    {deviceType === 'iOS' && (
                                        <img src={appleDownloadImg} alt="Download on App Store" onClick={handleAppDownload} style={{ cursor: 'pointer', width: '125px', height: 'auto' }} />
                                    )}
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </main>
        </div>
    );
};

export default Membership;
