import { getAllKelas } from '../../utils/api';
import { setTitle } from '../../utils/app-shell';
import {
  allClassSkeleton,
  popularClassSkeleton,
} from '../templates/template-skeleton';

const Course = {
  async render() {
    return `
        <div class="container mx-auto p-4" id="course">

        <!-- Kelas Populer -->
        <article class="p-7 lg:p-14">
            <h2 class="text-xl font-semibold mb-2 pb-5 text-primary">Kelas Populer</h2>
            <div class="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg p-4 mb-6 gap-6" id="kelas-populer">
              ${popularClassSkeleton(1)}
            </div>
        </article>

        <!-- Semua Kelas -->
        <article class="p-7 lg:p-14" >
            <h2 class="text-xl font-semibold mb-2 pb-5 text-primary">Semua Kelas</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="semuaKelas">
                <!-- Class Card -->
                ${allClassSkeleton(3)}
            </div>
        </article>
        </div>
    `;
  },

  async afterRender() {
    setTitle('Course - PapuCraft');
    const container = document.getElementById('semuaKelas');
    const populer = document.getElementById('kelas-populer');
    const { data } = await getAllKelas();
    const kelasPopuler = data.sort((a, b) => {
      return b.views - a.views;
    });
    const getKelasPopuler = kelasPopuler.slice(0, 1);
    if (populer) {
      populer.innerHTML = getKelasPopuler.map((kelas) => {
        return `
      <div class="w-full md:w-1/2  h-64 flex justify-center items-center overflow-hidden rounded-t-lg md:rounded-t-none md:rounded-l-lg">
        <img data-src="${kelas.thumbnail}" alt="Kelas Populer" class="lazyload object-cover h-full w-2/4"/>
        </div>
    <div class="w-full md:w-1/2 p-4 md:px-10">
      <h3 class="text-lg font-bold text-primary pb-2" >${kelas.nama_kelas}</h3>
      <p class="text-gray-600">${kelas.deskripsi}</p>
      <button class="mt-4 px-4 py-2 bg-red-600 text-white font-semibold rounded hover:bg-primary_dark duration-300"><a href="#/course/${kelas.id}">Lihat Selengkapnya</a></button>
  </div>
      `;
      });
    }
    if (container) {
      container.innerHTML = data
        .map((kelas) => {
          return `
        <div class="bg-white shadow-lg rounded-lg overflow-hidden">

            <div class="h-54 flex justify-center items-center">
                <img data-src="${kelas.thumbnail}" alt="Kelas Populer" class="lazyload object-cover h-80 w-full"/>
            </div>
            <div class="p-4">
            <h3 class="text-lg font-bold text-primary pb-3">Kelas ${kelas.nama_kelas}</h3>
            <p class="text-gray-600">${kelas.deskripsi}</p>
            <button class="mt-4 px-4 py-2 bg-red-600 text-white font-semibold rounded hover:bg-primary_dark duration-300 w-full"><a href="#/course/${kelas.id}">Lihat Selengkapnya</a></button>
            </div>
        </div>
        `;
        })
        .join('');
    }
  },
};

export default Course;
