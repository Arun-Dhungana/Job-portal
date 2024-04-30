const express = require("express");
const router = express.Router();
const { profile } = require("../../controller/index");
const { Auth, fileStorage, cloudinaryUpload } = require("../../middlewares");

router.get("/detail", Auth, profile.detail);
router
  .route("/change-password")
  .put(Auth, profile.change_password)
  .patch(Auth, profile.change_password);
router.get("/delete", profile.delete);
router.get("/applied_jobs/:id", profile.applied_jobs);
router.get("/applicants/:id", profile.applicants);
router.get("/jobs", Auth, profile.jobs);
router.put(
  "/update/:id",
  fileStorage(["image/jpg", "image/jpeg", "image/png"]).single("images"),
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
  profile.update
);

module.exports = router;
