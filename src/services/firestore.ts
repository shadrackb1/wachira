import { db } from "../lib/firebase";
import {
  collection,
  doc,
  getDocs,
  getDoc,
  setDoc,
  updateDoc,
  deleteDoc,
  onSnapshot,
  query,
  where,
  addDoc,
  DocumentData,
  QuerySnapshot,
} from "firebase/firestore";

// Generic function to get all documents from a collection
export const getCollection = async (collectionName: string) => {
  const querySnapshot = await getDocs(collection(db, collectionName));
  return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

// Generic function to get a single document by ID
export const getDocument = async (collectionName: string, id: string) => {
  const docRef = doc(db, collectionName, id);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() };
  } else {
    return null;
  }
};

// Generic function to add a document to a collection
export const addDocument = async (collectionName: string, data: any) => {
  try {
    const docRef = await addDoc(collection(db, collectionName), data);
    return docRef.id;
  } catch (e) {
    console.error("Error adding document: ", e);
    throw e;
  }
};

// Generic function to set a document (create or overwrite) with a specific ID
export const setDocument = async (collectionName: string, id: string, data: any) => {
  try {
    await setDoc(doc(db, collectionName, id), data, { merge: true });
  } catch (e) {
    console.error("Error setting document: ", e);
    throw e;
  }
};

// Generic function to update a document
export const updateDocument = async (collectionName: string, id: string, data: any) => {
  try {
    const docRef = doc(db, collectionName, id);
    await updateDoc(docRef, data);
  } catch (e) {
    console.error("Error updating document: ", e);
    throw e;
  }
};

// Generic function to delete a document
export const deleteDocument = async (collectionName: string, id: string) => {
  try {
    await deleteDoc(doc(db, collectionName, id));
  } catch (e) {
    console.error("Error deleting document: ", e);
    throw e;
  }
};

// Real-time listener for a collection
export const subscribeToCollection = (
  collectionName: string,
  callback: (data: any[]) => void
) => {
  const q = query(collection(db, collectionName));
  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    callback(data);
  });
  return unsubscribe;
};

// Real-time listener for a single document
export const subscribeToDocument = (
  collectionName: string,
  id: string,
  callback: (data: any) => void
) => {
  const unsubscribe = onSnapshot(doc(db, collectionName, id), (doc) => {
    if (doc.exists()) {
      callback({ id: doc.id, ...doc.data() });
    } else {
      callback(null);
    }
  });
  return unsubscribe;
};
