import UrlParser from '../../routes/url-parser';
import { getDetailEvent } from '../../utils/api';
import { token } from '../../utils/session-check';
import { alertError } from '../../utils/show-alert';
import editEventInitiator from '../../utils/edit-event-initiator';
import { setTitle } from '../../utils/app-shell';

const EditEvent = {
  async render() {
    return `
        <div class="content p-7 lg:p-14">
            <h2 class="text-primary text-xl lg:text-2xl font-medium">Tambah Event</h2>
            <div class="flex flex-col md:flex-row w-full mt-2 justify-center bg-gray-100 shadow-xl rounded-lg">
               <div class="w-full md:w-[30%] flex flex-col justify-center items-center md:py-0 py-2 px-2 gap-1">
                    <p>Preview Thumbnail</p>
                    <img data-src="./img/preview.png" class="lazyload w-full lg:w-3/4 h-2/4 object-cover rounded-lg" id="preview-thumbnail"/>
               </div> 
               <div class="w-full md:w-[70%] px-[2rem] py-[1rem]">
                <form class="flex flex-col gap-2"  method="put">
                    <div class="flex flex-col gap-2">
                        <label for="nama-acara">Nama Acara<span class="text-red-500 text-sm">*</span></label>
                        <input type="text" class="border-2 border-primary outline-none px-2 py-1" placeholder="Nama Acara" name="nama-acara" id="nama-acara" required/>
                    </div>
                    <div class="flex flex-col gap-2">
                        <label for="Lokasi">Lokasi Acara<span class="text-red-500 text-sm">*</span></label>
                        <input type="text" class="border-2 border-primary outline-none px-2 py-1" placeholder="Lokasi Acara" name="Lokasi" id="lokasi" required/>
                    </div>
                    <div class="flex flex-col gap-2">
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
                    <div class="flex flex-col gap-2">
                        <label for="thumbnail">Thumbnail<span class="text-red-500 text-sm">*</span></label>
                        <input type="file" accept="image/*" name="thumbnail" id="thumbnail" class="border-2 border-primary outline-none px-2 py-1"/>
                        <p class="text-sm text-yellow-500 -mt-1">Isi bila thumbnail lama ingin diganti!</p>
                    </div>
                    <button type="submit" class="w-[40%] ml-auto gap-2 md:w-[20%] rounded-md hover:bg-white bg-primary text-white hover:text-primary border border-1 border-slate-800 p-2 transition">Ubah Event</button>
                </form>
               </div>
            </div>
        </div>
    `;
  },
  async afterRender() {
    setTitle('Edit Event - PapuCraft');
    const { id } = UrlParser.parseActiveUrlWithoutCombiner();
    const { data } = await getDetailEvent(id);
    const form = document.querySelector('form');
    const nama = document.getElementById('nama-acara');
    const lokasi = document.getElementById('lokasi');
    const deskripsi = document.getElementById('deskripsi');
    const tglMulai = document.getElementById('tanggal-mulai');
    const tglSelesai = document.getElementById('tanggal-selesai');
    const thumbnail = document.getElementById('thumbnail');

    const preview = document.getElementById('preview-thumbnail');

    if (token) {
      const uid = JSON.parse(sessionStorage.getItem('user')).uid;
      if (uid === data.author.uid) {
        nama.value = data.nama;
        lokasi.value = data.lokasi;
        deskripsi.value = data.deskripsi;
        tglMulai.value = data.tanggal_mulai;
        tglSelesai.value = data.tanggal_selesai;
        preview.src = data.thumbnail;
      } else {
        alertError('Something Error');
        setTimeout(() => {
          location.href = '#/event';
        }, 3000);
      }
    } else {
      alertError('Something Error');
      setTimeout(() => {
        location.href = '#/event';
      }, 3000);
    }

    thumbnail.onchange = () => {
      const [file] = thumbnail.files;
      if (file) {
        preview.src = URL.createObjectURL(file);
      }
    };

    editEventInitiator.init({
      form,
      nama,
      lokasi,
      deskripsi,
      tglMulai,
      tglSelesai,
      thumbnail,
      id,
    });
  },
};
export default EditEvent;
