import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBLsNn6y_vaz3b1SUE71RzKcpejdaw8_rY",
  authDomain: "freshsocksv2.firebaseapp.com",
  projectId: "freshsocksv2",
  storageBucket: "freshsocksv2.appspot.com",
  messagingSenderId: "308793955598",
  appId: "1:308793955598:web:8973c15d592d18051cf35f",
  measurementId: "G-54M6CTGQ28",
};

const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
