import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';

import app from './firebase-sdk';
import { addUser, getUserProfile } from './api';
import { alertError, alertSuccess } from './show-alert';

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const LoginInitiator = {
  init({ email, password, login, loginWithGoogle }) {
    login.addEventListener('click', (ev) => {
      ev.preventDefault();
      const emailValue = email.value;
      const passwordValue = password.value;
      signInWithEmailAndPassword(auth, emailValue, passwordValue)
        .then(() => {
          alertSuccess('Login Success!');
          setTimeout(() => (location.href = '/'), 3000);
        })
        .catch((err) => {
          const errMessage = err.message;
          alertError(errMessage);
        });
    });

    loginWithGoogle.addEventListener('click', async (ev) => {
      ev.preventDefault();
      signInWithPopup(auth, provider).then(async (userCredential) => {
        const user = userCredential.user;
        const { success } = await getUserProfile(user.uid);
        if (!success) {
          const email = user.email;
          const uid = user.uid;
          const displayName = user.displayName;
          const profile_image = user.photoURL;
          const data = {
            displayName,
            email,
            uid,
            profile_image,
            method: 'google',
          };
          await addUser(data);
          alertSuccess('Login Success!');
          setTimeout(() => (location.href = '/'), 3000);
        }
        alertSuccess('Login Success!');
        setTimeout(() => (location.href = '/'), 3000);
      });
    });
  },
};

export default LoginInitiator;
