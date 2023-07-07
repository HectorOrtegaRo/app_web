// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.HECTOR_API_KEY,
  authDomain: process.env.HECTOR_AUTH_DOMAIN,
  projectId: process.env.HECTOR_PROYECT_ID,
  storageBucket: process.env.HECTOR_STORAGE_BUCKET,
  messagingSenderId: process.env.HECTOR_MESSAGIN_SENDER_ID,
  appId: process.env.HECTOR_APP_ID
   
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);