const messageService = require('../service/message.service');
class MessageController {

    async MessageController(req, res) {
        try {
            const message = req.body;
            const result = await messageService.createMessage(message);
            if (result) {
                return res.status(201).json({ message: "message created successfully", result });
            }

        } catch (error) {
            res.status(400).json({ message: "Error creating message", error });
        }
    }
}

module.exports = new MessageController();