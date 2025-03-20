const emailService = require("../service/email.service");
class EmailController {
  async sendEmail(req, res) {
    const { to, subject } = req.body;
    try {
      const info = emailService.sendEmail(to, subject);
      res.status(200).json({ message: "Email sent!", info });
    } catch (error) {
      res.status(500).json({ message: "Error sending email", error });
    }
  }
}

module.exports = new EmailController();
