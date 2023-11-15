import { initializeApp } from "firebase/app";
// import { getFirestore } from "@Firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";

// import firebase from 'firebase/compat/app';
// import * as firebaseui from 'firebaseui'
// import 'firebaseui/dist/firebaseui.css'

const firebaseConfig = {};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Export Firestore
export const firestore = getFirestore(app);
