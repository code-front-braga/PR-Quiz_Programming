import { frameworks, frontEnd, javaScriptMethods, nodeJs, programming, programmingLanguage } from './data.js';

const fade = document.querySelector('.fade') as HTMLElement | null;
const guideLines = document.querySelector('.guidelines-content-popup') as HTMLElement | null;

const questionNumberDisplayElement = document.querySelector('.question-number') as HTMLElement;
const questionDisplayElement = document.querySelector('.question') as HTMLElement;

const answerOptionsElement = document.querySelector('.answer-options') as HTMLElement;

const advanceToNextQuestionButton = document.querySelector('.next-question-button') as HTMLButtonElement;

const quizLabels: NodeListOf<HTMLLabelElement> = document.querySelectorAll('.sub-circle label');
const quizPage = document.querySelector('#main-quiz') as HTMLElement | null;

const revealThemesButton = document.querySelector('.hidden-trigger') as HTMLInputElement;

const readyButton = document.querySelector('.ready-button');

const arrayOfCorrectAnswers: string[] = [];
const arrayOfWrongAnswers: string[] = [];

let currentIndex = 0;
interface QuizTheme {
  answerOptions: string[];
  question: string;
  correctAnswer?: string;
}

let currentQuizTheme: QuizTheme[] = [];

function initializeQuizzes() {
  quizLabels.forEach(quizLabel => {
    quizLabel.addEventListener('click', () => {
      let title: string = quizLabel.textContent as string;
      document.title = `Quiz | ${title}`;
      window.location.href = '#main-quiz';

      revealThemesButton.checked = false;

      quizPage && quizPage.classList.add('show-quiz-page');
      fade?.classList.add('show-fade');
      guideLines?.classList.add('show-guidelines');

      checkQuizLabelClass(quizLabel, 'programming-language') && initQuizOf(programmingLanguage);
      checkQuizLabelClass(quizLabel, 'front-end') && initQuizOf(frontEnd);
      checkQuizLabelClass(quizLabel, 'frameworks') && initQuizOf(frameworks);
      checkQuizLabelClass(quizLabel, 'js-methods') && initQuizOf(javaScriptMethods);
      checkQuizLabelClass(quizLabel, 'programming') && initQuizOf(programming);
      checkQuizLabelClass(quizLabel, 'nodejs') && initQuizOf(nodeJs);
    });
  });
}

function createOptionsContainer() {
  const div = document.createElement('div');
  div.className = 'all-options';

  return div;
}

function createOptionInput(quizTheme: QuizTheme[], index: number, optionText: string) {
  const input = document.createElement('input');
  input.type = 'radio';
  input.className = 'checkbox';
  input.value = optionText;
  input.id = `opt-${index}`;
  input.name = 'option';

  input.addEventListener('click', () => handleUserAnswer(quizTheme, input));

  return input;
}

function createOptionLabel(index: number, optionText: string) {
  const label = document.createElement('label');
  label.setAttribute('for', `opt-${index}`);
  label.textContent = optionText;

  return label;
}

function renderQuizElements(quizTheme: QuizTheme[]) {
  answerOptionsElement.innerHTML = '';

  const allOptions = quizTheme[currentIndex].answerOptions;

  allOptions.forEach((optionText, index) => {
    const currentQuestion = quizTheme[currentIndex].question;
    const formattedQuestionText = `Questão ${(currentIndex + 1).toString().padStart(2, '0')}`;

    const allOptionsContainer = createOptionsContainer();
    const input = createOptionInput(quizTheme, index, optionText);
    const label = createOptionLabel(index, optionText);

    questionDisplayElement.textContent = currentQuestion;
    questionNumberDisplayElement.textContent = formattedQuestionText;

    allOptionsContainer.appendChild(input);
    allOptionsContainer.appendChild(label);
    answerOptionsElement.appendChild(allOptionsContainer);
  });
  console.log(answerOptionsElement);
}

function handleUserAnswer(quizTheme: QuizTheme[], input: HTMLInputElement) {
  const correctAnswer = quizTheme[currentIndex].correctAnswer;

  disableOtherInputs(input);

  input.value === correctAnswer ? arrayOfCorrectAnswers.push(correctAnswer) : arrayOfWrongAnswers.push(input.value);

  console.log('Correto:', arrayOfCorrectAnswers);
  console.log('Errado:', arrayOfWrongAnswers);
}

function disableOtherInputs(input: HTMLInputElement) {
  const allInputs: NodeListOf<HTMLInputElement> = document.querySelectorAll('input[name="option"]');

  allInputs.forEach(otherInput => {
    if (otherInput !== input) {
      otherInput.disabled = true;

      const label = document.querySelector(`label[for="${otherInput.id}"]`) as HTMLLabelElement;
      label.classList.add('disabled-style');
    }
  });
}

function initQuizOf(quizTheme: QuizTheme[]) {
  currentIndex = 0;
  advanceToNextQuestionButton.classList.remove('disabled-style');
  advanceToNextQuestionButton.disabled = false;
  resetQuiz(quizTheme);
}

function advanceToNextQuestion(quizTheme: QuizTheme[]) {
  const themeLength = quizTheme.length - 1;

  if (currentIndex < themeLength) {
    currentIndex++;

    renderQuizElements(quizTheme);

    if (currentIndex === 4) {
      advanceToNextQuestionButton.classList.add('disabled-style');
      advanceToNextQuestionButton.disabled = true;
    }
  }
}

function checkQuizLabelClass(quizLabel: HTMLLabelElement, classListLabel: string): boolean {
  return quizLabel && quizLabel.classList.contains(classListLabel);
}

function resetQuiz(quizTheme: QuizTheme[]) {
  currentQuizTheme = quizTheme;
  currentIndex = 0;
  renderQuizElements(quizTheme);
}

function handleNextQuestionClick() {
  advanceToNextQuestion(currentQuizTheme);
}

initializeQuizzes();
advanceToNextQuestionButton?.addEventListener('click', handleNextQuestionClick);

console.log('Correto', arrayOfCorrectAnswers.length);
console.log('Errado', arrayOfWrongAnswers.length);

readyButton?.addEventListener('click', () => {
  fade?.classList.remove('show-fade');
  guideLines?.classList.remove('show-guidelines');
});
