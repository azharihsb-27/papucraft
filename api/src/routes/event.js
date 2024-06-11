const { Router } = require("express");
const multer = require("multer");
const {
  getDetailEvent,
  getAllEvent,
  addEvent,
  deleteEvent,
  updateEventViews,
  updateEventNoImages,
  updateEventWithImages,
} = require("../firebase/model/event");
const { successResult, errorResult } = require("../result/result");

const app = Router();
const upload = multer({ storage: multer.memoryStorage() });

app.get("/api/event", async (req, res) => {
  const data = await getAllEvent();
  res.status(200).json(successResult("Data ditampilkan", data));
});

app.get("/api/event/:id", async (req, res) => {
  const { id } = req.params;
  const data = await getDetailEvent(id);
  if (data) {
    await updateEventViews(id);
    const updatedData = await getDetailEvent(id);
    res.status(200).json(successResult(`Data ${id} ditampilkan`, updatedData));
  } else {
    res.status(400).json(errorResult("Data tidak ditemukan"));
  }
});

app.delete("/api/event/:id", async (req, res) => {
  const { id } = req.params;
  const isExist = await getDetailEvent(id);
  if (isExist) {
    await deleteEvent(id);
    res.status(200).json(successResult(`Data ${id} berhasil dihapus`));
  } else {
    res.status(400).json(errorResult(`Data ${id} tidak ditemukan`));
  }
});

app.post("/api/event", upload.single("file"), async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const body = { ...req.body, createdAt: new Date(), views: 0 };
  if (!req.file) {
    res.status(400).json(errorResult("Fill the thumbnail!"));
    return;
  }
  const thumbnail = req.file;
  const { mimetype } = thumbnail;
  const imageOnly = mimetype.split("/")[0];
  if (imageOnly !== "image") {
    res.status(400).json(errorResult("Image Only!"));
  } else {
    const data = await addEvent("event", body, thumbnail);
    res.status(200).json(successResult("Add Event Success", data));
  }
});

app.put("/api/event/:id", upload.single("file"), async (req, res) => {
  const { id } = req.params;
  const isExist = await getDetailEvent(id);
  const data = { ...req.body, updatedAt: `${new Date()}` };

  if (!isExist) {
    return res.status(400).json(errorResult("Data tidak ditemukan"));
  }

  if (!req.file) {
    await updateEventNoImages(data, id);
    res.status(201).json(successResult(`Data ${id} berhasil diupdate`));
  } else {
    const thumbnail = req.file;
    const { mimetype } = thumbnail;
    const imageOnly = mimetype.split("/")[0];
    if (imageOnly !== "image") {
      res.status(400).json(errorResult("Image Only!"));
    } else {
      await updateEventWithImages({ data, id, thumbnail });
      res.status(201).json(successResult(`Data ${id} berhasil diupdate`));
    }
  }
});

module.exports = app; 
