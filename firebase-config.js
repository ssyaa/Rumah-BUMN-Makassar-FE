// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBKVzYLUsQDWcINkM4KcOHLrNEBOAnZ11k",
    authDomain: "rumah-bumn-e8f5a.firebaseapp.com",
    projectId: "rumah-bumn-e8f5a",
    storageBucket: "rumah-bumn-e8f5a.firebasestorage.app",
    messagingSenderId: "616998037603",
    appId: "1:616998037603:web:90ef785dbad6c088ee7056",
    measurementId: "G-B1JNMNW78R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export { firestore };