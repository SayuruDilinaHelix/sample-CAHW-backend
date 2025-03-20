const express = require('express');
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const routes = require('./routes/message.routes');
const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use("/api/message/", routes);



module.exports = app;