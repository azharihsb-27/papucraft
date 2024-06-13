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
  await pushEvent({ path, data, thumbnail });
};

const pushEvent = async ({ path, data, thumbnail }) => {
  const dbRef = child(rootReference, "event");

  const id = push(dbRef).key;
  const {nama, lokasi, deskripsi, tanggal_mulai, tanggal_selesai, uid, username, createdAt,views} = data

  const result = {nama, lokasi, deskripsi, tanggal_mulai, tanggal_selesai, createdAt, views, thumbnail: id, id};
  const dbPath = child(rootReference, `${path}/${id}`);

  const dbSet = await set(dbPath, result);

  const refAuthorId = child(rootReference, `${path}/${id}/` + 'author/uid');
  const refAuthorUsername = child(rootReference, `${path}/${id}/` + 'author/username');

  const uidSet = await(set(refAuthorId, uid))
  const usernameSet = await(set(refAuthorUsername, username))
  const name = `${id}`;
  await addImageToStorage({ path, thumbnail, name });
  return dbSet
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

const getEventByAuthorId = async (uid) =>{
  const event = await getAllEvent()
  const filtered = event.filter(art=> art.author.uid == uid)
  return filtered
}


module.exports = {
  getAllEvent,
  getDetailEvent,
  addEvent,
  deleteEvent,
  updateEventViews,
  updateEventNoImages,
  updateEventWithImages,
  getEventByAuthorId,
};
