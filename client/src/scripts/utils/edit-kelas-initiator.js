import { editKelas } from './api';
import { alertError, alertSuccess } from './show-alert';

const editKelasInitiator = {
  init({ form, nama, alamat, deskripsi, thumbnail, id }) {
    form.addEventListener('submit', async (ev) => {
      ev.preventDefault();
      const namaValue = nama.value;
      const alamatValue = alamat.value;
      const deskripsiValue = deskripsi.value;
      let file;
      if (thumbnail.files) {
        file = thumbnail.files;
      }

      const dataKelas = new FormData();
      dataKelas.set('nama_kelas', namaValue);
      dataKelas.set('alamat', alamatValue);
      dataKelas.set('deskripsi', deskripsiValue);
      if (file.length) {
        dataKelas.set('file', file[0]);
      }

      this._editKelas(id, dataKelas);
    });
  },
  async _editKelas(id, dataKelas) {
    const { success, message } = await editKelas(id, dataKelas);
    if (success) {
      alertSuccess(message);
      setTimeout(() => (location.href = `#/course/${id}`), 3000);
    } else {
      alertError(message);
    }
  },
};

export default editKelasInitiator;
