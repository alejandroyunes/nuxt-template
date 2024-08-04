<script setup lang="ts">
import './glow-on.scss'

type GlowOnProps = {
  text: string
  active?: boolean
}

const { text } = defineProps<GlowOnProps>()

</script>

<template>
  <button :class="['glow-on', active ? 'active' : '']" type="button" @click="$router.push('/join')">
    <span>{{ text }}</span>
  </button>
</template>