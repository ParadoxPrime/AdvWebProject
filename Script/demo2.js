//DEMO 2: Quiz Application
// Question includes category, question, choices, correct index, and explanation.

const questions = [
    // Question 1: HTML terminology.
    {
    category: "HTML",
    question: "What does HTML stand for?",
    options: [
    "HyperText Markup Language",
    "HyperText Markdown Language",
    "HighText Markup Language",
    "Hyper Transfer Markup Language"
    ],
    correctAnswer: 0,
    explanation: "HTML stands for HyperText Markup Language and is used to structure web pages."
    },
    
    // Question 2: HTML line breaks.
    {
    category: "HTML",
    question: "The <br> tag creates a line break.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "The br element inserts a line break in the document."
    },
    
    // Question 3: CSS terminology.
    {
    category: "CSS",
    question: "What does CSS stand for?",
    options: [
    "Cascading Style Sheets",
    "Computer Style Sheets",
    "Creative Style Sheets",
    "Colorful Style Sheets"
    ],
    correctAnswer: 0,
    explanation: "CSS controls the appearance and layout of web pages."
    },
    
    // Question 4: JavaScript debugging.
    {
    category: "JavaScript",
    question: "Which method prints to the browser console?",
    options: [
    "console.log()",
    "print()",
    "write()"
    ],
    correctAnswer: 0,
    explanation: "console.log() is commonly used for debugging."
    },
        
    // Question 5: HTTP status codes.
    {
    category: "HTTP",
    question: "HTTP status code 404 means a resource was not found.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "404 Not Found means the server could not locate the requested resource."
    },
    
    // Question 6: HTML links.
    {
    category: "HTML",
    question: "Which HTML element creates a hyperlink?",
    options: ["<a>", "<link>", "<href>", "<url>"],
    correctAnswer: 0,
    explanation: "The <a> element creates a hyperlink, and its href attribute stores the destination URL."
    },
    
    // Question 7: CSS selectors.
    {
    category: "CSS",
    question: "Which CSS selector targets an element with the id \"header\"?",
    options: [".header", "#header", "header", "*header"],
    correctAnswer: 1,
    explanation: "The hash symbol selects an element by its id, so #header targets id=\"header\"."
    },
    
    // Question 8: JavaScript variables.
    {
    category: "JavaScript",
    question: "Which keyword declares a block-scoped variable that can be reassigned?",
    options: ["const", "let", "varies", "fixed"],
    correctAnswer: 1,
    explanation: "The let keyword declares a block-scoped variable whose value can be changed later."
    },
    
    // Question 9: HTTP request methods.
    {
    category: "HTTP",
    question: "Which HTTP method is commonly used to retrieve data from a server?",
    options: ["GET", "SEND", "FETCH", "READ"],
    correctAnswer: 0,
    explanation: "GET requests are commonly used to request or retrieve data from a server."
    },
    
    // Question 10: Web accessibility.
    {
    category: "Accessibility",
    question: "What is the purpose of an image's alt attribute?",
    options: [
    "To provide alternative text describing the image",
    "To change the image's size",
    "To add a video to the page",
    "To hide the image from all users"
    ],
    correctAnswer: 0,
    explanation: "The alt attribute provides a text alternative for users who cannot see the image."
    }
];
// End of questions array.

//Quiz variables
let currentQuestion = Number(localStorage.getItem('quizCurrentQuestion')) || 0;
let correctAnswers = Number(localStorage.getItem('quizCorrectAnswers')) || 0;

function saveQuizProgress() {
    localStorage.setItem('quizCurrentQuestion', String(currentQuestion));
    localStorage.setItem('quizCorrectAnswers', String(correctAnswers));
}

function loadQuizProgress() {
    const savedQuestion = Number(localStorage.getItem('quizCurrentQuestion'));
    const savedCorrect = Number(localStorage.getItem('quizCorrectAnswers'));

    if (!isNaN(savedQuestion) && savedQuestion >= 0 && savedQuestion < questions.length) {
        currentQuestion = savedQuestion;
    }

    if (!isNaN(savedCorrect) && savedCorrect >= 0) {
        correctAnswers = savedCorrect;
    }
}

//FUNCTIONS
//Function to show a question and its options
function showQuestion() {
    const questionText = document.getElementById("question-text");
    const choicesContainer = document.getElementById("choices-container");
    const feedback = document.getElementById("feedback");
    const explanation = document.getElementById("explanation");
    explanation.textContent = "";

    const current = questions[currentQuestion];
    questionText.textContent = current.question;
    choicesContainer.innerHTML = "";

    current.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "btn btn-primary m-1";
        button.id = "choice";
        button.textContent = current.options[index];
        button.setAttribute("onclick", `checkAnswer(${index})`);
        choicesContainer.appendChild(button);
    });

    feedback.textContent = "";
}

function checkAnswer(selected) {

    const feedback = document.getElementById("feedback");
    const explanation = document.getElementById("explanation");

    if (selected === questions[currentQuestion].correctAnswer) {
        feedback.textContent = "Correct!";
        correctAnswers++;
        explanation.textContent = questions[currentQuestion].explanation;
    } else {
        feedback.textContent = "Incorrect.";
        explanation.textContent = questions[currentQuestion].explanation;
    }

    saveQuizProgress();

    setTimeout(() => {
        currentQuestion++;
        saveQuizProgress();

        if (currentQuestion < questions.length) {
            showQuestion();
        } else {
            const quizContainer = document.getElementById("quiz-container");
            quizContainer.innerHTML = `<h2>Quiz Completed!</h2><p>You answered ${correctAnswers} out of ${questions.length} questions correctly.</p>`;
            localStorage.removeItem('quizCurrentQuestion');
            localStorage.removeItem('quizCorrectAnswers');
        }
    }, 2000);
};

loadQuizProgress();
showQuestion();