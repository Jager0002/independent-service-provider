// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8syfAeuRTGIpuWlx4R3Ss0t0AOO11HP8",
  authDomain: "independent-service-prov-96779.firebaseapp.com",
  projectId: "independent-service-prov-96779",
  storageBucket: "independent-service-prov-96779.appspot.com",
  messagingSenderId: "490883036859",
  appId: "1:490883036859:web:479c46640a121601169b9e",
  measurementId: "G-97E3RCPBRT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export default auth;
