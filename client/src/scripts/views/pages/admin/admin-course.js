import { getAllKelas } from "../../../utils/api";

const AdminCourse = {
  async render() {
    return `
			<div class="p-6 pt-24 md:pt-32 md:pl-72 md:pr-10">
				<h1 class="text-2xl py-2 font-semibold text-red-500">Daftar Kelas</h1>
				<div class="mt-8 overflow-auto rounded-lg shadow">
					<table class="w-full">
						<thead class="bg-gray-50 border-2">
							<tr>
								<th class="w-10 p-3 text-sm font-semibol text-center border-2">
									No.
								</th>
								<th class="p-3 text-sm font-semibol text-left border-2">
									Nama kelas
								</th>
								<th class="p-3 text-sm font-semibol text-left border-2">
									Deskripsi
								</th>
								<th class="p-3 text-sm font-semibol text-left border-2">
									Alamat
								</th>
								<th class="p-3 text-sm font-semibol text-center border-2">
									Aksi
								</th>
							</tr>
						</thead>
						<tbody id="course-list"></tbody>
					</table>
				</div>
			</div>
    `;
  },

  async afterRender() {
		const courseListContainer = document.getElementById('course-list');
		const { data } = await getAllKelas()
		console.log(data)
		courseListContainer.innerHTML = data.map(({nama_kelas, deskripsi, alamat}, index) => {
			return `
				<tr>
					<td class="border-2 p-2 whitespace-nowrap w-10 text-center">${index + 1}</td>
					<td class="border-2 p-2 whitespace-nowrap">
						<a href="#/dashboard/course/course-detail/:id" class="hover:underline"
							>${nama_kelas}
						</a>
					</td>
					<td class="border-2 p-2">${deskripsi}</td>
					<td class="border-2 p-2">${alamat}</td>
					<td class="border-2 p-2 whitespace-nowrap text-center">
						<a
							href="#/dashboard/course/course-edit/:id"
							class="block w-full px-4 py-2 bg-sky-500 text-white rounded hover:bg-sky-600 duration-300"
								>Ubah
						</a>
					</td>
				</tr>
			`
		}).join('')
	},
};

export default AdminCourse;
