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

const getAllEvent = async () => {
  const dbGet = await get(child(rootReference, "event"));
  const objectValue = Object.values(dbGet.val());
  return objectValue;
};

const getDetailEvent = async (id) => {
  const dbGet = await get(child(rootReference, `event/${id}`));
  const objectValue = Object.values(dbGet.val());
  return objectValue;
};

module.exports = { getAllEvent, getDetailEvent };
