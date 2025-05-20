import { defineStore } from 'pinia';
import { ref } from 'vue';

export const usePlayerStore = defineStore('Players', ()=> {
    const playerName = ref<string>('');
    const playerNumber = ref<number>(0);
    const players = ref<{ playerName: string; playerNumber: number }[]>([]);

    const addPlayer = (name: string, number: number) => {
        players.value.push({ playerName: name, playerNumber: number });
    };
    return {
        playerName,
        playerNumber,
        players,
        addPlayer,
    };
})