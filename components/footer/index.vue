<script setup>
import { ref } from 'vue'
import './footer.scss'

const currentYear = ref(new Date().getFullYear())
</script>

<template>
  <footer class="footer-container">

    <div class="footer-content">

      <div class="footer-section">
        <img src="/images/logos/logo.png" alt="logo" class="logo" />
        <p>
          Asergura tu contraseña y administra tus contraseñas con facilidad.
        </p>
      </div>

      <div class="footer-section">
        <h4>Links rápidos</h4>
        <ul>
          <li>
            <NuxtLink to="/">Inicio</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/">Nosotros</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/">Contácto</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/vault">Vault</NuxtLink>
          </li>
        </ul>
      </div>

      <div class="footer-section">
        <h4>Síguenos</h4>
        <ul class="social-links">
          <li><a href="https://facebook.com" target="_blank">Facebook</a></li>
          <li><a href="https://twitter.com" target="_blank">Twitter</a></li>
          <li><a href="https://linkedin.com" target="_blank">LinkedIn</a></li>
        </ul>
      </div>
    </div>

    <div class="footer-bottom">
      <p>&copy; {{ currentYear }} MiPassword. Todos los derechos reservados.</p>
    </div>
  </footer>
</template>
