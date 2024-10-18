import { addClassList } from './common.utils.js';
import { IEvaluateResponseProps, IQuizThemeProps, IScoreResultProps } from './interfaces.js';

export const evaluateResponse = ({
  li,
  userResponseText,
  correctResponseText,
  scoreResult,
}: IEvaluateResponseProps) => {
  if (userResponseText === correctResponseText) {
    addClassList({ element: li, className: 'option--is-correct' });
    addClassList({ element: li, className: 'animate__animated', secondParam: 'animate__flash' });
    scoreResult.conditions(scoreResult.score);
  } else {
    addClassList({ element: li, className: 'option--is-wrong' });
    addClassList({ element: li, className: 'animate__animated', secondParam: 'animate__shakeX' });
  }
};

export const scorePercentual = (quizTheme: IQuizThemeProps[], scoreResult: IScoreResultProps) => {
  const totalQuestions = quizTheme.length;
  return `${(scoreResult.score / totalQuestions) * 100}`;
};
