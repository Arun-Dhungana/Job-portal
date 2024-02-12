const express = require("express");
const JSON=require('json')
const router = express.Router();
const Profileroute = require("./profile/profile");
const cmsroute = require("./cms");
const authroute = require("./auth");
const frontroutes = require("./front");
const { Auth } = require("../middlewares");
router.use("/profile", Profileroute);
router.use("/cms", cmsroute);
router.use("/auth", authroute);
router.use("/front", frontroutes);
router.get("/image/:filename", (req, res, next) => {
  res.sendFile(`uploads/${req.params.filename}`, { root: "./" });
});
router.use((req, res, next) => {
  res.status(404),
    json({
      message: "Resource not found",
    });
});
module.exports = router;
