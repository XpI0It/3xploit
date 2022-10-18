//testing output for question module database


const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.connect("mongodb+srv://PRJ:PRJ666@cluster0.gqgjk6y.mongodb.net/?retryWrites=true&w=majority");


const QuestionSchema = new Schema({
    question: {
        type: 'string',
        required: true,
        trim: true,
    },
    choice1: {
        type: 'string',
        required: true,
        trim: true,
    },
    choice2: {
        type: 'string',
        required: true,
        trim: true,
    },
    choice3: {
        type: 'string',
        required: true,
        trim: true,
    },
    choice4: {
        type: 'string',
        required: true,
        trim: true,
    },
    CorrectAnswer: {
        type: 'Number',
        required: true,
    },
    time: {
        type: 'Number',
        required: true,
        default: 60,
    },
    score: {
        type: 'Number',
        required: true,
        default: 1000,
    }
});

var question = mongoose.model('Question', QuestionSchema);
module.exports = question;


var q1 = new question({
    question: "Inside which HTML element do we put the JavaScript?",
    choice1: "<script>",
    choice2: "<javascript>",
    choice3: "<js>",
    choice4: "<scripting>",
    CorrectAnswer: 1,
  });
  
  //
  q1.save().then(()=>{
        console.log("The q1 was saved");
  }).catch(err=>{
        console.log("There was an error saving the question");
  });

  var q2 = new question({
    question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
    choice1: "<script href='xxx.js'>",
    choice2: "<script name='xxx.js'>",
    choice3: "<script src='xxx.js'>",
    choice4: "<script file='xxx.js'>",
    CorrectAnswer: 3,
  });
  
  //
  q2.save().then(()=>{
        console.log("The q2 was saved");
  }).catch(err=>{
        console.log("There was an error saving the question");
  });


  var q3 = new question({
    question: " How do you write 'Hello World' in an alert box?",
    choice1: "msgBox('Hello World');",
    choice2: "alertBox('Hello World');",
    choice3: "msg('Hello World');",
    choice4: "alert('Hello World');",
    CorrectAnswer: 4,
  });
  
  //
  q3.save().then(()=>{
        console.log("The q3 was saved");
  }).catch(err=>{
        console.log("There was an error saving the question");
  });