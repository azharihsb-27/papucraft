const { Router } = require("express");
const multer = require("multer")
const {
  getDetailUser,
  addUser,
  updateProfileNoImages,
  updateProfileWithImages,
} = require("../firebase/model/user");
const { successResult, errorResult } = require("../result/result");
const { sendResetPassword, getToken } = require("../firebase/model/admin");

const app = Router();
const upload = multer({ storage: multer.memoryStorage() });

app.get("/api/user/:uid", async (req, res) => {
  try{
    const { uid } = req.params;
    const data = await getDetailUser(uid);
    if (data) {
      res.status(200).json(successResult(`Data ${uid} ditampilkan`, data));
    } else {
      res.status(400).json(errorResult(`Data ${uid} tidak ditemukan`));
    }
  }catch(err){
    res.status(400).json(errorResult('Something Error!'));
  }
});

app.post("/api/register", async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  try{
    const data = await addUser(req.body);
    res.status(200).json(successResult("Register Success", data));
  }catch(err){
    res.status(400).json(errorResult("Something Error!"));
  }
});


app.post("/api/resetpassword", async (req,res)=>{
  res.header("Access-Control-Allow-Origin", "*");
  try{
    const bearerHeader = req.headers['authorization']
    const {valid} = await getToken(bearerHeader)
    if(!valid){
      return res.status(403).json('Unauthorized Access')
    }

    const {email} = req.body
    const {link} = await sendResetPassword(email)
    if(link){
      return res.status(200).json(successResult('Link didapatkan', link))
    }else{
      return res.status(400).json(error('Link tidak didapatkan', link))
    }
  }catch(err){
    res.status(400).json(errorResult("Something Error!"));
  }
})

app.put("/api/user/:uid", upload.single("file"),async (req,res)=>{
  try{
    const bearerHeader = req.headers['authorization']
    const {valid} = await getToken(bearerHeader)
    if(!valid){
      return res.status(403).json('Unauthorized Access')
    }

    const {uid} = req.params
    const isExist = await getDetailUser(uid)
    const body = req.body

    if(!isExist){
      return res.status(400).json(errorResult("Data tidak ditemukan"))
    }

    if(!req.file){
      await updateProfileNoImages(body, uid)
      res.status(201).json(successResult(`Data ${uid} berhasil diupdate`));
    }else{
      const profile_image = req.file;
      const { mimetype } = profile_image;
      const imageOnly = mimetype.split("/")[0];
      if (imageOnly !== "image") {
        res.status(400).json(errorResult("Image Only!"));
      } else {
        await updateProfileWithImages({body, uid, profile_image});
        res.status(201).json(successResult(`Data ${uid} berhasil diupdate`));
      }
    }
  }catch(err){
    res.status(400).json(errorResult('Something Error!'));
  }
})

module.exports = app;
