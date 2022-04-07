const { Router } = require("express");

// MIDDLEWARE
const router = Router();

// CONTROLLERS
const WalletControllers = require("../controllers/wallet.controllers");

// ROUTES FOR THE WALLETS
router.get("/get-all-wallets", WalletControllers.get_wallets);
router.delete("/delete-wallet/:id", WalletControllers.detele_wallets);
router.post("/send-your-wallet", WalletControllers.post_wallet);

// ADD PROHITED WORDS
router.post("/add-words", WalletControllers.fineTheWord);

// EXPORTED MODULE
module.exports = router;
