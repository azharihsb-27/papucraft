const { Router } = require("express");
const multer = require("multer");
const {
  getDetailArtikel,
  getAllArtikel,
  addArtikel,
  deleteArtikel,
  updateArtikelViews,
  updateArtikelNoImages,
  updateArtikelWithImages,
  getArtikelByAuthorId,
} = require("../firebase/model/artikel");
const { successResult, errorResult } = require("../result/result");

const app = Router();
const upload = multer({ storage: multer.memoryStorage() });

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

app.get("/api/artikel/author/:uid", async (req, res) => {
  const { uid } = req.params;
  try{
    const data = await getArtikelByAuthorId(uid)
    if(data){
      res.status(200).json(successResult(`Data artikel dengan author${uid} ditampilkan`, data));
    }else{
      res.status(400).json(errorResult("Data tidak ditemukan"));
    }
  }catch(err){
    res.status(400).json(errorResult('Something Error'))
  }
});



app.delete("/api/artikel/:id", async (req, res) => {
  const { id } = req.params;
  const isExist = await getDetailArtikel(id);
  if (isExist) {
    await deleteArtikel(id);
    res.status(200).json(successResult(`Data ${id} berhasil dihapus`));
  } else {
    res.status(400).json(errorResult(`Data ${id} tidak ditemukan`));
  }
});

app.post("/api/artikel", upload.single("file"), async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const body = { ...req.body, createdAt: `${new Date()}`, views: 0 };
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
    res.status(201).json(successResult("Add Artikel Success"));
  }
});

app.put("/api/artikel/:id", upload.single("file"), async (req, res) => {
  const { id } = req.params;
  const isExist = await getDetailArtikel(id);
  const data = { ...req.body, updatedAt: `${new Date()}` };

  if (!isExist) {
    return res.status(400).json(errorResult("Data tidak ditemukan"));
  }

  if (!req.file) {
    await updateArtikelNoImages(data, id);
    res.status(201).json(successResult(`Data ${id} berhasil diupdate`));
  } else {
    const thumbnail = req.file;
    const { mimetype } = thumbnail;
    const imageOnly = mimetype.split("/")[0];
    if (imageOnly !== "image") {
      res.status(400).json(errorResult("Image Only!"));
    } else {
      await updateArtikelWithImages({ data, id, thumbnail });
      res.status(201).json(successResult(`Data ${id} berhasil diupdate`));
    }
  }
});

module.exports = app;
