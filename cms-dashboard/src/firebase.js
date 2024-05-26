// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHJrZvx7lVGjJlGUAUyLhpquntLjZI6Pw",
  authDomain: "polaris-71cc0.firebaseapp.com",
  projectId: "polaris-71cc0",
  storageBucket: "polaris-71cc0.appspot.com",
  messagingSenderId: "184377718354",
  appId: "1:184377718354:web:822ef20b21b3ac014a118b",
  measurementId: "G-BWD16T8TB9"
};
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };

// Jika Anda menggunakan auth, pastikan untuk mengimpor dan menginisialisasinya dengan benar
import 'firebase/auth';

const auth = firebase.auth();

export { auth };