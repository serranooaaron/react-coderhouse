import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Configuración de tu proyecto Firebase
const firebaseConfig = {
  apiKey: "Api_KEY", // Reemplaza con API key
  authDomain: "bd-reactproyect.firebaseapp.com",
  projectId: "bd-reactproyect",
  storageBucket: "bd-reactproyect.appspot.com",
  messagingSenderId: "Messaging_Sender_ID", // Reemplaza con App ID
  appId: "App_ID", // Reemplaza con App ID
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Inicializar Firestore (base de datos)
export const db = getFirestore(app);
