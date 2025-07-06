// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5C_sUhe9SioAcxmDiG4U2gWQXMaxzO7k",
  authDomain: "carbon-footprint-tracker-f43a6.firebaseapp.com",
  projectId: "carbon-footprint-tracker-f43a6",
  storageBucket: "carbon-footprint-tracker-f43a6.firebasestorage.app",
  messagingSenderId: "133634040021",
  appId: "1:133634040021:web:b86efa6b3702f252c2425c",
  measurementId: "G-4Q7WH7L1HZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;