const express = require("express");
const { createClass, getEngagement, getHistory } = require("../controllers/teacherController");

const router = express.Router();

router.post("/create-class", createClass);
router.get("/engagement", getEngagement);
router.get("/history", getHistory);

module.exports = router;
