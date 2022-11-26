import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDTNVCdUiLNfvqN-kiTiBHaAlOIfjdka3o",
  authDomain: "mini-blog-ceec2.firebaseapp.com",
  projectId: "mini-blog-ceec2",
  storageBucket: "mini-blog-ceec2.appspot.com",
  messagingSenderId: "539280523216",
  appId: "1:539280523216:web:544d69745241c66bdd43d5",
};
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
