const express = require("express");
const router = express.Router();
const { Auth } = require("../../controller/index");
const { fileStorage, cloudinaryUpload } = require("../../middlewares");
router.post(
  "/register",
  fileStorage(["image/jpg", "image/jpeg", "image/png"]).single("image"),
  cloudinaryUpload,
  Auth.register
);
router.post("/login", Auth.login);
module.exports = router;
