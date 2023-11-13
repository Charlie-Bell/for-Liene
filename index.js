let currentQuestionIndex = 0;

let questions = [
    {
        question: "What colour are apples?",
        answer: "Red/Green",
        userAnswer: "",
        choices: ["Red/Green", "B", "C", "D"]
    },
    {
        question: "What is the capital of France?",
        answer: "Paris",
        userAnswer: "",
        choices: ["A", "B", "Paris", "D"]
    }
];

const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const submitElement = document.getElementById("submit");

window.onload = function() {
    loadQuestion();
}

function loadQuestion() {
    let currentQuestion = questions[currentQuestionIndex];
    questionElement.innerHTML = currentQuestion.question;

    currentQuestion.choices.forEach(choice => {
        const select = document.createElement("input");
        select.setAttribute("type", "radio");
        select.setAttribute("name", "select");
        select.setAttribute("value", choice);
        var label = document.createElement("label");
        label.innerHTML = choice;
        answersElement.appendChild(select);
        answersElement.appendChild(label);
    });
}

function clearQuestion() {
    children = answersElement.children;
    for (var i = children.length - 1; i >=0; --i) {
        children[i].remove();
    }
}

function calculateScore() {
    score = 0;
    for(var i=0; i < questions.length; i++) {
        var response = questions[i].userAnswer;
        if(response === questions[i].answer){
            score++;
        }
    }
    alert("You scored " + score + "/" + questions.length);
    alert("Confirm to restart.");
    currentQuestionIndex = 0;

}

function submitAnswer() {
    questions[currentQuestionIndex].userAnswer = document.querySelector('input[name="select"]:checked').getAttribute("value");
    currentQuestionIndex++;
    if(currentQuestionIndex === questions.length) {
        calculateScore();
    }
    clearQuestion();
    loadQuestion();
}

submitListener = submitElement.addEventListener("click", function(){ submitAnswer() });