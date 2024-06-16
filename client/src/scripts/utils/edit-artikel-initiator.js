import { editArtikel, getUserProfile } from './api';
import { token } from './session-check';
import { alertError, alertSuccess } from './show-alert';

const editArtikelInitiator = {
  init({ form, judul, source, ringkasan, editorValue, thumbnail, id }) {
    form.addEventListener('submit', async (ev) => {
      ev.preventDefault();
      const body = editorValue.innerHTML;
      const judulValue = judul.value;
      const sourceValue = source.value;
      const ringkasanValue = ringkasan.value;
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

      const dataArtikel = new FormData();
      dataArtikel.set('judul', judulValue);
      dataArtikel.set('source', sourceValue);
      dataArtikel.set('ringkasan', ringkasanValue);
      dataArtikel.set('body', body);
      dataArtikel.set('uid', author.uid);
      dataArtikel.set('username', author.username);
      if (file.length) {
        dataArtikel.set('file', file[0]);
      }

      if (body.length < 1) {
        alertError('Mohon isi semua input!');
      } else {
        this._editArtikel(id, dataArtikel);
      }
    });
  },
  async _editArtikel(id, dataArtikel) {
    const { success, message } = await editArtikel(id, dataArtikel);
    if (success) {
      alertSuccess(message);
      setTimeout(() => (location.href = `#/article/${id}`), 3000);
    } else {
      alertError(message);
    }
  },
};
export default editArtikelInitiator;
