<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()


const numbers = ref<(number | null)[]>([3, 5, 6, 8, 1, null, 2, 4, 7])

const count = ref<number>(0)


function clickedNumber(index : number) : void {
    count.value++;
    let blankIndex = findBlankIndex(index);
    if (blankIndex == null) return;
    numbers.value[blankIndex] = numbers.value[index];
    numbers.value[index] = null;
   
    
    
}

function findBlankIndex(index : number) : number | null {
    for (let delta of [-3, -1, 1, 3]) {
        let newIndex = index + delta;
        if (newIndex < 0 || newIndex >= numbers.value.length) continue;
        if (numbers.value[newIndex] == null) {
            return newIndex;
        }
    }
    return null;
}


</script>

<template>
  <div>
    <h1>{{ msg }}</h1>
    <div v-for="(number, i) in numbers" :key="i" :class="i % 3 == 0 ? 'flis førstPåLinje' : 'flis'" @click="clickedNumber(i);" >{{number}}
    </div>
    <div >Antall trekk: {{count}}</div>
  </div>


</template>

<style scoped>
p.feilmelding {
            color: red;
        }

        div.trekkteller {
            clear: left;
        }

        div.flis {
            color: blue;
            background: lightblue;
            padding: 18px;
            margin: 10px;
            border: solid green 7px;
            width: 30px;
            height: 30px;
            float: left;
        }

        div.førstPåLinje {
            clear: left;
        }
</style>
