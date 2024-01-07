const express = require("express");
const router = express.Router();
const { Auth } = require("../../controller/index");
router.post("/auth", Auth.register);
router.post("/login", Auth.login);
module.exports = router;
