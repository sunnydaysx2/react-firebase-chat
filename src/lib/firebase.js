// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "react-firebase-chat-bf27f.firebaseapp.com",
  projectId: "react-firebase-chat-bf27f",
  storageBucket: "react-firebase-chat-bf27f.appspot.com",
  messagingSenderId: "358634960034",
  appId: "1:358634960034:web:f7a5615985c41acf8b93fb"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()