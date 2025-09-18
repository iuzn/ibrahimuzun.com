// Firebase exports
export { app, analytics } from "./firebase";

// Re-export common Firebase functions for easy access
export {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

export {
  getFirestore,
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
  deleteDoc,
  onSnapshot,
} from "firebase/firestore";

export { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
