const sender = require('../config/emailConfig');
const TicketRepository = require("../repository/ticket-repository");

const repository = new TicketRepository();

const fetchPendingEmails = async () => {
    try {
      const response = await repository.getAll();
      return response;
    } catch (error) {
      console.log(error);
    }
  };
  
  const createTicket = async (data) => {
    try {
      const response = await repository.create(data);
      return response;
    } catch (error) {
      console.log(error);
    }
  };
  

const sendBasicEmail = async (mailFrom, mailTo, mailSubject, mailBody) => {
    try {
        const response = await sender.sendMail({
            from: mailFrom,
            to: mailTo,
            subject: mailSubject,
            text: mailBody
        });
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    sendBasicEmail,
    fetchPendingEmails,
    createTicket,
};