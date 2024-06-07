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
									<th class="p-3 text-sm font-semibol text-left border-2">
										Jadwal
									</th>
									<th class="p-3 text-sm font-semibol text-left border-2">
										Kategori
									</th>
									<th class="p-3 text-sm font-semibol text-center border-2">
										Aksi
									</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td class="border-2 p-2 whitespace-nowrap w-10 text-center">1</td>
									<td class="border-2 p-2 whitespace-nowrap">
										<a href="#/dashboard/event/event-detail/:id" class="hover:underline"
											>Tari Soanggi</a
										>
									</td>
									<td class="border-2 p-2 whitespace-nowrap">Kabupaten Waropen</td>
									<td class="border-2 p-2 whitespace-nowrap">Tarian</td>
									<td class="border-2 p-2 whitespace-nowrap text-center">
										<a
											href="#/dashboard/event/event-edit/:id"
											class="block w-full px-4 py-2 bg-sky-500 text-white rounded hover:bg-sky-600 duration-300"
											>Ubah</a
										>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
        </div>
      `;
  },

  async afterRender() {},
};

export default AdminEvent;
