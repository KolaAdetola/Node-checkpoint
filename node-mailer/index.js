const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config()

async function sendEmail(to, subject, text) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'kolawoleadetola630@gmail.com',
      pass: process.env.PASS
    }
  });

  const mailOptions = {
    from: 'kolawoleadetola630@gmail.com',
    to: 'kolawole.adetola@icloud.com',
    subject: 'Hello',
    text: 'pls come here'
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}

sendEmail();

module.exports = sendEmail;

