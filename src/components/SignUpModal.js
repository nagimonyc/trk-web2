import React, { useState } from 'react';
import { signInUser, registerUser, signInWithGoogle, addUserToFirestore, db } from '../services/firebase-services'; // Adjust the path as needed
import GoogleSignInButton from "./GoogleSignInButton";
import doorLogo from '../images/Group-3.png';
import { useAuth } from '../AuthContext';
import { getFirestore, doc, setDoc, getDoc, collection, connectFirestoreEmulator } from "firebase/firestore"; // include getDoc and collection


const Modal = ({ isOpen, onClose, children }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { currentUser, updateUserDocument } = useAuth();

    if (!isOpen) return null;

    const handleSignUp = async () => {
        try {
            const userCredential = await registerUser(email, password);
            if (userCredential.user) {
                updateUserDocument(userCredential.user.uid, {
                    role: 'climber', // Adjust details as needed
                    origin: 'web', // Adjust details as needed
                    timestamp: new Date(),
                    username: email.split('@')[0],
                    isNewUser: true,
                    uid: userCredential.user.uid,
                    email: email,
                });
            }
            onClose(); // Close the modal upon successful sign-up
        } catch (error) {
            console.error('Error signing up:', error.message);
        }
    };

    const handleSignIn = async () => {
        try {
            const userCredential = await signInUser(email, password);
            onClose(); // Close the modal upon successful sign-in
        } catch (error) {
            console.error('Error signing in:', error.message);
        }
    }


    const handleGoogleSignInSuccess = async (user, token) => {

        const userRef = doc(db, "users", user.uid); // Use the correct method to get a document reference
        const docSnapshot = await getDoc(userRef);
        if (docSnapshot.exists()) {
            console.log('User already exists, not creating a new Firestore entry.');
        } else {
            await addUserToFirestore(user, {
                role: 'climber',
                timestamp: new Date(),
                username: user.email.split('@')[0],
                isNewUser: true,
            });
        }
        onClose(); // Close the modal upon successful check or addition
    };

    // Adjust your GoogleSignInButton to handle the new signInWithGoogle function





    const handleGoogleSignInError = (errorCode, errorMessage, email, credential) => {
        console.error('Google Sign-In error:', errorMessage);
        // Handle the sign-in error
    };

    return (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.75)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2 }}>
            <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)', padding: 20, width: 310, height: 'auto', borderRadius: 20 }}>
                <img src={doorLogo} alt="Entry Logo" style={{ height: 50, width: 50 }} />
                <p style={{ marginTop: 3, marginBottom: 8.5, fontSize: 24, fontWeight: '600' }}>Welcome to Nagimo</p>
                <p style={{ marginTop: 2.5, marginBottom: 25, fontSize: 14 }}>Please sign in or sign up below.</p>
                <div>
                    <div style={{ flexDirection: 'column', display: 'flex' }}>
                        <input
                            type="text"
                            placeholder="you@email.com"
                            style={{
                                height: 35,
                                borderRadius: 7.5,
                                borderColor: '#C3C3C3',
                                marginBottom: 10,
                                borderWidth: '1px',
                                borderStyle: 'solid',
                                padding: '0 10px',
                                color: '#000', // Text color
                                fontSize: 14, // Adjust font size as needed
                                // Placeholder styles
                                '::placeholder': {
                                    color: '#c4c4c4',
                                    fontSize: 14, // Adjust the font size of the placeholder text
                                }
                            }}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            style={{

                                height: 35,
                                borderRadius: 7.5,
                                borderColor: '#C3C3C3',
                                marginBottom: 10,
                                borderWidth: '1px',
                                borderStyle: 'solid',
                                padding: '0 10px',
                                color: '#000', // Text color
                                fontSize: 14, // Adjust font size as needed
                                boxSizing: 'border-box' // Ensures padding is included in the width
                            }}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div style={{ display: 'flex' }}>
                        <button style={{ marginRight: 5, width: '100%', height: 35, borderRadius: 7.5, borderWidth: '1px', borderColor: '#C3C3C3', backgroundColor: 'transparent', color: 'black', fontWeight: '600', fontSize: 15, display: 'flex', alignItems: 'center', justifyContent: 'center', borderStyle: 'solid' }}
                            onClick={handleSignIn}
                            onMouseDown={(e) => e.target.style.transform = 'scale(0.95)'} // Scales down when mouse is down
                            onMouseUp={(e) => e.target.style.transform = 'scale(1)'} // Scales back when mouse is released
                            onTouchStart={(e) => e.target.style.transform = 'scale(0.95)'} // Also handles touch screens
                            onTouchEnd={(e) => e.target.style.transform = 'scale(1)'} // Reset on touch end
                        >Log In</button>
                        <button style={{ marginLeft: 5, width: '100%', height: 35, borderRadius: 7.5, borderColor: 'transparent', backgroundColor: '#ff8100', color: 'white', fontWeight: '600', fontSize: 15, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                            onClick={handleSignUp}
                            onMouseDown={(e) => e.target.style.transform = 'scale(0.95)'} // Scales down when mouse is down
                            onMouseUp={(e) => e.target.style.transform = 'scale(1)'} // Scales back when mouse is released
                            onTouchStart={(e) => e.target.style.transform = 'scale(0.95)'} // Also handles touch screens
                            onTouchEnd={(e) => e.target.style.transform = 'scale(1)'} // Reset on touch end
                        >Sign Up</button>
                    </div>
                    {/* <div style={{ borderTop: '1px solid #ccc', marginTop: 10, marginBottom: 10 }}></div> */}
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: '100%', marginTop: 5, marginBottom: 5 }}>
                        <div style={{ flex: 1, height: 1, backgroundColor: '#ccc', marginTop: 10, marginBottom: 10 }}></div>
                        <p style={{ margin: 0, padding: '0 10px', fontSize: 14, color: '#7B7B7B' }}>or</p>
                        <div style={{ flex: 1, height: 1, backgroundColor: '#ccc', marginTop: 10, marginBottom: 10 }}></div>
                    </div>
                    <GoogleSignInButton
                        onSuccess={handleGoogleSignInSuccess}
                        onError={handleGoogleSignInError}

                    />
                </div>
            </div>
        </div>
    );
};

export default Modal;