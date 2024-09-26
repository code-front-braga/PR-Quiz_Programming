import { programmingLanguage } from './data.js';

const chronometerDisplayElement = document.querySelector('.timing-display') as HTMLElement;

const questionNumberDisplayElement = document.querySelector('.question-number') as HTMLElement;
const questionDisplayElement = document.querySelector('.question') as HTMLElement;

const answerOptionsElement = document.querySelector('.answer-options') as HTMLElement;

const nextQuestionButton = document.querySelector('.next-question-button') as HTMLButtonElement;

const arrayOfCorrectAnswers: string[] = [];
const arrayOfWrongAnswers: string[] = [];

let currentIndex = 0;

/**
 * Criar os elementos; -----OK-----
 * Mostrar os elementos na tela; -----OK-----
 * Captar o clique do usuário; -----OK-----
 * Quando o usuário avançar para a próxima pergunta, o número da questão deve mudar; -----OK-----
 * Os inputs que não forem marcados, devem ficar desabilitados; -----OK-----
 *
 */

function initQuiz() {
  nextQuestionButton.addEventListener('click', nextQuestion);

  displayElements();
}

function createAllOptionsContainer() {
  const div = document.createElement('div');
  div.className = 'all-options';

  return div;
}

function createInput(index: number, optionText: string) {
  const input = document.createElement('input');
  input.type = 'radio';
  input.className = 'checkbox';
  input.value = optionText;
  input.id = `opt-${index}`;
  input.name = 'option';

  input.addEventListener('click', () => getClickFromUser(input));

  return input;
}

function createLabel(index: number, optionText: string) {
  const label = document.createElement('label');
  label.setAttribute('for', `opt-${index}`);
  label.textContent = optionText;

  return label;
}

function displayElements() {
  answerOptionsElement.innerHTML = '';

  const allOptions = programmingLanguage[currentIndex].answerOptions;

  allOptions.forEach((answer, index) => {
    const currentQuestion = programmingLanguage[currentIndex].question;
    const formattedQuestionText = `Questão ${(currentIndex + 1).toString().padStart(2, '0')}`;

    const allOptionsContainer = createAllOptionsContainer();
    const input = createInput(index, answer);
    const label = createLabel(index, answer);

    questionDisplayElement.textContent = currentQuestion;
    questionNumberDisplayElement.textContent = formattedQuestionText;

    allOptionsContainer.appendChild(input);
    allOptionsContainer.appendChild(label);
    answerOptionsElement.appendChild(allOptionsContainer);
  });
}

function getClickFromUser(input: HTMLInputElement) {
  const correctAnswer = programmingLanguage[currentIndex].correctAnswer;

  disableInput(input);

  input.value === correctAnswer ? arrayOfCorrectAnswers.push(correctAnswer) : arrayOfWrongAnswers.push(input.value);

  console.log('Correto:', arrayOfCorrectAnswers);
  console.log('Errado:', arrayOfWrongAnswers);
}

function disableInput(input: HTMLInputElement) {
  const allInputs: NodeListOf<HTMLInputElement> = document.querySelectorAll('input[name="option"]');

  allInputs.forEach(otherInput => {
    if (otherInput !== input) {
      otherInput.disabled = true;

      const label = document.querySelector(`label[for="${otherInput.id}"]`) as HTMLLabelElement;
      label.classList.add('disabled-style');
    }
  });
}

function nextQuestion() {
  const quizLength = programmingLanguage.length - 1;

  if (currentIndex < quizLength) {
    currentIndex++;

    displayElements();

    if (currentIndex === 4) {
      nextQuestionButton.classList.add('disabled-style');
      nextQuestionButton.disabled = true;
    }
  }
}

initQuiz();
