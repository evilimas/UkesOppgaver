import { defineStore } from 'pinia';
import { ref } from 'vue';

export const usePlayerStore = defineStore('Players', ()=> {
    const playerNumber = ref<number>(1);

    return {
        playerNumber,
    };
})