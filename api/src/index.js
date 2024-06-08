const express = require("express");
const cors = require("cors");
const multer = require("multer");
const {
  getAllKebudayaan,
  getDetailKebudayaan,
  addKebudayaan,
  deleteKebudayaan,
} = require("./firebase/model/kebudayaan");
const { getDetailEvent, getAllEvent } = require("./firebase/model/event");
const {
  getDetailArtikel,
  getAllArtikel,
  addArtikel,
  deleteArtikel,
  updateArtikelViews,
} = require("./firebase/model/artikel");
const {
  getAllKelas,
  getDetailKelas,
  addKelas,
  deleteKelas,
  updateKelasViews,
} = require("./firebase/model/kelas");
const { successResult, errorResult } = require("./result/result");
const { getDetailUser, addUser } = require("./firebase/model/user");
const { getDetailAdmin, updateViewsPage } = require("./firebase/model/admin");

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb" }));
const port = 3000;

const upload = multer({ storage: multer.memoryStorage() });

app.get("/api/highlight", async (req,res)=>{
  const dataKebudayaan = await getAllKebudayaan()
  const dataArtikel = await getAllArtikel()
  await updateViewsPage()
  const data = {kebudayaan: dataKebudayaan, artikel: dataArtikel}
  res.status(200).json(successResult('Data berhasil ditampilkan', data))
})

app.get("/api/kebudayaan", async (req, res) => {
  const data = await getAllKebudayaan();
  res.status(200).json(successResult("Data berhasil ditampilkan", data));
});

app.delete("/api/kebudayaan/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await deleteKebudayaan(id);
    res.status(200).json(successResult(`Data ${id} berhasil dihapus`));
  } catch (error) {
    res.status(400).json(errorResult(`Data ${id} tidak ditemukan`));
  }
});

app.get("/api/kebudayaan/:id", async (req, res) => {
  const { id } = req.params;
  const data = await getDetailKebudayaan(id);
  if (data) {
    res
      .status(200)
      .json(successResult(`Data ${id} berhasil ditampilkan`, data));
  } else {
    res.status(404).json(errorResult(`Data ${id} tidak ditemukan`));
  }
});

app.get("/api/event", async (req, res) => {
  const data = await getAllEvent();
  res.status(200).json(successResult("Data ditampilkan", data));
});

app.get("/api/event/:id", async (req, res) => {
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

app.get("/api/artikel/:id", async (req, res) => {
  const { id } = req.params;
  const data = await getDetailArtikel(id);
  if (data) {
    await updateArtikelViews(id);
    const updatedData = await getDetailArtikel(id);
    res.status(200).json(successResult(`Data ${id} ditampilkan`, updatedData));
  } else {
    res.status(400).json(errorResult("Data tidak ditemukan"));
  }
});

app.delete("/api/artikel/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await deleteArtikel(id);
    res.status(200).json(successResult(`Data ${id} berhasil dihapus`));
  } catch (error) {
    res.status(400).json(errorResult(`Data ${id} tidak ditemukan`));
  }
});

app.get("/api/kelas", async (req, res) => {
  const data = await getAllKelas();
  res.status(200).json(successResult("Data ditampilkan", data));
});

app.get("/api/kelas/:id", async (req, res) => {
  const { id } = req.params;
  const data = await getDetailKelas(id);
  if (data) {
    await updateKelasViews(id);
    const updatedData = await getDetailKelas(id);
    res.status(200).json(successResult(`Data ${id} ditampilkan`, data));
  } else {
    res.status(400).json(errorResult("Data tidak ditemukan"));
  }
});

app.delete("/api/kelas/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await deleteKelas(id);
    res.status(200).json(successResult(`Data ${id} berhasil dihapus`));
  } catch (error) {
    res.status(400).json(errorResult(`Data ${id} tidak ditemukan`));
  }
});

app.get("/api/user/:id", async (req, res) => {
  const { id } = req.params;
  const data = await getDetailUser(id);
  if (data) {
    res.status(200).json(successResult(`Data ${id} ditampilkan`, data));
  } else {
    res.status(400).json(errorResult(`Data ${id} tidak ditemukan`));
  }
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

app.post("/api/register", async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const data = await addUser(req.body);
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
    res.status(201).json(successResult("Add Artikel Success", body));
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

app.post("/api/kelas", upload.single("file"), async (req, res) => {
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
    await addKelas("kelas", body, thubmnail);
    res.status(200).json(successResult("Add Kelas Success", body));
  }
});

app.use("/", (req, res) => {
  res.status(404).json(errorResult("Not Found"));
});

app.listen(port, () => {
  console.log(`PapuCraft Server Listening At ${port}`);
});
