// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVEgzrlcN95-FOqdpkpUVPUlT4t02tq6k",
  authDomain: "directory-b5c4a.firebaseapp.com",
  projectId: "directory-b5c4a",
  storageBucket: "directory-b5c4a.appspot.com",
  messagingSenderId: "988457679584",
  appId: "1:988457679584:web:96c2beac2caefe4f1aae85",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
