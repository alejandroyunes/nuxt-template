<script setup lang="ts">
import './vault-sidebar.scss'
import { ref } from 'vue'
import { useRoute } from 'vue-router'

import SafeSvg from '@/components/icons/nav/SafeSvg.vue'
import FolderSvg from '@/components/icons/nav/SecuritySvg.vue'
import PaymentSvg from '@/components/icons/nav/PaymentSvg.vue'
import AccountSvg from '@/components/icons/nav/AccountSvg.vue' 

const route = useRoute()
const path = ref(route.path)

</script>

<template>
  <div class="vault-sidebar">
    <ul>

      <NuxtLink to="/">
        <li :class="['first', path === '/vault' ? 'active' : '']">
          <div class="item">
            <SafeSvg class="icon" />
            <p class="desktop-only">Vault</p>
          </div class="item">
        </li>
      </NuxtLink>

      <NuxtLink to="/">
        <li :class="[path === '/docs' ? 'active' : '']">
          <div class="item">
            <FolderSvg class="icon" />
            <p class="desktop-only">Security</p>
          </div class="item">
        </li>
      </NuxtLink>

      <NuxtLink to="/">
        <li :class="[path === '/components' ? 'active' : '']">
          <div class="item">
            <PaymentSvg class="icon" />
            <p class="desktop-only">Components</p>
          </div class="item">
        </li>
      </NuxtLink>

      <NuxtLink to="/">
        <li :class="[path === '/apis' ? 'active' : '']">
          <div class="item">
            <AccountSvg class="icon" />
            <p class="desktop-only">Apis</p>
          </div class="item">
        </li>
      </NuxtLink>

    </ul>
  </div>
</template>