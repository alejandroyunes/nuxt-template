<script setup>
import { ref, onMounted } from 'vue'
import './sliding-text.scss'

const words = [
  'Contraseña.',
  // 'Nosotros nos Encargamos del resto...',
]
const part = ref('')
const i = ref(0)
const offset = ref(0)
const len = ref(words.length)
const forwards = ref(true)
const skip_count = ref(0)
const skip_delay = 55
const speed = 50

function wordFlick() {
  setInterval(() => {
    if (forwards.value) {
      if (offset.value >= words[i.value].length) {
        skip_count.value++
        if (skip_count.value === skip_delay) {
          forwards.value = false
          skip_count.value = 0
        }
      }
    } else {
      if (offset.value === 0) {
        forwards.value = true
        i.value++
        offset.value = 0
        if (i.value >= len.value) {
          i.value = 0
        }
      }
    }
    part.value = words[i.value].substring(0, offset.value)
    if (skip_count.value === 0) {
      if (forwards.value) {
        offset.value++
      } else {
        offset.value--
      }
    }
  }, speed)
}

onMounted(() => {
  wordFlick()
})
</script>

<template>
  <div class="word">
    <h1 class="title">Recuerda solo una</h1>
    <h1 class="slogan">{{ part }}</h1>
    
    <h1 class="subtitle">Nosotros nos Encargamos del resto...</h1>
  </div>
</template>