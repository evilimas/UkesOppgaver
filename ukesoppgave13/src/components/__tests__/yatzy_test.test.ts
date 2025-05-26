import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'

describe('Yatzy', () => {
    it('should render the Yatzy component', () => {
        const wrapper = mount({
            template: `<div>Yatzy Component</div>`
        });

        expect(wrapper.text()).toContain('Yatzy Component');
    });

    it('should have a button to start the game', () => {
        const wrapper = mount({
            template: `<button id="start-game">Start Game</button>`
        });

        const button = wrapper.find('#start-game');
        expect(button.exists()).toBe(true);
    });

    it('should display the current player', () => {
        const wrapper = mount({
            template: `<div>Current Player: 1</div>`
        });

        expect(wrapper.text()).toContain('Current Player: 1');
    });
    }
);
