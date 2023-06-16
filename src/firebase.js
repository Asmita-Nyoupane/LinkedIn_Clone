import {initializeApp} from'firebase/app';
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from 'firebase/firestore/lite';
const firebaseConfig = {
    apiKey: "AIzaSyClJ3fFJnXFGe3L5vKI01Ny1lV3Nb9RY5M",
    authDomain: "linkedin-clone-4f905.firebaseapp.com",
    projectId: "linkedin-clone-4f905",
    storageBucket: "linkedin-clone-4f905.appspot.com",
    messagingSenderId: "826270065610",
    appId: "1:826270065610:web:ed8adc410a7b6430fd6533",
    measurementId: "G-C9MH2MMPSS"
  };
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const storage = getStorage(app);
  export{auth,provider,storage};
  export default db;