const express = require("express");
const app = express();

// routes from /routes
const mainRoutes = require("./routes/mainRoutes");

// middleware function


// Add to the req.body
app.use(express.json())

app.use("/", mainRoutes);

module.exports = app;

