import { session, loginWithGoogle } from "../../utils/session";

const SignIn = {
  async render() {
    return `
          <h1>SignIn</h1>
          <button id="popup">Login With Google</button>
          <p></p>

      `;
  },

  async afterRender() {
    const button = document.querySelector("button#popup");
    
  },
};

export default SignIn;
