const { Router } = require("express");
const { successResult, errorResult } = require("../result/result");
const { getAllArtikel } = require("../firebase/model/artikel");
const { getAllKebudayaan } = require("../firebase/model/kebudayaan");
const { getAllEvent } = require("../firebase/model/event");
const { getDetailAdmin, updateViewsPage, getDetailUser, getAllUser, deleteUser } = require("../firebase/model/admin");

const app = Router();

app.get("/api/highlight", async (req, res) => {
  const dataKebudayaan = (await getAllKebudayaan()).slice(0,4)
  const dataArtikel = await getAllArtikel()
  const artikelTerbaru = dataArtikel[dataArtikel.length - 1]
  const dataEvent = await getAllEvent();
  const eventTerbaru = dataEvent[dataEvent.length - 1]
  await updateViewsPage();
  const data = { kebudayaan: dataKebudayaan, artikel: artikelTerbaru,event: eventTerbaru };
  console.log(eventTerbaru)
  res.status(200).json(successResult("Data berhasil ditampilkan", data));
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

app.get("/api/admin/user/:email", async (req,res)=>{
  const {email} = req.params
  const data = await getDetailUser(email)
  if(data){
    res.status(200).json(successResult(`Data ${email} ditampilkan`,data));
  }else{
    res.status(400).json(errorResult(`Data ${email} tidak ada`));
  }
})

app.get("/api/user", async (req,res)=>{
  const data = await getAllUser()
  if(data){
    res.status(200).json(successResult(`Data ditampilkan`, data))
  }else{
    res.status(400).json(errorResult(`Data tidak ada`));
  }
})

app.delete("/api/admin/user/:id", async (req, res) => {
  const { id } = req.params;
  const data = await getDetailUser(id);
  if (data) {
    await deleteUser(id)
    res.status(200).json(successResult(`Data ${id} dihapus`));
  } else {
    res.status(400).json(errorResult(`Data ${id} tidak ditemukan`));
  }
});

module.exports = app;
