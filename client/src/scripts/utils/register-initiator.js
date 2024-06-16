import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import app from './firebase-sdk';
import { addUser } from './api';
import { alertError, alertSuccess } from './show-alert';

const auth = getAuth(app);
const registerInitiator = {
  init({ form, username, email, password, confirm }) {
    form.addEventListener('submit', (ev) => {
      ev.preventDefault();
      const usernameValue = username.value;
      const emailValue = email.value;
      const passwordValue = password.value;
      const confirmValue = confirm.value;

      if (passwordValue !== confirmValue) {
        alertError('Password Tidak Sama!');
      } else {
        this._registerUser({ usernameValue, emailValue, passwordValue });
      }
    });
  },
  async _registerUser({ usernameValue, emailValue, passwordValue }) {
    const dataUser = { usernameValue, emailValue };
    createUserWithEmailAndPassword(auth, emailValue, passwordValue)
      .then(async (userCredential) => {
        const user = userCredential.user;
        const { uid } = user;
        const finalData = { ...dataUser, uid, method: 'nongoogle' };
        const { success, message } = await addUser(finalData);
        if (success) {
          signOut(auth)
            .then(() => {
              alertSuccess('Register Success!');
              setTimeout(() => (location.href = '#/signin'), 3000);
            })
            .catch((err) => {
              alertError(err);
            });
        } else {
          alertError(message);
        }
      })
      .catch((err) => {
        const errMessage = err.message;
        alertError(errMessage);
      });
  },
};
export default registerInitiator;
