<script setup>
import './accordion.scss'
import ChevronDownSvg from '~/components/icons/arrows/chevron/ChevronDownSvg.vue'
import ChevronUpSvg from '~/components/icons/arrows/chevron/ChevronUpSvg.vue'
</script>

<template>
  <section class="accordion-container">
    <details>
      <summary>

        <div class='summary-title'>
          <h2>Tu Seguridad Digital Simplificada</h2>
        </div>

        <div class='summary-chevron-up'>
          <ChevronUpSvg />
        </div>
      </summary>

      <div class='summary-content'>
        <p>Recuerda solo una contraseña y nosotros nos encargamos del resto. Con nuestro servicio, disfruta de acceso
          sin problemas en todos tus dispositivos. ¡Regístrate hoy y olvídate de la gestión de múltiples contraseñas!
        </p>
      </div>

      <div class='summary-chevron-down'>
        <ChevronDownSvg />
      </div>
    </details>

    <details>
      <summary>

        <div class='summary-title'>
          <h2>Protección Total con Cifrado de Grado Militar</h2>
        </div>

        <div class='summary-chevron-up'>
          <ChevronUpSvg />
        </div>
      </summary>

      <div class='summary-content'>
        <p>Garantiza la máxima seguridad de tu información con nuestro cifrado de grado militar. Nuestra solución
          asegura
          que tus datos estén protegidos en todo momento, proporcionándote tranquilidad y confianza en tu seguridad
          digital.</p>
      </div>

      <div class='summary-chevron-down'>
        <ChevronDownSvg />
      </div>
    </details>

    <details>
      <summary>

        <div class='summary-title'>
          <h2>Gestión de Contraseñas para Familias y Empresas</h2>
        </div>

        <div class='summary-chevron-up'>
          <ChevronUpSvg />
        </div>
      </summary>

      <div class='summary-content'>
        <p>Desde usuarios familiares hasta grandes empresas, nuestro sistema de gestión de contraseñas es ideal para
          todos. Realizamos una evaluación detallada de tus necesidades específicas para ofrecerte una solución
          personalizada y segura.
        </p>

      </div>

      <div class='summary-chevron-down'>
        <ChevronDownSvg />
      </div>
    </details>

    <details>
      <summary>

        <div class='summary-title'>
          <h2>Solución Integral para Desarrolladores y Estudiantes</h2>
        </div>

        <div class='summary-chevron-up'>
          <ChevronUpSvg />
        </div>
      </summary>

      <div class='summary-content'>
        <p>Desarrolladores y estudiantes pueden beneficiarse enormemente de nuestra propuesta integral. Diseñamos
          sistemas personalizados basados en estudios de viabilidad y evaluaciones detalladas, asegurando un ahorro de
          energía proyectado y análisis financiero completo.
        </p>
      </div>

      <div class='summary-chevron-down'>
        <ChevronDownSvg />
      </div>
    </details>

  </section>
</template>