import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAG3rBwB3K4n21ytutLkPILqBBHIKPc7xQ",
  authDomain: "pr-final-60060.firebaseapp.com",
  projectId: "pr-final-60060",
  storageBucket: "pr-final-60060.firebasestorage.app",
  messagingSenderId: "1071543241342",
  appId: "1:1071543241342:web:6a84999ec83ed064c7662f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export default db;
