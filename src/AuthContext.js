import React, { createContext, useState, useEffect, useContext } from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, onSnapshot, updateDoc, getDoc, setDoc } from "firebase/firestore";
import { app } from './services/firebase-services'; // Adjusting path to make firebase-config redundant.

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [userData, setUserData] = useState({});
    const auth = getAuth(app);
    const db = getFirestore(app);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            if (user) {
                const userRef = doc(db, "users", user.uid);
                const unsubscribeUser = onSnapshot(userRef, (doc) => {
                    setUserData(doc.exists() ? doc.data() : {});
                });
                return unsubscribeUser;
            } else {
                setUserData({});
            }
        });
        return () => unsubscribe();
    }, [auth, db]);

    const updateUserDocument = async (userId, data) => {
        const userRef = doc(db, "users", userId);
        const docSnap = await getDoc(userRef);

        if (docSnap.exists()) {
            try {
                await updateDoc(userRef, data);
                // console.log("Document successfully updated!");
            } catch (error) {
                console.error("Error updating document: ", error);
            }
        } else {
            try {
                await setDoc(userRef, data, { merge: true });
            } catch (error) {
                console.error("Error creating document: ", error);
            }
        }
    };


    return (
        <AuthContext.Provider value={{ currentUser, userData, updateUserDocument }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
