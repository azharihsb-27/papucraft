const AdminGalleryEdit = {
  async render() {
    return `
			<div class="p-6 pt-24 md:pt-32 md:pl-72 md:pr-10">
				<h1 class="text-2xl py-2 font-semibold text-red-500">Edit Galeri</h1>
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
						<label for="asal_daerah" class="inline-block">Asal daerah</label>
						<input type="text" id="asal_daerah" name="asal_daerah" class="border-2 border-primary outline-none p-2" />
					</div>
          <div class="flex flex-col gap-2 w-full">
            <label for="kategori" class="inline-block">Kategori</label>
            <input type="text" id="kategori" name="kategori" class="border-2 border-primary outline-none p-2" />
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

export default AdminGalleryEdit;
