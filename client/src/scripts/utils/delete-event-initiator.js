import Swal from 'sweetalert2';
import { deleteEvent } from './api';
import { alertError } from './show-alert';

const deleteEventInitiator = {
  init({ btnDelete }) {
    btnDelete.forEach((btn) => {
      const id = btn.dataset.id;
      btn.addEventListener('click', async (ev) => {
        ev.preventDefault();
        Swal.fire({
          title: 'Apa yakin akan menghapus event?',
          showDenyButton: true,
          confirmButtonText: 'Delete',
          denyButtonText: 'Cancel',
        }).then((result) => {
          if (result.isConfirmed) {
            this._deleteEvent(id);
            Swal.fire('Event terhapus!', '', 'success');
          }
        });
      });
    });
  },
  async _deleteEvent(id) {
    const { success, message } = await deleteEvent(id);
    if (success) {
        location.reload()
    } else {
      alertError(message);
    }
  },
};

export default deleteEventInitiator;
