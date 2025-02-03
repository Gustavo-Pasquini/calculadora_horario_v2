// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
//import dotenv from 'dotenv'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC70tn1M08W6TSHahhfTIuPBw-lUUtj-EU", //process.env.REACT_APP_API_KEY,
  authDomain: "calculadora-horarios-v2.firebaseapp.com", //process.env.REACT_APP_AUTH_DOMAIN,
  projectId: "calculadora-horarios-v2", //process.env.REACT_APP_PROJECT_ID,
  storageBucket: "calculadora-horarios-v2.firebasestorage.app", //process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: "217559594958", //process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: "1:217559594958:web:9293409f4f344a7201dd9f", //process.env.REACT_APP_APP_ID,
  measurementId: "G-Y5XBNRSB4Z" //process.env.REACT_APP_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();

// Initialize Cloude Firestore
export const db = getFirestore(app);