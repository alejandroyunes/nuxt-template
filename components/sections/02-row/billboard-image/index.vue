<script lang="ts" setup>
import './billboard.scss'
import ButtonsGlowOn from '~/components/buttons/glow-on/index.vue'
import SlidingText from '~/components/sliding-text/index.vue'
</script>

<template>
  <section class="billboard-image-container">

    <div class="billboard">
      <SlidingText class="title" />

      <NuxtLink to="/join">
        <ButtonsGlowOn class="btn" text="¡Regístrate hoy!" :active="true" />
      </NuxtLink>

    </div>

    <NuxtPicture
      src="/images/sections/02-row/billboard/billboard.jpeg"
      alt="Man looking at phone and tablet"
      format="jpeg"
      sizes="100vw xs:300px sm:500px"
      width="300"
      height="260"
    />


  </section>
</template>
