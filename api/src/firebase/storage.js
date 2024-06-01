const {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
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

module.exports = { getImageFromStorage, addImageToStorage };
