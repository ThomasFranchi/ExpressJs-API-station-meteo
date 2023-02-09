const express = require("express");
const router = express.Router();

const temperature = require("../controllers/temperatureController");

// Set POST controller on /temperature
router.post("/temperature", temperature.saveTemperature);

// Set GET controller on /temperature to display the file selected in params.
router.get('/temperature/:stationName', temperature.getTemperature);

module.exports = router;