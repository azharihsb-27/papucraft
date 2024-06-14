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
const {getToken} = require("../firebase/model/admin")
const { successResult, errorResult } = require("../result/result");

const app = Router();
const upload = multer({ storage: multer.memoryStorage() });

app.get("/api/artikel", async (req, res) => {
  try{
    const data = await getAllArtikel();
    res.status(200).json(successResult("Data ditampilkan", data));
  }catch(err){
    res.status(400).json('something error')
  }
});

app.get("/api/artikel/:id", async (req, res) => {
  const { id } = req.params;
  try{
    const data = await getDetailArtikel(id);
    if (data) {
      await updateArtikelViews(id);
      const updatedData = await getDetailArtikel(id);
      res.status(200).json(successResult(`Data ${id} ditampilkan`, updatedData));
    } else {
      res.status(400).json(errorResult("Data tidak ditemukan"));
    }
  }catch(err){
    res.status(400).json('something error')
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
  try{
    const bearerHeader = req.headers['authorization']
    const {valid} = await getToken(bearerHeader)
    if(!valid){
      return res.status(403).json('Unauthorized Access')
    }

    const isExist = await getDetailArtikel(id);
    if (isExist) {
      await deleteArtikel(id);
      res.status(200).json(successResult(`Data ${id} berhasil dihapus`));
    } else {
      res.status(400).json(errorResult(`Data ${id} tidak ditemukan`));
    }
  }catch(err){
    res.status(400).json('something error')
  }
});

app.post("/api/artikel", upload.single("file"), async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  try{
    const bearerHeader = req.headers['authorization']
    const {valid} = await getToken(bearerHeader)
    if(!valid){
      return res.status(403).json('Unauthorized Access')
    }

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
  }catch(err){
    res.status(400).json('something error')
  }
});

app.put("/api/artikel/:id", upload.single("file"), async (req, res) => {
  const { id } = req.params;
  try{
    const bearerHeader = req.headers['authorization']
    const {valid} = await getToken(bearerHeader)
    if(!valid){
      return res.status(403).json('Unauthorized Access')
    }

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
  }catch(err){
    res.status(400).json('something error')
  }
});

module.exports = app;
