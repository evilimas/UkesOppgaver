import clickedNumber from "../controller"

const getNumberElement = number => {
    const {
      number,
    } = number
  
    return `<div onclick="clickedNumber" id="${number}">${number}</div>`

}
    // document.getElementById('number').addEventListener('click' ,clickedNumber)

  
export default (targetElement, { number }) => {
    const newNumbersList = targetElement.cloneNode(true)
    const numbersElements = number
      .map(getNumberElement)
      .join('')
    newNumbersList.innerHTML = numbersElements
    return newNumbersList
}
  