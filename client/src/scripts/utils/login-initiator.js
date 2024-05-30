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
  init({ email ,password, login }) {
    login.addEventListener("click", (ev) => {
      ev.preventDefault()
      const emailValue = email.value
      const passwordValue = password.value
      signInWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          const user = userCredential.user;
          location.href = '/'
          alert("login berhasil");
        })
        .catch((err) => {
          const errCode = err.code;
          const errMessage = err.message;
          alert(errMessage);
        });
        console.log({emailValue, passwordValue})
    });

    // loginWithGoogle.addEventListener("click", (ev) => {
    //   signInWithRedirect(auth, provider);
      
    // });
  },
};

export default LoginInitiator;
