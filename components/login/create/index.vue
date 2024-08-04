<script setup lang="ts">
import './create.scss'
import CreateModal from '~/components/modal/create/index.vue'

const isCreateModalOpen = ref(false)

const toggleCreateModal = () => {
  isCreateModalOpen.value = !isCreateModalOpen.value
}

</script>

<template>
  <div class="email">
    <button class="button" @click="toggleCreateModal">
      <span>Crear una cuenta</span>
    </button>

  </div>

  <div class="terms-conditions">
    <p>Al registrarse, usted acepta los <span>términos de servicio</span> y <span>política de privacidad</span>,
      incluido el uso de <span>cookies</span>.
    </p>
  </div>

  <CreateModal :isModalOpen="isCreateModalOpen" :toggleModal="toggleCreateModal" />

</template>