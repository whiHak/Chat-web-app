import { initializeApp } from "firebase/app";
import { apiKey } from "./config";
import { authDomain } from "./config";
import { projectId } from "./config";
import { storageBucket } from "./config";
import { messagingSenderId } from "./config";
import { appId } from "./config";
const firebaseConfig = {
  apiKey: apiKey,
  authDomain: authDomain,
  projectId: projectId,
  storageBucket: storageBucket,
  messagingSenderId: messagingSenderId,
  appId: appId
};


const app = initializeApp(firebaseConfig);