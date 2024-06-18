import { getAllKebudayaan } from '../../../utils/api';
import { setTitle } from '../../../utils/app-shell';
import deleteKebudayaanInitiator from '../../../utils/delete-kebudayaan-initiator';
import { galleryAdminTableSkeleton } from '../../templates/template-skeleton';

const AdminGallery = {
  async render() {
    return `
			<div class="p-6 md:pl-72 md:pr-10">
				<h2 class="text-2xl py-2 font-semibold text-red-500">Daftar Galeri</h2>
				<a href="#/adminaddkebudayaan" class="ml-auto my-auto rounded-lg px-2 py-1 bg-green-400 text-white hover:bg-transparent hover:border-2 hover:border-green-400 hover:text-black transition">Tambah Kebudayaan</a>
				<div class="mt-8 overflow-auto rounded-lg shadow">
				<table class="w-full">
						<thead class="bg-gray-50 border-2">
							<tr>
								<th class="w-10 p-3 text-sm font-semibol text-center border-2">
									No.
								</th>
								<th class="p-3 text-sm font-semibol text-left border-2">Nama</th>
								<th class="p-3 text-sm font-semibol text-left border-2">Asal</th>
								<th class="p-3 text-sm font-semibol text-left border-2">
									Kategori
								</th>
								<th class="p-3 text-sm font-semibol text-center border-2">
									Aksi
								</th>
							</tr>
						</thead>
						<tbody id="gallery-list">
							${galleryAdminTableSkeleton(6)}
						</tbody>
					</table>
				</div>
			</div>
		`;
  },
  async afterRender() {
    setTitle('Admin | Gallery Kebudayaan - PapuCraft');
    const galleryListContainer = document.getElementById('gallery-list');
    const { data } = await getAllKebudayaan();
    galleryListContainer.innerHTML = data
      .map(({ id, nama, asal_daerah, kategori }, index) => {
        return `
				<tr>
					<td class="border-2 p-2 whitespace-nowrap text-center">${index + 1}</td>
					<td class="border-2 p-2 whitespace-nowrap">
						<a href="#/admingallerydetail/${id}" class="hover:underline"
							>${nama}</a
						>
					</td>
					<td class="border-2 p-2 whitespace-nowrap">${asal_daerah}</td>
					<td class="border-2 p-2 whitespace-nowrap">${kategori}</td>
					<td class="border-2 p-2 whitespace-nowrap text-center gap-2">
						<a
							href="#/admingalleryedit/${id}"
							class="block w-full px-4 my-1 py-2 bg-sky-500 text-white rounded hover:bg-sky-600 duration-300"
							>Ubah</a
						>
						<button
								id="btn-delete"
								class="block w-full px-4 my-1 py-2 bg-primary text-white rounded hover:bg-red-700 duration-300 cursor-pointer"
								data-id=${id}
								>Hapus</button
						>
					</td>
				</tr>
			`;
      })
      .join('');
    const btnDelete = document.querySelectorAll('#btn-delete');
    deleteKebudayaanInitiator.init({ btnDelete });
  },
};

export default AdminGallery;
