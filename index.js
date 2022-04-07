const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

app.get("/", (req, res) => {
  res.json({ sdfsd: "sdfsdf" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Sdfsdf");
});
