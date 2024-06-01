import LoginInitiator from '../../utils/login-initiator';

const SignIn = {
  async render() {
    return `
      <div class="md:flex w-full h-screen">
        <div class="hidden md:flex relative w-1/2">
          <img src="/img/bg.jpg" alt="Hero Image"
                class="w-full h-full object-cover"
          />
          <a href="#/" class="text-primary text-2xl font-bold top-[2rem] left-[2rem] absolute cursor-pointer">PapuCraft</a>
        </div>
        <a href="#/" class="md:hidden text-primary text-2xl font-bold top-[2rem] left-[2rem] absolute cursor-pointer">PapuCraft</a>

        <div class="md:w-1/2 flex my-auto justify-center relative flex-col px-5 py-[2rem] gap-2 h-screen">
          <img src="/img/bg.jpg" alt="Hero Image"
                  class="md:hidden w-full left-0 -z-10 absolute h-full object-cover"
            />
          <div class="w-full flex flex-col min-h-[70%] md:h-[60%] justify-center backdrop-blur-md rounded-md">
            <h2 class="text-3xl mb-2 text-primary mx-auto font-bold">Sign In</h2>
            <p class="mx-auto -mt-2">Let's start with your account</p>
            <form class="flex flex-col gap-2 px-4 py-[1rem] ">
              <div class="flex flex-col gap-2">
                <label for="email">Email</label>
                <input type="email" placeholder="Enter your email" class="border-2 border-primary outline-none px-2 py-1" name="email" id="email"/>
              </div>
              <div class="flex flex-col gap-2">
                <label for="password">Password</label>
                <input type="password" placeholder="Enter your password" class="border-2 border-primary outline-none px-2 py-1" name="password" id="password"/>
              </div>
              <button class="w-1/2 md:w-1/4 mx-auto font-bold rounded-md py-2 mt-4 bg-primary hover:border-2 hover:border-primary hover:text-primary hover:bg-transparent text-white transition" id="sign-in">Sign In</button>
              <p class="mx-auto text-sm ">Don't have any account yet? <a href="#/signup" class="text-primary font-bold">Sign Up</a></p>
            </form>
          </div>
        </div>
      </div>

      `;
  },

  async afterRender() {
    LoginInitiator.init({
      login: document.querySelector('#sign-in'),
      email: document.querySelector('#email'),
      password: document.querySelector('#password'),
    });
  },
};

export default SignIn;
