import { IElement } from "./interfaces.js";

export const addClassList = ({ element, className, secondParam }: IElement) =>
  element.classList.add(className, secondParam as string);

export const removeClassList = ({ element, className, secondParam }: IElement) =>
  element.classList.remove(className, secondParam as string);