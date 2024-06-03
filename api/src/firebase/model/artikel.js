const {
  ref,
  getDatabase,
  child,
  get,
  push,
  set,
  remove,
} = require("firebase/database");
const firebaseSDK = require("../firebase-sdk");
const { getImageFromStorage, addImageToStorage } = require("../storage");

const database = getDatabase(firebaseSDK);
const rootReference = ref(database);

const getAllArtikel = async () => {
  const dbGet = await get(child(rootReference, "artikel"));
  const dbGetObject = Object.values(dbGet.val());

  const thumbnail = dbGetObject.map((db) => {
    return getImageFromStorage("artikel", db.thumbnail).then((res) => {
      return res;
    });
  });

  const getThumb = await Promise.all(thumbnail).then((res) => {
    return res;
  });

  const data = dbGetObject.map((artikel, index) => {
    return { ...artikel, thumbnail: getThumb[index] };
  });

  return data;
};

const getDetailArtikel = async (id) => {
  const dbGet = await get(child(rootReference, `artikel/${id}`));
  const dbGetObject = dbGet.val();
  const thumbnail = await getImageFromStorage(
    "artikel",
    dbGetObject.thumbnail
  ).then((res) => {
    return res;
  });

  const detailArtikel = { ...dbGetObject, thumbnail };
  return detailArtikel;
};

const addArtikel = async (path, data, thumbnail) => {
  const { originalname } = thumbnail;
  const split = originalname.split(".");
  const getType = split[split.length - 1];
  await pushArtikel({ path, data, thumbnail, getType });
};

const pushArtikel = async ({ path, data, thumbnail, getType }) => {
  const dbRef = child(rootReference, "artikel");
  const id = push(dbRef).key;
  const result = { ...data, thumbnail: `${id}.${getType}`, id };
  const dbPath = child(rootReference, `${path}/${id}`);
  const { mimetype } = thumbnail;
  const ext = mimetype.split("/")[1];
  const dbSet = await set(dbPath, result);
  const name = `${id}.${ext}`;
  await addImageToStorage({ path, thumbnail, name });
  return dbSet;
};

const deleteArtikel = async (id) => {
  const dbPath = child(rootReference, `artikel/${id}`);
  const valuedbPath = await get(dbPath);
  const isExist = valuedbPath.val();
  if (!isExist) {
    return false;
  } else {
    return remove(dbPath);
  }
};

module.exports = { getAllArtikel, getDetailArtikel, addArtikel, deleteArtikel };
