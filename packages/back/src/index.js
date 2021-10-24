'use strict';
const express = require('express');
const cors = require('cors')
const {
    SERVER_DEV_PORT,
    API_DEFAULT_URL,
    GREETING,
    CLIENT_DEV_URL,
} = require('@monoapp/variables');

const app = express();


app.use(cors({
    origin: CLIENT_DEV_URL,
    optionsSuccessStatus: 200,
}));

app.get(API_DEFAULT_URL, function (request, response, next) {
    response.json(GREETING);
});

app.listen(SERVER_DEV_PORT);

module.exports = app;