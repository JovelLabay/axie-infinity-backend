const express = require("express");
const mongoose = require("mongoose");

// ENVIRONMENT VARIABLES
require("dotenv").config();

// EXPRESS MIDDLEWARE
const app = express();

// ROUTES AND CONTROLLERS
const wallet_routes = require("./routes/wallet.routes");

// PORT
const port = process.env.PORT || 5000;

// DATABASE CONNECTION
mongoose
  .connect(process.env.MONGODB_STRING_CONNECTION)
  .then(() => {
    app.listen(port, () => {
      console.log(`The port is listening to ${port}`);
    });
  })
  .catch((e) => {
    console.log(e);
  });

// ROUTES AND ENDPOINTS
app.use(wallet_routes);
