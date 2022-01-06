import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBI8kRzp_jqDa9bl4TekP9XKCHSMdp6lEo",
  authDomain: "vue-firebase-bcc0a.firebaseapp.com",
  projectId: "vue-firebase-bcc0a",
  storageBucket: "vue-firebase-bcc0a.appspot.com",
  messagingSenderId: "713309968834",
  appId: "1:713309968834:web:16554b14958ee252445e5b",
};

// Inii firebase
initializeApp(firebaseConfig);

// init firebase auth
const auth = getAuth();

export { auth };
