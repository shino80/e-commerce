// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCG3uu_69DueoWYpzhw7z18UmJTa46khA4",
  authDomain: "shopgoraku.firebaseapp.com",
  projectId: "shopgoraku",
  storageBucket: "shopgoraku.appspot.com",
  messagingSenderId: "1094812902043",
  appId: "1:1094812902043:web:09c626a021f2c276a31c3e",
  measurementId: "G-3BX9V6MJTE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
