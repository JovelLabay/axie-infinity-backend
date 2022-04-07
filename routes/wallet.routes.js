const { Router } = require("express");

// MIDDLEWARE
const router = Router();

// CONTROLLERS
const WalletControllers = require("../controllers/wallet.controllers");

// ROUTES
router.get("/get-all-wallets", WalletControllers.get_wallets);

// EXPORTED MODULE
module.exports = router;
