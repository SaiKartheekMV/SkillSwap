const express = require("express");
const { initiateCall } = require("../controllers/videoController");
const router = express.Router();

router.post("/call", initiateCall);

module.exports = router;