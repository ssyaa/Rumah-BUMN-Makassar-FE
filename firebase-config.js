// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

let analytics; // Jangan langsung dijalankan
let app;

// Pastikan app hanya di-initialize sekali
if (!getApps().length) {
  app = initializeApp({
    apiKey: "AIzaSyC6WcgZ1UbBxHQ-B7jhna9-CTSCITOUSik",
    authDomain: "rumah-bumn-bcf55.firebaseapp.com",
    projectId: "rumah-bumn-bcf55",
    storageBucket: "rumah-bumn-bcf55.firebasestorage.app",
    messagingSenderId: "85763382483",
    appId: "1:85763382483:web:896bc2b438859de5b5c826",
    measurementId: "G-RMB37BKCJ0"
  });
} else {
  app = getApp();
}

// Hanya jalankan getAnalytics kalau sedang di browser
if (typeof window !== "undefined") {
  const { getAnalytics } = await import("firebase/analytics");
  analytics = getAnalytics(app);
}

const firestore = getFirestore(app);
const db = getFirestore(app);

export { firestore, db, app, analytics };
