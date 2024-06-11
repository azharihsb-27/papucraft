const AdminArticleEdit = {
  async render() {
    return `
			<div class="p-6 pt-24 md:pt-32 md:pl-72 md:pr-10">
				<h1 class="text-2xl py-2 font-semibold text-red-500">Edit Artikel</h1>
        <div id="wrapper" class="mt-8 xl:pr-96 flex flex-col justify-center items-start gap-4">
        </div>
			</div>
		`;
  },
  async afterRender() {
    const wrapper = document.querySelector('div#wrapper');

    wrapper.innerHTML += `
          <div class="flex flex-col gap-2 w-full">
            <label for="judul" class="inline-block">Judul</label>
            <input type="text" id="judul" name="judul" class="border-2 border-primary outline-none p-2" />
          </div>
          <div class="flex flex-col gap-2 w-full">
            <label for="ringkasan" class="inline-block">Ringkasan</label>
            <textarea type="text" id="ringkasan" name="ringkasan" class="h-40 border-2 border-primary outline-none p-2"></textarea>
          </div>
					<div>
						<button class="px-4 py-2 bg-sky-500 text-white rounded hover:bg-sky-600 duration-300">Simpan</button>
						<button class="px-4 py-2 bg-primary text-white rounded hover:bg-red-700 duration-300">Hapus</button>
					</div>
      `;
  },
};

export default AdminArticleEdit;
