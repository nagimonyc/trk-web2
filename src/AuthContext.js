import React, { createContext, useState, useEffect, useContext } from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, onSnapshot, updateDoc, getDoc, setDoc } from "firebase/firestore";
import { app } from './firebase-config'; // Adjust the path as needed

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
        console.log("updating user document with id: ", userId, " and data: ", data);
        console.log("userRef is: ", userRef.path);
        const docSnap = await getDoc(userRef);

        if (docSnap.exists()) {
            try {
                await updateDoc(userRef, data);
                console.log("Document successfully updated!");
            } catch (error) {
                console.error("Error updating document: ", error);
            }
        } else {
            try {
                await setDoc(userRef, data, { merge: true });
                console.log("Document successfully created with update data!");
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
