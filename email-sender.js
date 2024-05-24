const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  service: 'gmail', // Use your email service provider
  auth: {
    user: 'juniorolobor@gmail.com', // Your email
    pass: '12345678'   // Your email password
  }
});

// Set up email data
let mailOptions = {
  from: 'juniorolobor@gmail.com', // Sender address
  to: 'w.tund01@gmail.com', // List of receivers
  subject: 'Hello from Node.js', // Subject line
  text: 'Hello Node.js email sending!', // Plain text body
  html: '<b>Hello Node.js email sending!</b>' // HTML body
};

// Send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log('Message sent: %s', info.messageId);
  console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
});
