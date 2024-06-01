const express = require("express");
const cors = require("cors");
const multer = require("multer");
const {
  getAllKebudayaan,
  getDetailKebudayaan,
  getKebudayaanByKategori,
} = require("./firebase/model/kebudayaan");
const { getDetailEvent, getAllEvent } = require("./firebase/model/event");
const {
  getDetailArtikel,
  getAllArtikel,
  addArtikel,
} = require("./firebase/model/artikel");
const { successResult, errorResult } = require("./result/result");
const { addUser } = require("./firebase/model/user");

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb" }));
const port = 3000;

// const storage = multer.diskStorage({
//   filename: function (req, file, cb) {
//     cb(null, file.originalname);
//   },
// });

const upload = multer({ storage: multer.memoryStorage() });

app.get("/api/kebudayaan", async (req, res) => {
  const data = await getAllKebudayaan();
  res.json(successResult("Data berhasil ditampilkan", data)).status(200);
});

app.get("/api/kebudayaan/detail/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const data = await getDetailKebudayaan(id);
    res
      .json(successResult(`Data ${id} berhasil ditampilkan`, data))
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

app.post("/api/register", (req, res) => {
  const body = req.body;
  const data = addUser(body);
  res.json(successResult("Register Success", data)).status(200);
});

app.post("/api/artikel", upload.single("file"), async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const body = {...req.body, createdAt: new Date()};
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
    await addArtikel('artikel',body, thubmnail);
    res.status(200).json(successResult("Add Artikel Success", body));
  }
});

app.use("/", (req, res) => {
  res.status(404).json(errorResult("Not Found"));
});

app.listen(port, () => {
  console.log(`PapuCrafts Server Listening At ${port}`);
});
