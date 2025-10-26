<template>
  <div class="min-h-screen flex flex-col">
    <HeaderComponent />
    
    <main class="flex-1 bg-card text-card-foreground">
      <router-view />
    </main>

    <FooterComponent />
  </div>
</template>

<script setup>
import HeaderComponent from '@/components/Header.vue'
import FooterComponent from '@/components/Footer.vue'
</script>
