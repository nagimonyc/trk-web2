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
import { getFirestore, doc, setDoc, getDoc, collection, where, getDocs, query } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyA2IY2lRkSTLCJU-P5DlA38gjrL--cTcuk",
    authDomain: "nagimo.org",
    projectId: "trk-app-505a1",
    storageBucket: "trk-app-505a1.appspot.com",
    messagingSenderId: "786555738802",
    appId: "1:786555738802:web:3d2f4eb2ee03420b2847ab",
    measurementId: "G-G0NP833JHY"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

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
    provider.setCustomParameters({
        client_id: '786555738802-pisnqupfbs7oqfqvba5vb5b83dvf8jfn.apps.googleusercontent.com' // Replace with your actual web client ID
    });
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

const getUser = async (userId) => {
    const userRef = doc(db, "users", userId);
    const docSnapshot = await getDoc(userRef);
    if (docSnapshot.exists()) {
        return docSnapshot.data();
    } else {
        return null;
    }
};

const setFirstandLastName = async (userId, firstName, lastName) => {
    const userRef = doc(db, "users", userId);
    const docSnapshot = await getDoc(userRef);
    if (docSnapshot.exists()) {
        await setDoc(userRef, {
            firstName: firstName,
            lastName: lastName,
        }, { merge: true });
    }
};

// Function to fetch image URL from Firebase Storage
const fetchImageURL = async (imagePath) => {
    try {
        const storageRef = ref(storage, imagePath);
        const url = await getDownloadURL(storageRef);
        return url;
    } catch (error) {
        console.error("Error getting image URL: ", error);
        throw error;
    }
};

export {
    app,
    auth,
    db,
    registerUser,
    signInUser,
    resetPassword,
    signInWithGoogle,
    logOut,
    addUserToFirestore,
    getUser,
    setFirstandLastName,
    fetchImageURL,
};
