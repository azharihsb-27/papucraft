import { getAllKebudayaan } from "../../../utils/api";

const AdminGallery = {
  async render() {
    return `
			<div class="p-6 pt-24 md:pt-32 md:pl-72 md:pr-10">
				<h1 class="text-2xl py-2 font-semibold text-red-500">Daftar Galeri</h1>
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
						<tbody id="gallery-list"></tbody>
					</table>
				</div>
			</div>
		`;
  },
  async afterRender() {
		const galleryListContainer = document.getElementById('gallery-list');
		const { data } = await getAllKebudayaan();
		galleryListContainer.innerHTML = data.map(({nama, asal_daerah, kategori}, index) => {
			return `
				<tr>
					<td class="border-2 p-2 whitespace-nowrap w-10 text-center">${index + 1}</td>
					<td class="border-2 p-2 whitespace-nowrap">
						<a href="#/dashboard/gallery/gallery-detail/:id" class="hover:underline"
							>${nama}</a
						>
					</td>
					<td class="border-2 p-2 whitespace-nowrap">${asal_daerah}</td>
					<td class="border-2 p-2 whitespace-nowrap">${kategori}</td>
					<td class="border-2 p-2 whitespace-nowrap text-center">
						<a
							href="#/dashboard/gallery/gallery-edit/:id"
							class="block w-full px-4 py-2 bg-sky-500 text-white rounded hover:bg-sky-600 duration-300"
							>Ubah</a
						>
					</td>
				</tr>
			`
		}).join('');
	},
};

export default AdminGallery;
