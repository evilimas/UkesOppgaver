import { describe, it, expect, test } from 'vitest'

import { mount } from '@vue/test-utils'
import RandomDeck from '../RandomDeck.vue'


describe('RandomDeck', () => {
  it('renders properly', () => {
    const wrapper = mount(RandomDeck, { props: { text: 'Hello random' } })
    expect(wrapper.text()).toContain('Hello random')
  })
})

describe('RandomDeck', () => {
  it('make deck with all 52 cards', () => {
    const wrapper = mount(RandomDeck)
    const deck = wrapper.vm.makeDeck()
    expect(deck).toEqual([
      { suit: 'Hearts', rank: 'Ace' },
      { suit: 'Hearts', rank: '2' },
      { suit: 'Hearts', rank: '3' },
      { suit: 'Hearts', rank: '4' },
      { suit: 'Hearts', rank: '5' },
      { suit: 'Hearts', rank: '6' },
      { suit: 'Hearts', rank: '7' },
      { suit: 'Hearts', rank: '8' },
      { suit: 'Hearts', rank: '9' },
      { suit: 'Hearts', rank: '10' },
      { suit: 'Hearts', rank: 'Jack' },
      { suit: 'Hearts', rank: 'Queen' },
      { suit: 'Hearts', rank: 'King' },
      { suit: 'Diamonds', rank: 'Ace' },
      { suit: 'Diamonds', rank: '2' },
      { suit: 'Diamonds', rank: '3' },
      { suit: 'Diamonds', rank: '4' },
      { suit: 'Diamonds', rank: '5' },
      { suit: 'Diamonds', rank: '6' },
      { suit: 'Diamonds', rank: '7' },
      { suit: 'Diamonds', rank: '8' },
      { suit: 'Diamonds', rank: '9' },
      { suit: 'Diamonds', rank: '10' },
      { suit: 'Diamonds', rank: 'Jack' },
      { suit: 'Diamonds', rank: 'Queen' },
      { suit: 'Diamonds', rank: 'King' },
      { suit: 'Clubs', rank: 'Ace' },
      { suit: 'Clubs', rank: '2' },
      { suit: 'Clubs', rank: '3' },
      { suit: 'Clubs', rank: '4' },
      { suit: 'Clubs', rank: '5' },
      { suit: 'Clubs', rank: '6' },
      { suit: 'Clubs', rank: '7' },
      { suit: 'Clubs', rank: '8' },
      { suit: 'Clubs', rank: '9' },
      { suit: 'Clubs', rank: '10' },
      { suit: 'Clubs', rank: 'Jack' },
      { suit: 'Clubs', rank: 'Queen' },
      { suit: 'Clubs', rank: 'King' },
      { suit: 'Spades', rank: 'Ace' },
      { suit: 'Spades', rank: '2' },
      { suit: 'Spades', rank: '3' },
      { suit: 'Spades', rank: '4' },
      { suit: 'Spades', rank: '5' },
      { suit: 'Spades', rank: '6' },
      { suit: 'Spades', rank: '7' },
      { suit: 'Spades', rank: '8' },
      { suit: 'Spades', rank: '9' },
      { suit: 'Spades', rank: '10' },
      { suit: 'Spades', rank: 'Jack' },
      { suit: 'Spades', rank: 'Queen' },
      { suit: 'Spades', rank: 'King' },
    ])
  })
})

describe('randomDeck', () => {
  it('makeDeck length === 52', () => {
    const wrapper = mount(RandomDeck)
    const deck = wrapper.vm.makeDeck()
    expect(deck.length).toBe(52)
  })
})
