import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAJ9jraHj4OTY3GMjsGBY17F7CctekH7e0",
  authDomain: "slack-clone-46a89.firebaseapp.com",
  projectId: "slack-clone-46a89",
  storageBucket: "slack-clone-46a89.appspot.com",
  messagingSenderId: "370002400557",
  appId: "1:370002400557:web:cb915261241ca43de36fa4",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const firebaseTime = firebase.firestore.FieldValue.serverTimestamp();

export { db, auth, provider, firebaseTime };
