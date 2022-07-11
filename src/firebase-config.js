// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider}from 'firebase/auth'
import {getFirestore}from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyAeNOwAVVhUdF1RZRJa1XNEa8H6HQMy3S8",
  authDomain: "react-blogs-app-b2eb4.firebaseapp.com",
  projectId: "react-blogs-app-b2eb4",
  storageBucket: "react-blogs-app-b2eb4.appspot.com",
  messagingSenderId: "134924867724",
  appId: "1:134924867724:web:39b0a24398446177fb43a9",
  measurementId: "G-010JMTNEE6"
};

// const firebaseConfig = {
//   apiKey: "AIzaSyDI0bEw49GEEI8AVk0indN6EeafP_ytoyw",
//   authDomain: "final-blogs-22e8a.firebaseapp.com",
//   projectId: "final-blogs-22e8a",
//   storageBucket: "final-blogs-22e8a.appspot.com",
//   messagingSenderId: "43934159625",
//   appId: "1:43934159625:web:08b832c27c8345132639d8"
// };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db= getFirestore(app);
export const auth=getAuth(app);
export const provider=new GoogleAuthProvider();
