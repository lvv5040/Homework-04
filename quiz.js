// select all elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");
const initialsElement = document.getElementById("initials");
const submitButton = document.getElementById("submit")

// create our questions
let questions = [
  {
    question: "What does HTML stand for?",
    imgSrc: "images/html.jpg",
    choiceA: "Hypertext Markup Language",
    choiceB: "Hard To Manage Lines",
    choiceC: "Hack To Manage Language",
    correct: "A",
  },
  {
    question: "What does CSS stand for?",
    imgSrc: "images/css.jpg",
    choiceA: "Coding Source Sites",
    choiceB: "Cascading Style Sheets",
    choiceC: "Correct Style Sheet",
    correct: "B",
  },
  {
    question: "What does JS stand for?",
    imgSrc: "images/js.jpg",
    choiceA: "Junior Sheet",
    choiceB: "Just Style",
    choiceC: "Javascript",
    correct: "C",
  },
  {
    question: "What does API stand for?",
    imgSrc: "images/api.jpg",
    choiceA: "Application Potential Included",
    choiceB: "Acting Programing Interwebs",
    choiceC: "Application Programming Interface",
    correct: "C",
  },
  {
    question: "What does DOM stand for?",
    imgSrc: "images/dom.jpg",
    choiceA: "Document Object Model",
    choiceB: "Database Observation Mechanism",
    choiceC: "Data Office Management",
    correct: "A",
  },
];

// create some variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
const questionTime = 90;
let count = questionTime; 
const gaugeWidth = 150; 
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;

// render a question
function renderQuestion() {
  let q = questions[runningQuestion];

  question.innerHTML = "<p>" + q.question + "</p>";
  qImg.innerHTML = "<img src=" + q.imgSrc + ">";
  choiceA.innerHTML = q.choiceA;
  choiceB.innerHTML = q.choiceB;
  choiceC.innerHTML = q.choiceC;
}

start.addEventListener("click", startQuiz);

// start quiz
function startQuiz() {
  start.style.display = "none";
  renderQuestion();
  quiz.style.display = "block";
  renderProgress();
  renderCounter();
  TIMER = setInterval(renderCounter, 1000); // 1000ms = 1s
}

// render progress
function renderProgress() {
  for (let qIndex = 0; qIndex <= lastQuestion; qIndex++) {
    progress.innerHTML += "<div class='prog' id=" + qIndex + "></div>";
  }
}

// counter render

function renderCounter() {
  if (count >= 0) {
    counter.innerHTML = count;
    timeGauge.style.width = count * gaugeUnit + "px";
    count--;
  } else {
    count = questionTime;
    // change progress color to red
    //answerIsWrong();
    if (runningQuestion < lastQuestion) {
      runningQuestion++;
      renderQuestion();
    } else {
      // end the quiz and show the score
      endQuiz();
    }
  }
}

// checkAnwer

function checkAnswer(answer) {
  if (answer == questions[runningQuestion].correct) {
    // answer is correct
    score++;
    // change progress color to green
    answerIsCorrect();
  } else {
    // answer is wrong
    // change progress color to red
    count -= 15
    answerIsWrong();
  }
  //count = 0; 
  if (runningQuestion < lastQuestion) {
    runningQuestion++;
    renderQuestion();
  } else {
    // end the quiz and show the score
    endQuiz();
  }
}

function endQuiz() {
  clearInterval(TIMER);
  quiz.style.display = "none";
  scoreDiv.style.display = "block";
}

// answer is correct
function answerIsCorrect() {
  document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}

// answer is Wrong
function answerIsWrong() {
  document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}

// score render
function scoreRender() {
  const scorePerCent = Math.round((100 * score) / questions.length);
  const initials = initialsElement.val().trim();
  if (initials !== "") {
    const highScores = JSON.parse(
      window.localStorage.getItem("highScores") || []
    );
    const newScore = {
      score: scorePerCent,
      intials: initials,
    };
    highScores.push(newScore);
    window.localStorage.setItem("highScores", JSON.stringify(highScores));
  }
  // choose the image based on the scorePerCent
  let img =
    scorePerCent >= 80
      ? "img/5.png"
      : scorePerCent >= 60
      ? "img/4.png"
      : scorePerCent >= 40
      ? "img/3.png"
      : scorePerCent >= 20
      ? "img/2.png"
      : "img/1.png";

  scoreDiv.innerHTML = "<img src=" + img + ">";
  scoreDiv.innerHTML += "<p>" + scorePerCent + "%</p>";
}
submitButton.onClick = scoreRender
