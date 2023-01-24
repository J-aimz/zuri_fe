import { getAnalytics } from "firebase/analytics";

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCtFQMcyxkFp-89dMCAwED_JiYBOnVuinE",
  authDomain: "whats-app-clone-30001.firebaseapp.com",
  projectId: "whats-app-clone-30001",
  storageBucket: "whats-app-clone-30001.appspot.com",
  messagingSenderId: "39410867704",
  appId: "1:39410867704:web:3d04a54fc83ba310394a0d",
  measurementId: "G-F5LPQD5QTK"
};

export const app = initializeApp(firebaseConfig);
const db = getFirestore(app);



// const auth = firebase.auth()
export default db