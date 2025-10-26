<template>
  <v-toolbar :elevation="2" class="bg-header text-foreground transition-colors duration-300" height="150"
    style="overflow: visible !important;">
    <v-toolbar-title class="text-lg" style="overflow: visible !important;">
      <template v-slot:text>
        <v-container style="overflow: visible !important;">
          <div class="flex flex-row items-end sm:items-center w-full">
            <div class="flex flex-col items-start justify-center sm:flex-row sm:items-center sm:gap-4 w-10/12 lg:w-8/12">
              <div class="flex w-3/12">
                <v-img lazy-src="/images/apus_logo_new.png"
                  :src="isDark ? '/images/logo_branca.png' : '/images/apus_logo_new.png'" class="cursor-pointer"
                  min-height="56" width="100%" cover @click="() => $router.push('/')">
                </v-img>
              </div>
              <div class="w-full" style="position: relative; overflow: visible;">
                <v-text-field v-model="searchQuery" label="O que você procura" append-inner-icon="mdi-magnify"
                  density="comfortable" variant="outlined" hide-details single-line clearable>
                </v-text-field>
                <v-list v-if="searchResults.length"
                  class="bg-card text-card-foreground rounded-b-lg shadow absolute top-12 z-50 w-full h-[200px] overflow-y-auto">
                  <v-list-item v-for="(item, i) in searchResults" :key="i" @click="handleBenefitClick(item)"
                    :prepend-avatar="item.image" :title="item.name" :subtitle="item.description"
                    class="text-card-foreground">
                    <template v-slot:prepend-avatar="{ props }">
                      <v-avatar icon="$vuetify" :image="props" size="50"></v-avatar>
                    </template>
                  </v-list-item>
                </v-list>
              </div>
            </div>

            <div class="hidden lg:flex flex-row w-4/12 justify-end">
              <v-btn variant="flat" size="large"
                class="text-none text-subtitle-1 text-card mr-2 rounded-xl bg-card-foreground">
                Login
              </v-btn>
              <v-btn variant="flat" size="large"
                class="text-none text-subtitle-1 text-card mr-2 rounded-xl bg-card-foreground">
                Registre-se
              </v-btn>
            </div>
            <v-btn icon variant="text" @click="toggleTheme" :title="isDark ? 'Modo claro' : 'Modo escuro'" class="ml-2">
              <v-icon :icon="isDark ? 'mdi-white-balance-sunny' : 'mdi-moon-waning-crescent'" />
            </v-btn>
            <div class="flex justify-end lg:hidden w-2/12">
              <v-menu transition="slide-x-transition" location="start">
                <template v-slot:activator="{ props }">
                  <v-btn icon="mdi-dots-vertical" variant="text" v-bind="props"></v-btn>
                </template>

                <v-list>
                  <v-list-item v-for="(item, i) in items" :key="i" :value="i" @click="() => { handleLink() }">
                    <v-list-item-title>
                      {{ item.title }}
                    </v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </div>
          </div>
        </v-container>
      </template>
    </v-toolbar-title>
  </v-toolbar>
</template>

<script>
import benefits from '@/data/benefits.js'

export default {
  name: 'Header',
  data() {
    return {
      searchQuery: null,
      searchResults: [],
      isDark: false,
      items: [
        { title: 'Login' },
        { title: 'Registre-se' },
      ],
    }
  },
  methods: {
    handleBenefitClick(item) {
      window.open("https://cartaomasterclin.com.br/usuarios/cadastro", "_blank");
      this.searchQuery = null;
      this.searchResults = []
    },
    handleLink(item) {
      window.open("https://cartaomasterclin.com.br/usuarios/cadastro", "_blank");
    },
    toggleTheme() {
      this.isDark = !this.isDark
      document.documentElement.classList.toggle('dark', this.isDark)
    },
  },
  watch: {
    searchQuery(val) {
      if (val && val.length >= 3) {
        const lower = val.toLowerCase()
        this.searchResults = benefits.filter(item =>
          item.name.toLowerCase().includes(lower) ||
          item.description.toLowerCase().includes(lower)
        )
      } else {
        this.searchResults = []
      }
    }
  },
}
</script>


<style>
.v-toolbar-title__placeholder {
  overflow: visible !important;
}

.v-toolbar__content {
  overflow: visible !important;
}
</style>