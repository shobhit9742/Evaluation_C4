require("dotenv").config();
const mongoose = require("mongoose");
const sendMail = require("./mailer");
const TicketModel = require("./models/Ticket");
const cron = require("node-cron");

mongoose.connect(process.env.MONGO_URL);

const sendEmailRemainder = async () => {
  const now = new Date();
  const futureDate = new Date(now.getTime() + 24 * 60 * 60 * 1000);

  try {
    const upcomingEvents = await TicketModel.find({
      eventdate: {
        $gte: now,
        $lt: futureDate,
      },
    });
    upcomingEvents.forEach((event) => {
      const { email, eventdate, eventname } = event;
      const subject = `Remainder:${eventname} is coming up!`;
      const text = `Hi\n\n This is a reminder that the event "${eventname}" will start on ${eventdate}. \n\n Best Regards, \n Event Team `;
      sendMail(email, subject, text);
    });
  } catch (err) {
    console.log("Error fetching upcoming Events");
  }
};

const sendFeebackRequest = async () => {
  const now = new Date();
  const pastDate = new Date(now.getTime() - 25 * 60 * 60 * 1000);

  try {
    const endedEvent = await TicketModel.find({
      eventdate: {
        $lte: pastDate,
      },
    });

    endedEvent.forEach((event) => {
      const { email, eventname } = event;
      const subject = `Feedback Request for `;
      const text = `Hi\n\n Hope you enjoyed the event "${eventname}" We would love your feedback. \n\n Best Regards, \n Event Team `;
      sendMail(email, subject, text);
    });
  } catch (err) {
    console.log("Error fetchng ended events", err);
  }
};

cron.schedule("0 * * * *", sendEmailRemainder);
cron.schedule("0 */23 * * *", sendFeebackRequest);
