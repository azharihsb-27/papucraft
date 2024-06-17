import { getAllKelas, getDetailKelas } from "../../utils/api";
import UrlParser from "../../routes/url-parser";
const DetailCourse = {
  async render() {
    return `
    <div class="container mx-auto p-6">
    <!-- Course Detail Section -->
     <article class="p-7 lg:p-14">
            <h2 class="text-xl font-semibold mb-2 pb-5 text-primary">Course Detail</h2>
            <div class="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg p-4 mb-6" id="kelasDetail">
            </div>
        </article>

    <!-- Other Classes Section -->
    <article class="mt-8" id="other">
   
    </article>
</div>
        `;
  },

  async afterRender() {
    const { id } = UrlParser.parseActiveUrlWithoutCombiner();
    const detail = document.getElementById("kelasDetail");
    const { data } = await getDetailKelas(id);
    const kelas = await getAllKelas();
    const other = document.getElementById("other");

    console.log(data);

    detail.innerHTML += `
    <div class="w-full md:w-1/2  h-full flex justify-center items-center overflow-hidden rounded-t-lg md:rounded-t-none md:rounded-l-lg">
    <img data-src="${data.thumbnail}" alt="Kelas Populer" class="lazyload object-cover h-full w-full"/>
    </div>
<div class="w-full md:w-1/2 p-4 md:px-10">
  <h3 class="text-lg font-bold text-primary pb-2" >${data.nama_kelas}</h3>
  <p class="text-lg pb-3"><strong class="text-primary">Alamat:</strong> ${data.alamat}</p>
  <p class="text-gray-600">${data.deskripsi}</p>
</div>
        `;

    other.innerHTML += `
        <div class="flex justify-between items-center">
          <h2 class="text-lg font-semibold text-primary">kelas Lainnya</h2>
          <a href="#/course/" class="text-red-600 hover:underline">Semua</a>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-4" id="cardDetail">
        </div>`;
    const cardDetail = document.getElementById("cardDetail");
    console.log(kelas.data);
    cardDetail.innerHTML += kelas.data
      .filter((kelas) => kelas.id !== id)
      .slice(0, kelas.length)
      .map((kelas) => {
        return `
              <div class="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img data-src="${kelas.thumbnail}" alt="Kelas Populer" class="lazyload object-cover w-full h-4/6"/>
                  <div class="p-4">
                      <h3 class="font-semibold text-primary"><a href="#/course/${kelas.id}">${kelas.nama_kelas}</a></h3>
                  </div>
              </div>
            `;
      })
      .join("");
  },
};
export default DetailCourse;
