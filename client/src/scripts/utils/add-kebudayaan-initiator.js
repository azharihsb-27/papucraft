import { addKebudayaan } from './api';
import { alertError, alertSuccess } from './show-alert';

const addKebudayaanInitiator = {
  init({ form, nama, asalDaerah, source, kategori, deskripsi, thumbnail }) {
    form.addEventListener('submit', async (ev) => {
      ev.preventDefault();
      const namaValue = nama.value;
      const asalDaerahValue = asalDaerah.value;
      const sourceValue = source.value;
      const kategoriValue = kategori.value;
      const deskripsiValue = deskripsi.value;
      const file = thumbnail.files;

      const dataKebudayaan = new FormData();
      dataKebudayaan.set('nama', namaValue);
      dataKebudayaan.set('asal_daerah', asalDaerahValue);
      dataKebudayaan.set('source', sourceValue);
      dataKebudayaan.set('kategori', kategoriValue);
      dataKebudayaan.set('deskripsi', deskripsiValue);
      dataKebudayaan.set('file', file[0]);

      this._addKebudayaan(dataKebudayaan);
    });
  },
  async _addKebudayaan(dataKebudayaan) {
    const { success, message } = await addKebudayaan(dataKebudayaan);
    if (success) {
      alertSuccess(message);
      setTimeout(() => (location.href = '#/admingallery'), 3000);
    } else {
      alertError(message);
    }
  },
};
export default addKebudayaanInitiator;
