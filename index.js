const express = require("express");
const mongoose = require("mongoose");
const bodyParse = require("body-parser");
const cors = require("cors");

// ENVIRONMENT VARIABLES
require("dotenv").config();

// ROUTES AND CONTROLLERS
const wallet_routes = require("./routes/wallet.routes");

// EXPRESS MIDDLEWARE
const app = express();
app.use(bodyParse.json());
app.use(cors());

// PORT
const port = process.env.PORT || 5000;

// MONGODB CONNECTION
mongoose
  .connect(process.env.MONGODB_STRING_CONNECTION)
  .then(() =>
    app.listen(port, () => {
      console.log(`The port is listening to ${port}`);
    })
  )
  .catch((e) => {
    console.log("There is an issue orrured " + e.message);
  });

// ROUTES AND ENDPOINTS
app.use(wallet_routes);
