import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5C_sUhe9SioAcxmDiG4U2gWQXMaxzO7k",
  authDomain: "carbon-footprint-tracker-f43a6.firebaseapp.com",
  projectId: "carbon-footprint-tracker-f43a6",
  storageBucket: "carbon-footprint-tracker-f43a6.appspot.com", //corrected
  messagingSenderId: "133634040021",
  appId: "1:133634040021:web:b86efa6b3702f252c2425c",
  measurementId: "G-4Q7WH7L1HZ"
};

// Initialize only once
const app = initializeApp(firebaseConfig);

// Optional: Only use this if you're running in browser
const analytics = getAnalytics(app);

//Initialize auth
const auth = getAuth(app);

// Export
export { auth };
export default app;
