import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
  getRedirectResult,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB9Pf1C6CGuh6ZiqK2-QT5QrPqpK_ZN1HY",
  authDomain: "papucrafts.firebaseapp.com",
  databaseURL:
    "https://papucrafts-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "papucrafts",
  storageBucket: "papucrafts.appspot.com",
  messagingSenderId: "212728383296",
  appId: "1:212728383296:web:e295d26991621fd88f5ca5",
  measurementId: "G-18WKFQ6GLJ",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export app
// const provider = new GoogleAuthProvider();

// const registerUser = (email, password, username, nama_lengkap) => {
//   return createUserWithEmailAndPassword(auth, email, password)
//     .then((userCred) => {
//       const user = userCred.user;
//       const data = { user, email, password, username, nama_lengkap };
//       return { message: "Register Berhasil", data };
//     })
//     .catch((err) => {
//       const errMessage = err.message;
//       return { message: errMessage };
//     });
// };

// const loginWithEmail = (email, password) => {
//   let response;
//   signInWithEmailAndPassword(auth, email, password)
//     .then((userCred) => {
//       const user = userCred.user;
//       response = { message: "Login Berhasil", user };
//     })
//     .catch((err) => {
//       const errMessage = err.message;
//       response = { message: errMessage };
//     });

//   return response;
// };

// const getSession = async () => {
//    onAuthStateChanged(auth, (user) => {
//     if (user) {
//       const uid = user.uid;
//       return { session: true, uid };
//     } else {
//       return { session: false };
//     }
//   });
// };

// let session = {}

// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     const uid = user.uid;
//     session = { session: true, uid };
//   } else {
//     session = { session: false };
//   }
// });

// const loginWithGoogle = () => {
//   // signInWithRedirect(auth, provider);
//   console.log(userSession);
//   // getRedirectResult(auth)
//   //   .then((result) => {
//   //     const credential = GoogleAuthProvider.credentialFromResult(result);
//   //     const token = credential.accessToken;

//   //     const user = result.user;
//   //     console.log(user)
//   //     sessionStorage.setItem(user)
//   //   })
//   //   .catch((error) => {
//   //     // Handle Errors here.
//   //     const errorCode = error.code;
//   //     const errorMessage = error.message;
//   //   });
// };

// export {
//   signInWithEmailAndPassword,
//   loginWithEmail,
//   getSession,
//   loginWithGoogle,
//   registerUser,
//   session,
// };
