const winston = require('winston');
const expressWinston = require('express-winston');

const { Console } = winston.transports;
const { combine, colorize, timestamp, printf, label, simple, prettyPrint } = winston.format;

function logger(labelStr) {
    return winston.createLogger({
        format: combine(
            colorize(),
            timestamp(),
            label({ label: labelStr }),
            printf(({ level, message, label, timestamp }) => {
                return `${timestamp} [${label}] ${level}: ${message}`;
            })
        ),
        transports: [
            new Console(),
        ]
    })
}

// todo: format
function middleware() {
    return expressWinston.logger({
        expressFormat: true,
        colorize: true,
        format: combine(
            colorize(),
            timestamp(),
            simple(),
        ),
        transports: [
            new Console(),
        ]
    })
}

module.exports = {
    logger,
    middleware,
}
