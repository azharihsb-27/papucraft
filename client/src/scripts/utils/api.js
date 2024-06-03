const baseURL = "http://localhost:3000/api";

const getAllKebudayaan = async () => {
  const response = await fetch(`${baseURL}/kebudayaan`);
  const responseJson = await response.json();
  return responseJson;
};

const getAllArtikel = async () => {
  const response = await fetch(`${baseURL}/artikel`);
  const responseJson = await response.json();
  return responseJson;
};

const getDetailArtikel = async (id) =>{
  const response = await fetch(`${baseURL}/artikel/detail/${id}`)
  const responseJson = await response.json()
  return responseJson
}

const addUser = async ({ usernameValue, emailValue, uid }) => {
  const data = { usernameValue, emailValue, uid };
  const response = await fetch(`${baseURL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const responseJson = await response.json();
  return responseJson;
};

const addArtikel = async (data) => {
  const response = await fetch(`${baseURL}/artikel`, {
    method: "POST",
    body: data,
  });
  const responseJson = await response.json();
  return responseJson;
};

const addKebudayaan = async (data) => {
  const response = await fetch(`${baseURL}/kebudayaan`, {
    method: "POST",
    body: data,
  });
  const responseJson = await response.json();
  return responseJson;
};

module.exports = { getAllKebudayaan, addUser, getAllArtikel, addArtikel, getDetailArtikel, addKebudayaan };
