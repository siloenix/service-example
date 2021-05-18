const _ = require('lodash');

const index = {
    '/cats': require('./cats'),
}

function initialize(baseUrl, app) {
    _.forEach(index, (router, routeUrl) => {
        app.use(`${baseUrl}${routeUrl}`, router);
    })
}

module.exports = {
    initialize
}
