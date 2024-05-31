const {
  ref,
  getDatabase,
  child,
  get,
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
  const { username, email, uid } = body;
  const data = {
      username,
      email,
      profile_image: 'profile.jpg',
      uid
  };
  const reference = child(rootReference, "user/" + uid);
  set(reference, data);
  return email;
};

module.exports = { getDetailUser, addUser };
