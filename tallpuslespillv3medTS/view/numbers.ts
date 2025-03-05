

const getNumberElement = (number: number, index : number) => {
  
  return `<div onclick="clickedNumber(${index})" id="square">${number ?? ''}</div>`;
};

export default (targetElement: { cloneNode: (arg0: boolean) => any; }  , { numbers  }: any) => {
  const newNumbersList = targetElement.cloneNode(true);
  const numbersElements = numbers.map(getNumberElement).join("");
  newNumbersList.innerHTML = numbersElements;
  return newNumbersList;
};
