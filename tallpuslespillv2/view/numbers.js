const getNumberElement = number => {
    const {
      text,
      
    } = number
  
    return `<div class="grid">${number}</div>`
 
    
}
    
  
  
  export default (targetElement, { todos }) => {
    const newTodoList = targetElement.cloneNode(true)
    const todosElements = todos
      .map(getTodoElement)
      .join('')
    newTodoList.innerHTML = todosElements
    return newTodoList
}
  