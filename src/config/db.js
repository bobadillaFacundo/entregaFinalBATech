import 'dotenv/config'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: "api-rest-node-js-data-fb",
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: "579715228534",
  appId: process.env.FIREBASE_APP_ID,
  measurementId: "G-SX7KF0MZNL"
} 


// Initialize Firebase 
  const app = initializeApp(firebaseConfig)  
 
  // Initialize Firestore 
  const db = getFirestore(app)  
 
  export { db }  