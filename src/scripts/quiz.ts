import { IQuizThemeProps, IScoreResultProps } from './interfaces.js';
import { EQuizThemeName, EScoreMessage } from './enum.js';
import {
  angularTheme,
  backendTheme,
  cssTheme,
  frontendTheme,
  htmlTheme,
  javaScriptTheme,
  javaTheme,
  nodeJsTheme,
  pythonTheme,
  reactTheme,
} from './questions.js';
import { evaluateResponse, scorePercentual } from './utils.quiz.js';

import { addClassList, removeClassList } from './common.utils.js';

const ulResponseOptionsContainer = document.querySelector('.js-response-options-container') as HTMLUListElement;
const btnNextQuestion = document.querySelector('.js-next-question-button') as HTMLButtonElement;
const btnQuizScore = document.querySelector('.js-open-score-button') as HTMLButtonElement;
const btnCloseQuizScore = document.querySelector('.js-close-score-button') as HTMLButtonElement;
const divQuizFade = document.querySelector('.js-quiz-fade') as HTMLDivElement;
const divResponseDetailsContainer = document.querySelector('.js-details-container') as HTMLDivElement;
const aBackHomeLink = document.querySelector('.js-back-home-link') as HTMLLinkElement;

let currentQuizTheme: IQuizThemeProps[] = [];
let currentQuestionIndex = 0;

const initQuizTheme = () => {
  setQuizThemeAndRender();
  renderQuizContent(currentQuizTheme);
};

const renderQuizContent = (quizTheme: IQuizThemeProps[]) => {
  renderQuestions(quizTheme);
  renderQuizGuidelines(quizTheme);
  renderQuizResult(quizTheme);
};

const renderQuestions = (quizTheme: IQuizThemeProps[]) => {
  resetQuizQuestion();

  const spanQuizQuestionNumber = document.querySelector('.js-question-number') as HTMLSpanElement;
  const h2QuizQuuestionText = document.querySelector('.js-question-text') as HTMLHeadingElement;

  const currentQuestion = quizTheme[currentQuestionIndex];
  const responseOptions = currentQuestion.responseOptions;
  const correctResponse = currentQuestion.correctResponse;

  spanQuizQuestionNumber.textContent = quizTheme[currentQuestionIndex].questionNumber;
  h2QuizQuuestionText.textContent = quizTheme[currentQuestionIndex].question;

  responseOptions.forEach(optionText => {
    const li = createLiElement(optionText, correctResponse);
    ulResponseOptionsContainer.appendChild(li);
  });
};

const renderQuizGuidelines = (quizTheme: IQuizThemeProps[]) => {
  const spanQuestionsQuantity = document.querySelector('.js-questions-quantity') as HTMLSpanElement;
  const spanAlternativesQuantity = document.querySelector('.js-alternatives-quantity') as HTMLSpanElement;

  const currentQuestion = quizTheme[currentQuestionIndex];
  const currentThemeLength = quizTheme.length;

  spanQuestionsQuantity.textContent = String(currentThemeLength);
  spanAlternativesQuantity.textContent = String(currentQuestion.responseOptions.length).padStart(2, '0');
};

const renderQuizResult = (quizTheme: IQuizThemeProps[]) => {
  const spanScorePercentualElement = document.querySelector('.js-score-percentual') as HTMLSpanElement;
  const spanChooseThemeElement = document.querySelector('.js-score-choose-theme') as HTMLSpanElement;
  const spanCorrectResponsesQuantity = document.querySelector('.js-score-total-correct-response') as HTMLSpanElement;
  const spanTotalQuestionsElement = document.querySelector('.js-score-total-questions') as HTMLSpanElement;

  const currentQuestion = quizTheme[currentQuestionIndex];
  const currentThemeLength = quizTheme.length;

  spanChooseThemeElement.textContent = currentQuestion.themeName ?? null;
  spanScorePercentualElement.textContent = scorePercentual(quizTheme, scoreResult);
  spanCorrectResponsesQuantity.textContent = String(scoreResult.score);
  spanTotalQuestionsElement.textContent = String(currentThemeLength).padStart(2, '0');
};

const renderResponseDetailsContainer = (selectedOption: HTMLLIElement) => {
  const h2QuestionResult = document.querySelector('.js-question-details-text') as HTMLHeadingElement;
  const spanUserResponse = document.querySelector('.js-user-response') as HTMLSpanElement;
  const spanCorrectResponse = document.querySelector('.js-correct-response') as HTMLSpanElement;
  const pExplanationResult = document.querySelector('.js-response-explanation') as HTMLParagraphElement;

  const currentQuestion = currentQuizTheme[currentQuestionIndex];
  const correctResponseText = currentQuestion.correctResponse;
  const userResponseText = selectedOption.textContent as string;

  h2QuestionResult.innerHTML = `Pergunta: <br>${currentQuestion.question}`;
  spanUserResponse.textContent = userResponseText;
  spanCorrectResponse.textContent = correctResponseText;
  pExplanationResult.textContent = currentQuestion.explanation;
};

const saveCompletedTheme = (theme: string | null) => {
  if (!theme) return;
  const storedThemes = localStorage.getItem('completedThemes');
  const completedThemes = storedThemes ? JSON.parse(storedThemes) : [];
  if (!completedThemes.includes(theme)) {
    completedThemes.push(theme);
    localStorage.setItem('completedThemes', JSON.stringify(completedThemes));
  }
};

const handleResponseSelection = (
  liOptionResponses: NodeListOf<HTMLLIElement>,
  selectedResponse: HTMLLIElement,
  correctResponseText: string,
) => {
  const divGuidelinesContainer = document.querySelector('.js-guidelines-container') as HTMLDivElement;

  liOptionResponses.forEach(unselectedOption => {
    if (unselectedOption !== selectedResponse) unselectedOption.style.pointerEvents = 'none';
    selectedResponse.style.pointerEvents = 'none';
  });

  evaluateResponse({
    li: selectedResponse,
    userResponseText: selectedResponse.textContent,
    correctResponseText,
    scoreResult,
  });

  if (currentQuestionIndex === currentQuizTheme.length - 1) {
    btnNextQuestion.disabled = true;
    setTimeout(() => {
      addClassList({ element: btnQuizScore, className: 'result-button--active' });
      addClassList({ element: divQuizFade, className: 'fade-score--active' });
      saveCompletedTheme(theme);
    }, 1200);
  } else {
    btnNextQuestion.disabled = false;
  }
  addClassList({ element: divResponseDetailsContainer, className: 'details-container--active' });
  addClassList({ element: divGuidelinesContainer, className: 'guidelines-container--active' });
};

export const getClickFromUser = (selectedResponse: HTMLLIElement, correctResponseText: string) => {
  const liOptionsResponse: NodeListOf<HTMLLIElement> = document.querySelectorAll('.js-response-option');

  renderResponseDetailsContainer(selectedResponse);
  handleResponseSelection(liOptionsResponse, selectedResponse, correctResponseText);
};

const manipulateScoreElements = () => {
  const divScoreResultContainer = document.querySelector('.js-score-container') as HTMLDivElement;
  const spanBackHomeToolkit = document.querySelector('.js-back-home-toolkit') as HTMLSpanElement;

  return {
    showScoreResult() {
      addClassList({ element: divScoreResultContainer, className: 'score-container--active' });
      removeClassList({ element: btnQuizScore, className: 'result-button--active' });
    },
    hideScoreResult() {
      removeClassList({ element: divScoreResultContainer, className: 'score-container--active' });
      removeClassList({ element: divQuizFade, className: 'fade-score--active' });
      addClassList({ element: spanBackHomeToolkit, className: 'back-home-link_toolkit--active' });
      addClassList({ element: aBackHomeLink, className: 'back-home-link--active' });
    },
  };
};
const { showScoreResult, hideScoreResult } = manipulateScoreElements();

const resetQuizQuestion = () => {
  ulResponseOptionsContainer.innerHTML = '';
  btnNextQuestion.disabled = true;
  removeClassList({ element: divResponseDetailsContainer, className: 'details-container--active' });
};

const advanceToNextQuestion = () => {
  const quizThemeLength = currentQuizTheme.length - 1;

  if (currentQuestionIndex < quizThemeLength) {
    currentQuestionIndex++;
    renderQuizContent(currentQuizTheme);
  }
};

const getThemeFromURL = () => {
  const params = new URLSearchParams(window.location.search);
  return params.get('theme');
};

const theme = getThemeFromURL();

const setQuizThemeAndRender = () => {
  let themeTitle = '';

  switch (theme) {
    case 'javascript':
      currentQuizTheme = javaScriptTheme;
      themeTitle = EQuizThemeName.JAVASCRIPT;
      break;
    case 'html':
      currentQuizTheme = htmlTheme;
      themeTitle = EQuizThemeName.HTML;
      break;
    case 'css':
      currentQuizTheme = cssTheme;
      themeTitle = EQuizThemeName.CSS;
      break;
    case 'reactjs':
      currentQuizTheme = reactTheme;
      themeTitle = EQuizThemeName.REACT_JS;
      break;
    case 'angular':
      currentQuizTheme = angularTheme;
      themeTitle = EQuizThemeName.ANGULAR;
      break;
    case 'nodejs':
      currentQuizTheme = nodeJsTheme;
      themeTitle = EQuizThemeName.NODE_JS;
      break;
    case 'frontend':
      currentQuizTheme = frontendTheme;
      themeTitle = EQuizThemeName.FRONT_END;
      break;
    case 'java':
      currentQuizTheme = javaTheme;
      themeTitle = EQuizThemeName.JAVA;
      break;
    case 'python':
      currentQuizTheme = pythonTheme;
      themeTitle = EQuizThemeName.PYTHON;
      break;
    case 'backend':
      currentQuizTheme = backendTheme;
      themeTitle = EQuizThemeName.BACK_END;
      break;
    default:
      throw new Error('Não existe esse tema');
  }
  document.title = themeTitle;
};

const createLiElement = (selectedResponseText: string, correctResponseText: string) => {
  const li = document.createElement('li');
  li.className = 'js-response-option';
  li.textContent = selectedResponseText;

  li.addEventListener('click', () => getClickFromUser(li, correctResponseText));

  return li;
};

const scoreResult: IScoreResultProps = {
  score: 0,
  conditions: score => {
    const h2ScoreText = document.querySelector('.js-score-text') as HTMLHeadingElement;
    switch (true) {
      case score < 3:
        h2ScoreText.textContent = EScoreMessage.VERY_LOW_GRADE;
        break;
      case score < 6:
        h2ScoreText.textContent = EScoreMessage.LOW_GRADE;
        break;
      case score < 9:
        h2ScoreText.textContent = EScoreMessage.GOOD_GRADE;
        break;
      default:
        h2ScoreText.textContent = EScoreMessage.PERFECT_GRADE;
        break;
    }
    return ++scoreResult.score;
  },
};

btnNextQuestion.addEventListener('click', advanceToNextQuestion);
btnQuizScore.addEventListener('click', showScoreResult);
btnCloseQuizScore.addEventListener('click', hideScoreResult);
aBackHomeLink.addEventListener('click', () => saveCompletedTheme(theme));

initQuizTheme();
