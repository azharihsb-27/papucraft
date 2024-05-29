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

const database = getDatabase(firebaseSDK);
const rootReference = ref(database);

const getAllKebudayaan = async () => {
  const dbGet = await get(child(rootReference, "kebudayaan"));
  const objectValue = Object.values(dbGet.val());
  return objectValue;
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
