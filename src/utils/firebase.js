// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-app-c29f2.firebaseapp.com",
  projectId: "blog-app-c29f2",
  storageBucket: "blog-app-c29f2.appspot.com",
  messagingSenderId: "535220594154",
  appId: "1:535220594154:web:0a097f97fdc8e8a510fe93"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);