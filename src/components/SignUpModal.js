import React, { useState } from 'react';
import { signInUser, registerUser, signInWithGoogle, addUserToFirestore, db } from '../services/firebase-services'; // Adjust the path as needed
import GoogleSignInButton from "./GoogleSignInButton";
import doorLogo from '../images/Group-3.png';
import { useAuth } from '../AuthContext';
import { getFirestore, doc, setDoc, getDoc, collection } from "firebase/firestore"; // include getDoc and collection


const Modal = ({ isOpen, onClose, children }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { currentUser, updateUserDocument } = useAuth();

    if (!isOpen) return null;

    const handleSignUp = async () => {
        try {
            const userCredential = await registerUser(email, password);
            console.log('User signed up:', userCredential.user);
            if (userCredential.user) {
                updateUserDocument(userCredential.user.uid, {
                    role: 'climber', // Adjust details as needed
                    origin: 'web', // Adjust details as needed
                    timestamp: new Date(),
                    username: email.split('@')[0],
                    isNewUser: true,
                });
            }

            console.log('User added to Firestore');
            onClose(); // Close the modal upon successful sign-up
        } catch (error) {
            console.error('Error signing up:', error.message);
        }
    };

    const handleGoogleSignInSuccess = async (user, token) => {
        console.log('Signed in as:', user);

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
            console.log('New Google user added to Firestore');
        }
        console.log('Closing modal now');
        onClose(); // Close the modal upon successful check or addition
    };

    // Adjust your GoogleSignInButton to handle the new signInWithGoogle function





    const handleGoogleSignInError = (errorCode, errorMessage, email, credential) => {
        console.error('Google Sign-In error:', errorMessage);
        // Handle the sign-in error
    };

    return (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.75)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2 }}>
            <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)', padding: 20, width: 350, height: 'auto', borderRadius: 20 }}>
                <img src={doorLogo} alt="Entry Logo" style={{ height: 50, width: 50 }} />
                <p style={{ marginTop: 3, marginBottom: 8.5, fontSize: 24, fontWeight: '600' }}>Welcome to Nagimo</p>
                <p style={{ marginTop: 2.5, marginBottom: 25, fontSize: 14 }}>Please sign in or sign up below.</p>
                <div>
                    <input type="text" placeholder="you@email.com" style={{ width: '100%', height: 35, borderRadius: 7.5, borderColor: '#3E3F42', marginBottom: 10, borderWidth: '1px', borderStyle: 'solid' }} value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder="Password" style={{ width: '100%', height: 35, borderRadius: 7.5, borderColor: '#3E3F42', marginBottom: 10, borderWidth: '1px', borderStyle: 'solid' }} value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button style={{ width: '100%', height: 35, borderRadius: 7.5, borderColor: 'transparent', backgroundColor: '#3E3F42', color: 'white', fontWeight: '700', fontSize: 16, display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={handleSignUp}>Sign Up</button>
                    <div style={{ borderTop: '1px solid #ccc', marginTop: 10, marginBottom: 10 }}></div>
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
