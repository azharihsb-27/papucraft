const {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject,
} = require("firebase/storage");
const firebaseSDK = require("./firebase-sdk");
const getImageFromStorage = async (path, fileName) => {
  const storage = getStorage();
  const gsRef = ref(storage, `gs://papucrafts.appspot.com/${path}/${fileName}`);
  const getUrl = await getDownloadURL(gsRef).then((url) => {
    return url;
  });
  return getUrl;
};

const addImageToStorage = async ({ path, thumbnail, name }) => {
  const storage = getStorage(firebaseSDK);
  const storageRef = ref(storage, `${path}/${name}`);
  const metadata = {
    contentType: thumbnail.mimetype,
  };

  await uploadBytesResumable(storageRef, thumbnail.buffer, metadata).then(
    (snapshot) => {}
  );
};

const deleteImageFromStorage = async (path, name) => {
  const storage = getStorage(firebaseSDK);
  const storageRef = ref(storage, `${path}/${name}`);

  await deleteObject(storageRef).then((res) => {
    return res;
  });
};

module.exports = {
  getImageFromStorage,
  addImageToStorage,
  deleteImageFromStorage,
};
