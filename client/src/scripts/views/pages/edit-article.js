import UrlParser from '../../routes/url-parser';
import { getDetailArtikel } from '../../utils/api';
import { token } from '../../utils/session-check';
import { alertError } from '../../utils/show-alert';
import editArtikelInitiator from '../../utils/edit-artikel-initiator';

const EditArticle = {
  async render() {
    return `
            <div class="content p-7 lg:p-14">
              <h2 class="text-primary text-xl lg:text-2xl font-medium">Ubah Artikel</h2>
              <form class="mt-2 flex flex-col gap-3" method="put">
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
                    <input type="file" name="thumbnail" id="thumbnail" class="border-2 border-primary outline-none px-2 py-1"/>
                    <p class="text-sm text-yellow-500 -mt-1">Isi bila thumbnail lama ingin diganti!</p>
                </div>
                <button type="submit" class="w-[40%] ml-auto gap-2 md:w-[20%] rounded-md hover:bg-white bg-primary text-white hover:text-primary border border-1 border-slate-800 p-2 transition">Ubah Artikel</button>
              </form>
            </div>
        `;
  },
  async afterRender() {
    const { id } = UrlParser.parseActiveUrlWithoutCombiner();
    const { data } = await getDetailArtikel(id);
    const quillEditor = document.querySelector('quill-editor');
    const editor = quillEditor.querySelector('#editor');
    const editorValue = editor.querySelector('.ql-editor');
    const form = document.querySelector('form');
    const judul = document.getElementById('judul');
    const source = document.getElementById('source');
    const ringkasan = document.getElementById('ringkasan');
    const thumbnail = document.getElementById('thumbnail');

    if (token) {
      const uid = JSON.parse(sessionStorage.getItem('user')).uid;
      if (uid === data.author.uid) {
        editorValue.innerHTML += data.body;
        judul.value = data.judul;
        source.value = data.source;
        ringkasan.value = data.ringkasan;
      } else {
        alertError('Something Error');
        setTimeout(() => {
          location.href = '#/article';
        }, 3000);
      }
    } else {
      alertError('Something Error');
      setTimeout(() => {
        location.href = '#/article';
      }, 3000);
    }

    editArtikelInitiator.init({
      form,
      judul,
      source,
      ringkasan,
      editorValue,
      thumbnail,
      id,
    });
  },
};

export default EditArticle;
