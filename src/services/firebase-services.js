// firebase-services.js
import { initializeApp } from "firebase/app";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
} from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA2IY2lRkSTLCJU-P5DlA38gjrL--cTcuk",
    authDomain: "trk-app-505a1.firebaseapp.com",
    projectId: "trk-app-505a1",
    storageBucket: "trk-app-505a1.appspot.com",
    messagingSenderId: "786555738802",
    appId: "1:786555738802:web:3d2f4eb2ee03420b2847ab",
    measurementId: "G-G0NP833JHY"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const registerUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
};

const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
};

const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
};

const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
};

const logOut = () => {
    return signOut(auth);
};

const addUserToFirestore = (user, additionalDetails) => {
    return setDoc(doc(db, "users", user.uid), {
        email: user.email,
        uid: user.uid,
        ...additionalDetails,
    });
};

export { auth, db, registerUser, signInUser, resetPassword, signInWithGoogle, logOut, addUserToFirestore };
