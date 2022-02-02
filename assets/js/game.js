var quizTitle = document.querySelector('#quiz-title');
var counter = document.querySelector('#counter');
var info = document.querySelector('.info');
var startBtn = document.querySelector('#start-btn');
var questionText = document.getElementById('question-text');
var choice1 = document.getElementById("btn-1");
var choice2 = document.getElementById("btn-2");
var choice3 = document.getElementById("btn-3");
var choice4 = document.getElementById("btn-4");
var timerText = document.getElementById("timer");
var currentQuestion = 0;
var userScore = 0;
var userInitials = document.getElementById("user-initials");
var timerCount = 60;
var timer;
var highscores = JSON.parse(localStorage.getItem("highscores")) || []

var quizQuestions = [
    {
        question: "Which of the following is a list of attributes?",
        choices:    ["href, src, style",
                    "<h1>, <p>, <br>",
                    "HTML, CSS, JavaScript",
                    "string, integer, array"],
        answer: "href, src, style"
    },

    {
        question: "What does API stand for?",
        choices:    ["Apple Picking Industry",
                    "Application Programming Interface",
                    "Application Processing Input",
                    "Artificial Programming Interface"],
        answer: "Application Programming Interface"
    },

    {
        question: "What is a callback function?",
        choices:    ["A function written in the early stages of development that gets called into an application.",                    
                    "A function that assigns values to JavaScript variables.",
                    "A function that is only performed based on different conditions",
                    "A function passed into another function as an argument."],
        answer: "A function passed into another function as an argument."
    },

    {
        question: "What does CSS stand for?",
        choices:    ["Cascading Structure Sheet",
                    "Character Set Sheet",
                    "Content Structure Sheet",
                    "Cascading Style Sheet"],
        answer: "Cascading Style Sheet"
    },

    {
        question: "What does TDD mean?",
        choices:    ["Test Driven Development",
                    "Testing Dependent Development",
                    "Tested Development Diagnosis",
                    "Test Developed Document"],
        answer: "Test Driven Development"
    },

    {
        question: "What is the order of Test Driven Development",
        choices:    ["1.) Pass test 2.) Fail test 3.) Refactor",
                    "1.) Fail test 2.) Pass test 3.) Refactor",
                    "1.) Refactor 2.) Fail test 3.) Pass test",
                    "The order doesn't matter."],
        answer: "1.) Fail test 2.) Pass test 3.) Refactor"
    },
]

function startQuiz() {
    console.log("start button pressed");
    document.getElementById("start-page").setAttribute("class", "hidden-start-page");
    document.getElementById("quiz-page").setAttribute("id", "show-quiz");
    getQuestion();
    startTimer();
}

choice1.addEventListener("click", function nextQuestion() {
    if (quizQuestions[currentQuestion].choices[0]==quizQuestions[currentQuestion].answer) {
        document.getElementById("check-answer").append("👍");
        userScore += timerCount;
    }
    else {document.getElementById("check-answer").append("👎")
        timerCount -= 10
}
    if (currentQuestion === 2)
        gameOver();
        currentQuestion++
    getQuestion();
    });

choice2.addEventListener("click", function nextQuestion() {
    if (quizQuestions[currentQuestion].choices[1]==quizQuestions[currentQuestion].answer) {
        document.getElementById("check-answer").append("👍");
        userScore += timerCount;
    }
    else {document.getElementById("check-answer").append("👎")
    timerCount -= 10
}
    if (currentQuestion === 2)
        gameOver();
        currentQuestion++
    getQuestion();
});

choice3.addEventListener("click", function nextQuestion() {
    if (quizQuestions[currentQuestion].choices[2]==quizQuestions[currentQuestion].answer) {
        document.getElementById("check-answer").append("👍")
        userScore += timerCount;
    }
    else {document.getElementById("check-answer").append("👎")
    timerCount -= 10
}
    if (currentQuestion === 2)
        gameOver();
        currentQuestion++
    getQuestion();
});

choice4.addEventListener("click", function nextQuestion() {
    if (quizQuestions[currentQuestion].choices[3]==quizQuestions[currentQuestion].answer) {
        document.getElementById("check-answer").append("👍")
        userScore += timerCount;
    }
    else {document.getElementById("check-answer").append("👎")
    timerCount -= 10
}
    if (currentQuestion === 2)
        gameOver();
        currentQuestion++
    getQuestion();
});

function startTimer() {
    timer = setInterval(function() {
        timerCount--;
        timerText.textContent = ("Timer: " + timerCount);
    } ,1000);
};

function getQuestion() {
    questionText.textContent = quizQuestions[currentQuestion].question;
    choice1.textContent = quizQuestions[currentQuestion].choices[0];
    choice2.textContent = quizQuestions[currentQuestion].choices[1];
    choice3.textContent = quizQuestions[currentQuestion].choices[2];
    choice4.textContent = quizQuestions[currentQuestion].choices[3];
};

function gameOver() {
    currentQuestion=0;
    document.getElementById("show-quiz").setAttribute("id", "quiz-page");
    document.getElementById("scores-page").setAttribute("id", "show-score");
    clearInterval(timer);
    document.getElementById("highscore").append("Your score is: " + userScore);
};

var saveBtn = document.getElementById("save-btn")

saveBtn.addEventListener("click", function () {
    var initials = userInitials.value
    var score = {initials: initials, score: userScore}
    highscores.push(score)
    window.localStorage.setItem("highscores", JSON.stringify(highscores))
    window.location.href="highscores.html"
});