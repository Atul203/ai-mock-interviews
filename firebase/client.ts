// firebase/client.ts
import { initializeApp, getApps } from "firebase/app";
import { getAuth ,GoogleAuthProvider} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAhFPiWptrAjL6t3Lho84ZTO7Tny6YRdm8",
  authDomain: "prepwise-ddd9e.firebaseapp.com",
  projectId: "prepwise-ddd9e",
  storageBucket: "prepwise-ddd9e.appspot.com", // Fix: corrected domain
  messagingSenderId: "667879207210",
  appId: "1:667879207210:web:feda4926d90f0f06882e53",
  measurementId: "G-01RN4Y9C03",
};

// Prevent reinitialization
const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();

export { app, auth, db };
