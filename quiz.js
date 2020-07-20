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

// create our questions
let questions = [
    {
        question : "What does HTML stand for?",
        imgSrc : "img/html.png",
        choiceA : "Hypertext Markup Language",
        choiceB : "Hard To Manage Lines",
        choiceC : "Hack To Manage Language",
        correct : "A"
    },{
        question : "What does CSS stand for?",
        imgSrc : "img/css.png",
        choiceA : "Coding Source Sites",
        choiceB : "Cascading Style Sheets",
        choiceC : "Correct Style Sheet",
        correct : "B"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/js.png",
        choiceA : "Junior Sheet",
        choiceB : "Just Style",
        choiceC : "Javascript",
        correct : "C"
    }, {
        question : "What does API stand for?",
        imgSrc : "img/js.png",
        choiceA : "Application Potential Included",
        choiceB : "Acting Programing Interwebs",
        choiceC : "Application Programming Interface",
        correct : "C"
    },{
        question : "What does DOM stand for?",
        imgSrc : "img/js.png",
        choiceA : "Document Object Model",
        choiceB : "Database Observation Mechanism",
        choiceC : "Data Office Management",
        correct : "A"  
    }
];
