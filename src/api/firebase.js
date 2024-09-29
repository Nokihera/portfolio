// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1m6f6AU4UDiQGbLnkkLJOD5b2Cc2CvOE",
  authDomain: "portfolio-52a74.firebaseapp.com",
  projectId: "portfolio-52a74",
  storageBucket: "portfolio-52a74.appspot.com",
  messagingSenderId: "919677650444",
  appId: "1:919677650444:web:e5078bdcb225a175419029",
  measurementId: "G-M3MPDN5J1P"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const analytics = getAnalytics(app);