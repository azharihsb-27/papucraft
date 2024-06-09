const { Router } = require("express");
const multer = require("multer");
const { successResult, errorResult } = require("../result/result");
const {
  getAllKebudayaan,
  getDetailKebudayaan,
  addKebudayaan,
  deleteKebudayaan,
  updateKebudayaanViews,
  updateKebudayaanNoImages,
  updateKebudayaanWithImages,
} = require("../firebase/model/kebudayaan");

const app = Router();
const upload = multer({ storage: multer.memoryStorage() });

app.get("/api/kebudayaan", async (req, res) => {
  const data = await getAllKebudayaan();
  res.status(200).json(successResult("Data berhasil ditampilkan", data));
});

app.delete("/api/kebudayaan/:id", async (req, res) => {
  const { id } = req.params;
  const isExist = await getDetailKebudayaan(id);
  if (isExist) {
    await deleteKebudayaan(id);
    res.status(200).json(successResult(`Data ${id} berhasil dihapus`));
  } else {
    res.status(400).json(errorResult(`Data ${id} tidak ditemukan`));
  }
});

app.get("/api/kebudayaan/:id", async (req, res) => {
  const { id } = req.params;
  const data = await getDetailKebudayaan(id);
  if (data) {
    await updateKebudayaanViews(id);
    const updatedData = await getDetailKebudayaan(id);
    res.status(200).json(successResult(`Data ${id} ditampilkan`, updatedData));
  } else {
    res.status(400).json(errorResult("Data tidak ditemukan"));
  }
});

app.post("/api/kebudayaan", upload.single("file"), async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const body = { ...req.body, views: 0 };
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

app.put("/api/kebudayaan/:id", upload.single("file"), async (req, res) => {
  const { id } = req.params;
  const isExist = await getDetailKebudayaan(id);
  const data = { ...req.body, updatedAt: `${new Date()}` };

  if (!isExist) {
    return res.status(400).json(errorResult("Data tidak ditemukan"));
  }

  if (!req.file) {
    await updateKebudayaanNoImages(data, id);
    res.status(201).json(successResult(`Data ${id} berhasil diupdate`));
  } else {
    const thumbnail = req.file;
    const { mimetype } = thumbnail;
    const imageOnly = mimetype.split("/")[0];
    if (imageOnly !== "image") {
      res.status(400).json(errorResult("Image Only!"));
    } else {
      await updateKebudayaanWithImages({ data, id, thumbnail });
      res.status(201).json(successResult(`Data ${id} berhasil diupdate`));
    }
  }
});

module.exports = app;
