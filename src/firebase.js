// Import the functions you need from the SDKs you need

import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import "firebase/compat/storage"


// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyAaQ4sF4Sx8leQdKuKRnDnPd5qZw81llNA",

  authDomain: "disneyplus-clone-f554f.firebaseapp.com",

  projectId: "disneyplus-clone-f554f",

  storageBucket: "disneyplus-clone-f554f.appspot.com",

  messagingSenderId: "917977969560",

  appId: "1:917977969560:web:cfa82e40d4e1cc43b0f1ed",
// eslint-disable-next-line
  measurementId: "${config.measurementId}"

};


// Initialize Firebase

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebaseApp.storage();

export  { auth, provider, storage};
export default db;