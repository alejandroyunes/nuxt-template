<script lang="ts" setup>
import './menu.scss'

const { toggleModal } = defineProps<{
  toggleModal?: () => void
}>()

</script>

<template>
  <nav class="desktop-menu">
    <ul class="menu-list">
      <li class="menu-item" @click="toggleModal">
        <span class="menu-span">Entrar</span>
      </li>
      <li class="menu-item">
        <NuxtLink to="/vault" class="link">
          <span class="menu-span">Vault</span>
        </NuxtLink>
      </li>
    </ul>
  </nav>

</template>
