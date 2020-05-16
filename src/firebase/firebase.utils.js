import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDM0jSi3sG8vhusi4gsycml7bJMQbxsCQc",
  authDomain: "crwn-db-d471e.firebaseapp.com",
  databaseURL: "https://crwn-db-d471e.firebaseio.com",
  projectId: "crwn-db-d471e",
  storageBucket: "crwn-db-d471e.appspot.com",
  messagingSenderId: "969473870214",
  appId: "1:969473870214:web:7d42922d07db30e2b08407",
  measurementId: "G-1E7D9BJT4G",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;