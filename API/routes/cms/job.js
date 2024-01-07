const express = require("express");
const router = express.Router();
const { cms } = require("../../controller/index");

router.route("/:id").get(cms.jobs.show).post(cms.jobs.create);
router.route("/update/:id").put().patch();
router.get("/delete/:id", cms.jobs.delete);
module.exports = router;
