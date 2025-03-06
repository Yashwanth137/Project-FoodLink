import firebase from "firebase/app";
import "firebase/firestore"; // Firestore support
import "firebase/auth"; // Optional: Authentication support
import "firebase/storage"; // Optional: Storage support

// Firebase Configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
};

// Initialize Firebase only if it hasn't been initialized already
const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

// Firebase Services
export const db = app.firestore(); // Firestore database
export const auth = app.auth(); // Authentication
export const storage = app.storage(); // Storage

export default app;
