<script setup lang="ts">
defineProps<{text:string}> (
)


import { ref, type Ref } from 'vue'
const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'] as const
const ranks = [
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
] as const
type Suit = typeof suits[number]
type Rank = typeof ranks[number]
type Card = { suit: Suit; rank: Rank; }

const makeDeck = (): Card[] => suits.flatMap(suit => ranks.map(rank => ({ suit, rank })))

const generateRandomSequence = (seed: number, length: number): number[] => {
  const result: number[] = []
  let current = seed

  for (let i = 0; i < length; i++) {
    current = (current * 9301 + 49297) % 233280
    result.push(current / 233280)

    // result.push(Math.floor(Math.random() * 51));
  }
  return result
}
// const makeShuffledDeck = (deckOriginal: Card[]) => {
//   let deck = [...deckOriginal];
//   const cardCount = deck.length;
//   let shuffledDeck: Card[] = []

//   while (shuffledDeck.length < cardCount) {
//     // gen random index - from seeds
//     const random = Math.floor(Math.random() * 51);  
//     let cardToRemove = deck[random]
//     deck.slice(random)
//     // add to shuffledDeck
//     shuffledDeck.push(cardToRemove)
//     }
//   return shuffledDeck
// }
const makeShuffledDeck = (deck: Card[]) => {
  
  let shuffledDeck = []
  let seed = Math.floor(Math.random() * 1000000)
  console.log(seed)
  const seeds = generateRandomSequence(seed, deck.length)

  for (let i = 0; i < deck.length; i++) {
    const card = deck[i]
    const seed = seeds[i]
    shuffledDeck.push({ ...card, seed })
  }

  return shuffledDeck.sort((a, b) => a.seed - b.seed)
}
const deck = ref<Card[]>(makeDeck())
const shuffledDeck = ref<Card[]>(makeShuffledDeck(deck.value))
const drawnCard = ref<Card | null>(null)

const drawCard = (deck: Card[]): { remainingDeck: Card[]; card?: Card } => {
  if (shuffledDeck.value.length === 0) return { remainingDeck: [], card: undefined }
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
    <h1>{{ text }}</h1><br>
    <ul>
      <li v-for="(card, index) in deck" :key="index">
        {{ card.rank }} av {{ card.suit }}
      </li>
    </ul>
    <!-- <button @click="makeShuffledDeck()">mix kortstokk</button> -->
    <button @click="Draw" :disabled="deck.length === 0">Trek kort</button>
    <p v-if="drawnCard">Trekker: {{ drawnCard.rank }} av {{ drawnCard.suit }}</p>
    <ul>
      <li v-for="(card, index) in shuffledDeck" :key="index">
        {{ card.rank }} av {{ card.suit }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
