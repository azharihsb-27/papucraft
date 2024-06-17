import { getAnalytic } from '../../../utils/api';
import {setTitle} from '../../../utils/app-shell'

const AdminDashboard = {
  async render() {
    return `
      <div class="p-6 md:pl-72 md:pr-10">
				<h1 class="text-2xl py-2 font-semibold text-red-500">Menu Utama</h1>
				<div class="mt-8 grid md:grid-cols-3 gap-6 md:gap-10">
					<div
						class="flex flex-col gap-4 bg-gray-100 p-4 rounded-lg shadow-md hover:bg-gray-200"
					>
						<div class="flex items-center gap-4 text-red-500">
							<i class="fas fa-eye"></i>
							<a class="font-semibold">Pengunjung</a>
						</div>
						<div class="flex justify-between items-center">
							<p class="text-gray-500 font-semibold">Jumlah Pengunjung :</p>
							<span class="text-4xl font-bold text-red-500" id="jml-views">-</span>
						</div>
					</div>
					<div
						class="flex flex-col gap-4 bg-gray-100 p-4 rounded-lg shadow-md hover:bg-gray-200"
					>
						<div class="flex items-center gap-4 text-red-500">
							<i class="fas fa-user"></i>
							<a href="#/adminuser" class="font-semibold">Pengguna</a>
						</div>
						<div class="flex justify-between items-center">
							<p class="text-gray-500 font-semibold">Jumlah Pengguna :</p>
							<span class="text-4xl font-bold text-red-500" id="jml-user">-</span>
						</div>
					</div>
					<div
						class="flex flex-col gap-4 bg-gray-100 p-4 rounded-lg shadow-md hover:bg-gray-200"
					>
						<div class="flex items-center gap-4 text-red-500">
							<i class="fas fa-camera"></i>
							<a href="#/admingallery" class="font-semibold">Galeri</a>
						</div>
						<div class="flex justify-between items-center">
							<p class="text-gray-500 font-semibold">Jumlah Galeri :</p>
							<span class="text-4xl font-bold text-red-500" id="jml-galeri">-</span>
						</div>
					</div>
					<div
						class="flex flex-col gap-4 bg-gray-100 p-4 rounded-lg shadow-md hover:bg-gray-200"
					>
						<div class="flex items-center gap-4 text-red-500">
							<i class="fas fa-book-open"></i>
							<a href="#/adminarticle" class="font-semibold">Artikel</a>
						</div>
						<div class="flex justify-between items-center">
							<p class="text-gray-500 font-semibold">Jumlah Artikel :</p>
							<span class="text-4xl font-bold text-red-500" id="jml-artikel">-</span>
						</div>
					</div>
					<div
						class="flex flex-col gap-4 bg-gray-100 p-4 rounded-lg shadow-md hover:bg-gray-200"
					>
						<div class="flex items-center gap-4 text-red-500">
							<i class="fas fa-calendar-week"></i>
							<a href="#/adminevent" class="font-semibold">Acara</a>
						</div>
						<div class="flex justify-between items-center">
							<p class="text-gray-500 font-semibold">Jumlah Acara :</p>
							<span class="text-4xl font-bold text-red-500" id="jml-acara">-</span>
						</div>
					</div>
					<div
						class="flex flex-col gap-4 bg-gray-100 p-4 rounded-lg shadow-md hover:bg-gray-200"
					>
						<div class="flex items-center gap-4 text-red-500">
							<i class="fas fa-chalkboard"></i>
							<a href="#/admincourse" class="font-semibold">Kelas</a>
						</div>
						<div class="flex justify-between items-center">
							<p class="text-gray-500 font-semibold">Jumlah Kelas :</p>
							<span class="text-4xl font-bold text-red-500" id="jml-kelas">-</span>
						</div>
					</div>
				</div>
			</div>
    `;
  },

  async afterRender() {
	setTitle('Dashboard Admin - PapuCraft')
    const jmlViews = document.getElementById('jml-views');
    const jmlUser = document.getElementById('jml-user');
    const jmlGallery = document.getElementById('jml-galeri');
    const jmlArtikel = document.getElementById('jml-artikel');
    const jmlAcara = document.getElementById('jml-acara');
    const jmlKelas = document.getElementById('jml-kelas');

    const { data } = await getAnalytic();
    jmlViews.textContent = data.views;
    jmlUser.textContent = data.user;
    jmlGallery.textContent = data.kebudayaan;
    jmlAcara.textContent = data.event;
    jmlArtikel.textContent = data.artikel;
    jmlKelas.textContent = data.kelas;
  },
};

export default AdminDashboard;
