const { ref, getDatabase, child, get, set } = require("firebase/database");
const admin = require("../admin-sdk");
const firebaseSDK = require("../firebase-sdk");
const { getAllArtikel } = require("./artikel");
const { getAllEvent } = require("./event");
const { getAllKebudayaan } = require("./kebudayaan");
const { getDetailUser } = require("./user");
const { getAllKelas } = require("./kelas");


const database = getDatabase(firebaseSDK);
const rootReference = ref(database);

const getDetailAdmin = async (id) => {
  const dbGet = await get(child(rootReference, `admin/${id}`));
  return dbGet.val();
};

const getAnalytic = async (id) => {
  const dbGet = await get(child(rootReference, "admin/highlight"));
  const {views} = dbGet.val()

  const artikel = await getAllArtikel()
  const event = await getAllEvent()
  const kelas = await getAllKelas()
  const kebudayaan = await getAllKebudayaan()
  const user = await getAllUser()

  const data = {
    artikel: artikel.length, event: event.length, kebudayaan: kebudayaan.length, kelas: kelas.length,user: user.length, views
  }
  
  return data
};

const getDetailUserByAdmin = async (id) => {
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
      .then(async () => {
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

const getToken = (bearerHeader) =>{
  const bearer = bearerHeader.split(' ')
  const bearerToken = bearer[1]
  return isTokenValid(bearerToken)
}

const isTokenValid = (token) => {
  const isValid = admin.auth().verifyIdToken(token)
    .then(decodedToken=>{
      const uid = decodedToken.uid
      return {valid: true}
    }).catch((error)=>{
      if(error.code == 'auth/id-token-expired'){
        return 'Mohon Login Ulang'
      }
      return {valid:false}
    })
  return isValid
};

const sendResetPassword = async (email) =>{
  const response = admin.auth().generatePasswordResetLink(email).then(res=>{
    return {link :res}
  }).catch(err=>{
    return err
  })
  return response
}

module.exports = {
  getDetailAdmin,
  getAnalytic,
  updateViewsPage,
  getDetailUserByAdmin,
  getAllUser,
  deleteUser,
  getToken,
  sendResetPassword,
};
