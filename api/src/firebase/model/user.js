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

const addUser = (body) => {
  const { username, email } = body;
  const data = {
    username,
    email,
    profile_image: 'profile.jpg',
  };
  const reference = child(rootReference, "user/" + 84);
  set(reference, data);
  return email;
};

module.exports = { getDetailUser, addUser };
