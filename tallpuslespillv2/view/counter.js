const getCount = isClick => {
    const count =  count++
  
    if (count === 1) {
      return '1 Trekk'
    }
  
    return `${count} Trekk`
  }
  
  export default (targetElement, { count }) => {
    const newCounter = targetElement.cloneNode(true)
    newCounter.textContent = getCount(count)
    return newCounter
  }