'use strict';

const SERVER_DEV_HOST = 'localhost';
const SERVER_DEV_PORT = 2021;
const SERVER_DEV_URL = `http://${SERVER_DEV_HOST}:${SERVER_DEV_PORT}`;

const API_DEFAULT_URL = '/';

const GREETING = 'Hello, @monoapp!'

const CLIENT_DEV_HOST = 'localhost';
const CLIENT_DEV_PORT = 3000;
const CLIENT_DEV_URL = `http://${CLIENT_DEV_HOST}:${CLIENT_DEV_PORT}`;

module.exports = {
    SERVER_DEV_PORT,
    SERVER_DEV_URL,

    API_DEFAULT_URL,

    GREETING,

    CLIENT_DEV_URL,
};