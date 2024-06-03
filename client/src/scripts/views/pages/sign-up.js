import RegisterInitiator from '../../utils/register-initiator';

const SignUp = {
  async render() {
    return `
    <div class="md:flex w-full h-screen">
      <div class="hidden md:flex md:order-last relative w-1/2">
        <img src="/img/bg.jpg" alt="Hero Image"
              class="w-full h-full object-cover"
        />
        <a href="#/" class="text-primary text-2xl font-bold top-[2rem] right-[2rem] absolute cursor-pointer z-10">PapuCrafts</a>
      </div>
        <a href="#/" class="md:hidden text-primary text-2xl font-bold top-[2rem] left-[2rem] absolute cursor-pointer z-10">PapuCrafts</a>
      <div class="md:w-1/2 h-screen flex my-auto justify-center relative flex-col px-5 py-[2rem] gap-2">
        <img src="/img/bg.jpg" alt="Hero Image"
                class="md:hidden w-full left-0 -z-10 absolute h-full object-cover"
          />
        <div class="w-full flex flex-col h-[screen] justify-center backdrop-blur-md rounded-md">
          <h2 class="text-3xl mb-2 text-primary mx-auto font-bold">Sign Up</h2>
          <p class="mx-auto -mt-2">Let's start with your account</p>
          <form class="flex flex-col gap-2 px-4 py-[1rem] ">
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
            <button class="w-1/2 md:w-1/4 mx-auto font-bold rounded-md py-2 mt-4 bg-primary hover:border-2 hover:border-primary hover:text-primary hover:bg-transparent transition text-white" id="sign-up">Sign Up</button>
            <p class="mx-auto text-sm ">Have an account? <a href="#/signin" class="text-primary font-bold">Sign In</a></p>
          </form>
        </div>
      </div>
    </div>

    `;
  },

  async afterRender() {
    RegisterInitiator.init({
      username: document.querySelector('input#username'),
      email: document.querySelector('input#email'),
      password: document.querySelector('input#password'),
      confirm: document.querySelector('input#confirm'),
      btnRegister: document.querySelector('button#sign-up'),
    });
  },
};

export default SignUp;
