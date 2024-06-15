const baseURL = 'https://papucraft-server.vercel.app/api';
const token = sessionStorage.getItem('token')

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
    headers: {
      'Authorization': `Bearer ${token}`,
    },
    body: data,
  });
  const responseJson = await response.json();
  return responseJson;
};

const addKebudayaan = async (data) => {
  const response = await fetch(`${baseURL}/kebudayaan`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
    body: data,
  });
  const responseJson = await response.json();
  return responseJson;
};

const addKelas = async (data) => {
  const response = await fetch(`${baseURL}/kelas`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
    body: data,
  });
  const responseJson = await response.json(); 
  return responseJson;
};

const addEvent = async (data) => {
  const response = await fetch(`${baseURL}/event`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
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
    headers: {
      'Authorization': `Bearer ${token}`,
    },
    body: data
  })
  const responseJson = response.json()
  return responseJson
}

const editEvent = async (id,data) =>{
  const response = await fetch(`${baseURL}/event/${id}`,{
    method: "PUT",
    headers: {
      'Authorization': `Bearer ${token}`,
    },
    body: data
  })
  const responseJson = response.json()
  return responseJson
}

const editKebudayaan = async (id,data) =>{
  const response = await fetch(`${baseURL}/kebudayaan/${id}`,{
    method: "PUT",
    headers: {
      'Authorization': `Bearer ${token}`,
    },
    body: data
  })
  const responseJson = response.json()
  return responseJson
}

const editKelas = async (id,data) =>{
  const response = await fetch(`${baseURL}/kelas/${id}`,{
    method: "PUT",
    headers: {
      'Authorization': `Bearer ${token}`,
    },
    body: data
  })
  const responseJson = response.json()
  return responseJson
}

const updateUserProfile = async (id,data) =>{
  const response = await fetch(`${baseURL}/user/${id}`,{
    method: "PUT",
    headers: {
      'Authorization': `Bearer ${token}`,
    },
    body: data
  })
  const responseJson = response.json()
  return responseJson
}

const getEventByAuthor = async (id) =>{
  const response = await fetch(`${baseURL}/event/author/${id}`)
  const responseJson = response.json()
  return responseJson
}

const sendResetPassword = async (email) =>{
  const data = {email}
  const response = await fetch(`${baseURL}/resetpassword`, {
    method: "POST",
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  })
  const responseJson = response.json()
  return responseJson
}

const getAnalytic = async () =>{
  const response = await fetch(`${baseURL}/analytic`)
  const responseJson = response.json()
  return responseJson
}

const deleteUser = async (uid) =>{
  const response = await fetch(`${baseURL}/admin/user/${uid}`, {
    method: "DELETE",
    headers: {
      'Authorization': `Bearer ${token}`,
    },
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
  updateUserProfile,
  getEventByAuthor,
  sendResetPassword,
  getAnalytic,
  deleteUser,
};
