const {
  ref,
  getDatabase,
  child,
  get,
  push,
  set,
} = require("firebase/database");
const firebaseSDK = require("../firebase-sdk");

const database = getDatabase(firebaseSDK);
const rootReference = ref(database);

const getAllArtikel = async () => {
  const dbGet = await get(child(rootReference, "artikel"));
  const objectValue = Object.values(dbGet.val());
  return objectValue;
};

const getDetailArtikel = async (id) => {
  const dbGet = await get(child(rootReference, `artikel/${id}`));
  return dbGet.val();
};

const addArtikel = (data) =>{
  const dbPath = child(rootReference, 'artikel');
  const dbPush = push(dbPath, data);
  return dbPush
}

module.exports = { getAllArtikel, getDetailArtikel };
