import firebaseConfig from "./firebase.config";
import { initializeApp } from "firebase/app";

const initializeFirebase = () => {
    initializeApp(firebaseConfig);
}

export default initializeFirebase;