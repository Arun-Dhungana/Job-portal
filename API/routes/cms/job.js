const express = require("express");
const router = express.Router();
const { cms } = require("../../controller/index");

router.route("/:id").get(cms.jobs.show).post(cms.jobs.create);
router.route("/update/:id").put(cms.jobs.update).patch(cms.jobs.update);
router.get("/delete/:id", cms.jobs.delete);
router.get("/detail/:id", cms.jobs.detail);
module.exports = router;
