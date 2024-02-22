// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-authentication-499e8.firebaseapp.com",
  projectId: "mern-authentication-499e8",
  storageBucket: "mern-authentication-499e8.appspot.com",
  messagingSenderId: "831594975640",
  appId: "1:831594975640:web:5535a7c7608e5741ea1bed",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
