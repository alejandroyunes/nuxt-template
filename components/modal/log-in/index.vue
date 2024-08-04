<script lang="ts" setup>
import './log-in.scss'
import { ref } from 'vue'
import Option from '~/components/login/option/index.vue'
import Loading from '~/components/loading/dual-spinner/index.vue'

const router = useRouter()

const { isModalOpen, toggleModal } = defineProps<{
  isModalOpen: boolean
  toggleModal: () => void
}>()

const email = ref('')
const password = ref('')

const isResponseError = ref(false)
const isRequestError = ref(false)
const isSuccess = ref(false)
const isFormSubmitting = ref(false)
const isLoading = ref(false)

const isForgotPasswordOpen = ref(false)

const toggleForgotPassword = () => {
  isForgotPasswordOpen.value = !isForgotPasswordOpen.value
}

type LoginModalProps = {
  email: string
  password: string
}

type ForgotModalProps = {
  email: string
}

const submitHandler = async (loginModal: LoginModalProps) => {
  isLoading.value = true
  console.log(loginModal)
  await new Promise(resolve => setTimeout(resolve, 3000))
  isLoading.value = false
  toggleModal()
  router.push('/vault') 
}

const submitForgotHandler = async (forgotModal: ForgotModalProps) => {
  isLoading.value = true
  console.log(forgotModal)
  await new Promise(resolve => setTimeout(resolve, 3000))
  isLoading.value = false
  toggleModal()
}

</script>

<template>

  <section v-if="isModalOpen" class="modal-wrapper">

    <div class="log-in-modal-inner">
      <div @click="toggleModal" class="btn-close">&times;</div>

      <Loading v-if="isLoading" />

      <div class="log-in-form">

        <h2 class="modal-description" v-if="!isForgotPasswordOpen"><span>Log</span>in</h2>
        <h2 class="modal-description" v-else><span>Encuentra </span>tu cuenta</h2>


        <FormKit v-if="!isForgotPasswordOpen" type="form" id="email-log-in" #default="{ value, state }"
          @submit="submitHandler">

          <FormKit type="group" name="email">

            <div class="form-group-email">
              <label for="email">Email</label>
              <FormKit type="email" placeholder="email" v-model="email" name="email" validation="required|email" />
            </div>

            <div class="form-group-email">
              <label for="password">Contraseña</label>
              <FormKit type="password" name="password" placeholder="Contraseña" v-model="password"
                validation="required|password" />
            </div>

            <button :class="['btn-submit', { 'btn-disabled': !state.valid }]" type="submit">
              <span>Siguiente</span>
            </button>

          </FormKit>

        </FormKit>

        <p v-if="isForgotPasswordOpen" class="forgot-password-description">
          Ingrese el correo electrónico asociado con su cuenta para cambiar su contraseña.
        </p>

        <FormKit v-if="isForgotPasswordOpen" type="form" id="forgot-password" #default="{ value, state }"
          @submit="submitForgotHandler">

          <FormKit type="group" name="email">

            <div class="form-group-email">
              <label for="email">Email</label>
              <FormKit type="email" placeholder="email" v-model="email" name="email" validation="required|email" />
            </div>

            <button :class="['btn-submit', { 'btn-disabled': !state.valid }]" type="submit">
              <span>Siguiente</span>
            </button>

          </FormKit>

        </FormKit>

        <Option />

        <button class="btn-forgot" @click="toggleForgotPassword" v-if="!isForgotPasswordOpen">
          <span>Has olvidado tu contraseña</span>
        </button>

        <button class="btn-forgot" @click="toggleForgotPassword" v-else>
          <span>Volver</span>
        </button>

      </div>

    </div>
  </section>


</template>
