const express = require("express");
const router = express.Router();

const { cms } = require("../../controller/index");
const { Auth, fileStorage } = require("../../middlewares");
router.post(
  "/:id",
  Auth,
  fileStorage(["application/pdf"]).single("resume"),

  cms.application.create
);
router
  .route("/update/:id")
  .put(cms.application.update)
  .patch(cms.application.update);
router.get("/delete/:id", cms.application.delete);
module.exports = router;
