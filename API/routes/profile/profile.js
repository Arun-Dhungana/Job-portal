const express = require("express");
const router = express.Router();
const { profile } = require("../../controller/index");
const { Auth, fileStorage } = require("../../middlewares");

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
  profile.update
);

module.exports = router;
