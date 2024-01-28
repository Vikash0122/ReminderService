const cron = require("node-cron");

const emailService = require("../services/email-service");

const setupJobs = () => {
  cron.schedule("*/2 * * * *", async () => {
    const response = await emailService.fetchPendingEmails();
    console.log(response);
  });
};

module.exports = setupJobs;