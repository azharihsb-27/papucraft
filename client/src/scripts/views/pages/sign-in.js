import { setTitle } from '../../utils/app-shell';
import LoginInitiator from '../../utils/login-initiator';

const SignIn = {
  async render() {
    return `
      <div class="md:flex w-full h-screen">
        <div class="hidden md:flex relative w-1/2">
            <img class="lazyload w-full h-full object-cover" data-src="./bg-img/bg.jpg" alt="Hero Image"
            />
          <a href="#/" class="text-primary text-2xl font-bold top-[2rem] left-[2rem] absolute cursor-pointer z-10">PapuCraft</a>
        </div>
        <a href="#/" class="md:hidden text-primary text-2xl font-bold top-[2rem] left-[2rem] absolute cursor-pointer z-10">PapuCraft</a>

        <div class="md:w-1/2 flex my-auto justify-center relative flex-col px-5 py-[2rem] gap-2 h-screen">
            <img data-src="./bg-img/bg-large.jpg" alt="Hero Image"
              class="lazyload md:hidden w-full left-0 -z-10 absolute h-full object-cover"
            />
          <div class="w-full flex flex-col min-h-[70%] md:h-[60%] justify-center backdrop-blur-md rounded-md">
            <h2 class="text-3xl mb-2 text-primary mx-auto font-bold">Sign In</h2>
            <p class="mx-auto -mt-2">Let's start with your account</p>
            <form class="flex flex-col gap-2 px-4 py-[1rem]"  method="post">
              <div class="flex flex-col gap-2">
                <label for="email">Email</label>
                <input type="email" placeholder="Enter your email" class="border-2 border-primary outline-none px-2 py-1" name="email" id="email"/>
              </div>
              <div class="flex flex-col gap-2">
                <label for="password">Password</label>
                <input type="password" placeholder="Enter your password" class="border-2 border-primary outline-none px-2 py-1" name="password" id="password"/>
              </div>
              <button class="w-[40%] md:w-1/2 mx-auto font-bold border-2 rounded-md py-2 mt-4 bg-primary hover:border-2 hover:border-primary hover:text-primary hover:bg-transparent text-white transition" id="sign-in">Sign In</button>
              <div class="my-[1rem] w-[40%] md:w-1/2 mx-auto border border-1 border-primary relative hidden md:block">
                <p class="inline-block font-semibold bg-white px-2 py-1 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute z-5">OR</p>
              </div>
              <button id="login-google" class="mx-auto flex justify-center items-center my-3 w-[40%] gap-2 md:w-[50%] rounded-md bg-white hover:bg-primary hover:text-white border border-1 border-slate-800 p-2 transition">
              <img data-src="./img/gicon.png" class="lazyload object-cover w-[20px] h-[20px]"/>
              <span>Sign In with Google</span>
              </button>
              <p class="mx-auto text-sm ">Don't have any account yet? <a href="#/signup" class="text-primary font-bold">Sign Up</a></p>
            </form>
          </div>
        </div>
      </div>

      `;
  },

  async afterRender() {
    setTitle('SignIn - PapuCraft');
    LoginInitiator.init({
      email: document.querySelector('#email'),
      password: document.querySelector('#password'),
      login: document.querySelector('#sign-in'),
      loginWithGoogle: document.querySelector('#login-google'),
    });
  },
};

export default SignIn;
