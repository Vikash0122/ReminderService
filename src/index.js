const express = require('express');
const bodyParser = require('body-parser');
const { PORT } = require('./config/serverConfig');
const { sendBasicEmail } = require('./services/email-service');

const setUpAndStartServer = () => {
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.listen(PORT, () => {
        console.log(`Server started at port: ${PORT}`);

        // sendBasicEmail(
        //     'support@admin.com',
        //     'vikash01nitp@gmail.com',
        //     'Testing Email 2',
        //     'Hey vikash, how are you? This is just a test email.'
        // );
    })
}

setUpAndStartServer();