const {parseNumber} = require("../helpers");

const config = {
    port: parseNumber(process.env.PORT) || 8080,
    baseUrl: process.env.BASE_URL || '/api'
}

module.exports = config;
