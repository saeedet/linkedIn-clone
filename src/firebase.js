import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0rzv_FRyqlgMwmGmSZpWB8PslDFdR_44",
  authDomain: "linkedin-clone-a836b.firebaseapp.com",
  projectId: "linkedin-clone-a836b",
  storageBucket: "linkedin-clone-a836b.appspot.com",
  messagingSenderId: "462294488030",
  appId: "1:462294488030:web:753635917d9c533b25434f",
  measurementId: "G-CFVZ1FDLBR",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
