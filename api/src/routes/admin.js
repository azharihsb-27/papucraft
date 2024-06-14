const { Router } = require("express");
const { successResult, errorResult } = require("../result/result");
const { getAllArtikel } = require("../firebase/model/artikel");
const { getAllKebudayaan } = require("../firebase/model/kebudayaan");
const { getAllEvent } = require("../firebase/model/event");
const { getDetailAdmin, updateViewsPage, getDetailUserByAdmin, getAllUser, deleteUser, getToken, getAnalytic } = require("../firebase/model/admin");
const { deleteUserFromDb } = require("../firebase/model/user");

const app = Router();

app.get("/api/highlight", async (req, res) => {
  try{
    const dataKebudayaan = (await getAllKebudayaan()).slice(0,4)
    const dataArtikel = await getAllArtikel()
    const artikelTerbaru = dataArtikel[dataArtikel.length - 1]
    const dataEvent = await getAllEvent();
    const eventTerbaru = dataEvent[dataEvent.length - 1]
    await updateViewsPage();
    const data = { kebudayaan: dataKebudayaan, artikel: artikelTerbaru,event: eventTerbaru };
    res.status(200).json(successResult("Data berhasil ditampilkan", data));
  }catch(err){
    res.status(400).json(errorResult('something error'))
  }
});

app.get("/api/analytic", async (req,res)=>{
  try{
    const dataAnalytic = await getAnalytic()
    res.status(200).json(successResult("Data analytic ditampilkan",dataAnalytic))
  }catch(err){
    res.status(400).json(errorResult('something error'))
  }
})

app.get("/api/admin/:id", async (req, res) => {
  const { id } = req.params;
  try{
    const data = await getDetailAdmin(id);
    if (data) {
      res.status(200).json(successResult(`Data ${id} ditampilkan`));
    } else {
      res.status(400).json(errorResult(`Data ${id} tidak ditemukan`));
    }
  }catch(err){
  }
});

app.get("/api/admin/user/:uid", async (req,res)=>{
  const {uid} = req.params
  try{
    const data = await getDetailUserByAdmin(uid)
    if(data){
      res.status(200).json(successResult(`Data ${uid} ditampilkan`,data));
    }else{
      res.status(400).json(errorResult(`Data ${uid} tidak ada`));
    }
  }catch(err){
    res.status(400).json(errorResult('something error'))
  }
})

app.get("/api/user", async (req,res)=>{
  const data = await getAllUser()
  try{
    if(data){
      res.status(200).json(successResult(`Data ditampilkan`, data))
    }else{
      res.status(400).json(errorResult(`Data tidak ada`));
    }
  }catch(err){
    res.status(400).json(errorResult('something error'))
  }
})

app.delete("/api/admin/user/:uid", async (req, res) => {
  const { uid } = req.params;
  try{
    const bearerHeader = req.headers['authorization']
    const {valid} = await getToken(bearerHeader)
    if(!valid){
      return res.status(403).json('Unauthorized Access')
    }
    const data = await getDetailUserByAdmin(uid);
    if (data) {
      await deleteUser(uid)
      await deleteUserFromDb(uid)
      res.status(200).json(successResult(`Data ${uid} dihapus`));
    } else {
      res.status(400).json(errorResult(`Data ${uid} tidak ditemukan`));
    }
  }catch(err){
    res.status(400).json(errorResult('something error'))
  }
});

app.get("/api/admin/tes/token", async (req,res)=>{
  res.header("Access-Control-Allow-Origin", "*");
  try{
    const bearerHeader = req.headers['authorization']
    const {valid} = await getToken(bearerHeader)
    if(valid){
      res.status(200).json('token valid')
    }else{
      res.status(400).json('token not valid')
    }
  }catch(err){
    res.status(400).json(errorResult('something error'))
  }
})

module.exports = app;
