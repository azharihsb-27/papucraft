import { getAllKelas } from '../../utils/api';

const Course = {
  async render() {
    return `
        <div class="container mx-auto p-4" id="course">

        <!-- Kelas Populer -->
        <article class="p-7 lg:p-14">
            <h2 class="text-xl font-semibold mb-2 pb-5 text-primary">Kelas Populer</h2>
            <div class="flex items-center bg-white shadow-lg rounded-lg p-4 mb-6">
                <div class="w-1/2 bg-gray-300 h-100 flex justify-center items-center overflow-hidden">
                    <img data-src="/img/bg.jpg" alt="Kelas Populer" class="lazyload object-cover h-full w-full"/>
                </div>
                <div class="w-2/3 px-10">
                    <h3 class="text-lg font-bold text-primary pb-2" >Nama Kelas</h3>
                    <p class="text-gray-600">Lorem ipsum dolor sit amet consectetur. Tempor nibh tortor mattis rutrum lobortis. Ut eleifend rhoncus natoque ipsum mattis. Non non est arcu purus vel elit pulvinar blandit lobortis.</p>
                    <button class="mt-4 px-4 py-2 bg-red-600 text-white font-semibold rounded hover:bg-primary_dark duration-300"><a href="#/course/:id">Lihat Selengkapnya</a></button>
                </div>
            </div>
        </article>

        <!-- Semua Kelas -->
        <article class="p-7 lg:p-14" >
            <h2 class="text-xl font-semibold mb-2 pb-5 text-primary">Semua Kelas</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="semuaKelas">
                <!-- Class Card -->
                
            </div>
        </article>
        </div>
    `;
  },

  async afterRender() {
    const container = document.getElementById('semuaKelas');
    const { data } = await getAllKelas();
    console.log(data);
    if (container) {
      container.innerHTML += data
        .map((kelas) => {
          return `
        <div class="bg-white shadow-lg rounded-lg overflow-hidden">
            <div class="bg-gray-300 h-54 flex justify-center items-center">
                <img data-src="${kelas.thumbnail}" alt="Kelas Populer" class="lazyload object-cover h-80 w-full"/>
            </div>
            <div class="p-4">
            <h3 class="text-lg font-bold text-primary pb-3">Kelas ${kelas.nama_kelas}</h3>
            <p class="text-gray-600">${kelas.deskripsi}</p>
            <button class="mt-4 px-4 py-2 bg-red-600 text-white font-semibold rounded hover:bg-primary_dark duration-300 w-full"><a href="#/course/:id">Lihat Selengkapnya</a></button>
            </div>
        </div>
            `;
        })
        .join('');
    }
  },
};

export default Course;
