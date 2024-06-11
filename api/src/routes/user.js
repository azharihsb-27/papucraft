const { Router } = require("express");
const {
  getDetailUser,
  addUser,
} = require("../firebase/model/user");
const { successResult, errorResult } = require("../result/result");
const app = Router();

app.get("/api/user/:id", async (req, res) => {
  const { id } = req.params;
  const data = await getDetailUser(id);
  if (data) {
    res.status(200).json(successResult(`Data ${id} ditampilkan`, data));
  } else {
    res.status(400).json(errorResult(`Data ${id} tidak ditemukan`));
  }
});

app.post("/api/register", async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const data = await addUser(req.body);
  res.status(200).json(successResult("Register Success", data));
});

module.exports = app;
