import { getAuth } from "firebase/auth"
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAAoeLXgZ8hEM2ilF8irNSw-ev-mD239DI",
  authDomain: "dblabclinico.firebaseapp.com",
  projectId: "dblabclinico",
  storageBucket: "dblabclinico.appspot.com",
  messagingSenderId: "928418919233",
  appId: "1:928418919233:web:d7316c087746b13756e7c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);