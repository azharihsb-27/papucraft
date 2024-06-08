import UrlParser from "../../routes/url-parser";
import { getDetailArtikel } from "../../utils/api";
import { alertError } from "../../utils/show-alert";
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
    const { success, data, message } = await getDetailArtikel(id);
    const wrapper = document.querySelector("div#detail");
    console.log(id);
    if (!success) {
      alertError(message);
    } else {
      wrapper.innerHTML += `
            <article class="mx-auto mt-5 mb-2 flex flex-col w-[90%] h-full">
                <div class="flex flex-col gap-2 h-[20%]">
                    <img src="${
                      data.thumbnail
                    }" class="md:max-h-[5%] rounded-lg" id="">
                    <div class="flex mt-2 gap-2 items-center">
                        <h3 class="font-bold">${
                          data.source ? "Internet" : data.username
                        }</h3> - <p class="text-sm">23/12/2021</p>
                        <a class="ml-auto flex items-center gap-1 text-sm hover:text-blue-500 cursor-pointer" href="${
                          data.source
                        }">
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
      const body = document.querySelector("div#body");
      const shadowBody = body.attachShadow({ mode: "open" });
      shadowBody.innerHTML += data.body;
    }
  },
};
export default DetailArticle;
