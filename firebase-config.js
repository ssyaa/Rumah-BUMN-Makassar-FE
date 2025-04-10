// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';

// Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyC6WcgZ1UbBxHQ-B7jhna9-CTSCITOUSik",
    authDomain: "rumah-bumn-bcf55.firebaseapp.com",
    projectId: "rumah-bumn-bcf55",
    storageBucket: "rumah-bumn-bcf55.firebasestorage.app",
    messagingSenderId: "85763382483",
    appId: "1:85763382483:web:896bc2b438859de5b5c826",
    measurementId: "G-RMB37BKCJ0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const db = getFirestore(app);

// Safe check for Analytics
let analytics = null;
if (typeof window !== "undefined") {
    isSupported().then((yes) => {
        if (yes) {
            analytics = getAnalytics(app);
        }
    });
}

export { firestore, db, app, analytics };
