import UrlParser from "../../routes/url-parser";
import { getDetailKebudayaan, getAllKebudayaan } from "../../utils/api";
import { alertError } from "../../utils/show-alert";

const DetailGallery = {
  async render() {
    return `
    <div class="container mx-auto p-4" id="detail">
        
    </div>
    `;
  },
  async afterRender() {
    const { id } = UrlParser.parseActiveUrlWithoutCombiner();
    const { success, data, message } = await getDetailKebudayaan(id);
    const kebudayaan = await getAllKebudayaan();

    console.log(kebudayaan.data);
    const wrapper = document.querySelector("div#detail");
    const tarian = kebudayaan.data.filter((tari) => tari.kategori === "Tarian");
    const musik = kebudayaan.data.filter(
      (musik) => musik.kategori === "Alat Musik"
    );
    const makanan = kebudayaan.data.filter(
      (makanan) => makanan.kategori === "Makanan"
    );
    console.log(tarian);
    if (!success) {
      alertError(message);
    } else {
      wrapper.innerHTML += `
        <article>
            <h1 class="text-2xl font-bold text-red-600">Galery Detail</h1>
            <div class="mt-4">
            <img src="${data.thumbnail}" alt="Kelas Populer" class="object-cover h-full w-full"/>
                <h2 class="mt-4 text-xl font-semibold text-primary">${data.nama}</h2>
                <p class="text-gray-500">${data.asal_daerah}</p>
                <h3 class="mt-4 text-lg font-bold text-red-600">Deskripsi</h3>
                <p class="mt-2 text-gray-600">${data.deskripsi}</p>
            </div>
        </article>
        <article class="mt-8" id="other">
        </article
        `;
    }
    const other = document.getElementById("other");
    if (data.kategori == "Tarian") {
      other.innerHTML += `
      <div class="flex justify-between items-center">
        <h2 class="text-lg font-semibold text-primary">Tarian Lainnya</h2>
        <a href="#/gallery/" class="text-red-600 hover:underline">Semua</a>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-4" id="cardDetail">
      </div>`;
      const cardDetail = document.getElementById("cardDetail");
      cardDetail.innerHTML += tarian
        .filter((tarian) => tarian.id !== id)
        .slice(0, 4)
        .map((tarian) => {
          return `
            <div class="bg-white rounded-lg shadow-lg overflow-hidden">
                <img src="${tarian.thumbnail}" alt="Kelas Populer" class="object-cover w-full h-4/6"/>
                <div class="p-4">
                    <h3 class="font-semibold text-primary"><a href="#/gallery/${tarian.id}">${tarian.nama}</a></h3>
                </div>
            </div>
          `;
        })
        .join("");
    } else if (data.kategori === "Alat Musik") {
      other.innerHTML += `
      <div class="flex justify-between items-center">
        <h2 class="text-lg font-semibold text-primary">Musik Lainnya</h2>
        <a href="#/gallery/" class="text-red-600 hover:underline">Semua</a>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-4" id="cardDetail">
      </div>`;
      const cardDetail = document.getElementById("cardDetail");
      cardDetail.innerHTML += musik
        .filter((musik) => musik.id !== id)
        .slice(0, 4)
        .map((musik) => {
          return `
            <div class="bg-white rounded-lg shadow-lg overflow-hidden">
                <img src="${musik.thumbnail}" alt="Kelas Populer" class="object-cover w-full h-4/6"/>
                <div class="p-4">
                    <h3 class="font-semibold text-primary"><a href="#/gallery/${musik.id}">${musik.nama}</a></h3>
                </div>
            </div>
          `;
        })
        .join("");
    } else {
      other.innerHTML += `
      <div class="flex justify-between items-center">
        <h2 class="text-lg font-semibold text-primary">Makanan Lainnya</h2>
        <a href="#/gallery/" class="text-red-600 hover:underline">Semua</a>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-4" id="cardDetail">
      </div>`;
      const cardDetail = document.getElementById("cardDetail");
      cardDetail.innerHTML += makanan
        .filter((makanan) => makanan.id !== id)
        .slice(0, 4)
        .map((makanan) => {
          return `
            <div class="bg-white rounded-lg shadow-lg overflow-hidden">
                <img src="${makanan.thumbnail}" alt="Kelas Populer" class="object-cover w-full h-4/6"/>
                <div class="p-4">
                    <h3 class="font-semibold text-primary"><a href="#/gallery/${makanan.id}">${makanan.nama}</a></h3>
                </div>
            </div>
          `;
        })
        .join("");
    }
  },
};
export default DetailGallery;
