const express = require('express');
const router = express.Router();
const temperature = require("../controllers/temperatureController")

router.post("/temperature", temperature.postTemp)

router.get("/temperature/:name", temperature.getTemp)

module.exports = router;

