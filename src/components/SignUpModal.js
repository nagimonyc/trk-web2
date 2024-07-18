import React, { useState } from 'react';
import { signInUser, registerUser, signInWithGoogle, addUserToFirestore, db } from '../services/firebase-services';
import GoogleSignInButton from "./GoogleSignInButton";
import doorLogo from '../images/Group-3.png';
import { useAuth } from '../AuthContext';
import { getFirestore, doc, setDoc, getDoc, collection, connectFirestoreEmulator } from "firebase/firestore";

const Modal = ({ isOpen, onClose, position }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { currentUser, updateUserDocument } = useAuth();

    if (!isOpen) return null;

    const handleSignUp = async () => {
        try {
            const userCredential = await registerUser(email, password);
            if (userCredential.user) {
                updateUserDocument(userCredential.user.uid, {
                    role: 'climber',
                    origin: 'web',
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
        const userRef = doc(db, "users", user.uid);
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

    const handleGoogleSignInError = (errorCode, errorMessage, email, credential) => {
        console.error('Google Sign-In error:', errorMessage);
    };

    return (
        <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)', padding: 20, width: 310, height: 'auto', borderRadius: 20, zIndex: 2, border: '2px solid #ff6633' }}>
            <img src={doorLogo} alt="Entry Logo" style={{ height: 50, width: 50 }} />
            {/* <p style={{ marginTop: 3, marginBottom: 8.5, fontSize: 24, fontWeight: '600' }}>Welcome to Nagimo</p> */}
            <p style={{ marginTop: 2.5, marginBottom: 25, fontSize: 14 }}>Please log in or sign up below.</p>
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
                            color: '#000',
                            fontSize: 16, // Adjust font size to prevent zooming
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
                            color: '#000',
                            fontSize: 16, // Adjust font size to prevent zooming
                            boxSizing: 'border-box'
                        }}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div style={{ display: 'flex' }}>
                    <button style={{ marginRight: 5, width: '100%', height: 35, borderRadius: 7.5, borderWidth: '1px', borderColor: '#C3C3C3', backgroundColor: 'transparent', color: 'black', fontWeight: '600', fontSize: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', borderStyle: 'solid', cursor: 'pointer' }}
                        onClick={handleSignIn}
                        onMouseDown={(e) => e.target.style.transform = 'scale(0.95)'} // Scales down when mouse is down
                        onMouseUp={(e) => e.target.style.transform = 'scale(1)'} // Scales back when mouse is released
                        onTouchStart={(e) => e.target.style.transform = 'scale(0.95)'} // Also handles touch screens
                        onTouchEnd={(e) => e.target.style.transform = 'scale(1)'} // Reset on touch end

                    >Log In</button>
                    <button style={{ marginLeft: 5, width: '100%', height: 35, borderRadius: 7.5, borderColor: 'transparent', backgroundColor: '#ff8100', color: 'white', fontWeight: '600', fontSize: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
                        onClick={handleSignUp}
                        onMouseDown={(e) => e.target.style.transform = 'scale(0.95)'} // Scales down when mouse is down
                        onMouseUp={(e) => e.target.style.transform = 'scale(1)'} // Scales back when mouse is released
                        onTouchStart={(e) => e.target.style.transform = 'scale(0.95)'} // Also handles touch screens
                        onTouchEnd={(e) => e.target.style.transform = 'scale(1)'} // Reset on touch end
                    >Sign Up</button>
                </div>
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
    );
};

export default Modal;
