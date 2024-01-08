const express = require("express");
const router = express.Router();

const { cms } = require("../../controller/index");
router.post("/:id", cms.application.create);
router
  .route("/update/:id")
  .put(cms.application.update)
  .patch(cms.application.update);
router.get("/delete/:id", cms.application.delete);
module.exports = router;
