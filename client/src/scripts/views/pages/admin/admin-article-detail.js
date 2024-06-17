import UrlParser from '../../../routes/url-parser';
import {setTitle} from '../../../utils/app-shell'
import { getDetailArtikel } from '../../../utils/api';
import { alertError } from '../../../utils/show-alert';

const AdminArticleDetail = {
  async render() {
    return `
			<div class="p-6 pt-24 md:pt-32 md:pl-72 md:pr-10">
				<h1 class="text-2xl py-2 font-semibold text-red-500">Detail Artikel</h1>
        <div id="wrapper" class="mt-8 xl:pr-96 flex flex-col justify-center items-start gap-4">
        </div>
			</div>
		`;
  },
  async afterRender() {
    const wrapper = document.querySelector('div#wrapper');
    const { id } = UrlParser.parseActiveUrlWithoutCombiner();
    const { success, data, message } = await getDetailArtikel(id);
    if (!success) {
      alertError(message);
    } else {
      setTitle(`Admin | ${data.judul} - PapuCraft`)
      wrapper.innerHTML += `
          
          <div class="flex flex-col gap-2 w-full">
            <label for="judul" class="inline-block">Judul</label>
            <span class="p-2 border-2 border-primary text-gray-500">${data.judul}</span>
          </div>
          <div class="flex flex-col gap-2 w-full">
            <label for="ringkasan" class="inline-block">Ringkasan</label>
            <span class="p-2 border-2 border-primary text-gray-500">${data.ringkasan}</span>
          </div>
          <a href="#/adminarticleedit/${data.id}" class="px-4 py-2 bg-sky-500 text-white rounded hover:bg-sky-600 duration-300">Ubah</a>
      `;
    }
  },
};

export default AdminArticleDetail;
