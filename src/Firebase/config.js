import * as firebase from "firebase";
import "firebase/storage";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyDgnhOy1-cvN8WMOpw8i5fRHxLqV1MrPuE",
  authDomain: "ninja-firegram-706f5.firebaseapp.com",
  databaseURL: "https://ninja-firegram-706f5.firebaseio.com",
  projectId: "ninja-firegram-706f5",
  storageBucket: "ninja-firegram-706f5.appspot.com",
  messagingSenderId: "854401908944",
  appId: "1:854401908944:web:bd70755c4d410dd71e9ed5",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectStorage, timestamp };
