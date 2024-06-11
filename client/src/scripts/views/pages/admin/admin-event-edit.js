const AdminEventEdit = {
  async render() {
    return `
			<div class="p-6 pt-24 md:pt-32 md:pl-72 md:pr-10">
				<h1 class="text-2xl py-2 font-semibold text-red-500">Edit Acara</h1>
        <div id="wrapper" class="mt-8 xl:pr-96 flex flex-col justify-center items-start gap-4">
        </div>
			</div>
		`;
  },
  async afterRender() {
    const wrapper = document.querySelector('div#wrapper');

    wrapper.innerHTML += `
          <div class="flex flex-col gap-2 w-full">
            <label for="nama" class="inline-block">Nama</label>
            <input type="text" id="nama" name="nama" class="border-2 border-primary outline-none p-2" />
          </div>
          <div class="flex flex-col gap-2 w-full">
            <label for="lokasi" class="inline-block">Lokasi</label>
            <input type="text" id="lokasi" name="lokasi" class="border-2 border-primary outline-none p-2" />
          </div>
          <div class="flex flex-col gap-2 w-full">
            <label for="tanggal_mulai" class="inline-block">Tanggal mulai</label>
            <input type="text" id="tanggal_mulai" name="tanggal_mulai" class="border-2 border-primary outline-none p-2" />
          </div>
          <div class="flex flex-col gap-2 w-full">
            <label for="tanggal_selesai" class="inline-block">Tanggal selesai</label>
            <input type="text" id="tanggal_selesai" name="tanggal_selesai" class="border-2 border-primary outline-none p-2" />
          </div>
          <div class="flex flex-col gap-2 w-full">
            <label for="deskripsi" class="inline-block">Deskripsi</label>
            <textarea type="text" id="deskripsi" name="deskripsi" class="h-40 border-2 border-primary outline-none p-2"></textarea>
          </div>
					<div>
						<button class="px-4 py-2 bg-sky-500 text-white rounded hover:bg-sky-600 duration-300">Simpan</button>
						<button class="px-4 py-2 bg-primary text-white rounded hover:bg-red-700 duration-300">Hapus</button>
					</div>
      `;
  },
};

export default AdminEventEdit;
