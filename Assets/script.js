// various variables
var correctAnswer = document.querySelector("#correctAnswer");
var button0 = document.querySelector("#startQuiz");
var intro = document.querySelector("#intro");
var correct = document.querySelector("#correct");
var incorrect = document.querySelector("#incorrect");
var initials = document.querySelector("#initials");
var finalTime = document.querySelector("#finalTime");
var submitInitials = document.querySelector("#submitInitials");

var timer = document.querySelector("#timer");
var timerText = 50;
var countdown;

var finalScore = document.querySelector("#finalScore");

var endTime = document.querySelector("#endTime");

var question1 = document.querySelector("#question1");

// Variables for buttons and questions


intro.setAttribute("style", "display:block");
question1.setAttribute("style", "display:none");
finalScore.setAttribute("style", "display:none");
correct.setAttribute("style", "display:none");
incorrect.setAttribute("style", "display:none");
initials.setAttribute("style", "display:none");



button0.addEventListener("click", function(){
    // Timer starts
    timerGo();
    // Hide the intro
    intro.setAttribute("style", "display:none");
    // Show first question
    getQuestion();

});

submitInitials.addEventListener("click", function(){
    var initialsValue = initials.value;
    var highScores = JSON.parse(localStorage.getItem("highScore"));
    // for (var i = 0; i < highScores.length; i++) {
    //     if (timerText > highScores[i].score) {

    //     }
    // }
    scoreOBJ = {
        initials:initialsValue,
        score:timerText
    }
    
});




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

            question1.setAttribute("style", "display:none");
            correct.setAttribute("style", "display:none");
            incorrect.setAttribute("style", "display:none");
            question1.innerHTML = "";
            clearInterval(countdown);
            finalScore.textContent = "Your final score is: " + timerText;
            finalScore.setAttribute("style", "display:block");
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


function getQuestion() {
    question1.innerHTML = "";
    question1.setAttribute("style", "display:block");
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

    // End result keeps showing 10 seconds earlier than timer; ask how to fix
    if (currentQuestionIndex === questions.length) {
        question1.setAttribute("style", "display:none");
        correct.setAttribute("style", "display:none");
        incorrect.setAttribute("style", "display:none");
        question1.innerHTML = "";
        clearInterval(countdown);
        // finalScore.textContent = "Your final score is: " + timerText + ". Input initials below.";
        finalScore.setAttribute("style", "display:block");
        initials.setAttribute("style", "display:block");
        finalTime.textContent = timerText + " seconds";
    }
    else {
        getQuestion();
    }
}

