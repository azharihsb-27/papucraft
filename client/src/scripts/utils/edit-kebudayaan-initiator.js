import { editKebudayaan } from './api';
import { alertError, alertSuccess } from './show-alert';

const editKebudayaanInitiator = {
  init({ form, nama, asalDaerah, source, kategori, deskripsi, thumbnail, id }) {
    form.addEventListener('submit', async (ev) => {
      ev.preventDefault();
      const namaValue = nama.value;
      const asalDaerahValue = asalDaerah.value;
      const sourceValue = source.value;
      const kategoriValue = kategori.value;
      const deskripsiValue = deskripsi.value;
      let file;
      if (thumbnail.files) {
        file = thumbnail.files;
      }

      const dataKebudayaan = new FormData();
      dataKebudayaan.set('nama', namaValue);
      dataKebudayaan.set('asal_daerah', asalDaerahValue);
      dataKebudayaan.set('source', sourceValue);
      dataKebudayaan.set('kategori', kategoriValue);
      dataKebudayaan.set('deskripsi', deskripsiValue);

      if (file.length) {
        dataKebudayaan.set('file', file[0]);
      }

      this._editKebudayaan(id, dataKebudayaan);
    });
  },
  async _editKebudayaan(id, dataKebudayaan) {
    const { success, message } = await editKebudayaan(id, dataKebudayaan);
    if (success) {
      alertSuccess(message);
      setTimeout(() => (location.href = `#/gallery/${id}`), 3000);
    } else {
      alertError(message);
    }
  },
};
export default editKebudayaanInitiator;
