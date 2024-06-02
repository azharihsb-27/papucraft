const baseURL = "https://3000-idx-papucraft-1717066276171.cluster-bs35cdu5w5cuaxdfch3hqqt7zm.cloudworkstations.dev/api";

const getAllKebudayaan = async () => {
  const response = await fetch(`${baseURL}/kebudayaan`);
  const responseJson = await response.json();
  return responseJson;
};

const getAllArtikel = async () => {
  const response = await fetch(`${baseURL}/kebudayaan`);
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

const addArtikel = async ({ judul, source, file, body }) => {
  const data = new FormData();
  data.set("judul", judul);
  data.set("source", source);
  data.set("file", file[0]);
  data.set("body", body);

  const response = await fetch(`${baseURL}/artikel`, {
    method: "POST",
    body: data,
  });
  const responseJson = await response.json();
  return responseJson;
};

module.exports = { getAllKebudayaan, addUser, getAllArtikel, addArtikel, getDetailArtikel };
