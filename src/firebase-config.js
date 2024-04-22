// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA2IY2lRkSTLCJU-P5DlA38gjrL--cTcuk",
    authDomain: "trk-app-505a1.firebaseapp.com",
    projectId: "trk-app-505a1",
    storageBucket: "trk-app-505a1.appspot.com",
    messagingSenderId: "786555738802",
    appId: "1:786555738802:web:3d2f4eb2ee03420b2847ab",
    measurementId: "G-G0NP833JHY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export { app };