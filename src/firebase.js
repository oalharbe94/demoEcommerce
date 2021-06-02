import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDsjohFCvGZHXCvDztykiVB-6M3mL-hLME",
    authDomain: "alharbe-28fbf.firebaseapp.com",
    projectId: "alharbe-28fbf",
    storageBucket: "alharbe-28fbf.appspot.com",
    messagingSenderId: "636632780686",
    appId: "1:636632780686:web:83d673118597c179e05edf",
    measurementId: "G-7NBS76KG5W"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };