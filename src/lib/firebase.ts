import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyI0_pL67CCHrzsSAJDlciKzAdF8pvqRg",
  authDomain: "wachira-wekhomba.firebaseapp.com",
  projectId: "wachira-wekhomba",
  storageBucket: "wachira-wekhomba.firebasestorage.app",
  messagingSenderId: "859934071971",
  appId: "1:859934071971:web:99268e66dd2d3416263316",
  measurementId: "G-XQ57SJ96VY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { app, analytics, db, storage, auth };
