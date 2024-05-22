// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDV1T19KGxiCi3DkRCJy--x4cdcg7Nf3wE",
    authDomain: "ema-john-shopping-35d87.firebaseapp.com",
    projectId: "ema-john-shopping-35d87",
    storageBucket: "ema-john-shopping-35d87.appspot.com",
    messagingSenderId: "1076360045936",
    appId: "1:1076360045936:web:02d586fba0a519a5219bb5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;