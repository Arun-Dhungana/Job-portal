const express = require("express");
const router = express.Router();
const applcationroute = require("./application");
const companyroute = require("./company");
const jobroute = require("./job");
router.use("/apply", applcationroute);
router.use("/company", companyroute);
router.use("/job", jobroute);
module.exports = router;
