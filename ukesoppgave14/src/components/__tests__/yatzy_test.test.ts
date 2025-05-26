
import { yatzyStore } from '@/stores/yatzyStore'
import { expect, vi, it } from 'vitest'
import { beforeEach, describe } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'


describe('Yatzy Store', () => {
    beforeEach(() => {
        setActivePinia(createPinia())
    })

    it('changing active player', () => {
        const store = yatzyStore();
        store.activePlayer = 1
        store.players = 4
        store.gameStarted = true
        store.nextTurn('aces');
        expect(store.players).toBe(4)
        expect(store.activePlayer).toBe(2)
    })
});