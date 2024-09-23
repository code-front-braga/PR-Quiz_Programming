import { programmingLanguage } from './data.js';
const questionElement = document.querySelector('.question');
const questionNumberElement = document.querySelector('.question-number');
const nextQuestionButton = document.querySelector('.next-question-button');
const previousQuestionButton = document.querySelector('.back-button');
const divContainer = document.querySelector('.answer-options');
const aCorrectAnswers = [];
const aWrongAnswers = [];
let result = false;
let isForward = true;
let score = 0;
let currentQuestionIndex = 0;
function initQuiz() {
    displayOptions();
    nextQuestion();
    previousQuestion();
}
function createDivOptions() {
    const div = document.createElement('div');
    div.setAttribute('class', 'all-options');
    return div;
}
function createInput(index) {
    const input = document.createElement('input');
    input.setAttribute('type', 'radio');
    input.setAttribute('class', 'checkbox');
    input.id = `opt-${index}`;
    input.name = 'option';
    return input;
}
function addInputEvent(input, fn) {
    input.addEventListener('click', () => fn);
}
function createLabel(optionText, inputId) {
    const label = document.createElement('label');
    label.setAttribute('for', inputId);
    label.textContent = optionText;
    return label;
}
function putCreatedElementsOnHtml(optionText, index) {
    const divOptionsContainer = createDivOptions();
    const input = createInput(index);
    const label = createLabel(optionText, input.id);
    divOptionsContainer.appendChild(input);
    divOptionsContainer.appendChild(label);
    return divOptionsContainer;
}
function displayOptions() {
    const currentQuestion = programmingLanguage[currentQuestionIndex];
    const answers = currentQuestion.answerOptions;
    const question = currentQuestion.question;
    const questionNumber = (currentQuestionIndex + 1).toString().padStart(2, '0');
    divContainer.innerHTML = '';
    questionElement.textContent = question;
    questionNumberElement.textContent = `QUESTÃO ${questionNumber}`;
    answers.forEach((answer, index) => {
        const divOptionsContainer = putCreatedElementsOnHtml(answer, index);
        divContainer.appendChild(divOptionsContainer);
    });
}
function getOptionFromUser() {
    // TODO: Continuar daqui
}
function nextQuestion() {
    nextQuestionButton.addEventListener('click', () => {
        currentQuestionIndex++;
        displayOptions();
    });
}
function previousQuestion() {
    previousQuestionButton.addEventListener('click', () => {
        currentQuestionIndex--;
        displayOptions();
    });
}
initQuiz();
