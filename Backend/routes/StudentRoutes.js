const express = require("express");
const { joinClass, uploadFrame } = require("../controllers/studentController");

const router = express.Router();

router.post("/join", joinClass);
router.post("/upload-frame", uploadFrame);

module.exports = router;
