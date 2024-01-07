const express = require("express");
const router = express.Router();
const { cms } = require("../../controller/index");
router.post("/", cms.application.create);
router
  .route("/update")
  .put(cms.application.update)
  .patch(cms.application.update);
router.get("/delete", cms.application.delete);
module.exports = router;
