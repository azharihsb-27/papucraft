import { getAllEvent } from '../../../utils/api';

const AdminEvent = {
  async render() {
    return `
        <div class="p-6 pt-24 md:pt-32 md:pl-72 md:pr-10">
					<h1 class="text-2xl py-2 font-semibold text-red-500">Daftar Acara</h1>
					<div class="mt-8 overflow-auto rounded-lg shadow">
						<table class="w-full">
							<thead class="bg-gray-50 border-2">
								<tr>
									<th class="w-10 p-3 text-sm font-semibol text-center border-2">
										No.
									</th>
									<th class="p-3 text-sm font-semibol text-left border-2">Nama</th>
									<th class="p-3 text-sm font-semibol text-left border-2">Lokasi</th>
									<th class="p-3 text-sm font-semibol text-left border-2">Tanggal mulai</th>
									<th class="p-3 text-sm font-semibol text-left border-2">Tanggal selesai</th>
									<th class="p-3 text-sm font-semibol text-center border-2">Aksi</th>
								</tr>
							</thead>
							<tbody id="event-list"></tbody>
						</table>
					</div>
        </div>
      `;
  },

  async afterRender() {
    const eventListContainer = document.querySelector('#event-list');
    const { data } = await getAllEvent();
    console.log(data);

    eventListContainer.innerHTML = data
      .map(({ id, nama, lokasi, tanggal_mulai, tanggal_selesai }, index) => {
        return `
				<tr>
					<td class="border-2 p-2 whitespace-nowrap text-center">${index + 1}</td>
					<td class="border-2 p-2 whitespace-nowrap">
						<a href="#/admineventdetail/${id}" class="hover:underline"
							>${nama}</a
						>
					</td>
					<td class="border-2 p-2 whitespace-nowrap">${lokasi}</td>
					<td class="border-2 p-2 whitespace-nowrap">${tanggal_mulai}</td>
					<td class="border-2 p-2 whitespace-nowrap">${tanggal_selesai}</td>
					<td class="border-2 p-2 whitespace-nowrap text-center">
						<a
							href="#/admineventedit/${id}"
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

export default AdminEvent;
