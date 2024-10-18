export interface IToggleElementClasses {
  elements: HTMLElement[];
  classNames: string[];
  shouldAdd?: boolean;
}

export interface IQuizThemeProps {
  themeName?: string;
  questionNumber: string;
  question: string;
  responseOptions: string[];
  correctResponse: string;
  explanation: string;
}

export interface IEvaluateResponseProps {
  li: HTMLLIElement;
  userResponseText: string | null;
  correctResponseText: string;
  scoreResult: IScoreResultProps;
}

export interface IScoreResultProps {
  conditions: (score: number) => number | null;
  score: number;
}

export interface IElement {
  element: HTMLElement;
  className: string;
  secondParam?: string; 
}
