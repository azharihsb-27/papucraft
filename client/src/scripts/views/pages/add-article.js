import QuilEditor from '../components/quill-editor'
import addArtikelInitiator from '../../utils/add-artikel-initiator';

const AddArticle = {
    async render(){
        return `
            <div class="content p-7 lg:p-14">
              <h2 class="text-primary text-xl lg:text-2xl font-medium">Tambah Artikel</h2>
              <form class="mt-2 flex flex-col gap-3">
                <div class="flex flex-col gap-2">
                    <label for="judul">Judul<span class="text-red-500 text-sm">*</span></label>
                    <input type="text" id="judul" name="judul" class="border-2 border-primary outline-none px-2 py-1" required/>
                </div>
                <div class="flex flex-col gap-2">
                    <label for="source">Source</label>
                    <input type="text" id="source" name="source" class="border-2 border-primary outline-none px-2 py-1"/>
                    <p class="text-sm text-yellow-500 -mt-1">Isi bila artikel berasal dari sumber lain!</p>
                </div>
                <div class="flex flex-col gap-2">
                    <label for="ringkasan">Ringkasan<span class="text-red-500 text-sm">*</span></label>
                    <textarea id="ringkasan" name="ringkasan" rows="5" class="border-2 border-primary outline-none px-2 py-1 resize-none required"></textarea>
                </div>  
                <label>Body<span class="text-red-500 text-sm">*</span></label>
                <quill-editor></quill-editor>
                <div class="flex flex-col gap-2">
                    <label for="thumbnail">Thumbnail</label>
                    <input type="file" name="thumbnail" id="thumbnail" class="border-2 border-primary outline-none px-2 py-1" required/>
                </div>
                <button type="submit" class="w-[40%] ml-auto gap-2 md:w-[20%] rounded-md hover:bg-white bg-primary text-white hover:text-primary border border-1 border-slate-800 p-2 transition">Tambah Artikel</button>
              </form>
            </div>
        `
    },
    async afterRender(){
        const quillEditor = document.querySelector('quill-editor')
        const editor = quillEditor.querySelector('#editor')
        const editorValue = editor.querySelector('.ql-editor')
        const form = document.querySelector('form')
        const judul = document.getElementById('judul')
        const source = document.getElementById('source')
        const ringkasan = document.getElementById('ringkasan')
        const thumbnail = document.getElementById('thumbnail')
        addArtikelInitiator.init({form, judul, source, ringkasan, editorValue, thumbnail})
    }
    
} 

export default AddArticle