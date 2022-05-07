import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTRhC4f43b80utPWQpH8g-zoH4I_2nzFQ",
  authDomain: "blogsite-e5e61.firebaseapp.com",
  projectId: "blogsite-e5e61",
  storageBucket: "blogsite-e5e61.appspot.com",
  messagingSenderId: "977733327340",
  appId: "1:977733327340:web:f46c30137c4a9189f288c9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const authProvider = new GoogleAuthProvider();

export function signInWithGoogle(): void {
  signInWithPopup(auth, authProvider);
}

export function signOut(): void {
  auth.signOut();
}

export const storage = getStorage(app);
