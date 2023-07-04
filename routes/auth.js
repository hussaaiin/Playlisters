const express = require("express");
const router = express.Router();
const controller = require("../controllers/controller");

router.get("/login", controller.login);
router.post("/login", controller.handleLogin);
router.get("/dashboard", controller.dashboard);

module.exports = router;
