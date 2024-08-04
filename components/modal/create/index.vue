<script lang="ts" setup>
import './create.scss'
import { ref } from 'vue'
import Loading from '~/components/loading/dual-spinner/index.vue'

const { isModalOpen, toggleModal } = defineProps<{
  isModalOpen: boolean
  toggleModal: () => void
}>()

const email = ref('')
const password = ref('')
const confirmPassword = ref('')

const isResponseError = ref(false)
const isRequestError = ref(false)
const isSuccess = ref(false)
const isFormSubmitting = ref(false)
const isLoading = ref(false)

const isForgotPasswordOpen = ref(false)

type CreateFormTypes = {
  email: string
  password: string
  confirmPassword: string
}

const submitHandler = async (createForm: CreateFormTypes) => {
  isLoading.value = true
  await new Promise(resolve => setTimeout(resolve, 3000))  
  isLoading.value = false
  toggleModal()
}

</script>

<template>
  <section v-if="isModalOpen" class="modal-wrapper">
    <div class="create-modal-inner">
      <div @click="toggleModal" class="btn-close">&times;</div>

      <Loading v-if="isLoading" />

      <div class="create-form">

        <h2 class="modal-description"><span>Crea</span> tu cuenta</h2>

        <FormKit v-if="!isForgotPasswordOpen" type="form" id="email-create" #default="{ value, state }"
          @submit="submitHandler">

          <FormKit type="group" name="email">

            <div class="form-group-email">
              <label for="email">Email</label>
              <FormKit type="email" placeholder="joe@email.com" v-model="email" name="email" validation="required|email" />
            </div>

            <div class="form-group-email">
              <label for="password">Contraseña</label>
              <FormKit type="password" name="password" placeholder="Contraseña" v-model="password"
                validation="required|password" />
            </div>

            <div class="form-group-email">
              <label for="confirmPassword">Confirmar contraseña</label>
              <FormKit type="password" name="confirmPassword" placeholder="Confirmar contraseña"
                v-model="confirmPassword" validation="required|password" />
            </div>

            <button :class="['btn-submit', { 'btn-disabled': !state.valid }]" type="submit">
              <span>Siguiente</span>
            </button>

          </FormKit>

        </FormKit>

      </div>

    </div>
  </section>
</template>
