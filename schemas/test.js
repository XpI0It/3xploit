const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.connect("mongodb+srv://PRJ:PRJ666@cluster0.gqgjk6y.mongodb.net/?retryWrites=true&w=majority");


const scoreSchema = new Schema({
    email: {
        type: 'string',
        required: true,
        trim: true
    },
    username: {
        type: 'string',
        required: true,
        trim: true
    },
    password: {
        type: 'string',
        required: true,
    },
    time: {
        type: 'Number',
        default: 0,
    },
    level: {
        type: 'Number',
        default: 0,
    },
    score: {
        type: 'Number',
        default: 0,
    },
    
});

var score = mongoose.model('score', scoreSchema);
module.exports = score;


  score.find()
  .sort({}) 
  .exec()
  .then((scores) => {
    scores = scores.map(value => value.toObject());
  });


