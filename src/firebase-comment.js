import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { collection, addDoc } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCftRnSkXznh1BN2z6ZB1Nt9I2F1F3trDE",
  authDomain: "asshad-portfolio.firebaseapp.com",
  projectId: "asshad-portfolio",
  storageBucket: "asshad-portfolio.firebasestorage.app",
  messagingSenderId: "44664734989",
  appId: "1:44664734989:web:38a6f598e2b008c3f29c44",
  measurementId: "G-T8TGP1134Y"
};

// Initialize with a unique name
const app = initializeApp(firebaseConfig, 'comments-app');
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage, collection, addDoc };