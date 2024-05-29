const errorResult = (message) => {
  return { success: false, message };
};

const successResult = (message, data) => {
  return { success: true, message, data };
};

module.exports = { errorResult, successResult };
