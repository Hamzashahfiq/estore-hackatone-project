import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAzc23YH0z90nVgm7WK6lUamRVK1EeM0Co",
    authDomain: "e-store-b5a40.firebaseapp.com",
    projectId: "e-store-b5a40",
    storageBucket: "e-store-b5a40.appspot.com",
    messagingSenderId: "592049624726",
    appId: "1:592049624726:web:fe353ee7bc5194420854b7"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
export const db = firebase.firestore();
export const auth = firebase.auth();