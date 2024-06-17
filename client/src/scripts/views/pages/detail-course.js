import { getDetailKelas } from '../../utils/api';
import UrlParser from '../../routes/url-parser';
import { setTitle } from '../../utils/app-shell';

const DetailCourse = {
  async render() {
    return `
    <div class="container mx-auto p-6">
    <!-- Course Detail Section -->
    <div class="bg-white p-6 rounded-lg shadow-lg">
        <h2 class="text-2xl font-semibold mb-4">Course Detail</h2>
        <div class="flex flex-col lg:flex-row items-center lg:items-start" id="kelasDetail">

        </div>
    </div>

    <!-- Other Classes Section -->
    <div class="mt-8">
        <h3 class="text-xl font-semibold mb-4">Kelas Lainnya</h3>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div class="bg-white p-4 rounded-lg shadow-lg">
                <img class="w-full rounded-lg mb-2" src="path/to/your/other/image1.jpg" alt="Nama Kelas">
                <p class="text-center">Nama Kelas</p>
            </div>
            <div class="bg-white p-4 rounded-lg shadow-lg">
                <img class="w-full rounded-lg mb-2" src="path/to/your/other/image2.jpg" alt="Nama Kelas">
                <p class="text-center">Nama Kelas</p>
            </div>
            <div class="bg-white p-4 rounded-lg shadow-lg">
                <img class="w-full rounded-lg mb-2" src="path/to/your/other/image3.jpg" alt="Nama Kelas">
                <p class="text-center">Nama Kelas</p>
            </div>
            <div class="bg-white p-4 rounded-lg shadow-lg">
                <img class="w-full rounded-lg mb-2" src="path/to/your/other/image4.jpg" alt="Nama Kelas">
                <p class="text-center">Nama Kelas</p>
            </div>
        </div>
        <div class="text-right mt-4">
            <a href="#" class="text-blue-500">Semua</a>
        </div>
    </div>
</div>
        `;
  },

  async afterRender() {
    const { id } = UrlParser.parseActiveUrlWithoutCombiner();
    const detail = document.getElementById('kelasDetail');
    const { data } = await getDetailKelas(id);
    setTitle(`${data.nama_kelas} - PapuCraft`)

    detail.innerHTML += `
        <img class="w-2/4 lg:w-1/2 rounded-lg mb-4 lg:mb-0 lg:mr-4" src="${data.thumbnail}" alt="Nama Kelas">
            <div>
                <h3 class="text-xl font-bold">${data.nama_kelas}</h3>
                <p><strong>Alamat:</strong> ${data.alamat}</p>
                <p class="mt-2 text-gray-600">${data.deskripsi}</p>
            </div>
        `;
  },
};
export default DetailCourse;
