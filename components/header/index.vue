<script lang="ts" setup>
import './header.scss'
import { ref } from 'vue'
import { setDarkMode } from '~/utils/utils'
import Menu from './menu/index.vue'
import HamburgerVerticalSvg from '~/components/icons/header/HamburgerSvg.vue'
import SunSvg from '~/components/icons/header/SunSvg.vue'
import MoonSvg from '~/components/icons/header/MoonSvg.vue'
import SliderTopNav from '~/components/sliders/top-nav/TopNav.vue'
import LogInModal from '~/components/modal/log-in/index.vue'
import ButtonsGlowOn from '~/components/buttons/glow-on/index.vue'

const isSliderTopNavOpen = ref<boolean | undefined>(undefined)
const isLoginModalOpen = ref(false)

const isDarkMode = ref(
  typeof localStorage !== 'undefined' &&
  localStorage.getItem('isDarkMode') === 'true'
)

setDarkMode(isDarkMode.value)

const handleTheme = () => {
  isDarkMode.value = !isDarkMode.value
  setDarkMode(isDarkMode.value)
}

const toggleSliderTopNav = () => {
  isSliderTopNavOpen.value = !isSliderTopNavOpen.value
}

const toggleLoginModal = () => {
  isLoginModalOpen.value = !isLoginModalOpen.value
}

</script>

<template>
  <header class="header-container">

    <div class="header">
      <div class="left">
        <NuxtLink to="/" class="logo-container">
          <NuxtPicture src="/images/logos/logo-0.webp" sizes="100vw xs:48px" alt="Mi Password logo" width="48"
            height="48" />
          <span class="text-bold">Mi<span class="text-light">Password</span></span>
        </NuxtLink>
      </div>

      <div class="right">

        <div class="dark-mode-icons">
          <MoonSvg v-if="!isDarkMode" @click="handleTheme" class="icon sun" />
          <SunSvg v-else @click="handleTheme" class="icon moon" />
        </div>

        <Menu :toggleModal="toggleLoginModal" class="desktop-only" />

        <ButtonsGlowOn text="Probar" />

        <HamburgerVerticalSvg @click="toggleSliderTopNav" class="icon hamburger mobile-only " />

        <SliderTopNav
          :toggleTopNav="toggleSliderTopNav"
          :isTopNavOpen="isSliderTopNavOpen"
          :toggleModal="toggleLoginModal" />
      </div>
    </div>

  </header>

  <LogInModal :isModalOpen="isLoginModalOpen" :toggleModal="toggleLoginModal" />

</template>