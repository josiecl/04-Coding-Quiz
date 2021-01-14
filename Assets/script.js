// var questionNo = document.querySelector("#questions");
// var quizBox = document.querySelector("#quiz");
// var timerCountdown = document.querySelector("timer");
var button0 = document.querySelector("#startQuiz");
var intro = document.querySelector("#intro");

var timer = document.querySelector("#timer");
var timerText = 70;
var countdown;

var finalScore = document.querySelector("#finalScore");

var button1 = document.querySelector("#button1");
var button2 = document.querySelector("#button2");
var button3 = document.querySelector("#button3");
var button4 = document.querySelector("#button4");
var question1 = document.querySelector("#question1");
var question2 = document.querySelector("#question2");
var question3 = document.querySelector("#question3");
var question4 = document.querySelector("#question4");

intro.setAttribute("style", "display:block");
question1.setAttribute("style", "display:none");
question2.setAttribute("style", "display:none");
question3.setAttribute("style", "display:none");
question4.setAttribute("style", "display:none");
finalScore.setAttribute("style", "display:none");


button0.addEventListener("click", function(){
    // Hide the intro
    intro.setAttribute("style", "display:none");
    // Timer starts
    timerGo();
    // Show first question
    question1.setAttribute("style", "display:block");
});

button1.addEventListener("click", function(){
    question1.setAttribute("style", "display:none");
    question2.setAttribute("style", "dispay:block");
});

button2.addEventListener("click", function(){
    question2.setAttribute("style", "display:none");
    question3.setAttribute("style", "dispay:block");
});

button3.addEventListener("click", function(){
    question3.setAttribute("style", "display:none");
    question4.setAttribute("style", "dispay:block");
});

button4.addEventListener("click", function(){
    question4.setAttribute("style", "display:none");
    finalScore.setAttribute("style", "dispay:block");
});

function timerGo() {
    countdown = setInterval(function() {
        timerText--;
        timer.textContent = "Time Left: " + timerText + " seconds";
        if (timerText <= 0) {
            clearInterval(countdown);
            timer.textContent = "Time is 0; out of time!"
            finalScore();
        }
    }, 1000)
}

// var questions = [
//     {
//         question: "Which of these breeds is the tallest?",
//         answers: {
//             a: "German Shepherd",
//             b: "Irish Wolfhound",
//             c: "Saint Bernard",
//             d: "Great Dane"
//         }
//         correctAnswer: "b"
//     },

//     {
//         question: "empty",
//         answers: {
//             a: "___",
//             b: "___",
//             c: "___",
//             d: "___"
//         }
//         correctAnswer: "a"
//     },

//     {
//         question: "empty",
//         answers: {
//             a: "___",
//             b: "___",
//             c: "___",
//             d: "___"
//         }
//         correctAnswer: "c"
//     },

//     {
//         question: "empty",
//         answers: {
//             a: "___",
//             b: "___",
//             c: "___",
//             d: "___"
//         }
//         correctAnswer: "d"
//     },

//     {
//         question: "empty",
//         answers: {
//             a: "___",
//             b: "___",
//             c: "___",
//             d: "___"
//         }
//         correctAnswer: "c"
//     }
// ];

// var answerOptions = document.querySelector("#answers");
// var questions = document.querySelector("#question");
// var start = document.querySelector("#startQuiz")


// start.addEventListener("click", function(event) {
//     event.preventDefault();
//     introEl.classList.add("hide");
//     quizTime.classList.remove("hide");

//     showQuestion(questions.shift());

//     timerCountdown();
// })
