<script setup lang="ts">
import './account.scss'
import SignInModal from '~/components/modal/log-in/index.vue'

const isSignInModalOpen = ref(false)

const toggleSignInModal = () => {
  isSignInModalOpen.value = !isSignInModalOpen.value
}
</script>

<template>
  <div class="already-has-account">
    <p>¿Ya tienes una cuenta?</p>
    <button class="button" @click="toggleSignInModal">
      <span>Iniciar sesión</span>
    </button>
  </div>

  <SignInModal :isModalOpen="isSignInModalOpen" :toggleModal="toggleSignInModal" />

</template>