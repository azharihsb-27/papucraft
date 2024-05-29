const express = require("express");
const {
  getAllKebudayaan,
  getDetailKebudayaan,
  getKebudayaanByKategori,
} = require("./firebase/model/kebudayaan");
const { getDetailEvent, getAllEvent } = require("./firebase/model/event");
const { getDetailArtikel, getAllArtikel } = require("./firebase/model/artikel");
const { successResult, errorResult } = require("./result/result");

const app = express();

const port = 3000;

app.get("/api/kebudayaan", async (req, res) => {
  const data = await getAllKebudayaan();
  res.json(successResult("Data berhasil ditampilkan", data)).status(200);
});

app.get("/api/kebudayaan/detail/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const data = await getDetailKebudayaan(id);
    res
      .json(successResult(`Data ${id} berhasil ditampilkan`, data ))
      .status(200);
  } catch (error) {
    res.json(errorResult(`Data ${id} tidak ditemukan`)).status(404);
  }
});

app.get("/api/kebudayaan/kategori/:kategori", async (req, res) => {
  const { kategori } = req.params;
  const data = await getKebudayaanByKategori(kategori);
});

app.get("/api/event", async (req, res) => {
  const data = await getAllEvent();
  res.json(successResult("Data ditampilkan", data)).status(200);
});

app.get("/api/event/detail/:id", async (req, res) => {
  const { id } = req.params;
  const data = await getDetailEvent(id);
  res.json(successResult("Data ditampilkan", data)).status(200);
});

app.get("/api/artikel", async (req, res) => {
  const data = await getAllArtikel();
  res.json(successResult("Data ditampilkan", data)).status(200);
});

app.get("/api/artikel/detail/:id", async (req, res) => {
  const { id } = req.params;
  const data = await getDetailArtikel(id);
  res.json(successResult("Data ditampilkan", data)).status(200);
});

app.use("/", (req, res) => {
  res.json(errorResult("Not Found")).status(404);
});

app.listen(port, () => {
  console.log(`PapuCrafts Server Listening At ${port}`);
});
