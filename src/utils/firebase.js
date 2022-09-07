// Your web app's Firebase configuration
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCaNLWpjPmhvSjHIuKAZ7o3tmXIp56MtPU",
    authDomain: "clone-7cb23.firebaseapp.com",
    projectId: "clone-7cb23",
    storageBucket: "clone-7cb23.appspot.com",
    messagingSenderId: "383578233116",
    appId: "1:383578233116:web:0b56189c8fb9f3b00702d9"
};


const firebaseApp = initializeApp(firebaseConfig);


const auth = getAuth(firebaseApp);
const db = getDatabase(firebaseApp);

export {auth,db};