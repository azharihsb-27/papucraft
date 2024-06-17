import Swal from 'sweetalert2';
import { deleteKelas } from './api';
import { alertError } from './show-alert';

const deleteKelasInitiator = {
  init({ btnDelete }) {
    btnDelete.forEach((btn) => {
      const id = btn.dataset.id;
      btn.addEventListener('click', async (ev) => {
        ev.preventDefault();
        Swal.fire({
          title: 'Apa yakin akan menghapus kelas?',
          showDenyButton: true,
          confirmButtonText: 'Delete',
          denyButtonText: 'Cancel',
        }).then((result) => {
          if (result.isConfirmed) {
            this._deleteKelas(id);
            Swal.fire('Kelas terhapus!', '', 'success');
          }
        });
      });
    });
  },
  async _deleteKelas(id) {
    const { success, message } = await deleteKelas(id);
    if (success) {
      location.reload()
    } else {
      alertError(message);
    }
  },
};

export default deleteKelasInitiator;
