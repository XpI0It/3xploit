const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const progressText = document.getElementById("progressText");
const scoreText = document.getElementById("score");
const progressBarFull = document.getElementById("progressBarFull");
let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];

let totalTime = 0;

setInterval(updateTotalTime, 1000);

function updateTotalTime() {
  totalTime += 1;
}

let questions = [];

var time = document.getElementById("timer");
var startingTime = 20; // time alloted for 1 question
time.innerHTML = "Time Left: " + startingTime;

setInterval(updateTimer, 1000); // sets interval of 1 sec

// updates the timer
function updateTimer() {
  startingTime--;
  if (startingTime == -1) {
    startingTime = 21;
    getNewQuestion();
  } else timer.innerHTML = "Time Left: " + startingTime;
}

fetch("/res/questions.json", {
  //mode: 'no-cors',
  headers: { content_type: "application/json" },
})
  .then((res) => {
    console.log(res.status);
    return res.json();
  })
  .then((loadedQuestions) => {
    //console.log(loadedQuestions)
    questions = loadedQuestions;
    startGame();
  })
  .catch((err) => {
    console.error(err);
  });

//CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 3;

startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuesions = [...questions];
  getNewQuestion();
};

getNewQuestion = () => {
  if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
    //module.exports = score;
    
    localStorage.setItem("mostRecentScore", score);
    //go to the end page
    
    return window.location.href = '/game/ransomeware/end?score=' + score + "&time=" + totalTime;
    // this
    // return (location.href = "/game/ransomeware/end");
  }
  questionCounter++;
  progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;
  //Update the progress bar
  progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

  const questionIndex = Math.floor(Math.random() * availableQuesions.length);
  currentQuestion = availableQuesions[questionIndex];
  question.innerText = currentQuestion.question;

  choices.forEach((choice) => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });

  availableQuesions.splice(questionIndex, 1);
  acceptingAnswers = true;
};

choices.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];

    const classToApply =
      selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

    if (classToApply === "correct") {
      incrementScore(CORRECT_BONUS);
    }

    selectedChoice.parentElement.classList.add(classToApply);

    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      startingTime = 21;
      getNewQuestion();
    }, 1000);
  });
});

incrementScore = (num) => {
  score += num;
  scoreText.innerText = score;
};
