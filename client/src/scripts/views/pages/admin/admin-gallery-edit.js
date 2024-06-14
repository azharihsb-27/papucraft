import UrlParser from "../../../routes/url-parser";
import { getDetailKebudayaan } from "../../../utils/api";
import { token } from "../../../utils/session-check";
import { alertError } from "../../../utils/show-alert";
import editKebudayaanInitiator from "../../../utils/edit-kebudayaan-initiator";

const AdminGalleryEdit = {
  async render() {
    return `
			<div class="p-6 pt-24 md:pt-32 md:pl-72 md:pr-10">
				<h1 class="text-2xl py-2 font-semibold text-red-500">Edit Galeri</h1>
        <form id="wrapper" class="mt-8 xl:pr-96 flex flex-col justify-center items-start gap-4" method="put">
          <div class="flex flex-col gap-2 w-full">
            <label for="nama" class="inline-block">Nama<span class="text-red-500 text-sm">*</span></label>
            <input type="text" id="nama" name="nama" class="border-2 border-primary outline-none p-2" required />
          </div>
          <div class="flex flex-col gap-2 w-full">
            <label for="asal-daerah" class="inline-block">Asal daerah<span class="text-red-500 text-sm">*</span></label>
            <input type="text" id="asal-daerah" name="asal-daerah" class="border-2 border-primary outline-none p-2" required />
          </div>
          <div class="flex flex-col gap-2 w-full">
            <label for="kategori" class="inline-block">Kategori<span class="text-red-500 text-sm">*</span></label>
            <input type="text" id="kategori" name="kategori" class="border-2 border-primary outline-none p-2" required />
          </div>
          <div class="flex flex-col gap-2 w-full">
            <label for="source" class="inline-block">Source</label>
            <input type="text" id="source" name="source" class="border-2 border-primary outline-none px-2 py-1"/>
          </div>
          <div class="flex flex-col gap-2 w-full">
            <label for="deskripsi" class="inline-block">Deskripsi<span class="text-red-500 text-sm">*</span></label>
            <textarea type="text" id="deskripsi" name="deskripsi" class="h-40 border-2 border-primary outline-none p-2" required></textarea>
          </div>
          <div class="flex flex-col gap-2 w-full">
            <label for="thumbnail" class="inline-block">Thumbnail</label>
            <input type="file" accept="image/*" name="thumbnail" id="thumbnail" class="border-2 border-primary outline-none px-2 py-1"/>
            <p class="text-sm text-yellow-500 -mt-1">Isi bila thumbnail lama ingin diganti!</p>
          </div>
          <div>
            <button type="submit" class="px-4 py-2 bg-sky-500 text-white rounded hover:bg-sky-600 duration-300">Simpan</button>
          </div>
        </form>
			</div>
		`;
  },
  async afterRender() {
    const {id} = UrlParser.parseActiveUrlWithoutCombiner()
    const {data} = await getDetailKebudayaan(id)
    const form = document.querySelector('form')
    const nama = document.getElementById('nama')
    const asalDaerah = document.getElementById('asal-daerah')
    const kategori = document.getElementById('kategori')
    const source = document.getElementById('source')
    const deskripsi = document.getElementById('deskripsi')
    const thumbnail = document.getElementById('thumbnail')
    if(token){
          nama.value = data.nama
          asalDaerah.value = data.asal_daerah
          kategori.value = data.kategori
          deskripsi.value = data.deskripsi
          source.value = data.source
    }else{
        alertError('Something Error')
        setTimeout(() => {
            location.href = '#/'
        }, 3000);
    }
    editKebudayaanInitiator.init({form, nama, asalDaerah, source, kategori, deskripsi, thumbnail, id})
  },

};

export default AdminGalleryEdit;
