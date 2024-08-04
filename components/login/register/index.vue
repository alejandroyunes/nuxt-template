<script setup lang="ts">
import './register.scss'

import GoogleSvg from '~/components/icons/login/join/GoogleSvg.vue'
import AppleSvg from '~/components/icons/login/join/AppleSvg.vue'
</script>


<template>
  <div class="register">

    <button class="button">
      <GoogleSvg />
      <span>Regístrese con Google</span>
    </button>

    <button class="button">
      <AppleSvg class="icon" />
      <span>Regístrese con Apple</span>
    </button>
  </div>
</template>
