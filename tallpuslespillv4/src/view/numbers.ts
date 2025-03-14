const getNumberElement = (number: number) => {
  return `<div id="square">${number ?? ''}</div>`;
};

export default (targetElement: Element, { numbers }: { numbers: number[] }) => {
  const newNumbersList = targetElement.cloneNode(true) as Element;

  const numbersElements = numbers.map(getNumberElement).join('');
  newNumbersList.innerHTML = numbersElements;
  return newNumbersList;
};
