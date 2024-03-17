const questions = [
    {
        question: "Which is the closest planet to the Sun?",
        answers: [
            { text: "Mars", correct: false },
            { text: "Mercury", correct: true },
            { text: "Venus", correct: false },
            { text: "Earth", correct: false },
        ]
    },
    {
        question: "Who is the inventor of the telephone?",
        answers: [
            { text: "Alexander Graham Bell", correct: true },
            { text: "Thomas Edison", correct: false },
            { text: "Nikola Tesla", correct: false },
            { text: "Albert Einstein", correct: false },
        ]
    },
    {
        question: "What is the chemical symbol for oxygen?",
        answers: [
            { text: "O", correct: true },
            { text: "OX", correct: false },
            { text: "O2", correct: false },
            { text: "Oxy", correct: false },
        ]
    },
    {
        question: "Which is the most populous country in the world?",
        answers: [
            { text: "China", correct: true },
            { text: "India", correct: false },
            { text: "United States", correct: false },
            { text: "Russia", correct: false },
        ]
    },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer_buttons");
const nextButton = document.getElementById("next_btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerText = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerText = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerText = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerText = "Play again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}
nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();
