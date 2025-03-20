const express = require('express');
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const messageRoutes = require('./routes/message.routes');
const emailRoutes = require('./routes/email.routes');
const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use("/api/messages/", messageRoutes);
app.use("/api/emails/", emailRoutes)


module.exports = app;