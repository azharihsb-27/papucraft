import { getAllKelas } from '../../../utils/api';
import { setTitle } from '../../../utils/app-shell';
import deleteKelasInitiator from '../../../utils/delete-kelas-initiator';
const AdminCourse = {
  async render() {
    return `
			<div class="p-6 md:pl-72 md:pr-10">
				<h1 class="text-2xl py-2 font-semibold text-red-500">Daftar Kelas</h1>
				<a href="#/adminaddcourse" class="ml-auto my-auto rounded-lg px-2 py-1 bg-green-400 text-white hover:bg-transparent hover:border hover:border-2 hover:border-green-400 hover:text-black transition">Tambah Kelas</a>
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
									Alamat
								</th>
								<th class="p-3 text-sm font-semibol text-left border-2">
									Deskripsi
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
    const { data } = await getAllKelas();
	setTitle('Admin | List Kelas - PapuCraft')
    courseListContainer.innerHTML = data
      .map(({ id, nama_kelas, deskripsi, alamat }, index) => {
        return `
				<tr>
					<td class="border-2 p-2 whitespace-nowrap text-center">${index + 1}</td>
					<td class="border-2 p-2 whitespace-nowrap">
						<a href="#/admincoursedetail/${id}" class="hover:underline"
							>${nama_kelas}
						</a>
					</td>
					<td class="border-2 p-2">${alamat}</td>
					<td class="border-2 p-2">${deskripsi}</td>
					<td class="border-2 p-2 whitespace-nowrap text-center">
						<a
							href="#/admincourseedit/${id}"
							class="block w-full px-4 py-2 bg-sky-500 text-white rounded hover:bg-sky-600 duration-300"
								>Ubah
						</a>
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
	const btnDelete = document.querySelectorAll('#btn-delete')
	  deleteKelasInitiator.init({btnDelete})
  },
};

export default AdminCourse;
