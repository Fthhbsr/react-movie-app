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

// TODO: Replace the following with your app's Firebase project configuration at project settings part
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
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

export const createUser = async (email, password, navigate) => {
  try {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    //setIsLoggedIn(user);
    toast.success("Succesfully Registered");
    navigate("/");
    console.log(user);
  } catch (error) {
    // toast.error(error);
    console.log(error);
    navigate("/register");
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

// const showError = (error) => {
//   console.log(error);
//   toast.error(error);
// };

export const signIn = async (email, password, navigate) => {
  try {
    const user = await signInWithEmailAndPassword(auth, email, password);
    //console.log(user);
    toast.success("Succesfully Logged In");
    navigate("/");
    // console.log(user.userCredential.user);
    console.log(user);
  } catch (err) {
    console.log(err);
    navigate("/login");
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
export const userInfoChanged = (setCurrentUser) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setCurrentUser(user);
      console.log(user.displayName);
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
    } else {
      setCurrentUser(false);
      // User is signed out
    }
  });
};

// Use this method to Authenticate Using Google with Popup :

const provider = new GoogleAuthProvider();

export const signInWithGoogle = async (navigate) => {
  try {
    const user = await signInWithPopup(auth, provider);
    console.log(user);
    //setIsLoggedIn(user);
    toast.success("Succesfully Logged In");
    navigate("/");
  } catch (error) {
    console.log(error);
    toast.error(error);
  }
  console.log(auth);
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
    toast.success(" Succesfully Logged Out");
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
