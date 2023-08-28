const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Route Import
const student = require("./Routes/studentRoute");

app.use("/api/v1", student);

module.exports = app;