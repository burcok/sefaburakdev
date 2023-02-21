import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import store from './store'
import { MotionPlugin } from '@vueuse/motion'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbRMnVKnEkPK936lMvYmJsg7d0HZyjLoo",
  authDomain: "sefaburakdev-75289.firebaseapp.com",
  projectId: "sefaburakdev-75289",
  storageBucket: "sefaburakdev-75289.appspot.com",
  messagingSenderId: "718139354933",
  appId: "1:718139354933:web:2f50f50a52d2219ba4267c",
  measurementId: "G-JJZ38QMRK9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

createApp(App).use(router).use(store).use(MotionPlugin).mount('#app')
