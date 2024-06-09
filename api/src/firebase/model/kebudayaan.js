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
  if (!dbGetObject) {
    return false;
  } else {
    const thumbnail = await getImageFromStorage(
      "kebudayaan",
      dbGetObject.thumbnail
    ).then((res) => {
      return res;
    });
    const detailKebudayaan = { ...dbGetObject, thumbnail };
    return detailKebudayaan;
  }
};

const updateKebudayaanNoImages = async (data, id) => {
  const dbOld = child(rootReference, `kebudayaan/${id}`);
  const dbOldGet = await get(dbOld);
  const dbOldGetObject = dbOldGet.val();
  if (!dbOldGetObject) {
    return false;
  } else {
    const newData = {
      ...data,
      thumbnail: dbOldGetObject.thumbnail,
      views: dbOldGetObject.views,
      id,
    };
    await set(dbOld, newData);
    return newData.id;
  }
};


const updateKebudayaanWithImages = async ({ data, id, thumbnail }) => {
  await putKebudayaan({ data, id, thumbnail });
};

const putKebudayaan = async ({ data, id, thumbnail }) => {
  const dbOld = child(rootReference, `kebudayaan/${id}`);
  const dbOldGet = await get(dbOld);
  const dbOldGetObject = dbOldGet.val();
  if (!dbOldGetObject) {
    return false;
  } else {
    const oldThumbnail = dbOldGetObject.thumbnail;
    const newData = {
      ...data,
      thumbnail: id,
      views: dbOldGetObject.views,
      id,
    };
    const path = "kebudayaan";

    await deleteImageFromStorage(path, oldThumbnail);

    const dbSet = await set(dbOld, newData);
    const name = `${id}`;
    await addImageToStorage({ path, thumbnail, name });
    return dbSet;
  }
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
  const result = { ...data, thumbnail: id, id };
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
    await deleteImageFromStorage("kebudayaan", isExist.thumbnail);
    return remove(dbPath);
  }
};

const updateKebudayaanViews = async (id) => {
  const dbPath = child(rootReference, `kebudayaan/${id}`);
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
  getAllKebudayaan,
  getDetailKebudayaan,
  addKebudayaan,
  deleteKebudayaan,
  updateKebudayaanViews,
  updateKebudayaanNoImages,
  updateKebudayaanWithImages,
};
