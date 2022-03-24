// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";

import "firebase/compat/analytics";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASsPGA5sVzMM4Iy2kL9Kp_mZsLwPgGQbE",
  authDomain: "fir-test-7911a.firebaseapp.com",
  projectId: "fir-test-7911a",
  storageBucket: "fir-test-7911a.appspot.com",
  messagingSenderId: "538588731819",
  appId: "1:538588731819:web:0ada0d85a9e335b59ddaee",
  measurementId: "G-LMXVF9625D",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();

auth.useEmulator("http://localhost:9099");

if (window.location.hostname === "localhost") {
  db.useEmulator("localhost", "8080");
}

export { db, auth };

export default firebase;
