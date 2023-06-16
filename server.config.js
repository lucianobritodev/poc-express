'use strict';

const server = {
    host: process.env.SERVER_URL_HOST || 'http://localhost',
    port: process.env.SERVER_URL_PORT || '3000',
    prefix: process.env.SERVER_URL_PREFIX || '/api/v1'
}

export default server;