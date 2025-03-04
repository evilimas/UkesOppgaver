const getCount = count => {
    const isClicked = () => click++
  
    if (click === 1) {
      return '1 Trekk'
    }
  
    return `${click} Items left`
  }
  
  export default (targetElement, { count }) => {
    const newCounter = targetElement.cloneNode(true)
    newCounter.textContent = getCount(todos)
    return newCounter
  }