// MAIN START
var mainStart = document.getElementById("main-start")
var buttonStart = document.getElementById("button-start")

// MAIN QUESTIONS
var mainQuestions = document.getElementById("questions-container")

// MAIN ANSWERS QUERY
var wrong = document.getElementById("container-wrong")
var correct = document.getElementById("container-correct")
var buttonContinueWrong = document.getElementById("button-continue-wrong")
var buttonContinueCorrect = document.getElementById("button-continue-correct")

// MAIN FINISH
var mainFinish = document.getElementById("container-answer-finish")
var errors = document.getElementById("errors")
var corrects = document.getElementById("corrects")
var again = document.getElementById("button-again")
var time = document.getElementById("time")

// QUESTION AND ANSWERS ELEMENTS

again.addEventListener("click", () => {
    window.location.reload()
})

var containerQuestionsGame = document.createElement("div")
containerQuestionsGame.className = "container-questions-game"

var questionTitle = document.createElement("div")
questionTitle.classList = "question"

var answerContainer = document.createElement("div")
answerContainer.className = "answer"
var row1 = document.createElement("div")
row1.className = "answer-row"
var row2 = document.createElement("div")
row2.className = "answer-row"
answerContainer.appendChild(row1)
answerContainer.appendChild(row2)

function createQuestions() {
    containerQuestionsGame.appendChild(questionTitle)
    containerQuestionsGame.appendChild(answerContainer)
    mainQuestions.appendChild(containerQuestionsGame)
}

// BUTTON WRONG

buttonContinueWrong.addEventListener("click", () => {
    if(i == questions.length) {
        wrong.style.display = "none";
        mainFinish.style.display = "flex";
        errors.innerHTML += `${error}`;
        corrects.innerHTML += `${perfect}`;
        if(segundos < 10) {
            time.innerHTML += `${minutos}:0${segundos}`;
        } else {
            time.innerHTML += `${minutos}:${segundos}`;
        }
    } else {
        gameQuiz()
        wrong.style.display = "none";
    }
})

// BUTTON CORRECT

buttonContinueCorrect.addEventListener("click", () => {
    if(i == questions.length) {
        correct.style.display = "none";
        mainFinish.style.display = "flex"
        errors.innerHTML += `${error}`;
        corrects.innerHTML += `${perfect}`;
        if(segundos < 10) {
            time.innerHTML += `${minutos}:0${segundos}`;
        } else {
            time.innerHTML += `${minutos}:${segundos}`;
        }
    } else {
        gameQuiz()
        correct.style.display = "none";
    }
})

// QUESTIONS

var questions = [
    {
        question: "Cuanto es 1 + 1 ?",
        answers: [{
            answer: "2",
            correct: true
        }, {
            answer: "3",
            correct: false
        }, {
            answer: "4",
            correct: false
        }, {
            answer: "5",
            correct: false
        }]
    },
    {
        question: "Cuanto es 2 + 2 ?",
        answers: [{
            answer: "4",
            correct: true
        }, {
            answer: "8",
            correct: false
        }, {
            answer: "6",
            correct: false
        }, {
            answer: "3",
            correct: false
        }]
    },
    {
        question: "Cuanto es 3 + 3 ?",
        answers: [{
            answer: "6",
            correct: true
        }, {
            answer: "9",
            correct: false
        }, {
            answer: "7",
            correct: false
        }, {
            answer: "12",
            correct: false
        }]
    },
    {
        question: "Cuanto es 4 + 4 ?",
        answers: [{
            answer: "8",
            correct: true
        }, {
            answer: "9",
            correct: false
        }, {
            answer: "6",
            correct: false
        }, {
            answer: "10",
            correct: false
        }]
    },
    {
        question: "Cuanto es 5 + 5 ?",
        answers: [{
            answer: "10",
            correct: true
        }, {
            answer: "11",
            correct: false
        }, {
            answer: "7",
            correct: false
        }, {
            answer: "8",
            correct: false
        }]
    },
    {
        question: "Cuanto es 6 + 6 ?",
        answers: [{
            answer: "12",
            correct: true
        }, {
            answer: "14",
            correct: false
        }, {
            answer: "15",
            correct: false
        }, {
            answer: "10",
            correct: false
        }]
    },
    {
        question: "Cuanto es 7 + 7 ?",
        answers: [{
            answer: "14",
            correct: true
        }, {
            answer: "16",
            correct: false
        }, {
            answer: "17",
            correct: false
        }, {
            answer: "12",
            correct: false
        }]
    },
    {
        question: "Cuanto es 8 + 8 ?",
        answers: [{
            answer: "16",
            correct: true
        }, {
            answer: "18",
            correct: false
        }, {
            answer: "20",
            correct: false
        }, {
            answer: "15",
            correct: false
        }]
    },
    {
        question: "Cuanto es 9 + 9 ?",
        answers: [{
            answer: "18",
            correct: true
        }, {
            answer: "21",
            correct: false
        }, {
            answer: "17",
            correct: false
        }, {
            answer: "19",
            correct: false
        }]
    },
]

var i = 0; // NEXT QUESTION
var error = 0;
var perfect = 0;
var minutos = 0;
var segundos = 0;

buttonStart.addEventListener("click", gameQuiz) // START GAME

// GAME FUNCTION

function gameQuiz() {

    mainStart.style.display = "none";
    mainQuestions.style.display = "flex";

    createQuestions()

    var option1, option2, option3, option4;

    if(i == 0) {
        shuffle(questions)

        window.setInterval(() => {
            segundos++;
            if(segundos == 60){
                segundos = 0;
                minutos++;
            }
        }, 1000)
    }

    shuffle(questions[i].answers)

    var buttonRowOneFirst = document.createElement("button")
    option1 = questions[i].answers[0].correct;
    buttonRowOneFirst.innerHTML += `
        ${questions[i].answers[0].answer}
    `;

    var buttonRowOneSecond = document.createElement("button")
    option2 = questions[i].answers[1].correct;
    buttonRowOneSecond.innerHTML += `
        ${questions[i].answers[1].answer}
    `;

    row1.appendChild(buttonRowOneFirst)
    row1.appendChild(buttonRowOneSecond)

    var buttonRowTwoFirst = document.createElement("button")
    option3 = questions[i].answers[2].correct;
    buttonRowTwoFirst.innerHTML += `
        ${questions[i].answers[2].answer}
    `;
    
    var buttonRowTwoSecond = document.createElement("button")
    
    option4 = questions[i].answers[3].correct;
    buttonRowTwoSecond.innerHTML += `
        ${questions[i].answers[3].answer}
    `;

    row2.appendChild(buttonRowTwoFirst)
    row2.appendChild(buttonRowTwoSecond)
    
    var title = document.createElement("h2")
    questionTitle.appendChild(title)
    title.innerHTML += `
        ${questions[i].question}
    `;

    buttonRowOneFirst.addEventListener("click", () => {
        if(option1) {
            correct.style.display = "flex";
            perfect++;
        } else {
            wrong.style.display = "flex";
            error++;
        }
        buttonRowOneFirst.remove()
        buttonRowOneSecond.remove()
        buttonRowTwoFirst.remove()
        buttonRowTwoSecond.remove()
        title.remove()
        i++;
    })
    buttonRowOneSecond.addEventListener("click", () => {
        if(option2) {
            correct.style.display = "flex";
            perfect++;
        } else {
            wrong.style.display = "flex";
            error++;
        }
        buttonRowOneFirst.remove()
        buttonRowOneSecond.remove()
        buttonRowTwoFirst.remove()
        buttonRowTwoSecond.remove()
        title.remove()
        i++;
    })
    buttonRowTwoFirst.addEventListener("click", () => {
        if(option3) {
            correct.style.display = "flex";
            perfect++;
        } else {
            wrong.style.display = "flex";
            error++;
        }
        buttonRowOneFirst.remove()
        buttonRowOneSecond.remove()
        buttonRowTwoFirst.remove()
        buttonRowTwoSecond.remove()
        title.remove()
        i++;
    })
    buttonRowTwoSecond.addEventListener("click", () => {
        if(option4) {
            correct.style.display = "flex";
            perfect++;
        } else {
            wrong.style.display = "flex";
            error++;
        }
        buttonRowOneFirst.remove()
        buttonRowOneSecond.remove()
        buttonRowTwoFirst.remove()
        buttonRowTwoSecond.remove()
        title.remove()
        i++;
    })
    
}

// SHUFFLE FUNCTION

function shuffle(array) {

    var currentIndex = array.length, randomIndex;

    while (currentIndex !== 0) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}
