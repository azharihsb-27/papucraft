const admin = require("../admin-sdk");
const { ref, getDatabase, child, get, set } = require("firebase/database");
const firebaseSDK = require("../firebase-sdk");

const database = getDatabase(firebaseSDK);
const rootReference = ref(database);

const getDetailAdmin = async (id) => {
  const dbGet = await get(child(rootReference, `admin/${id}`));
  return dbGet.val();
};

const getHighlight = async (id) => {
  const dbGet = await get(child(rootReference, "admin/highlight"));
  return dbGet.val();
};

const getDetailUser = async (id) => {
  const getUser = (await admin.auth().getUser(id)).toJSON();
  const { uid, email, metadata } = getUser;
  const { lastSignInTime, creationTime } = metadata;
  const userData = {
    uid,
    email,
    createdAt: creationTime,
    lastLogin: lastSignInTime,
  };
  return userData;
};

const getAllUser = async () => {
  const getUser = await admin.auth().listUsers(10);
  const data = getUser.users.map((user) => {
    const { lastSignInTime, creationTime } = user.metadata;
    const { uid, email } = user;
    const userData = {
      uid,
      email,
      createdAt: creationTime,
      lastLogin: lastSignInTime,
    };
    return userData;
  });
  return data;
};

const deleteUser = async (uid) => {
  const isExist = await getDetailUser(uid);
  if (!isExist) {
    return false;
  } else {
    const response = admin
      .auth()
      .deleteUser(uid)
      .then(() => {
        return true;
      })
      .catch((err) => {
        return err;
      });
    return response;
  }
};

const updateViewsPage = async () => {
  const dbPath = child(rootReference, "admin/highlight");
  const valuedbPath = await get(dbPath);
  const oldData = valuedbPath.val();
  const newViews = oldData.views + 1;
  return set(dbPath, { ...oldData, views: newViews });
};

const isTokenValid = async () => {
  admin.auth().verifyIdToken();
};

module.exports = {
  getDetailAdmin,
  updateViewsPage,
  getDetailUser,
  getAllUser,
  deleteUser,
};
