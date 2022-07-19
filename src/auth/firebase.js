// Add the Firebase Authentication JS codes in your firebase.js file and initialize Firebase Authentication:

import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { toast } from "react-hot-toast";
//import { useMovieContext } from "../context/MovieContextProvider";

//const { isLoggedIn, setIsLoggedIn } = useMovieContext();

// TODO: Replace the following with your app's Firebase project configuration at project settings part
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  // apiKey: "AIzaSyCDZ01XeIhRqNgnCYLe6yiHMGHGMMnsG1o",
  // authDomain: "react-movie-app-e2f7b.firebaseapp.com",
  // projectId: "react-movie-app-e2f7b",
  // storageBucket: "react-movie-app-e2f7b.appspot.com",
  // messagingSenderId: "392799554417",
  // appId: "1:392799554417:web:11e565bac96f484603c4d0",

  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Use this method to Sign up new users :

export const createUser = async (email, password, setIsLoggedIn) => {
  try {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    setIsLoggedIn(user);

    console.log(user);
  } catch (error) {
    toast.error(error);
    console.log(error);
  }
};
// createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in
//     const user = userCredential.user;
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//   Use this method to Sign in existing users :

export const signIn = async (email, password, setIsLoggedIn) => {
  try {
    const user = await signInWithEmailAndPassword(auth, email, password);
    setIsLoggedIn(user);

    // console.log(user.userCredential.user);
    // console.log(auth);
  } catch (error) {
    toast.error(error);
    console.log(error);
  }
};

// signInWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in
//     const user = userCredential.user;
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//   Use this method to Set an authentication state observer and get user data :

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
  } else {
    // User is signed out
  }
});

// Use this method to Authenticate Using Google with Popup :

const provider = new GoogleAuthProvider();

export const signInWithGoogle = async (setIsLoggedIn) => {
  try {
    const user = await signInWithPopup(auth, provider);
    console.log(user);
    setIsLoggedIn(user);
  } catch (error) {
    console.log(error);
    toast.error(error);
  }
};

// signInWithPopup(auth, provider)
//   .then((result) => {
//     // The signed-in user info.
//     const user = result.user;
//     console.log(user);
//   })
//   .catch((error) => {
//     // Handle Errors here.
//     console.log(error);
//   });

//   Use this method to Sign Out :
export const logOut = async (setIsLoggedIn) => {
  try {
    await signOut(auth);
    setIsLoggedIn(false);
    toast.success("LOGGED OUT");
  } catch (error) {
    console.log(error);
    toast.error(error);
  }
};
// signOut(auth)
//   .then(() => {
//     // Sign-out successful.
//   })
//   .catch((error) => {
//     // An error happened.
//   });
