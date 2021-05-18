const env = process.env.NODE_ENV || 'development';

let config;

switch (env) {
    case 'development':
        config = require('./env/development');
        break;
    case 'production':
        config = require('./env/production');
        break;
    case 'test':
        config = require('./env/test');
        break;
}

module.exports = config;
