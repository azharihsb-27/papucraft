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
const { getImageFromStorage, addImageToStorage } = require("../storage");

const database = getDatabase(firebaseSDK);
const rootReference = ref(database);

const getAllKebudayaan = async () => {
  const dbGet = await get(child(rootReference, "kebudayaan"));
  const dbGetObject = Object.values(dbGet.val());

  const thumbnail = dbGetObject.map((db) => {
    return getImageFromStorage("kebudayaan", db.thumbnail).then((res) => {
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
  const dbGetObject = dbGet.val();
  const thumbnail = await getImageFromStorage(
    "kebudayaan",
    dbGetObject.thumbnail
  ).then((res) => {
    return res;
  });

  const detailKebudayaan = { ...dbGetObject, thumbnail };
  return detailKebudayaan;
};

const getKebudayaanByKategori = async (kategori) => {
  const dbGet = await query((rootReference, "kebudayaan"), equalTo(kategori));
  console.log(dbGet);
};

const addKebudayaan = async (path, data, thumbnail) => {
  const { originalname } = thumbnail;
  const split = originalname.split(".");
  const getType = split[split.length - 1];
  await pushKebudayaan({ path, data, thumbnail, getType });
};

const pushKebudayaan = async ({ path, data, thumbnail, getType }) => {
  const dbRef = child(rootReference, "kebudayaan");
  const id = push(dbRef).key;
  const result = { ...data, thumbnail: id };
  const dbPath = child(rootReference, `${path}/${id}`);
  const { mimetype } = thumbnail;
  const ext = mimetype.split("/")[1];
  const dbSet = await set(dbPath, result);
  const name = `${id}`;
  await addImageToStorage({ path, thumbnail, name });
  return dbSet;
};

const deleteKebudayaan = async (id) => {
  const dbPath = child(rootReference, `kebudayaan/${id}`);
  const valuedbPath = await get(dbPath);
  const isExist = valuedbPath.val();
  if (!isExist) {
    return false;
  } else {
    return remove(dbPath);
  }
};

module.exports = {
  getAllKebudayaan,
  getDetailKebudayaan,
  getKebudayaanByKategori,
  addKebudayaan,
  deleteKebudayaan,
};
