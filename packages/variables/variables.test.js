'use strict';

const variables = require('.');

describe('variables', () => {
    test('variables are equal', () => {
        expect(variables).toEqual({
            SERVER_DEV_PORT: variables.SERVER_DEV_PORT,
            SERVER_DEV_URL: variables.SERVER_DEV_URL,

            API_DEFAULT_URL: variables.API_DEFAULT_URL,

            GREETING: variables.GREETING,

            CLIENT_DEV_URL: variables.CLIENT_DEV_URL,
        });
    });
});
