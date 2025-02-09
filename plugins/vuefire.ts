import { defineNuxtPlugin } from "#app";
import { VueFire } from "vuefire";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBmWs9kLOoJKp19S9l8JLzRmGAPRdVFlBc",
  authDomain: "aplus-8483e.firebaseapp.com",
  projectId: "aplus-8483e",
  storageBucket: "aplus-8483e.firebasestorage.app",
  messagingSenderId: "125508515244",
  appId: "1:125508515244:web:051f076e214dc16a417609",
  measurementId: "G-LXZPT0PR3G"
};

export default defineNuxtPlugin((nuxtApp) => {
  const app = initializeApp(firebaseConfig);
  nuxtApp.vueApp.use(VueFire, { firebaseApp: app });

  return { provide: { storage: getStorage(app) } };
});
