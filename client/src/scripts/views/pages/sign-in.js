import LoginInitiator from "../../utils/login-initiator";

const SignIn = {
  async render() {
    return `
      <div class="md:flex w-full h-screen">
        <div class="hidden md:flex relative w-1/2">
          <img src="https://images.unsplash.com/photo-1528360458789-d7774f47397b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Hero Image"
                class="w-full h-full object-cover"
          />
          <a href="#/" class="text-white text-2xl font-bold top-[2rem] left-[2rem] absolute">PapuCraft</a>
        </div>
        <div class="my-5 md:w-1/2 flex my-auto flex-col px-5 py-[2rem] gap-2 ">
          <h2 class="text-3xl text-primary mx-auto font-bold">Sign In</h2>
          <p class="mx-auto -mt-2">Let's start with your account</p>
          <form class="flex flex-col gap-2 px-4 py-[1rem] ">
            <div class="flex flex-col gap-2">
              <label for="email">Email</label>
              <input type="email" placeholder="Enter your email" class="border border-2 border-primary outline-none px-2 py-1" name="email" id="email"/>
            </div>
            <div class="flex flex-col gap-2">
              <label for="password">Password</label>
              <input type="password" placeholder="Enter your password" class="border border-2 border-primary outline-none px-2 py-1" name="password" id="password"/>
            </div>
            <button class="w-1/2 md:w-1/4 mx-auto font-bold rounded-md py-2 mt-4 bg-primary text-white" id="sign-in">Sign In</button>
            <p class="mx-auto text-sm ">Don't have any account yet? <a href="#/signup" class="text-primary font-bold">Sign Up</a></p>
          </form>
        </div>
      </div>

      `;
  }, 

  async afterRender() {
    LoginInitiator.init({
      login: document.querySelector("#sign-in"),
      email: document.querySelector('#email'),
      password: document.querySelector('#password'),
    });

  },
};

export default SignIn;
