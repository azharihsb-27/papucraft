const baseURL = "http://localhost:3000/api";

const getAllKebudayaan = async () => {
  const response = await fetch(`${baseURL}/kebudayaan`);
  const responseJson = await response.json();
  return responseJson;
};

module.exports = { getAllKebudayaan };
