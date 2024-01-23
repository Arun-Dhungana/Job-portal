const express = require("express");
const router = express.Router();
const { Auth } = require("../../controller/index");
const { fileStorage } = require("../../middlewares");
router.post(
  "/register",
  fileStorage(["image / jpg", "image / jpeg", "image / png"]).single("image"),
  Auth.register
);
router.post("/login", Auth.login);
module.exports = router;
