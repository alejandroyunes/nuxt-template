<script setup lang="ts">
import { ref } from 'vue';
import './titaktoe.scss';

// Create a deep copy for each row
const tiktaktoe = ref(Array.from({ length: 3 }, () => Array(3).fill(null)))

console.log(tiktaktoe)
const currentPlayer = ref('x');
const winner = ref(null);

const handleClick = (rowIndex: number, cellIndex: number) => {
  if (tiktaktoe.value[rowIndex][cellIndex] === null && !winner.value) {
    tiktaktoe.value[rowIndex][cellIndex] = currentPlayer.value;
    if (checkWinner()) {
      winner.value = currentPlayer.value;
    } else {
      currentPlayer.value = currentPlayer.value === 'x' ? 'o' : 'x';
    }
  }
};

const checkWinner = () => {
  // Check rows
  for (let i = 0; i < 3; i++) {
    if (tiktaktoe.value[i][0] && tiktaktoe.value[i][0] === tiktaktoe.value[i][1] && tiktaktoe.value[i][0] === tiktaktoe.value[i][2]) {
      return true;
    }
  }
  // Check columns
  for (let i = 0; i < 3; i++) {
    if (tiktaktoe.value[0][i] && tiktaktoe.value[0][i] === tiktaktoe.value[1][i] && tiktaktoe.value[0][i] === tiktaktoe.value[2][i]) {
      return true;
    }
  }
  // Check diagonals
  if (tiktaktoe.value[0][0] && tiktaktoe.value[0][0] === tiktaktoe.value[1][1] && tiktaktoe.value[0][0] === tiktaktoe.value[2][2]) {
    return true;
  }
  if (tiktaktoe.value[0][2] && tiktaktoe.value[0][2] === tiktaktoe.value[1][1] && tiktaktoe.value[0][2] === tiktaktoe.value[2][0]) {
    return true;
  }
  return false;
};

const resetGame = () => {
  tiktaktoe.value = Array.from({ length: 3 }, () => Array(3).fill(null));
  currentPlayer.value = 'x';
  winner.value = null;
};

function twoSum(nums: number[], target: number): number[] { 

  const result = []
  for(let i = 0; i < nums.length; i++){
    const complement = target - nums[i]
    if(complement in nums){
      result.push(i, nums.indexOf(complement))
    }
  }
  return result
};


</script>

<template>
  <div class="tiktaktoe">
    <div v-for="(row, rowIndex) in tiktaktoe" :key="rowIndex">
      <div class="item" v-for="(cell, cellIndex) in row" :key="cellIndex" @click="handleClick(rowIndex, cellIndex)">
        {{ cell }}
      </div>
    </div>
    <div v-if="winner">
      <p>Winner: {{ winner }}</p>
      <button @click="resetGame">Reset Game</button>
    </div>
  </div>
</template>