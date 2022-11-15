import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// configuration linking app to firebase database

const firebaseConfig = {
  apiKey: "AIzaSyCw0M8QqDXSKSbJNIqRt1D32_mDwmZ_fTM",
  authDomain: "witsinsta-f21ed.firebaseapp.com",
  projectId: "witsinsta-f21ed",
  storageBucket: "witsinsta-f21ed.appspot.com",
  messagingSenderId: "249069170074",
  appId: "1:249069170074:web:7dcae49bee64d752d2de23"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { firestore, auth, storage};
