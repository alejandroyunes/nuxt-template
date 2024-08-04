<script lang="ts" setup>
import './vault.scss'
import Sidebar from '~/components/nav/vault-sidebar/index.vue'
import MainVault from '~/components/vault/index.vue'

</script>

<template>
  <section class="dashboard-container">

    <Sidebar />
    <MainVault />

  </section>
</template>
