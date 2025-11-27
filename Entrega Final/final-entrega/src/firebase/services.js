// Funciones útiles para trabajar con Firebase Firestore
// Importa estas funciones en tus componentes

import {
  collection,
  getDocs,
  doc,
  getDoc,
} from "firebase/firestore";
import { db } from "./config";

// Nombre de la colección en Firestore
const PRODUCTS_COLLECTION = "products";

export async function obtenerProductos() {
  const querySnapshot = await getDocs(collection(db, PRODUCTS_COLLECTION));
  const productos = [];

  querySnapshot.forEach((doc) => {
    productos.push({
      id: doc.id,
      ...doc.data(),
    });
  });

  return productos;
}


export async function obtenerProductoPorId(productId) {
  const docRef = doc(db, PRODUCTS_COLLECTION, productId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return {
      id: docSnap.id,
      ...docSnap.data(),
    };
  } else {
    return null;
  }
}