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

const getDetailUser = async (id) => {
  const dbGet = await get(child(rootReference, `user/${id}`));
  return dbGet.val();
};

module.exports = { getDetailUser };