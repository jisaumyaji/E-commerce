// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0b9Acwmy4_D9BHN-gMvqHvTXYPLdryXc",
  authDomain: "ecomerse-40d31.firebaseapp.com",
  databaseURL: "https://ecomerse-40d31-default-rtdb.firebaseio.com",
  projectId: "ecomerse-40d31",
  storageBucket: "ecomerse-40d31.appspot.com",
  messagingSenderId: "224352035360",
  appId: "1:224352035360:web:840127a6a384e19d949245",
  measurementId: "G-STLT8MRKBY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth}