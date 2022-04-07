const { Router } = require("express");

// MIDDLEWARE
const router = Router();

// CONTROLLERS
const AuthControllers = require("../controllers/auth.controllers");

// ROUTES
router.post("/signin-admin", AuthControllers.sign_in);
router.post("/login-admin", AuthControllers.log_in);

// EXPORTED MODULE
module.exports = router;
