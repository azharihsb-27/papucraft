const { getStorage, ref, getDownloadURL } = require("firebase/storage");
const firebaseSDK = require("./firebase-sdk");
const getKebudayaanImage = async (fileName) => {
  const storage = getStorage();
  const gsRef = ref(
    storage,
    `gs://papucrafts.appspot.com/kebudayaan/${fileName}`
  );
  const getUrl = await getDownloadURL(gsRef).then((url) => {
    return url;
  });
  return getUrl;
};

module.exports = { getKebudayaanImage };
