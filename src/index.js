const express = require('express');
const bodyParser = require('body-parser');
const { PORT } = require('./config/serverConfig');
const { sendBasicEmail } = require('./services/email-service');
const jobs = require("./utils/job");
const TicketController = require("./controllers/ticket-controller");
const { createChannel } = require("./utils/messageQueue");

const setUpAndStartServer = async () => {
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    const channel = await createChannel();

    app.post("/api/v1/tickets", TicketController.create);
    app.listen(PORT, () => {
        console.log(`Server started at port: ${PORT}`);
        jobs();
        // sendBasicEmail(
        //     'support@admin.com',
        //     'vikash01nitp@gmail.com',
        //     'Testing Email 2',
        //     'Hey vikash, how are you? This is just a test email.'
        // );
    })
}

setUpAndStartServer();