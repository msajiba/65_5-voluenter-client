// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAiIMBZEj9j8g2rcUusqoZ1Tj_8yyifZIo",
  authDomain: "volunter-45f6f.firebaseapp.com",
  projectId: "volunter-45f6f",
  storageBucket: "volunter-45f6f.appspot.com",
  messagingSenderId: "832721357600",
  appId: "1:832721357600:web:27dee38a12963d2588e545"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;