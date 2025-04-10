// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);
const firestore = getFirestore(app);
const db = getFirestore(app);

export { firestore, db, app, analytics };