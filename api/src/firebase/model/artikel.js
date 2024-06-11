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
const {
  getImageFromStorage,
  addImageToStorage,
  deleteImageFromStorage,
} = require("../storage");

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
  if (!dbGetObject) {
    return false;
  }
  {
    const thumbnail = await getImageFromStorage(
      "artikel",
      dbGetObject.thumbnail
    ).then((res) => {
      return res;
    });

    const detailArtikel = { ...dbGetObject, thumbnail };
    return detailArtikel;
  }
};

const updateArtikelNoImages = async (data, id) => {
  const dbOld = child(rootReference, `artikel/${id}`);
  const dbOldGet = await get(dbOld);
  const dbOldGetObject = dbOldGet.val();
  if (!dbOldGetObject) {
    return false;
  } else {
    const newData = {
      ...data,
      thumbnail: dbOldGetObject.thumbnail,
      author: dbOldGetObject.author,
      views: dbOldGetObject.views,
      id,
    };
    await set(dbOld, newData);
    return newData.id;
  }
};

const updateArtikelWithImages = async ({ data, id, thumbnail }) => {
  await putArtikel({ data, id, thumbnail });
};

const putArtikel = async ({ data, id, thumbnail }) => {
  const dbOld = child(rootReference, `artikel/${id}`);
  const dbOldGet = await get(dbOld);
  const dbOldGetObject = dbOldGet.val();
  if (!dbOldGetObject) {
    return false;
  } else {
    const oldThumbnail = dbOldGetObject.thumbnail;
    const newData = {
      ...data,
      thumbnail: id,
      author: dbOldGetObject.author,
      views: dbOldGetObject.views,
      id,
    };
    const path = "artikel";

    await deleteImageFromStorage(path, oldThumbnail);

    const dbSet = await set(dbOld, newData);
    const name = `${id}`;
    await addImageToStorage({ path, thumbnail, name });
    return dbSet;
  }
};

const addArtikel = async (path, data, thumbnail) => {
  await pushArtikel({ path, data, thumbnail });
};

const pushArtikel = async ({ path, data, thumbnail }) => {
  const dbRef = child(rootReference, "artikel");
  
  const id = push(dbRef).key;
  const {body, judul, ringkasan, source, views, createdAt, uid, username} = data

  const result = {body, judul, ringkasan, source, views, createdAt, thumbnail: id, id}
  const dbPath = child(rootReference, `${path}/${id}`);

  const dbSet = await set(dbPath, result);
  const refAuthorId = child(rootReference, `${path}/${id}/` + 'author/uid');
  const refAuthorUsername = child(rootReference, `${path}/${id}/` + 'author/username');

  const uidSet = await(set(refAuthorId, uid))
  const usernameSet = await(set(refAuthorUsername, username))
  
  const name = `${id}`;
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
    await deleteImageFromStorage("artikel", isExist.thumbnail);
    return remove(dbPath);
  }
};

const updateArtikelViews = async (id) => {
  const dbPath = child(rootReference, `artikel/${id}`);
  const valuedbPath = await get(dbPath);
  const oldData = valuedbPath.val();
  if (!oldData) {
    return false;
  } else {
    const newViews = oldData.views + 1;
    return set(dbPath, { ...oldData, views: newViews });
  }
};

module.exports = {
  getAllArtikel,
  getDetailArtikel,
  addArtikel,
  deleteArtikel,
  updateArtikelViews,
  updateArtikelNoImages,
  updateArtikelWithImages,
};
