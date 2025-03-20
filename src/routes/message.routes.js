const express = require("express");
const messageController = require("../controllers/message.controller");
const router = express.Router();

router.post("/create-message", messageController.MessageController);

module.exports = router;

