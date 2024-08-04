<script setup lang="ts">
import './card-description.scss'

import HouseSvg from '@/components/icons/title-headline/HouseSvg.vue'
import BusinessSvg from '@/components/icons/title-headline/BusinessSvg.vue'
import DeveloperSvg from '@/components/icons/title-headline/DeveloperSvg.vue'
import StudentSvg from '@/components/icons/title-headline/StudentSvg.vue'
</script>

<template>

  <section class="card-description-container">

    <div class="grid-item">

      <div class="grid-image">
        <HouseSvg class="icon" />
      </div>

      <div class="grid-container">
        <div class="grid-details">
          <h3 class="title">
            Familiar
          </h3>
          <span class="description">
            $100
          </span>
        </div>
        <div class="location">
          <p>Económico, perfecto para familias, con una sola contraseña que facilita el acceso
            para todos, seguridad avanzada que protege tus datos familiares</p>
        </div>
      </div>

    </div>

    <div class="grid-item">

      <div class="grid-image">
        <BusinessSvg class="icon" />
      </div>

      <div class="grid-container">
        <div class="grid-details">
          <h3 class="title">
            Empresa
          </h3>
          <span class="description">
            $200
          </span>
        </div>
        <div class="location">
          <p>Gestión unificada con una contraseña o la opción
            de categorizarlos por sectores.</p>
        </div>
      </div>

    </div>

    <div class="grid-item">
      <div class="grid-image">
        <DeveloperSvg class="icon" />
      </div>
      <div class="grid-container">
        <div class="grid-details">
          <h3 class="title">
            Desarrollador
          </h3>
          <span class="description">
            $80
          </span>
        </div>
        <div class="location">
          <p>Soluciones a medida con sistemas adaptados a
            tus necesidades técnicas.</p>
        </div>
      </div>

    </div>

    <div class="grid-item">

      <div class="grid-image">
        <StudentSvg class="icon" />
      </div>
      <div class="grid-container">
        <div class="grid-details">
          <h3 class="title">
            Estudiante
          </h3>
          <span class="description">
            $30
          </span>
        </div>
        <div class="location">
          <p>Nuestro plan estudiantil es económico, ideal para presupuestos estudiantiles.
          </p>
        </div>
      </div>

    </div>

  </section>

</template>