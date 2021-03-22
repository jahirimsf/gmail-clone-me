import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCWtuQqFKNT9gASt4WEdq4V_BNukmnjQNk",
  authDomain: "clone-cp-7abf0.firebaseapp.com",
  projectId: "clone-cp-7abf0",
  storageBucket: "clone-cp-7abf0.appspot.com",
  messagingSenderId: "166215075138",
  appId: "1:166215075138:web:cbf16b5f4cd5f6db2e34db",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
