import UrlParser from '../../../routes/url-parser';
import { getDetailEvent } from '../../../utils/api';
import editEventInitiator from '../../../utils/edit-event-initiator';
import { token } from '../../../utils/session-check';
import { alertError } from '../../../utils/show-alert';

const AdminEventEdit = {
  async render() {
    return `
			<div class="p-6 pt-24 md:pt-32 md:pl-72 md:pr-10">
				<h1 class="text-2xl py-2 font-semibold text-red-500">Edit Acara</h1>
        <form id="wrapper" class="mt-8 xl:pr-96 flex flex-col justify-center items-start gap-4" method="put">
          <div class="w-full flex flex-col gap-2">
              <label for="nama-acara">Nama Acara<span class="text-red-500 text-sm">*</span></label>
              <input type="text" class="border-2 border-primary outline-none px-2 py-1" placeholder="Nama Acara" name="nama-acara" id="nama-acara" required/>
          </div>
          <div class="w-full flex flex-col gap-2">
              <label for="Lokasi">Lokasi Acara<span class="text-red-500 text-sm">*</span></label>
              <input type="text" class="border-2 border-primary outline-none px-2 py-1" placeholder="Lokasi Acara" name="Lokasi" id="lokasi" required/>
          </div>
          <div class="w-full flex flex-col gap-2">
              <label for="deskripsi">Deskripsi<span class="text-red-500 text-sm">*</span></label>
              <textarea id="deskripsi" name="deskripsi" rows="5" placeholder="Deskripsi Acara" class="border-2 border-primary outline-none px-2 py-1 resize-none required"></textarea>
          </div>
          <div class="w-full flex md:flex-row flex-col gap-2">
              <div class="w-1/2 flex flex-col">
                  <label for="tanggal-selesai">Tanggal Mulai<span class="text-red-500 text-sm">*</span></label>
                  <input type="date" class="border-2 border-primary outline-none px-2 py-1" name="tanggal-mulai" id="tanggal-mulai" required>
              </div>
              <div class="w-1/2 flex flex-col">
                  <label for="tanggal-selesai">Tanggal Selesai<span class="text-red-500 text-sm">*</span></label>
                  <input type="date" class="border-2 border-primary outline-none px-2 py-1" name="tanggal-selesai" id="tanggal-selesai" required>
              </div>
          </div>
          <div class="w-full flex flex-col gap-2">
              <label for="thumbnail">Thumbnail</label>
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
    const {data} = await getDetailEvent(id)
    const form = document.querySelector('form')
    const nama = document.getElementById('nama-acara')
    const lokasi = document.getElementById('lokasi')
    const deskripsi = document.getElementById('deskripsi')
    const tglMulai = document.getElementById('tanggal-mulai')
    const tglSelesai = document.getElementById('tanggal-selesai')
    const thumbnail = document.getElementById('thumbnail')

    if(token){
      const uid = JSON.parse(sessionStorage.getItem('user')).uid
      if(uid === data.author.uid){
          nama.value = data.nama
          lokasi.value = data.lokasi
          deskripsi.value = data.deskripsi
          tglMulai.value = data.tanggal_mulai
          tglSelesai.value = data.tanggal_selesai
      }else{
          alertError('Something Error')
          setTimeout(() => {
              location.href = '#/event'
          }, 3000);
      }
    }else{
        alertError('Something Error')
        setTimeout(() => {
            location.href = '#/event'
        }, 3000);
    }
    editEventInitiator.init({form, nama, lokasi, deskripsi, tglMulai, tglSelesai, thumbnail,id})

  },
};

export default AdminEventEdit;
