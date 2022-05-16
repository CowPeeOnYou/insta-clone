// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import {getFireStore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2_DkQNs590I2VOUEYhtk4v_2p732IV8c",
  authDomain: "insta-app-85137.firebaseapp.com",
  projectId: "insta-app-85137",
  storageBucket: "insta-app-85137.appspot.com",
  messagingSenderId: "54521935368",
  appId: "1:54521935368:web:576df94356abd06d4bc3bd",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFireStore();
const storage = getStorage();

export {app, db, storage}