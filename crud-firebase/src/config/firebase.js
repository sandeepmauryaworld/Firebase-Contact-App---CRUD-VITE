// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/fireStore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMvp9SgK6Zf2F4sVk2GWPyVIvKh6qBpfU",
  authDomain: "vite-contact-62587.firebaseapp.com",
  projectId: "vite-contact-62587",
  storageBucket: "vite-contact-62587.appspot.com",
  messagingSenderId: "340657480620",
  appId: "1:340657480620:web:b3abc3428d955a3b75d009",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
