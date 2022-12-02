// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider,signInWithPopup} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyDwvpwB6QmnK2XddKDcv4g-RODg8_tisSc",
  authDomain: "xhiphant-auth.firebaseapp.com",
  projectId: "xhiphant-auth",
  storageBucket: "xhiphant-auth.appspot.com",
  messagingSenderId: "969360738622",
  appId: "1:969360738622:web:22f28a0c2d85f8c3d0c46f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const Auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInwithGoogle = async() => {
  try {
  const data = await signInWithPopup(Auth,provider);
  if (data) {
    localStorage.setItem("name",data.user.displayName);
    localStorage.setItem("email",data.user.email);
    localStorage.setItem("image",data.user.photoURL)
    window.dispatchEvent(new Event("storage"));
  }
}
catch(e) {
  console.log(e);
}
}