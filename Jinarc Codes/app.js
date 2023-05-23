

const questionNumber = document.querySelector(".question-number");
const questionText = document.querySelector(".question-text");
const optionContainer = document.querySelector(".option-container");
//not input yet
const answersIndicatorContainer = document.querySelector(".answers-indicator");
//not input yet
const homeBox = document.querySelector(".home-box");
//not input yet
const quizBox = document.querySelector(".quiz-box");
//not input yet
const resultBox = document.querySelector(".result-box");
const passedBox = document.querySelector(".passed-box");
const assessContainer = document.querySelector(".assess-container");
// canva signature
const canvas = document.querySelector('canvas');
const form = document.querySelector('.signature-pad-form');
const clearButton = document.querySelector('.rst-btn');
const ctx = canvas.getContext('2d');
let writingMode = false;

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const imageURL = canvas.toDataURL();
    const image = document.createElement('img');
    image.src = imageURL;
    image.heigth = canvas.height;
    image.width = canvas.width;
    image.style.display = 'block';
    form.appendChild(image);
    clearPad();
})

const clearPad = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

clearButton.addEventListener('click', (event) => {
    event.preventDefault();
    clearPad();
})

const getTargePosition = (event) => {
    positionX = event.clientX - event.target.getBoundingClientRect().x;
    positionY = event.clientY - event.target.getBoundingClientRect().y;

    retrun[positionX, positionY];
}

const handlePointerMove = (event) => {
    if (!writingMode) return

    const [positionX, positionY] = getTargePosition(event);
    ctx.lineTo(positionX, positionY);
    ctx.stroke();
}

const handlePointerUp = () => {
    writingMode = false;
}

const handlePointerDown = (event) => {
    writingMode = true;
    ctx.beginPath();

    const [positionX, positionY] = getTargePosition(event);
    ctx.moveTo(positionX, positionY);
}

ctx.lineWidth = 3;
ctx.lineJoin = ctx.lineCap = 'round';

canvas.addEventListener('pointerdown', handlePointerDown, { passive: true })
canvas.addEventListener('pointerup', handlePointerUp, { passive: true })
canvas.addEventListener('pointermover', handlePointerMove, { passive: true })

// end of canvas signature

let questionCounter = 0;
let currentQuestion;
let availableQuestions = [];
let availableOptions = [];
let correctAnswers = 0;
//let attempt = 0;


//push the questions into available Array
function setAvailableQuestions() {
    const totalQuestion = quiz.length;
    for (let i = 0; i < totalQuestion; i++) {
        availableQuestions.push(quiz[i])
    }
}


// set question number, question and options
function getNewQuestion() {
    // set question number
    questionNumber.innerHTML = "Question<br>" + (questionCounter + 1); // changes

    // set question text
    // get random question
    const questionIndex = availableQuestions[0];
    currentQuestion = questionIndex;
    questionText.innerHTML = currentQuestion.q;
    // get the position of 'questionIndex' from the availableQuestion Array
    const index1 = availableQuestions.indexOf(questionIndex);
    // remove the 'questionIndex' from the availableQuestion Array, so that the question does not repeat
    availableQuestions.splice(index1, 1);
    // set options
    // get the length of options
    const optionLen = currentQuestion.options.length
    // push options into availableOptions Array
    for (let i = 0; i < optionLen; i++) {
        availableOptions.push(i)
    }


    optionContainer.innerHTML = '';
    let animationDelay = 0.15;
    // create options in html
    for (let i = 0; i < optionLen; i++) {
        // random option
        const optionIndex = availableOptions[0];

        // get the position of 'optionIndex' from the availableOptions
        const index2 = availableOptions.indexOf(optionIndex);

        // remove the 'optionIndex' from the AvailableOptions, so that the option does not reappear
        availableOptions.splice(index2, 1);
        const option = document.createElement("div");
        option.innerHTML = currentQuestion.options[optionIndex];
        option.id = optionIndex;
        option.style.animationDelay = animationDelay + 's';
        animationDelay = animationDelay + 0.15;
        option.className = "option";
        optionContainer.appendChild(option);
        option.setAttribute("onclick", "getResult(this)");

    }

    questionCounter++;
}
// get result of current attempt question
function getResult(element) {
    console.log(element);
    let id;
    id = parseInt(element.id);
    // get the answer by comparing the id of clicked option
    if (id === currentQuestion.answer) {
        // set the green color to the correct option
        element.classList.add("correct");
        //add the indicator to correct mark pending
        updateAnswerIndicator("correct");
        correctAnswers++;
        console.log("correct:" + correctAnswers)
    }
    else {
        // set the red color to the correct option
        element.classList.add("wrong");
        //add the indicator to wrong mark pending
        updateAnswerIndicator("wrong");

        //if the answer is incorrect it will show the correct option
        const optionLen = optionContainer.children.length;
        /* for(let i=0; i<optionLen; i++){
            if(parseInt(optionContainer.children[i].id) === currentQuestion.answer){
                optionContainer.children[i].classList.add("correct");
            }
        }*/
    }
    //attempt++;
    unclickableOptions();
}

// make all the options unclickable once the user select a option
//(Restrict the user to change the option again)
function unclickableOptions() {
    const optionLen = optionContainer.children.length;
    for (let i = 0; i < optionLen; i++) {
        optionContainer.children[i].classList.add("already-answered");
    }
}

function clickReset() {
    const optionLen = optionContainer.children.length;
    for (let i = 0; i < optionLen; i++) {
        optionContainer.children[i].classList.remove("already-answered");

        if (optionContainer.children[i].classList.contains("correct")) {
            correctAnswers = correctAnswers - 1
        }
        optionContainer.children[i].classList.remove("correct");
        optionContainer.children[i].classList.remove("wrong");
    }
}
//pending
function answersIndicator() {
    answersIndicatorContainer.innerHTML = '';
    const totalQuestion = quiz.length;
    for (let i = 0; i < totalQuestion; i++) {
        const indicator = document.createElement("div");
        answersIndicatorContainer.appendChild(indicator);

    }
}
function updateAnswerIndicator(markType) {
    answersIndicatorContainer.children[questionCounter - 1].classList.add(markType)

}

function next() {
    if (questionCounter === quiz.length) {
        console.log("quiz over");
        quizOver();
    }
    else {
        getNewQuestion();
    }
}

function quizOver() {
    //hide quiz box
    quizBox.classList.add("hide");

    if (correctAnswers === quiz.length) {
        passedBox.classList.remove("hide");
    }
    else {
        //show result box
        resultBox.classList.remove("hide");
    }
    quizResult();
    document.getElementById('nvbr').hidden = false;
}

//get the quiz result
function quizResult() {
    resultBox.querySelector(".total-correct").innerHTML = correctAnswers;
}

function resetQuiz() {
    questionCounter = 0;
    correctAnswers = 0;
}

function goToHome() {
    //go to home button after submit was clicked
    assessContainer.classList.add("hide");
    homeBox.classList.remove("hide");
}


function tryAgainQuiz() {
    // when retake clicked
    resultBox.classList.add("hide");
    // will go back to quiz
    quizBox.classList.remove("hide");
    resetQuiz();
    startQuiz();

}

// ----- Starting Point -----
function startQuiz() {
    //hide home box
    homeBox.classList.add("hide");
    //show quiz box
    quizBox.classList.remove("hide");
    //first we will set all questions in availableQuestions Array
    setAvailableQuestions();
    //second we will call getNewQuestion(); function
    getNewQuestion();
    //to create indicator of answers (pending)
    document.getElementById("nvbr").hidden = true;

}
