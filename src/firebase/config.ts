
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import {getFirestore} from 'firebase/firestore/lite';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFTFjSNTjRlKPejjNXnx5QKMgQynDu7kQ",
  authDomain: "basket-app-46dd4.firebaseapp.com",
  projectId: "basket-app-46dd4",
  storageBucket: "basket-app-46dd4.appspot.com",
  messagingSenderId: "920123528766",
  appId: "1:920123528766:web:9bff9e6264d5efa35a636f"
};

// Initialize Firebase
export const FirebaseApp  = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB   = getFirestore(FirebaseApp);