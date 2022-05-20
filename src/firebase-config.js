import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCmMZFvASJ1YnPcdAN8Kk49AbvDay03plE",
  authDomain: "triples-quiz.firebaseapp.com",
  projectId: "triples-quiz",
  storageBucket: "triples-quiz.appspot.com",
  messagingSenderId: "602475892240",
  appId: "1:602475892240:web:91aa89abc881ddf0d2c495",
  measurementId: "G-V07M8W89Q8",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
const analytics = getAnalytics(app);
