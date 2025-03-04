const getCount = count => {
    const isClicked = () => count++
  
    if (isClicked === 1) {
      return '1 Trekk'
    }
  
    return `${count} Trekk`
  }
  
  export default (targetElement, { count }) => {
    const newCounter = targetElement.cloneNode(true)
    newCounter.textContent = getCount(count)
    return newCounter
  }