import { IToggleElementClasses } from "./interfaces.js";

export const toggleElementClasses = ({ elements, classNames, shouldAdd }: IToggleElementClasses) => {
  elements.forEach(element => {
    classNames.forEach(className => {
      shouldAdd ? element.classList.add(className) : element.classList.remove(className);
    });
  });
};