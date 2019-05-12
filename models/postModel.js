const moongose = require('mongoose');

const postsSchema = moongose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = moongose.model('Posts', postsSchema);