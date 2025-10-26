<template>
  <v-app>
    <v-main>
      <DefaultLayout/>
    </v-main>
  </v-app>
</template>

<script >
  import DefaultLayout from '@/layouts/DefaultLayout.vue';

  export default {
    components: {
      DefaultLayout
    },
    name: 'App',
    data() {
      return{
        
      }
    }
  }
</script>
