const express = require("express");
const router = express.Router();
const { cms } = require("../../controller/index");
router.route("/:id").get(cms.company.show).post(cms.company.create);
router.get("/detail/:id", cms.company.detail);
router.route("/update/:id").put(cms.company.update).patch(cms.company.update);
router.get("/delete/:id", cms.company.delete);
module.exports = router;
