import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7Nf_nlcLZ6juwwcbG5bFwX-aDSPlKXyw",
  authDomain: "data-53d5f.firebaseapp.com",
  projectId: "data-53d5f",
  storageBucket: "data-53d5f.appspot.com",
  messagingSenderId: "603441415876",
  appId: "1:603441415876:web:3b10e5ce69c0971657ab91",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
