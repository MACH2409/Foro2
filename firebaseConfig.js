// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5hOUg2z2VMRJmYUxfqT_Vjdd34YnusGc",
  authDomain: "dps-foro2-c49a5.firebaseapp.com",
  projectId: "dps-foro2-c49a5",
  storageBucket: "dps-foro2-c49a5.appspot.com",
  messagingSenderId: "774469294573",
  appId: "1:774469294573:web:5cd4312b1c4062d3d62fe4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// client ID: Android 602855319291-iu9khk9vc65t5psh3plpjivomb9c81kd.apps.googleusercontent.com

