<script lang="ts" setup>
import './vault.scss'
import { ref } from 'vue'
import FilterSvg from '~/components/icons/FilterSvg.vue'

import { accountInfo } from '~/helper/accounts-info'
import { sections } from '~/helper/accounts-user'
import type { Section } from '~/helper/accounts-user'

let selectedSection = ref<Section | null>(null)
let breadcrumb = ref('')
let prevSelectedSectionIndex = ref<number | null>(null)
let main = ref(true)

function toggleSection(index: number) {
  
  if (index !== prevSelectedSectionIndex.value) {
    selectedSection.value = sections[index]
  }
  prevSelectedSectionIndex.value = index

  const section = sections[index]

  selectedSection.value = section
  breadcrumb.value = section.breadcrum
  main.value = false
}

</script>

<template> 
  <section class="vault-container">

    <div class="categories">

      <div class="title">
        <div class="desktop-only">
          <p>Categories</p>
        </div>
        <div class="icon-bg">
          <FilterSvg class="icon" />
        </div>
      </div>

      <div class="items" v-for="(section, index) in sections" :key="index">
        <div class="accounts" @click="toggleSection(index)">

          <div class="svg-bg">
            <div class="icon" v-for="icons in accountInfo" :key="icons.name">
              <component v-if="section.breadcrum === icons.name" :is="icons.component" />
            </div>
          </div>

          <div class="info desktop-only">
            <span>{{ section.breadcrum }}</span>
            <p>{{ section.email }}</p>
          </div>

        </div>
      </div>

    </div>

    <div class="content-items">

      <div v-if="main" class="main">
        <h1 class="title">Documentation</h1>

        <div class="article-title">
          <h3>Installation</h3>
        </div>

        <p class="description">
          The documentation is intended to guide the installation of our infrastructure services.
        </p>

        <p>External information</p>
      </div>

      <div v-if="selectedSection" class="main">
        <h1 class="title">{{ breadcrumb }}</h1>
        <h1>{{ selectedSection.email }}</h1>
        <p>{{ selectedSection.website }}</p>
        <p v-for="(tags, index) in selectedSection.tags" :key="index">
          {{ tags }}
        </p>
      </div>

    </div>

  </section>

</template>
