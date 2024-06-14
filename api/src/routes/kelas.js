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
const {getToken} = require("../firebase/model/admin")
const { successResult, errorResult } = require("../result/result");

const app = Router();
const upload = multer({ storage: multer.memoryStorage() });

app.get("/api/kelas", async (req, res) => {
  try{
    const data = await getAllKelas();
    res.status(200).json(successResult("Data ditampilkan", data));
  }catch(err){
    res.status(400).json('something error')
  }
});

app.get("/api/kelas/:id", async (req, res) => {
  const { id } = req.params;
  try{
    const data = await getDetailKelas(id);
    if (data) {
      await updateKelasViews(id);
      const updatedData = await getDetailKelas(id);
      res.status(200).json(successResult(`Data ${id} ditampilkan`, updatedData));
    } else {
      res.status(400).json(errorResult("Data tidak ditemukan"));
    }
  }catch(err){
    res.status(400).json('something error')
  }
});

app.delete("/api/kelas/:id", async (req, res) => {
  const { id } = req.params;
  try{
    const bearerHeader = req.headers['authorization']
    const {valid} = await getToken(bearerHeader)
    if(!valid){
      return res.status(403).json('Unauthorized Access')
    }

    const isExist = await getDetailKelas(id);
    if (isExist) {
      await deleteKelas(id);
      res.status(200).json(successResult(`Data ${id} berhasil dihapus`));
    } else {
      res.status(400).json(errorResult(`Data ${id} tidak ditemukan`));
    }
  }catch(err){
    res.status(400).json('something error')
  }
});

app.post("/api/kelas", upload.single("file"), async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  try{
    const bearerHeader = req.headers['authorization']
    const {valid} = await getToken(bearerHeader)
    if(!valid){
      return res.status(403).json('Unauthorized Access')
    }

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
  }catch(err){
    res.status(400).json('something error')
  }
});

app.put("/api/kelas/:id", upload.single("file"), async (req, res) => {
  const { id } = req.params;
  try{
    const bearerHeader = req.headers['authorization']
    const {valid} = await getToken(bearerHeader)
    if(!valid){
      return res.status(403).json('Unauthorized Access')
    }

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
  }catch(err){
    res.status(400).json('something error')
  }
});

module.exports = app;
