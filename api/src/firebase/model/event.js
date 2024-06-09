const {
  ref,
  getDatabase,
  child,
  get,
  push,
  set,
} = require("firebase/database");
const firebaseSDK = require("../firebase-sdk");
const {
  getImageFromStorage,
  addImageToStorage,
  deleteImageFromStorage,
} = require("../storage");

const database = getDatabase(firebaseSDK);
const rootReference = ref(database);

const getAllEvent = async () => {
  const dbGet = await get(child(rootReference, "event"));
  const objectValue = Object.values(dbGet.val());

  const thumbnail = objectValue.map((db) => {
    return getImageFromStorage("event", db.thumbnail).then((res) => {
      return res;
    });
  });

  const getThumb = await Promise.all(thumbnail).then((res) => {
    return res;
  });

  const data = objectValue.map((evn, index) => {
    return { ...evn, thumbnail: getThumb[index] };
  });

  return data;
};

const getDetailEvent = async (id) => {
  const dbGet = await get(child(rootReference, `event/${id}`));
  const dbGetObject = dbGet.val();
  if (!dbGetObject) {
    return false;
  } else {
    const thumbnail = await getImageFromStorage(
      "event",
      dbGetObject.thumbnail
    ).then((res) => {
      return res;
    });
    const detailEvent = { ...dbGetObject, thumbnail };
    return detailEvent;
  }
};

const updateEventNoImages = async (data, id) => {
  const dbOld = child(rootReference, `event/${id}`);
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

const updateEventWithImages = async ({ data, id, thumbnail }) => {
  await putEvent({ data, id, thumbnail });
};

const putEvent = async ({ data, id, thumbnail }) => {
  const dbOld = child(rootReference, `event/${id}`);
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
      id
    };
    const path = "event";

    await deleteImageFromStorage(path, oldThumbnail);

    const dbSet = await set(dbOld, newData);
    const name = `${id}`;
    await addImageToStorage({ path, thumbnail, name });
    return dbSet;
  }
};

const addEvent = async (path, data, thumbnail) => {
  const { originalname } = thumbnail;
  const split = originalname.split(".");
  const getType = split[split.length - 1];
  await pushEvent({ path, data, thumbnail, getType });
};

const pushEvent = async ({ path, data, thumbnail, getType }) => {
  const dbRef = child(rootReference, "event");
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

const deleteEvent = async (id) => {
  const dbPath = child(rootReference, `event/${id}`);
  const valuedbPath = await get(dbPath);
  const isExist = valuedbPath.val();
  if (!isExist) {
    return false;
  } else {
    await deleteImageFromStorage("event", isExist.thumbnail);
    return remove(dbPath);
  }
};

const updateEventViews = async (id) => {
  const dbPath = child(rootReference, `event/${id}`);
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
  getAllEvent,
  getDetailEvent,
  addEvent,
  deleteEvent,
  updateEventViews,
  updateEventNoImages,
  updateEventWithImages,
};
