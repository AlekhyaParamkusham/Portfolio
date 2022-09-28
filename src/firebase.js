import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAkroE2MFG3PBUbY4seVfTAwli3gtAc8DM",
  authDomain: "portfolio-e9a60.firebaseapp.com",
  projectId: "portfolio-e9a60",
  storageBucket: "portfolio-e9a60.appspot.com",
  messagingSenderId: "863668303140",
  appId: "1:863668303140:web:61a57e7199efb3c3d62fb1",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
