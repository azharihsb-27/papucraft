const express = require("express");
const cors = require("cors");
const admin = require("./routes/admin");
const artikel = require("./routes/artikel");
const event = require("./routes/event");
const kebudayaan = require("./routes/kebudayaan");
const kelas = require("./routes/kelas");
const user = require("./routes/user");
const { successResult, errorResult } = require("./result/result");


const app = express();

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb" }));
const port = process.env.port || 4000;

app.use(admin);
app.use(artikel);
app.use(event);
app.use(kebudayaan);
app.use(kelas);
app.use(user);

app.use("/", (req, res) => {
  res.status(404).json(errorResult("Not Found"));
});

app.listen(port, () => {
  console.log(`PapuCraft Server Listening At ${port}`);
});
