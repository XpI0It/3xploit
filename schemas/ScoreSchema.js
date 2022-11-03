const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ScoreSchema = new Schema({
    username: {
        type: 'string',
        required: true,
        trim: true
    },
    score: {
        type: 'number',
        require: true
    },
    level: {
        type: 'string',
        default: 'N/A'
    },
    time: {
        type: 'number',
        required: true,
        default: 0
    }
});
var Score = mongoose.model('Score', ScoreSchema);
module.exports = Score;