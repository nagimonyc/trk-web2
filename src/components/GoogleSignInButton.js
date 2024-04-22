// GoogleSignInButton.js
import React from 'react';
import { app } from '../firebase-config'; // Adjust the import path as needed
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import googleLogo from '../images/white-google-logo.png'; // Adjust the import path as needed

const GoogleSignInButton = ({ onSuccess, onError }) => {
    const signInWithGoogle = async () => {
        const auth = getAuth(app);
        const provider = new GoogleAuthProvider();

        try {
            const result = await signInWithPopup(auth, provider);
            // This gives you a Google Access Token. You can use it to access Google APIs.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // Call the onSuccess callback if it exists.
            if (onSuccess) {
                console.log('Signed in as:', user);
                onSuccess(user, token);
            }
        } catch (error) {
            console.log('Google Sign-In error:', error.message)
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // Call the onError callback if it exists.
            if (onError) {
                onError(errorCode, errorMessage, email, credential);
            }
        }
    };

    return (
        <button style={{ width: '100%', height: 35, borderRadius: 7.5, borderColor: 'transparent', backgroundColor: 'gray', color: 'white', fontWeight: '700', fontSize: 16, justifyContent: 'center', display: 'flex', alignItems: 'center' }} onClick={(e) => { e.preventDefault(); signInWithGoogle(); }}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img src={googleLogo} alt="Google Logo" style={{ width: 20, height: 20, marginRight: 10 }} />
            </div>
            Continue with Google
        </button>
    );
};

export default GoogleSignInButton;
