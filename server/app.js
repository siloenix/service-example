const express = require('express');
const http = require('http');
const Promise = require('bluebird');
const bodyParser = require('body-parser');

const mongodb = require('./mongodb');
const config = require("../config");
const routes = require('./api');
const Logger = require('../logger');
const logger = Logger.logger('app:app');
const errorMiddleware = require('./error.middleware');


class App {
    constructor() {
        this.app = express();
        this.server = http.createServer(this.app)
        this.port = config.port;
        this.baseUrl = config.baseUrl;
    }

    async start() {
        this._initialize()
        await mongodb.setup();
        await Promise.fromCallback(cb => this.server.listen(this.port, cb));

        logger.info(`Server listening on port ${this.port}`);
    }

    async stop() {
        logger.info('Stopping server');
        await Promise.fromCallback(cb => this.server.close(cb));

        await mongodb.teardown();
    }

    _initialize() {
        this.app.use(bodyParser.json())
        this.app.use(Logger.middleware())
        routes.initialize(this.baseUrl, this.app)
        this.app.use(errorMiddleware.handle);
    }
}

module.exports = new App();
