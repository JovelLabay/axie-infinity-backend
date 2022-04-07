const { yourWallet } = require("../models/schema");

// LIST ALL THE WALLETS
const get_wallets = async (req, res) => {
  try {
    const walletResults = await yourWallet.find();
    res.send(walletResults);
  } catch (error) {
    res.send(error);
  }
};

// EXPORTED MODULES
module.exports = { get_wallets };
