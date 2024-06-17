import Swal from 'sweetalert2';
import { deleteArtikel } from './api';
import { alertError } from './show-alert';

const deleteArtikelInitiator = {
  init({ btnDelete }) {
    btnDelete.forEach((btn) => {
      const id = btn.dataset.id;
      btn.addEventListener('click', async (ev) => {
        ev.preventDefault();
        Swal.fire({
          title: 'Apa yakin akan menghapus artikel?',
          showDenyButton: true,
          confirmButtonText: 'Delete',
          denyButtonText: 'Cancel',
        }).then((result) => {
          if (result.isConfirmed) {
            this._deleteArtikel(id);
            Swal.fire('Artikel terhapus!', '', 'success');
          }
        });
      });
    });
  },
  async _deleteArtikel(id) {
    const { success, message } = await deleteArtikel(id);
    if (success) {
        location.reload()
    } else {
      alertError(message);
    }
  },
};

export default deleteArtikelInitiator;
