// various variables
var correctAnswer = document.querySelector("#correctAnswer");
var button0 = document.querySelector("#startQuiz");
var intro = document.querySelector("#intro");
var correct = document.querySelector("#correct");
var incorrect = document.querySelector("#incorrect");
var initials = document.querySelector("#initials");
var finalTime = document.querySelector("#finalTime");
var submitInitials = document.querySelector("#submitInitials");
var noTime = document.querySelector("#noTime");

// Timer variables
var timer = document.querySelector("#timer");
var timerText = 50;
var countdown;

var finalScore = document.querySelector("#finalScore");
var endTime = document.querySelector("#endTime");
var question1 = document.querySelector("#question1");

// Sets intro to display, and everything else to invisible
intro.setAttribute("style", "display:block");
question1.setAttribute("style", "display:none");
finalScore.setAttribute("style", "display:none");
correct.setAttribute("style", "display:none");
incorrect.setAttribute("style", "display:none");
initials.setAttribute("style", "display:none");
noTime.setAttribute("style", "display:none");



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

    // Check if array exists
    if (localStorage.getItem("highScore")){
        var highScores = JSON.parse(localStorage.getItem("highScore"));
        highScores.sort();
    }
    else{
        var highScores = [];
        highScores.sort();
    }

    var scoreOBJ = {
        initials:initialsValue,
        score:timerText
    }

    highScores.push(scoreOBJ);
    localStorage.setItem("highScore", JSON.stringify(highScores));
    highScores.sort();
    
    // Go to highscore page
    window.location.href = "highscores.html";
    
});


// Timer function
function timerGo() {
    countdown = setInterval(function() {
        timerText--;
        timer.textContent = "Time Left: " + timerText + " seconds";

        // If statement for if the timer reaches 0 or below
        if (timerText <= 0) {
            question1.setAttribute("style", "display:none");
            correct.setAttribute("style", "display:none");
            incorrect.setAttribute("style", "display:none");
            question1.innerHTML = "";
            clearInterval(countdown);
            noTime.setAttribute("style", "display:block");
            timer.textContent = "Out of time!";
        }
    }, 1000)
}

// Function for wrong answer 
function wrongAns() {
    timer.textContent = "Time Left: " + timerText + "seconds";
    timerText -= 10;
    if (timerText <= 0) {
        clearInterval(countdown);
        timer.textContent = "Out of time!";
        noTime.setAttribute("style", "display:block");
    }
}

// Array for questions
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

// Function to get the questions and loop through them
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

// Function to start quiz

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

    // Out of questions loop
    if (currentQuestionIndex === questions.length) {
        question1.setAttribute("style", "display:none");
        question1.innerHTML = "";
        clearInterval(countdown);

        // If loop for timer; when timer is greater than 0, initials can be input. If it goes below 0, no input field appears
        if (timerText > 0) {
            finalScore.setAttribute("style", "display:block");
            initials.setAttribute("style", "display:block");
            finalTime.textContent = timerText + " seconds";
            timer.textContent = "Complete!";
        }
        else {
            noTime.setAttribute("style", "display:block");
            timer.textContent = "Out of time!";
        }
        
    }
    else {
        getQuestion();
    }
}

