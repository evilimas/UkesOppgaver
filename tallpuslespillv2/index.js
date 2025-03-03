import GetNumbers from "./GetNumbers"


const state = {
    numbers: GetNumbers()
}


window.requestAnimationFrame(() => {
    const main = document.querySelector('.slidingPuzzle')
    const newMain = registry.renderRoot(main, state)
    main.replaceWith(newMain)
  })
  