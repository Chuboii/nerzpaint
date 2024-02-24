import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDzRttzI_GnbLRxUAK6Ve9VIS5u4JmdZxc",
  authDomain: "nerzpaints-98d28.firebaseapp.com",
  projectId: "nerzpaints-98d28",
  storageBucket: "nerzpaints-98d28.appspot.com",
  messagingSenderId: "796755486517",
  appId: "1:796755486517:web:e23a8475512d38955c4e7c",
  measurementId: "G-P2KQL79NFS"
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage()