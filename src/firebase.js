import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyCcEu0JfhLvRTv2BhAOW8j8rtoMsJUk2WM",
  authDomain: "disneyplus-clone-32ef2.firebaseapp.com",
  projectId: "disneyplus-clone-32ef2",
  storageBucket: "disneyplus-clone-32ef2.appspot.com",
  messagingSenderId: "907618044336",
  appId: "1:907618044336:web:1bb700449db7ab34bcee75",
  measurementId: "G-J3Y5K82PED",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
// instance auth instance for user authentication
const auth = getAuth(firebaseApp);
// social Google authentication provider for signing in with  google
const provider = new GoogleAuthProvider();
const storage = getStorage(firebaseApp);

export { auth, provider, storage, db };
export default firebaseApp;
