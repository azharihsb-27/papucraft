const {
  ref,
  getDatabase,
  child,
  get,
  push,
  set,
  query,
  equalTo,
} = require("firebase/database");
const firebaseSDK = require("../firebase-sdk");
const { getKebudayaanImage } = require("../storage");

const database = getDatabase(firebaseSDK);
const rootReference = ref(database);

const getAllKebudayaan = async () => {
  const dbGet = await get(child(rootReference, "kebudayaan"));
  const dbGetObject = Object.values(dbGet.val());

  const thumbnail = dbGetObject.map((db) => {
    return getKebudayaanImage(db.thumbnail).then((res) => {
      return res;
    });
  });

  const getThumb = await Promise.all(thumbnail).then((res) => {
    return res;
  });

  const data = dbGetObject.map((keb, index) => {
    return { ...keb, thumbnail: getThumb[index] };
  });

  return data;
};

const getDetailKebudayaan = async (id) => {
  const dbGet = await get(child(rootReference, `kebudayaan/${id}`));
  return dbGet.val();
};

const getKebudayaanByKategori = async (kategori) => {
  const dbGet = await query((rootReference, "kebudayaan"), equalTo(kategori));
  console.log(dbGet);
};

module.exports = {
  getAllKebudayaan,
  getDetailKebudayaan,
  getKebudayaanByKategori,
};
