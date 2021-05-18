const logic = require('./cats.logic');
const {controller} = require("../helpers");

class CatsController {
    async getOne(req) {
        return logic.findOne(req.params.name);
    }

    async getMany(req) {
        return logic.findMany(req.query);
    }

    async create(req) {
        return logic.create(req.body);
    }

    async update(req) {
        return logic.update(req.params.name, req.body)
    }

    async delete(req) {
        return logic.delete(req.params.name);
    }
}

module.exports = controller(new CatsController());
