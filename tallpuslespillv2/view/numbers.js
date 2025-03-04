const getNumberElement = (number) => {
  const { 
    numberText,
   } = number;
  return `<div onclick="clickedNumber(${numberText})" id="${numberText}">${numberText}</div>`;
};
// document.getElementById('number').addEventListener('click' ,clickedNumber)

export default (targetElement, { numbers }) => {
  const newNumbersList = targetElement.cloneNode(true);
  const numbersElements = numbers.map(getNumberElement).join("");
  newNumbersList.innerHTML = numbersElements;
  return newNumbersList;
};
