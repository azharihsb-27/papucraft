const { ref, getDatabase, child, get, set, remove } = require("firebase/database");
const firebaseSDK = require("../firebase-sdk");
const { getImageFromStorage, deleteImageFromStorage,addImageToStorage } = require("../storage");

const database = getDatabase(firebaseSDK);
const rootReference = ref(database);

const getDetailUser = async (id) => {
  const dbGet = await get(child(rootReference, `user/${id}`));
  const dbGetObject = dbGet.val();
  if (!dbGetObject) {
    return false;
  } else {
    const profile_image = await getImageFromStorage(
      "user",
      dbGetObject.profile_image
    ).then((res) => {
      return res;
    });

    const detailUser = { ...dbGetObject, profile_image };
    return detailUser;
  }
};

const getAllUser = async () => {
  const dbGet = await get(child(rootReference, "user"));
  const dbGetObject = Object.values(dbGet.val());

  const userGoogle = dbGetObject.filter((db) => db.displayName);
  const userNonGoogle = dbGetObject.filter((db) => db.username);
  const thumbnail = userNonGoogle.map((db) => {
    return getImageFromStorage("user", db.profile_image).then((res) => {
      return res;
    });
  });

  const getThumb = await Promise.all(thumbnail).then((res) => {
    return res;
  });

  const dataNonGoogle = userNonGoogle.map((user, index) => {
    return { ...user, profile_image: getThumb[index] };
  });

  const finalData = [...userGoogle, ...dataNonGoogle];
  return finalData;
};

const addUser = async (body) => {
  const { uid } = body;
  const reference = child(rootReference, "user/" + uid);
  if (body.profile_image) {
    const data = { ...body };
    await set(reference, data);
    return data.uid;
  } else {
    const { username, email } = body;
    const data = {
      username,
      email,
      profile_image: "profile.png",
      uid,
    };
    await set(reference, data);
    return data.uid;
  }
};

const updateProfileNoImages = async (body, uid) => {
  const dbOld = child(rootReference, `user/${uid}`);
  const dbOldGet = await get(dbOld);
  const dbOldGetObject = dbOldGet.val();
  if (!dbOldGet) {
    return false;
  } else {
    const newData = {
      ...body,
      profile_image: dbOldGetObject.profile_image,
      uid,
    };
    await set(dbOld, newData);
    return newData.uid;
  }
};

const updateProfileWithImages = async ({ body, uid, profile_image }) => {
  await putProfile({ body, uid, profile_image });
};

const putProfile = async ({ body, uid, profile_image }) => {
  const dbOld = child(rootReference, `user/${uid}`);
  const dbOldGet = await get(dbOld);
  const dbOldGetObject = dbOldGet.val();
  if (!dbOldGetObject) {
    return false;
  } else {
    const oldImage = dbOldGetObject.profile_image;
    const path = "user";
    const newData = {
      ...body,
      uid,
      profile_image: uid,
    };
    if (oldImage != "profile.png") {
      await deleteImageFromStorage(path, oldImage);
    }

    const thumbnail = profile_image
    const dbSet = await set(dbOld, newData);
    const name = `${uid}`;
    await addImageToStorage({ path, thumbnail, name });
    return dbSet;
  }
};

const deleteUserFromDb = async (uid) =>{
  const dbOld = child(rootReference, `user/${uid}`);
  const dbOldGet = await get(dbOld);
  const dbOldGetObject = dbOldGet.val();
  if (!dbOldGetObject) {
    return false;
  } else {
    const oldImage = dbOldGetObject.profile_image;
    if(oldImage != 'profile.png'){
      await deleteImageFromStorage('user', oldImage)
    }
    remove(dbOld)
  }
}



module.exports = {
  getDetailUser,
  addUser,
  getAllUser,
  updateProfileNoImages,
  updateProfileWithImages,
  deleteUserFromDb,
};
