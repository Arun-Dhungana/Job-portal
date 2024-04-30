const express = require("express");
const router = express.Router();

const { cms } = require("../../controller/index");
const { Auth, fileStorage, cloudinaryUpload } = require("../../middlewares");
router.post(
  "/:id",
  Auth,
  fileStorage(["application/pdf"]).single("resume"),
  async (req, res, next) => {
    try {
      const b64 = Buffer.from(req.file.buffer).toString("base64");
      let dataURI = "data:" + req.file.mimetype + ";base64," + b64;
      const cldRes = await cloudinaryUpload(dataURI);
      req.cloudinaryUrl = cldRes.secure_url;
      next();
    } catch (error) {
      console.log(error);
      res.status(400).json({
        message: error.message,
      });
    }
  },
  cms.application.create
);
router
  .route("/update/:id")
  .put(cms.application.update)
  .patch(cms.application.update);
router.get("/delete/:id", cms.application.delete);
module.exports = router;
