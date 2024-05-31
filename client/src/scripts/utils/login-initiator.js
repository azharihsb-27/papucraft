import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithRedirect,
  GoogleAuthProvider,
  getRedirectResult,
} from "firebase/auth";

import app from "./firebase-sdk";
import { alertError, alertSuccess } from "./show-alert";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const LoginInitiator = {
  init({ email ,password, login }) {
    login.addEventListener("click", (ev) => {
      ev.preventDefault()
      const emailValue = email.value
      const passwordValue = password.value
      signInWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          const user = userCredential.user;
          alertSuccess('Login Success!')
          setTimeout(()=> location.href = '/',3000)
        })
        .catch((err) => {
          const errCode = err.code;
          const errMessage = err.message;
          alertError(errMessage);
        });
    });

    // loginWithGoogle.addEventListener("click", (ev) => {
    //   signInWithRedirect(auth, provider);
      
    // });
  },
};

export default LoginInitiator;
