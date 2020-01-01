var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ashish.iihglobal@gmail.com',
    pass: 'ashish$123 123'
  }
});

var mailOptions = {
  from: 'ashish.iihglobal@gmail.com',
  to: 'ashishchauhan287@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});