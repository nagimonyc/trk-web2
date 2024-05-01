// GoogleSignInButton.js
import React from 'react';
import { app } from '../services/firebase-services'; // Adjust the import path as needed
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import googleLogo from '../images/google-logo2.webp'; // Adjust the import path as needed

const GoogleSignInButton = ({ onSuccess, onError }) => {
    const signInWithGoogle = async () => {
        const auth = getAuth(app);
        const provider = new GoogleAuthProvider();

        try {
            const result = await signInWithPopup(auth, provider);
            console.log('Google Sign-In result:', result);
            // This gives you a Google Access Token. You can use it to access Google APIs.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            console.log('Google Sign-In credential:', credential);
            const token = credential.accessToken;
            console.log('Google Sign-In token:', token);
            // The signed-in user info.
            const user = result.user;
            console.log('Google Sign-In user:', user);
            // Call the onSuccess callback if it exists.
            if (onSuccess) {
                console.log('Signed in as:', user);
                onSuccess(user, token);
            }
        } catch (error) {
            console.log('Google Sign-In error 123:', error.message)
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
        <button style={{
            width: '100%', height: 59, borderRadius: 7.5, borderColor: 'transparent', backgroundColor: 'white', color: 'black', fontWeight: '600', fontSize: 15, justifyContent: 'center', display: 'flex', alignItems: 'center', borderWidth: 1, borderColor: 'black', color: 'black', borderStyle: 'solid'
        }} onClick={(e) => { e.preventDefault(); signInWithGoogle(); }}
            onMouseDown={(e) => e.target.style.transform = 'scale(0.95)'} // Scales down when mouse is down
            onMouseUp={(e) => e.target.style.transform = 'scale(1)'} // Scales back when mouse is released
            onTouchStart={(e) => e.target.style.transform = 'scale(0.95)'} // Also handles touch screens
            onTouchEnd={(e) => e.target.style.transform = 'scale(1)'} // Reset on touch end
        >
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img src={googleLogo} alt="Google Logo" style={{ width: 20, height: 20, marginRight: 10 }} />
            </div>
            Continue with Google
        </button>
    );
};

export default GoogleSignInButton;
