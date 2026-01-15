// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCB_PEBxJHMnMizr6p6ivOJ-p0hiF80lfI",
  authDomain: "authentication-1fc61.firebaseapp.com",
  projectId: "authentication-1fc61",
  storageBucket: "authentication-1fc61.firebasestorage.app",
  messagingSenderId: "719845277264",
  appId: "1:719845277264:web:185ae0708e36dbac551b55"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);