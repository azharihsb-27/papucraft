import UrlParser from "../../../routes/url-parser";
import { getDetailKelas } from "../../../utils/api";
import editKelasInitiator from "../../../utils/edit-kelas-initiator";
import { token } from "../../../utils/session-check";
import { alertError } from "../../../utils/show-alert";

const AdminCourseEdit = {
  async render() {
    return `
			<div class="p-6 pt-24 md:pt-32 md:pl-72 md:pr-10">
				<h1 class="text-2xl py-2 font-semibold text-red-500">Edit Kelas</h1>
        <form id="wrapper" class="mt-8 xl:pr-96 flex flex-col justify-center items-start gap-4" method="put">
          <div class="flex flex-col gap-2 w-full">
            <label for="nama-kelas" class="inline-block">Nama Kelas</label>
            <input type="text" id="nama-kelas" name="nama-kelas" class="border-2 border-primary outline-none p-2" required />
          </div>
          <div class="flex flex-col gap-2 w-full">
            <label for="alamat" class="inline-block">Alamat</label>
            <input type="text" id="alamat" name="alamat" class="border-2 border-primary outline-none p-2" required />
          </div>
          <div class="flex flex-col gap-2 w-full">
            <label for="deskripsi" class="inline-block">Deskripsi</label>
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
    const {data} = await getDetailKelas(id)
    const form = document.querySelector('form')
    const nama = document.getElementById('nama-kelas')
    const alamat = document.getElementById('alamat')
    const deskripsi = document.getElementById('deskripsi')
    const thumbnail = document.getElementById('thumbnail')
    if(token){
      nama.value = data.nama_kelas
      alamat.value = data.alamat
      deskripsi.value = data.deskripsi
    }else{
      alertError('Something Error')
        setTimeout(() => {
            location.href = '#/'
        }, 3000);
    }

    editKelasInitiator.init({form, nama, alamat, deskripsi, thumbnail, id})

  },
};

export default AdminCourseEdit;
