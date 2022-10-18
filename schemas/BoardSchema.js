const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.connect("mongodb+srv://PRJ:PRJ666@cluster0.gqgjk6y.mongodb.net/?retryWrites=true&w=majority");


const BoardSchema = new Schema({
    username: {
        type: 'string',
        required: true,
        trim: true,
    },
    time: {
        type: 'Number',
        required: true,
    },
    level: {
        type: 'Number',
        required: true,
    },
    /*
    rank: {
        type: 'Number',
        required: true,
        default: 0,
    }
    */
});

var board = mongoose.model('Board', BoardSchema);
module.exports = board;


/*
var user1 = new board({
    username: "Sdds",
    time: 52.01,
    level: 25,
  });
  
  //
  user1.save().then(()=>{
        console.log("The user was saved");
  }).catch(err=>{
        console.log("There was an error saving the user");
  });

  var user2 = new board({
    username: "Sdererds",
    time: 5222.01,
    level: 25,
  });
  
  //
  user2.save().then(()=>{
        console.log("The user was saved");
  }).catch(err=>{
        console.log("There was an error saving the user");
  });

  var user3 = new board({
    username: "Sdererds",
    time: 5222.01,
    level: 25,
  });
  
  //
  user3.save().then(()=>{
        console.log("The user was saved");
  }).catch(err=>{
        console.log("There was an error saving the user");
  });
*/
  board.find()
  .sort({}) 
  .exec()
  .then((boards) => {
    boards = boards.map(value => value.toObject());
  });


