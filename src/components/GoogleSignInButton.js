import React from 'react';
import { app } from '../services/firebase-services'; // Adjust the import path as needed
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import googleLogo from '../images/google-logo2.webp'; // Adjust the import path as needed

const GoogleSignInButton = ({ onSuccess, onError }) => {
    const signInWithGoogle = async () => {
        const auth = getAuth(app);
        const provider = new GoogleAuthProvider();
        provider.setCustomParameters({
            client_id: '786555738802-pisnqupfbs7oqfqvba5vb5b83dvf8jfn.apps.googleusercontent.com' // Replace with your actual web client ID
        });

        try {
            const result = await signInWithPopup(auth, provider);
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
            if (onSuccess) {
                onSuccess(user, token);
            }
        } catch (error) {
            console.error('Google Sign-In error:', error.message);
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.email;
            const credential = GoogleAuthProvider.credentialFromError(error);
            if (onError) {
                onError(errorCode, errorMessage, email, credential);
            }
        }
    };

    return (
        <button style={{
            width: '100%', height: 59, borderRadius: 7.5, borderColor: 'transparent', backgroundColor: 'white', color: 'black', fontWeight: '600', fontSize: 15, justifyContent: 'center', display: 'flex', alignItems: 'center', borderWidth: 1, borderColor: 'black', color: 'black', borderStyle: 'solid', cursor: 'pointer'
        }} onClick={(e) => { e.preventDefault(); signInWithGoogle(); }}
            onMouseDown={(e) => e.target.style.transform = 'scale(0.95)'}
            onMouseUp={(e) => e.target.style.transform = 'scale(1)'}
            onTouchStart={(e) => e.target.style.transform = 'scale(0.95)'}
            onTouchEnd={(e) => e.target.style.transform = 'scale(1)'}
        >
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img src={googleLogo} alt="Google Logo" style={{ width: 20, height: 20, marginRight: 10 }} />
            </div>
            Continue with Google
        </button>
    );
};

export default GoogleSignInButton;
