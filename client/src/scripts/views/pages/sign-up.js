import registerInitiator from '../../utils/register-initiator';
import { setTitle } from '../../utils/app-shell';

const SignUp = {
  async render() {
    return `
    <div class="md:flex w-full h-screen">
      <div class="hidden md:flex md:order-last relative w-1/2">
          <img class="lazyload w-full h-full object-cover" data-src="./bg-img/bg.jpg" alt="Hero Image"/>
        <a href="#/" class="text-primary text-2xl font-bold top-[2rem] right-[2rem] absolute cursor-pointer z-10">PapuCraft</a>
      </div>
        <a href="#/" class="md:hidden text-primary text-2xl font-bold top-[2rem] left-[2rem] absolute cursor-pointer z-10">PapuCraft</a>
      <div class="md:w-1/2 h-screen flex my-auto justify-center relative flex-col px-5 py-[2rem] gap-2">
          <img data-src="./bg-img/bg.jpg"" alt="Hero Image" class="lazyload md:hidden w-full left-0 -z-10 absolute h-full object-cover"/>
        <div class="w-full flex flex-col h-[screen] justify-center backdrop-blur-md rounded-md">
          <h2 class="text-3xl mb-2 text-primary mx-auto font-bold">Sign Up</h2>
          <p class="mx-auto -mt-2">Let's start with your account</p>
          <form class="flex flex-col gap-2 px-4 py-[1rem]" method="post" id="form-register">
            <div class="flex flex-col gap-2">
              <label for="username">Username</label>
              <input type="username" placeholder="Enter your username" class="border-2 border-primary outline-none px-2 py-1" name="username" id="username"/>
            </div>
            <div class="flex flex-col gap-2">
              <label for="email">Email</label>
              <input type="email" placeholder="Enter your email" class="border-2 border-primary outline-none px-2 py-1" name="email" id="email"/>
            </div>
            <div class="flex flex-col gap-2">
              <label for="password">Password</label>
              <input type="password" placeholder="Enter your password" class="border-2 border-primary outline-none px-2 py-1" name="password" id="password"/>
            </div>
            <div class="flex flex-col gap-2">
              <label for="confirm">Confirm Password</label>
              <input type="password" placeholder="Enter your confirm" class="border-2 border-primary outline-none px-2 py-1" name="confirm" id="confirm"/>
            </div>
            <button class="w-1/2 md:w-1/4 mx-auto font-bold border-2 rounded-md py-2 mt-4 bg-primary hover:border-2 hover:border-primary hover:text-primary hover:bg-transparent transition text-white" type="submit">Sign Up</button>
            <p class="mx-auto text-sm ">Have an account? <a href="#/signin" class="text-primary font-bold">Sign In</a></p>
          </form>
        </div>
      </div>
    </div>

    `;
  },

  async afterRender() {
    setTitle('SignUp - PapuCraft');
    const form = document.querySelector('#form-register');
    const username = document.querySelector('input#username');
    const email = document.querySelector('input#email');
    const password = document.querySelector('input#password');
    const confirm = document.querySelector('input#confirm');
    registerInitiator.init({ form, username, email, password, confirm });
  },
};

export default SignUp;
