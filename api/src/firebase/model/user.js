const { ref, getDatabase, child, get, set } = require("firebase/database");
const firebaseSDK = require("../firebase-sdk");
const {getImageFromStorage, addImageToStorage} = require("../storage")

const database = getDatabase(firebaseSDK);
const rootReference = ref(database);

const getDetailUser = async (id) => {
  const dbGet = await get(child(rootReference, `user/${id}`));
  const dbGetObject = dbGet.val();
  if (!dbGetObject) {
    return false;
  }
  {
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

const getAllUser = async () =>{
  const dbGet = await get(child(rootReference, "user"))
  const dbGetObject = Object.values(dbGet.val())

  const userGoogle = dbGetObject.filter(db=> db.displayName)
  const userNonGoogle = dbGetObject.filter(db=> db.username)
  const thumbnail = userNonGoogle.map((db) => {
    return getImageFromStorage("user", db.profile_image).then((res) => {
      return res;
    });
  });

  const getThumb = await Promise.all(thumbnail).then((res) => {
    return res;
  });

  const dataNonGoogle = userNonGoogle.map((user, index)=>{
    return {...user, profile_image: getThumb[index]}
  })

  const finalData = [...userGoogle,...dataNonGoogle]
  return finalData
}

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

module.exports = { getDetailUser, addUser , getAllUser};
