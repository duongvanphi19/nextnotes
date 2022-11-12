// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
//import {getAnalytics} from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
import {getAuth} from 'firebase/auth'
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNoTehG-3E4yIttTsP0WlK1a1SHrigo58",
  authDomain: "nextnote-a82bf.firebaseapp.com",
  projectId: "nextnote-a82bf",
  storageBucket: "nextnote-a82bf.appspot.com",
  messagingSenderId: "81362602611",
  appId: "1:81362602611:web:dfa7f083bb77a4566fb806",
  measurementId: "G-D43GNR85PQ"
};// Initialize Firebase
const app = initializeApp(firebaseConfig)
//const analytics = getAnalytics(app);
const auth = getAuth()
const firestore = getFirestore(app)
const storage = getStorage(app)
export default firebaseConfig
export {app, auth, firestore, storage}
