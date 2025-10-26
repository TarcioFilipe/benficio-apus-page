<template>
  <div class="relative flex flex-col gap-4 items-center hover:opacity-90 hover:cursor-pointer transition">
    <div
      class="flex items-center justify-center z-10 
      w-16 h-16 lg:w-24 lg:h-24 bg-accent/80 rounded-full 
      overflow-hidden shadow-lg transform transition-transform duration-100
      border-2 border-border hover:border-accent dark:border-ring/80 dark:inset-shadow-sm 
      dark:inset-shadow-ring/50 dark:hover:border-primary
      hover:rotate-6 item-category"
      @click="goToCategory"
    >
      <v-icon :icon="icon" :size="isMobile ? '' : 'large'"></v-icon>
    </div>
    <p class="w-24 font-medium text-center text-sm text-card-muted-foreground lg:w-24 lg:text-md">{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: 'BenefitItem',
  props: {
    icon: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    },  
    objectPosition: {
      type: String,
      default: 'center'
    }
  },
  data () {
    return {
      isMobile: false,
    }
  },
  mounted() {
    this.isMobile = window.innerWidth <= 768
  },
  methods: {
     goToCategory() {
      const slug = this.category
      .toLowerCase()
      .replace(/\s+/g, '-')
        // .normalize('NFD')
        // .replace(/[\u0300-\u036f]/g, '') 
        // .replace(/[^a-z0-9-]/g, '');   

      this.$router.push({
        path: `/beneficios/${slug}`,
        query: {
          label: this.text
        }
      });
    }
  }
}
</script>

<style scoped >

 .item-category {
  transition: all 0.3s ease;
 }
</style>