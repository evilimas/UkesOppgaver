import clickedNumber from "../controller.js";
const getNumberElement = (number, index) => {
  
  return `<div onclick="${()=> clickedNumber(index)}" id="${number}">${number ?? ''}</div>`;
};
// document.getElementById(`${number}`).addEventListener('click' ,clickedNumber)

export default (targetElement, { numbers }) => {
  const newNumbersList = targetElement.cloneNode(true);
  const numbersElements = numbers.map(getNumberElement).join("");
  newNumbersList.innerHTML = numbersElements;
  return newNumbersList;
};
