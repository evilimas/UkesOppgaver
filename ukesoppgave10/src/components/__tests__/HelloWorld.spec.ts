import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import RandomDeck from '../RandomDeck.vue'

describe('RandomDeck', () => {
  it('renders properly', () => {
    const wrapper = mount(RandomDeck, { props: { text: 'Hello random' } })
    expect(wrapper.text()).toContain('Hello random')
  })
})
