import { describe, it, expect, test } from 'vitest'

import { mount } from '@vue/test-utils'
import RandomDeck from '../RandomDeck.vue'
import makeDeck  from '../RandomDeck.vue'

describe('RandomDeck', () => {
  it('renders properly', () => {
    const wrapper = mount(RandomDeck, { props: { text: 'Hello random' } })
    expect(wrapper.text()).toContain('Hello random')
  })
})

describe('RandomDeck', ()=> {
  it('Make deck', () => {
    const deck = new makeDeck()
    expect(JSON.stringify(deck))
  })
})