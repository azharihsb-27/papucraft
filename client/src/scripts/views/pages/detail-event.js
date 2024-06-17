import UrlParser from '../../routes/url-parser';
import { getDetailEvent } from '../../utils/api';
import { setTitle } from '../../utils/app-shell';
import { token } from '../../utils/session-check';
import { alertError } from '../../utils/show-alert';

const DetailEvent = {
  async render() {
    return `
        <div class="content p-7 lg:p-14" id="detail">
            <p class="text-xl lg:text-2xl font-medium text-primary">Detail Acara</p>
            <div class="mt-2 w-full flex flex-col md:flex-row gap-3 shadow-xl p-2 rounded-lg" id="wrapper">
            </div>
        </div>
        `;
  },
  async afterRender() {
    const { id } = UrlParser.parseActiveUrlWithoutCombiner();
    const wrapper = document.getElementById('wrapper');
    let uid;
    if (token) {
      uid = JSON.parse(sessionStorage.getItem('user')).uid;
    }
    const { success, data, message } = await getDetailEvent(id);
    if (!success) {
      alertError(message);
    } else {
      setTitle(`${data.nama} - PapuCraft`)
      wrapper.innerHTML += `
            <div class="w-full flex md:w-1/2 p-2 mt-1">
                <img data-src=${
                  data.thumbnail
                } class="lazyload w-full rounded-md h-80 object-cover">
            </div>
            <div class="w-full md:w-1/2 flex flex-col mt-1 gap-3 py-2 px-3 md:py-[2rem]">
                <h3 class="font-semibold text-lg">${data.nama}</h3>
                
                <span class="text-sm text-black/70 -mb-1">Tanggal Acara</span>
                <div class="w-full flex gap-5">
                    <span class="material-symbols-outlined mr-5">
                    calendar_month 
                    </span>
                    <span>${data.tanggal_selesai}</span>-<span>${
        data.tanggal_mulai
      }</span>
                </div>
                <span class="text-sm text-black/70 -mb-1">Lokasi</span>
                <div class="w-full flex flex-col md:flex-row shadow-md gap-3 p-2 rounded-lg">
                    <div class="w-full md:w-[80%] flex justify-center gap-2 items-center">
                        <span class="material-symbols-outlined">
                        location_on
                        </span>
                        <p class="font-medium">${data.lokasi}</p>
                    </div>
                    <button class="px-2 py-1 mx-auto md:mx-0 bg-primary rounded-lg min-h-[44px] min-w-[44px] text-white hover:text-black hover:bg-transparent hover:border hover:border-1 hover:border-primary" cursor-pointer transition>Lihat Map</button>
                </div>
                <span class="text-sm text-black/70 -mb-1">Deskripsi Acara</span>
                <p class="text-justify">${data.deskripsi}</p>
                
                ${
                  data.author.uid === uid
                    ? `
                <a href="#/editevent/${data.id}" class="flex items-center justify-center px-2 py-1 bg-green-400 rounded-lg min-h-[44px] min-w-[44px] text-white hover:text-black hover:bg-transparent hover:border hover:border-1 hover:border-green-400" cursor-pointer transition">
                    Ubah
                </a>
                `
                    : ''
                }
            </div>
            `;
    }
  },
};
export default DetailEvent;
