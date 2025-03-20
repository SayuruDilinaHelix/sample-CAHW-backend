const nodemailer = require('nodemailer');
require("dotenv").config();
class EmailService {
  async sendEmail(to, subject) {
    try {
      // Create a transporter
      let transporter = nodemailer.createTransport({
        service: "gmail", // Use "gmail" or SMTP settings
        auth: {
          user: process.env.EMAIL_USER, // Your email
          pass: process.env.EMAIL_PASS, // App password
        },
      });

      // Email options
      let mailOptions = {
        from: process.env.EMAIL_USER,
        to,
        subject,
        html: `<div> Hello world </div>`,
      };

      // Send email
      return await transporter.sendMail(mailOptions);
    } catch (error) {
      throw new Error("Error sending email", error);
    }
  }
}

module.exports = new EmailService();
