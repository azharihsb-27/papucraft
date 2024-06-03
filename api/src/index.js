const express = require("express");
const cors = require("cors");
const multer = require("multer");
const {
  getAllKebudayaan,
  getDetailKebudayaan,
  getKebudayaanByKategori,
  addKebudayaan,
  deleteKebudayaan,
} = require("./firebase/model/kebudayaan");
const { getDetailEvent, getAllEvent } = require("./firebase/model/event");
const {
  getDetailArtikel,
  getAllArtikel,
  addArtikel,
  deleteArtikel,
} = require("./firebase/model/artikel");
const { successResult, errorResult } = require("./result/result");
const { addUser } = require("./firebase/model/user");

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb" }));
const port = 3000;

const upload = multer({ storage: multer.memoryStorage() });

app.get("/api/kebudayaan", async (req, res) => {
  const data = await getAllKebudayaan();
  res.header("Access-Control-Allow-Origin", "*");
  res.status(200).json(successResult("Data berhasil ditampilkan", data));
});

app.delete("/api/kebudayaan/delete/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await deleteArtikel(id);
    res.status(200).json(successResult(`Data ${id} berhasil dihapus`));
  } catch (error) {
    res.status(400).json(errorResult(`Data ${id} tidak ditemukan`));
  }
});

app.get("/api/kebudayaan/detail/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const data = await getDetailKebudayaan(id);
    res
      .status(200)
      .json(successResult(`Data ${id} berhasil ditampilkan`, data));
  } catch (error) {
    res.status(404).json(errorResult(`Data ${id} tidak ditemukan`));
  }
});

app.get("/api/kebudayaan/kategori/:kategori", async (req, res) => {
  const { kategori } = req.params;
  const data = await getKebudayaanByKategori(kategori);
});

app.get("/api/event", async (req, res) => {
  const data = await getAllEvent();
  res.status(200).json(successResult("Data ditampilkan", data));
});

app.get("/api/event/detail/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const data = await getDetailEvent(id);
    res.status(200).json(successResult(`Data ${id} ditampilkan`, data));
  } catch (err) {
    res.status(400).json(errorResult("Data tidak ditemukan"));
  }
});

app.get("/api/artikel", async (req, res) => {
  const data = await getAllArtikel();
  res.status(200).json(successResult("Data ditampilkan", data));
});

app.get("/api/artikel/detail/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const data = await getDetailArtikel(id);
    res.status(200).json(successResult(`Data ${id} ditampilkan`, data));
  } catch (err) {
    res.status(400).json(errorResult("Data tidak ditemukan"));
  }
});

app.post("/api/register", (req, res) => {
  const body = req.body;
  const data = addUser(body);
  res.status(200).json(successResult("Register Success", data));
});

app.post("/api/artikel", upload.single("file"), async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const body = { ...req.body, createdAt: new Date() };
  if (!req.file) {
    res.status(400).json(errorResult("Fill the thumbnail!"));
    return;
  }
  const thubmnail = req.file;
  const { mimetype } = thubmnail;
  const imageOnly = mimetype.split("/")[0];
  if (imageOnly !== "image") {
    res.status(400).json(errorResult("Image Only!"));
  } else {
    await addArtikel("artikel", body, thubmnail);
    res.status(200).json(successResult("Add Artikel Success", body));
  }
});

app.post("/api/kebudayaan", upload.single("file"), async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const body = req.body;
  if (!req.file) {
    res.status(400).json(errorResult("Fill the thumbnail!"));
    return;
  }
  const thubmnail = req.file;
  const { mimetype } = thubmnail;
  const imageOnly = mimetype.split("/")[0];
  if (imageOnly !== "image") {
    res.status(400).json(errorResult("Image Only!"));
  } else {
    await addKebudayaan("kebudayaan", body, thubmnail);
    res.status(200).json(successResult("Add Kebudayaan Success", body));
  }
});

app.use("/", (req, res) => {
  res.status(404).json(errorResult("Not Found"));
});

app.listen(port, () => {
  console.log(`PapuCrafts Server Listening At ${port}`);
});
