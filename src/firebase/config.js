import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDUWFBrKgmQ7auxmoMgGfTRSgjoFBDbKDY",
  authDomain: "dojo-site-server.firebaseapp.com",
  databaseURL:
    "https://dojo-site-server-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "dojo-site-server",
  storageBucket: "dojo-site-server.appspot.com",
  messagingSenderId: "44290051281",
  appId: "1:44290051281:web:532a012bd906ac273689f0",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp, projectStorage };
