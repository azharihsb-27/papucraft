const baseURL = 'http://localhost:3000/api';

const getAllKebudayaan = async () => {
  const response = await fetch(`${baseURL}/kebudayaan`);
  const responseJson = await response.json();
  return responseJson;
};

const getDetailKebudayaan = async (id) => {
  const response = await fetch(`${baseURL}/kebudayaan/${id}`);
  const responseJson = await response.json();
  return responseJson;
};

const getAllArtikel = async () => {
  const response = await fetch(`${baseURL}/artikel`);
  const responseJson = await response.json();
  return responseJson;
};

const getDetailArtikel = async (id) => {
  const response = await fetch(`${baseURL}/artikel/${id}`);
  const responseJson = await response.json();
  return responseJson;
};

const getAllEvent = async () => {
  const response = await fetch(`${baseURL}/event`);
  const responseJson = await response.json();
  return responseJson;
};

const getDetailEvent = async (id) => {
  const response = await fetch(`${baseURL}/event/${id}`);
  const responseJson = await response.json();
  return responseJson;
};

const getAllKelas = async () => {
  const response = await fetch(`${baseURL}/kelas`);
  const responseJson = await response.json();
  return responseJson;
};

const getDetailKelas = async (id) => {
  const response = await fetch(`${baseURL}/kelas/${id}`);
  const responseJson = await response.json();
  return responseJson;
};

const getAllUser = async () => {
  const response = await fetch(`${baseURL}/user`);
  const responseJson = await response.json();
  return responseJson;
};

const addUser = async (data) => {
  if (data.method === 'google') {
    const displayName = data.displayName;
    const email = data.email;
    const uid = data.uid;
    const profileImage = data.profile_image;
    const response = await fetch(`${baseURL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        displayName,
        email,
        uid,
        profile_image: profileImage,
      }),
    });
    const responseJson = await response.json();
    return responseJson;
  } else {
    const username = data.usernameValue;
    const email = data.emailValue;
    const uid = data.uid;
    const response = await fetch(`${baseURL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, email, uid }),
    });
    const responseJson = await response.json();
    return responseJson;
  }
};

const addArtikel = async (data) => {
  const response = await fetch(`${baseURL}/artikel`, {
    method: 'POST',
    body: data,
  });
  const responseJson = await response.json();
  return responseJson;
};

const addKebudayaan = async (data) => {
  const response = await fetch(`${baseURL}/kebudayaan`, {
    method: 'POST',
    body: data,
  });
  const responseJson = await response.json();
  return responseJson;
};

const addKelas = async (data) => {
  const response = await fetch(`${baseURL}/kelas`, {
    method: 'POST',
    body: data,
  });
  const responseJson = await response.json(); 
  return responseJson;
};

const addEvent = async (data) => {
  const response = await fetch(`${baseURL}/event`, {
    method: 'POST',
    body: data,
  });
  const responseJson = await response.json(); 
  return responseJson;
};

const isAdminCheck = async (uid) => {
  const response = await fetch(`${baseURL}/admin/${uid}`);
  const { success } = await response.json();
  return success;
};

const getUserProfile = async (uid) => {
  const response = await fetch(`${baseURL}/user/${uid}`);
  const responseJson = await response.json();
  return responseJson;
};

const getHighlight = async () => {
  const response = await fetch(`${baseURL}/highlight`);
  const responseJson = await response.json();
  return responseJson;
};

const getArtikelByAuthor = async (uid) =>{
  const response = await fetch(`${baseURL}/artikel/author/${uid}`)
  const responseJson = response.json()
  return responseJson
}

const editArtikel = async (id,data) =>{
  const response = await fetch(`${baseURL}/artikel/${id}`,{
    method: "PUT",
    body: data
  })
  const responseJson = response.json()
  return responseJson
}

const editEvent = async (id,data) =>{
  const response = await fetch(`${baseURL}/event/${id}`,{
    method: "PUT",
    body: data
  })
  const responseJson = response.json()
  return responseJson
}

const editKebudayaan = async (id,data) =>{
  const response = await fetch(`${baseURL}/kebudayaan/${id}`,{
    method: "PUT",
    body: data
  })
  const responseJson = response.json()
  return responseJson
}

const editKelas = async (id,data) =>{
  const response = await fetch(`${baseURL}/kelas/${id}`,{
    method: "PUT",
    body: data
  })
  const responseJson = response.json()
  return responseJson
}

module.exports = {
  getAllKebudayaan,
  getDetailKebudayaan,
  getAllArtikel,
  getDetailArtikel,
  getAllEvent,
  getDetailEvent,
  getAllKelas,
  getDetailKelas,
  getAllUser,
  addUser,
  addArtikel,
  addKebudayaan,
  addKelas,
  isAdminCheck,
  getUserProfile,
  getHighlight,
  addEvent,
  getArtikelByAuthor,
  editArtikel,
  editEvent,
  editKebudayaan,
  editKelas,
};
