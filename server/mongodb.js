const { MongoMemoryServer } = require('mongodb-memory-server');
const mongoose = require('mongoose')

const logger = require('../logger').logger('app:mongodb')

class Mongodb {
    constructor() {
        this.mongod = null;
        this.mongoUri = null;
    }

    async setup() {
        await this._setupMongod();
        await this._setupMongoose();
    }

    async teardown() {
        await this._closeConnection();
        await this._stopMongod();
    }

    async _setupMongod() {
        logger.info('Setting up mongodb in-memory instance');
        this.mongod = new MongoMemoryServer();
        this.mongoUri = await this.mongod.getUri();
    }

    async _setupMongoose() {
        logger.info(`Setting up connection to ${this.mongoUri}`);
        await mongoose.connect(this.mongoUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    }

    async _closeConnection() {
        logger.info('Closing connection to mongodb');
        await mongoose.disconnect();
    }

    async _stopMongod() {
        logger.info('Stopping mongodb in-memory instance');
        await this.mongod.stop();
    }
}

module.exports = new Mongodb();
