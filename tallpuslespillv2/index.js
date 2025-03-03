import GetNumbers from "./GetNumbers.js"
import numberView from './view/numbers.js'

import registry from './registry.js'

registry.add('numbers', numberView)

const state = {
    numbers: GetNumbers()
}


window.requestAnimationFrame(() => {
    const main = document.querySelector('.slidingPuzzle')
    const newMain = registry.renderRoot(main, state)
    main.replaceWith(newMain)
  })
  