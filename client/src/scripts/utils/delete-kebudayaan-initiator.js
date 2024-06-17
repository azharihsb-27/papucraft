import Swal from 'sweetalert2';
import { deleteKebudayaan } from './api';
import { alertError } from './show-alert';

const deleteKebudayaanInitiator = {
  init({ btnDelete }) {
    btnDelete.forEach((btn) => {
      const id = btn.dataset.id;
      btn.addEventListener('click', async (ev) => {
        ev.preventDefault();
        Swal.fire({
          title: 'Apa yakin akan menghapus kebudayaan?',
          showDenyButton: true,
          confirmButtonText: 'Delete',
          denyButtonText: 'Cancel',
        }).then((result) => {
          if (result.isConfirmed) {
            this._deleteKebudayaan(id);
            Swal.fire('Kebudayaan terhapus!', '', 'success');
          }
        });
      });
    });
  },
  async _deleteKebudayaan(id) {
    const { success, message } = await deleteKebudayaan(id);
    if (success) {
        location.reload()
    } else {
      alertError(message);
    }
  },
};

export default deleteKebudayaanInitiator;
