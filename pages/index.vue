<script setup lang="ts">
import BillboardImage from '~/components/sections/02-row/billboard-image/index.vue'
import TitleSubtitle from '~/components/sections/01-row/title-subtitle/TitleSubtitle.vue'
import CardDescription from '~/components/sections/04-row/card-description/CardDescription.vue'
import Accordion from '~/components/sections/01-row/accordion/index.vue'

useSeoMeta({
  title: 'Recuerda Solo Una Contraseña. ¡Regístrate hoy y olvídate de la gestión de múltiples contraseñas!',
  ogTitle: 'Recuerda Solo Una Contraseña. ¡Regístrate hoy y olvídate de la gestión de múltiples contraseñas!',
  description: 'Garantiza la máxima seguridad de tu información con nuestro cifrado de grado militar.',
  ogDescription: 'Garantiza la máxima seguridad de tu información con nuestro cifrado de grado militar.',
  ogImage: '/images/sections/02-row/title-headline/image-one.webp',
  ogLocale: 'en_Es',
  twitterTitle: 'Recuerda Solo Una Contraseña. ¡Regístrate hoy y olvídate de la gestión de múltiples contraseñas!',
  twitterCard: 'summary_large_image',
  twitterDescription: 'Garantiza la máxima seguridad de tu información con nuestro cifrado de grado militar.',
  twitterLabel1: 'Time to read',
  twitterData1: '2 minutes',
})

</script>

<template>
  <BillboardImage />
  <TitleSubtitle title="Nuestros Planes"
    subtitle="Garantiza la máxima seguridad de tu información con nuestro cifrado de grado militar." />
  <CardDescription />
  <TitleSubtitle title="Tranquilidad y confianza en tu seguridad digital."
    subtitle="Nuestra solución asegura que tus datos estén protegidos en todo momento." />
  <Accordion />
</template>
