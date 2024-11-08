// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8qWw0HBZUDqqVjA2RFLU5dTppNx1zHnI",
  authDomain: "practice-restart-react.firebaseapp.com",
  projectId: "practice-restart-react",
  storageBucket: "practice-restart-react.firebasestorage.app",
  messagingSenderId: "23159104807",
  appId: "1:23159104807:web:740780a1d9700651acf502",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
