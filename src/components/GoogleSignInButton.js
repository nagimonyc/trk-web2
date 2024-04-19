// GoogleSignInButton.js
import React from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { app } from '../firebase-config'; // Adjust the import path as needed

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
                onSuccess(user, token);
            }
        } catch (error) {
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
        <button onClick={signInWithGoogle}>Sign in with Google</button>
    );
};

export default GoogleSignInButton;
