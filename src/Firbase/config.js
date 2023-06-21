import firebase from "firebase";
import "firebase/auth";
import "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8KFFlU7rCOPitIu4qIXsfRY8JUgt7GmU",
  authDomain: "olx-project-3e6dd.firebaseapp.com",
  projectId: "olx-project-3e6dd",
  storageBucket: "olx-project-3e6dd.appspot.com",
  messagingSenderId: "329391498748",
  appId: "1:329391498748:web:fa5af4fbc2b832ecd67e79",
  measurementId: "G-NRJD9XZDZS",
};

//export const Firebase = firebase.initializeApp(firebaseConfig);
export default firebase.initializeApp(firebaseConfig);
