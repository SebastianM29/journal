// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import {getFirestore} from 'firebase/firestore/lite'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAD95fuwr2GRrxUCLaNo2twCWg_bhEm1o0",
  authDomain: "react-cursos-8c9d1.firebaseapp.com",
  projectId: "react-cursos-8c9d1",
  storageBucket: "react-cursos-8c9d1.appspot.com",
  messagingSenderId: "778630709837",
  appId: "1:778630709837:web:2a69f407363bd6bc3f1204"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(firebaseApp);
export const firestoreDB = getFirestore(firebaseApp);