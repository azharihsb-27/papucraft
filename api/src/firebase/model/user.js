const { ref, getDatabase, child, get, set } = require("firebase/database");
const firebaseSDK = require("../firebase-sdk");

const database = getDatabase(firebaseSDK);
const rootReference = ref(database);

const getDetailUser = async (id) => {
  const dbGet = await get(child(rootReference, `user/${id}`));
  return dbGet.val();
};

const addUser = async (body) => {
  const {uid} = body
  const reference = child(rootReference, "user/" + uid);
  if(body.profile_image){
    const data = {...body}
    await set(reference, data);
    return data.uid;
  }else{
    const { username, email} = body;
    const data = {
      username,
      email,
      profile_image: "profile.jpg",
      uid,
    };
    await set(reference, data);
    return data.uid;
  }
};

module.exports = { getDetailUser, addUser };
