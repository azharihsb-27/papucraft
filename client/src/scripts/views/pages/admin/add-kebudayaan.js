import addKebudayaanInitiator from '../../../utils/add-kebudayaan-initiator';
import {setTitle} from '../../../utils/app-shell'

const AddKebudayaan = {
    async render(){
        return `
            <div class="p-6 md:pl-72 md:pr-10">
              <h2 class="text-primary text-xl lg:text-2xl font-medium">Tambah Kebudayaan</h2>
              <form class="mt-2 flex flex-col gap-3">
                <div class="flex flex-col gap-2">
                    <label for="nama">Nama Seni atau Kebudayaan<span class="text-red-500 text-sm">*</span></label>
                    <input type="text" id="nama" name="nama" class="border-2 border-primary outline-none px-2 py-1" required/>
                </div>
                <div class="flex flex-col gap-2">
                    <label for="asal-daerah">Asal Daerah<span class="text-red-500 text-sm">*</span></label>
                    <input type="text" id="asal-daerah" name="asal-daerah" class="border-2 border-primary outline-none px-2 py-1" required/>
                </div>
                <div class="flex flex-col gap-2">
                    <label for="kategori">Kategori<span class="text-red-500 text-sm">*</span></label>
                    <input type="text" id="kategori" name="kategori" class="border-2 border-primary outline-none px-2 py-1" required/>
                </div>
                <div class="flex flex-col gap-2">
                    <label for="source">Source</label>
                    <input type="text" id="source" name="source" class="border-2 border-primary outline-none px-2 py-1"/>
                </div>
                <div class="flex flex-col gap-2">
                    <label for="deskripsi">Deskripsi<span class="text-red-500 text-sm">*</span></label>
                    <textarea id="deskripsi" name="deskripsi" rows="5" class="border-2 border-primary outline-none px-2 py-1 resize-none" required></textarea>
                </div>  
                <div class="flex flex-col gap-2">
                    <label for="thumbnail">Thumbnail<span class="text-red-500 text-sm">*</span></label>
                    <input type="file" name="thumbnail" id="thumbnail" class="border-2 border-primary outline-none px-2 py-1" required/>
                </div>
                <button type="submit" class="w-[40%] ml-auto gap-2 md:w-[20%] rounded-md hover:bg-white bg-primary text-white hover:text-primary border border-1 border-slate-800 p-2 transition">Tambah Kebudayaan</button>
              </form>
            </div>
        `
    },
    async afterRender(){
        setTitle('Admin | Tambah Kebudayaan - PapuCraft')
        const form = document.querySelector('form')
        const nama = document.getElementById('nama')
        const asalDaerah = document.getElementById('asal-daerah')
        const kategori = document.getElementById('kategori')
        const source = document.getElementById('source')
        const deskripsi = document.getElementById('deskripsi')
        const thumbnail = document.getElementById('thumbnail')
        addKebudayaanInitiator.init({form, nama, asalDaerah,source, kategori, deskripsi, thumbnail})
    }
    
} 

export default AddKebudayaan