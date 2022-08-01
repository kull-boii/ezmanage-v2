import firebase from "firebase/app";

// firestore
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC0Y1jVs2HPQUuLkoDmolrpqD-FtUEFBiE",
  authDomain: "ezmanage-backend.firebaseapp.com",
  projectId: "ezmanage-backend",
  storageBucket: "ezmanage-backend.appspot.com",
  messagingSenderId: "65413969536",
  appId: "1:65413969536:web:8c3b7b519da174164dd865",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp };
