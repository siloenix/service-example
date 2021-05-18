const {Schema, model} = require('mongoose')

const CatSchema = new Schema({
    name: {
        unique: true,
        type: Schema.Types.String,
        required: true
    },
    color: Schema.Types.String,
}, {
    strict: true
})

const Cat = model('cats', CatSchema);

module.exports = {
    Cat
};
