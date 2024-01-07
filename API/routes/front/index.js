const express = require("express");
const router = express.Router();
const { front } = require("../../controller/index");
router.get("/top", front.top);
router.get("/hot", front.hot);
router.get("/premium", front.premium);
router.get("/normal", front.normal);
router.get("/search", front.search);
module.exports = router;
