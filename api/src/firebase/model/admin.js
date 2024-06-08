const { ref, getDatabase, child, get, set } = require("firebase/database");
const firebaseSDK = require("../firebase-sdk");

const database = getDatabase(firebaseSDK);
const rootReference = ref(database);

const getDetailAdmin = async (id) => {
  const dbGet = await get(child(rootReference, `admin/${id}`));
  return dbGet.val();
};

const getHighlight = async (id) =>{
  const dbGet = await get(child(rootReference, 'admin/highlight'))
  return dbGet.val()
}

const updateViewsPage = async () =>{
  const dbPath = child(rootReference, 'admin/highlight')
  const valuedbPath = await get(dbPath)
  const oldData = valuedbPath.val()
  const newViews = oldData.views + 1
  return set(dbPath, {...oldData, views: newViews})  
}

module.exports = { getDetailAdmin, updateViewsPage };
