<script setup lang="ts">
import './join.scss'

import Register from '~/components/login/register/index.vue'
import Option from '~/components/login/option/index.vue'
import Create from '~/components/login/create/index.vue'
import Login from '~/components/login/login/index.vue'

</script>

<template>
  <section class="join-container">

    <div class="join">

      <div class="logo">

        <h1>Mi<span>Password</span></h1>

        <NuxtPicture
          src="/logo-mipassword.png"
          alt="Logo"
          format="png"
          sizes="100vw xs:300px sm:500px"
          width="320"
          height="340"
        />
      </div>

      <div class="login">

        <div class="title">
          <h3>
            Únete hoy.
          </h3>
        </div>

        <Register />
        <Option />
        <Create />
        <Login />

      </div>
    </div>

  </section>
</template>