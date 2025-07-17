// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBr48Dj-hs7h_6tsjDxExhHlhpYK8BQQvk",
  authDomain: "icy-tales.firebaseapp.com",
  projectId: "icy-tales",
  storageBucket: "icy-tales.firebasestorage.app",
  messagingSenderId: "1071593318077",
  appId: "1:1071593318077:web:bd4c1e10192378a06f79d4",
  measurementId: "G-2R8Y6FK4L7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth=getAuth(app);
const db=getFirestore(app);
export {auth,db};