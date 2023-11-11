const questions = [
    {
        question: "¿Cuál es mi nombre?",
        options: ["Facundo", "Martin", "Valentino", "Tomas"],
        correctAnswer: "Facundo"
    },
    {
        question: "¿Que carrera estoy estudiando?",
        options: ["Ing.Industrial", "Marketing", "Comercio Internacional", "Licenciatura en Sistemas"],
        correctAnswer: "Licenciatura en Sistemas"
    },
    {
        question: "¿Cual es mi nacionalidad?",
        options: ["Venezolano", "Chileno", "Argentino", "Uruguayo"],
        correctAnswer: "Argentino"
    },
    {
        question: "¿Donde estoy trabajando actualmente como Data Engineer?",
        options: ["PWC", "IBM", "Mercado Libre", "Globant"],
        correctAnswer: "IBM"
    },
    {
        question: "¿Tengo conocimiento en Python?",
        options: ["Si", "No"],
        correctAnswer: "Si"
    }
];

// Inicialización de variables
const questionContainers = document.querySelectorAll(".question");
const submitButton = document.getElementById("submit-button");

// Función para cargar las preguntas y opciones
function loadQuestions() {
    for (let i = 0; i < questions.length; i++) {
        const questionTextElement = questionContainers[i].querySelector(".question-text");
        const optionsContainer = questionContainers[i].querySelector(".options-container");

        questionTextElement.textContent = questions[i].question;

        questions[i].options.forEach((option) => {
            const button = document.createElement("button");
            button.textContent = option;
            button.addEventListener("click", () => checkAnswer(option, i));
            optionsContainer.appendChild(button);
        });
    }
}

// Función para comprobar las respuestas
function checkAnswer(selectedAnswer, questionIndex) {
    const currentQuestion = questions[questionIndex];
    if (selectedAnswer === currentQuestion.correctAnswer) {
        // Respuesta correcta
        questionContainers[questionIndex].style.backgroundColor = "#a0e57c";
    } else {
        // Respuesta incorrecta
        questionContainers[questionIndex].style.backgroundColor = "#ff6b6b";
    }
}

// Cargar las preguntas al cargar la página
loadQuestions();

// Evento para enviar respuestas
submitButton.addEventListener("click", () => {
    questionContainers.forEach((container) => {
        container.style.backgroundColor = "#ffff";
    });
});