const { Router } = require("express");
const { successResult, errorResult } = require("../result/result");
const { getAllArtikel } = require("../firebase/model/artikel");
const { getAllKebudayaan } = require("../firebase/model/kebudayaan");
const { getDetailAdmin, updateViewsPage } = require("../firebase/model/admin");

const app = Router();

app.get("/api/highlight", async (req, res) => {
  const dataKebudayaan = await getAllKebudayaan();
  const dataArtikel = await getAllArtikel();
  await updateViewsPage();
  const data = { kebudayaan: dataKebudayaan, artikel: dataArtikel };
  res.status(200).json(successResult("Data berhasil ditampilkan", data));
});

app.get("/api/admin/:id", async (req, res) => {
  const { id } = req.params;
  const data = await getDetailAdmin(id);
  if (data) {
    res.status(200).json(successResult(`Data ${id} ditampilkan`));
  } else {
    res.status(400).json(errorResult(`Data ${id} tidak ditemukan`));
  }
});

module.exports = app;
