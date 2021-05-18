const {Cat} = require('./cats.model');

class CatsLogic {
    async findOne(name) {
        return Cat.findOne({ name })
            .exec()
    }

    async findMany(query) {
        return Cat.find(query)
            .exec();
    }

    async create(body) {
        return Cat.create(body);
    }

    async update(name, body) {
        return Cat.findOneAndReplace({ name }, body)
            .exec();
    }

    async delete(name) {
        return Cat.findOneAndDelete({ name });
    }
}

module.exports = new CatsLogic();
