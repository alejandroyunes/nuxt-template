<script setup lang="ts">
import Header from '~/components/header/index.vue'
import Footer from '~/components/footer/index.vue'
import Loading from '~/components/loading/dual-spinner/index.vue'

const loading = ref(true)

onMounted(() => {
  if (typeof window !== 'undefined') {
    const theme = localStorage.getItem('theme')
    
    if(theme === null) {
      localStorage.setItem('theme', 'dark')
      document.documentElement.setAttribute("data-color-scheme", "dark")
      loading.value = false
    } else {
      document.documentElement.setAttribute("data-color-scheme", theme === "dark" ? "dark" : "light")
      loading.value = false
    }
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