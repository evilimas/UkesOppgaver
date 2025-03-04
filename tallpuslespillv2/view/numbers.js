const getNumberElement = (number) => {
  const { numbers } = number;
  console.log(numbers)
  return `<div onclick="clickedNumber(${number})" id="${number}">${number}</div>`;
};
// document.getElementById('number').addEventListener('click' ,clickedNumber)

export default (targetElement, { number }) => {
  const newNumbersList = targetElement.cloneNode(true);
  const numbersElements = number.map(getNumberElement).join("");
  newNumbersList.innerHTML = numbersElements;
  return newNumbersList;
};
