import { getAllUser } from '../../../utils/api';
import { setTitle } from '../../../utils/app-shell';
import deleteUserInitiator from '../../../utils/delete-user-initiator';

const AdminUser = {
  async render() {
    return `
			<div class="p-6 pt-24 md:pt-32 md:pl-72 md:pr-10">
				<h1 class="text-2xl py-2 font-semibold text-red-500">Daftar Pengguna</h1>
				<div class="mt-8 overflow-auto rounded-lg shadow">
					<table class="w-full">
						<thead class="bg-gray-50 border-2">
							<tr>
								<th class="w-10 p-3 text-sm font-semibol text-center border-2">
									No.
								</th>
								<th class="p-3 text-sm font-semibol text-left border-2">Email</th>
								<th class="p-3 text-sm font-semibol text-left border-2">Created At</th>
								<th class="p-3 text-sm font-semibol text-left border-2">Last Login</th>
								<th class="p-3 text-sm font-semibol text-center border-2">
									Aksi
								</th>
							</tr>
						</thead>
						<tbody id="user-list"></tbody>
					</table>
				</div>
			</div>
		`;
  },

  async afterRender() {
	setTitle('Admin | List User - PapuCraft')
    const userListContainer = document.querySelector('#user-list');
    const { data } = await getAllUser();
	const RENDER_EVENT = 'render'

	document.addEventListener(RENDER_EVENT, ()=>{
		userListContainer.innerHTML = data
		  .map(({ email, createdAt, lastLogin, uid }, index) => {
			return `
				<tr>
					<td class="border-2 p-2 whitespace-nowrap text-center">${index + 1}</td>
					<td class="border-2 p-2 whitespace-nowrap">${email}</td>
					<td class="border-2 p-2 whitespace-nowrap">${new Date(createdAt).toLocaleString('id-ID')}</td>
					<td class="border-2 p-2 whitespace-nowrap">${new Date(lastLogin).toLocaleString('id-ID')}</td>
					<td class="border-2 p-2 whitespace-nowrap text-center">
						<a
							href="#"
							class="block w-full px-4 py-2 bg-sky-500 text-white rounded hover:bg-sky-600 duration-300"
							>Ubah</a
						>
						<button
								id="btn-delete"
								class="block w-full px-4 my-1 py-2 bg-primary text-white rounded hover:bg-red-700 duration-300 cursor-pointer"
								data-uid=${uid}
								>Hapus</button
							>
					</td>
				</tr>
			`;
		  })
		  .join('');
	})


	const btnDelete = document.querySelectorAll('#btn-delete')

	deleteUserInitiator.init({btnDelete})
  },
};
 
export default AdminUser;
