// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "insta-next-425620.firebaseapp.com",
  projectId: "insta-next-425620",
  storageBucket: "insta-next-425620.appspot.com",
  messagingSenderId: "1086898222838",
  appId: "1:1086898222838:web:2427de3acbff20aa531ed7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);