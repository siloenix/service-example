const _ = require('lodash');

/**
 * Controller wrapper:
 * 1) executes handler
 * 2) if no result --> just sends 200
 * 3) if result --> send json response
 * 4) if error --> calls next(err) to invoke error middleware
 * */
function _wrapHandler(handler) {
    return async (req, res, next) => {
        try {
            const result = await handler(req, res, next);
            if (!result) {
                res.status(200).end();
            } else {
                res.send(result);
            }
        } catch (e) {
            next(e)
        }
    }
}

function _isPrivate(name) {
    return name.startsWith('_');
}

/**
 * Returns proxy that wraps each controller method with `_wrapHandler(handler)`
 * */
function controller(controllerInstance) {
    const initializedMethods = {};
    return new Proxy(controllerInstance, {
        get(obj, prop) {
            const value = obj[prop];
            if (!value) {
                return value;
            }
            if (initializedMethods[prop]) {
                return initializedMethods[prop];
            }
            if (!_isPrivate(prop) && _.isFunction(value)) {
                const wrapped = _wrapHandler(value);
                initializedMethods[prop] = wrapped
                return wrapped;
            }
            return value;
        }
    });
}

module.exports = {
    controller
}
