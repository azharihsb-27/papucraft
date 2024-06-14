import UrlParser from "../../../routes/url-parser";
import { getDetailArtikel } from "../../../utils/api";
import editArtikelInitiator from "../../../utils/edit-artikel-initiator";
import { token } from "../../../utils/session-check";
import { alertError } from "../../../utils/show-alert";
import QuilEditor from '../../components/quill-editor'

const AdminArticleEdit = {
  async render() {
    return `
			<div class="p-6 pt-24 md:pt-32 md:pl-72 md:pr-10">
				<h1 class="text-2xl py-2 font-semibold text-red-500">Edit Artikel</h1>
        <form id="wrapper" class="mt-8 xl:pr-96 flex flex-col justify-center items-start gap-4"  method="put">
          <div class="w-full flex flex-col gap-2">
              <label for="judul">Judul<span class="text-red-500 text-sm">*</span></label>
              <input type="text" id="judul" name="judul" class="border-2 border-primary outline-none px-2 py-1" required/>
          </div>
          <div class="w-full flex flex-col gap-2">
              <label for="source">Source</label>
              <input type="text" id="source" name="source" class="border-2 border-primary outline-none px-2 py-1"/>
              <p class="text-sm text-yellow-500 -mt-1">Isi bila artikel berasal dari sumber lain!</p>
          </div>
          <div class="w-full flex flex-col gap-2">
              <label for="ringkasan">Ringkasan<span class="text-red-500 text-sm">*</span></label>
              <textarea id="ringkasan" name="ringkasan" rows="5" class="border-2 border-primary outline-none px-2 py-1 resize-none required"></textarea>
          </div>  
          <label>Body<span class="text-red-500 text-sm">*</span></label>
          <quill-editor></quill-editor>
          <div class="w-full flex flex-col gap-2">
              <label for="thumbnail">Thumbnail</label>
              <input type="file" name="thumbnail" id="thumbnail" class="border-2 border-primary outline-none px-2 py-1"/>
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
    const { id } = UrlParser.parseActiveUrlWithoutCombiner();
    const {data} = await getDetailArtikel(id)
    const quillEditor = document.querySelector('quill-editor')
    const editor = quillEditor.querySelector('#editor')
    const editorValue = editor.querySelector('.ql-editor')
    const form = document.querySelector('form')
    const judul = document.getElementById('judul')
    const source = document.getElementById('source')
    const ringkasan = document.getElementById('ringkasan')
    const thumbnail = document.getElementById('thumbnail')

    if(token){ 
        const uid = JSON.parse(sessionStorage.getItem('user')).uid
        if(uid === data.author.uid){
            editorValue.innerHTML += data.body
            judul.value = data.judul
            source.value = data.source
            ringkasan.value = data.ringkasan
        }else{
            alertError('Something Error')
            setTimeout(() => {
                location.href = '#/article'
            }, 3000);
        }
    }else{
        alertError('Something Error')
        setTimeout(() => {
            location.href = '#/article'
        }, 3000);
    }

    editArtikelInitiator.init({form, judul, source, ringkasan, editorValue, thumbnail,id})

  },
};

export default AdminArticleEdit;
