const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//mongoose.connect("mongodb+srv://HHTLH:Tanglihan1215@cluster0.wkxbu.mongodb.net/?retryWrites=true&w=majority");


const BoardSchema = new Schema({
    username: {
        type: 'string',
        required: true,
        trim: true
    },
    time: {
        type: 'string',
        required: true,
        trim: true
    },
    level: {
        type: 'Number',
        required: true,
    }
});
var board = mongoose.model('Board', BoardSchema);
module.exports = board;

/*
var user1234 = new board({
    username: "Sdds",
    time: "11:00:11",
    level: 25,
  });
  
  // save the company
  user1234.save().then(()=>{
        console.log("The user was saved");
  }).catch(err=>{
        console.log("There was an error saving the user");
  });
  */