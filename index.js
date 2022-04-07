const express = require("express");

// EXPRESS MIDDLEWARE
const app = express();

// ROUTES AND CONTROLLERS
const wallet_routes = require("./routes/wallet.routes");

// PORT
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`The port is listening to ${port}`);
});

// ROUTES AND ENDPOINTS
app.use(wallet_routes);
