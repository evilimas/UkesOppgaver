<script setup lang="ts">
import { ref, type Ref } from 'vue'

type Suit = 'Hearts' | 'Diamonds' | 'Clubs' | 'Spades'
type Rank = 'Ace' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'Jack' | 'Queen' | 'King'
type Card = { suit: Suit; rank: Rank; }
type SeededCard = { seed:number; suit: Suit; rank: Rank;  }

const makeDeck = (): Card[] => {
  const suits: Suit[] = ['Hearts', 'Diamonds', 'Clubs', 'Spades']
  const ranks: Rank[] = [
    'Ace',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    'Jack',
    'Queen',
    'King',
  ]
  return suits.flatMap((suit) => ranks.map((rank) => ({ suit, rank })))
  // return suits.flatMap((suit) => ranks.map((rank) => seeds.map((seed) => ({ suit, rank, seed }))))
}
const generateRandomSequence = (seed: number, length: number): number[] => {
  const result: number[] = []
  let current = seed
  for (let i = 0; i < length; i++) {
    current = (current * 9301 + 49297) % 233280
    result.push(current / 233280)
  }
  return result
}
const makeShuffledDeck = () => {
  let shuffledDeck = []
  const seeds = generateRandomSequence(Math.floor(Math.random() * 1000000), deck.value.length)

  for (let i = 0; i < deck.value.length; i++) {
    const card = deck.value[i]
    const seed = seeds[i]
    shuffledDeck.push({ ...card, seed })
  }

   return shuffledDeck.sort((a, b) => a.seed - b.seed)
}
const deck = ref<Card[]>(makeDeck())
const shuffledDeck = ref<SeededCard[]>(makeShuffledDeck())
const drawnCard = ref<Card | null>(null)




const drawCard = (deck: SeededCard[]): { remainingDeck: SeededCard[]; card?: SeededCard } => {
  if (deck.length === 0) return { remainingDeck: [], card: undefined }
  const [first, ...rest] = deck
  return { remainingDeck: rest, card: first }
}

function Draw() {
  const { remainingDeck, card } = drawCard(shuffledDeck.value)
  shuffledDeck.value = remainingDeck
  if (card) {
    drawnCard.value = card
  }
}
</script>
<template>
  <div>
    <button @click="makeShuffledDeck()">mix kortstokk</button>
    <button @click="Draw" :disabled="deck.length === 0">Trek kort</button>
    <p v-if="drawnCard">Trekker: {{ drawnCard.rank }} av {{ drawnCard.suit }}</p>
    <!-- <ul>
      <li v-for="(card, index) in deck" :key="index">
        {{ card.rank }} av {{ card.suit }}
      </li>
    </ul> -->
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
