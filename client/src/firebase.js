// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration, replace it with your project keys
const firebaseConfig = {
  apiKey: "AIzaSyBqIgBYrOxFA20ByyRZ5QXtQmAHOXh2lvE",
  authDomain: "todo-20a29.firebaseapp.com",
  projectId: "todo-20a29",
  storageBucket: "todo-20a29.appspot.com",
  messagingSenderId: "684074448191",
  appId: "1:684074448191:web:19615cd6c5c9d87ee78f8a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);