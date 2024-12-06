// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4ZvoX9zLA4S1iCqNR2p1GRR2rY_WX37s",
  authDomain: "moviepedia-n0911.firebaseapp.com",
  projectId: "moviepedia-n0911",
  storageBucket: "moviepedia-n0911.firebasestorage.app",
  messagingSenderId: "484665981677",
  appId: "1:484665981677:web:588745f20af5469fc76ae4",
  measurementId: "G-ZCLX2YDP7Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// import auth at the global space 
export const auth = getAuth();