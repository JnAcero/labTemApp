// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChB8SAFKTAh7y4I6RdsW_RgdwDSJh1fEA",
  authDomain: "led1-a76d6.firebaseapp.com",
  databaseURL: "https://led1-a76d6-default-rtdb.firebaseio.com",
  projectId: "led1-a76d6",
  storageBucket: "led1-a76d6.appspot.com",
  messagingSenderId: "371682626728",
  appId: "1:371682626728:web:5f3cfcaf7d0f53c1d0869d",
  measurementId: "G-E6TGBG3B2X"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getDatabase(app)

