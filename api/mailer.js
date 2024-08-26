const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "gmail",
  auth: {
    user: "shobhitgupta0602@gmail.com",
    pass: "pgcj ydrs bont ddvy",
  },
});

// fuction to send mails
const sendMail = (to, subject, text) => {
  const mailOptions = {
    from: "shobhitgupta0602@gmail.com",
    to,
    subject,
    text,
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log("Error:", error);
    }
    console.log("Email sent", info.response);
  });
};

module.exports = sendMail;
