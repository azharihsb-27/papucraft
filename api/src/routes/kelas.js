const { Router } = require("express");
const multer = require("multer");
const {
  getAllKelas,
  getDetailKelas,
  addKelas,
  deleteKelas,
  updateKelasViews,
  updateKelasNoImages,
  updateKelasWithImages,
} = require("../firebase/model/kelas");
const { successResult, errorResult } = require("../result/result");

const app = Router();
const upload = multer({ storage: multer.memoryStorage() });

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
    res.status(200).json(successResult(`Data ${id} ditampilkan`, updatedData));
  } else {
    res.status(400).json(errorResult("Data tidak ditemukan"));
  }
});

app.delete("/api/kelas/:id", async (req, res) => {
  const { id } = req.params;
  const isExist = await getDetailKelas(id);
  if (isExist) {
    await deleteKelas(id);
    res.status(200).json(successResult(`Data ${id} berhasil dihapus`));
  } else {
    res.status(400).json(errorResult(`Data ${id} tidak ditemukan`));
  }
});

app.post("/api/kelas", upload.single("file"), async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const body = {...req.body, views: 0 };
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

app.put("/api/kelas/:id", upload.single("file"), async (req, res) => {
  const { id } = req.params;
  const isExist = await getDetailKelas(id);
  const data = { ...req.body, updatedAt: `${new Date()}` };

  if (!isExist) {
    return res.status(400).json(errorResult("Data tidak ditemukan"));
  }

  if (!req.file) {
    await updateKelasNoImages(data, id);
    res.status(201).json(successResult(`Data ${id} berhasil diupdate`));
  } else {
    const thumbnail = req.file;
    const { mimetype } = thumbnail;
    const imageOnly = mimetype.split("/")[0];
    if (imageOnly !== "image") {
      res.status(400).json(errorResult("Image Only!"));
    } else {
      await updateKelasWithImages({ data, id, thumbnail });
      res.status(201).json(successResult(`Data ${id} berhasil diupdate`));
    }
  }
});

module.exports = app;
