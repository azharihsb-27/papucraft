import {
  getArtikelByAuthor,
  getUserProfile,
  getEventByAuthor,
} from '../../utils/api';
import { isAdmin } from '../../utils/session-check';
import resetPasswordInitiator from '../../utils/reset-password-initiator';

const UserProfile = {
  async render() {
    return `
            <div class="content p-7 lg:p-14">
                <h2 class="text-primary text-xl lg:text-2xl font-medium">Profil User</h2>
                <div class="w-full flex flex-col md:flex-row md:justify-center mt-2 gap-5">
                    <div class="w-full md:w-2/5 p-4 flex flex-col items-center shadow-lg gap-2 rounded-md mb-4">
                        <img class="lazyload w-[175px] h-[175px] rounded-full" id="profile-image" alt="profile image">
                        <h3 class="text-xl font-semibold" id="profile-name"></h3>
                        <div class="flex gap-2">
                            <a href="#/admindashboard" id="btn-admin" class="flex items-center justify-center px-2 py-1 bg-green-400 rounded-lg min-h-[44px] min-w-[44px] text-white hover:text-black hover:bg-transparent hover:border hover:border-1 hover:border-green-400" cursor-pointer transition hidden">
                                    Dashboard Admin
                            </a>
                            <a href="#/profileedit" id="btn-edit" class="flex items-center justify-center px-2 py-1 bg-blue-400 rounded-lg min-h-[44px] min-w-[44px] text-white hover:text-black hover:bg-transparent hover:border hover:border-1 hover:border-blue-400" cursor-pointer transition hidden">
                                    Ubah Profil
                            </a>
                        </div>
                        <div class="w-full flex justify-center flex-col gap-2">
                            <p class="font-medium">Reset Password</p>
                            <button id="btn-reset" class="flex items-center justify-center px-2 py-1 bg-green-400 rounded-lg min-h-[44px] min-w-[44px] text-white hover:text-black hover:bg-transparent hover:border hover:border-1 hover:border-green-400" cursor-pointer transition ">Kirim Email Reset Password</button>
                            <a href="" class="underline hidden" id="link-reset">reset password</a>
                        </div>
                        
                    </div>
                    <div class="w-full md:w-2/5 flex flex-col shadow-lg gap-5 p-4 rounded-md">
                        <div class="flex w-full items-center">
                        <h4 class="text-lg">Artikel Anda</h4>
                        <a href="/#/addarticle" class="w-[150px] text-center text-white hover:text-primary px-2 bg-primary hover:border hover:border-1 hover:border-primary hover:bg-transparent rounded-md  ml-auto transition">Tambah Artikel</a>
                        </div>
                        <div class="px-4" id="artikel-anda">
                        </div>

                        <div class="flex w-full items-center">
                        <h4 class="text-lg">Acara Anda</h4>
                        <a href="/#/addevent" class="w-[150px] text-center text-white hover:text-primary px-2 bg-primary hover:border hover:border-1 hover:border-primary hover:bg-transparent rounded-md ml-auto transition">Tambah Acara</a>
                        </div>
                        <div class="px-4" id="acara-anda">
                        </div>
                    </div>
                </div>
            </div>
        
        `;
  },
  async afterRender() {
    const form = document.getElementById('ubah-password');
    const user = JSON.parse(sessionStorage.getItem('user'));
    const loginMethod = sessionStorage.getItem('loginMethod');
    const image = document.getElementById('profile-image');
    const name = document.getElementById('profile-name');
    const listArtikel = document.getElementById('artikel-anda');
    const listEvent = document.getElementById('acara-anda');
    const btnAdmin = document.getElementById('btn-admin');
    const btnEditProfile = document.getElementById('btn-edit');
    const btnReset = document.getElementById('btn-reset');
    const linkReset = document.getElementById('link-reset');
    const admin = await isAdmin();

    if (admin) {
      btnAdmin.classList.remove('hidden');
    } else {
      btnAdmin.classList.add('hidden');
    }

    const artikel = await getArtikelByAuthor(user.uid);
    const dataArtikel = artikel.data;

    if (dataArtikel.length >= 1) {
      const list = document.createElement('ol');
      list.innerHTML += dataArtikel
        .map((data) => {
          return `<li class="flex justify-between my-2">
                        <p class="w-[80%]" overflow-hidden text-truncate>${data.judul}</p>
                        <a href="#/article/${data.id}" target="_blank"><span class="w-[20%] material-symbols-outlined">open_in_new</span></a>
                        </li>`;
        })
        .join('');

      listArtikel.appendChild(list);
    } else {
      listArtikel.innerHTML += '<p class="text-sm">Data Tidak Ada</p>';
    }

    const event = await getEventByAuthor(user.uid);
    const dataEvent = event.data;

    if (dataEvent.length >= 1) {
      const list = document.createElement('ol');
      list.innerHTML += dataEvent
        .map((data) => {
          return `<li class="flex justify-between my-2">
                        <p class="w-[80%]" overflow-hidden text-truncate>${data.nama}</p>
                        <a href="#/event/${data.id}" target="_blank"><span class="w-[20%] material-symbols-outlined">open_in_new</span></a>
                        </li>`;
        })
        .join('');

      listEvent.appendChild(list);
    } else {
      listEvent.innerHTML += '<p class="text-sm">Data Tidak Ada</p>';
    }

    if (loginMethod === 'google') {
      image.setAttribute('src', user.photoURL);
      name.textContent = user.displayName;
      btnEditProfile.classList.add('hidden');
      form.classList.add('hidden');
    } else {
      if (user.emailVerified) {
        btnReset.classList.add('hidden');
      } else {
        btnReset.classList.remove('hidden');
        const { data } = await getUserProfile(user.uid);
        name.textContent = data.username;
        image.setAttribute('src', data.profile_image);
        btnEditProfile.classList.remove('hidden');
      }
    }

    resetPasswordInitiator.init({ btnReset, linkReset, email: user.email });
  },
};

export default UserProfile;

// form.classList.remove('hidden')
{
  /* <form class="w-full flex flex-col gap-2 hidden" id="ubah-password">
<p class="font-medium">Ubah Password</p>
<div class="w-full flex flex-col gap-2">
    <label for="password-lama">Password Lama</label>
    <input type="text" class="border-2 border-primary outline-none px-2 py-1" placeholder="Password Lama" name="password-lama" id="password-lama" required/>
</div>
<div class="w-full flex flex-col gap-2">
    <label for="password-baru">Password Baru</label>
    <input type="text" class="border-2 border-primary outline-none px-2 py-1" placeholder="Password Baru" name="password-baru" id="password-baru" required/>
</div>
<button type="submit" class="flex items-center justify-center px-2 py-1 bg-green-400 rounded-lg min-h-[44px] min-w-[44px] text-white hover:text-black hover:bg-transparent hover:border hover:border-1 hover:border-green-400" cursor-pointer transition hidden">Ubah Password</button>
</form> */
}
