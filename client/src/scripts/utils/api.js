// const baseURL = "http://localhost:3000/api";
const baseURL = "https://3000-idx-papucraft-1717066276171.cluster-bs35cdu5w5cuaxdfch3hqqt7zm.cloudworkstations.dev/api"

const getAllKebudayaan = async () => {
  const response = await fetch(`${baseURL}/kebudayaan`);
  const responseJson = await response.json();
  return responseJson;
};

const addUser = async ({usernameValue, emailValue}) =>{
  const data = {usernameValue,emailValue}
  await fetch(`${baseURL}/register`, {
    method: 'POST',
    body: data,
    credentials: 'include'
  })
  const responseJson = await response.json()
  return responseJson
}

module.exports = { getAllKebudayaan, addUser };
