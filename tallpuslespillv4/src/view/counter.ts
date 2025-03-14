
const getCount = (count: number) => {
  return count === 1 ? "1 Trekk" : `${count} Trekk`;
};

export default (targetElement: Element, { count }: { count: number }) => {
  const newCounter = targetElement.cloneNode(true);
  newCounter.textContent = getCount(count);
  return newCounter;
};
