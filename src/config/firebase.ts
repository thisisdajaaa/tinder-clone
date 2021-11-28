// Import the functions you need from the SDKs you need
import { FirebaseApp, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfF4nEN8UVPmNGGJpwPSJkhkOBc8nWGAc",
  authDomain: "tinder-clone-d0eef.firebaseapp.com",
  projectId: "tinder-clone-d0eef",
  storageBucket: "tinder-clone-d0eef.appspot.com",
  messagingSenderId: "451559533969",
  appId: "1:451559533969:web:c57e4b94c60794ea343e30",
};

// Initialize Firebase
const app: FirebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore();

export { auth, db };
