import { addKelas } from './api';
import { alertError, alertSuccess } from './show-alert';

const addKelasInitiator = {
  init({ form, nama, alamat, deskripsi, thumbnail }) {
    form.addEventListener('submit', (ev) => {
      ev.preventDefault();
      const namaValue = nama.value;
      const alamatValue = alamat.value;
      const deskripsiValue = deskripsi.value;
      const file = thumbnail.files;

      const dataKelas = new FormData();
      dataKelas.set('nama_kelas', namaValue);
      dataKelas.set('alamat', alamatValue);
      dataKelas.set('deskripsi', deskripsiValue);
      dataKelas.set('file', file[0]);

      this._addKelas(dataKelas);
    });
  },
  async _addKelas(dataKelas) {
    const { success, message } = await addKelas(dataKelas);
    if (success) {
      alertSuccess(message);
      setTimeout(() => (location.href = '#/course'), 3000);
    } else {
      alertError(message);
    }
  },
};

export default addKelasInitiator;
