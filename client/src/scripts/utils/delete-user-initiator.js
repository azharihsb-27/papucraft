import Swal from 'sweetalert2';
import { deleteUser } from './api';
import { alertError } from './show-alert';

const deleteUserInitiator = {
  init({ btnDelete }) {
    btnDelete.forEach((btn) => {
      const uid = btn.dataset.uid;
      btn.addEventListener('click', async (ev) => {
        ev.preventDefault();
        Swal.fire({
          title: 'Apa yakin akan menghapus user?',
          showDenyButton: true,
          confirmButtonText: 'Delete',
          denyButtonText: 'Cancel',
        }).then((result) => {
          if (result.isConfirmed) {
            this._deleteUser(uid);
            Swal.fire('User terhapus!', '', 'success');
          }
        });
      });
    });
  },
  async _deleteUser(uid) {
    const { success, message } = await deleteUser(uid);
    if (success) {
      location.reload()
    } else {
      alertError(message);
    }
  },
};

export default deleteUserInitiator;
