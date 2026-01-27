// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDhmnRoSKZH6wLR5nYndooLQQn-77aZXFo",
    authDomain: "netflixgpt-361d4.firebaseapp.com",
    projectId: "netflixgpt-361d4",
    storageBucket: "netflixgpt-361d4.firebasestorage.app",
    messagingSenderId: "1047157358357",
    appId: "1:1047157358357:web:66586b9f7162c95247b31c",
    measurementId: "G-7G5F6P63ME"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);