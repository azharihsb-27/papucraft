import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithRedirect,
  GoogleAuthProvider,
  getRedirectResult,
} from "firebase/auth";

import app from "./firebase-sdk";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const LoginInitiator = {
  init({ loginWithGoogle }) {
    // login.addEventListener("click", (ev) => {
    //   signInWithEmailAndPassword(auth, email, password)
    //     .then((userCredential) => {
    //       const user = userCredential.user;
    //       alert("login berhasil");
    //     })
    //     .catch((err) => {
    //       const errCode = err.code;
    //       const errMessage = err.message;
    //       alert(errMessage);
    //     });
    // });

    loginWithGoogle.addEventListener("click", (ev) => {
      signInWithRedirect(auth, provider);
      
    });
  },
};

export default LoginInitiator;
