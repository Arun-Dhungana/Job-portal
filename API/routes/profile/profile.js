const express = require("express");
const router = express.Router();
const { profile } = require("../../controller/index");
router.get("/", profile.detail);
router
  .route("/change-password")
  .put(profile.change_password)
  .patch(profile.change_password);
router.get("/delete", profile.delete);
router.get('"/applied_jobs"', profile.applied_jobs);
router.get("/applicants", profile.jobs_applicants);
router.route("/update").put(profile.update).patch(profile.update);
module.exports = router;
