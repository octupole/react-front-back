// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDax6u8hC9jgAWVr1TbH4lTqzHYCaDkuKA",
  authDomain: "hose-marketplace-app-74861.firebaseapp.com",
  projectId: "hose-marketplace-app-74861",
  storageBucket: "hose-marketplace-app-74861.appspot.com",
  messagingSenderId: "764252480889",
  appId: "1:764252480889:web:81b93c0340e4687bc0fba8"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore(); 
