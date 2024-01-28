const sender = require('../config/emailConfig');
const TicketRepository = require("../repository/ticket-repository");

const repository = new TicketRepository();

const fetchPendingEmails = async () => {
    try {
      const response = await repository.get({ status: "PENDING" });
      console.log(response);
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
        console.log(response);
    } catch (error) {
        console.log(error);
    }
};

const updateTicket = async (ticketId, data) => {
    try {
      const response = await repository.update(ticketId, data);
      return response;
    } catch (error) {
      console.log(error);
    }
  };

module.exports = {
    sendBasicEmail,
    fetchPendingEmails,
    createTicket,
    updateTicket
};