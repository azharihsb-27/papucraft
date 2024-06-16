import { editEvent, getUserProfile } from './api';
import { token } from './session-check';
import { alertError, alertSuccess } from './show-alert';

const editEventInitiator = {
  init({ form, nama, lokasi, deskripsi, tglMulai, tglSelesai, thumbnail, id }) {
    form.addEventListener('submit', async (ev) => {
      ev.preventDefault();
      const namaValue = nama.value;
      const lokasiValue = lokasi.value;
      const deskripsiValue = deskripsi.value;
      const tglMulaiValue = tglMulai.value;
      const tglSelesaiValue = tglSelesai.value;
      let file;
      if (thumbnail.files) {
        file = thumbnail.files;
      }

      let author;
      if (token) {
        const user = JSON.parse(sessionStorage.getItem('user'));
        const loginMethod = sessionStorage.getItem('loginMethod');
        if (loginMethod == 'google') {
          const { uid, displayName } = user;
          author = {
            uid,
            username: displayName,
          };
        } else {
          const userData = await getUserProfile(user.uid);
          const { username, uid } = userData.data;
          author = {
            uid,
            username,
          };
        }
      }

      const dataEvent = new FormData();
      dataEvent.set('nama', namaValue);
      dataEvent.set('lokasi', lokasiValue);
      dataEvent.set('deskripsi', deskripsiValue);
      dataEvent.set('tanggal_mulai', tglMulaiValue);
      dataEvent.set('tanggal_selesai', tglSelesaiValue);
      dataEvent.set('uid', author.uid);
      dataEvent.set('username', author.username);
      if (file.length) {
        dataEvent.set('file', file[0]);
      }
      this._editEvent(id, dataEvent);
    });
  },
  async _editEvent(id, dataEvent) {
    const { success, message } = await editEvent(id, dataEvent);
    if (success) {
      alertSuccess(message);
      setTimeout(() => (location.href = '#/event'), 3000);
    } else {
      alertError(message);
    }
  },
};

export default editEventInitiator;
