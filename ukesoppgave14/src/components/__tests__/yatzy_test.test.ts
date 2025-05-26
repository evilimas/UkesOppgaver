import { mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import { yatzyStore } from '@/stores/yatzyStore'
import { expect, vi, it } from 'vitest'
import { beforeEach, describe } from 'node:test'
import { setActivePinia, createPinia } from 'pinia'


describe('Yatzy Store', () => {
    beforeEach(() => {
        setActivePinia(createPinia())
    })

    it('changing active player', () => {
        const store = yatzyStore();
        store.activePlayer = 2
        store.players = 2
        store.gameStarted = true

        expect(store.players).toBe(2)

    })
});