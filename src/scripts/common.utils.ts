import { IElement } from "./interfaces.js";

export const addClassList = ({ element, className, secondParam }: IElement) =>
  element.classList.add(className, secondParam as string);

export const removeClassList = ({ element, className, secondParam }: IElement) =>
  element.classList.remove(className, secondParam as string);

export const getKeyFromLocalStorage = (key: string): string | null => {
  return localStorage.getItem(key);
};

export const setKeyFromLocalStorage = (key: string, value: string): void => {
  return localStorage.setItem(key, value);
};