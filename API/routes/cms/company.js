const express = require("express");
const router = express.Router();
const { cms } = require("../../controller/index");
router.route("/").get(cms.company.show).post(cms.company.create);
router.route("/update").put(cms.company.update).patch(cms.company.update);
router.route("/delete", cms.company.delete);
module.exports = router;
