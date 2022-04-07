const express = require("express");
const mongoose = require("mongoose");
const bodyParse = require("body-parser");
const cors = require("cors");

// ENVIRONMENT VARIABLES

// ROUTES AND CONTROLLERS
const wallet_routes = require("./routes/wallet.routes");

// EXPRESS MIDDLEWARE
const app = express();

// PORT
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`The port is listening to ${port}`);
});

// ROUTES AND ENDPOINTS
app.use(wallet_routes);
