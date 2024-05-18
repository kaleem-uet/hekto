// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3diTIDPeclhhJm681qeki-M8fw-2aOGk",
  authDomain: "hekto-f6a23.firebaseapp.com",
  projectId: "hekto-f6a23",
  storageBucket: "hekto-f6a23.appspot.com",
  messagingSenderId: "1082899124020",
  appId: "1:1082899124020:web:cf14ecd77aaba773919f61",
  measurementId: "G-PW05RF1N96"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);