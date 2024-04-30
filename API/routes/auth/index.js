const express = require("express");
const router = express.Router();
const { Auth } = require("../../controller/index");
const { fileStorage, cloudinaryUpload } = require("../../middlewares");
router.post(
  "/register",
  fileStorage(["image/jpg", "image/jpeg", "image/png"]).single("image"),
  async (req, res, next) => {
    try {
      const b64 = Buffer.from(req.file.buffer).toString("base64");
      let dataURI = "data:" + req.file.mimetype + ";base64," + b64;
      const cldRes = await cloudinaryUpload(dataURI);
      req.cloudinaryUrl = await cldRes.secure_url;
      next();
    } catch (error) {
      console.log(error);
      res.status(400).json({
        message: error.message,
      });
    }
  },
  Auth.register
);
router.post("/login", Auth.login);
module.exports = router;
