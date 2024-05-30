import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from "../../utils/firebase-sdk";
import LoginInitiator from "../../utils/login-initiator";

const SignIn = {
  async render() {
    return `
          <h1>SignIn</h1>
          <button id="popup">Login With Google</button>
          <p></p>

      `;
  },

  async afterRender() {
    const RENDER_EVENT = "RENDER_EVENT";
    const auth = getAuth(app);

    LoginInitiator.init({
      loginWithGoogle: document.querySelector("#popup"),
    });

    console.log('res')

    document.dispatchEvent(new Event(RENDER_EVENT));
    document.addEventListener(RENDER_EVENT, () => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const uid = user.uid;
          sessionStorage.setItem("user", uid);
          console.log(user)
        } else {
          console.log('nonuser')
          sessionStorage.clear();
        }
      });
    });
  },
};

export default SignIn;
