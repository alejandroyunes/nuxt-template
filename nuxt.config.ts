import { defineNuxtConfig } from "nuxt/config"

export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ["~/assets/main.scss"],
  modules: [    
  '@formkit/nuxt',
  '@pinia/nuxt',
  '@nuxtjs/i18n',
  '@nuxtjs/seo',
  '@nuxtjs/i18n',
  '@nuxt/image'
],

i18n: {
  locales: [
    { code: 'es', iso:'es-CO', file: 'es-CO.js'},
    { code: 'en', iso: 'en-US', file: 'en-US.js' },
  ],
  defaultLocale: 'es',
  lazy: true,
  langDir: 'lang/',
},

image: {
  format: ['webp', 'png'],
  screens: {
    xs: 320,
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    xxl: 1536,
    xxxl: 2000,
  },
},
  compatibilityDate: "2024-07-11",
})