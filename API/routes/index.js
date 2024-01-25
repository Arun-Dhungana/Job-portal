const express = require("express");
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
module.exports = router;
