import { State, numberOrNull } from "../../types";
import { clickedNumber } from "./moveNumber";

const divFromNumber = (number: numberOrNull, index: number) => {
  const div: HTMLDivElement = document.createElement("div");
  div.textContent = `${number ?? ""}`;
  div.addEventListener("click", () => clickedNumber(index));
  return div;
};
export default (targetElement: Element, state: State) => {
  const newNumbersGrid = targetElement.cloneNode(true) as Element;

  newNumbersGrid.innerHTML = "";

  state.numbers.forEach((number, index) => {
    newNumbersGrid.appendChild(divFromNumber(number, index));
  });

  return newNumbersGrid;
};

// export default (targetElement: Element, { numbers }: { numbers: number[] }) => {
//   const newNumbersList = targetElement.cloneNode(true) as Element;
//   const numbersElements = numbers.map(divFromNumber).join('');
//   newNumbersList.innerHTML = numbersElements;
//   return newNumbersList;
// };
