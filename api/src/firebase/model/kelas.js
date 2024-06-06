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
  
  const getAllKelas = async () => {
    const dbGet = await get(child(rootReference, "kelas"));
    const dbGetObject = Object.values(dbGet.val());
  
    const thumbnail = dbGetObject.map((db) => {
      return getImageFromStorage("kelas", db.thumbnail).then((res) => {
        return res;
      });
    });
  
    const getThumb = await Promise.all(thumbnail).then((res) => {
      return res;
    });
  
    const data = dbGetObject.map((kelas, index) => {
      return { ...kelas, thumbnail: getThumb[index] };
    });
  
    return data;
  };
  
  const getDetailKelas = async (id) => {
    const dbGet = await get(child(rootReference, `kelas/${id}`));
    const dbGetObject = dbGet.val();
    const thumbnail = await getImageFromStorage(
      "kelas",
      dbGetObject.thumbnail
    ).then((res) => {
      return res;
    });
  
    const detailKelas = { ...dbGetObject, thumbnail };
    return detailKelas;
  };
  
  const addKelas = async (path, data, thumbnail) => {
    const { originalname } = thumbnail;
    const split = originalname.split(".");
    const getType = split[split.length - 1];
    await pushKelas({ path, data, thumbnail, getType });
  };
  
  const pushKelas = async ({ path, data, thumbnail, getType }) => {
    const dbRef = child(rootReference, "kelas");
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
  
  const deleteKelas = async (id) => {
    const dbPath = child(rootReference, `kelas/${id}`);
    const valuedbPath = await get(dbPath);
    const isExist = valuedbPath.val();
    if (!isExist) {
      return false;
    } else {
      return remove(dbPath);
    }
  };
  
  module.exports = { getAllKelas, getDetailKelas, addKelas, deleteKelas };
  