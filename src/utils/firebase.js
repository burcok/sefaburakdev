
const firebaseConfig = {
    apiKey: "AIzaSyCbRMnVKnEkPK936lMvYmJsg7d0HZyjLoo",
    authDomain: "sefaburakdev-75289.firebaseapp.com",
    projectId: "sefaburakdev-75289",
    storageBucket: "sefaburakdev-75289.appspot.com",
    messagingSenderId: "718139354933",
    appId: "1:718139354933:web:2f50f50a52d2219ba4267c",
    measurementId: "G-JJZ38QMRK9"
  };
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default analytics