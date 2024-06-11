import UrlParser from '../../../routes/url-parser';
import { getDetailEvent } from '../../../utils/api';

const AdminEventDetail = {
  async render() {
    return `
			<div class="p-6 pt-24 md:pt-32 md:pl-72 md:pr-10">
				<h1 class="text-2xl py-2 font-semibold text-red-500">Detail Acara</h1>
        <div id="wrapper" class="mt-8 xl:pr-96 flex flex-col justify-center items-start gap-4">
        </div>
			</div>
		`;
  },
  async afterRender() {
    const wrapper = document.querySelector('div#wrapper');
    const { id } = UrlParser.parseActiveUrlWithoutCombiner();
    const {
      success,
      data,
      message,
    } = await getDetailEvent(id);
    if (!success) {
      alertError(message);
    } else {
      wrapper.innerHTML += `
          <div class="flex flex-col gap-2 w-full">
            <label for="nama" class="inline-block">Nama acara</label>
            <span class="p-2 border-2 border-primary text-gray-500">${data.nama}</span>
            
          </div>
          <div class="flex flex-col gap-2 w-full">
            <label for="kategori" class="inline-block">Lokasi</label>
            <span class="p-2 border-2 border-primary text-gray-500">${data.lokasi}</span>
          </div>
          <div class="flex flex-col gap-2 w-full">
            <label for="deskripsi" class="inline-block">Tanggal mulai</label>
            <span class="p-2 border-2 border-primary text-gray-500">${data.tanggal_mulai}</span>
          </div>
          <div class="flex flex-col gap-2 w-full">
            <label for="deskripsi" class="inline-block">Tanggal selesai</label>
            <span class="p-2 border-2 border-primary text-gray-500">${data.tanggal_selesai}</span>
          </div>
          <div class="flex flex-col gap-2 w-full">
            <label for="deskripsi" class="inline-block">Deskripsi</label>
            <span class="p-2 border-2 border-primary text-gray-500">${data.deskripsi}</span>
          </div>
          <a href="#/admineventedit/${data.id}" class="px-4 py-2 bg-sky-500 text-white rounded hover:bg-sky-600 duration-300">Ubah</a>
      `;
    }
  },
};

export default AdminEventDetail;
