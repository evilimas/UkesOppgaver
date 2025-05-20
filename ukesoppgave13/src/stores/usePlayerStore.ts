import { defineStore } from 'pinia';
import { ref } from 'vue';

const usePlayerStore = defineStore('Players', ()=> {
    const playerName = ref<string>('');
    const playerNumber = ref<number>(0);
    const players = ref<{ playerName: string; playerNumber: number }[]>([]);
})