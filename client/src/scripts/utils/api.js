const baseURL = "http://localhost:3000/api";

const getAllKebudayaan = async () => {
  const response = await fetch(`${baseURL}/kebudayaan`);
  const responseJson = await response.json();
  return responseJson;
};

const addUser = async ({usernameValue, emailValue, uid}) =>{
  const data = {usernameValue,emailValue,uid}
  await fetch(`${baseURL}/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
  })
  const responseJson = await response.json()
  return responseJson
}

module.exports = { getAllKebudayaan, addUser };
