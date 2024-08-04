<script lang="ts" setup>
import './top-nav.scss'
import ExitSvg from '@/components/icons/ExitSvg.vue'

const router = useRouter()

const { toggleTopNav, isTopNavOpen, toggleModal } = defineProps<{
  toggleTopNav: () => void
  isTopNavOpen: boolean | undefined
  toggleModal: () => void
}>()

const handleClick = (url: string) => {
  router.push(url)
  toggleTopNav()
}

const handleModal = () => {
  toggleTopNav()
  toggleModal()
}

</script>

<template>

  <div
    :class="['top-nav-container', isTopNavOpen ? 'top-slide-in' : '', isTopNavOpen === false ? 'top-slide-out' : '']">

    <div class="top-nav-header">
      <p class="title">Mi <span class="title-strong">Password</span></p>

      <div @click="toggleTopNav" class="animation-exit">
        <ExitSvg class=" exit-icon" />
      </div>
    </div>

    <div class="top-nav-content">

      <nav>
        <ul class="list">
          <li class="item" @click="handleModal">
            Entrar
          </li>
          <li class="item" @click="handleClick('about')">
            About
          </li>
          <li class="item" @click="handleClick('services')">
            Services
          </li>
          <li class="item" @click="handleClick('contact')">
            Contact
          </li>
        </ul>
      </nav>

      <div class="contact">

        <div class="social-list">
          <span class="svg">
          </span>
        </div>

        <p class="contact-tel"><a href="tel:+41787746337">+57 304 665 9898</a></p>
        <p class="contact-email">
          <a href="mailto:alejandroyunes@outlook.com">alejandroyunes@outlook.com</a>
        </p>
      </div>

    </div>

  </div>

  <div v-if="isTopNavOpen" @click="toggleTopNav" class="content-bg" />
</template>