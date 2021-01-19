// various variables
var correctAnswer = document.querySelector("#correctAnswer");
var button0 = document.querySelector("#startQuiz");
var intro = document.querySelector("#intro");
var correct = document.querySelector("#correct");
var incorrect = document.querySelector("#incorrect");

var timer = document.querySelector("#timer");
var timerText = 50;
var countdown;

var finalScore = document.querySelector("#finalScore");

var endTime = document.querySelector("#endTime");

// Variables for buttons and questions
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
// question1.setAttribute("style", "display:none");
// question2.setAttribute("style", "display:none");
// question3.setAttribute("style", "display:none");
// question4.setAttribute("style", "display:none");
// question5.setAttribute("style", "display:none");
finalScore.setAttribute("style", "display:none");
correct.setAttribute("style", "display:none");
incorrect.setAttribute("style", "display:none");


button0.addEventListener("click", function(){
    // Timer starts
    timerGo();
    // Hide the intro
    intro.setAttribute("style", "display:none");
    // Show first question
    firstQuestion();

});


// button1.addEventListener("click", function(){
//     if(ans1.clicked===true) {
//         question1.setAttribute("style", "display:none");
//         question2.setAttribute("style", "dispay:block");
//         correct.setAttribute("style", "display:block");
//     }
//     else {
//         question1.setAttribute("style", "display:none");
//         question2.setAttribute("style", "dispay:block");
//         incorrect.setAttribute("style", "display:block");
//         wrongAns();
//     }

// });

// button2.addEventListener("click", function(){
//     question2.setAttribute("style", "display:none");
//     question3.setAttribute("style", "dispay:block");
// });

// button3.addEventListener("click", function(){
//     question3.setAttribute("style", "display:none");
//     question4.setAttribute("style", "dispay:block");
// });

// button4.addEventListener("click", function(){
//     question4.setAttribute("style", "display:none");
//     question5.setAttribute("style", "dispay:block");
// });


// // Final score display
// button5.addEventListener("click", function(){
//     correct.setAttribute("style", "display:none");
//     incorrect.setAttribute("style", "display:none");
//     question5.setAttribute("style", "display:none");
//     clearInterval(countdown);
//     finalScore.setAttribute("style", "dispay:block");
//     finalScore.textContent = "Your final score is: " + timerText;
// });

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

var questions = [
    {
        question: "Which of these breeds is the tallest?",
        answers: [
            "German Shepherd",
            "Irish Wolfhound",
            "Saint Bernard",
            "Great Dane"
        ],
        correctAnswer: "Irish Wolfhound"
    },

    {
        question: "Which breed of dog has a blue-black tongue?",
        answers: [
            "Chow chow",
            "German short-haired pointer",
            "Mexican hairless",
            "Chihuahua"
        ],
        correctAnswer: "Chow chow"
    },

    {
        question: "What jobs are Belgian Malinois commonly used for?",
        answers: [
            "Military",
            "K9 units",
            "Herding",
            "All of the above"
        ],
        correctAnswer: "All of the above"
    },

    {
        question: "What is the most common dog breed in the US?",
        answers: [
            "Golden retriever",
            "Shiba inu",
            "Shih tzu",
            "Labrador retriever"
        ],
        correctAnswer: "Labrador retriever"
    },

    {
        question: "Why are mixed breed dogs typically better to adopt than purebred dogs?",
        answers: [
            "Purebreeds are expensive",
            "Purebreeds are more prone to health conditions",
            "Mixed breeds are nicer",
            "Purebreds are more likely to bite people"
        ],
        correctAnswer: "Purebreeds are more prone to health conditions"
    }
];

var currentQuestionIndex = 0;

// rename later
function firstQuestion() {
    question1.innerHTML = "";
    var currentQuestion = questions[currentQuestionIndex];
    var questionTitle = document.createElement("h3");
    questionTitle.textContent = currentQuestion.question;
    question1.append(questionTitle);

    for(var i=0; i < currentQuestion.answers.length; i++) {
        var choiceButtons = document.createElement("button");
        choiceButtons.setAttribute("class", "choice");
        choiceButtons.setAttribute("value", currentQuestion.answers[i]);
        choiceButtons.textContent = currentQuestion.answers[i]
        choiceButtons.onclick = clickButton;
        question1.append(choiceButtons);
    }
   


}

function clickButton() {
    if (this.value !== questions[currentQuestionIndex].correctAnswer) {
        timerText -= 10;
        correct.setAttribute("style", "display:none");
        incorrect.setAttribute("style", "display:block");

    }
    else {
        incorrect.setAttribute("style", "display:none");
        correct.setAttribute("style", "display:block");
    }

    currentQuestionIndex++;

    if (currentQuestionIndex === questions.length) {
        correct.setAttribute("style", "display:none");
        incorrect.setAttribute("style", "display:none");
        question1.innerHTML = "";
        clearInterval(countdown);
        finalScore.setAttribute("style", "display:block");
        finalScore.textContent = "Your final score is: " + timerText;
    }
    else {
        firstQuestion();
    }
}

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
