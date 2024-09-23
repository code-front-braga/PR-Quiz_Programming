import { programmingLanguage } from './data.js';

const questionElement = document.querySelector('.question') as HTMLElement;
const questionNumberElement = document.querySelector('.question-number') as HTMLSpanElement;

const nextQuestionButton = document.querySelector('.next-question-button') as HTMLButtonElement;
const previousQuestionButton = document.querySelector('.back-button') as HTMLButtonElement;

const divContainer = document.querySelector('.answer-options') as HTMLDivElement;

const aCorrectAnswers: string[] = [];
const aWrongAnswers: string[] = [];

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

function createInput(index: number) {
  const input = document.createElement('input');
  input.setAttribute('type', 'radio');
  input.setAttribute('class', 'checkbox');
  input.id = `opt-${index}`;
  input.name = 'option';

  return input;
}

function createLabel(optionText: string, inputId: string) {
  const label = document.createElement('label');
  label.setAttribute('for', inputId);
  label.textContent = optionText;

  return label;
}

function putCreatedElementsOnHtml(optionText: string, index: number, correctAnswer: string, selectedAnswer: string) {
  const divOptionsContainer = createDivOptions();
  const input = createInput(index);
  const label = createLabel(optionText, input.id);

  divOptionsContainer.appendChild(input);
  divOptionsContainer.appendChild(label);

  getOptionFromUser(input, correctAnswer, selectedAnswer);

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
    const correctAnswer = currentQuestion.correctAnswer;
    const selectedAnswer = currentQuestion.answerOptions[index];

    const divOptionsContainer = putCreatedElementsOnHtml(answer, index, correctAnswer, selectedAnswer);
    divContainer.appendChild(divOptionsContainer);
  });
}

function getOptionFromUser(input: HTMLInputElement, correctAnswer: string, selectedAnswer: string) {
  input.addEventListener('click', () => {
    if (selectedAnswer === correctAnswer) {
      console.log('ok');
    } else {
      console.log('errado');
    }
  });
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
