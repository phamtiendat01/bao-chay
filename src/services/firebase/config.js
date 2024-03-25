import 'firebase/firestore'; // Import firestore if you need it
import 'firebase/auth'; // Import auth if you need it
import {initializeApp} from 'firebase/app'
import { getFirestore } from 'firebase/firestore/lite';
const firebaseConfig = {
    apiKey: "AIzaSyBuM7YJ5zvKL3jaaSjmepV46nc6cnFL3ok",
    authDomain: "dh12c3-hunre.firebaseapp.com",
    databaseURL: "https://dh12c3-hunre-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "dh12c3-hunre",
    storageBucket: "dh12c3-hunre.appspot.com",
    messagingSenderId: "1064141345369",
    appId: "1:1064141345369:web:21cf9eacec59bb638c1748",
    measurementId: "G-W8FDH9TSM0"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);
