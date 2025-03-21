const nodemailer = require('nodemailer');
const fs = require('fs'); // File reader
const path = require('path');
require("dotenv").config();
class EmailService {
  async sendEmail(to, subject) {
    try {
      const htmlContent = fs.readFileSync(path.join(__dirname,'../../public/emails/templates/demo_temp.html'), 'utf8').replace('{{email}}',process.env.EMAIL_USERNAME);

      // Create a transporter
      let transporter = nodemailer.createTransport({
        service: "gmail", // Use "gmail" or SMTP settings
        auth: {
          user: process.env.EMAIL_USERNAME,
          pass: process.env.EMAIL_PASSWORD,
        },
      });

      // Email options
      let mailOptions = {
        from: process.env.EMAIL_USERNAME,
        to,
        subject,
        html: htmlContent,
      };

      // Send email
      return await transporter.sendMail(mailOptions);
    } catch (error) {
      throw new Error("Error sending email", error);
    }
  }
}

module.exports = new EmailService();
