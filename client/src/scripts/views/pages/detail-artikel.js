import UrlParser from '../../routes/url-parser';
import { getDetailArtikel } from '../../utils/api';
import { setTitle } from '../../utils/app-shell';
import { token } from '../../utils/session-check';
import { alertError } from '../../utils/show-alert';

const DetailArticle = {
  async render() {
    return `
        <div class="content p-7 lg:p-14" id="detail">
            <p class="text-xl lg:text-2xl font-medium text-primary">Detail Artikel</p>
           
        </div>
        `;
  },
  async afterRender() {
    const { id } = UrlParser.parseActiveUrlWithoutCombiner();
    let uid;
    if (token) {
      uid = JSON.parse(sessionStorage.getItem('user')).uid;
    }
    const { success, data, message } = await getDetailArtikel(id);
    const wrapper = document.querySelector('div#detail');
    if (!success) {
      alertError(message);
    } else {
      setTitle(`${data.judul} - PapuCraft`)
      wrapper.innerHTML += `
            <article class="mx-auto mt-5 mb-2 flex flex-col w-[90%] h-full">
                <div class="flex flex-col gap-2 h-[20%]">
                    <img data-src="${
                      data.thumbnail
                    }" class="lazyload md:max-h-96 object-contain rounded-lg" id="">
                    <div class="flex mt-2 gap-2 items-center">
                        <h3 class="font-bold">${
                          data.author.username
                        }</h3> - <p class="text-sm">23/12/2021</p>
                        <a class="ml-auto flex items-center gap-1 text-sm hover:text-blue-500 cursor-pointer" href="${
                          data.source
                        }">
                        ${
                          data.author.uid === uid
                            ? `
                            <a href="#/editarticle/${data.id}" class="px-2 py-1 ml-1 bg-green-400 hover:border-2 hover:border-green-400 text-white hover:text-black rounded-lg hover:bg-transparent cursor-pointer transition">Edit Artikel</a>
                            `
                            : ''
                        }
                          
                          <span class="">source</span>
                          <span class="material-symbols-outlined">Public</span>
                        </a>
                    </div>
                </div>
                <h3 class="text-2xl my-2 font-bold">${data.judul}</h3>
                <div id="body">
                </div>
            </article>
            `;
      const body = document.querySelector('div#body');
      const shadowBody = body.attachShadow({ mode: 'open' });
      shadowBody.innerHTML += data.body;
    }
  },
};
export default DetailArticle;
