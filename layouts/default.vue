<script setup lang="ts">
import Header from '~/components/header/index.vue'
import Footer from '~/components/footer/index.vue'
import Loading from '~/components/loading/dual-spinner/index.vue'

const loading = ref(true)

onMounted(() => {
  console.log('onMounted')

  if (typeof window !== 'undefined') {
    const isDarkMode = localStorage.getItem('isDarkMode') === 'true'
    document.documentElement.setAttribute("data-color-scheme", isDarkMode ? "dark" : "light")
    loading.value = false
  }
})

</script>

<template>
  <Loading v-if="loading" />

  <div v-else>
    <Header />
    <NuxtPage />
    <Footer />
  </div>
</template>