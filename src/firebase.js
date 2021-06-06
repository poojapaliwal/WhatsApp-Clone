import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAnx_IIn2aR8z_kAnAu7HXvj75ypnrAWFo",
    authDomain: "whatsapp-clone-8dd2c.firebaseapp.com",
    projectId: "whatsapp-clone-8dd2c",
    storageBucket: "whatsapp-clone-8dd2c.appspot.com",
    messagingSenderId: "437767897533",
    appId: "1:437767897533:web:a982039022393782b1d2d4",
    measurementId: "G-ZLQ38BEL41"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;