const express = require("express");
const router = express.Router();
const { profile } = require("../../controller/index");
const { Auth } = require("../../middlewares");
router.get("/detail", Auth, profile.detail);
router
  .route("/change-password")
  .put(Auth, profile.change_password)
  .patch(Auth, profile.change_password);
router.get("/delete", profile.delete);
router.get("/applied_jobs/:id", profile.applied_jobs);
router.get("/applicants", profile.applicants);
router.get("/jobs", profile.jobs);
router.route("/update").put(profile.update).patch(profile.update);
module.exports = router;
