// var questionNo = document.querySelector("#questions");
// var quizBox = document.querySelector("#quiz");
// var timerCountdown = document.querySelector("timer");
var button0 = document.querySelector("#startQuiz");
var intro = document.querySelector("#intro");
var correct = document.querySelector("#correct");
var incorrect = document.querySelector("#incorrect");

var timer = document.querySelector("#timer");
var timerText = 50;
var countdown;

var finalScore = document.querySelector("#finalScore");

var endTime = document.querySelector("#endTime");

var button1 = document.querySelector("#button1");
var button2 = document.querySelector("#button2");
var button3 = document.querySelector("#button3");
var button4 = document.querySelector("#button4");
var button5 = document.querySelector("#button4");
var question1 = document.querySelector("#question1");
var question2 = document.querySelector("#question2");
var question3 = document.querySelector("#question3");
var question4 = document.querySelector("#question4");
var question5 = document.querySelector("#question5");

var ans1 = document.querySelector("#ans1");

intro.setAttribute("style", "display:block");
question1.setAttribute("style", "display:none");
question2.setAttribute("style", "display:none");
question3.setAttribute("style", "display:none");
question4.setAttribute("style", "display:none");
question5.setAttribute("style", "display:none");
finalScore.setAttribute("style", "display:none");
correct.setAttribute("style", "display:none");
incorrect.setAttribute("style", "display:none");


button0.addEventListener("click", function(){
    timerGo();
    // Hide the intro
    intro.setAttribute("style", "display:none");
    // Timer starts
    // Show first question
    question1.setAttribute("style", "display:block");
});

button1.addEventListener("click", function(){
    if(ans1.clicked===true) {
        question1.setAttribute("style", "display:none");
        question2.setAttribute("style", "dispay:block");
        correct.setAttribute("style", "display:block");
    }
    else {
        question1.setAttribute("style", "display:none");
        question2.setAttribute("style", "dispay:block");
        incorrect.setAttribute("style", "display:block");
        wrongAns();
    }

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
    question5.setAttribute("style", "dispay:block");
});


// Final score display
button5.addEventListener("click", function(){
    correct.setAttribute("style", "display:none");
    incorrect.setAttribute("style", "display:none");
    question5.setAttribute("style", "display:none");
    clearInterval(countdown);
    finalScore.setAttribute("style", "dispay:block");
    finalScore.textContent = "Your final score is: " + timerText;
});

// Timer function
function timerGo() {
    countdown = setInterval(function() {
        timerText--;
        timer.textContent = "Time Left: " + timerText + " seconds";
        if (timerText <= 0) {
            clearInterval(countdown);
            timer.textContent = "Time is 0; out of time!"
            question1.setAttribute("style", "display:none");
            question2.setAttribute("style", "display:none");
            question3.setAttribute("style", "display:none");
            question4.setAttribute("style", "display:none");
            question5.setAttribute("style", "display:none");
            finalScore.setAttribute("style", "display:block");
            
            finalScore.textContent = "Your final score is: " + timerText;
        }
    }, 1000)
}

function wrongAns() {
    timer.textContent = "Time Left: " + timerText + "seconds";
    timerText -= 10;
    if (timerText = 0) {
        clearInterval(countdown);
        timer.textContent = "Time is 0; out of time!"
    }
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
