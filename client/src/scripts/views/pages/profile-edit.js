import { getUserProfile } from '../../utils/api';
import editProfileInitiator from '../../utils/edit-profile-initiator';
import { token } from '../../utils/session-check';
import { alertError } from '../../utils/show-alert';

const ProfileEdit = {
  async render() {
    return `
      <div class="content p-7 lg:p-14">
        <h2 class="text-primary text-xl lg:text-2xl font-medium">Ubah Profil</h2>
        <div class="w-full md:w-[50%] md:mx-auto flex flex-col justify-center items-center md:py-0 py-2 px-2 gap-1">
          <p>Preview Image Profile</p>
          <img data-src="/img/preview.png" class="lazyload w-full lg:w-3/4 h-50 object-fit object-cover rounded-lg" id="preview-thumbnail"/>
        </div> 
        <form class="mt-2 flex flex-col gap-3">
          <div class="flex flex-col gap-2">
              <label for="username">Username</label>
              <input type="text" id="username" name="username" class="border-2 border-primary outline-none px-2 py-1" required/>
          </div>
          <div class="flex flex-col gap-2">
              <label for="email">Email</label>
              <input type="email" id="email" name="email" class="border-2 border-primary outline-none px-2 py-1"/>
          </div>
          <div class="flex flex-col gap-2">
              <label for="profile">Foto profile</label>
              <input type="file" name="profile" id="profile" class="border-2 border-primary outline-none px-2 py-1"/>
              <p class="text-sm text-yellow-500 -mt-1">Isi bila profile image lama ingin diganti!</p>
          </div>
          <button type="submit" class="w-[40%] ml-auto gap-2 md:w-[20%] rounded-md hover:bg-white bg-primary text-white hover:text-primary border border-1 border-slate-800 p-2 transition">Simpan</button>
        </form>
      </div>
    `;
  },
  async afterRender() {
    const loginMethod = sessionStorage.getItem('loginMethod');
    if (!token || loginMethod === 'google') {
      alertError('Something Error');
      setTimeout(() => {
        location.href = '#/';
      }, 3000);
    }
    const { uid } = JSON.parse(sessionStorage.getItem('user'));
    const { data } = await getUserProfile(uid);
    const form = document.querySelector('form');
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const profile = document.getElementById('profile');
    const preview = document.getElementById('preview-thumbnail');

    username.value = data.username;
    email.value = data.email;
    preview.src = data.profile_image;

    profile.onchange = () => {
      const [file] = profile.files;
      if (file) {
        preview.src = URL.createObjectURL(file);
      }
    };

    editProfileInitiator.init({ form, username, email, profile, id: uid });
  },
};

export default ProfileEdit;
