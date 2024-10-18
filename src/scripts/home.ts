import { addClassList, getKeyFromLocalStorage } from './common.utils.js';
import { toggleElementClasses } from './utils.home.js';

const btnOpenQuizThemes = document.querySelector('.js-open-quiz-themes-button') as HTMLButtonElement;
const btnCloseQuizThemes = document.querySelector('.js-close-quiz-themes-button') as HTMLButtonElement;
const imgHoveredQLogo = document.querySelector('.js-quiz-logo-hovered') as HTMLImageElement;
const divHomeFade = document.querySelector('.js-home-page-fade') as HTMLDivElement;
const divQuizThemesContainer = document.querySelector('.home-page__quiz-themes') as HTMLDivElement;
const spanInterrogationSymbol = document.querySelector('.js-interrogation-text') as HTMLElement;
const liQuizLinks: NodeListOf<HTMLLIElement> = document.querySelectorAll('.js-open-quiz-theme');

const elementManipulator = {
  showElements() {
    const shouldAdd = divQuizThemesContainer?.classList.toggle('quiz-themes--active') as boolean;
    toggleElementClasses({
      elements: [imgHoveredQLogo, spanInterrogationSymbol, divHomeFade, divQuizThemesContainer],
      classNames: [
        'quiz-logo-hovered-img--active',
        'interrogation--active',
        'home-page__fade--active',
        'quiz-themes--active',
      ],
      shouldAdd,
    });
  },
  hideElements() {
    toggleElementClasses({
      elements: [imgHoveredQLogo, spanInterrogationSymbol, divHomeFade, divQuizThemesContainer],
      classNames: [
        'quiz-logo-hovered-img--active',
        'interrogation--active',
        'home-page__fade--active',
        'quiz-themes--active',
      ],
    });
  },
};

const getCompletedThemes = getKeyFromLocalStorage('completedThemes');
const completedThemes = getCompletedThemes ? JSON.parse(getCompletedThemes) : [];

const markQuizThemeAsCompleted = (theme: string) => {
  const liThemeLink = document.querySelector(`[data-theme="${theme}"]`) as HTMLLIElement;

  if (liThemeLink) {
    const divThemeCompleted = liThemeLink.querySelector('.is-theme__situation') as HTMLDivElement;
    const imgUncheckedTheme = divThemeCompleted.querySelector('.js-img-theme-unchecked') as HTMLImageElement;
    const imgCheckedTheme = divThemeCompleted.querySelector('.js-img-theme-checked') as HTMLImageElement;

    addClassList({ element: liThemeLink, className: 'list-item--checked' });

    if (divThemeCompleted) {
      addClassList({ element: imgUncheckedTheme, className: 'is-theme__situation__img-unchecked--active' });
      addClassList({ element: imgCheckedTheme, className: 'is-theme__situation__img-checked--active' });
    }
  }
};

const navigateToQuiz = (link: HTMLLIElement) => {
  link.addEventListener('click', () => {
    const theme = link.getAttribute('data-theme');
    const quizUrl: string = 'quiz.html';
    window.location.href = `${quizUrl}?theme=${theme}`;
  });
};

btnOpenQuizThemes.addEventListener('click', elementManipulator.showElements);
btnCloseQuizThemes.addEventListener('click', elementManipulator.hideElements);

liQuizLinks.forEach(navigateToQuiz);
completedThemes.forEach(markQuizThemeAsCompleted);
