const ProfileEdit = {
  async render() {
    return `
      <div class="content p-7 lg:p-14">
        <h2 class="text-primary text-xl lg:text-2xl font-medium">Ubah Profil</h2>
        <form class="mt-2 flex flex-col gap-3">
          <div class="flex flex-col gap-2">
              <label for="nama">Nama</label>
              <input type="text" id="nama" name="nama" class="border-2 border-primary outline-none px-2 py-1" required/>
          </div>
          <div class="flex flex-col gap-2">
              <label for="email">Email</label>
              <input type="email" id="email" name="email" class="border-2 border-primary outline-none px-2 py-1"/>
          </div>
          <div class="flex flex-col gap-2">
              <label for="profile">Foto profile</label>
              <input type="file" name="profile" id="profile" class="border-2 border-primary outline-none px-2 py-1" required/>
          </div>
          <button type="submit" class="w-[40%] ml-auto gap-2 md:w-[20%] rounded-md hover:bg-white bg-primary text-white hover:text-primary border border-1 border-slate-800 p-2 transition">Simpan</button>
        </form>
      </div>
    `
  },
  async afterRender() {},
};

export default ProfileEdit;
