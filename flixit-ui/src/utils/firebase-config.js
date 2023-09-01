// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCgSH06MnsPmXv22IsS3aKkgiuvYA_eDqY",
  authDomain: "flixit-netflix-clone.firebaseapp.com",
  projectId: "flixit-netflix-clone",
  storageBucket: "flixit-netflix-clone.appspot.com",
  messagingSenderId: "207040154564",
  appId: "1:207040154564:web:7cee46f47478fee53b7291",
  measurementId: "G-NJD9K1PEZZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
