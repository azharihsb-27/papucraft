import { getAllArtikel } from '../../../utils/api';

const AdminArticle = {
  async render() {
    return `
      <div class="p-6 md:pl-72 md:pr-10">
        <h1 class="text-2xl py-2 font-semibold text-red-500">Daftar Artikel</h1>
				<div class="mt-8 overflow-auto rounded-lg shadow">
					<table class="w-full">
						<thead class="bg-gray-50 border-2">
							<tr>
								<th class="w-10 p-3 text-sm font-semibol text-center border-2">
									No.
								</th>
								<th class="p-3 text-sm font-semibol text-left border-2">
									Judul
								</th>
								<th class="p-3 text-sm font-semibol text-left border-2">
									Ringkasan
								</th>
								<th class="p-3 text-sm font-semibol text-center border-2">
									Aksi
								</th>
							</tr>
						</thead>
						<tbody id="article-list"></tbody>
					</table>
				</div>
      </div>
    `;
  },

  async afterRender() {
    const articleListContainer = document.getElementById('article-list');
    const { data } = await getAllArtikel();
    articleListContainer.innerHTML = data
      .map(({ id, judul, ringkasan }, index) => {
        return `
				<tr>
					<td class="border-2 p-2 whitespace-nowrap text-center">${index + 1}</td>
					<td class="border-2 p-2">
						<a href="#/adminarticledetail/${id}" class="hover:underline"
							>${judul}</a
						>
					</td>
					<td class="border-2 p-2">
						${ringkasan}
					</td>
					<td class="border-2 p-2 whitespace-nowrap text-center">
						<a
							href="#/adminarticleedit/${id}"
							class="block w-full px-4 py-2 bg-sky-500 text-white rounded hover:bg-sky-600 duration-300"
							>Ubah</a
						>
						<a
							class="block w-full px-4 my-1 py-2 bg-primary text-white rounded hover:bg-red-700 duration-300"
							>Hapus</a
						>
					</td>
				</tr>
			`;
      })
      .join('');
  },
};

export default AdminArticle;
